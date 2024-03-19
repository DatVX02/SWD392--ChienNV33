import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    axios
      .get(`https://654592f9fe036a2fa95478f4.mockapi.io/studentManagement/${id}`)
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={news.title}
      />
      <CardMedia
        component="img"
        height="194"
        image={news.image}
        alt="News Image"
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          {news.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {news.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {news.dateofbirth}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {news.class}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}

export default Detail;
