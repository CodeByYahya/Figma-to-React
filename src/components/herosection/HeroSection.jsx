import "./heroSection.css";
import svg from "./Illustration.svg";
function HeroSection() {
  return (
    <div className="HeroSection">
      <div className="heading">
        <h1>
          Lessons and insights <span>from 8 years</span>
        </h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <button>Register</button>
      </div>
      <div className="image">
        <img src={svg} alt="adasd" height={"282px"} width={"272px"} />
      </div>
    </div>
  );
}

export default HeroSection;
