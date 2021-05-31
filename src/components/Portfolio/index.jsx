import './style.css'

const Portfolio = () => {
    return (
        <div className='row small-up-2 medium-up-3 large-up-4'>
            {/*Passwrod Generator */}
            <div className='column'>
            <a href='https://github.com/kalib-hicks/RandomPasswordGenerator' target='_blank'>
                <img src={`${process.env.PUBLIC_URL}/PasswordGenerator.jpg`} />
            </a>
            <h5>Password Generator</h5>
            <h6>HTML/CSS/JS</h6>
            </div>
            {/*Run Buddy */}
            <div className='column'>
            <a href='https://github.com/kalib-hicks/run-buddy' target='_blank'>
                <img src={`${process.env.PUBLIC_URL}/runbuddy.jpg`} />
            </a>
            <h5>Run Buddy</h5>
            <h6>HTML/CSS</h6>
            </div>
            
            {/*Coding Quiz */}
            <div className='column'>
            <a href='https://github.com/kalib-hicks/code-quiz' target='_blank'>
                <img src={`${process.env.PUBLIC_URL}/CodingQuiz.jpg`} />
            </a>
            <h5>Coding Quiz</h5>
            <h6>HTML/CSS/JS</h6>
            </div>
            {/*Weather App*/}
            <div className='column'>
            <a href='https://github.com/kalib-hicks/weather-dashboard' target='_blank'>
                <img src={`${process.env.PUBLIC_URL}/WeatherApp.jpg`} />
            </a>
            <h5>Weather App</h5>
            <h6>HTML/CSS/JS/APIs</h6>
            </div>
            {/*NOVID*/}
            <div className='column'>
            <a href='https://github.com/stewk033/cov-rid/tree/develop' target='_blank'>
                <img src={`${process.env.PUBLIC_URL}/Novid.jpg`} />
            </a>
            <h5>CovRid</h5>
            <h6>HTML/CSS/JS/APIs</h6>
            </div>
        </div>
    )
}

export default Portfolio