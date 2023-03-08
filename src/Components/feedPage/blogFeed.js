import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, ButtonBase, Paper, Typography, Box, Divider, ImageListItem } from '@mui/material';
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
    imageSrc: 'blogImages/UW Sustainability.jpeg',
    title: ' UW is ready for Seattle\'s new composting law',
    summary: ' The Daily took a look at what Seattle\'s new composting ordinanice means for the University of Washington.',
    source: <a href="https://sustainability.uw.edu/blog/2015-01/uw-ready-seattles-new-composting-law"> UW Sustainability</a>,
    helpful: ' #Students #Dailylife #Lunch #Adults #Seattle',
  },
  {
    id: 2,
    imageSrc: 'blogImages/BioCycle.jpeg',
    title: ' Seattle\'s Winning Strategy For Managing Organics',
    summary: ' When programs, garbage collection fees, or regulations cause households to move organics out of the garbage cart and into the organics cart, costs for managing MSW go down.',
    source: <a href="https://www.biocycle.net/seattles-winning-strategy-managing-organics/"> BioCycle</a>,
    helpful: ' #Adults #Seattle #LocalGovernment #Community',
  },
  {
    id: 3,
    imageSrc: 'blogImages/UWNews.jpeg',
    title: ' WA Dep of Ecology "Compost" Data References',
    summary: ' Composting is an important component of "closed loop" recycling. We set regulatory standards for composting facilities and compost quality and also provide technical assistance to local governments',
    source: <a href="https://ecology.wa.gov/Waste-Toxics/Reducing-recycling-waste/Waste-reduction-programs/Organic-materials/Managing-organics-compost"> WA Dep of Ecology </a>,
    helpful: ' #LocalGovernment #Visuals #Data #Adults #Seattle',
  },
  {
    id: 4,
    imageSrc: 'blogImages/Rethink Green Seattle.jpeg',
    title: ' Composting in Seattle is Easy. And Required.',
    summary: ' Moving to Seattle was like a dream come true, in terms of composting. Curbside pick-up of kitchen scraps and yard waste every week?!',
    source: <a href="http://re-thinkgreen.com/2016/04/13/municipal-composting-seattle/"> Re-think Green </a>,
    helpful: ' #Opinion #Seattle #Community #Personal #Home',
  },
  {
    id: 5,
    imageSrc: 'blogImages/Sqwatch-secrets.jpeg',
    title: ' Sqwatch\'s secret #8: Compost, compost, compost!',
    summary: ' We\'re lucky in Seattle to have city-wide composting, which makes it easy to keep food scraps out of the landfill. Choosing compost instead of the landfill bin reduces methane emissions and allows for the material to be reused to increase soil nutrients.',
    source: <a href="https://sustainability.uw.edu/blog/2022-12/sqwatchs-secret-8-compost-compost-compost"> UW Sustainability </a>,
    helpful: ' #Sustainability #Seattle #Students #Community #Government',
  },
  {
    id: 6,
    imageSrc: 'blogImages/Foodable.jpeg',
    title: ' Seattle\'s Mandated Composting Program Enlists Restaurants to Reduce Waste',
    summary: ' In 2015, Seattle mandated commercial and residential composting in an effort to reduce landfill waste. The ordinance enjoyed 74 percent approval.',
    source: <a href="https://www.foodabletv.com/blog/2016/2/21/seattles-mandated-composting-program-enlists-restaurants-to-reduce-waste-improve-efficiency-and-enhance-community"> Foodable </a>,
    helpful: ' #Restaurants #Seattle #Adults #Community #Sustainability',
  },
  {
    id: 7,
    imageSrc: 'blogImages/Joy tastic.jpeg',
    title: ' How To Start Composting At Home',
    summary: ' Climate and location are factors in how you should compost, so be sure to research anything specific to your home, too. We\'re in Seattle, so our compost "recipe" reflects that. Let\'s dig in (pun very much intended).',
    source: <a href="https://jojotastic.com/2020/07/17/how-to-start-composting/"> Jojotastic </a>,
    helpful: ' #Seattle #Home #Adults #Community #Sustainability',
  },
  {
    id: 8,
    imageSrc: 'blogImages/King County Compost More.jpeg',
    title: ' Compost More. Waste Less.',
    summary: ' Did you know? Almost 35% of what ends up in the landfill is food scraps and food-soiled paper, and that it can be recycled in your curbside yardwaste cart? Don\'t waste this resource. Put it to a better use!',
    source: <a href="https://kingcounty.gov/depts/dnrp/solid-waste/garbage-recycling/compost-more.aspx"> King County </a>,
    helpful: ' #Government #Seattle #Community #Residential #Home #Resources',
  },
  {
    id: 9,
    imageSrc: 'blogImages/Kirkland Conserves.jpeg',
    title: ' What Does Away Look Like? Where Kirkland\'s Trash, Recycling and Compost Go',
    summary: ' Every week we dutifully drag our three carts to the curb for pickup, and the materials we\'ve carefully sorted are taken away…but where, exactly, do they go?',
    source: <a href="http://cityofkirklandblogs.com/environmentalservices/2014/12/where-kirkland-trash-recycling-compost-goes/"> Kirkland Conserves </a>,
    helpful: ' #Government #Seattle #Community #Residential #Home #Resources',
  },
  {
    id: 10,
    imageSrc: 'blogImages/UWNews.jpeg',
    title: ' Composting food waste remains your best option, says UW study',
    summary: ' A new University of Washington study confirms that sentiment, and also calculates the environmental benefits associated with keeping these organic materials out of landfills.',
    source: <a href="https://www.washington.edu/news/2015/12/16/composting-food-waste-remains-your-best-option-says-uw-study/"> UW News </a>,
    helpful: ' #Student #Seattle #Community #College #Home #Resources',
  },
  {
    id: 11,
    imageSrc: 'video.png', 
    title: ' A Beginners Guide to Composting | One Small Step',
    summary: ' What is compost? How does composting work? Lucy Biggers is here to answer all your questions to show you what happens to our food waste — welcome to Composting 101.',
    source: <a href="https://www.youtube.com/watch?v=XfuJJNGuS0Q"> NowThis Earth </a>,
    helpful: ' #Seattle #Community #Home #Beginner #Impact',
  },
];

const VerticalCardList = () => {
  return (
    <div>
      <Box sx={{ my: 5, mx: 5}}>
        <Typography  variant="title" textAlign="center" color='#357560'sx={{ fontSize: '300%' }}>COMPOSTING BLOG RESOURCES</Typography>
        <Typography variant="subtitle1" sx={{ my: 2, fontSize: '110%'}}>
          Our team compiled a set of composting reources to help you with your composting journey. The resources vary from local blogs on how to set up your own composting bin to international blogs on how to composting operation, 
          to government data on Seattle composting and other national organizations working to help level the composting education in America.
        </Typography>
        <Divider sx={{ my: 5 }} />
      </Box>
      <Box sx={{ overflowX: 'scroll', mx: 5, mb:3 }}>
        <Grid container spacing={3}>
          {blogData.map((data) => (
            <Grid item key={data.id} xs={12} sm={6} md={4}>
              <Paper
                sx={{
                  p: 2,
                  minWidth: 300,
                  borderRadius: 3,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#e9ede6',
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={6} md={12} sx={{ borderRadius: '3px' }}> 
                    <ImageListItem sx={{ width: '100%', height: 128 }}>
                      <Img alt="complex" src={data.imageSrc} />
                    </ImageListItem>
                  </Grid>
                  <Grid item xs={12} sm={6} md={12} container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          <strong>{data.title}</strong>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {data.summary}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          <strong>Find Out More:</strong> {data.source}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Helpful With:</strong> {data.helpful}
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
