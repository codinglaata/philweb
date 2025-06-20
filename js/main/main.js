import { renderBlog } from '../render/render.js';

const blogListElement = document.getElementById('blog-list');

const blogs = [
  {
    id: 'stoicism',
    title: 'Understanding Stoicism',
    summary: 'An introduction to Stoic philosophy and its core principles.',
    file: 'content/stoicism.json'
  },
  // Add more blog metadata here
];

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

function loadBlogList() {
  blogListElement.innerHTML = '';
  blogs.forEach(blog => {
    const card = createBlogCard(blog);
    blogListElement.appendChild(card);
  });
}

function setupEventDelegation() {
  blogListElement.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const file = e.target.getAttribute('data-file');
      renderBlog(file);
    }
  });
}

loadBlogList();
setupEventDelegation();
