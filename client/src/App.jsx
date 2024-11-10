import React, {  Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Helmet from "react-helmet";
import HashLoader from "react-spinners/HashLoader";
import './index.css'; // Import your global styles

const Home = React.lazy(() => import("./pages/Home/Home"));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <Suspense fallback={
              <div className="loader-container">
                <HashLoader data-testid="loader" color="#614EFA" className="loader" />
              </div>
            }>
              <Home />
            </Suspense>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;