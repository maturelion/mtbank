import React, { useEffect, useState } from "react";
import { AppContainer } from "./App.styled";
import { ThemeProvider } from "styled-components/macro";
import theme from "./theme/Theme";
import { GlobalStyle } from "./theme/GlobalStyle.styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./container/Auth/Auth";
import History from "./container/History/History";
import Home from "./container/Home/Home";
import Inbox from "./container/Inbox/Inbox";
import Login from "./container/Login/Login";
import Pocket from "./container/Pocket/Pocket";
import Profile from "./container/Profile/Profile";
import Register from "./container/Register/Register";
import Request from "./container/Request/Request";
import Send from "./container/Send/Send";
import Verify from "./container/Verify/Verify";
import ProtectedLayout from "./container/ProtectedLayout/ProtectedLayout";
import AuthLayout from "./container/AuthLayout/AuthLayout";
import favicon from "./assets/favicon.png";
import NewPocket from "./container/NewPocket/NewPocket";
import ScrollToTop from "./components/ScrollToTop";
import Zelle from "./container/Zelle/Zelle";
import SecurityQuestion from "./container/SecurityQuestion/SecurityQuestion";

function App() {
  const [currentTheme] = useState("light");

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    let ati = document.querySelector("link[rel~='apple-touch-icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    if (!ati) {
      ati = document.createElement("apple-touch-icon");
      ati.rel = "apple-touch-icon";
      document.getElementsByTagName("head")[0].appendChild(ati);
    }
    link.href = favicon;
    ati.href = favicon;
  }, []);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      {/* <div
        style={{ marginTop: "60px", position: "fixed" }}
        currentTheme={currentTheme}
        onClick={() => {
          if (currentTheme === "light") {
            setCurrentTheme("dark");
          } else {
            setCurrentTheme("light");
          }
        }}
        >
        <span>change Theme</span>
      </div> */}
      <AppContainer>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<ProtectedLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/pocket" element={<Pocket />} />
              <Route path="/new-pocket" element={<NewPocket />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/request" element={<Request />} />
              <Route path="/send" element={<Send />} />
              <Route path="/zelle" element={<Zelle />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/auth" element={<Auth />} />
              <Route path="/checkpoint" element={<SecurityQuestion />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/verify" element={<Verify />} />
            </Route>
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
