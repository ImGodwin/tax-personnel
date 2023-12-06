import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./Components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route
            path="/learn"
            element={
              {
                /* <Learn/> */
              }
            }
          />
          <Route
            path="/learn"
            element={
              {
                /* <AboutUs/> */
              }
            }
          />
          <Route
            path="/learn"
            element={
              {
                /* <Contact/> */
              }
            }
          />
          <Route
            path="/learn"
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
