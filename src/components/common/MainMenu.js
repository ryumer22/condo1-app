import { listingItems, propertyItems } from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");

  // Decide which top-level menu item is active based on the URL
  useEffect(() => {
    const firstSegment = pathname.split("/")[1] || "";

    if (firstSegment === "") {
      setTopMenu("home");
    } else if (firstSegment === "property-owner") {
      setTopMenu("propertyOwner");
    } else if (firstSegment === "tenants") {
      setTopMenu("tenants");
    } else if (firstSegment === "property-listings") {
      setTopMenu("listings");
    } else if (firstSegment === "about") {
      setTopMenu("about");
    } else if (firstSegment === "contact") {
      setTopMenu("contact");
    } else {
      setTopMenu("");
    }
  }, [pathname]);

  // Reusable helper for link-level active state
  const handleActive = (link) => {
    if (!link || typeof link !== "string") return "";
    const current = pathname.split("/")[1] || "";
    const target = link.split("/")[1] || "";
    return current === target ? "menuActive" : "";
  };

  return (
    <ul className="ace-responsive-menu">
      {/* Home */}
      <li className="visible_list">
        <Link className={`list-item ${handleActive("/")}`} href="/">
          <span className={topMenu === "home" ? "title menuActive" : "title"}>
            Home
          </span>
        </Link>
      </li>

      {/* Property Owner dropdown */}
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span
            className={
              topMenu === "propertyOwner" ? "title menuActive" : "title"
            }
          >
            Property Owner
          </span>
          <span className="arrow"></span>
        </a>

        <ul className="sub-menu">
          {listingItems[0].submenu.map((item, index) => (
            <li key={index}>
              <Link className={handleActive(item.href)} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* Tenants dropdown */}
      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span
            className={topMenu === "tenants" ? "title menuActive" : "title"}
          >
            Tenants
          </span>
          <span className="arrow"></span>
        </a>

        <ul className="sub-menu">
          {propertyItems.map((item, index) => (
            <li key={index}>
              <Link className={handleActive(item.href)} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* Listings (single page) */}
      <li className="visible_list">
        <Link
          className={`list-item ${handleActive("/property-listings")}`}
          href="/property-listings"
        >
          <span
            className={topMenu === "listings" ? "title menuActive" : "title"}
          >
            Listings
          </span>
        </Link>
      </li>

      {/* About */}
      <li className="visible_list">
        <Link className={`list-item ${handleActive("/about")}`} href="/about">
          <span className={topMenu === "about" ? "title menuActive" : "title"}>
            About
          </span>
        </Link>
      </li>

      {/* Contact */}
      <li className="visible_list">
        <Link
          className={`list-item ${handleActive("/contact")}`}
          href="/contact"
        >
          <span
            className={topMenu === "contact" ? "title menuActive" : "title"}
          >
            Contact
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
