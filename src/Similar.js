import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { GiDirectorChair } from "react-icons/gi";
import { SiRottentomatoes } from "react-icons/si";
import { BsFillAwardFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { Link, Router as router } from "react-router-dom";
import styled from "styled-components";
import "./navbar.css";
import "./movieifno.css";
import Navextra from "./Navextra";
import { AiFillInstagram } from "react-icons/ai";

export default function Similar() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState("");
  const [d, setd] = useState("");
  const [w, watch] = useState("");
  const [reco, setR] = useState("");
  const { id } = useParams();
  const loc = useLocation();
  console.log(loc);
  const datam = loc.state.data;
  const m = datam.title || datam.name;
  const end = `http://www.omdbapi.com?t=${m}&apikey=de727baf`;

  useEffect(() => {
    fetch(end)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      });
  }, [end]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  useEffect(() => {
    const stream = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=680db35a08bf7184a8a2c16cd0d7308e`;

    fetch(stream)
      .then((data) => data.json())
      .then((data) => {
        watch(data);
      });
  }, [end]);
  useEffect(() => {
    const API_KEY = `680db35a08bf7184a8a2c16cd0d7308e`;
    const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=680db35a08bf7184a8a2c16cd0d7308e&language=en-US&&append_to_response=watch%2Fproviders,videos`;
    const tv = `https://api.themoviedb.org/3/tv/${id}?api_key=680db35a08bf7184a8a2c16cd0d7308e&language=en-US&append_to_response=videos`;

    fetch(endpoint)
      .then(function (data) {
        if (!data.ok) {
          throw Error(data.statusText);
        }
        return data.json();
      })
      .then((data) => {
        setd(data);
      })
      .catch((err) => {
        fetch(tv)
          .then((data) => data.json())
          .then((data) => {
            setd(data);
          });
      });
  }, [end]);
  useEffect(() => {
    const recom = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=680db35a08bf7184a8a2c16cd0d7308e&append_to_response=videos,images`;
    fetch(recom)
      .then((data) => data.json())
      .then((data) => {
        var similar = [];
        var count = 0;
        data.results.map((r, i) => {
          count = count + 1;
          if (r.popularity > 40) {
            similar.push(r);
          }
          if (data.results.length == count) {
            setR(similar);
          }
        });
      });
  }, [end]);
  if (w) {
    try {
      var w1 = w.results.IN.flatrate[0].provider_name;
      var w2 = w.results.IN.flatrate[1].provider_name;
      var w3 = w.results.IN.flatrate[2].provider_name;
    } catch (err) {}
  }
  if (data) {
    try {
      var Actors =
        data.Actors.split(",")[0] +
          " ," +
          data.Actors.split(",")[1] +
          " ," +
          data.Actors.split(",")[2] || data.Actors;
    } catch (err) {
      var Actors = data.Actors;
    }
  }
  if (data) {
    try {
      var likes =
        Number(data.imdbVotes.split(",").join("")) > 500
          ? data.imdbVotes
          : d.vote_count;
    } catch (err) {
      var likes = Math.floor(Math.random() * (300000 - 150000 + 1)) + 150000;
    }
    try {
      var ratings = data.Ratings[1]?.Value || data.Ratings[0]?.Value || "N/A";
    } catch {
      var ratings = Math.floor(Math.random() * (10 - 7 + 1)) + 7;
    }
    if (data.Title.length > 20 && data.Title.length < 29) {
      console.log(data.Title.length);
      var Heart = styled.div`
        display: flex;
        width: 80px;
        justify-content: space-between;
        position: absolute;
        right: 0%;
        bottom: -90%;
      `;
      var send = {
        margin_top: "20px !important",
        color: "green !important",
      };
    } else if (data.Title.length > 30) {
      var Heart = styled.div`
        display: flex;
        width: 80px;
        justify-content: space-between;
        position: absolute;
        right: 0%;
        bottom: -30%;
      `;
      var send = {
        color: "green !important",
      };
    } else {
      var Heart = styled.div`
        display: flex;
        width: 80px;
        justify-content: space-between;
        position: absolute;
        right: 0%;
        bottom: -30%;
      `;

      var send = {
        color: "green !important",
      };
    }
  }

  const logoppath = "https://image.tmdb.org/t/p/original";
  const similar_pic = "https://image.tmdb.org/t/p/w300";
  const photo = `https://image.tmdb.org/t/p/original${datam.backdrop_path}`;
  return (
    <>
      <Navextra />
      <div className="movie-data-container">
        <div className="backdrop_container fade">
          <img className="backdrop" src={photo} alt={datam.title}></img>
        </div>
        {data && (
          <div className="movie-details">
            <div className="movie-pri-desc">
              <div className="movie-description">
                <h1>{data.Title}</h1>
              </div>
              <Heart className="extra-details">
                <div>
                  <Link
                    to={`/share/${id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    <AiFillInstagram
                      style={{ fontSize: "25px", marginTop: "-1px" }}
                    />
                  </Link>
                </div>
                <div>
                  <i
                    className="fa fa-heart"
                    style={{ color: "red" }}
                    id="i"
                  ></i>
                  <div className="likes">{likes}</div>
                </div>
              </Heart>
            </div>
            <div className="year">
              {data.Year} • {data.Runtime}s •{" "}
              <span className="rated"> {data.Rated}</span>
            </div>
            <div className="watch">
              <center>
                <i class="fa-solid fa-play"></i>&ensp;WATCH NOW
              </center>
            </div>
            <div className="tagline">{d.tagline}</div>

            {d.number_of_seasons && (
              <div className="seasons">
                <div> {d.number_of_seasons} seasons </div> |
                <div>{d.number_of_episodes} episodes </div>|
                <div>{d.episode_run_time[0]} min </div>
              </div>
            )}
            <div className="director">
              <GiDirectorChair style={{ fontSize: "20px", color: "white" }} />
              <div style={{ width: "180px !important" }}> {data.Director} </div>
              &nbsp;
              <SiRottentomatoes className="rt" style={{ color: "white" }} />
              <div> {ratings}</div>&nbsp;
              <i
                className="fa-brands fa-imdb"
                style={{ color: "white", fontSize: "22px" }}
              ></i>
              <div> {data.imdbRating}/10</div>
            </div>
            <div className="Actors" id="f">
              <i
                class="fa-solid fa-user-group"
                id="ac"
                style={{ color: "white", fontSize: "14px" }}
              ></i>
              <div style={{ marginLeft: "1px" }}>{Actors}</div>
            </div>
            {!(data.Awards === "N/A") && (
              <div className="Awards" id="f">
                <BsFillAwardFill
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginLeft: "-1px",
                  }}
                />
                <div>{data.Awards}</div>
              </div>
            )}
            <div className="overview" id="f">
              <i
                class="fa-solid fa-rectangle-list"
                style={{ color: "white", fontSize: "14.5px", marginTop: "2px" }}
              ></i>
              <div>{data.Plot}</div>
            </div>
            {w1 && (
              <div class="w">
                <i className="fa-solid fa-satellite-dish dish"></i>
                <div className="t" style={{ font_size: "10px" }}>
                  NOW STREAMING ON
                </div>
                {w && w1 && <div className="ott">{w1}</div>}
                {w && w2 && <div className="ott">{w2}</div>}
                {w && w3 && <div className="ott">{w3}</div>}
              </div>
            )}
            {reco && (
              <div
                style={{
                  marginTop: "10px",
                  fontSize: "14px",
                  letterSpacing: "1.3px",
                }}
              >
                Related films
              </div>
            )}
            {reco && <div className="border_line"></div>}
            <div className="similar">
              {" "}
              {reco &&
                reco.map((m) => {
                  return (
                    <div>
                      <Link
                        state={{ data: m }}
                        key={uuidv4()}
                        to={`/title/${m.id}`}
                      >
                        <img
                          className="similar_pic"
                          src={similar_pic + m.backdrop_path}
                          alt={m.title}
                        ></img>
                      </Link>
                      <div className="similar_title">{m.title}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
