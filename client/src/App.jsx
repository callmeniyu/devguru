import React, { useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Helmet from "react-helmet";
import HashLoader from "react-spinners/HashLoader";
import './index.css'; // Import your global styles

const Home = React.lazy(() => import("./pages/Home/Home"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Helmet>
        <title>Devguru</title>
        <meta name="description" content="DevGuru offers top-notch web-based solutions, specializing in web development, frontend and backend services, and Figma design. Elevate your online presence with expert craftsmanship and innovative design." />
        <meta name="keywords" content="devguru solutions, devgurusolutions, devgurusolutions.tech,web agency, website agency, agency, web development, frontend development, backend services, Figma design, web-based solutions, devguru, https://devgurusolutions.tech/, responsive web design, UI/UX design, full-stack development, custom web solutions, website design, software development, user interface design, digital solutions" />
      </Helmet>
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