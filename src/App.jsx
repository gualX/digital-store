// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/produtos" element={<Layout><ProductListingPage /></Layout>} />
        <Route path="/produto/:id" element={<Layout><ProductViewPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
