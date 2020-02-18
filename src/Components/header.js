import React from "react";

function Header({ Route }) {
  return (
    <div className="headerDiv">
      <header>
        <span className="facepayHeader">
          <b>Face</b>Pay
        </span>
        <span className="inicio">
          <a href="/">Início</a>
        </span>
        <span className="pagamento">
          <a href="/">Pagamento</a>
        </span>
        <span className="carteiraDigital">
          <a href="/">Carteira digital</a>
        </span>
        <span className="sobreNos">
          <a href="/">Sobre nós</a>
        </span>
        <span className="cadastroHeader">Cadastre-se</span>
      </header>
      <div className="imageHeader">
        <div className="textOnImage"></div>
        <div className="textOnImageH1">Pagar nunca foi tão simpes!</div>
        <div className="textOnImageH3">
          Evite filas para pagar. Com FacePay você paga com o reconhecimento
          facial, sem precisar de um intermédio físico de pagamento!{" "}
        </div>
        <span className="imageButtonCadastro">
          <Route path="/cadastro" component="SignUp">
            <a href="/cadastro">Cadastre-se</a>
          </Route>
        </span>
      </div>
      '
    </div>
  );
}

export default Header;
