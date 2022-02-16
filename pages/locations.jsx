import NavbarGap from "../components/Navbar/NavbarGap";
import LargeContainerNoFlexColorSection from "../components/Sections/LargeContainerNoFlexColorSection";

const Locations = () => {
  return (
    <div id="locations">
      <NavbarGap />
      <LargeContainerNoFlexColorSection borderEnabled={false}>
        <h3>Visit one of our many locations today!</h3>
        <p>
          Our child care partnerships include Family Child Care and Early Head
          Start in Montgomery, Clark and Madison counties.
        </p>
        <p>
          Click on the map below to learn more about our more than 50 locations.
          We have MVCDC-operated early learning and child care programs in
          Montgomery, Clark, Greene and Madison counties. We also partner with
          in-home Family Child Care Partners.
        </p>
        <p>
          When using the search function, type in your home or work address and
          find a center near you.
        </p>

        <script
          defer
          //   src="//jsfiddle.net/0cps2voh/3/embed/result/dark/"
          src="//jsfiddle.net/0cps2voh/3/embed/result/light/"
        ></script>
        <NavbarGap />
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default Locations;
