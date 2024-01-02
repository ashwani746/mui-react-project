import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardHeader, CardMedia, IconButton, Typography,CardContent, Checkbox } from '@mui/material'


const Post = () => {
  return (
    <Card sx={{margin:5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          A
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVert />
        </IconButton>
      }
      title="Raghunath"
      subheader="March 14, 2023"
    />
    <CardMedia
      component="img"
      height="20%"
      image="https://images.pexels.com/photos/7390/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
     
    </CardActions>
  </Card>      
  )
}

export default Post