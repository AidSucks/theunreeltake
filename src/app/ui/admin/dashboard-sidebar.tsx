'use client';

import {Bootstrap, PersonCircle} from "react-bootstrap-icons";

import Link from "next/link";
import {AdminNavLinks} from "@/app/ui/admin/admin-nav-links";
import {Dropdown} from "react-bootstrap";
import {logOut} from "@/app/lib/actions";

export function DashboardSidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{width: "225px"}}>

      <Link href={"/"} className={"d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"}>
        <Bootstrap width={40} height={32}/>
        <span className="fs-4">Sidebar</span>
      </Link>

      <hr/>

      <AdminNavLinks/>

      <hr/>

      <Dropdown>
        <Dropdown.Toggle variant={"outline-primary"} aria-expanded={false} className={"d-flex align-items-center link-body-emphasis text-decoration-none"}>
          <PersonCircle width={24} height={24} className={"me-2"}/>
          <strong>Aidan</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className={"shadow"}>
          <Dropdown.Item href={"#"}>Settings</Dropdown.Item>
          <Dropdown.Item href={"#"}>Profile</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item onClick={() => logOut()}>Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </div>
  );
}