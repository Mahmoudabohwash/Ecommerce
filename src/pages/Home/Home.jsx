import { heroData } from "../../Data/homeData";
import "./Home.css"
import {Link} from "react-router-dom"
function Hero() {
  return (
    <section className="hero">
      <div>
        <h2>{heroData.title}</h2>

        <p>{heroData.description}</p>
        <Link to = "/shop"> 
        <button  className="shopNow">{heroData.buttonText}→</button>
        </Link>
       
      </div>

      <img className="imgshop" src={heroData.image} alt="Technology product" />
    </section>
  );
}
export default Hero;
