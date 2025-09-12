import type React from "react";
import { Box, Typography, Button, Avatar, IconButton } from "@mui/material";
import {
  NotificationsOutlined,
  Search,
  Add,
  People,
  BookOnline,
  CurrencyRupee,
  Percent,
} from "@mui/icons-material";
import StatsCard from "./StatsCard";
import InventoryOverview from "./InventoryOverview";
import RecentLeads from "./RecentLeads";
import QuickActions from "./QuickActions";

const MainContent: React.FC = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: { xs: 1.5, sm: 2, md: 2.5 },
        backgroundColor: "#f8f9fa",
        overflow: "auto",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "#fff",
              borderRadius: 1,
              px: 2,
              py: 0.75,
              border: "1px solid #e0e0e0",
              minWidth: { xs: "100%", sm: 250, md: 300 },
            }}
          >
            <Search sx={{ color: "#666", fontSize: 18 }} />
            <Typography
              sx={{
                color: "#999",
                fontSize: "0.8rem",
              }}
            >
              Search trips, hotels, leads...
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton size="small">
            <NotificationsOutlined fontSize="small" />
          </IconButton>
          <Avatar
            sx={{
              width: 28,
              height: 28,
              backgroundColor: "#1976d2",
              fontSize: "0.75rem",
            }}
          >
            AD
          </Avatar>
        </Box>
      </Box>

      {/* Dashboard Header */}
      <Box sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 1, md: 0 },
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 0.5,
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
              }}
            >
              <span style={{ color: "#1976d2" }}>Dashboard</span>
              <span style={{ color: "#a17b5aff" }}> Overview</span>
            </Typography>
            <Typography
              sx={{
                color: "#000000fc",
                fontSize: "0.8rem",
              }}
            >
              Welcome back! Here's what's happening with your travel business
              today.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Button
              variant="outlined"
              size="small"
              sx={{
                textTransform: "none",
                borderColor: "#e0e0e0",
                color: "#666",
                fontSize: "0.8rem",
              }}
            >
              Download Report
            </Button>
            <Button
              variant="contained"
              startIcon={<Add />}
              size="small"
              sx={{
                textTransform: "none",
                color: "#fff", // Text color
                background: "linear-gradient(to right, #1976d2, #ff9800)",
                fontSize: "0.8rem",
                "&:hover": {
                  opacity: 0.9,
                },
              }}
            >
              Add New Lead
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 1.5, sm: 2, md: 2.5 },
          mb: 2.5,
        }}
      >
        <Box
          sx={{
            flex: {
              xs: "1 1 100%",
              sm: "1 1 calc(50% - 8px)",
              md: "1 1 calc(25% - 19px)",
            },
          }}
        >
          <StatsCard
            title="Total Leads"
            value="1,234"
            subtitle="vs last month"
            trend="up"
            trendValue="12%"
            icon={<People />}
            iconColor="#3f51b5"
          />
        </Box>
        <Box
          sx={{
            flex: {
              xs: "1 1 100%",
              sm: "1 1 calc(50% - 8px)",
              md: "1 1 calc(25% - 19px)",
            },
          }}
        >
          <StatsCard
            title="Active Bookings"
            value="89"
            subtitle="bookings last month"
            trend="up"
            trendValue="8%"
            icon={<BookOnline />}
            iconColor="#4caf50"
          />
        </Box>
        <Box
          sx={{
            flex: {
              xs: "1 1 100%",
              sm: "1 1 calc(50% - 8px)",
              md: "1 1 calc(25% - 19px)",
            },
          }}
        >
          <StatsCard
            title="Revenue (Month)"
            value="₹5,67,890"
            subtitle=""
            trend="up"
            trendValue="15%"
            icon={<CurrencyRupee />}
            iconColor="#ff9800"
          />
        </Box>
        <Box
          sx={{
            flex: {
              xs: "1 1 100%",
              sm: "1 1 calc(50% - 8px)",
              md: "1 1 calc(25% - 19px)",
            },
          }}
        >
          <StatsCard
            title="Conversion Rate"
            value="12.5%"
            subtitle=""
            trend="up"
            trendValue="3%"
            icon={<Percent />}
            iconColor="#e91e63"
          />
        </Box>
      </Box>

      {/* Content Sections */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // ✅ row on desktop
          gap: 2,
          mb: 2.5,
          width: "100%",
        }}
      >
        {/* Inventory Overview (Left) */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "0 0 40%" }, // ✅ fixed 40%
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            p: 2,
          }}
        >
          <InventoryOverview />
        </Box>

        {/* Recent Leads (Right) */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "0 0 60%" }, // ✅ fixed 60%
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            p: 2,
          }}
        >
          <RecentLeads />
        </Box>
      </Box>

      {/* Quick Actions */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          p: 2,
        }}
      >
        <QuickActions />
      </Box>
    </Box>
  );
};

export default MainContent;
