"use client";
import addIcon from '../images/add.png'
import logoutIcon from '../images/logout.png'
import profileIcon from '../images/profile-user.png'
import * as React from 'react';
import Image from 'next/image'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Box } from '@mui/material';
// import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Home() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);

    const Card = {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center'
    }
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 2,
                }}
            >
                <header>
                    <h1>This is the Homepage</h1>
                </header>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 2,
                    }}>
                    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        label="Add ingredients"
                        value="ingredients"
                        icon={<Image
                            src={addIcon}
                            alt="Add ingredients"
                            width={35}
                            height={35}/>}
                    />
                    <BottomNavigationAction
                        label="Logout"
                        value="logout"
                        icon={<Image
                            src={logoutIcon}
                            alt="Logout"
                            width={35}
                            height={35}/>}
                    />
                    <BottomNavigationAction
                        label="profile"
                        value="profile"
                        icon={<Image
                            src={profileIcon}
                            alt="Logout"
                            width={35}
                            height={35}/>}
                    />
                    </BottomNavigation>
                </Box>
            </Box>
        </>
    );
}