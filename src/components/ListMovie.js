import React from 'react';
import Movie from './Movie';

class ListMovie extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let movies = (this.props.movies) ? this.props.movies : [];

        return(
            <div className="well">
                {
                movies.map((movie, id) => <Movie key={id} movie={movie} />)
                }
            </div>
        )
    }
}

export default ListMovie;