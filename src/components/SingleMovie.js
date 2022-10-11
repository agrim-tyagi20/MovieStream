import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners'
import { useParams } from "react-router-dom"
import {Link,NavLink} from "react-router-dom"
import Navbar from "../components/Navbar"

const SingleMovie = () => {

    const { id } = useParams();

    const [singleMovie, setSingleMovie] = useState('');
    const [isLoading, setLoading] = useState(false);
  

    useEffect(() => {

        const fetchApi = async () => {

            try {
                setLoading(true)
                const url = `https://movie-task.vercel.app/api/movie?movieId=${id}`;

                const res = await fetch(url);
                
                const response = await res.json();
                console.log(singleMovie);
                setSingleMovie(response.data)
                setLoading(false)
                console.log(singleMovie);
            }
            catch (error) {
                console.log(error);
            }

        }

        fetchApi();

    }, [])

    if (isLoading) {
        return <div style={{ margin: "40rem auto", width: "50%", display: "grid", placeItems: "center" }}>
            <FadeLoader color="#041c2c" loading cssOverride={{ fontSize: "9rem" }}
                width={10} height={15} margin={9}
            />
        </div>
    }
    return (
        <>
            <Navbar />
            <div className="container">

                <div className="show_details">

                    <div className="poster_class">
                        <img src={`https://image.tmdb.org/t/p/original${singleMovie.poster_path}`} alt="img"></img>

                    </div>
                    <div className="details_class">
                        <div className="title_onlymovie">
                            <h4 style={{ color: "white", fontSize: "3rem" }}>{singleMovie.title}</h4>
                        </div>
                        <div className="stars_class" >
                            <i className="fa-sharp fa-solid fa-star" ></i>
                            <i className="fa-sharp fa-solid fa-star" ></i>
                            <i className="fa-sharp fa-solid fa-star" ></i>
                            <i className="fa-sharp fa-solid fa-star" ></i>
                            <i className="fa-sharp fa-solid fa-star" ></i>
                        </div>
                        <div className="parent_tgline_overview">
                        <div className="tagline_onlymovie">
                            <h4 style={{ color: "white", fontSize: "1.8rem" }}>{singleMovie.tagline}</h4>
                        </div>

                        <div className="overview_class">
                            <p >{singleMovie.overview}</p>
                        </div>
                        </div>

                        <div className="btn_class">
                            <NavLink to="/"><button className="btn">Go Back</button></NavLink>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SingleMovie
