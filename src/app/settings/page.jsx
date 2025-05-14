import SettingsComponent from "@/components/Pages/Settings/SettingsComponent";
import TitleSection from "@/components/TitleSection";
import React from "react";

const SettingsPage = () => {
  return(
    <>
      <TitleSection title={"Settings"} />
      <SettingsComponent />
      </>
    ) 
};

export default SettingsPage;
