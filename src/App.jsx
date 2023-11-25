import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import UserLoginPage from "./pages/UserLoginPage";
import SingleService from './pages/SingleService';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login/user" element={<UserLoginPage />} />
          <Route path="/login/seller" element={<UserLoginPage />} />
          <Route path="/services/:category/:id" element={<SingleService />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;