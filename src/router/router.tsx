//create rout of navigation pages
import HomePage from "../pages/home"
import Search from "../pages/search";
import Recipe from "../pages/recipe";

import { Routes, Route } from "react-router-dom";

export default function NavigationRoots() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </>
  );
} 