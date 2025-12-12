import mobileMenuItems from "@/data/mobileMenuItems";
import { isParentActive } from "@/utilis/isMenuActive";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useEffect, useState } from "react";

const ProSidebarContent = () => {
  const path = usePathname();

  return (
    <Sidebar width="100%" backgroundColor="#fff" className="my-custom-class">
      <Menu>
        {mobileMenuItems.map((item, index) => {
          // Dropdown (Property Owner / Tenants)
          if (item.subMenu?.length) {
            return (
              <SubMenu
                key={index}
                label={item.label}
                className={isParentActive(item.subMenu, path) ? "active" : ""}
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <MenuItem
                    key={subIndex}
                    component={
                      <Link
                        className={subItem.path === path ? "active" : ""}
                        href={subItem.path}
                      />
                    }
                  >
                    {subItem.label}
                  </MenuItem>
                ))}
              </SubMenu>
            );
          }

          // Simple link (Home / Listings / About / Contact)
          return (
            <MenuItem
              key={index}
              component={
                <Link
                  className={item.path === path ? "active" : ""}
                  href={item.path}
                />
              }
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Menu>
    </Sidebar>
  );
};

export default ProSidebarContent;
