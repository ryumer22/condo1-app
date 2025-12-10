import { homeItems, listingItems, propertyItems } from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");
  const [submenu, setSubmenu] = useState("");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    homeItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("home");
      }
    });

    propertyItems.forEach((item) => {
      if (item.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("property");
      }
    });

    listingItems.forEach((item) =>
      item.submenu.forEach((elm) => {
        if (elm.href.split("/")[1] == pathname.split("/")[1]) {
          setTopMenu("listing");
        }
      })
    );
  }, [pathname]);

  const handleActive = (link) => {
    if (!link || typeof link !== "string") return "";

    const current = pathname.split("/")[1] || "";
    const target = link.split("/")[1] || "";

    return current === target ? "menuActive" : "";
  };

  return (
    <ul className="ace-responsive-menu">
      <li className="visible_list">
        <Link className={`list-item ${handleActive("/")}`} href="/">
          <span className={topMenu == "home" ? "title menuActive" : "title"}>
            Home
          </span>
        </Link>
      </li>

      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span className={topMenu == "listing" ? "title menuActive" : "title"}>
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
      {/* End listings */}

      <li className="visible_list dropitem">
        <a className="list-item" href="#">
          <span
            className={topMenu == "property" ? "title menuActive" : "title"}
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
      {/* End property Items */}

      <li className="visible_list">
        <a className="list-item" href="#">
          <span className={topMenu == "blog" ? "title menuActive" : "title"}>
            Blog
          </span>
        </a>
      </li>
      {/* End blog Items */}

      {/* About Us */}
      <li className="visible_list">
        <Link className={`list-item ${handleActive("/about")}`} href="/about">
          <span className="title">About</span>
        </Link>
      </li>

      {/* Contact */}
      <li className="visible_list">
        <Link
          className={`list-item ${handleActive("/contact")}`}
          href="/contact"
        >
          <span className="title">Contact</span>
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
