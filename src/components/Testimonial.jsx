import face1 from '../assets/images/testimonial/face1.png'
import face2 from '../assets/images/testimonial/face2.png'
import face3 from '../assets/images/testimonial/face3.png'
import face4 from '../assets/images/testimonial/face4.png'
import face5 from '../assets/images/testimonial/face5.png'
import face6 from '../assets/images/testimonial/face6.png'
import face7 from '../assets/images/testimonial/face7.png'
import face8 from '../assets/images/testimonial/face8.png'
import quotesOpen from '../assets/images/testimonial/quotes-1.png'
import quotesClose from '../assets/images/testimonial/quotes-2.png'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Testimonial() {
  const titleRef = useScrollReveal()
  const cardRef  = useScrollReveal()
  const leftRef  = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section className="testi p-150">
      <div className="container">
        <div className="row items-center justify-center">

          <div ref={leftRef} className="col-2 col-md-12 testi__side testi__side--left reveal reveal-left">
            <img src={face1} className="testi__face testi__face--tl display-xs-none" alt="" />
            <img src={face2} className="testi__face testi__face--ml display-xs-none" alt="" />
            <img src={face3} className="testi__face testi__face--bl display-xs-none" alt="" />
            <img src={face8} className="testi__face testi__face--bl display-xs-none" alt="" />
          </div>

          <div className="col-7 col-xs-12 col-md-12 testi__center">
            <h2 ref={titleRef} className="title testi__title reveal">
              <span className="testi__highlight">What</span> our customer<br />
              says <span className="hero__underline">About Us</span>
            </h2>

            <div ref={cardRef} className="testi__card reveal reveal-d2">
              <img src={quotesOpen}  className="testi__quote testi__quote--open"  alt="open quote" />
              <p className="testi__text">
                Elementum delivered the site with inthe timeline they requested.
                Inthe end, the client found a 50% increase in traffic with in days
                since its launch. They also had an impressive ability to use
                technologies that the company hasn't used, which have also proved
                to be easy to use and reliable
              </p>
              <img src={quotesClose} className="testi__quote testi__quote--close" alt="close quote" />
            </div>
          </div>

          <div ref={rightRef} className="col-2 col-md-12 testi__side testi__side--right reveal reveal-right">
            <img src={face4} className="testi__face testi__face--tr display-xs-none" alt="" />
            <img src={face5} className="testi__face testi__face--mr1 display-xs-none" alt="" />
            <img src={face6} className="testi__face testi__face--mr2 display-xs-none" alt="" />
            <img src={face7} className="testi__face testi__face--br display-xs-none" alt="" />
          </div>

        </div>

        <div className="testi__dots">
          <span className="testi__dot testi__dot--active" />
          <span className="testi__dot" />
          <span className="testi__dot" />
        </div>
      </div>
    </section>
  )
}
