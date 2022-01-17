import React from 'react';
import {InputBase, Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        borderBottom: `1px solid ${theme.palette.divider}`,
        [theme.breakpoints.up('sm')]: {
            width: '15ch',
            '&:focus': {
                width: '25ch',
            },
        },
    },
}));


const FindByName = () => {
    return (
        <Box sx={{position: "relative"}}>
            <Box sx={{position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)"}}>
                <SearchIcon />
            </Box>
            <StyledInputBase
                placeholder="Search in catalog…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Box>
    );
};

export default FindByName;