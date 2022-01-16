import React from 'react';
import {Typography, Button, Grid, Box} from '@mui/material';
import img1 from '../../assets/img1-min.jpeg';
import img2 from '../../assets/img2-min.jpeg';
import img3 from '../../assets/img4-min.jpeg';
import imgDark1 from '../../assets/img-dark-1-min.jpeg';
import imgDark2 from '../../assets/img-dark-2-min.jpeg';
import imgDark3 from '../../assets/img-dark-3-min.jpeg';
import {useSelector} from "react-redux";

const Home = () => {
    const {mode} = useSelector( state => state.theme);

    return (
        <Grid container spacing={10} paddingTop={10} sx={{height: "100vh", overflow:  "hidden"}}>
            <Grid item sx={{maxWidth: "50%"}}>
                <Typography variant="h1" component="h1" marginBottom={2}>Welcome to the <br/> Cool Store</Typography>
                <Typography variant="p" component="p" marginBottom={10}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur eius molestias perferendis ut? Architecto corporis culpa deleniti eaque incidunt maxime officia placeat provident qui repudiandae unde, voluptas. Quibusdam, velit!</Typography>
                <Button size="large" variant="contained">Go to the catalog</Button>
            </Grid>
            <Grid item>
                <Box sx={{
                    position: "relative",
                    zIndex: "-1"
                }}>
                    <Box
                        src={mode === "light" ? img1 : imgDark1}
                        alt="cool store 1"
                        component="img"
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "auto",
                            width: 500,
                            borderRadius: "5px",
                            outline: "5px solid #2d334a",
                            boxShadow: "2px 2px 10px rgba(0, 0, 0, .25)",
                            transform: "rotate(5deg)"
                        }}
                    >
                    </Box>
                    <Box
                        src={mode === "light" ? img2 : imgDark2}
                        alt="cool store 1"
                        component="img"
                        sx={{
                            position: "absolute",
                            top: "250px",
                            left: "50px",
                            height: "auto",
                            width: 500,
                            borderRadius: "5px",
                            outline: "5px solid #2d334a",
                            boxShadow: "2px 2px 10px rgba(0, 0, 0, .25)",
                            transform: "rotate(-5deg)"
                        }}
                    >
                    </Box>
                    <Box
                        src={mode === "light" ? img3 : imgDark3}
                        alt="cool store 1"
                        component="img"
                        sx={{
                            position: "absolute",
                            top: "280px",
                            left: "-300px",
                            height: "auto",
                            width: 400,
                            borderRadius: "5px",
                            outline: "5px solid #2d334a",
                            boxShadow: "2px 2px 10px rgba(0, 0, 0, .25)",
                            transform: "rotate(10deg)"
                        }}
                    >
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Home;