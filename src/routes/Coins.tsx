import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface CoinInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {
  const [coins, setCoins] = useState<CoinInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();

      setCoins(json.slice(0, 100));
      setIsLoading(false);
    })();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Title>This_is_Coins</S.Title>
      </S.Header>

      {isLoading ? (
        <S.Loader>Loading...</S.Loader>
      ) : (
        <S.CoinsList>
          {coins.map((coin) => (
            <S.Coin key={coin.id}>
              <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
            </S.Coin>
          ))}
        </S.CoinsList>
      )}
    </S.Container>
  );
}

const S = {
  Header: styled.header`
    color: ${(props) => props.theme.accentColor};
  `,

  Title: styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
  `,

  Container: styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
  `,

  CoinsList: styled.ul``,
  Coin: styled.li`
    background-color: white;
    color: ${(props) => props.theme.bgColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a {
      padding: 20px;
      transition: color 0.2s ease-in;
      display: block;
    }
    &:hover {
      a {
        color: ${(props) => props.theme.accentColor};
      }
    }
  `,

  Loader: styled.span`
    text-align: center;
    display: block;
  `,
};
