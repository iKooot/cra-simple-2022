import React from 'react';
import { Box, Button, ListItem, Typography, Slider, FormGroup, FormControlLabel, Checkbox, RadioGroup, FormLabel, Radio} from '@mui/material';

function valuetext(value) {
    return `${value}°C`;
}

const CatalogFilters = () => {
    const [value, setValue] = React.useState([20, 300]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <form>
            <FormGroup  sx={{gap: "20px", marginBottom: "20px"}}>
                <Box maxWidth="75%">
                    <FormLabel component="legend">By price:</FormLabel>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        max={1000}
                        min={20}
                    />
                </Box>
                <Box>
                    <FormLabel component="legend">By type:</FormLabel>
                    <RadioGroup
                        aria-label="type"
                        defaultValue="t-short"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="t-short" control={<Radio />} label="T-short" />
                        <FormControlLabel value="pants" control={<Radio />} label="Pants" />
                        <FormControlLabel value="shoes" control={<Radio />} label="Shoes" />
                        <FormControlLabel value="accessories" control={<Radio />} label="Accessories" />
                    </RadioGroup>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <FormLabel component="legend">By brand:</FormLabel>
                    <FormControlLabel control={<Checkbox />} label="Puma" />
                    <FormControlLabel control={<Checkbox />} label="Reebok" />
                    <FormControlLabel control={<Checkbox />} label="Adidas" />
                    <FormControlLabel control={<Checkbox />} label="Fallen" />
                </Box>
            </FormGroup>
            <Button variant="contained">Filter</Button>
        </form>
    )

    // return (
    //     <List>
    //         <ListItem sx={{flexDirection: "column", alignItems: "flex-start"}}>
    //             <FormLabel component="legend">By price</FormLabel>
    //             <Slider
    //                 getAriaLabel={() => 'Temperature range'}
    //                 value={value}
    //                 onChange={handleChange}
    //                 valueLabelDisplay="auto"
    //                 getAriaValueText={valuetext}
    //             />
    //         </ListItem>
    //         <ListItem sx={{flexDirection: "column", alignItems: "flex-start"}}>
    //             <FormLabel component="legend">By type</FormLabel>
    //             <RadioGroup
    //                 aria-label="type"
    //                 defaultValue="t-short"
    //                 name="radio-buttons-group"
    //             >
    //                 <FormControlLabel value="t-short" control={<Radio />} label="T-short" />
    //                 <FormControlLabel value="pants" control={<Radio />} label="Pants" />
    //                 <FormControlLabel value="shoes" control={<Radio />} label="Shoes" />
    //                 <FormControlLabel value="accessories" control={<Radio />} label="Accessories" />
    //             </RadioGroup>
    //         </ListItem>
    //         <ListItem sx={{flexDirection: "column", alignItems: "flex-start"}}>
    //             <Typography variant="h6" component="h3">
    //                 By brand:
    //             </Typography>
    //             <FormGroup>
    //                 <FormControlLabel control={<Checkbox />} label="Puma" />
    //                 <FormControlLabel control={<Checkbox />} label="Reebok" />
    //                 <FormControlLabel control={<Checkbox />} label="Adidas" />
    //                 <FormControlLabel control={<Checkbox />} label="Fallen" />
    //             </FormGroup>
    //         </ListItem>
    //     </List>
    // );
};

export default CatalogFilters;