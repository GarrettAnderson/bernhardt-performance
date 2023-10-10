import logo from "./assets/images/BernhardtPerformance_Wordmark_RGB.png";
import video from "../src/assets/videos/bernhardt-performance.MOV";
import "./App.css";
import { InlineWidget } from "react-calendly";
import {
  faFacebook,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <video id="background-video" autoPlay loop muted poster="">
          <source src={video} type="video/mp4" />
        </video>
        <section className="overlay">
          <img src={logo} />
          <h1>A customized program to meet your unique situation</h1>
        </section>
      </header>
      <section className="about-section">
        <img src={logo} />
        <section>
          <h1>About</h1>
          <p>
            My intrigue and passion for fitness, nutrition, and sports
            performance started when I was in high school training with Jon
            Davis in Orlando, FL. I experienced firsthand how sport-specific
            training could enhance and improve my athleticism, volleyball
            playing ability, and help keep me healthy and injury free throughout
            my athletic career.
          </p>
          <p>
            In addition to my training, i committed to playing volleyball at
            Gardner-Webb University where I earned a B.S. in Exercise Science.
            Since Graduating from GWU, I’ve been working in the health and
            fitness industry for about six years.
          </p>
          <p>
            During my professional career in the industry, I’ve discovered that
            my greatest interest is in working with athletes and helping them
            achieve their full potential through sports performance training,
            proper nutrition, up-to-date recovery methods, and mentorship.
          </p>
        </section>
      </section>
      <section className="offering-section">
        <p>
          I started Bernhardt Performance in 2021 to materialize this interest.
          If you’re looking to reach your full potential, then Bernhardt
          Performance is the place for you.
        </p>
        <article>
          <h1>Offering</h1>
          <ol>
            <li>Weight Loss/ Management</li>
            <li>Toning & Sculpting</li>
            <li>Resistance Training</li>
            <li>Muscle Building</li>
            <li>Mobility / Flexibility</li>
            <li>Planning & Periodisation</li>
            <li>Speed, Strength, Power Development</li>
            <li>Nutritional Advice</li>
          </ol>
        </article>
      </section>
      <section className="training-rates-section">
        <h1>Training Rates</h1>
        <p>
          An assessment fee of $30 that is waived with the purchase of a
          package. Package of ten 1-hour training sessions is $650.
        </p>
      </section>
      <section className="testimonials-section">
        <h1>Testimonials</h1>
        <ol>
          <li>
            <blockquote>
              <p>
                “Since training with Bernhardt Performance, I have seen
                significant improvement in my strength, speed, and durability!
                Coaches have commented on my improved athleticism and strength.
                I have also been educated on proper diet and nutrition to be at
                my peak performance.”
              </p>
              <footer>- Ari Smith</footer>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                “Erin Bernhardt of Bernhardt Performance is an amazing trainer.
                My son Ari has been training with Erin for almost a year now. We
                drive all the way from Baltimore every week so that he can work
                out with Erin. Ari’s speed, strength and overall mental wellness
                has improved greatly. Erin builds a trusting working
                relationship with her clients and works on their athletic
                confidence as well. I would highly recommend Bernhardt
                Performance to anyone! We love working with Erin!”
              </p>
              <footer>- Neka Smith</footer>
            </blockquote>
          </li>
        </ol>
      </section>
      <section className="calendly-section">
        <h1>Book Appointments</h1>
        <InlineWidget url="https://calendly.com/bernhardtperformance/assessment" />
        {/* <InlineWidget url="https://calendly.com/bernhardtperformance/assessment" /> */}
      </section>
      <footer className="footer">
        <section className="footer-first-column">
          <h1>Bernhardt Performance</h1>
          <p>
            If you are looking to reach your full potential as an athlete then
            Bernhardt Performance is the place for you.
          </p>
        </section>
        <section className="footer-second-column">
          <h1>Contact Me</h1>
          <p>3 Baldridge Rd., Annapolis, MD 21401, United States.</p>
          <p>bernhardtperformance@gmail.com</p>
          <p>407-718-2337</p>
          <ol>
            <li>
              <a
                href="https://www.facebook.com/people/Bernhardt-Performance/100076227660810/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faSquareInstagram}
                className="instagram-icon"
              />
            </li>
          </ol>
        </section>
        <section className="footer-third-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.205297593174!2d-76.51955312559167!3d38.987810671704864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7f6e2fff020f3%3A0x7934af1f5781b8fc!2s3%20Baldridge%20Rd%2C%20Annapolis%2C%20MD%2021401!5e0!3m2!1sen!2sus!4v1695594391863!5m2!1sen!2sus"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </footer>
    </div>
  );
}

export default App;
