import MySecondaryButton from "../Buttons/MySecondaryButton";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";
import WeeklyReports from "./WeeklyReports";

const WeeklyUpdates = () => {
  return (
    <div id="weekly-updates">
      <LargeContainerNoFlexColorSection borderEnabled={false}>
        {/* Heading Container */}
        <div
          className="top-container flex"
          style={{
            // display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <h3>Weekly Updates</h3>
          <MySecondaryButton>
            <span className="text-light-blue"> 2021 Weekly Updates</span>
          </MySecondaryButton>
        </div>

        <WeeklyReports />
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default WeeklyUpdates;
