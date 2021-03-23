import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import {Grid,Box,Paper,Container,Card,CardContent,Typography, AppBar,Tabs,Tab,InputBase,Tooltip,Avatar,Button } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',

    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  image:{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 60,
    width: 60,
    bottom: 45,
    boxShadow: '0 6px 21px 0 rgb(0 0 0 / 12%)',
    border: '3px solid white',

  },
  titre:{
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 20,
    textAlign: 'center',
    position:'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    width:'auto',
    height:50,
    left: 80,
    right: 80,
    bottom: 170,
    color:'black',
    textDecoration:'none',
  }
}));






function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}







export default function AfficheGroup() {

    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
      <div className={classes.root}>
      <Paper elevation={3} style={{ height: 350,padding:0,width:250}} >
      <img style={{ height: 100,width:250,objectFit: 'cover'}} src={process.env.PUBLIC_URL + '/images/img11.jpeg'}/>
      <Avatar className={classes.image} src={process.env.PUBLIC_URL + '/images/avatar.jpg'}/>
      <Link to={"/groupe"} className={classes.titre}>
          Master 2 ISI
      </Link>
      <AvatarGroup max={5} style={{bottom: 280 ,left: 40, position:'relative'}}>
      <Avatar src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d2.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d3.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/p2.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d1.jpg'} />
    </AvatarGroup>
       
        <Box style={{position: 'relative',bottom: 230,left: 40}}>
        <Link style={{marginRight:20,fontWeight:600,color:'black',marginLeft:10,textDecoration:'none'}}>
         240<br/> <span style={{fontWeight:500,}}>Postes</span>
        </Link>

        </Box>


        <Box style={{position: 'relative',bottom: 280,left: 145}}>
        
        <Link style={{marginRight:20,fontWeight:600,color:'black',marginLeft:17,textDecoration:'none'}}>
         100<br/> <span style={{fontWeight:500,}}>Membres</span>
        </Link>
        </Box>
      </Paper>




      <Paper elevation={3} style={{ height: 350,padding:0,width:250}} >

      <img style={{ height: 100,width:250,objectFit: 'cover'}} src={process.env.PUBLIC_URL + '/images/img11.jpeg'}/>
      <Avatar className={classes.image} src={process.env.PUBLIC_URL + '/images/avatar.jpg'}/>
      <Link to={"/groupe"} className={classes.titre}>
          Master 2 ISI
      </Link>
      <AvatarGroup max={5} style={{bottom: 280 ,left: 40, position:'relative'}}>
      <Avatar src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d2.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d3.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/p2.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d1.jpg'} />
    </AvatarGroup>
       
        <Box style={{position: 'relative',bottom: 230,left: 40}}>
        <Link style={{marginRight:20,fontWeight:600,color:'black',marginLeft:10,textDecoration:'none'}}>
         240<br/> <span style={{fontWeight:500,}}>Postes</span>
        </Link>

        </Box>


        <Box style={{position: 'relative',bottom: 280,left: 145}}>
        
        <Link style={{marginRight:20,fontWeight:600,color:'black',marginLeft:17,textDecoration:'none'}}>
         100<br/> <span style={{fontWeight:500,}}>Membres</span>
        </Link>
        </Box>
      </Paper>




      <Paper elevation={3}  style={{ height: 350,padding:0,width:250}}>


      <img style={{ height: 100,width:250,objectFit: 'cover'}} src={process.env.PUBLIC_URL + '/images/img11.jpeg'}/>
      <Avatar className={classes.image} src={process.env.PUBLIC_URL + '/images/avatar.jpg'}/>
      <Link to={"/groupe"} className={classes.titre}>
          Master 2 ISI
      </Link>
      <AvatarGroup max={5} style={{bottom: 280 ,left: 40, position:'relative'}}>
      <Avatar src={process.env.PUBLIC_URL + '/images/avatar.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d2.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d3.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/p2.jpg'} />
      <Avatar src={process.env.PUBLIC_URL + '/images/d1.jpg'} />
    </AvatarGroup>
       
        <Box style={{position: 'relative',bottom: 230,left: 40}}>
        <Link style={{marginRight:20,fontWeight:600,color:'black',marginLeft:10,textDecoration:'none'}}>
         240<br/> <span style={{fontWeight:500,}}>Postes</span>
        </Link>

        </Box>


        <Box style={{position: 'relative',bottom: 280,left: 145}}>
        
        <Link style={{marginRight:20,fontWeight:600,color:'black',marginLeft:17,textDecoration:'none'}}>
         100<br/> <span style={{fontWeight:500,}}>Membres</span>
        </Link>
        </Box>

      </Paper>





    </div>
    )
}
