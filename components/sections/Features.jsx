import React from "react";
import Card from "../ui/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
const Features = () => {
  return (
    <div className="px-134 sm:px-0">
      <div className="max-w-[1258px] mx-auto">
        <div className="bg-white">
          <div className="px-[132px] py-[60px] flex gap-5 sm:px-5 sm:flex-col">
            <Card
              title="VU main menu"
              titleStyle="text-blue"
              descriptions={[
                "Home",
                "Education",
                "Research",
                "About VU Amsterdam",
                "University Library",
                "VU Press Office",
                "Alumni",
              ]}
            />
            <Card
              titleStyle={"text-orange"}
              title={"Most searched"}
              descriptions={[
                "Home",
                "Education",
                "Research",
                "About VU Amsterdam",
                "University Library",
                "VU Press Office",
                "Alumni",
              ]}
            />
            <Card
              titleStyle={"text-[#008053]"}
              title={"Featured"}
              descriptions={["Home", "Education", "Research"]}
              hasIcons={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
