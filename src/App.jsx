import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./Components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about-us"
            element={
              {
                /* <AboutUs/> */
              }
            }
          />
          <Route
            path="/contact"
            element={
              {
                /* <Contact/> */
              }
            }
          />
          <Route
            path="/login"
            element={
              {
                /* <Login/> */
              }
            }
          />
          <Route
            path="/register"
            element={
              {
                /* <Register/> */
              }
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
