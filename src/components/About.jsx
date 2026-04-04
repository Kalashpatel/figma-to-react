import img1 from '../assets/images/about/img1.png'
import img2 from '../assets/images/about/img2.png'
import polygon from '../assets/elements/Polygon.png'
import square from '../assets/elements/square.png'
import vector3 from '../assets/elements/Vector3.png'

export default function About() {
  return (
    <section className="about p-150">
      {/* Curved line connecting both blocks */}
      <img src={vector3} className="about__curve" alt="" aria-hidden="true" />

      <div className="container">

        {/* Block 1 — text left, image right */}
        <div className="row items-center about__block">
          <div className="col-6 col-md-12">
            <h2 className="title about__title">
              Tomorrow should be better than{' '}
              <span className="about__highlight">today</span>
            </h2>
            <p className="about__text">
              We are a team of strategists, designers communicators, researchers.
              Togeather, we belive that progress only happens when you refuse
              to play things safe.
            </p>
            <a href="#" className="about__readmore">
              Read more <span className="about__readmore-line" />
            </a>
          </div>

          <div className="col-6 col-md-12">
            <div className="about__img-wrap about__img-wrap--right">
              <img src={square} className="about__deco about__deco--square-tr" alt="" aria-hidden="true" />
              <img src={img1} className="about__img" alt="Meeting room" />
            </div>
          </div>
        </div>

        {/* Block 2 — image left, text right */}
        <div className="row items-center about__block">
          <div className="col-6 col-md-12 about__img-col">
            <div className="about__img-wrap about__img-wrap--left">
              <img src={polygon} className="about__deco about__deco--tri-bl" alt="" aria-hidden="true" />
              <img src={img2} className="about__img" alt="Working together" />
            </div>
          </div>

          <div className="col-6 col-md-12">
            <h2 className="title about__title">
              <span className="about__highlight">See</span> how we can
              help you <span className="about__underline">progress</span>
            </h2>
            <p className="about__text">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>
            <a href="#" className="about__readmore">
              Read more <span className="about__readmore-line" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
