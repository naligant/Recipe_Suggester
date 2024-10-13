"use client";
import * as React from 'react';
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

const pages = [
    { name: 'Add Ingredients', href: '/add-ingredients' },
    { name: 'Meal Calc', href: '/meal' },
    { name: 'Logout', href: '/logout' }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// For ingredient information
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);

const card_1 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Eggs
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  const card_2 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Milk
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  const card_3 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Bread
        </Typography>
      </CardContent>
    </React.Fragment>
  );

export default function Home() {
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
                <AppBar position="static" sx={{ width: '100%', backgroundColor: 'lightgray', boxShadow: 'none' }}>
                    <Container maxWidth={false}>
                        <Toolbar disableGutters sx={{ padding: 0 }}>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
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
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                <header>
                    <h1>About</h1>
                </header>
                <p>
                    Ever found yourself staring at your pantry, unsure of what to cook with the ingredients you have? 
                    This web app takes the guesswork out of meal planning! Just enter your ingredients, set your desired 
                    calorie count, choose your preferred cuisine, and voilà—your custom-made recipe is ready! Say goodbye 
                    to indecision and hello to delicious, tailored meals at home!
                </p>
                <header>
                    <h1>Current Ingredients</h1>
                </header>
                <Box sx={{ 
                    alignContent: 'center',
                    minWidth: 275,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2 }}>
                    <Card variant="outlined">{card_1}</Card>
                    <Card variant="outlined">{card_2}</Card>
                    <Card variant="outlined">{card_3}</Card>
                </Box>
                <header>
                    <h1>Previous Recipes</h1>
                </header>
            </Box>

        </>
    );
}
