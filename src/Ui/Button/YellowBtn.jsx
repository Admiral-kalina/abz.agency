import React from 'react';
import styled from 'styled-components';

const YellowBtn = (props) => {

    return (
        <Button {...props}>{props.children}</Button>
    );
};

const Button = styled.button`
  font-size: 16px;
  line-height: 26px;
  background-color: #f4E041;
  width: 100px;
  height: 34px;
  border: none;
  border-radius: 15px;
`

export default YellowBtn;
