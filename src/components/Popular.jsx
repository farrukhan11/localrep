import React, { useEffect, useState } from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";
import SkeletonLoader from "./Skeleton";

function Popular() {
    const [popMovies, setPopMovies] = useState([]);
    const [filterValue, setFilterValue] = useState("popular");
    const [skeletonLoading, setSkeletonLoading] = useState(true);

    useEffect(() => {
        fetchMovies();
    }, [filterValue]);

    const fetchMovies = () => {
        let url;
        if (filterValue === "TV") {
            url = "https://api.themoviedb.org/3/discover/tv?api_key=52bed3204a08e79bdf3f80bc48c0fac0";
        } else if (filterValue === "Movie") {
            url = "https://api.themoviedb.org/3/discover/movie?api_key=52bed3204a08e79bdf3f80bc48c0fac0";
        } else {
            url = "https://api.themoviedb.org/3/discover/movie?api_key=52bed3204a08e79bdf3f80bc48c0fac0";
        }
        setTimeout(() => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setPopMovies(data.results);
                    setSkeletonLoading(false); // Set skeleton loading to false once data is fetched
                })
                .catch((error) => console.log(error));
        }, 2500);

    };

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };

    return (
        <>

            <div className="select mt-3 me-3 d-flex justify-content-end my-3">
                <select className="form-select bg-dark text-white w-25" aria-label="Default select example" onChange={handleFilterChange}>
                    <option value="popular">Popular</option>
                    <option value="TV">TV</option>
                    <option value="Movie">Movie</option>
                    <option value="All">All</option>
                </select>
            </div>



            <div className="container">
                <div className="row d-flex flex-row">
                    {skeletonLoading ? (
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex gap-3">
                                    <Skeleton />
                                    <Skeleton />
                                    <Skeleton />
                                </div>
                            </div>
                        </div>
                    ) :
                        popMovies.map((movie, index) => (
                            <div className="col-3 p-3" key={index}>
                                <Card movie={movie} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    );
}

export default Popular;
