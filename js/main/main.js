import { renderBlog } from '../render/render.js';

const blogListElement = document.getElementById('blog-list');

// Define your blog metadata here
const blogs = [
  {
    id: 'bali-pratha',
    title: 'Bali Pratha in Hinduism',
    summary: 'Explore the roots, interpretations, and evolving views around animal offerings in Hinduism.',
    file: 'content/bali-pratha-in-hinduism.json'
  }

  // You can add more blogs in this array later
];

// Create a blog card element
function createBlogCard(blog) {
  const card = document.createElement('div');
  card.className = 'blog-card';
  card.innerHTML = `
    <h3>${blog.title}</h3>
    <p>${blog.summary}</p>
    <button data-id="${blog.id}" data-file="${blog.file}">Read More</button>
  `;
  return card;
}

// Load blog list onto homepage
function loadBlogList() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <section class="intro">
      <h2>Welcome to the Philosophy Blog</h2>
      <p>Explore ideas, thinkers, and schools of thought that shape our world.</p>
    </section>
    <section id="blog-list" class="blog-grid"></section>
  `;

  const blogListElement = document.getElementById('blog-list');
  blogs.forEach(blog => {
    const card = createBlogCard(blog);
    blogListElement.appendChild(card);
  });

  setupEventDelegation();
}

// Event delegation for blog buttons
function setupEventDelegation() {
  const blogList = document.getElementById('blog-list');

  blogList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const file = e.target.getAttribute('data-file');
      renderBlog(file);
    }
  });
}

// Initialize site
loadBlogList();
