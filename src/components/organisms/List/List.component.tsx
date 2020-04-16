import React from "react";
import * as Styled from "./List.styles";

interface ListProps {
  data: any[];
}

function List(props: ListProps): JSX.Element {
  const { data } = props;
  return (
    <Styled.Wrapper>
      {data.map((repo: any) => (
        <li key={repo.name}>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      ))}
    </Styled.Wrapper>
  );
}
export default List as React.FC<ListProps>;
