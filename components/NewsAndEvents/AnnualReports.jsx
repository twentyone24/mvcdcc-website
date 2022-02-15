import MyImageComponent from "../Image/MyImageComponent";
import LargeContainerNoFlexColorSection from "../Sections/LargeContainerNoFlexColorSection";

const AnnualReports = () => {
  return (
    <div id="annual-reports">
      <LargeContainerNoFlexColorSection>
        <div className="grid-3">
          <div className="annual-report">
            <MyImageComponent src="/images/annual-reports/2020-2021 Annual Report.png" />
            <h4>2020-21 Annual Report</h4>
          </div>
          <div className="annual-report">
            <MyImageComponent src="/images/annual-reports/2019-2020 Annual Report.png" />
            <h4>2019-20 Annual Report</h4>
          </div>
          <div className="annual-report">
            <MyImageComponent src="/images/annual-reports/2018-2019 Annual Report.png" />
            <h4>2018-19 Annual Report</h4>
          </div>
        </div>
      </LargeContainerNoFlexColorSection>
    </div>
  );
};

export default AnnualReports;
