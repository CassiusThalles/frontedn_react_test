import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="headerDiv">
      <header>
        <span className="facepayHeader">
          <b>Face</b>Pay
        </span>
        <span className="inicio">
          <Link to="/">Início</Link>
        </span>
        <span className="pagamento">
          <Link to="/">Pagamento</Link>
        </span>

        <span className="carteiraDigital">
          <Link to="/">Carteira digital</Link>
        </span>
        
        <span className="cadastroHeader" onClick={handleShow}>
          Entrar
        </span>
      </header>
      <div className="imageHeader">
        <div className="textOnImage"></div>
        <div className="textOnImageH1">Pagar nunca foi tão simpes!</div>
        <div className="textOnImageH3">
          Evite filas para pagar. Com FacePay você paga com o reconhecimento
          facial, sem precisar de um intermédio físico de pagamento!{" "}
        </div>
        <span className="imageButtonCadastro">
          <Link to="/cadastro">Cadastre-se</Link>
        </span>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>FacePay</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Email
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Senha
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Entrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;
