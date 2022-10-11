import React from 'react'
import { Link, NavLink } from "react-router-dom"

const Cards = ({data}) => {
    return (
        <>
            <div className="container_data">


                {
                    data.length > 0 ? data.map((elem) => {
                        const { poster_path, release_date, id, title } = elem;
                        return <div key={id}>
                            <NavLink to={`/singlemovie/${id}`}> <div className="cards" >
                                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="img" />
                                <div className="title">
                                    <h3 style={{ textDecoration: "none" }}>{title}</h3>

                                </div>



                            </div>
                            </NavLink>
                        </div>

                    })
                        : ""
                }


            </div>

        </>
    )
}

export default Cards
