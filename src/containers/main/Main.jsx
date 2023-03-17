import { Home, ReservationPage, Contact } from "../../pages";
import { Routes, Route, useLocation } from "react-router-dom";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<ReservationPage />} />
    </Routes>
  );
};

export default Main;
