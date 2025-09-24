import React from "react";

function PageTitle({ num, title }) {
  return (
    <>
      <div className="text-white xl:ml-10 ml-0 tracking-widest 2xl:text-3xl flex justify-center sm:justify-start text-center sm:text-left">
        <span className="text-gray-500 mr-4 font-bold">{num}</span>
        {title}
      </div>
    </>
  );
}

export default PageTitle;
