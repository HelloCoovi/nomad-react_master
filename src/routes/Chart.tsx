import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import { useOutletContext } from "react-router-dom";

interface IContextProps {
  coinId: string;
}

interface CoinHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart() {
  const { coinId } = useOutletContext<IContextProps>();

  const { isLoading, data } = useQuery<CoinHistory[]>({
    queryKey: ["ohlcv", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });

  console.log(
    `\n┏━━━ 💡 💡 isLoading 💡 💡 ━━━\n`,
    isLoading,
    `\n┗━━━━━━ 💡 💡 💡 💡 💡 ━━━━━━━━━\n`
  );
  console.log(
    `\n┏━━━ 💡 💡 data 💡 💡 ━━━\n`,
    data,
    `\n┗━━━━━━ 💡 💡 💡 💡 💡 ━━━━━━━━━\n`
  );

  return <h1>Chart</h1>;
}
export default Chart;
