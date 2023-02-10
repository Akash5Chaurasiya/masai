import { NavLink } from "react-router-dom";
const links = [
  { to: "/", ele: "Home" },
  { to: "/Dashboard", ele: "Dashboard" },
  { to: "/Login", ele: "Login" },
  { to: "/Setting", ele: "Setting" }
];
function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {links.map(({ to, ele }) => (
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? { textDecoration: "none", color: "red" }
              : { textDecoration: "none", color: "teal" };
          }}
          key={to}
          to={to}
        >
          {ele}
        </NavLink>
      ))}
    </div>
  );
}
export default Navbar;
