import React, { useState } from "react";
import RateLimiting from "../components/rate-limiting/RateLimiting";

function Layout({ children }) {
const [isRateLimited, setRateLimited] = useState(true); 
  return (
    <main className="min-h-screen">
      {children}
      {isRateLimited && <RateLimiting />}
    </main>
  );
}

export default Layout;
