import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../contexts"; 
import GoogleSignIn from "./GoogleSignIn/GoogleSIgnIn"; 

function Navbar() {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-8";

  return (
    <nav className="bg-white border-b-2 flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg hidden md:inline">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
      </ul>

      <ul className="items-center gap-4 hidden md:flex">
        {context.user ? (
          <li className="flex items-center gap-2">
            <img
              src={context.user.photoURL || undefined} // Ensure it's not null
              alt={context.user.displayName || "User"} // Provide a fallback
              className="w-8 h-8 rounded-full"
            />
            <span>{context.user.displayName || "Guest"}</span> {/* Provide a fallback */}
          </li>
        ) : (
          <li>
            <GoogleSignIn />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;