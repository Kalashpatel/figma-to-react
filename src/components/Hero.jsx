import face1 from '../assets/images/hero-section/face1.png'
import face2 from '../assets/images/hero-section/face2.png'
import face3 from '../assets/images/hero-section/face3.png'
import face4 from '../assets/images/hero-section/face4.png'
import face5 from '../assets/images/hero-section/face5.png'
import face6 from '../assets/images/hero-section/face6.png'
import face7 from '../assets/images/hero-section/face7.png'
import face8 from '../assets/images/hero-section/face8.png'
import vector4 from '../assets/elements/Vector4.png'
import vector5 from '../assets/elements/Vector5.png'
import Ellipse2 from '../assets/elements/Ellipse2.png'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Hero() {
  const titleRef  = useScrollReveal()
  const subRef    = useScrollReveal()
  const facesRef  = useScrollReveal()

  return (
    <section className="hero p-150">
      <img src={vector4} className="hero__deco hero__deco--v1" alt="" aria-hidden="true" />
      <img src={vector5} className="hero__deco hero__deco--v2" alt="" aria-hidden="true" />
      <img src={Ellipse2} className="hero__deco hero__deco--polygon" alt="" aria-hidden="true" />

      <div className="container">
        <h1 ref={titleRef} className="title hero__title reveal">
          The <span className="hero__underline">thinkers</span> and doers were{' '}
          <span className="hero__highlight hero__highlight--pink">changing</span> the{' '}
          <span className="hero__highlight hero__highlight--green">status</span> Quo with
        </h1>

        <p ref={subRef} className="hero__subtitle reveal reveal-d2">
          We are a team of strategists, designers communicators, makers. Togeather,<br />
          we belive that progress only hghappens when you refuse to play things safe.
        </p>

        <div ref={facesRef} className="hero__faces reveal reveal-d3">
          <img src={face1} className="hero__face hero__face--1" alt="team member" />
          <img src={face2} className="hero__face hero__face--2" alt="team member" />
          <img src={face3} className="hero__face hero__face--3" alt="team member" />
          <img src={face4} className="hero__face hero__face--4" alt="team member" />
          <img src={face5} className="hero__face hero__face--5" alt="team member" />
          <img src={face6} className="hero__face hero__face--6" alt="team member" />
          <img src={face7} className="hero__face hero__face--7" alt="team member" />
          <img src={face8} className="hero__face hero__face--8" alt="team member" />
        </div>
      </div>
    </section>
  )
}
