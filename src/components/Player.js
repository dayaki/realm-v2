import React from "react";
import styled from "styled-components/native";

const Player = ({ image }) => {
  return (
    <Container>
      <BackgroundImage source={{ uri: image }} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;
const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export default Player;
