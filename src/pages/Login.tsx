import "./Login.css";
import { SignIn } from "./../components/SignIn";

export const Login = () => {
  return (
    <div>
      <div className="login__layout">
        <div></div>
        <div className="login__inner-container">
          <div>
            <div className="login__header">New In Town</div>
            <div className="login__subheader">
              New In Town helps you connect with other newbie people and share various information and materials with
              them.
            </div>
          </div>
          <div>
            <SignIn />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
