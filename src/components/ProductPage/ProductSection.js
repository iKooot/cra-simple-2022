import React, { useEffect } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Loader } from "../UI";
import { Error } from "../Error";
import { getProductCategoriesById } from "../../utils/helpers";

export const ProductSection = ({ product }) => {
  const navigate = useNavigate();
  const {
    categories: allCategories,
    error,
    status,
  } = useSelector((state) => state.products.productsCategory);

  const categories =
    allCategories &&
    getProductCategoriesById(allCategories, product.categories);

  return (
    <>
      <Typography
        color="sectionLight.headline"
        mb={10}
        variant="h1"
        component="h1"
      >
        {product.title}
      </Typography>
      <Box mb={10} sx={{ display: "flex", gap: "40px" }}>
        <Box>
          <Box mb={5}>
            <Typography
              mb={2}
              color="sectionLight.headline"
              variant="h5"
              component="p"
            >
              Description
            </Typography>
            <Typography color="sectionLight.paragraph" component="p">
              {product.description}
            </Typography>
          </Box>

          <Typography
            mb={5}
            color="sectionLight.headline"
            variant="h5"
            component="p"
          >
            Price:{" "}
            <Typography
              color="sectionLight.paragraph"
              component="span"
              variant="h5"
            >
              {product.price}
            </Typography>
          </Typography>
          <Box mb={5}>
            <Rating
              name="read-only"
              value={(product.rating * 5) / 100}
              precision={0.1}
              readOnly
            />
          </Box>
          {(product.isNew || product.isSale || product.isInStocl) && (
            <Box>
              <Typography
                color="sectionLight.headline"
                component="p"
                variant="h5"
              >
                Options:
              </Typography>
              <List dense>
                {product.isNew && (
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "25px" }}>
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Is new collection" />
                  </ListItem>
                )}
                {product.isSale && (
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "25px" }}>
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Is sale now" />
                  </ListItem>
                )}
                {product.isSale && (
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "25px" }}>
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Is in stock" />
                  </ListItem>
                )}
              </List>
            </Box>
          )}
          <Box>
            <Typography
              color="sectionLight.headline"
              component="p"
              variant="h5"
            >
              Categories:
            </Typography>

            {status === "loading" && <Loader />}
            {status === "error" && <Error errorMessage={error} />}
            {status === "success" && categories && (
              <List>
                {categories.map((category) => (
                  <ListItem key={category.id}>{category.name}</ListItem>
                ))}
              </List>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "5px",
            outline: "5px solid #2d334a",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, .25)",
            transform: "rotate(-5deg)",
            height: "400px",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={product.photo}
            sx={{ width: "100%", height: "auto", objectFit: "fill" }}
          />
        </Box>
      </Box>

      <Button
        variant="contained"
        onClick={() => {
          navigate("/order");
        }}
      >
        By on click
      </Button>
    </>
  );
};
