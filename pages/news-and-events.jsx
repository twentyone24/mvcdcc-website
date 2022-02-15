import React from "react";
import NavbarGap from "../components/Navbar/NavbarGap";
import AnnualReports from "../components/NewsAndEvents/AnnualReports";
import ClassRoomVideos from "../components/NewsAndEvents/ClassRoomVideos";
import WeeklyUpdates from "../components/NewsAndEvents/WeeklyUpdates";

const NewsAndEvents = () => {
  return (
    <div id="news-and-events">
      <NavbarGap />

      <WeeklyUpdates />

      <AnnualReports />

      <ClassRoomVideos />
    </div>
  );
};

export default NewsAndEvents;
