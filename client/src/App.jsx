import BackgroundGradient from "./components/gradient/BackgroundGradient";
import AppRoutes from "./routes/AppRoutes";
import  { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppRoutes />
      <BackgroundGradient />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
