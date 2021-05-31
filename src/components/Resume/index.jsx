const Resume = () => {
    return (
        <div className="tech-res row">
            <div className='column'>
            <a href='/Kalib Hicks Resume 2021 - tech.docx' download>
                <img src={`${process.env.PUBLIC_URL}/tech-resume.png`} />
            </a>
            <h5>Resume</h5>
            <h6>Click to Download</h6>
            </div>
        </div>
    )
}

export default Resume