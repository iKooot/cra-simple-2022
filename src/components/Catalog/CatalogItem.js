import React, {useEffect, useRef} from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Box,
  ListItem,
  List,
  Button,
  ButtonGroup,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { getProductCategoriesById } from "../../utils/helpers";

export const CatalogItem = ({ attrs, product }) => {
  const navigate = useNavigate();
  const { categories } = useSelector(
    (state) => state.products.productsCategory
  );

  useEffect(() => {
    console.log('render item')
  })

  const categoriesList =
    categories && getProductCategoriesById(categories, product.categories);

  return (
    <Grid item {...attrs}>
      <Card raised sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={product.photo + `?v=${product.id}`}
          alt="t-short"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "370px",
            justifyContent: "flex-start",
          }}
        >
          <Box marginBottom={3}>
            <Typography gutterBottom variant="h5" component="h5">
              {product.isSale && (
                <Typography
                  gutterBottom
                  color="secondary.main"
                  variant="h5"
                  component="span"
                >
                  SALE
                </Typography>
              )}{" "}
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" marginBottom={5}>
              {product.description}
            </Typography>
            <Typography
              component="p"
              variant="body"
              color="text.primary"
              marginBottom={2}
            >
              Price:{" "}
              <Typography
                color="text.secondary"
                variant="body2"
                component="span"
                fontWeight="700"
              >
                {product.price}
              </Typography>
            </Typography>
            {product.isInStock && (
              <Typography
                component="p"
                variant="body2"
                color="text.secondary"
                marginBottom={5}
                fontWeight="700"
              >
                This is stock model
              </Typography>
            )}
            {product.isNew && (
              <Box
                sx={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "secondary.main",
                  color: "text.primary",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              >
                New
              </Box>
            )}
            {categoriesList && (
              <Box color="text.secondary">
                <Typography color="text.primary">Categories:</Typography>
                <List dense>
                  {categoriesList.map((category) => (
                    <ListItem key={category.id}>{category.name}</ListItem>
                  ))}
                </List>
              </Box>
            )}
            <Box>
              <Rating
                name="read-only"
                value={(product.rating * 5) / 100}
                precision={0.1}
                readOnly
              />
            </Box>
          </Box>
          <ButtonGroup
            aria-label="product button group"
            sx={{
              marginTop: "auto",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                console.log("By on click click");
              }}
            >
              By on click
            </Button>
            <Button
              onClick={() => {
                console.log("Bto cart click");
              }}
            >
              To cart
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </Grid>
  );
};
