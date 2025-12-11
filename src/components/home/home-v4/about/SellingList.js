const SellingList = () => {
  const listItems = [
    "Emergency Maintenance Hotline",
    "Online Payments & Requests",
    "Clear Communication at Every Step",
    "Move-In/Out Coordination",
  ];

  return (
    <div className="list-style1 mb60 mb30-md">
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            <i className="far fa-check text-white bgc-dark fz15" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellingList;
