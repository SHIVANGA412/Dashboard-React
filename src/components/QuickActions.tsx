import type React from "react"
import { Card, CardContent, Typography, Button, Avatar, Box } from "@mui/material"
import { Add, Hotel, PersonAdd, LocalOffer, Send, Assessment } from "@mui/icons-material"
import LocationPinIcon from '@mui/icons-material/LocationPin';

interface QuickAction {
  title: string
  icon: React.ReactElement
  iconColor: string
}

const quickActions: QuickAction[] = [
  {
    title: "Add Trip",
    icon: <LocationPinIcon />,
    iconColor: "#1976d2",
  },
  {
    title: "Add Hotel",
    icon: <Hotel />,
    iconColor: "#4caf50",
  },
  {
    title: "New Lead",
    icon: <PersonAdd />,
    iconColor: "#ff9800",
  },
  {
    title: "Create Offer",
    icon: <LocalOffer />,
    iconColor: "#e91e63",
  },
  {
    title: "Send Quote",
    icon: <Send />,
    iconColor: "#9c27b0",
  },
  {
    title: "View Reports",
    icon: <Assessment />,
    iconColor: "#607d8b",
  },
]

const QuickActions: React.FC = () => {
  return (
    <Card
      sx={{
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        border: "1px solid #f0f0f0",
      }}
    >
      <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
        <Typography
          sx={{
            fontWeight: 600,
            color: "#333",
            mb: 0.5,
            fontSize: "0.95rem",
          }}
        >
          Quick Actions
        </Typography>

        <Typography
          sx={{
            fontSize: "0.75rem",
            color: "#666",
            mb: 2,
          }}
        >
          Common tasks and shortcuts
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 1.5 },
          }}
        >
          {quickActions.map((action) => (
            <Box
              key={action.title}
              sx={{
                flex: { xs: "1 1 calc(50% - 4px)", sm: "1 1 calc(33.333% - 8px)", md: "1 1 calc(16.666% - 10px)" },
              }}
            >
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0.75,
                  p: { xs: 1, sm: 1.5 },
                  width: "100%",
                  height: { xs: 60, sm: 70 },
                  backgroundColor: "#fff",
                  border: "1px solid #f0f0f0",
                  borderRadius: 2,
                  textTransform: "none",
                  color: "#333",
                  "&:hover": {
                    backgroundColor: "#f8f9fa",
                    borderColor: action.iconColor,
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: 24, sm: 28 },
                    height: { xs: 24, sm: 28 },
                    backgroundColor: `${action.iconColor}20`,
                    color: action.iconColor,
                    "& .MuiSvgIcon-root": {
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    },
                  }}
                >
                  {action.icon}
                </Avatar>
                <Typography
                  sx={{
                    fontSize: { xs: "0.65rem", sm: "0.7rem" },
                    fontWeight: 500,
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  {action.title}
                </Typography>
              </Button>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default QuickActions
