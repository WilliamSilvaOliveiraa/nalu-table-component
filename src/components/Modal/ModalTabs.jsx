import React, { useState, useEffect } from "react";
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
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Button from "@mui/material/Button";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SmallCheckbox = styled(Checkbox)({
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
  padding: 4,
  "&.Mui-disabled": {
    color: "#CCCCCC",
    opacity: 0.6,
  },
  "&.Mui-checked.Mui-disabled": {
    color: "#B571EB",
    opacity: 0.3,
  },
});

const ModalContent = styled(Box)({
  width: 600,
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  boxShadow: 24,
  gap: "32px",
  padding: "32px",
  borderRadius: "24px",
});

const ModalTabs = ({ open, onClose, items, onSave, text }) => {
  const [checkedItems, setCheckedItems] = useState([]);

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

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-tabs-title"
      aria-describedby="modal-tabs-description"
    >
      <ModalContent>
        <div className="flex w-full justify-between">
          <div>
            <h2 id="modal-tabs-title" className="text-lg text-[#32363A]">
              Acrescentar tabs
            </h2>
            <p id="modal-tabs-description" className="text-base text-[#929090]">
              Controle quais tabs mostrar em {text}
            </p>
          </div>
          <IconButton onClick={onClose} sx={{ width: 30, height: 30 }}>
            <CloseRoundedIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </div>
        <List>
          {checkedItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                backgroundColor: item.checked ? "#F8F1FD" : "transparent",
                border: item.checked
                  ? "1px solid #B571EB"
                  : "1px solid #929090",
                borderRadius: "8px",
                marginBottom: index < checkedItems.length - 1 ? "16px" : "0px",
                gap: "4px",
              }}
            >
              <SmallCheckbox
                checked={item.checked}
                disabled={item.special}
                onChange={() => handleToggle(index)}
                sx={{
                  "&.Mui-checked": {
                    color: "#B571EB",
                    cursor: item.special ? "not-allowed" : "pointer", // Condição direta fora dos estilos aninhados
                  },
                  "&:not(.Mui-checked)": {
                    color: "#CCCCCC",
                    cursor: item.special ? "not-allowed" : "pointer", // Condição direta fora dos estilos aninhados
                  },
                }}
              />

              <ListItemText
                primary={item.title}
                sx={{
                  color: item.checked ? "#B571EB" : "#929090",
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
                backgroundColor: "#9a989c!important",
                borderRadius: "74px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",

                "&:hover": {
                  backgroundColor: "#817f82!important",
                },
              }}
              onClick={() => {
                onClose();
              }}
            >
              <p className="h-fit capitalize pt-[2px]"> Cancelar </p>
            </Button>
          </div>
          <div className="w-32">
            <Button
              sx={{
                width: "100%",
                backgroundColor: "#B571EB!important",
                borderRadius: "74px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",

                "&:hover": {
                  backgroundColor: "#9f53db!important",
                },
              }}
              onClick={() => {
                handleSave();
              }}
            >
              <p className="h-fit capitalize pt-[2px]"> Salvar </p>
            </Button>
          </div>
        </div>
      </ModalContent>
    </StyledModal>
  );
};

export default ModalTabs;
