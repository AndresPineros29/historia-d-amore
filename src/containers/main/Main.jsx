import { Home, ReservationPage, Contact } from "../../pages";
import { Routes, Route, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<ReservationPage />} />
    </Routes>
  );
};

export default Main;
