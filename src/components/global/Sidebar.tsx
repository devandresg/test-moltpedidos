import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { sideBarItemsData } from "../../data/global/SidebarData";
import LogoPastel from "../../assets/logo_pastel.png";
import { setToken } from "../../features/apiauth/apiAuthSlice";
import { useDispatch } from "react-redux";

interface SideBarProps {
  selectedItem: string;
}

export const SideBar: React.FC<SideBarProps> = ({ selectedItem }) => {
  const sideBarItems = sideBarItemsData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(setToken(null));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#eeeeee",
          padding: 2,
          borderRadius: 0,
          border: "none",
        },
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 150,
          backgroundColor: "#eeeeee",
        }}
      >
        <img src={LogoPastel} />
      </Box>

      {/* Lista de botones */}
      <List>
        {sideBarItems.map((item) => {
          return (
            <ListItemButton
              selected={selectedItem === item.name}
              onClick={() => navigate(item.url)}
              sx={{
                borderRadius: "15px",
                marginBottom: "15px",
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>

      {/* Enlace para cerrar sesión */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "200px",
          textAlign: "center",
          padding: 2,
        }}
      >
        <Link
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.secondary",
          }}
        >
          Cerrar Sesión
        </Link>
      </Box>
    </Drawer>
  );
};
