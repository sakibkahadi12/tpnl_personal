import ContentSection from "@/components/ContentSection";
import ScholarshipForm from "@/components/Forms/ScholarshipForm";
import TitleSection from "@/components/TitleSection";

const ScholarshipCreate = () => {
  return (
    <div>
      <TitleSection title={"Scholarships"} />

      <ContentSection
        title="Add Scholarship"
        content={<ScholarshipForm />}
      />
    </div>
  );
};

export default ScholarshipCreate;
