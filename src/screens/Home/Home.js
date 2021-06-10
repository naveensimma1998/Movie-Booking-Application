import React, { Component } from 'react';
import Header from '../../common/header/Header'
import './Home.css'

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import moviesData from "../../common/moviesData.js";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    title: {
        color: theme.palette.primary.light,
    }
});

class Home extends Component {


    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header/>
                <div id="upcoming-movies">
                    <span>Upcoming Movies</span>
                </div>
                <div>
                    <GridList cols={5} className={classes.gridListUpcomingMovies}>
                        {moviesData.map((tile) => (
                            <GridListTile key={tile.id} className="poster-grid">
                                <img
                                    src={tile.poster_url}
                                    alt={tile.title}
                                    className="movie-poster"
                                />
                                <GridListTileBar title={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
<div className="flex-ontainer">
<div className="left">
<GridList cols={4} cellHeight={350} className={classes.GridListLeft}>
<GridListTile className="released-movies-grid-item">
    <img src={moviesData.poster_url} alt ={moviesData.title} className="release-movie-poster"/>
    <GridListTileBar title={moviesData.title} 
                    subtitle={<span>Release date : 
                        {new Date(moviesData.release_date).toDateString }
                        </span>} />
    </GridListTile>



</GridList>
</div>
</div>




















                </div>
        );
            
                }
                }

export default withStyles(styles)(Home);