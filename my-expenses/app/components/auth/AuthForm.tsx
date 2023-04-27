import { Link, useSearchParams } from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";

enum AuthMode {
  LOGIN = "login",
  SIGNUP = "signup",
}

export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode") || AuthMode.LOGIN;

  const submitBtnCaption = authMode == AuthMode.LOGIN ? "Login" : "Create user";
  const toggleBtnCaption = authMode == AuthMode.LOGIN ? "Create a new user" : "Log in with existing user";
  const linkPath = "?mode=" + (authMode == AuthMode.LOGIN ? AuthMode.SIGNUP : AuthMode.LOGIN);

  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">{authMode == AuthMode.LOGIN ? <FaLock /> : <FaUserPlus />}</div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>{submitBtnCaption}</button>
        <Link to={linkPath}>{toggleBtnCaption}</Link>
      </div>
    </form>
  );
}
