import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
function Layout() {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-4">
      <div className="row-span-3 bg-black">
        {" "}
        <Sidebar />
      </div>
      <div className="col-span-2 bg-indigo-300 "><Navbar/></div>
      <div className="col-span-2 row-span-2 bg-amber-300"><Outlet/></div>

      {/* <Navbar />
      <Outlet /> */}
    </div>
  );
}

export default Layout;


