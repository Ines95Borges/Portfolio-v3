import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Experience = () => {
  return(
    <section id="experience" className="experience">
      <h2>My skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            <div>{skill.skill}</div>
            {Array(skill.stars).fill(<span className="experience__mark"></span>)}
            {Array(10 - skill.stars).fill(<span></span>)}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience;

const skills = [
  {
    id: uuidv4(),
    skill: "HTML5",
    stars: 7
  },
  {
    id: uuidv4(),
    skill: "CSS",
    stars: 7
  },
  {
    id: uuidv4(),
    skill: "SASS",
    stars: 5
  },
  {
    id: uuidv4(),
    skill: "JAVASCRIPT",
    stars: 6
  },
  {
    id: uuidv4(),
    skill: "SQL",
    stars: 3
  },
  {
    id: uuidv4(),
    skill: "PHP",
    stars: 3
  },
  {
    id: uuidv4(),
    skill: "PWA",
    stars: 5
  },
  {
    id: uuidv4(),
    skill: "BOOTSTRAP5",
    stars: 4
  },
  {
    id: uuidv4(),
    skill: "PYTHON",
    stars: 3
  },
  {
    id: uuidv4(),
    skill: "TEAMWORK",
    stars: 9
  },
  {
    id: uuidv4(),
    skill: "MOTIVATION",
    stars: 10
  },
  {
    id: uuidv4(),
    skill: "COMMUNICATION SKILLS",
    stars: 8
  },
  {
    id: uuidv4(),
    skill: "ENGLISH",
    stars: 9
  },
  {
    id: uuidv4(),
    skill: "GIT & GITHUB",
    stars: 4
  },
  {
    id: uuidv4(),
    skill: "COOPERATION",
    stars: 9
  },
  {
    id: uuidv4(),
    skill: "PROBLEM SOLVER",
    stars: 9
  },
  {
    id: uuidv4(),
    skill: "HARD-WORKING",
    stars: 10
  },
  {
    id: uuidv4(),
    skill: "ORGANISATION",
    stars: 8
  }
]