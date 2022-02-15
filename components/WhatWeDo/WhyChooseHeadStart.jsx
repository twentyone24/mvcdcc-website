import FloatingImage from "../Image/FloatingImage";
import MyImageComponent from "../Image/MyImageComponent";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";

const WhyChooseHeadStart = () => {
  return (
    <LargeContainerNoFlexColorSection>
      {/* Top */}
      <h3 id="ehs">Why choose Head Start?</h3>

      {/* https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/aa675aed-0a58-4c88-a704-38aa9d5277d1/MVCDC+Sept+13+20212378.jpg?format=750w */}
      <FloatingImage
        float="right"
        src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/aa675aed-0a58-4c88-a704-38aa9d5277d1/MVCDC+Sept+13+20212378.jpg?format=750w"
      />
      {/* <MyImageComponent
        src={
          "https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/aa675aed-0a58-4c88-a704-38aa9d5277d1/MVCDC+Sept+13+20212378.jpg?format=750w"
        }
      /> */}

      <p>
        Miami Valley Child Development Centers is southwest Ohio’s Head Start
        agency. For over 55 years, we’ve been providing FREE early learning and
        child care to children from 6 weeks to age 5.
      </p>
      <p></p>
      <p>
        What sets us apart is our two-generational approach that builds family
        well-being by simultaneously working with children and the adults in
        their lives to access new resources, solve problems and sharpen existing
        skills. We have Family Support Specialists, Home Visitors and Coaches
        ready to partner with you on this journey.
      </p>
      <p></p>
      <p>
        In most cases, families must earn 100% of the Federal Poverty Level or
        less. Children experiencing homelessness or who are in foster or kinship
        care also are eligible. In some cases, children with disabilities may
        qualify.
      </p>
      <p></p>
      <p>
        We have full-day and part-day options at our more than 50 convenient
        locations in Montgomery, Clark, Greene and Madison counties. Some
        programs offer FREE transportation.
      </p>
      <p></p>
      <p>
        All MVCDC self-operated programs are highly rated under Ohio’s Step Up
        to Quality initiative. Most have 5 Stars–the highest distinction.
      </p>

      {/* Bottom */}
      <h4>Get involved</h4>

      <p>
        MVCDC has an advisory committee of parents and caregivers who help us
        make decisions and set policies. MVCDC’s Policy Council is a group of
        parents and community representatives who help make decisions and set
        policies. Families can get involved by contacting their Family Support
        Specialist or their child’s teacher. We encourage families to
        participate in these opportunities throughout their child’s time with
        us.
      </p>
      <p></p>
      <p>
        Family engagement participation opportunities include meetings, home
        visits and parent-teacher conferences, volunteering in the classroom,
        parent committee meetings, parenting curriculum training as well as our
        fatherhood initiatives.
      </p>
      <p></p>
      <p>
        Our group meets monthly. To get involved, contact us. We also have
        volunteer opportunities and regular parent meetings.
      </p>
    </LargeContainerNoFlexColorSection>
  );
};

export default WhyChooseHeadStart;
