import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./logic/provider";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/Game";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/result" element={<></>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
