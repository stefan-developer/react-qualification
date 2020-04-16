import React from "react";
import * as Styled from "./Loader.styles";

function Loader(): JSX.Element {
  return (
    <Styled.Wrapper>
      <p>Loading ...</p>
    </Styled.Wrapper>
  );
}

export default Loader as React.FC;
