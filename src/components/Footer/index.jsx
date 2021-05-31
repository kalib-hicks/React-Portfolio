import './style.css'

const Footer = () => {
    return (
        <footer>
      <a
        href="https://www.linkedin.com/in/kalib-hicks-6031891b9/"
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/linkedin-logo-copy.png`}
          alt="LinkedIn-icon"
        />
      </a>
      <a href="https://github.com/kalib-hicks" target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/github.png`}
          alt="Github-icon"
        />
      </a>
        </footer>
    )
}

export default Footer