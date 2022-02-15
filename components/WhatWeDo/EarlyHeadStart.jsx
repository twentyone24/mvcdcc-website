import EnrollmentButton from "../Buttons/EnrollmentButton";
import FloatingImage from "../Image/FloatingImage";
import MyImageComponent from "../Image/MyImageComponent";
import MyImageWithOverlayAndText from "../Image/MyImageWithOverlayAndText";
import MyUnorderListContainer from "../UnorderedList/MyUnorderListContainer";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";

const EarlyHeadStart = () => {
  return (
    <LargeContainerNoFlexColorSection>
      {/* Top */}
      <h3>Early Head Start</h3>

      {/* Light Blue Border Image */}
      <MyImageComponent
        src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/1631293841701-7X0JI2IWVKE5B7D6PWPT/image-asset.png?format=1500w"
        width={"100%"}
      />

      {/* TODO complete this overlay picture */}
      {/* <MyImageWithOverlayAndText
        minHeight={500}
        src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/1631293922798-IJTCB336O6KVGM9E6BNR/image-asset.jpeg?format=750w"
      >
        Hello world
      </MyImageWithOverlayAndText> */}

      {/* https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/aa675aed-0a58-4c88-a704-38aa9d5277d1/MVCDC+Sept+13+20212378.jpg?format=750w */}
      {/* Baby Image */}
      <FloatingImage
        float="left"
        src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/1631293922798-IJTCB336O6KVGM9E6BNR/image-asset.jpeg?format=750w"
      />

      {/* Bottom */}
      <h4>Early Head Start serves children from 6 weeks to age 3. </h4>

      <p>
        In our full-day program, children may attend 6 or 10 hours each day,
        Monday through Friday.
      </p>
      <p>
        Teachers will help your baby or toddler reach important developmental
        milestones — learning to sit, crawl, walk and say their first words.
        They will read, talk and sing to your child, even screen for
        developmental delays and connect you with early intervention
        specialists.
      </p>
      <p>
        Teachers will keep you up-to-date about your child’s progress through
        daily conversations, parent-teacher conferences and required home
        visits.
      </p>

      <p>
        If you aren’t ready to send your child to an early learning program, we
        also can provide a home visitor who will meet with you for 1.5 hours
        each week. They’ll share teaching tips, fun activities to do with your
        child and help you set goals for your family. We organize group
        activities for families receiving home-based care twice each month.
      </p>
      <p>
        Finally, we have a number of partner programs. Teachers will help your
        child learn letters, numbers and sounds, and they’ll teach your child
        about working and playing well with others. These are private child care
        centers that offer MVCDC’s comprehensive services, but are a separate
        business.
      </p>
      <p>All programs are open to children with disabilities.</p>

      {/* Pink Link Border Image */}
      <MyImageComponent
        src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/1631285022358-30YL35TNHZOEQ2QXUOBJ/pink+bars.png?format=1500w"
        width={"100%"}
      />

      <h4>Check out our staff, curriculum</h4>
      <p>
        With over 26 centers surrounding 3 Counties, MVCDC also have multiple
        community partnerships to service the needs of children and families.
      </p>

      <MyUnorderListContainer>
        <li>64% of Head Start teachers have a bachelor’s degree</li>
        <br />
        <li>
          100% of teachers in our program have earned a minimum of a Child
          Development Associate credential
        </li>
        <br />
        <li>
          73% of teachers at Early Head Start Child Care Partnerships have
          earned a Child Development Associate credential or are in the process
          of doing so
        </li>
        <br />
        <li>54% of our staff have worked at MVCDC for 5 years or more</li>
        <li>
          100% of MVCDC’s self-operated centers are rated as “high quality”
          under Ohio’s Step Up to Quality initiative
        </li>
        <br />
        <li>
          We served 131,779 breakfasts, 137,086 lunches and 132,474 snacks
          during the program year
        </li>
        <br />
        <li>
          Successfully completed our Focus Area 2 federal review with 100%
          compliance with all regulations
        </li>
        <br />
      </MyUnorderListContainer>

      <p>
        We use an evidence-based curriculum known as HighScope that emphasizes
        learning through play. Lessons focus on problem-solving, good
        decision-making and independence. Our classrooms and educational
        materials build on children’s interests, accommodate different
        developmental and ability levels and reflect diverse cultures.
      </p>
      <p>
        We also practice Conscious Discipline, a proven behavior management
        program that helps children control their emotions and learn how to deal
        with frustration and disappointment.{" "}
      </p>

      {/* Text With Image */}
      <FloatingImage src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/cbd1f957-ace5-4da8-9f5f-8ab273131792/image-asset.jpeg?format=500w" />

      <p>
        We’ll also introduce you to Triple P – short for Positive Parenting
        Program.
      </p>
      <p>
        Triple P doesn’t tell you how to be a parent. It’s a toolbox of ideas.
        You choose the strategies you want to use.
      </p>

      <p>Triple P helps you:</p>

      <MyUnorderListContainer>
        <li>Raise happy, confident children</li>
        <br />
        <li>Manage misbehavior </li>
        <br />
        <li>Set rules and routines </li>
        <br />
        <li>Encourage behavior you like</li>
        <br />
        <li>Take care of yourself </li>
        <br />
        <li>Feel confident you’re doing the right thing</li>
      </MyUnorderListContainer>

      {/* Secondary Color Border Image */}
      <MyImageComponent
        src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/1631285323753-CKBDVWZA9OTO0XCZR38G/image-asset.png?format=1500w"
        width={"100%"}
      />

      <h4>See our healthy menus</h4>
      <p>
        If your child is in a full-day program, they’ll receive a nutritious
        breakfast, lunch, and a healthy snack to go. If they are in our part-day
        programs, they’ll also get nutritious meals and snacks while they’re
        with us. AM children get breakfast and lunch, while PM children receive
        lunch and a snack.
      </p>

      {/* TODO add url */}
      <a href="#">
        <p className="special-span text-primary">
          Click here to see this month’s menu.
        </p>
      </a>

      {/* Yellow Color Border Image */}
      <MyImageComponent
        src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/1631285468433-85WHFPLGIHLBWQVF36TC/image-asset.png?format=1500w"
        width={"100%"}
      />

      <h4>We’ll help your child stay healthy</h4>

      <FloatingImage src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/21f984d1-f228-47fe-a146-dc83af285b73/image-asset.jpeg?format=750w" />

      <p>
        We’ll help you get medical care for your child by connecting you with
        our community partners that provide:
      </p>

      <MyUnorderListContainer>
        <li>Immunizations</li>
        <br />
        <li>Health checks and physicals</li>
        <br />
        <li>Speech/language screenings</li>
        <br />
        <li>Hearing and vision exams</li>
        <br />
        <li>Dental exams</li>
        <br />
        <li>Lead/ Hemoglobin Screenings</li>
      </MyUnorderListContainer>

      {/* Light Blue Border Image */}
      <MyImageComponent
        src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/1631293841701-7X0JI2IWVKE5B7D6PWPT/image-asset.png?format=1500w"
        width={"100%"}
      />

      <h4>We’ll support you</h4>

      <p>
        You are your child’s first and best teacher! We ask you to work with
        your child’s teachers, your Family Support Specialists/Home Visitor and
        to participate in our “Classroom to Home” activities. We know you want
        to keep your child learning at home!
      </p>
      <p>
        We’ll have lots of opportunities to interact, including at enrollment
        meetings, orientations, parent-teacher conferences, home visits, in your
        child’s classroom and during parent committee meetings/trainings. You’ll
        also meet other great MVCDC families!{" "}
      </p>

      <EnrollmentButton colorClass="bg-secondary my-btn-center" />
    </LargeContainerNoFlexColorSection>
  );
};

export default EarlyHeadStart;
