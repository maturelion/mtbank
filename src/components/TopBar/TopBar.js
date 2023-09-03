import React from "react";
import { TopBarContainer } from "./TopBar.styled";

const TopBar = (props) => {
  const { left, center, right } = props;

  return (
    <TopBarContainer>
      <div style={{ cursor: "pointer" }}>{left}</div>
      <div style={{}}>{center}</div>
      <div style={{ cursor: "pointer" }}>{right}</div>
    </TopBarContainer>
  );
};

export default TopBar;
