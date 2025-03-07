'use client';

import Nav from "react-bootstrap/Nav";
import {House, Postcard} from "react-bootstrap-icons";
import {usePathname} from "next/navigation";

const adminRoutes = [
  {name: "Dashboard", href: "/dashboard", icon: House},
  {name: "Posts", href: "/dashboard/posts", icon: Postcard}
];

export function AdminNavLinks() {

  const currentPath = usePathname();

  return (
    <Nav variant={"pills"} className={"flex-column mb-auto"} activeKey={currentPath}>
      {adminRoutes.map(
        (route) => {

          const Icon = route?.icon;

          return(
            <Nav.Item key={route.name}>
              <Nav.Link href={route.href} className={"d-flex"}>
                <Icon width={24} height={24} className={"me-3"}/>
                <div className={"d-flex flex-grow-1 justify-content-start"}>{route.name}</div>
              </Nav.Link>
            </Nav.Item>
          );
        }
      )}
    </Nav>
  );
}