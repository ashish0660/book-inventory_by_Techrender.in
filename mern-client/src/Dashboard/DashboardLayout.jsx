import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";

function DashboardLayout() {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <SideBar />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
