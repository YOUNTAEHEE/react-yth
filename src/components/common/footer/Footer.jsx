import "./Footer.scss";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
export default function Footer() {
  const facebookURL = "https://www.facebook.com/";
  const twitterURL = "https://twitter.com/";
  const youtubeURL = "https://www.youtube.com/";
  return (
    <footer className="Footer">
      <div className="footerLeft">
        <h1>YOUN</h1>
        <p>175 Varrick Street, 3rd Floor. New York, NY 10014</p>
        <p>github.com/YOUNTAHEE | 010-1234-5678</p>
      </div>
      <div className="footerRight">
        <p>2023 YOUN &copy; All Rights Reserved.</p>

        <ul>
          <li
            onClick={() => {
              window.open(facebookURL);
            }}
          >
            <FaFacebookF />
          </li>
          <li
            onClick={() => {
              window.open(twitterURL);
            }}
          >
            <FaTwitter />
          </li>
          <li
            onClick={() => {
              window.open(youtubeURL);
            }}
          >
            <FaYoutube />
          </li>
        </ul>
      </div>
    </footer>
  );
}
