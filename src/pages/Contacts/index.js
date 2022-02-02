import React from "react";
import { Typography, Grid, Box, List, ListItem, Link } from "@mui/material";
import { ContactPageForm } from "../../components/Forms";
import map from "../../assets/map.png";
import { LightSection } from "../../components/Layouts";

const Contacts = () => {
  return (
    <LightSection>
      <Grid container spacing={10}>
        <Grid item lg={6}>
          <Typography variant="h4" component="h2" mb={10}>
            Contacts
          </Typography>
          <List>
            <ListItem>
              <Typography variant="h5" component="h3">
                Phone:{" "}
                <Link href="tel:380999999999" underline="none">
                  +380999999999
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5" component="h3">
                Address: st. Baggovutivska Street, 1, Kiev, 04106
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h5" component="h3">
                Work hours: 10:00 - 20:00 | Mon - Fr
              </Typography>
            </ListItem>
          </List>
          <Box
            src={map}
            alt="Some aria"
            component="img"
            sx={{ width: "100%", height: "200px", objectFit: "cover" }}
          ></Box>
        </Grid>
        <Grid item lg={6}>
          <Typography variant="h4" component="h2" mb={10}>
            If you have a question please fill out the form and we will call
            back to you
          </Typography>
          <ContactPageForm />
        </Grid>
      </Grid>
    </LightSection>
  );
};

export default Contacts;
