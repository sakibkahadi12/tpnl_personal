const ContentSection = ({ title = "", content = <></> }) => {
  return (
    <div>
      <div className="overflow-hidden rounded-[24px] bg-white">
        <div className="h-[58px] bg-[#9EC0D7] px-[63px] py-2.5">
          <p className="text-[25px] font-[400] text-[#303132]">{title}</p>
        </div>
        <div className="px-3 pt-3 pb-8 lg:px-[63px]">{content}</div>
      </div>
    </div>
  );
};

export default ContentSection;
