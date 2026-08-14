import React from "react";

const ContactSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 bg-amber-50 px-4 py-2 rounded-lg w-[300px]">
      <div className="skeleton h-5 w-full"></div>
      <div className="skeleton h-5 w-40"></div>
      <div className="skeleton h-5 w-full"></div>
    </div>
  );
};

export default ContactSkeleton;
