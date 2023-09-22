import logo from "./assets/images/BernhardtPerformance_Wordmark_RGB.png";
import video from "../src/assets/videos/bernhardt-performance.MOV";
import "./App.css";

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
    </div>
  );
}

export default App;
