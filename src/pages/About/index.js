import React from "react";
import { Typography, Grid, Box, ImageList, ImageListItem } from "@mui/material";
import { LightSection, DarkSection } from "../../components/Layouts";
import { FeatureItem } from "../../components/AboutPage";

import { featureData, itemData } from "./indexData";

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
            <Typography
              variant="h1"
              component="h1"
              color="sectionLight.headline"
            >
              About Cool Store
            </Typography>
            <Typography variant="p" comnponent="p" marginTop={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos dolor expedita necessitatibus perspiciatis provident
              quasi rem! Doloremque doloribus, eligendi inventore maiores nemo
              neque odio omnis rerum sapiente similique ullam vel.
            </Typography>
          </Grid>
          <Grid item xl={12}>
            <ImageList
              variant="quilted"
              cols={4}
              rowHeight={250}
              gap={10}
              sx={{ overflow: "visible" }}
            >
              {itemData.map((item, i) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                  sx={{
                    borderRadius: "5px",
                    border: "5px solid #2d334a",
                    transform: `rotate(${
                      i % 2 === 0 ? 2 * (i + 1) : -2 * (i + 1)
                    }deg)`,
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
            {featureData.map((feature) => (
              <Grid item xl={3} key={feature.title}>
                <FeatureItem
                  title={feature.title}
                  text={feature.text}
                  icon={<feature.icon sx={{ fontSize: 40 }} />}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </DarkSection>
    </>
  );
};

export default About;
