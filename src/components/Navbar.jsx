import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrSearch } from "react-icons/gr";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { categories } from "../utils/constants";
import { categoryActions } from "../store/category-slice";
import { useDispatch, useSelector } from "react-redux";
//

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const selectedCategory = useSelector((state) => state.category.category);
  const cart = useSelector((state) => state.cart);

  const inputValue = useRef();
  const selectCategoryHandler = (name) => {
    dispatch(categoryActions.selectCategory(name));
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchInput(inputValue.current.value);
    dispatch(categoryActions.selectCategory(searchInput));
    navigate("/");
    setSearch(false);
    inputValue.current.value = "";
  };

  return (
    <div className=" fixed w-full top-0 shadow-md">
      {/* // siedbar menu */}
      <div
        className={`${
          isVisible ? " translate-x-0" : " -translate-x-full"
        }  transition-transform flex flex-col gap-8   p-3 items-start absolute bg-white top-0 left-0 w-3/4 h-screen z-20`}
      >
        <div className="flex justify-between items-center   py-1 px-2 w-full">
          <h3 className=" inline-block text-primary font-bold text-xl">
            Amazon
          </h3>
          <GrFormClose
            className="text-lg"
            size={30}
            onClick={() => setIsVisible(false)}
          />
        </div>
        <ul className="">
          {categories.map((category) => (
            <li
              className={`border-b-2 border-gray-200 mb-5 ${
                category.name === selectedCategory ? " border-primary" : ""
              } `}
            >
              <Link
                key={category.name}
                to="/"
                onClick={() => setIsVisible(false)}
              >
                <button
                  onClick={() => selectCategoryHandler(category.name)}
                  className={`flex justify-center items-center sm:gap-2 xl:gap-1  font-bold  border-white border-b-4  text-primary px-1 py-0`}
                >
                  <span className=" text-lg">{category.icon}</span>
                  <span className="sm:text-md">{category.name}</span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {search && (
        <form
          action="/"
          onSubmit={searchHandler}
          className=" justify-between items-center w-full flex h-16 px-3"
        >
          <input
            className=" bg-gray-100 text-primary text-md w-full px-4 py-1 rounded"
            type="text"
            ref={inputValue}
            placeholder="Search for anything you want ..."
          />

          <GrFormClose size={25} onClick={() => setSearch(false)} />
        </form>
      )}
      {!search && (
        <div className="   relative bg-white flex justify-between items-center py-4 lg:gap-1 xl:gap-3 sm:px-3 md:px-16 border-b-2 ">
          <div className=" flex items-center gap-2">
            <GiHamburgerMenu
              className="sm:block hidden"
              size={25}
              onClick={() => setIsVisible(true)}
            />
            <Link to="/">
              <p className=" font-extrabold text-2xl mr-5 cursor-pointer">
                Amazon
              </p>
            </Link>
          </div>
          <div className=" sm:hidden flex flex-1 mr-12">
            <form onSubmit={searchHandler} className="w-full">
              <input
                className=" bg-gray-100 text-sm w-full px-4 py-1 rounded"
                type="text"
                ref={inputValue}
                placeholder="Search for anything you want ..."
              />
            </form>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className=" sm:flex hidden justify-center items-center gap-2 cursor-pointer ">
              <GrSearch
                className="text-2xl cursor-pointer"
                onClick={() => setSearch(true)}
              />
            </div>
            <Link to="/cart">
              <div className="flex justify-center items-center gap-1 relative cursor-pointer ">
                <span className=" absolute -top-1 left-0 bg-red-600 rounded-full text-white h-4 w-4 flex items-center justify-center text-center">
                  {cart.totalQuantity}
                </span>
                <AiOutlineShoppingCart className="text-2xl" />
                <p className=" font-bold text-lg">Cart</p>
              </div>
            </Link>
          </div>
        </div>
      )}
      <div className="lg:flex hidden w-full bg-white justify-center ">
        <div className=" lg:flex hidden items-center lg:gap-4 md:gap-2 justify-center md:text-xs lg:text-sm bg-white ">
          {categories.map((category) => (
            <Link key={category.name} to="/">
              <button
                onClick={() => selectCategoryHandler(category.name)}
                className={`flex justify-center items-center xl:gap-1 ${
                  category.name === selectedCategory ? " border-b-primary" : ""
                } font-bold hover:border-b-4 border-white border-b-4 hover:border-primary text-secondary px-1 py-4`}
              >
                <span>{category.icon}</span>
                <span className="sm:text-md">{category.name}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
