import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import { photoShootPath, photoDocumentPath, photoPrintPath } from './constants';

import { styles } from './styles';

import './Content.scss';

const titleData = [{
    img: photoShootPath,
    title: 'Photo shoot'
},
{
    img: photoDocumentPath,
    title: 'Photo document'
},
{
    img: photoPrintPath,
    title: 'Photo print'
}];

const Content = (props) => {
    const { classes } = props;

    return (
        <div className='home-content'>
            <h1 className='home-content__capture' >Main services</h1>
            <div className={classes.root}>
                <GridList
                    cols={3}
                    className={classes.gridList}>
                    {titleData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                actionIcon={
                                    <IconButton>
                                        <InfoIcon />
                                    </IconButton>
                                }/>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>);
};

Content.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
