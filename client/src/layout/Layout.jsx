import React, { useState } from "react";

function Layout({ children }) {
const [isRateLimited, setRateLimited] = useState(false); 
  return (
    <main className="min-h-screen">
      {children}
      {isRateLimited && <RateLimiting />}
    </main>
  );
}

export default Layout;
