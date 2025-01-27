import styled from "styled-components";
import { useState } from "react";
import { useParams, useLocation } from "react-router";

import { Outlet, Link, useMatch } from "react-router-dom";

export default function Coin() {
  const params = useParams();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  console.log(
    `\n┏━━━ 💡 💡 params 💡 💡 ━━━\n`,
    params,
    `\n┗━━━━━━ 💡 💡 💡 💡 💡 ━━━━━━━━━\n`
  );

  return (
    <S.Container>
      <S.Header>
        <S.Title>{location?.state?.coinName || "Loading..."}</S.Title>
      </S.Header>
      {isLoading ? <S.Loader>Loading...</S.Loader> : null}

      <S.Tabs>
        <S.Tab $isActive={chartMatch !== null}>
          <Link to={`/${params.coinId}/chart`}>Chart</Link>
        </S.Tab>
        <S.Tab $isActive={priceMatch !== null}>
          <Link to={`/${params.coinId}/price`}>Price</Link>
        </S.Tab>
      </S.Tabs>

      <Outlet />
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

  Tabs: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
  `,
  Tab: styled.span<{ $isActive: boolean }>`
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 7px 0px;
    border-radius: 10px;
    color: ${(props) =>
      props.$isActive ? props.theme.accentColor : props.theme.textColor};
    a {
      display: block;
    }
  `,

  Loader: styled.span`
    text-align: center;
    display: block;
  `,
};
