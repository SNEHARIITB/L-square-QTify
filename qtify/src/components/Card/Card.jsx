import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
//import {MuiCard} from "@mui/material";
import styles from "./Card.module.css";

const CustomCard = ({data, songs}) => {
    //console.log("inside card:", data )
    //console.log(songs)

    return(
        // <Card className={styles.Card}>
        //     <Box className={styles.Content}>
        //         <Box className={styles.CardImg}>
        //             <img src="https://images.pexels.com/photos/210854/pexels-photo-210854.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" alt="img" />
        //         </Box>
        //         <Box className={styles.CardChip}>
        //             <Chip
        //                 label="100 Follows"
        //             />
        //         </Box>
        //     </Box>
        //     <Box className={styles.CardTitle}>
        //         New English Songs
        //     </Box>
        // </Card>
        <Card className={styles.Card}>

  
            <Box className={styles.Content}>
                <CardMedia
                    className={styles.CardImg}
                    component="img"
                    height="170"
                    image={data.image}
                    alt="Album cover"
                />

                <Box className={styles.ChipBox}>
                    <Chip
                        className={styles.Chip}
                        label={songs ? `${data.likes} Likes` : `${data.follows} Follows`}
                        variant="outlined"
                    />
                </Box>

            </Box>
            <Typography className={styles.CardTitle}>
                {data.title}
            </Typography>
      </Card>
    );
}
export default CustomCard;