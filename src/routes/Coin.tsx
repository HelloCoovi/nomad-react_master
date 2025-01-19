import { useParams } from "react-router";

export default function Coin() {
  const params = useParams();
  console.log(params.coinId);

  return (
    <div>
      <h2>Coin ID: {params.coinId}</h2>
    </div>
  );
}
