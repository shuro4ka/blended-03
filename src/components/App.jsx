import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";


export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* <Route index/>
        <Route path="add"/> */}

      </Route>
    </Routes>

    </>
  );
};
