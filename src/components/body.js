import MovieList from "./movie-list";
function Body(props) {
    return (
        <div className="App-content">
            <MovieList movies={props.movies} />
        </div>

        /*
            <div>
                <div className='container-fluid movie-app'>
                    <div className='row'>
                        <MovieList
                            movies={props.movies}
                        />
                    </div>
    
                </div>
            </div>
            
            */
    );
}

export default Body;
