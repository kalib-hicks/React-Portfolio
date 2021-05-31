import './style.css';

const Home = () => {
    return(
        <div className='home'>
            <div className='title'>
                <h1>
                    <p>Hi, I'm Kalib!</p>
                    <p>I am a 23 year old software engineering student. Feel free to check out my resume!</p>
                </h1>
                <div className='person'>
                    <img src={`${process.env.PUBLIC_URL}/blue.jpg`} alt="Kalib hicks" />
                </div>
            </div>
        </div>
    )
}

export default Home