import React from "react";
import "./footer.css";
import { RiFacebookBoxFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="f-top ">
        <div>
          <h5>Top Artist</h5>
          <p>Neha Kakkar</p>
          <p>Arijit Singh</p>
          <p>Badshah</p>
          <p>Atif Aslam</p>
          <p>Justin Bieber</p>
          <p>Himesh Reshammiya</p>
          <p>Lata Mangeshkar</p>
          <p>Diljit Dosanjh</p>
          <p>Ed Sheeran</p>
          <p>Shreya Ghoshal</p>
          <p>Sanam Puri</p>
          <p>Armaan Malik</p>
        </div>
        <div>
          <h5>Top Actors</h5>
          <p>Salman Khan</p>
          <p>Allu Arjun</p>
          <p>Sunny Leone</p>
          <p>Amitabh Bachchan</p>
          <p>Varun Dhawan</p>
          <h5>BROWSE</h5>
          <Link to="/newrelease">
            <p>New Releases</p>
          </Link>
          <Link to="/topplaylist">
            <p>Featured Playlists</p>
          </Link>
          <Link to="/newrelease">
            <p>Weekly Top Songs</p>
          </Link>
          <Link to="/topartist">
            <p>Top Artists</p>
          </Link>
          <Link to="/topchart">
            <p>Top Charts</p>
          </Link>
          <Link to="/radio">
            {" "}
            <p>Top Radios</p>
          </Link>
        </div>
        <div>
          <h5>DEVOTIONAL SONGS</h5>
          <p>Krishna Bhajan</p>
          <p>Mahamrityunjaya</p>
          <p>Mantra</p>
          <p>Deva Shree Ganesha</p>
          <p>Hanuman Chalisa</p>
          <p>Gayatri Mantra</p>
          <p>Mata Ke Bhajan</p>
          <p>Durga Chalisa</p>
          <p>Maiya Yashoda</p>
          <p>Bhakti Geet</p>
        </div>
        <div>
          <h5>LANGUAGE</h5>
          <p>Hindi Songs</p>
          <p>Punjabi Songs</p>
          <p>Bhojpuri Songs</p>
          <p>Tamil Songs</p>
          <p>Telugu Songs</p>
          <p>Kannada Songs</p>
          <p>Gujarati Songs</p>
          <p>Marathi Songs</p>
          <p>Odia Songs</p>
          <p>Rajasthani Songs</p>
          <p>Haryanvi Songs</p>
          <p>Assamese Songs</p>
          <p>Malayalam Songs</p>
          <p>Bengali Songs</p>
        </div>
        <div>
          <h5>ARTIST ORIGINALS</h5>
          <p>Zaeden - Dooriyan</p>
          <p>Raghav - Sufi</p>
          <p>SIXK - Dansa</p>
          <p>Siri - My Jam</p>
          <p>Lost Stories, "Mai Ni</p>
          <p>Meriye"</p>
        </div>
        <div>
          <h5>COMPANY</h5>
          <p>About Us</p>
          <p>Culture</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Advertise</p>
          <p>Terms & Privacy</p>
          <p>Help & Support</p>
          <p>Grievances</p>
          <p>JioSaavn Artist Insights</p>
          <p>JioSaavn YourCast</p>
        </div>
      </div>
      <div className="f-mid ">
        <Link to="subscription">
          <p>Gaana Pro</p>
        </Link>
        <a
          href="https://apps.apple.com/us/app/gaana-music-songs-podcasts/id585270521"
          target="blank"
        >
          <p>Gaana for iOS</p>
        </a>
        <a
          href="https://play.google.com/store/search?q=gaana&c=apps"
          target="blank"
        >
          <p>Gaana for Android</p>
        </a>
        <Link to="/newrelease">
          <p>New Releases</p>
        </Link>
      </div>
      <div className="f-last ">
        <div className="f-comment">
          <p>© 2023 Gaana Media Limited All rights reserved.</p>
        </div>
        <div className="f-social-media">
          <p>FOLLOW US</p>

          <a href="https://www.facebook.com/gaana.com" target="blank">
            {" "}
            <RiFacebookBoxFill id="f-facebook" />
          </a>
          <a href="https://twitter.com/gaana" target="blank">
            <AiOutlineTwitter id="f-twitter" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFu4MmcRqMsXrkWiD32h9HA"
            target="blank"
          >
            <GrYoutube id="f-youtube" />
          </a>
          <a href="https://www.instagram.com/gaana" target="blank">
            <BsInstagram id="f-instagram" />
          </a>
          <a href="https://in.linkedin.com/company/gammagaana" target="blank">
            <FaLinkedin id="f-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
