import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { selectIsUserLogged } from "./context/authSlice";
import { useSelector } from "react-redux";
import { Navbar } from "./components/Navbar";
import { Index } from "./pages/Index";
import { UserInfo } from "./pages/UserInfo";
import { Friends } from "./pages/Friends";
function App() {
  const isUserLogged = useSelector(selectIsUserLogged);

  return (
    <div className="app__body">
      <div className="app__content">
        {isUserLogged && (
          <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />}>
                  <Route index element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/user-info" element={<UserInfo />} />
                  <Route path="/friends" element={<Friends />} />
                  <Route path="*" element={<Home />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </>
        )}
        {!isUserLogged && (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />}>
                <Route index element={<Login />} />
                <Route path="*" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        )}
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
