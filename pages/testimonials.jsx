import TestimonalCard from "../components/Cards/TestimonalCard";
import LargeContainerNoFlexColorSection from "../components/Sections/LargeContainerNoFlexColorSection";

const Testimonials = () => {
  let testimonials = [
    { imgSrc: "/images/testimonials/testimonial 1.png", by: "MVCDC Parent" },
    { imgSrc: "/images/testimonials/testimonial 2.png", by: "MVCDC Parent" },
    { imgSrc: "/images/testimonials/testimonial 3.png", by: "MVCDC Parent" },
  ];

  return (
    <div id="testimonials-page" className="page-hero-center-and-full">
      <LargeContainerNoFlexColorSection borderEnabled={false}>
        <h2>What MVCDC families say</h2>

        <div className="grid-card-3">
          {testimonials.map((testimonial, index) => {
            return (
              <TestimonalCard
                key={index}
                src={testimonial.imgSrc}
                name={testimonial.by}
              />
            );
          })}
        </div>
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default Testimonials;
