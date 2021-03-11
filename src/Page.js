import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import backgrounds from "./backgrounds/backgrounds";


const useStyles = makeStyles(() => {
    return {
        root: {
            backgroundImage: ({backgroundImage}) => `url(${backgroundImage})`,
            width: '100%',
            height: '100%',
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
            <div>
                <h1>{id + " - " + title}</h1>
                <p>{description}</p>
            </div>
            <div>
                <div/>
                <div/>
            </div>
        </div>
    )
}

export default Page;