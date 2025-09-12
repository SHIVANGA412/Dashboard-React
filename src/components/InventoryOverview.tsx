import React from "react"
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material"
import LuggageIcon from "@mui/icons-material/Luggage"
import LocalHotelIcon from "@mui/icons-material/LocalHotel"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import CameraAltIcon from "@mui/icons-material/CameraAlt"

interface InventoryItem {
  name: string
  total: number
  active: number
  icon: React.ReactNode
}

const inventory: InventoryItem[] = [
  {
    name: "Trip Packages",
    total: 156,
    active: 142,
    icon: <LuggageIcon sx={{ color: "#1976d2" }} />,
  },
  {
    name: "Hotels Listed",
    total: 89,
    active: 83,
    icon: <LocalHotelIcon sx={{ color: "#f50057" }} />,
  },
  {
    name: "Activities",
    total: 234,
    active: 221,
    icon: <CameraAltIcon sx={{ color: "#4caf50" }} />,
  },
  {
    name: "Cab Services",
    total: 65,
    active: 42,
    icon: <DirectionsCarIcon sx={{ color: "#2196f3" }} />,
  },
]

const InventoryOverview: React.FC = () => {
  return (
    <Card
      sx={{
        height: "100%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        border: "1px solid #f0f0f0",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#333",
            }}
          >
            Inventory Overview
          </Typography>
          <Button
            size="small"
            sx={{
              textTransform: "none",
              color: "#1976d2",
              fontSize: "0.75rem",
              fontWeight: 500,
              minWidth: "auto",
            }}
          >
            View All
          </Button>
        </Box>
        <Typography
          sx={{
            fontSize: "0.875rem",
            color: "#666",
            mb: 3,
          }}
        >
          Your travel inventory at a glance
        </Typography>
        <List sx={{ p: 0 }}>
          {inventory.map((item, index) => (
            <ListItem
              key={item.name}
              sx={{
                px: 0,
                py: 2,
                borderBottom:
                  index < inventory.length - 1 ? "1px solid #f0f0f0" : "none",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", flexGrow: 1, gap: 2 }}
              >
                {item.icon}
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "#333",
                        fontSize: "0.875rem",
                      }}
                    >
                      {item.name}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      component="span" // Corrects the HTML nesting error
                      sx={{
                        fontSize: "0.75rem",
                        color: "#666",
                      }}
                    >
                      {item.active} active of {item.total} total
                    </Typography>
                  }
                />
              </Box>
              <Button
                size="small"
                sx={{
                  textTransform: "none",
                  color: "#1976d2",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  minWidth: "auto",
                  px: 2,
                }}
              >
                View
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default InventoryOverview