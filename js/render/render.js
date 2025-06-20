// render.js (modular version)
export async function renderBlog(filePath) {
  const main = document.getElementById('content');

  try {
    const res = await fetch(filePath);
    const blogData = await res.json();

    const articleHTML = buildBlogHTML(blogData);
    main.innerHTML = articleHTML;

    document.getElementById('go-back').onclick = () => window.location.reload();
  } catch (err) {
    main.innerHTML = `<p>Error loading blog: ${err.message}</p>`;
  }
}

// Build full blog HTML
function buildBlogHTML(data) {
  let html = `<article class="blog-full">
    <h2>${data.title}</h2>
    <p><em>${data.date}</em></p>`;

  data.sections.forEach(section => {
    html += `<h3>${section.heading}</h3>`;
    html += buildSubsectionsHTML(section.subsections || []);
  });

  html += `<button id="go-back">← Back</button></article>`;
  return html;
}

// Build subsections block
function buildSubsectionsHTML(subsections) {
  let html = '';
  subsections.forEach(sub => {
    if (sub.subheading) {
      html += `<p><strong>${sub.subheading}</strong></p>`;
    }
    if (sub.quote) {
      html += `<blockquote>${sub.quote}</blockquote>`;
    }
    if (sub.quote1) {
      html += `<blockquote>${sub.quote1}</blockquote>`;
    }
    if (sub.quote2) {
      html += `<blockquote>${sub.quote2}</blockquote>`;
    }
    if (sub.note) {
      html += `<p><em>${sub.note}</em></p>`;
    }
    if (sub.link) {
      html += renderLink(sub.link);
    }
    if (sub.link1) {
      html += renderLink(sub.link1);
    }
    if (sub.link2) {
      html += renderLink(sub.link2);
    }
  });
  return html;
}

// Render individual links
function renderLink(linkObj) {
  return `<p><a href="${linkObj.url}" target="_blank">${linkObj.label}</a> (${linkObj.note})</p>`;
}
