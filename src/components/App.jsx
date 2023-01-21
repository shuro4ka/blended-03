import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { AddPage } from "pages/AddPage";
import { HomePage } from "pages/HomePage";


export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />}/>
        <Route path="add" element={<AddPage />}/>
      </Route>
    </Routes>
    </>
  );
};
