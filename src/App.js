import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import Subnav from "./components/Subnav";
import Volunteer from "./components/Volunteer";

function App() {
  return (
    <div className="App">
      <Header />
      <Subnav />
      <Carousel />
      <Volunteer />
      <Schedule />
    </div>
  );
}

export default App;
