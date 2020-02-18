import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Webcam from "react-webcam";

function Pay() {
  const [face, setFace] = useState("");
  return (
    <Container style={{ margin: 0, maxWidth: "100%", alignItems: "center", justifyContent: "center" }}>
      <Webcam
        ref={setFace}
        screenshotFormat="image/jpeg"
        height={720}
        width={1280}
      />
    </Container>
  );
}

export default Pay;
