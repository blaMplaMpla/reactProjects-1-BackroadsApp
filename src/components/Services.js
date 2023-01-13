import Title from "./Title";
import { services } from "../data";


const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our Services" />

      <div className="section-center services-center">

        {services.map(service => {
          const { id, title, icon, text } = service;

          return (
            <article className="service" ket={id}>
              <span className="service-icon"><i className={`fas fa-fw ${icon}`}></i></span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          )
        })};

      </div>
    </section>
  )
}
export default Services