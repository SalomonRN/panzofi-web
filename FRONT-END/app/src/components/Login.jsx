import { Button, Form, Input } from "antd";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = () => {
    const data = new FormData();
    data.append("username", user.username);
    data.append("password", user.password);

    axios
      .post("http://localhost:8000/auth/login/", data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data["token"]);
          localStorage.setItem("admin", res.data["admin"]);

          if (localStorage.getItem("admin") === "true") {
            navigate("/panel");
          } else {
            navigate("/landing-page");
          }
        } else {
          alert("Uy, algo salió mal");
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          alert(err.response.data.message);
        }
      });
  };

  return (
    <div className="login-container">
      <Form onFinish={handleLogin}>
        <Form.Item label="Username" name="username" className="input">
          <Input
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
