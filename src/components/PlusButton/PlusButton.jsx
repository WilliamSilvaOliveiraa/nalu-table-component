import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

const SquareDiv = styled("div")(({ size }) => ({
  position: "relative",
  backgroundColor: "#F2E2FE",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: `${size}px`,
  aspectRatio: "1 / 1",
  borderRadius: "32%",
  overflow: "hidden",
  cursor: "pointer",
  boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.1)",
  // border: "1px solid #ffe0fe",
  transform: "scale(1)",

  transition: "all 0.3s ease-in-out",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0, // Alinha ao fundo
    left: 0, // Alinha à esquerda

    borderRadius: "62%",
    opacity: "0%",
    width: "140%",
    height: "140%",
    backgroundColor: "#8f1cfd",

    transform: "translate(100%, 120%) rotate(45deg)", // Inicia fora da tela (direita e baixo)
    transition: "all  0.3s ease-in-out",
  },
  "&:hover::after": {
    transform: "translate(-10%, 12%) rotate(45deg)", // Move para a posição original (esquerda e cima)
    opacity: "100%",
  },
}));

const IconWrapper = styled(AddRoundedIcon)(({ theme }) => ({
  fontSize: 18,
  color: "#7028A2",
  zIndex: 1,
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
}));

export default function PlusButton({ action, size }) {
  return (
    <SquareDiv onClick={action} size={size} className="group">
      <IconWrapper className="group-hover:text-[white]" />
    </SquareDiv>
  );
}
