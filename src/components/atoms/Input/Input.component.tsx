import React from "react";
import * as Styled from "./Input.styles";

interface InputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
}

function Input(props: InputProps): JSX.Element {
  const { onChange, value, placeholder } = props;

  return (
    <Styled.Wrapper>
      <input onChange={(event) => onChange(event.target.value)} value={value} placeholder={placeholder}/>
    </Styled.Wrapper>
  );
}

export default Input as React.FC<InputProps>;
