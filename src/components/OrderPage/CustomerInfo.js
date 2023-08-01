import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";

export const CustomerInfo = ({ customer }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    deliveryType,
    country,
    address,
    address2,
    comment,
  } = customer;

  return (
    <List>
      <ListItem>
        <Typography color="sectionLight.headline">
          Name:{" "}
          <Typography component="span" color="sectionLight.paragraph">
            {firstName} {lastName}
          </Typography>
        </Typography>
      </ListItem>
      <ListItem>
        <Typography color="sectionLight.headline">
          Email:{" "}
          <Typography component="span" color="sectionLight.paragraph">
            {email}
          </Typography>
        </Typography>
      </ListItem>
      <ListItem>
        <Typography color="sectionLight.headline">
          Phone:{" "}
          <Typography component="span" color="sectionLight.paragraph">
            {phone}
          </Typography>
        </Typography>
      </ListItem>
      <ListItem>
        <Typography color="sectionLight.headline">
          Delivery:{" "}
          <Typography component="span" color="sectionLight.paragraph">
            {deliveryType}
          </Typography>
        </Typography>
      </ListItem>
      <ListItem>
        <Typography color="sectionLight.headline">
          Country:{" "}
          <Typography component="span" color="sectionLight.paragraph">
            {country}
          </Typography>
        </Typography>
      </ListItem>
      <ListItem>
        <Typography color="sectionLight.headline">
          Address:{" "}
          <Typography component="span" color="sectionLight.paragraph">
            {address}
          </Typography>
        </Typography>
      </ListItem>
      {address2 && (
        <ListItem>
          <Typography color="sectionLight.headline">
            Address 2:{" "}
            <Typography component="span" color="sectionLight.paragraph">
              {address2}
            </Typography>
          </Typography>
        </ListItem>
      )}
      {comment && (
        <ListItem>
          <Typography color="sectionLight.headline">
            Comment:{" "}
            <Typography component="span" color="sectionLight.paragraph">
              {comment}
            </Typography>
          </Typography>
        </ListItem>
      )}
    </List>
  );
};
