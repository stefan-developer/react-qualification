import React from "react";
import * as Styled from "./Page.styles";

interface PageProps {
  children: React.ReactNode;
}

function Page(props: PageProps): JSX.Element {
  const { children } = props;

  return <Styled.Wrapper>{children}</Styled.Wrapper>;
}

export default Page as React.FC<PageProps>;
