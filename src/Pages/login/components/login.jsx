/* eslint-disable no-unused-vars */
import { Alert, Button, Form, Input, Row } from "antd";
import { useState } from "react";
import { connect } from "react-redux";
// import loginAuth from "../../../../libs/auth";
import { useNavigate } from "react-router-dom";
import WebApiUser from "../../../../api/users";
import { Login } from "../../../../redux/webDuck";
import { ruleRequired } from "../../../../utils/rules";

const LoginForm = ({ ...props }) => {
  const navigate = useNavigate();
  const [loginForm] = Form.useForm();
  const [error, setError] = useState(false);
  const [register, setRegister] = useState(false);

  const saveUser = async (data) => {
    try {
      if (!data.role) data.role = "user";
      const response = await WebApiUser.createUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setRegister(false);
      loginForm.resetFields();
    }
  };

  const onFinish = (value) => {
    if (value.name.trim() == "") return;
    if (value.password.trim() == "") return;
    if (register) saveUser(value);
    else
      props
        .Login(value)
        .then((result) => {
          if (result) {
            navigate("/blog");
            // loginAuth(result.accessToken);
            // if (result.user.role.type === "superadmin")
            //   router.push({ pathname: "/Companies" });
            // else router.push({ pathname: "/Home" });
          } else {
            setError(true);
          }
        })
        .catch(() => {
          setError(true);
        });
  };
  return (
    <div className="login">
      <Row justify="center" style={{ padding: "5%" }}>
        <h1 style={{ color: "blue", fontSize: "30px", fontWeight: "bold" }}>
          {register ? "Registrarse" : "BLOG"}
        </h1>
      </Row>
      <Form
        name="normal_login"
        className="login-form"
        form={loginForm}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item name="name" rules={[ruleRequired]}>
          <Input
            style={{ marginTop: "5px", minWidth: "380px" }}
            placeholder="Usuario"
            onBlur={(value) =>
              loginForm.setFieldsValue({
                email: value.target.value.toLowerCase(),
              })
            }
          />
        </Form.Item>
        <Form.Item name="password" rules={[ruleRequired]}>
          <Input.Password
            style={{ marginTop: "5px", minWidth: "380px" }}
            type="password"
            placeholder="Contraseña"
          />
        </Form.Item>

        {error && (
          <Alert
            message="Error."
            description="Los datos son incorrectos."
            type="error"
            style={{ textAlign: "center", marginBottom: "10px" }}
            onClose={() => setError(false)}
            closable
          />
        )}

        <Form.Item>
          <Button
            style={{ width: "100%", background: "#FDCA3D", color: "#FFFF" }}
            className="border-r10"
            htmlType="submit"
          >
            {register ? "Registrarse" : "Iniciar sesión"}
          </Button>
        </Form.Item>
      </Form>
      <div className="flex justify-center w-11/12">
        {register ? "Ya tienes cuenta" : "Aun no te has registrado?"}
        <Button
          onClick={() => {
            setRegister(register ? false : true), loginForm.resetFields();
          }}
          type="text"
          style={{ color: "blue", fontSize: 15, marginTop: -4 }}
        >
          {register ? "Inicia sesion" : "Registrate aqui"}
        </Button>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    login: state.globalStore.login,
  };
};

export default connect(mapState, { Login })(LoginForm);
