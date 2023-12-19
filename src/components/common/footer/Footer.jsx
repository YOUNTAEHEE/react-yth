import "./Footer.scss";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
export default function Footer() {
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
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
