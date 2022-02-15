import { weeklyReportsListObj } from "../../data/weeklyreports";
import MyImageComponent from "../Image/MyImageComponent";
import MyLink from "../MyLink";

const WeeklyReports = () => {
  const months = Object.keys(weeklyReportsListObj);

  return (
    <div id="weekly-reports">
      <MyImageComponent
        id="weekly-reports-image"
        src="/images/news-and-reports/weekly reports.jpeg"
      />
      {months.map((month) => {
        const monthDatesObjList = weeklyReportsListObj[month];
        return (
          <div key={month}>
            <h4>{month}</h4>
            {monthDatesObjList.map((date) => {
              return (
                <SingleDateComponent
                  key={month + date.name}
                  name={date.name}
                  url={date.url}
                  special={date?.special}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const SingleDateComponent = ({ name, url, special }) => {
  return (
    <MyLink href={url}>
      <h4 className={special ? "text-light-blue" : "text-secondary"}>{name}</h4>
    </MyLink>
  );
};

export default WeeklyReports;
