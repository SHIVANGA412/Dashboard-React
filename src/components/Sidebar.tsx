import type React from "react";
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar } from "@mui/material";
import {
  Dashboard,
  Flight, Category, PinDrop, Hotel, Luggage,
  People,
  LocalOffer,
  AttachMoney,
  Web,
  Settings,
  Group,
  Email,
  Phone,
  Sms,
  BarChart,
  Edit,
  Delete,
  Visibility,
  AddCircleOutline,
  Apps,
} from "@mui/icons-material";
import {
  Palette,
  LocalHotel,
  DirectionsCar,
  AccessAlarm,
  Assignment,
} from "@mui/icons-material";

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#fff",
        height: "100%",
        borderRight: "1px solid #e0e0e0",
        p: 2,
        flexShrink: 0,
        overflowY: "auto",
        display: { xs: 'none', sm: 'block' }
      }}
    >
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
        <Avatar
          src="/logo.png" // Make sure this path is correct
          sx={{ width: 42, height: 42, mr: 1 }}
        />
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#333" }}
          >
            WanderCraft
          </Typography>
          <Typography
            sx={{ fontSize: "0.8rem", color: "#666" }}
          >
            Travel Solutions
          </Typography>
        </Box>
      </Box>

      {/* Main Navigation */}
      <List component="nav">
        <Typography
          sx={{ fontSize: "0.7rem", color: "#999", my: 1, ml: 1, textTransform: "uppercase" }}
        >
          Overview
        </Typography>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1, '&.Mui-selected': { backgroundColor: '#e3f2fd' } }} selected>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Dashboard sx={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 600, color: "#1976d2" }} />
          </ListItemButton>
        </ListItem>

        <Typography
          sx={{ fontSize: "0.7rem", color: "#999", my: 1, ml: 1, textTransform: "uppercase" }}
        >
          Trip Management
        </Typography>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Flight sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="All Trips" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Category sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Categories" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <PinDrop sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Destinations" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Luggage sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Itineraries" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>

        <Typography
          sx={{ fontSize: "0.7rem", color: "#999", my: 1, ml: 1, textTransform: "uppercase" }}
        >
          Inventory
        </Typography>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <LocalHotel sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Hotels" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Apps sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Activities" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <DirectionsCar sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Cab Booking" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>

        <Typography
          sx={{ fontSize: "0.7rem", color: "#999", my: 1, ml: 1, textTransform: "uppercase" }}
        >
          Sales & Marketing
        </Typography>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <People sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Leads" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <AttachMoney sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Quotations" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <LocalOffer sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Offers & Coupons" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <BarChart sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Banners" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>

        <Typography
          sx={{ fontSize: "0.7rem", color: "#999", my: 1, ml: 1, textTransform: "uppercase" }}
        >
          Content & SEO
        </Typography>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Web sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="CMS" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Settings sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="SEO Settings" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>

        <Typography
          sx={{ fontSize: "0.7rem", color: "#999", my: 1, ml: 1, textTransform: "uppercase" }}
        >
          Communication
        </Typography>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Email sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Email Marketing" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Sms sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="WhatsApp Marketing" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>

        <Typography
          sx={{ fontSize: "0.7rem", color: "#999", my: 1, ml: 1, textTransform: "uppercase" }}
        >
          System
        </Typography>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Settings sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Settings" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Group sx={{ color: "#666" }} />
            </ListItemIcon>
            <ListItemText primary="Users & Roles" primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;