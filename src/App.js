import { Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./features/HomePage/Homepage";
import MainLayout from "./Layout/MainLayout";
import SubLayout from "./Layout/SubLayout";
import LightSchedule from "./features/FlightSchedule/FligtSchedule";
import NotFound from "./features/NotFound/NotFound";
function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<Homepage />} />
      </Route>
      <Route path="" element={<SubLayout />}>
        <Route path="/flight-schedule" element={<LightSchedule />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
