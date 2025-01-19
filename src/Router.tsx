import { Routes, Route } from "react-router";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Coins />} />
      <Route path="/:coinId" element={<Coin />} />
    </Routes>
  );
}
