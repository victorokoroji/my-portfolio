import projectDatas from './projectDatas.js';

document.querySelector('.works').innerHTML = projectDatas
  .map(
    (data) => `
    <section class="project">
<div class="project-img">
<img
src= ${data.featuredImage}
class="snapshoot"
alt="Tonic project image"
/>
</div>
<div class="project-description">
<h2 class="project-title">${data.name}</h2>
<ul class="project-author">
<li>${data.author}</li>
<li>${data.stack}</li>
<li>${data.year}</li>
</ul>
<p class="project-text"
>${data.description}</p
>
<ul class="project-tools">
<li>${data.technologies[0]}</li>
<li>${data.technologies[1]}</li>
<li>${data.technologies[2]}</li>
</ul>
<button type="button" class="btn">See Project</button>
</div>
</section>
    `,
  )
  .join('');

for (let i = 0; i <= projectDatas.length; i += 1) {
  if (i % 2 === 1) {
    document.querySelectorAll('.project')[i].classList.add('order');
  }
}

// modals user interface

document.querySelector('.modals').innerHTML = projectDatas
  .map(
    (data) => `
<div class="modal">
<div class="modal-container">
<div class="modal-title">
<h2 class="project-title">${data.name}</h2>
<div class="close">
<i class="fa fa-times fa-1x"></i>
</div>
</div>
<ul class="project-author">
<li>${data.author}</li>
<li>${data.stack}</li>
<li>${data.year}</li>
</ul>
<div class="project-img">
<img
src= ${data.featuredImage}
class="snapshoot"
alt="Tonic project image"
/>
</div>
<div class="modal-description">
<p class="project-text">${data.description}</p>
<div class="modal-tools">
<ul class="project-tools">
<li>${data.technologies[0]}</li>
<li>${data.technologies[1]}</li>
<li>${data.technologies[2]}</li>
</ul>
<span></span>
<div class="buttons">
<a href="${data.liveVersion}" class="modal-button" target="_blank" rel="noopener noreferrer">See Live <img src="./assets/images/Icon.png" alt="live site icon" class="modal-img"/></a>
<a href="${data.source}" class="modal-button" target="_blank" rel="noopener noreferrer">See Source <img src="./assets/images/github.png" alt="github icon" class="modal-img"/></a>
</div>
</div>
</div>
</div>
</div>`,
  )
  .join('');

// event listeners for opening modal on button click
const modalButtons = Array.from(document.querySelectorAll('.btn'));
const modals = Array.from(document.querySelectorAll('.modal'));

const modalButtonZip = modalButtons.map((button, i) => [button, modals[i]]);
modalButtonZip.forEach((pair) => {
  pair[0].addEventListener('click', () => {
    pair[1].style.display = 'block';
  });
});

// event listener for closing modal on button click
document.querySelectorAll('.close').forEach((close) => {
  close.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach((modal) => {
      modal.style.display = 'none';
    });
  });
});
