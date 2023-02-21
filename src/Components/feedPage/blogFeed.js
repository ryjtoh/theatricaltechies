import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, ButtonBase, Paper, Typography, Box, Divider } from '@mui/material';
import style from '../../style.css';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const blogData = [
  {
    id: 1,
    imageSrc: 'images/1.jpg',
    title: 'Blog Title 1',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    region: 'Central America',
    specialty: 'Apartment Composting',
  },
  {
    id: 2,
    imageSrc: 'images/1.jpg',
    title: 'Blog Title 2',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    region: 'South America',
    specialty: 'Back Yard Composting',
  },
  {
    id: 3,
    imageSrc: 'images/1.jpg',
    title: 'Blog Title 3',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    region: 'Africa',
    specialty: 'Community Composting',
  },
  {
    id: 4,
    imageSrc: 'images/1.jpg',
    title: 'Blog Title 1',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    region: 'Central America',
    specialty: 'Commercial Composting',
  },
  {
    id: 5,
    imageSrc: 'images/1.jpg',
    title: 'Blog Title 2',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    region: 'South America',
    specialty: 'Apartment Composting',
  },
  {
    id: 6,
    imageSrc: 'images/1.jpg',
    title: 'Blog Title 3',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    region: 'Africa',
    specialty: 'School Composting',
  },
];

const VerticalCardList = () => {
  return (
    <div>
      <Box sx={{ my: 5 }}>
        <Typography  variant="title" textAlign="center" sx={{ fontSize: '300%' }}>Blog</Typography>
        <Typography variant="subtitle1" sx={{ my: 2, fontSize: '110%'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Divider sx={{ my: 5 }} />
      </Box>
      <Box sx={{ overflowX: 'scroll' }}>
        <Grid container spacing={3}>
          {blogData.map((data) => (
            <Grid item key={data.id} xs={12} sm={6} md={4}>
              <Paper
                sx={{
                  p: 2,
                  minWidth: 300,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede6',
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={6} md={12}>
                    <ButtonBase sx={{ width: '100%', height: 128 }}>
                      <Img alt="complex" src={data.imageSrc} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm={6} md={12} container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {data.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {data.summary}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          <strong>Region:</strong> {data.region}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Specialty:</strong> {data.specialty}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default VerticalCardList;
