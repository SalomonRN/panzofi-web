import { Table } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import DemoChangeData from "./Linechart.jsx";
import Columchart from "./Columchart.jsx";
const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Inicio de Sesion",
    dataIndex: "last_login",
    key: "last_login",
  },
  {
    title: "Tiempo",
    dataIndex: "total_time",
    key: "total_time",
  },
  {
    title: "Botón 1",
    dataIndex: "n_btn1",
    key: "n_btn1",
  },
  {
    title: "Botón 2",
    dataIndex: "n_btn2",
    key: "n_btn2",
  },
];

const App = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("admin") !== "true") {
      navigate("/landing-page");
    }
    axios
      .get("http://localhost:8000/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const array = Array.from(res.data);
        array.forEach((element) => {
          element.name = element.last_name + " " + element.first_name;
          if (element.total_time) {
            const time = element.total_time.split(":");
            element.total_time = `${time[0]}h ${time[1]}m ${time[2]}s`;
          }
        });
        setData(array);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="table-container">
        <Table columns={columns} dataSource={data} />
      </div>
      <div className="chart-container">
        <DemoChangeData users={data} />
        <Columchart users={data} />
      </div>
    </>
  );
};

export default App;
