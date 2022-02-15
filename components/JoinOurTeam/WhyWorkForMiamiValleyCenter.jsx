import FloatingImage from "../Image/FloatingImage";
import MyUnorderListContainer from "../UnorderedList/MyUnorderListContainer";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";
import MyListOfULContainerWithHeading from "../UnorderedList/MyListOfULContainerWithHeading";

const WhyWorkForMiamiValleyCenter = () => {
  const firstList = [
    "Health, dental, vision and life insurance,",
    "Paid time off, including sick pay, holiday pay, bereavement leave,",
    "Retirement plans,",
    "Wellness programs",
  ];

  const secondList = [
    "Tuition reimbursement",
    "Professional development training ",
    "Career development opportunities",
  ];

  const thirdList = [
    "Ashford University",
    "Central State University",
    "Clark State Community College",
    "Fortis College",
    "Sinclair Community College",
    "University of Dayton",
    "Wright State University",
  ];

  const forthList = [
    "You must be at least 18 years old and have a high school diploma or GED.",
    "You must consent to a medical screening and background check.",
    "We will ask you to supply references.",
  ];

  const reasonsForWorkInMiamiValleyList = [
    {
      heading: "We offer a comprehensive benefits package that includes: ",
      list: firstList,
    },
    {
      heading:
        "To promote our employees’ education and professional development, we provide:",
      list: secondList,
    },
    {
      heading: "We have internship collaboratives with",
      list: thirdList,
    },
    {
      heading: "To join our team",
      list: forthList,
    },
  ];

  return (
    <div id="why-work-for-miami-valley-chilld-development-centers">
      <LargeContainerNoFlexColorSection>
        <h3>Why work for Miami Valley Child Development Centers?</h3>
        <FloatingImage
          float="right"
          src="/images/join-out-team/Miami View Child Development Center 3.jpeg"
        />

        <MyListOfULContainerWithHeading
          list={reasonsForWorkInMiamiValleyList}
        />

        <h4>Non-discrimination policy</h4>

        <p>
          We are an equal opportunity employer. In accordance with Federal law
          and U.S. Department of Agriculture policy, this institution is
          prohibited from discriminating on the basis of race, color, national
          origin, sex, age, or disability.
        </p>
        <p>
          To file a complaint of discrimination, write USDA, Director, Office of
          Civil Rights, 1400 Independence Avenue, SW, Washington, DC 20250-9410
          or call (800) 795-3272 or (202) 720-6382 (TTY). USDA is an equal
          opportunity provider and employer.
        </p>
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default WhyWorkForMiamiValleyCenter;
