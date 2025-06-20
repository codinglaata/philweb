export async function renderBlog(filePath) {
  const main = document.getElementById('content');

  try {
    const res = await fetch(filePath);
    const blogData = await res.json();

    let html = `<article class="blog-full">
      <h2>${blogData.title}</h2>
      <p><em>${blogData.date}</em></p>`;

    blogData.sections.forEach(section => {
      html += `
        <h3>${section.heading}</h3>
        <p>${section.content}</p>
      `;
    });

    html += `<button id="go-back">← Back</button></article>`;
    main.innerHTML = html;

    document.getElementById('go-back').onclick = () => window.location.reload(); // Simplest way to go back
  } catch (err) {
    main.innerHTML = `<p>Error loading blog: ${err.message}</p>`;
  }
}
