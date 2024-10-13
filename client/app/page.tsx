import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import Image from "next/image";
import foodImage from "./food.jpg";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
      }}
    >
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia sx={{ height: 300 }} image="/food.jpg" title="food">
          <Image src={foodImage} alt="My Image" width={500}></Image>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            AI Nutrition Planner
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            The AI Nutrition Planner is an innovative web application that
            leverages artificial intelligence to help users create personalized
            meal plans based on their dietary needs, health goals, and
            preferences.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="login">
            LOG IN
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
