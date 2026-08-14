import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import SavedRecipes from "./components/SavedRecipes";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="saved" element={<SavedRecipes />} />
      </Route>
    </Routes>
  );
}

export default App;