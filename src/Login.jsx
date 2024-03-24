function Login(props) {
  return (
    <div>

      <form className="login-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button onClick={event => {
          event.preventDefault();
          console.log("Clicked")
          // false
          props.setLoginPage(false);
        }}>Login</button>
      </form>

    </div>
  )
}

export default Login;