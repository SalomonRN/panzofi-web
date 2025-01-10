import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const pressButton = (n_btn) => {
  const data = new FormData();
  data.append("button", n_btn),
    axios.put("http://localhost:8000/user_data/button/", data, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [desc, setDesc] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
    axios.get("http://localhost:8000/description", {}).then((res) => {
      setDesc(res.data.description);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <img
          className="logo"
          src="http://localhost:8000/static/img/logo.png"
          alt="Logo"
        />

        <div className="content-info">
          <h1 className="title"> Prueba de ingreso equipo desarrollador </h1>
          <p className="description"> {desc}</p>
        </div>
        <div className="container-button">
          <button
            className="button-add"
            onClick={() => {
              pressButton(1);
            }}
          >
            Boton 1
          </button>

          <button
            className="button-add"
            onClick={() => {
              pressButton(2);
            }}
          >
            Boton 2
          </button>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
