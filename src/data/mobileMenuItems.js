module.exports = [
  { label: "Home", path: "/" },

  {
    label: "Property Owner",
    subMenu: [
      {
        label: "Property Management",
        path: "/property-owner/property-management",
      },
      { label: "Inspections", path: "/property-owner/inspections" },
      { label: "Tenant Screening", path: "/property-owner/tenant-screening" },
      { label: "Rent Collection", path: "/property-owner/rent-collection" },
      {
        label: "Tribunal Representation",
        path: "/property-owner/legal-services",
      },
    ],
  },

  {
    label: "Tenants",
    subMenu: [
      { label: "Available Listings", path: "/property-listings" },
      { label: "How to Apply", path: "/tenants/how-to-apply" },
      {
        label: "Submit Maintenance Request",
        path: "/tenants/maintenance-request",
      },
    ],
  },
  { label: "Listings", path: "/property-listings" },
  { label: "Blog", path: "/property-listings" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];
