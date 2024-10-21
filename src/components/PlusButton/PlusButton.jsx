import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { styled } from "@mui/material/styles";
import colorThemes from "../../constants/colorThemes";

const SquareDiv = styled("div")(({ size, variant, themeMode }) => {
  const { primary, secondBackground } = colorThemes[variant];

  return {
    position: "relative",
    backgroundColor: secondBackground[themeMode],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: `${size}px`,
    aspectRatio: "1 / 1",
    borderRadius: "32%",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.1)",
    transform: "scale(1)",
    transition: "all 0.3s ease-in-out",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      borderRadius: "62%",
      opacity: "0%",
      width: "140%",
      height: "140%",
      backgroundColor: primary[themeMode],
      transform: "translate(100%, 120%) rotate(45deg)",
      transition: "all 0.3s ease-in-out",
    },
    "&:hover::after": {
      transform: "translate(-10%, 12%) rotate(45deg)",
      opacity: "100%",
    },
  };
});

const IconWrapper = styled(AddRoundedIcon)(({ themeMode, variant }) => {
  const { white, secondText } = colorThemes[variant];

  return {
    fontSize: 18,
    color: secondText[themeMode],
    zIndex: 1,
    transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
    "&.group-hover": {
      color: white[themeMode],
    },
  };
});

export default function PlusButton({ action, size, variant, themeMode }) {
  // const { theme } = useTheme(); // Obtendo o tema atual

  return (
    <SquareDiv
      onClick={action}
      size={size}
      variant={variant}
      className="group"
      themeMode={themeMode}
    >
      <IconWrapper
        className="group-hover:text-[white]"
        variant={variant}
        themeMode={themeMode}
      />
    </SquareDiv>
  );
}
