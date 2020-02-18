import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";

import { CardMenu, CreditCard, Title, CreditButton, CardMain } from "./styles";

function Pay() {
  const [money, setMoney] = useState("1187,43");
  return (
    <Container style={{ margin: 0, maxWidth: "100%" }}>
      <Row style={{ flex: 1 }}>
        <Col style={{ margin: 0, padding: 0 }}>
          <Navbar bg="primary" variant="dark" fixed="left">
            <Navbar.Brand href="#home">FacePay</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Carteira Digital</Nav.Link>
              <Nav.Link href="#features">Minhas contas</Nav.Link>
              <Nav.Link href="#pricing">Suporte</Nav.Link>
              <Nav.Link href="#pricing">Configurações</Nav.Link>
              <Nav.Link href="#pricing">Notificações</Nav.Link>
            </Nav>
          </Navbar>
          <Row style={{ margin: 0, maxWidth: "100%" }}>
            <Col xs={10} style={{ margin: 0, padding: 0 }}>
              <CardMain>
                <Row style={{ paddingLeft: 15 }}>
                  <CreditCard
                    brand="visa"
                    number="4568"
                    name="Ezequiel lopes"
                    expires="26/16"
                  />
                  <CreditCard
                    brand="visa"
                    number="4568"
                    name="Ezequiel lopes"
                    expires="26/16"
                  />
                </Row>
                <Col>
                  <CreditButton text="Definir como cartão principal" color />
                  <br />
                  <CreditButton text="Bloquear cartão" />
                </Col>
                <div style={{ marginLeft: 20 }}>
                  <Row style={{ alignItems: "center", margin: "0 15" }}>
                    <Title size={16}>saldo disponível: </Title>
                    <Title size={26}>R${money}</Title>
                  </Row>
                </div>
              </CardMain>

              <br />
              <CardMain>
                <Row>
                  <Col xs={9}>
                    <p style={{ color: "#A2D729", fontSize: 26 }}>FaceCash</p>
                    <Title size={18}>fatura atual</Title>
                    <Title size={26}>R${money}</Title>
                  </Col>
                  <Col xs={3}>
                    <Button variant="warning" size="lg" disabled style={{margin: 10}}>
                      Fazer pagamento
                    </Button>
                    <Button variant="success" size="lg" disabled style={{margin: 10}}>
                      Trazer salário
                    </Button>
                    <Button variant="light" size="lg" disabled style={{margin: 10}}>
                      Bloquear conta
                    </Button>
                  </Col>
                </Row>
              </CardMain>
            </Col>

            <Col xl={1} style={{ margin: 0, padding: 0 }}>
              <CardMenu Subtitle="Meus Cartões" Text="..." />
              <CardMenu Subtitle="Pagar" Text="..." />
              <CardMenu Subtitle="FaceCash" Text="..." />
              <CardMenu Subtitle="Me ajuda" Text="..." />
              <CardMenu Subtitle="Indique" Text="..." />
              <CardMenu Subtitle="Configurar" Text="..." />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Pay;
