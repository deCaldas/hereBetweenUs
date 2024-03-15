import styles from "../app/page.module.css"
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyDate}>
        {/* Copyright information at the bottom */}
        <span>&copy;</span>
        {` `}
        {`${new Date().getFullYear()}`}
      </div>
      <div className={styles.icons}>
        {/* Icons in a single block */}
        <a href="https://github.com/deCaldas" target="_blank">
          <IoLogoGithub />
        </a>
        <a href="https://twitter.com/d_caldasCaridad" target="_blank">
          <IoLogoTwitter />
        </a>
        <a href="https://www.linkedin.com/in/diegowhiskey" target="_blank">
          <IoLogoLinkedin />
        </a>
      </div>
      <div className={styles.branding}>
        {/* Branding in a separate block */}
        <h6>De Caldas</h6>
      </div>
    </footer>
  )
}

export default Footer
