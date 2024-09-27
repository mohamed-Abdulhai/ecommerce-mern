import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="bg-[#405D72] fixed top-0 right-0 left-0 w-full z-10">
      <div className="max-w-7xl m-auto py-2 px-4">
        <ul className="flex flex-nowrap justify-between items-center">
          <li>
            <h1 className="uppercase text-xl text-[#F7E7DC]">
              <a to="/">ecommerce</a>
            </h1>
          </li>
          <li className="w-full md:w-auto mt-2 md:mt-0">
            <div className="bg-[#F7E7DC] flex justify-between items-center p-1 rounded-lg w-full md:w-80">
              <input
                className="bg-transparent border-0 focus:border-none focus:outline-none w-full"
                placeholder="Search ......"
                type="text"
              />
              <button>
                <CiSearch className="text-[#405D72]" />
              </button>
            </div>
          </li>
          <li className="flex mt-2 md:mt-0">
            <div className="flex justify-center items-center gap-4">
              <button className="text-2xl text-[#F7E7DC]">
                <CiShoppingCart />
              </button>
              <button className="text-xl text-[#F7E7DC]">
                <FaHeart />
              </button>
              <button className="bg-[#758694] rounded-lg text-lg text-[#F7E7CD] px-3 py-1">
                Login
              </button>
              <button className="bg-[#758694] rounded-lg text-lg text-[#F7E7CD] px-3 py-1 hidden">
                Profile
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
