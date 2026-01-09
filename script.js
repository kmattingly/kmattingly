// script.js
const posts = [
  {
    title: "My First Post",
    image: "images/post1.jpg",
    summary: "Welcome to my Y2K-inspired blog! This is where I share my retro vibes, fashion, and nostalgia.",
    link: "post1.html"
  },
  {
    title: "Retro Tech Love",
    image: "images/post2.jpg",
    summary: "Exploring my favorite gadgets and software from the early 2000s—nothing beats the old-school charm!",
    link: "post2.html"
  },
  {
    title: "Y2K Fashion Trends",
    image: "images/post3.jpg",
    summary: "Butterfly clips, low-rise jeans, and sparkly tops—here’s why I’m obsessed with Y2K fashion!",
    link: "post3.html"
  }
];

const postsContainer = document.querySelector(".posts");

posts.forEach(post => {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  postDiv.innerHTML = `
    <img src="${post.image}" alt="${post.title}">
    <h2>${post.title}</h2>
    <p>${post.summary}</p>
    <a class="btn" href="${post.link}">Read More</a>
  `;
  postsContainer.appendChild(postDiv);
});
