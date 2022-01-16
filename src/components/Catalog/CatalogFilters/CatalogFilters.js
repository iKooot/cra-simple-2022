import React from 'react';
import { List, ListItem, Typography, Slider, Box} from '@mui/material';

function valuetext(value) {
    return `${value}°C`;
}

const CatalogFilters = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <List>
            <ListItem sx={{flexDirection: "column", alignItems: "flex-start"}}>
                <Typography variant="h6" component="h3">
                    By price:
                </Typography>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </ListItem>
        </List>
    );
};

export default CatalogFilters;