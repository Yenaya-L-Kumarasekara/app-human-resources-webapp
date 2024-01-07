import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './layouts/footer/index';
import Header from './layouts/header/index';

const Homepage = lazy(() => import('./pages/homePage/index'));
const Dataupload = lazy(() => import('./pages/attendanceUpload/index'));
const Page404 = lazy(() => import('./pages/page404/index'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/upload" element={<Dataupload />} />
          {/* Fall back URL as homepage or 404 page */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
