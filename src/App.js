import logo from "./assets/images/BernhardtPerformance_Full_RGB.png";
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
          <h3>A customized program to meet your unique situation</h3>
        </section>
      </header>
      <section>
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
          <br />
          <p>
            In addition to my training, i committed to playing volleyball at
            Gardner-Webb University where I earned a B.S. in Exercise Science.
            Since Graduating from GWU, I’ve been working in the health and
            fitness industry for about six years.
          </p>
          <br />
          <p>
            During my professional career in the industry, I’ve discovered that
            my greatest interest is in working with athletes and helping them
            achieve their full potential through sports performance training,
            proper nutrition, up-to-date recovery methods, and mentorship.
          </p>
        </section>
      </section>
    </div>
  );
}

export default App;
