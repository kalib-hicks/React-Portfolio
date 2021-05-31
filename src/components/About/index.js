import React from 'react';
import clownImage from '../../assets/ss13clown.jpg';
function About() {
  return (
    <div class="about-me"id="about-me">
 
        <img src={clownImage} id="myimage"  alt="Flip Flap the Traitor"/>
          <div class="abouttxt">
          <h2 class="section-title">About Me</h2>
      <p> My name is Kalib Hicks. I grew up in North Carolina but now reside in Florida. I am 23 years old and am about to recieve my certificate of Full Stack Development from UCF this summer. I graduated high school early and took that oppertunity to move to Florida and attend the University of Florida where I studied video game design. I am now wanting to combine my video game knowledge with my coding knowledge to build and create amazing expereinces.
        </p>
      </div>
      </div>

  );
}

export default About;