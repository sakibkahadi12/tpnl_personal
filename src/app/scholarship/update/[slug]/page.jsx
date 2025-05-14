import ContentSection from "@/components/ContentSection";
import ScholarshipForm from "@/components/Forms/ScholarshipForm";
import TitleSection from "@/components/TitleSection";

const ScholarshipUpdate = ({ params }) => {
  const slug = params.slug;

  return (
    <div>
      <TitleSection title={"Scholarships"} />

      <ContentSection
        title="Update Scholarship"
        content={<ScholarshipForm slug={slug} />}
      />
    </div>
  );
};

export default ScholarshipUpdate;
