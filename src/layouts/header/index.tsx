import { Link } from "react-router-dom";

const Header = () => {
  return (
    
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Human Resources</span>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" >Home</Link>
        </li>
        <li>
          <Link to="/upload" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Upload</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Header;