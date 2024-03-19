import { Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const[news, setNews] = useState([]);
  useEffect(() => {
    axios.get('https://654592f9fe036a2fa95478f4.mockapi.io/studentManagement')
    .then((response)=>{
        setNews(response.data);
      })
      .catch();
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        {
            news.map((item) => {
                return(
                    <Grid key={item.id} item xs={4}>
          <Card>
            <CardMedia
              sx={{ height: 140 }}
              image={item.image}
              title='img student'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {item.name}
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
                {item.class}
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
                {item.id}
              </Typography>
              <Typography gutterBottom variant='h5' component='div'>
                {item.dateofbirth}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/detail/${item.id}`}>Detail</Link>
            </CardActions>
          </Card>
        </Grid>
                )
            })
        }
      </Grid>
    </div>
  );
}

export default Home;