import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
                display: 'flex',
        '& > *': {
          margin: theme.spacing(4),
          marginLeft: '5rem',
        },
    },
}));

function GitCard (props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
            <div className={classes.avatar}>
            <Avatar src={props.data.avatar_url} alt="user-img" className={classes.large}/>
            </div>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.name}
        subheader="The GitHub Life"
      />
      <CardMedia
        className={classes.media}
        image="src\code.jpg"
        title="Code"
      />
      <CardContent>
        <Button variant="outlined" color="primary" href={props.data.html_url}>
           My Page
        </Button>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5">More Info</Typography>
          <Typography variant="caption">
            {props.data.bio}
          </Typography>
          <Typography variant="body2">
          {props.followers.map(follow => {
                return (
                    <p key={Date.now()}>{follow.login}</p>
                )
            })}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}












// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';


// const useStyles = makeStyles((theme) => ({
//     container: {
//       flexGrow: 1,
//       backgroundColor: 'lightgreen',
//     },
//     title: {
//         flexGrow: 1,
//       },
//     avatar: {
//         display: 'flex',
//         '& > *': {
//           margin: theme.spacing(4),
//           marginLeft: '5rem',
//         },
//     },
//     large: {
//         width: theme.spacing(10),
//         height: theme.spacing(10),
//       },

//   }));


// function GitCard (props) {
//     const classes = useStyles();


//     return (
//         <div className={classes.container}>
//                     <Typography variant="h4" className={classes.title}>
//                         {props.data.name}
//                     </Typography>

//                     <div className="card">
//                         <div className={classes.avatar}>
//                             <Avatar src={props.data.avatar_url} alt="user-img" className={classes.large}/>
//                         </div>
//                         <div className="about">
//                             <Button variant="outlined" color="primary" href={props.data.html_url}>
//                                 My Page
//                             </Button>
//                             <p>Followed by:   </p>
//                             {props.followers.map(follow => {
//                                 return (
//                                     <p key={Date.now()}>{follow.login}</p>
//                                 )
//                                 })}
//                         </div>

//                     </div>

//     </div>
//     )
// }

export default GitCard;