const Sidebar = () => {
  return (
    <div className="h-full">
      <h2 className="text-white px-6 pt-6 text-center font-extrabold">LOGO</h2>
      <div className="pt-8 ">
      <ul className="text-white pb-8 text-center ">
        <li className="border border-black p-2 m-2 hover:border-white rounded ">Action</li>
        <li className="border border-black p-2 m-2 hover:border-white rounded" >Comedy</li>
        <li className="border border-black p-2 m-2 hover:border-white rounded">Horror</li>
        <li className="border border-black p-2 m-2 hover:border-white rounded">Sci-fi</li>
        <li className="border border-black p-2 m-2 hover:border-white rounded">Action</li>
        <li className="border border-black p-2 m-2 hover:border-white rounded">Comedy</li>
        <li className="border border-black p-2 m-2 hover:border-white rounded">Horror</li>
        <li className="border border-black p-2 m-2 hover:border-white rounded">Sci-fi</li>
      </ul>
      </div>
    </div>
  );
};
export default Sidebar;