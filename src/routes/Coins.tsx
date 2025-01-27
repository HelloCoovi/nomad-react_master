import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { fetchCoins } from "../api";

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
  const { isLoading, data } = useQuery<CoinInfo[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });

  return (
    <S.Container>
      <S.Header>
        <S.Title>This_is_Coins</S.Title>
      </S.Header>

      {isLoading ? (
        <S.Loader>Loading...</S.Loader>
      ) : (
        <S.CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <S.Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ coinName: coin.name }}>
                <S.CoinImg
                  src={`https://cryptoicon-api.pages.dev/icons/128/color/${coin.symbol.toLowerCase()}.png`}
                />
                {coin.name} &rarr;
              </Link>
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
      display: flex;
      align-items: center;
      padding: 20px;
      transition: color 0.2s ease-in;
    }
    &:hover {
      a {
        color: ${(props) => props.theme.accentColor};
      }
    }
  `,
  CoinImg: styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
  `,

  Loader: styled.span`
    text-align: center;
    display: block;
  `,
};
