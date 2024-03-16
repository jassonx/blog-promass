import LoginForm from "./components/login";

const Login = () => {
  return (
    <div className="containerPrincipal">
      <div className="containers">
        <LoginForm />
      </div>
      <div className="containers rounded">
        <img className="image-global" src="images/Blog.jpg" />
      </div>
    </div>
  );
};

export default Login;
