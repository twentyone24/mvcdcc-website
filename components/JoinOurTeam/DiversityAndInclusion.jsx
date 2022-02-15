import DiversityAndInclusionCard from "../Cards/DiversityAndInclusionCard";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";

const DiversityAndInclusion = () => {
  return (
    <div id="diversity-and-inclusion">
      <LargeContainerNoFlexColorSection>
        <h3>Diversity & Inclusion</h3>
        <div className="diversity-cards">
          <DiversityAndInclusionCard
            src="/images/join-out-team/Difference Makers.png"
            heading="Being Difference Makers"
            description="We make a significant difference in the lives of vulnerable children, their families and our communities by providing exceptional early childhood education and supporting families in realizing their hopes and dreams."
          />
          <DiversityAndInclusionCard
            src="/images/join-out-team/Growth Mindset.png"
            heading="Promoting a Growth Mindset"
            description="We believe every individual has unique talents and abilities that can be developed through determination, drive and a supportive work environment that inspires each of us to continue to grow and develop."
          />
          <DiversityAndInclusionCard
            src="/images/join-out-team/Investing in the Future.png"
            heading="Investing in the future"
            description="We invest in the future of our employees through supportive benefits and industry leading professional development opportunities. This investment ultimately enables us to be difference makers in our world."
          />
        </div>
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default DiversityAndInclusion;
