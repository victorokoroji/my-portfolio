const projectDatas = [
	{
		name: 'Tonic',
		author: 'CANOPY',
		stack: 'Backend Dev',
		year: 2015,
		description:
			'A daily selection of privately personalized reads; no accounts or sign-ups required.',
		featuredImage: './assets/images/Snapshoot-Portfolio-3.png',
		technologies: ['html', 'css', 'javascript'],
		liveVersion: null,
		source: null,
	},
	{
		name: 'Multi-Post Stories',
		author: 'FACEBOOK',
		stack: 'Full Stack Dev',
		year: 2015,
		description:
			'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
		featuredImage: './assets/images/Snapshoot-Portfolio-4.png',
		technologies: ['html', 'css', 'javascript'],
		liveVersion: null,
		source: null,
	},
	{
		name: 'Tonic',
		author: 'FACEBOOK 360',
		stack: 'Full Stack Dev',
		year: 2015,
		description:
			"Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
		featuredImage: './assets/images/Snapshoot-Portfolio.png',
		technologies: ['html', 'css', 'javascript'],
		liveVersion: null,
		source: null,
	},
	{
		name: 'Uber Navigation',
		author: 'Uber',
		stack: 'Lead Developer',
		year: 2015,
		description:
			"Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
		featuredImage: './assets/images/Snapshoot-Portfolio.png',
		technologies: ['html', 'css', 'javascript'],
		liveVersion: null,
		source: null,
	},
]

document.querySelector('.modals').innerHTML = projectDatas.map(
	data => `
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
    <p class="project-text"
      >${data.description}</p
    >
    <div class="modal-tools">
      <ul class="project-tools">
        <li>${data.technologies[0]}</li>
        <li>${data.technologies[1]}</li>
        <li>${data.technologies[2]}</li>
      </ul>
      <div class="buttons">
        <a href="${data.liveVersion}" class="modal-button">See Live</a>
        <a href="${data.source}" class="modal-button">See Source</a>
      </div>
    </div>
  </div>
  </div>
  </div>`,
)
