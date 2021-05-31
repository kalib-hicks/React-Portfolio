import React from 'react';
import img1 from '../../assets/horiseon.jpg';
import img2 from '../../assets/run-buddy.jpg';
import img3 from '../../assets/password-generator.png';
import img4 from '../../assets/javaquiz.png';
import img5 from '../../assets/bq1.jpg';
import img6 from '../../assets/Love-monster.png';


function Work() {
  
  return (
      
    <section class= "work" id="work">
    <h2>Work</h2>
    <div class="work-grid-container">
      
    <div class="work-grid-item"><a href="https://github.com/kalib-hicks/Horiseon"target="_blank">
    <img class="workimg" alt="horiseon" src={img1}/>
    <h3>Horiseon-SEO-managment</h3>
    <h4>HTML/CSS</h4>
    </a>
    </div>
    <div class="work-grid-item"><a href="https://github.com/kalib-hicks/run-buddy"target="_blank">
    <img class="workimg" alt="Run-Buddy" src={img2}/>
    <h3>Run-Buddy</h3>
    <h4>HTML/CSS</h4>
    </a>
    </div> 
    
    <div class="work-grid-item"><a href="https://github.com/kalib-hicks/RandomPasswordGenerator"target="_blank">
      <img class="workimg" alt="Passcoder" src={img3}/>
      <h3>Password Generator</h3>
      <h4>HTML/CSS/JS</h4>
    </a>
    </div>
    
      <div class="work-grid-item"><a href="https://github.com/kalib-hicks/code-quiz"target="_blank">
        <img class="workimg" alt="Javaquiz" src={img4}/>
        <h3>Javascript Quiz</h3>
        <h4>HTML/CSS/JS</h4>
      </a>
      </div>

          <div class="work-grid-item"><a href="https://github.com/stewk033/browser-quest"target="_blank">
            <img class="workimg" alt="browser-quest" src={img5}/>
            <h3>Browserquest</h3>
            <h4>HTML/CSS/JS</h4>
          </a>
          </div>
     </div>
    </section>
   
  );
}

export default Work;