import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./layouts/mainlayout";
import { lazy, Suspense } from "react";
import Loading from "./components/loading";
import TopBar from "./components/topbar";
import Footer from "./components/footer";

const Lang = lazy(() => import("@/pages/[lang]/lang"));
const Categories = lazy(() => import("@/pages/[lang]/[id]/categories"));
const NotFound = lazy(() => import("@/pages/404/404"));

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="/spanish" replace />} />

            <Route path="/:lang" element={<Lang />}></Route>
            <Route path="/:lang/:id" element={<Categories />}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
