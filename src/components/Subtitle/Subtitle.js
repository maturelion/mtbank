import React from "react";
import { SubtitleStyle } from "./Subtitle.styled";
import { Link } from "react-router-dom";

const Subtitle = (props) => {
  const { icon, name, link, linkName } = props;
  return (
    <SubtitleStyle>
      <div style={{ display: "flex", alignItems: "center" }}>
        {icon}
        <span style={{ marginInlineStart: "10px" }}>{name}</span>
      </div>
      <Link to={link}>{linkName}</Link>
    </SubtitleStyle>
  );
};

export default Subtitle;
