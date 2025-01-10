import axios from "axios";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    axios
      .get("http://localhost:8000/auth/log-out/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        localStorage.clear();
        navigate("/");
      }).catch(err => {
        console.log(err) 
      })
  };
  return (
    <nav className="navbar">
        <button  className="button-logout" onClick={logout}>Cerrar Sesion</button>
    </nav>
  );
};
export default Navbar;
