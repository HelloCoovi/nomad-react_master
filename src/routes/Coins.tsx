import styled from "styled-components";

export default function Coins() {
  return (
    <div>
      <S.Title>This_is_Coins</S.Title>
    </div>
  );
}

const S = {
  Title: styled.h1`
    color: ${(props) => props.theme.accentColor};
  `,
};
