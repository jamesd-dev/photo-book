import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import backgrounds from "./backgrounds/backgrounds";


const useStyles = makeStyles(() => {
    return {
        root: {
            backgroundImage: ({backgroundImage}) => `url(${backgroundImage})`,
            backgroundSize: 'contain',
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
        },
        titleBox: {
           backgroundColor: 'white',
           width: '100%',
           padding: '6rem 4rem',
           boxSizing: 'border-box',
        },
        title: {
            fontSize: '7rem',
            margin: '0',
        },
        description: {
            fontSize: '2rem',
            margin: '2rem 0',
        },
        photoBoxContainer: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        horizontalPhotoBox: {
            width: '54.1vw',
            height: '40.5vw',
            backgroundColor: 'red',
        }
    }
});

function Page(props) {
    const { id } = props.match.params;
    const { pages } = require('./content.json');
    const { title, description, bg } = pages[id];
    const backgroundImage = (backgrounds[bg]) ? backgrounds[bg] : backgrounds.triangles;
    const classes = useStyles({backgroundImage});
    return (
        <div className={classes.root}>
            <div className={classes.titleBox}>
                <h1 className={classes.title}>{id + " - " + title}</h1>
                <p className={classes.description}>{description}</p>
            </div>
            <div className={classes.photoBoxContainer}>
                <div className={classes.horizontalPhotoBox}/>
                <div/>
            </div>
        </div>
    )
}

export default Page;