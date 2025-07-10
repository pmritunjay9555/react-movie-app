// import { movies } from "./getMovies";
import axios from "axios";

import React, { Component } from 'react'

export default class Banner extends Component {
    constructor(){
        super();
        this.state={
            bannerMovie:''
        }
    }


    async componentDidMount(){
        const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=d59bc33f747d325e08b64d1c227c98cc&language=en-US&page=1`
      )
      this.setState({
        bannerMovie:res.data.results[0]
      })

    }
    render() {
        const movie = this.state.bannerMovie

        return (
            <>
                {movie == ''? <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div> :
                    <div className="card banner-card" >
                        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top banner-img" alt={movie.title}/>
                        {/* <div className="card-body"> */}
                            <h1 className="card-title banner-title">{movie.original_title}</h1>
                            <p className="card-text banner-text">{movie.overview}</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    // </div>
                }
            </>
        )
    }
}
