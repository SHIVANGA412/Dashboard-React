import type React from "react"
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material"
import { TrendingUp, TrendingDown } from "@mui/icons-material"

interface StatsCardProps {
  title: string
  value: string
  subtitle: string
  trend: "up" | "down"
  trendValue: string
  icon: React.ReactElement
  iconColor: string
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, trend, trendValue, icon, iconColor }) => {
  return (
    <Card
      sx={{
        height: "100%",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        border: "1px solid #f0f0f0",
      }}
    >
      <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1.5,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#666",
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              backgroundColor: `${iconColor}20`,
              color: iconColor,
              "& .MuiSvgIcon-root": {
                fontSize: "1rem",
              },
            }}
          >
            {icon}
          </Avatar>
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
            fontWeight: 700,
            color: "#333",
            mb: 1,
            lineHeight: 1.2,
          }}
        >
          {value}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: trend === "up" ? "#4caf50" : "#f44336",
            }}
          >
            {trend === "up" ? <TrendingUp sx={{ fontSize: 14 }} /> : <TrendingDown sx={{ fontSize: 14 }} />}
            <Typography
              sx={{
                fontSize: "0.7rem",
                fontWeight: 600,
              }}
            >
              {trendValue}
            </Typography>
          </Box>
          {subtitle && (
            <Typography
              sx={{
                fontSize: "0.7rem",
                color: "#999",
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  )
}

export default StatsCard
