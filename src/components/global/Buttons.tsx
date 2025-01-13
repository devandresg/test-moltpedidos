import { ArrowDropDownSharp, ArrowDropUpSharp } from "@mui/icons-material";
import { Button, Menu } from "@mui/material";
import { useState } from "react";

interface DropDownButtonProps {
  label: string;
  children: React.ReactNode;
}

export const DropDownButton: React.FC<DropDownButtonProps> = ({
  label,
  children,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        sx={{
          border: "solid 1px #CECACB",
          borderRadius: "15px",
          color: "text.secondary",
          textTransform: "none",
          minWidth: "120px",
        }}
        onClick={handleOpenMenu}
        endIcon={anchorEl ? <ArrowDropUpSharp /> : <ArrowDropDownSharp />}
      >
        {label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {children}
      </Menu>
    </>
  );
};

interface PrimaryButtonProps {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  startIcon,
  endIcon,
  onClick,
}) => {
  return (
    <Button
      sx={{
        backgroundColor: "#5945DC",
        color: "white",
        borderRadius: "15px",
        textTransform: "none",
        minWidth: "120px",
      }}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

interface SecondaryOutlinedButtonProps {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
}

export const PrimaryOutlinedButton: React.FC<SecondaryOutlinedButtonProps> = ({
  label,
  startIcon,
  endIcon,
  onClick,
}) => {
  return (
    <Button
      sx={{
        border: "solid 1px #5945DC",
        borderRadius: "15px",
        color: "#5945DC",
        textTransform: "none",
        minWidth: "120px",
      }}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
