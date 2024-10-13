'use client'

import React, { useState } from 'react';
import './IngredientInput.css'; // Import for simple styling
import Link from 'next/link'; // Import Link from next/link
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Stack from '@mui/material/Stack';


const pages = [
  { name: 'Add Ingredients', href: '/add-ingredients' },
  { name: 'Meal Calc', href: '/meal' },
  { name: 'Logout', href: '/login' }
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const IngredientInput: React.FC = () => {
  
  const [ingredient, setIngredient] = useState<string>(''); // State for the current input
  const [ingredientsList, setIngredientsList] = useState<string[]>([]); // State for the list of ingredients
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true); // Open dropdown by default

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value);
  };

  const handleAddIngredient = () => {
    if (ingredient.trim()) {
      setIngredientsList((prevIngredients) => [...prevIngredients, ingredient]);
      setIngredient(''); // Clear input after adding
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddIngredient();
    }
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredientsList((prevIngredients) =>
      prevIngredients.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    console.log("Submitted ingredients:", ingredientsList);

    // Send the ingredientsList to the FastAPI backend
    try {
      const response = await fetch('http://localhost:8000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients: ingredientsList }), // Send the list in the request body
      });

      const data = await response.json(); // Handle the response if needed
      console.log(data); // Log the response for debugging
    } catch (error) {
      console.error("Error submitting ingredients:", error);
    }

    // Clear all the ingredients after submission
    // setIngredientsList([]);
    
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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
    <>
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <AppBar position="static" sx={{ 
        width: '100%', 
        backgroundColor: 'lightgray', 
        boxShadow: 'none' }}>
                    <Container maxWidth={false}>
                        <Toolbar disableGutters sx={{ padding: 0 }}>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/home"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                             Nutrition Planner
                        </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{ display: { xs: 'block', md: 'none' } }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                            <Link href={page.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
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
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                }}
                            >
                                Nutrition Planner
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Link key={page.name} href={page.href} style={{ textDecoration: 'none' }}>
                                        <Button sx={{ my: 2, color: 'black', display: 'block' }}>
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
                                    sx={{ mt: '100%' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                </Box>            
      <div className="ingredient-input-container">
        <div className="left-menu">
          <div className="input-section">
            <h3>Enter Ingredient:</h3>
            <div className="input-box">
              <input
                type="text"
                value={ingredient}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress} // Add this to handle Enter key
                placeholder="Type an ingredient"
              />
              
            </div>
          </div>

          {isDropdownOpen && (
            <ul className="dropdown-list">
              {ingredientsList.map((ing, index) => (
                <li key={index} className="ingredient-item">
                  {ing}
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveIngredient(index)}
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Use a form with onSubmit to call handleSubmit */}
          <Stack spacing = {2} direction = "row">
            <form id="ingredient_form" onSubmit={handleSubmit}>
          
                <button type = "submit" className = "submit-button"> Submit </button>
            
            </form>
          <a href = "/meal" target = "_self" rel = "noopener noreferrer"><button type = "submit" className = "submit-button"> Continue </button></a>
          </Stack>
        </div>
      </div>
      </>
  );
};

export default IngredientInput;
