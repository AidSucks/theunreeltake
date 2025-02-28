'use client';

import {Bootstrap, PersonCircle, House, Postcard} from "react-bootstrap-icons";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Dropdown, Nav} from "react-bootstrap";

const adminRoutes = [
  {name: "Dashboard", href: "/dashboard", icon: House},
  {name: "Posts", href: "/dashboard/posts", icon: Postcard}
];

export function DashboardSidebar() {

  const currentPath = usePathname();

  return (

    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: "225px"}}>

      <Link href={"/"} className={"d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"}>
        <Bootstrap width={40} height={32}/>
        <span className="fs-4">Sidebar</span>
      </Link>

      <hr/>

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

      <hr/>

      <Dropdown>
        <Dropdown.Toggle variant={"primary"} aria-expanded={false} className={"d-flex align-items-center text-white text-wrap mw-100"}>
          <PersonCircle width={24} height={24} className={"me-2"} title={"User"}/>
          <strong>Aidan</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className={"shadow"}>
          <Dropdown.Item href={"#"}>Settings</Dropdown.Item>
          <Dropdown.Item href={"#"}>Profile</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item href={"#"}>Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </div>
  );
}