import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Advisory } from "./pages/Advisory";
import { Approach } from "./pages/Approach";
import { Audiences } from "./pages/Audiences";
import { Board } from "./pages/Board";
import { Emerging } from "./pages/Emerging";
import { Engage } from "./pages/Engage";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { PerspectiveArticle } from "./pages/PerspectiveArticle";
import { Perspectives } from "./pages/Perspectives";
import { Principles } from "./pages/Principles";
import { Privacy } from "./pages/Privacy";
import { Recruitment } from "./pages/Recruitment";
import { Services } from "./pages/Services";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="approach" element={<Approach />} />
        <Route path="services" element={<Services />} />
        <Route path="advisory" element={<Advisory />} />
        <Route path="recruitment" element={<Recruitment />} />
        <Route path="board" element={<Board />} />
        <Route path="audiences" element={<Audiences />} />
        <Route path="emerging" element={<Emerging />} />
        <Route path="about" element={<About />} />
        <Route path="perspectives" element={<Perspectives />} />
        <Route path="perspectives/:slug" element={<PerspectiveArticle />} />
        <Route path="principles" element={<Principles />} />
        <Route path="engage" element={<Engage />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
