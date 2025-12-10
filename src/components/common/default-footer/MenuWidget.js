import React from "react";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Available Listings", href: "/listings" },
        {
          label: "Property Management",
          href: "/property-owner/property-management",
        },
        {
          label: "Property Management Toronto",
          href: "/property-owner/property-management-toronto",
        },
        {
          label: "Property Management Mississauga",
          href: "/property-owner/property-management-mississauga",
        },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Blogs",
      links: [
        {
          label: "How Much Can a Landlord Increase Rent in Ontario?",
          href: "#",
        },
        { label: "Why Is There a Housing Crisis in Canada?", href: "#" },
        { label: "Why Is There a Housing Crisis in Canada?", href: "#" },
        {
          label: "Toronto Housing in 2025: Market Trends & Price Outlook",
          href: "#",
        },
        {
          label: "How to Collect Unpaid Rent After Tenant Moves Out",
          href: "#",
        },
      ],
    },
  ];

  return (
    <>
      {menuSections.map((section, index) => (
        <div className="col-auto" key={index}>
          <div className="link-style1 mb-3">
            <h6 className="text-white mb25">{section.title}</h6>
            <ul className="ps-0">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuWidget;
