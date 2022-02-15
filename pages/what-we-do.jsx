import NavbarGap from "../components/Navbar/NavbarGap";
import ColorSection from "../components/Sections/ColorSection";
import EarlyHeadStart from "../components/WhatWeDo/EarlyHeadStart";
import HeadStartButtons from "../components/WhatWeDo/HeadStartButtons";
import HeadStartSection from "../components/WhatWeDo/HeadStartSection";
import WhyChooseHeadStart from "../components/WhatWeDo/WhyChooseHeadStart";

const WhatWeDo = () => {
  return (
    <div className="what-we-do-page-container text-secondary">
      {/* Header Gap */}
      {/* <ColorSection paddingvert={50} borderEnabled={false} /> */}
      <NavbarGap />

      <HeadStartButtons />

      <WhyChooseHeadStart />

      <EarlyHeadStart />

      <HeadStartSection />
    </div>
  );
};

export default WhatWeDo;
