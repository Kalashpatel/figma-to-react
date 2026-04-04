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

export default function Testimonial() {
  return (
    <section className="testi p-150">

      {/* Floating label top-right */}
      <div className="testi__label">
        <span className="testi__label-dot" />
        Subhashri Sahoo
      </div>

      {/* Dashed vertical line left-center */}
      <div className="testi__vline" />
      {/* Dashed horizontal line mid-left */}
      <div className="testi__hline" />

      <div className="container">
        <div className="row items-center">

          {/* Left floating faces */}
          <div className="col-2 col-md-12 testi__side testi__side--left">
            <img src={face1} className="testi__face testi__face--tl" alt="" />
            <img src={face2} className="testi__face testi__face--ml" alt="" />
            <img src={face3} className="testi__face testi__face--bl" alt="" />
          </div>

          {/* Center content */}
          <div className="col-8 col-md-12 testi__center">
            <h2 className="title testi__title">
              <span className="testi__highlight">What</span> our customer<br />
              says <span className="testi__underline">About Us</span>
            </h2>

            <div className="testi__card">
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

          {/* Right floating faces */}
          <div className="col-2 col-md-12 testi__side testi__side--right">
            <img src={face4} className="testi__face testi__face--tr" alt="" />
            <img src={face5} className="testi__face testi__face--mr1" alt="" />
            <img src={face6} className="testi__face testi__face--mr2" alt="" />
            <img src={face7} className="testi__face testi__face--br" alt="" />
          </div>

        </div>

        {/* Pagination dots */}
        <div className="testi__dots">
          <span className="testi__dot testi__dot--active" />
          <span className="testi__dot" />
          <span className="testi__dot" />
        </div>
      </div>
    </section>
  )
}
