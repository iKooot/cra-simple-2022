import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router";

export const CatalogItem = ({ attrs, product }) => {
  const navigate = useNavigate();

  return (
    <Grid item {...attrs}>
      <Card raised sx={{ position: "relative", height: "100%" }}>
        <CardActionArea
          onClick={() => {
            navigate(`/catalog/${product.id}`);
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={product.photo + `?v=${product.id}`}
            alt="t-short"
          />
          <CardContent>
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
              variant="body2"
              color="text.secondary"
              marginBottom={2}
            >
              Price: <Typography variant="body2" component="span" fontWeight="700">{product.price}</Typography>
            </Typography>
            {product.isInStock && <Typography
                component="p"
                variant="body2"
                color="text.secondary"
                marginBottom={5}
                fontWeight="700"
            >
              This is stock model
            </Typography>}
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
                  width: "10%",
                  height: "10%",
                  borderRadius: "50%",
                }}
              >
                New
              </Box>
            )}
            <Rating
              name="read-only"
              value={(product.rating * 5) / 100}
              precision={0.1}
              readOnly
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
