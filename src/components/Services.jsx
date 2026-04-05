import vector3 from '../assets/elements/Vector7.png'
import useScrollReveal from '../hooks/useScrollReveal'

const services = [
  {
    tag: 'Office of multiple interest content',
    title: 'Colaborative & partnership',
  },
  {
    tag: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    tag: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
]

export default function Services() {
  const headRef = useScrollReveal()
  const listRef = useScrollReveal()

  return (
    <section className="services p-150">
      <img src={vector3} className="services__curve" alt="" aria-hidden="true" />

      <div className="container">
        <div ref={headRef} className="services__head reveal">
          <h2 className="title services__title">
            What we <span className="services__highlight">can</span><br />
            <span className="hero__underline">offer you!</span>
          </h2>
        </div>

        <div ref={listRef} className="services__list reveal reveal-d2">
          {services.map((s, i) => (
            <div className="services__item row items-center" key={i}>
              <div className="col-3 col-md-12">
                <p className="services__tag">{s.tag}</p>
              </div>
              <div className="col-7 col-md-12">
                <h3 className="services__name">{s.title}</h3>
              </div>
              <div className="col-2 col-md-12 justify-end services__arrow-col">
                <span className="services__arrow">&#8594;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
