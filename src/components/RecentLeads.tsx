import type React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  Chip,
} from "@mui/material";
import { People } from "@mui/icons-material";

interface Lead {
  name: string;
  package: string;
  amount: string;
  status: "New" | "Contact" | "Confirmed" | "Negotiating";
}

// A more scalable way to manage status colors
const statusColorMap = {
  New: "#ff9800",
  Contact: "#ff9800",
  Confirmed: "#4caf50",
  Negotiating: "#2196f3",
};

const leads: Lead[] = [
  {
    name: "Priya Sharma",
    package: "Goa • Family Package",
    amount: "₹45,000",
    status: "New",
  },
  {
    name: "Rahul Kumar",
    package: "Kerala • Honeymoon",
    amount: "₹75,000",
    status: "Contact",
  },
  {
    name: "Amit Patel",
    package: "Rajasthan • Cultural Tour",
    amount: "₹1,20,000",
    status: "Confirmed",
  },
  {
    name: "Sneha Gupta",
    package: "Himachal • Adventure",
    amount: "₹85,000",
    status: "Negotiating",
  },
];

const RecentLeads: React.FC = () => {
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <People sx={{ color: "#1976d2", fontSize: 20 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#333",
              }}
            >
              Recent Leads
            </Typography>
          </Box>
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
          Latest inquiries and their status
        </Typography>
        <List sx={{ p: 0 }}>
          {leads.map((lead, index) => (
            <ListItem
              key={lead.name}
              sx={{
                px: 0,
                py: 2,
                borderBottom:
                  index < leads.length - 1 ? "1px solid #f0f0f0" : "none",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "#333",
                        fontSize: "0.875rem",
                        mb: 0.5,
                      }}
                    >
                      {lead.name}
                    </Typography>
                  }
                  secondary={
                    <Box
                      component="span" // This is the crucial fix!
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <Typography
                        component="span" // Add this line
                        sx={{
                          fontSize: "0.75rem",
                          color: "#666",
                        }}
                      >
                        {lead.package}
                      </Typography>
                      <Chip
                        component="span" // Add this line
                        label={lead.status}
                        size="small"
                        sx={{
                          backgroundColor: `${statusColorMap[lead.status]}20`,
                          color: statusColorMap[lead.status],
                          fontSize: "0.65rem",
                          height: 20,
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                  }
                />
              </Box>
              <Box sx={{ textAlign: "right" }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#333",
                    fontSize: "0.875rem",
                    mb: 0.5,
                  }}
                >
                  {lead.amount}
                </Typography>
                <Button
                  size="small"
                  sx={{
                    textTransform: "none",
                    color: "#1976d2",
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    minWidth: "auto",
                    px: 1,
                  }}
                >
                  View Details
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentLeads;
