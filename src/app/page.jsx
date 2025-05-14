import DashboardComponent from "@/components/Dashboard/DashboardComponent";
import TitleSection from "@/components/TitleSection";

export default function Dashboard() {
  return (
    <div>
      <TitleSection isBackButton={false} title={"Dashboard"} />
      <DashboardComponent />
    </div>
  );
}
