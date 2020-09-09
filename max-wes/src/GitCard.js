import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    container: {
      flexGrow: 1,
      backgroundColor: 'lightgreen',
    },
    title: {
        flexGrow: 1,
      },
    avatar: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(4),
          marginLeft: '5rem',
        },
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
      },

  }));


function GitCard (props) {
    const classes = useStyles();


    return (
        <div className={classes.container}>
                    <Typography variant="h4" className={classes.title}>
                        {props.data.name}
                    </Typography>

                    <div className="card">
                        <div className={classes.avatar}>
                            <Avatar src={props.data.avatar_url} alt="user-img" className={classes.large}/>
                        </div>
                        <div className="about">
                            <Button variant="outlined" color="primary" href={props.data.html_url}>
                                My Page
                            </Button>
                            <p>Followed by:   </p>
                            {props.followers.map(follow => {
                                return (
                                    <p key={Date.now()}>{follow.login}</p>
                                )
                                })}
                        </div>

                    </div>

    </div>
    )
}

export default GitCard;