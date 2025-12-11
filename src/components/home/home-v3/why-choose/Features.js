const Features = () => {
  // Define an array of feature objects
  const features = [
    {
      icon: "flaticon-security",
      title: "Full-Service Property Oversight",
      description:
        "High-quality listings and in-depth screening to place dependable tenants efficiently.",
    },
    {
      icon: "flaticon-keywording",
      title: "Tenant Placement & Screening",
      description:
        "Early detection and quick action on repairs to protect your property and maintain tenant satisfaction.",
    },
    {
      icon: "flaticon-investment",
      title: "24/7 Maintenance Coordination",
      description:
        "Streamlined rent processing with strict follow-up and transparent reporting.",
    },
    {
      icon: "flaticon-investment",
      title: "Local Market Expertise",
      description: "We help tenants feel at home - and stay longer.",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div className="list-one d-flex align-items-start mb30" key={index}>
          <span className={`list-icon flex-shrink-0 ${feature.icon}`} />
          <div className="list-content flex-grow-1 ml20">
            <h6 className="mb-1">{feature.title}</h6>
            <p className="text mb-0 fz15">{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
