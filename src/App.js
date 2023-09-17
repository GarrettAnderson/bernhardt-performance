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
    </div>
  );
}

export default App;
