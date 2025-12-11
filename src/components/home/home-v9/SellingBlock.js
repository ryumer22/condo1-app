import React from "react";

const sellingBlockData = [
  {
    iconClass: "flaticon-security",
    title: "Tenant Placement",
    text: "We find and vet the right tenants fast, reducing vacancy time",
  },
  {
    iconClass: "flaticon-keywording",
    title: "Rent Collection",
    text: "Automated billing and strict follow-up policies",
  },
  {
    iconClass: "flaticon-investment",
    title: "Maintenance Coordination",
    text: "Repairs handled by vetted pros, with 24/7 availability",
  },
  {
    iconClass: "flaticon-keywording",
    title: "Legal & Compliance",
    text: "Lease preparation, LTB notices, and legal support",
  },
  {
    iconClass: "flaticon-investment",
    title: "Owner Reporting",
    text: "Transparent monthly statements, inspections, and updates",
  },
  {
    iconClass: "flaticon-keywording",
    title: "Tenant Support",
    text: "Quick response times and respectful service",
  },
];

const SellingBlock = () => {
  return (
    <>
      {sellingBlockData.map((block, index) => (
        <div
          className={`col-sm-6 col-lg-5 ${
            index % 2 === 1 ? "offset-lg-1" : ""
          }`}
          key={index}
        >
          <div className="iconbox-home9 position-relative mb30">
            <span className={`text-white icon fz40 ${block.iconClass}`} />
            <h4 className="text-white iconbox-title mt20">{block.title}</h4>
            <p className="text-white text mb-0">{block.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SellingBlock;
