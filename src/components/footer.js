import React from "react"
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebook,
  // TiSocialTelegram,
} from "react-icons/ti"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-social">
          <div className="footer-social-text">Follow Us</div>
          <div className="footer-social-icons">
            <a
              target="_blank"
              href="https://twitter.com/cassypost"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="tw-icon">
                <TiSocialTwitter className="footer-social-icon" />
              </span>
            </a>
            {/* <a
              target="_blank"
              href="https://www.youtube.com/"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="yt-icon">
                <TiSocialYoutube className="footer-social-icon" />
              </span>
            </a> */}
            <a
              target="_blank"
              href="https://www.linkedin.com/company/cassypost"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="li-icon">
                <TiSocialLinkedin className="footer-social-icon" />
              </span>
            </a>
            {/* <a
              target="_blank"
              href="https://www.t.me/cassypost"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="li-icon">
                <TiSocialTelegram className="footer-social-icon" />
              </span>
            </a> */}
            <a
              target="_blank"
              href="https://www.facebook.com/cassypostmedia/"
              rel="noopener noreferrer"
            >
              <span className="icon-container" id="fb-icon">
                <TiSocialFacebook className="footer-social-icon" />
              </span>
            </a>
          </div>
        </div>
        <div>© {new Date().getFullYear()} cassypost </div>
      </div>
    </footer>
  )
}
export default Footer

