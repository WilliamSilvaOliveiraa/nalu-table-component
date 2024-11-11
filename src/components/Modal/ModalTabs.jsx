import { useState, useEffect } from "react";
import {
  Modal,
  Box,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Button from "@mui/material/Button";
import colorThemes from "../../constants/colorThemes";
import languages from "../../constants/languages";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SmallCheckbox = styled(Checkbox)(
  ({ themeMode, colorThemes, variant }) => ({
    "& .MuiSvgIcon-root": {
      fontSize: 20,
    },
    padding: 4,
    "&.Mui-disabled": {
      color: "#CCCCCC",
      opacity: 0.6,
    },
    "&.Mui-checked.Mui-disabled": {
      color: colorThemes[variant]?.borderChecked[themeMode] || "#000",
      opacity: 0.3,
    },
  })
);

const ModalContent = styled(Box)(({ themeMode, variant, colorThemes }) => ({
  width: 600,
  backgroundColor: colorThemes[variant]?.background[themeMode] || "#fff",
  display: "flex",
  flexDirection: "column",
  boxShadow: 24,
  gap: "32px",
  padding: "32px",
  borderRadius: "24px",
}));

const ModalTabs = ({
  open,
  onClose,
  items,
  onSave,
  text = "Table",
  variant,
  themeMode,
  languageProp,
}) => {
  const texts = languages[languageProp] || languages["en"];
  const [checkedItems, setCheckedItems] = useState([]);
  const {
    backgroundList,
    borderChecked,
    borderUnchecked,
    borderCheckedHover,
    primary,
    buttonCancel,
    buttonCancelHover,
    textTopModalSubtitle,
    notBorderChecked,

    textTopModal,
  } = colorThemes[variant];

  useEffect(() => {
    if (open) {
      setCheckedItems(items);
    }
  }, [open, items]);

  const handleToggle = (index) => {
    const newCheckedItems = checkedItems.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    setCheckedItems(newCheckedItems);
  };

  const handleSave = () => {
    onSave(checkedItems);
    onClose();
  };

  useEffect(() => {
    if (open) {
      const originalPaddingRight = window.getComputedStyle(
        document.body
      ).paddingRight;
      document.body.style.paddingRight = "12px";

      return () => {
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [open]);

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-tabs-title"
      aria-describedby="modal-tabs-description"
      keepMounted
    >
      <ModalContent
        themeMode={themeMode}
        colorThemes={colorThemes}
        variant={variant}
      >
        <div className="flex w-full justify-between">
          <div>
            <h2
              style={{
                color: textTopModal[themeMode],
              }}
              id="modal-tabs-title"
              className="text-lg "
            >
              {texts.addTabs}
            </h2>
            <p
              style={{
                color: textTopModalSubtitle[themeMode],
              }}
              id="modal-tabs-description"
              className="text-base "
            >
              {texts.subTitle} {text}
            </p>
          </div>
          <IconButton onClick={onClose} sx={{ width: 30, height: 30 }}>
            <CloseRoundedIcon
              sx={{ fontSize: 18, color: textTopModal[themeMode] }}
            />
          </IconButton>
        </div>
        <List>
          {checkedItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                backgroundColor: item.checked
                  ? backgroundList[themeMode]
                  : "transparent",
                border: item.checked
                  ? `1px solid ${borderChecked[themeMode]}`
                  : `1px solid ${borderUnchecked[themeMode]}`,
                borderRadius: "8px",
                marginBottom: index < checkedItems.length - 1 ? "16px" : "0px",
                gap: "4px",
              }}
            >
              <SmallCheckbox
                checked={item.checked}
                disabled={item.special}
                onChange={() => handleToggle(index)}
                themeMode={themeMode}
                colorThemes={colorThemes}
                variant={variant}
                sx={{
                  "&.Mui-checked": {
                    color: borderChecked[themeMode],
                    cursor: item.special ? "not-allowed" : "pointer",
                  },
                  "&:not(.Mui-checked)": {
                    color: notBorderChecked[themeMode],
                    cursor: item.special ? "not-allowed" : "pointer",
                  },
                }}
              />

              <ListItemText
                primary={item.title}
                sx={{
                  color: item.checked
                    ? borderChecked[themeMode]
                    : borderUnchecked[themeMode],
                }}
                primaryTypographyProps={{
                  fontSize: "12px",
                }}
              />
            </ListItem>
          ))}
        </List>

        <div className="mt-0 flex w-full justify-between">
          <div className="w-32">
            <Button
              sx={{
                width: "100%",
                backgroundColor: buttonCancel[themeMode],
                borderRadius: "74px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",

                "&:hover": {
                  backgroundColor: buttonCancelHover[themeMode],
                },
              }}
              onClick={() => {
                onClose();
              }}
            >
              <p className="h-fit capitalize pt-[2px]"> {texts.cancel} </p>
            </Button>
          </div>
          <div className="w-32">
            <Button
              sx={{
                width: "100%",
                backgroundColor: primary[themeMode],
                borderRadius: "74px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",

                "&:hover": {
                  backgroundColor: borderCheckedHover[themeMode],
                },
              }}
              onClick={() => {
                handleSave();
              }}
            >
              <p className="h-fit capitalize pt-[2px]">{texts.save} </p>
            </Button>
          </div>
        </div>
      </ModalContent>
    </StyledModal>
  );
};

// Define a forma dos itens na prop items (que vem de tableData.tabs)
const TabItemShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  special: PropTypes.bool,
});

// PropTypes ajustadas para refletir exatamente como você está usando o componente
ModalTabs.propTypes = {
  text: PropTypes.string.isRequired, // modalTitle
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired, // handleClose
  items: PropTypes.arrayOf(TabItemShape).isRequired, // tableData.tabs
  onSave: PropTypes.func.isRequired, // handleSaveTabs
  variant: PropTypes.string.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default ModalTabs;
