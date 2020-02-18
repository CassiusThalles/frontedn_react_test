import React from "react";
import styled from "styled-components";
import Logo from "../../images/PhotoUpload.svg";

import {
  ButtonToolbar,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";

export const ContainerImg = styled.div`
  display: flex;
  background: #ff6;
`;
export const ContainerCard = styled.div`
  margin: 40px 0px;
`;
export const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #3c91e6;
`;
export function TitleFacePay({ text1, text2 }) {
  let Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
  `;
  let Title = styled.p`
    color: #fff;
    font-size: 36px;
    font-weight: bold;
  `;
  let Subtitle = styled.p`
    font-size: 32px;
    color: #fff;
  `;
  return (
    <Container>
      <Title>{text1}</Title>
      <Subtitle>{text2}</Subtitle>
    </Container>
  );
}

export function PhotoCard({ text }) {
  let Container = styled.div`
    margin: 30px 0px;

    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #fa824c;
  `;

  let Title = styled.p`
    padding: 10px 10px;
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
  `;

  return (
    <Container>
      <img src={Logo} className="App-logo" alt="logo" />
      <Title>{text}</Title>
    </Container>
  );
}

export function ButtonNext({ text }) {
  return (
    <ButtonToolbar>
      <Button variant="primary" size="lg" active>
        {text}
      </Button>
    </ButtonToolbar>
  );
}

export function InputDuple({ text1, text2 }) {
  return (
    <InputGroup className="mb-3">
      <FormControl placeholder={text1} />
      <FormControl placeholder={text2} />
    </InputGroup>
  );
}
