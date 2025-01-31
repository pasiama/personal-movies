import Sidebar from "../../components/Sidebar";
import Home from "../../components/Home";
function Layout() {
  return (
    <div className="grid grid-flow-col gap-1">
      <div className="row bg-black h-full">
        {" "}
        <Sidebar />
      </div>
      {/* <div className="col-start-2 col-span-4 bg-indigo-300 "><Navbar/></div> */}
      <div className="col-start-2 col-span-4 bg-white"><Home/></div>

      {/* <Navbar />
      <Outlet /> */}
    </div>
  );
}

export default Layout;


