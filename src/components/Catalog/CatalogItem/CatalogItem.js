import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Rating} from '@mui/material';
import Link from '../../UI/Link/Link'
import img from '../../../assets/img3-min.jpeg'

const CatalogItem = ({attrs}) => {
    const [value, setValue] = React.useState(4);

    return (
        <Grid item {...attrs}>
            <Card raised>
                <Link path='/catalog/test'>
                    <CardActionArea>
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
                </Link>
            </Card>
        </Grid>
    );
};

export default CatalogItem;