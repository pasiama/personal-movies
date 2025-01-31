function Login() {
  return (
    <div className="flex w-full mx-auto">
      <div className="loginHero">
        <div className="justify-center mx-auto my-auto">
          <form className="border border-white rounded w-98  shadow-black bg-white h-auto  p-5 pb-4">
            <h1 className="font-extrabold text-center pb-4">L O G I N</h1>
            <div className="pb-4">
            <label className="block text-sm font-medium text-gray-700 pb-2">Name</label>
            <input placeholder="Enter your full name" type="text" className="border border-black p-2 rounded w-full focus:border-grey-100"/>
            <label className="block text-sm pt-6 pb-2 font-medium text-gray-700">Email</label>
            <input placeholder="Enter your Email address" type="email" className="border border-black p-2 rounded w-full focus:border-grey-100"/>
            <label className="block text-sm pb-2 pt-6 font-medium text-gray-700">Password</label>
            <input placeholder="Enter your password" type="password" className="border border-black p-2 rounded w-full focus:border-grey-100"/>
            
            </div>
            <div className="pt-2">
                  <button className="border bg-indigo-800 hover:bg-indigo-950 text-center font-bold w-full text-white p-3 rounded-md ml-auto">
                        C O N T I N U E 
                  </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
