import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {
  return(
    <section id="projects" className="projects">
      <h2 className="projects__title">Projects developed by me</h2>
      {Projects_details.map(project => (
        <div className="projects__project-container">
          <div className="projects__project-container__image-container">
            <p>{project.name}</p>
            <a href={project.href} target="_blank">View</a>
            <img src={project.image} alt={project.alt}/>
          </div>
          <div className="projects__project-container__technology-container">
            <h4>Used technologies</h4>
            <ul>
            {project.technologies.map((technology) => (
              <li key={technology.id}>{technology.technology}</li>
            ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}

const Projects_details = [
  {
    name: "Fantastic Beasts and Where to Find Them Zoo",
    href: "http://fantasticbeasts.us.to/",
    image: "/images/fantasticbeasts.png",
    alt: "Website Zoo Fantastic Beasts",
    technologies: [
      {
        id: uuidv4(),
        technology: "HTML5"
      },
      {
        id: uuidv4(),
        technology: "JAVASCRIPT"
      },
      {
        id: uuidv4(),
        technology: "SASS"
      },
      {
        id: uuidv4(),
        technology: "JQUERY"
      },
      {
        id: uuidv4(),
        technology: "AJAX"
      },
      {
        id: uuidv4(),
        technology: "PHP7"
      },
      {
        id: uuidv4(),
        technology: "MYSQL"
      },
      {
        id: uuidv4(),
        technology: "BOOTSTRAP5"
      },
      {
        id: uuidv4(),
        technology: "APIs"
      },
      {
        id: uuidv4(),
        technology: "A11Y"
      }
    ]
  },
  {
    name: "TechQuiz game",
    href: "https://techquiz2021.netlify.app/",
    image: "/images/techquiz.png",
    alt: "Game TechQuiz",
    technologies: [
      {
        id: uuidv4(),
        technology: "HTML5"
      },
      {
        id: uuidv4(),
        technology: "JAVASCRIPT"
      },
      {
        id: uuidv4(),
        technology: "SASS"
      },
      {
        id: uuidv4(),
        technology: "PWA"
      }
    ]
  },
  {
    name: "My inventory",
    href: "https://my-amazing-inventory.netlify.app/",
    image: "/images/my-inventory.png",
    alt: "My inventory PWA app",
    technologies: [
      {
        id: uuidv4(),
        technology: "REACT.JS"
      },
      {
        id: uuidv4(),
        technology: "CSS"
      },
      {
        id: uuidv4(),
        technology: "PWA"
      }
    ]
  }
]

export default Projects;