import ProfileForm from "@/components/Forms/ProfileForm";
import ProfileComponent from "@/components/Pages/Profile/ProfileComponent";
import TitleSection from "@/components/TitleSection";

const ProfilePage = () => {
  return (
    <div>
      <TitleSection title={"Profile"} />
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
