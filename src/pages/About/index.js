import React from 'react';
import { Typography, Grid, Box, ImageList, ImageListItem, Paper } from '@mui/material';
import img1 from '../../assets/img1-min.jpeg';
import img2 from '../../assets/img2-min.jpeg';
import img3 from '../../assets/img3-min.jpeg';
import img4 from '../../assets/img4-min.jpeg';
import DarkSection from "../../components/Layouts/DarkSection";
import LightSection from "../../components/Layouts/LightSection";
import FeatureItem from "../../components/AboutPage/FeatureItem";

import BuildIcon from '@mui/icons-material/Build';

const itemData = [
    {
        img: img1,
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: img2,
        title: 'Burger',
    },
    {
        img: img3,
        title: 'Burger',
    },
    {
        img: img4,
        title: 'Coffee',
        cols: 2,
    },
]

const featureData = [
    {
        title: 'Feature 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur debitis natus nulla omnis quaerat tempore voluptatibus! Accusantium adipisci deserunt eius minima molestias porro quos, repellat, repudiandae, rerum sint ut.',
        icon: BuildIcon
    },
    {
        title: 'Feature 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur debitis natus nulla omnis quaerat tempore voluptatibus! Accusantium adipisci deserunt eius minima molestias porro quos, repellat, repudiandae, rerum sint ut.',
        icon: BuildIcon
    },
    {
        title: 'Feature 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur debitis natus nulla omnis quaerat tempore voluptatibus! Accusantium adipisci deserunt eius minima molestias porro quos, repellat, repudiandae, rerum sint ut.',
        icon: BuildIcon
    },
    {
        title: 'Feature 4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur debitis natus nulla omnis quaerat tempore voluptatibus! Accusantium adipisci deserunt eius minima molestias porro quos, repellat, repudiandae, rerum sint ut.',
        icon: BuildIcon
    }
]

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}


const About = () => {
    return (
        <>
            <LightSection>
                <Grid container spacing={10} mb={10}>
                    <Grid item xl={6}>
                        <Typography variant="h1" component="h1">
                            About Cool Store
                        </Typography>
                        <Typography variant="p" comnponent="p" marginTop={4}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor expedita necessitatibus perspiciatis provident quasi rem! Doloremque doloribus, eligendi inventore maiores nemo neque odio omnis rerum sapiente similique ullam vel.
                        </Typography>
                    </Grid>
                    <Grid item xl={12}>
                        <ImageList
                            variant="quilted"
                            cols={4}
                            rowHeight={250}
                            gap={10}
                            sx={{overflow: "visible"}}
                        >
                            {itemData.map((item, i) => (
                                <ImageListItem
                                    key={item.img}
                                    cols={item.cols || 1} rows={item.rows || 1}
                                    sx={{
                                        borderRadius: "5px",
                                        border: "5px solid #2d334a",
                                        transform: `rotate(${ i % 2 === 0 ? 2 * (i + 1) :  -2 * (i + 1)}deg)`
                                    }}
                                >
                                    <img
                                        {...srcset(item.img, 300, item.rows, item.cols)}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                </Grid>
            </LightSection>
            <DarkSection>
                <Box paddingY={10}>
                    <Typography variant="h3" component="h2" mb={10}>
                        Our features
                    </Typography>
                    <Grid container spacing={10}>
                        {featureData.map( feature =>  (
                            <Grid item xl={3} key={feature.title}>
                                <FeatureItem title={feature.title} text={feature.text} icon={<feature.icon sx={{ fontSize: 40 }}/>} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </DarkSection>
        </>
    );
};

export default About;