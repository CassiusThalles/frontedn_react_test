import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  InputGroup,
  FormControl,
  ButtonToolbar,
  Button
} from "react-bootstrap";

import {
  Title,
  ContainerImg,
  TitleFacePay,
  PhotoCard,
  ContainerCard
} from "./styles";

import ImageSignUp from "../../images/image9.png";

function Signup() {
  return (
    <Container style={{ margin: 0, maxWidth: "100%" }}>
      <Row style={{ flex: 1 }}>
        <Col xl={5} style={{ margin: 0, padding: 0 }}>
          <ContainerImg>
            <Image src={ImageSignUp} />
            <TitleFacePay text1="Face" text2="Pay" />
          </ContainerImg>
        </Col>
        <Col xl={7}>
          <ContainerCard>
            <Title>Dados pessoais</Title>
            <InputGroup className="mb-3">
              <FormControl placeholder="Nome" />
              <FormControl placeholder="Sobrenome" />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl placeholder="Data nascimento" />
              <FormControl placeholder="CPF" />
            </InputGroup>
            <PhotoCard text="Envie a foto do seu documento" />
          </ContainerCard>
          <ContainerCard>
            <Title>Endereço</Title>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <FormControl
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder="CEP"
                />
              </InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">
                Não sabe seu CEP?
              </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Endereço"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl placeholder="Numero" />
              <FormControl placeholder="Complemento" />
              <FormControl placeholder="Bairro" />
            </InputGroup>
            <PhotoCard text="Envie a foto do seu comprovante de residência" />

            <ButtonToolbar>
              <Button variant="primary" size="lg" active>
                Próximo
              </Button>
            </ButtonToolbar>
          </ContainerCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
