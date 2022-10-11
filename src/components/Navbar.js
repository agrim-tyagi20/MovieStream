import React, { useEffect, useState } from 'react'


const Navbar = ({  searchProduct }) => {




    const getValue = (e) => {
        searchProduct(e.target.value)
    }


    return (
        <>
            <nav className="main-nav">

                <div className="logo">
                    <h2>
                        MovieStream

                    </h2>
                </div>

                <div className="input_search" >
                    <input type="text" placeholder="Search Movies"  onChange={getValue} ></input>
                </div>
            </nav>

        </>

    )
}

export default Navbar