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
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const pages = [
    { name: 'Add Ingredients', href: '/add-ingredients' },
    { name: 'Meal Calc', href: '/meal' },
    { name: 'Logout', href: '/login' }
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
                <div>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Frittata</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="body1">
            A frittata is an Italian egg dish similar to a crustless quiche.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Ingredients:
        </Typography>
        <Typography variant="body1">
            - 6 large eggs (about 420 calories)
            <br />
            - 1/2 cup milk (about 75 calories)
            <br />
            - 4 slices of bread (about 480 calories)
            <br />
            - 1/4 cup olive oil (about 480 calories)
            <br />
            - Vegetables of your choice (optional, calories may vary)
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Instructions:
        </Typography>
        <Typography variant="body1">
            1. Preheat your oven to 375°F (190°C).
            <br />
            2. Whisk together the eggs and milk in a bowl. Add salt and pepper.
            <br />
            3. Meanwhile, heat the olive oil in an oven-safe skillet over medium heat.
            <br />
            4. If you're using vegetables, sauté them in the oil until tender.
            <br />
            5. Tear or cut the bread into small pieces and add to the skillet, mixing with the vegetables.
            <br />
            6. Pour the egg mixture over the bread and vegetables, cooking until the edges begin to set (about 5 minutes).
            <br />
            7. Transfer the skillet to the oven and bake for 15-20 minutes until the top is set and golden.
        </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Strata</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="body1">
            A strata is a savory bread pudding that incorporates eggs and milk.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Ingredients:
        </Typography>
        <Typography variant="body1">
            - 6 slices of bread (about 600 calories)
        </Typography>
        <Typography variant="body1">
            - 6 large eggs (about 420 calories)
        </Typography>
        <Typography variant="body1">
            - 2 cups milk (about 300 calories)
        </Typography>
        <Typography variant="body1">
            - 1/4 cup olive oil (about 480 calories)
        </Typography>
        <Typography variant="body1">
            - Salt, pepper, and herbs (optional)
        </Typography>
        
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Instructions:
        </Typography>
        <Typography variant="body1">
            1. Preheat oven to 350°F (175°C).
        </Typography>
        <Typography variant="body1">
            2. Tear the bread into pieces and place in a greased baking dish.
        </Typography>
        <Typography variant="body1">
            3. In a bowl, whisk together eggs, milk, salt, pepper, and any herbs of choice.
        </Typography>
        <Typography variant="body1">
            4. Pour the egg mixture over the bread and allow it to soak for about 15 minutes.
        </Typography>
        <Typography variant="body1">
            5. Drizzle olive oil over the top and stir gently to combine.
        </Typography>
        <Typography variant="body1">
            6. Bake for 30-40 minutes until the top is golden and a knife inserted comes out clean.
        </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
            </Box>

        </>
    );
}
