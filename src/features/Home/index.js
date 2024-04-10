import { FaArrowRight } from "react-icons/fa";
import Profile from "../../assets/photo.JPG";
import { Link } from "react-router-dom";
import "./styled.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span> I'm Ulyana Lakevich.</span>
            <br/>Frontend Developer
          </h1>
          <p className="home__description">
            I am a passionate junior front-end developer, proficient in HTML,
            CSS, JavaScript and React. I strive to create exceptional user
            experiences and collaborate effectively with fellow developers and
            designers. My commitment to staying current with industry trends
            drives me to constantly expand my skill set. Let's work together to
            create remarkable digital experiences that exceed expectations.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
