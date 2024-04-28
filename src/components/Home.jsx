import React, { useEffect, useState } from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import Popular from "./Popular";
import Loader from "./Loader";

function Home() {
  const [popMovies, setpopMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.themoviedb.org/3/trending/all/day?api_key=52bed3204a08e79bdf3f80bc48c0fac0&language=en-US")
        .then((res) => res.json())
        .then((data) => {
          setpopMovies(data.results);
          setLoading(false); // Set loading to false once data is fetched
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false); // Set loading to false in case of an error
        });
    }, 1500);

  }, []);

  return (
    <>
      {loading ? ( // Show loader if loading state is true
        <Loader />
      ) : (
        <div className="container-fluid g-0 bg-dark">
          <div className="row g-0 ">
            <div className="col-3">
              <SideBar />
            </div>
            <div className="col-9">
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={500}
                infiniteLoop={true}
                showStatus={false}
              >
                {popMovies.map((movie, index) => (
                  <Link to={`movie/${movie.id}`} key={index} className="container-fluid" >
                    <div className="row" >
                      <div className="col-12" style={{ height: "360px" }}>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="img-fluid object-fit-cover" alt="..." />
                        {movie.original_title}
                      </div>
                    </div>
                  </Link>
                ))}
              </Carousel>
              <div className="row">
                <div className="col-12">
                  <Popular />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
