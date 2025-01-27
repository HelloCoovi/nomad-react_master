import styled from "styled-components";
import { useState } from "react";
import { useParams, useLocation } from "react-router";

import { Outlet } from "react-router-dom";
export default function Coin() {
  const params = useParams();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);

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

  Loader: styled.span`
    text-align: center;
    display: block;
  `,
};
