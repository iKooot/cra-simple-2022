import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Rating} from '@mui/material';
import img from '../../../assets/img3-min.jpeg'
import { useNavigate } from "react-router-dom";

const CatalogItem = ({attrs}) => {
    const [value, setValue] = React.useState(4);
    const navigate = useNavigate()

    return (
        <Grid item {...attrs}>
            <Card raised>
                <CardActionArea onClick={() => {
                    navigate("/catalog/top-t-short")
                }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="t-short"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h5">
                            Top t-short
                        </Typography>
                        <Typography variant="body2" color="text.secondary" marginBottom={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti eaque eius est eveniet fugit ipsam molestias mollitia quas repellendus? Culpa dicta minus, mollitia natus quod rem tenetur voluptate? Consectetur.
                        </Typography>
                        <Rating name="read-only" value={value} readOnly />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default CatalogItem;