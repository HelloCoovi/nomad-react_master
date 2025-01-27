import { Routes, Route } from "react-router";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Coins />} />
      <Route path="/:coinId" element={<Coin />}>
        <Route path="chart" element={<Chart />} />
        <Route path="price" element={<Price />} />
      </Route>
    </Routes>
  );
}
