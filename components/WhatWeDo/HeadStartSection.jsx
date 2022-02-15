import urls from "../../config/urls.config";
import FloatingImage from "../Image/FloatingImage";
import MyImageComponent from "../Image/MyImageComponent";
import MyLink from "../MyLink";
import MyUnorderListContainer from "../UnorderedList/MyUnorderListContainer";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";

const HeadStartSection = () => {
  return (
    <LargeContainerNoFlexColorSection>
      {/* Top */}
      <h3>Early Head Start</h3>
      {/* Light Blue Border Image */}
      {/* <MyImageComponent
        src="https://images.squarespace-cdn.com/content/v1/60c8f0b8fcff251cbdeb6591/1631293841701-7X0JI2IWVKE5B7D6PWPT/image-asset.png?format=1500w"
        width={"100%"}
      /> */}
      {/* TODO add overlay with text */}
      <FloatingImage
        src="/images/what-we-do/child-3-5.jpeg"
        style={{ height: 200 }}
        float="left"
      />
      <h4>
        Head Start serves children from age 3 to 5 and is focused on getting
        children ready for kindergarten so they start school on track — not
        behind.{" "}
      </h4>
      <p>
        Children in our full-day program attend 6 or 10 hours, Monday through
        Friday. (Most of these classrooms operate year-round.)
      </p>
      <p>
        Those in our part-day program attend Monday through Thursday for 3.5
        hours in the morning or afternoon. (We also have a 6-hour option in some
        centers that operate from 9-3 much like a school day.)
      </p>
      <p>
        Teachers will help your child learn letters, numbers and sounds, and
        they’ll teach your child about working and playing well with others.
        They’ll even start working on early reading and math skills. If you’re
        worried your child is behind in any way, they’ll connect you with early
        intervention specialists. We will complete a developmental screening for
        you child within 45-days of enrollment and work with you to
        individualize the best educational approach to meet their needs.
      </p>
      <p>
        Teachers will keep you up-to-date about your child’s progress through
        daily conversations, parent-teacher conferences and required home
        visits.{" "}
      </p>
      <p>
        <strong>
          If you aren’t ready to send your child to an early learning program,
          we also can provide a home visitor who will meet with you for 1.5
          hours each week.
        </strong>{" "}
        They’ll share teaching tips, fun activities to do with your child and
        help you set goals for your family. We organize group activities for
        families receiving home-based care twice each month.
      </p>
      <p>
        <strong>Finally, we have a number of partner programs.</strong> These
        are private child care centers and family childcare that offer MVCDC’s
        comprehensive services, but are a separate business.
      </p>

      <p>All programs are open to children with disabilities.</p>

      <MyImageComponent src="/images/dashed-purple-line-break.png" />

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
        <br />
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
      </MyUnorderListContainer>

      <p>
        We use an evidence-based curriculum known as{" "}
        <MyLink href={urls.hightScope}>HighScope</MyLink> that emphasizes
        learning through play. Lessons focus on problem-solving, good
        decision-making and independence. Our classrooms and educational
        materials build on children’s interests, accommodate different
        developmental and ability levels and reflect diverse cultures.
      </p>

      <p>
        We also practice{" "}
        <MyLink href={urls.consciousDiscipline}>Conscious Discipline</MyLink>, a
        proven behavior management program that helps children control their
        emotions and learn how to deal with frustration and disappointment.
      </p>

      <p>
        We’ll also introduce you to{" "}
        <MyLink href={urls.tripleP}>Triple P</MyLink> – short for Positive
        Parenting Program.
      </p>

      <FloatingImage src="/images/what-we-do/Miami View Child Development Center.jpeg" />

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

      {/* Yellow line break */}
      <MyImageComponent src="/images/yello-line-break.png" />

      <h4>See our healthy menus</h4>
      <p>
        If your child is in a full-day program, they’ll receive a nutritious
        breakfast, lunch, and a healthy snack to go. If they are in our part-day
        programs, they’ll also get nutritious meals and snacks while they’re
        with us. AM children get breakfast and lunch, while PM children receive
        lunch and a snack.
      </p>
      <MyLink href={urls.monthMenu}>
        <strong>Click here to see this month&apos;s menu.</strong>
      </MyLink>

      {/* Light Blue Link Break */}
      <MyImageComponent src="/images/slash-light-blue-line-break.png" />

      <FloatingImage src="/images/what-we-do/Miami View Child Development Center2.jpeg" />

      <h4>We’ll help your child stay healthy</h4>
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

      <MyImageComponent src="/images/primary-line-break.png" />

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
    </LargeContainerNoFlexColorSection>
  );
};

export default HeadStartSection;
