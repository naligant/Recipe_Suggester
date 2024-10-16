"use client"; // Mark the file as a client component

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link"; // Import Link from next/link
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";

const pages = [
  { name: "Add Ingredients", href: "/add-ingredients" },
  { name: "Meal Calc", href: "/meal" },
  { name: "Logout", href: "/login" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function CenteredBoxPage() {
  const [leftInput, setLeftInput] = React.useState("");
  const [rightInput, setRightInput] = React.useState("");
  const [fetchedData, setFetchedData] = React.useState("");
  const [marginTop, setMarginTop] = React.useState("30vh"); // Initial margin (centered)
  const [boxHeight, setBoxHeight] = React.useState("300px"); // Initial height
  const [transitionApplied, setTransitionApplied] = React.useState(false); // State to track if transition should be applied
  const [loading, setLoading] = React.useState(false); // State to manage loading animation

  // Function to handle button click
  const handleClick = async () => {
    setTransitionApplied(true); // Enable transition when button is clicked
    setMarginTop("20px"); // Move the box to the top of the screen
    setBoxHeight("150px"); // Reduce the height by half

    setLoading(true); // Start loading animation

    try {
      const response = await fetch("http://localhost:8000/submit_values", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ calories: leftInput, cuisine: rightInput }),
      });

      const data = await response.json();
      setFetchedData(data.ai_insight);
      console.log(data);
    } catch (error) {
      console.error("Error submitting calories and cuisine", error);
    } finally {
      setLoading(false); // Stop loading animation after request completes
    }
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        height: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        position: "relative", // Position relative for the centered box
        flexDirection: "column", // Allow vertical stacking
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppBar
          position="static"
          sx={{
            width: "100%",
            backgroundColor: "lightgray",
            boxShadow: "none",
          }}
        >
          <Container maxWidth={false}>
            <Toolbar disableGutters sx={{ padding: 0 }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/home"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Nutrition Planner
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                ></IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Link
                        href={page.href}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Typography sx={{ textAlign: "center" }}>
                          {page.name}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Nutrition Planner
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Button sx={{ my: 2, color: "black", display: "block" }}>
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "100%" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "80%", // Keep the width static
          maxWidth: "600px", // Max width remains the same
          height: boxHeight, // Dynamic height for shrinking
          borderRadius: "8px", // Rounded corners
          padding: 2,
          margin: "auto",
          marginTop: marginTop, // Dynamic margin for moving to the top
          textAlign: "center",
          backgroundColor: "#ffffff", // Custom background color
          boxShadow: 5, // Drop shadow from Material-UI theme
          transition: transitionApplied
            ? "margin-top 0.5s ease, height 0.5s ease"
            : "none", // Smooth transition for marginTop and height
        }}
      >
        <Box sx={{ display: "flex", width: "100%", mb: 2 }}>
          <TextField
            variant="outlined"
            label="Calorie Count"
            value={leftInput}
            onChange={(e) => setLeftInput(e.target.value)} // Update state on change
            sx={{
              flex: 1,
              mr: 1,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
            }} // Margin right for spacing
          />
          <TextField
            variant="outlined"
            label="Cuisine"
            value={rightInput}
            onChange={(e) => setRightInput(e.target.value)} // Update state on change
            sx={{
              flex: 1,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
            }} // Take equal space
          />
        </Box>
        {loading && <CircularProgress sx={{ mt: 2 }} />}{" "}
        {/* Show loader when loading */}
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            mt: 2,
            backgroundColor: "#007aff !important",
          }}
        >
          Plan Meal
        </Button>
      </Box>

      {fetchedData && ( // Conditionally render the textbox with the fetched data
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "70%",
          }}
        >
          <TextField
            variant="outlined"
            label="Response"
            value={fetchedData}
            multiline
            rows={20}
            fullWidth
            InputProps={{
              readOnly: true, // Make the TextField read-only
            }}
            sx={{
              width: "80%",
              maxWidth: "600px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              minheight: "200px",
            }}
          />
        </Box>
      )}
    </Box>
  );
}
