const MenuItems = () => {
  const menuItems = [
    { id: 1, title: "Property Management" },
    { id: 2, title: "Property Listings" },
    { id: 3, title: "Submit Maintenance Request" },
    { id: 4, title: "About Us" },
    { id: 5, title: "Blog" },
    { id: 6, title: "Contact Us" },
  ];

  return (
    <ul className="navbar-nav">
      {menuItems.map((item) => (
        <li className="nav-item" key={item.id}>
          <a className="nav-link" href="#" role="button">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
