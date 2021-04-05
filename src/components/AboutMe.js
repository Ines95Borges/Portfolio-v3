import React, {useEffect, useRef} from 'react';

const AboutMe = () => {
  const myAge = useRef(null);

  useEffect(() => {
    const now = new Date();
    const currentDay = now.getDate();
    const currentMonth = now.getMonth() + 1;
    if(currentDay >= 20 && currentMonth >= 5){
      myAge.current.innerHTML = now.getFullYear() - 1995;
    }else{
      myAge.current.innerHTML = now.getFullYear() - 1995 - 1;
    }
  }, [])

  return(
    <section id="about-me" className="about-me">
      <img src="/images/hufflepuff.png" alt="" className="about-me__hufflepuff-image" />
      <p className="about-me__text">Hello, I'm Inês Borges. I am <span ref={myAge} className="about-me__my-age"></span> years old and I live in Guimarães, Portugal. I like to watch videos on youtube and the colour blue. I am studying to become a Full Stack Developer.</p>
    </section>
  )
}

export default AboutMe;