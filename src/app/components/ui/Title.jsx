import React from "react";

const Title = ({ title ,subDescription}) => {
  return (
    <div className="mx-auto max-w-7xl lg:px-0 md:px-8 px-5 text-center">
      <div className="section_title">
        <div className="seven relative inline-block">
          <h1 className="scroll-m-20  text-4xl font-bold tracking-tight first:mt-0 mb-0">
            {subDescription}
          </h1>
        </div>

        <h1 className="scroll-m-20  text-4xl font-bold tracking-tight first:mt-0 mb-0">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Title;
