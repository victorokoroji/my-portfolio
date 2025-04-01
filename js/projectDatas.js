const projectDatas = [
  {
    name: "UnykEd Web App",
    author: "OKOROJI VICTOR",
    stack: "Front-End",
    year: 2024,
    description:
      "UnykEd is an education management software empowering students to discover the best colleges, and scholarships worldwide for there higher studies with access to personalized mentorship.",
    featuredImage: "./assets/images/unyked.png",
    technologies: ["Next.js", "Typescript", "TailwindCSS"],
    liveVersion: "https://unyked.com",
    source: null,
  },
  {
    name: "Hydrogen Payroll",
    author: "OKOROJI VICTOR",
    stack: "Front-End",
    year: 2023,
    description:
      "Hydrogen Payroll is a payroll management system that helps organizations manage their payroll processes efficiently and accurately. It automates calculations, tax deductions, and generates payslips for employees, ensuring compliance with labor laws and regulations.",
    featuredImage: "./assets/images/payroll.png",
    technologies: ["React.js", "Typescript", "TailwindCSS"],
    liveVersion: "http://hydrogenpayroll.netlify.app",
    source: null,
  },
  {
    name: "HydrogenHR",
    author: "OKOROJI VICTOR",
    stack: "Front-End",
    year: 2023,
    description:
      "HydrogenHR is a human resource management system that helps organizations manage their employee data, recruitment processes, performance evaluations, and other HR-related tasks efficiently. It streamlines HR operations and enhances employee engagement.",
    featuredImage: "./assets/images/hr.png",
    technologies: ["React.js", "Typescript", "TailwindCSS"],
    liveVersion: "https://hydrogenhr.com",
    source: null,
  },
  {
    name: "CatchUp App",
    author: "OKOROJI VICTOR",
    stack: "Front-End",
    year: 2022,
    description:
      "This is a web application that provides a platform for users to schedule hangout or events and invite there friends and/or family to participate in the event.",
    featuredImage: "./assets/images/catchup.png",
    technologies: ["React", "ContextApi", "TailwindCSS"],
    liveVersion: "https://catchup.rsvp",
    source: "https://github.com/workshopapps/dinnerwithfriends.web",
  },
  {
    name: "Pipsgod Academy",
    author: "OKOROJI VICTOR",
    stack: "Front-End",
    year: 2022,
    description:
      "This is an online learning platform for users interested in learning FOREX trading, This website is built with comprehensive courses from the basics of forex market to advanced trading strategies.",
    featuredImage: "./assets/images/pipsgod.png",
    technologies: ["React-Typescript", "React-query", "TailwindCSS"],
    liveVersion: "https://pipsgod.netlify.app",
    source: "https://github.com/vickymarz/pips-god",
  },
  // {
  //   name: 'Scotland Adventure',
  //   author: 'OKOROJI VICTOR',
  //   stack: 'Front-End',
  //   year: 2022,
  //   description: 'This is a story telling web application that provides a platform for
  //   story tellers who want to share and document their adventures about several locations in
  // Scotland, to post stories which may
  //  include text, photos, and multimedia about their experience.',
  //   featuredImage: './assets/images/scotland.png',
  //   technologies: ['html', 'css', 'javascript'],
  //   liveVersion: 'https://scotlandadventureapp.herokuapp.com',
  //   source: 'https://github.com/vickymarz/scotland-adventures',
  // },

  {
    name: "Camotea app",
    author: "OKOROJI VICTOR",
    stack: "Front-End",
    year: 2022,
    description:
      "This is a web app built to provide sleep restriction therapy for people finding itn difficult to sleep. The app helps to monitor there sleep efficiency and provide suggestions on the best way to improve there sleep.",
    featuredImage: "../assets/images/camotea.png",
    technologies: ["React", "Typescript", "TailwindCSS"],
    liveVersion: "https://camotea.netlify.app/",
    source: "https://github.com/vickymarz/cameo-tea",
  },

  {
    name: "Space Travelers Hub",
    author: "OKOROJI VICTOR",
    stack: "Front-End",
    year: 2022,
    description:
      "Space Travelers Hub is a web application made for a company that provides commercial and scientific space travel services. The application allows users (future clients) to book rockets and join selected space missions.",
    featuredImage: "../assets/images/space-travellers-hub.png",
    technologies: ["React", "Redux", "CSS"],
    liveVersion: "https://space-travellers-booking.netlify.app/",
    source: "https://github.com/vickymarz/space-travellers-hub",
  },
  {
    name: "Todolist App",
    author: "OKOROJI VICTOR",
    stack: "Front-End",
    year: 2022,
    description:
      '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    featuredImage: "./assets/images/todolist.png",
    technologies: ["html", "css", "javascript"],
    liveVersion: "https://awesometodos.netlify.app/",
    source: "https://github.com/vickymarz/todo-list",
  },
  {
    name: "Awesome Books",
    author: "OKOROJI VICTOR",
    stack: "Front-End",
    year: 2022,
    description:
      "This website is dedicated for users to be able to store there collection of books they would love to read or the books they are reading. They can add new books and delete existing books with ease.",
    featuredImage: "./assets/images/awesomebooks.png",
    technologies: ["html", "css", "javascript"],
    liveVersion: "https://bookshelve.netlify.app/",
    source: "https://github.com/vickymarz/awesome-books",
  },
  {
    name: "Calculator App",
    author: "OKOROJI VICTOR",
    stack: "Front-End",
    year: 2022,
    description:
      'Calculator App" is a web app for all lovers of mathematics. It is a Single Page Application that allows users to make simple calculations.',
    featuredImage: "./assets/images/calculator.png",
    technologies: ["React", "css", "jest"],
    liveVersion: "https://math-magician-calculator.netlify.app/",
    source: "https://github.com/vickymarz/math-magician",
  },
  {
    name: "Bookstore",
    author: "OKOROJI VICTOR",
    stack: "Front-End",
    year: 2022,
    description:
      "This is a React application for managing books you want to read. It tracks your progress and makes the reading the books enlisted as a goal.",
    featuredImage: "../assets/images/bookstore.png",
    technologies: ["Redux", "React", "CSS"],
    liveVersion: "https://mybookstorewebapp.netlify.app/",
    source: "https://github.com/vickymarz/bookstore",
  },
  {
    name: "Budget Manager",
    author: "OKOROJI VICTOR",
    stack: "Full-Stack",
    year: 2022,
    description:
      "A Budget-app is mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
    featuredImage: "./assets/images/budget.png",
    technologies: ["Ruby on Rails", "PostgreSQL", "CSS"],
    liveVersion: "https://my-budget-manager.onrender.com/",
    source: "https://github.com/vickymarz/budget-app",
  },
  // {
  //   name: 'My Portfolio',
  //   author: 'OKOROJI VICTOR',
  //   stack: 'Front-End',
  //   year: 2022,
  //   description: 'This is my Portfolio website built with HTML, CSS, and Javascript. This website keeps track of all the projects I have worked on, including projects live versions and link to the code. This is a way for me to show what I can do as a software developer.',
  //   featuredImage: '../assets/images/portfolio.png',
  //   technologies: ['HTML', 'CSS', 'Javascript'],
  //   liveVersion: 'https://victorokoroji.netlify.app/',
  //   source: 'https://github.com/vickymarz/my-portfolio',
  // },
  {
    name: "Always Care",
    author: "OKOROJI VICTOR",
    stack: "Full-Stack",
    year: 2022,
    description:
      "Alwayscare doctors appointment app is a software application that is especially meant to help patients manage and schedule appointments with the doctors or opt for a real-time chat.",
    featuredImage: "./assets/images/alwayscare.png",
    technologies: ["React", "Redux", "Ruby on Rails"],
    liveVersion: "https://doctors-appointment-app-2k1t.onrender.com/",
    source: "https://github.com/vickymarz/doctors-appointment-frontend",
  },
];

export default projectDatas;
