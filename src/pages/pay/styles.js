import React from "react";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";

export function CardMenu({ Subtitle, Text }) {
  let Container = styled.div`
    margin: 10px 0px;
    align-items: center;
    justify-content: center;
  `;
  return (
    <Container>
      <Card style={{ width: "14rem" }}>
        <Card.Body>
          <div style={{ alignItems: "center", justifyContent: "center" }}>
            <Card.Text>{Text}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              {Subtitle}
            </Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export function CreditCard({ brand, number, name, expires }) {
  let Container = styled.div`
    background: #1890ff;
    margin: 10px 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14);
    border-radius: 4px;
    width: 16rem;
  `;

  let Brand = styled.p`
    padding-left: 15px;
    color: #fff;
  `;
  let Number = styled.p`
    color: #fff;
  `;
  let Name = styled.p`
    padding-left: 15px;
    color: #fff;
  `;
  let Expires = styled.p`
    padding-right: 15px;
    color: #fff;
  `;

  return (
    <Container>
      <Brand>{brand}</Brand>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Number>**** **** **** {number}</Number>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 0,
          padding: 0,
          justifyContent: "space-between"
        }}
      >
        <Name>{name}</Name>
        <Expires>{expires}</Expires>
      </div>
    </Container>
  );
}

export const Title = styled.p`
  color: #3c91e6;
  padding: 0px 5px;
  font-size: ${props => props.size}px;
`;

export function CreditButton({ color, text }) {
  let CreditButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 300px;
    height: 40px;
    background: ${color ? "#FA824C" : "#fff"};
  `;
  let Text = styled.p`
    color: ${color ? "#fff" : "#000"};
  `;
  return (
    <div style={{ padding: 5 }}>
      <Button variant={color ? "success" : "light "}>{text}</Button>
    </div>
  );
}

export const CardMain = styled.div`
  border-radius: 6px;
  margin: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14);
  max-width: 80%;
`;
