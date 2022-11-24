import { useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { GiDirectorChair } from "react-icons/gi"
import { SiRottentomatoes } from "react-icons/si"
import { BsFillAwardFill } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"
import { Link } from "react-router-dom"
import styled from "styled-components"
import "./movieifno.css"
import Footer from "./Footer"
import Navextra from "./Navextra"
export default function MovieInfo() {
 const [data, setData] = useState("")
 const [d, setd] = useState("")
 const [text, setText] = useState("trailer")
 const [play, setPlay] = useState(true)
 const loc = useLocation()
 var endpoint

 const id = loc.pathname.split("/")[2]
 const name = loc.pathname.split("/")[3]
 const end = `http://www.omdbapi.com?t=${name}&apikey=de727baf`

 if (loc.pathname.split("/")[1] == "tv") {
  endpoint = `https://api.themoviedb.org/3/tv/${id}?api_key=680db35a08bf7184a8a2c16cd0d7308e&language=en-US&&append_to_response=watch%2Fproviders,videos,recommendations`
 } else {
  endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=680db35a08bf7184a8a2c16cd0d7308e&language=en-US&&append_to_response=watch%2Fproviders,videos,recommendations`
 }
 useEffect(() => {
  fetch(endpoint)
   .then((data) => data.json())
   .then((data) => setd(data))
 }, [end])
 useEffect(() => {
  fetch(end)
   .then((data) => data.json())
   .then((data) => {
    setData(data)
   })
 }, [end])

 if (d) {
  try {
   var w1 = d["watch/providers"].results.IN.flatrate[0].provider_name
   var w2 = d["watch/providers"].results.IN.flatrate[1].provider_name
   var w3 = d["watch/providers"].results.IN.flatrate[2].provider_name
  } catch (err) {}
 }
 if (data) {
  try {
   var Actors =
    data.Actors.split(",")[0] +
     " ," +
     data.Actors.split(",")[1] +
     " ," +
     data.Actors.split(",")[2] || data.Actors
  } catch (err) {
   var Actors = data.Actors
  }
 }
 if (data) {
  try {
   var likes =
    Number(data.imdbVotes.split(",").join("")) > 500
     ? data.imdbVotes
     : d.vote_count
  } catch (err) {
   var likes = Math.floor(Math.random() * (300000 - 150000 + 1)) + 150000
  }
  try {
   var ratings = data.Ratings[1]?.Value || data.Ratings[0]?.Value || "N/A"
  } catch {
   var ratings = Math.floor(Math.random() * (10 - 7 + 1)) + 7
  }
  if (data.Title.length > 20 && data.Title.length < 29) {
   var Heart = styled.div`
    display: flex;
    width: 80px;
    justify-content: space-between;
    position: absolute;
    right: 0%;
    bottom: -90%;
   `
   var send = {
    margin_top: "20px !important",
    color: "green !important",
   }
  } else if (data.Title.length > 30) {
   var Heart = styled.div`
    display: flex;
    width: 80px;
    justify-content: space-between;
    position: absolute;
    right: 0%;
    bottom: -30%;
   `
   var send = {
    color: "green !important",
   }
  } else {
   var Heart = styled.div`
    display: flex;
    width: 80px;
    justify-content: space-between;
    position: absolute;
    right: 0%;
    bottom: -30%;
   `

   var send = {
    color: "green !important",
   }
  }
 }
 var trailer = []
 {
  d &&
   d.videos.results.map((m) => {
    if (m.type === "Trailer") {
     trailer.push(m.key)
    }
   })
 }

 const youtube_url = `https://www.youtube.com/embed/`
 const logoppath = "https://image.tmdb.org/t/p/original"
 const similar_pic = "https://image.tmdb.org/t/p/w300"
 return (
  <>
   <Navextra />
   <div className="movie-data-container">
    <div className="backdrop_container fade">
     {data && play && (
      <img
       className="backdrop"
       src={logoppath + d.backdrop_path}
       alt={"i"}
      ></img>
     )}
     {data && !play && (
      <iframe
       className="youtube"
       border="0"
       width="100%"
       height="330px"
       src={youtube_url + trailer[0]}
       frameBorder={0}
       allowFullScreen
      ></iframe>
     )}
    </div>
    <div className="movie-inner-details">
     {data && (
      <div className="movie-details">
       <div className="movie-pri-desc">
        <div className="movie-description">
         <h1 style={{ fontFamily: `"Staatliches", cursive` }}>{data.Title}</h1>
        </div>
        <Heart className="extra-details">
         <div>
          <Link
           to={`/share/${id}`}
           style={{
            textDecoration: "none",
            color: "white",
            fontFamily: `"Staatliches", cursive`,
           }}
          >
           {" "}
           <AiFillInstagram
            style={{
             fontSize: "25px",
             marginTop: "-1px",
             fontFamily: `"Staatliches", cursive`,
            }}
           />
          </Link>
         </div>
         <div>
          <i className="fa fa-heart" style={{ color: "red" }} id="i"></i>
          <div
           className="likes"
           style={{ fontFamily: `"Staatliches", cursive` }}
          >
           {likes}
          </div>
         </div>
        </Heart>
       </div>
       <div className="year" style={{ fontFamily: `"Staatliches", cursive` }}>
        {data.Year} • {data.Runtime}s •
        <span
         className="rated"
         style={{ fontFamily: `"Staatliches", cursive` }}
        >
         {" "}
         {data.Rated}
        </span>
       </div>
       <Link
        to={`/watch/${id}`}
        style={{ textDecoration: "none", color: "white" }}
       >
        {" "}
        <div className="watch" style={{ fontFamily: `"Staatliches", cursive` }}>
         <center>
          <i className="fa-solid fa-play"></i>&ensp;WATCH NOW
         </center>
        </div>
       </Link>
       <div className="tagline">
        <div style={{ fontFamily: `"Staatliches", cursive` }}>{d.tagline} </div>
        <div
         style={{ fontFamily: `"Staatliches", cursive` }}
         className="trailer"
         onClick={() => {
          const color = document.querySelector(".backdrop_container")
          if (play) {
           color.style.background = "black"
           setText("close")
           setPlay(false)
          } else {
           color.style.background = "red"
           setText("trailer")
           setPlay(true)
          }
         }}
        >
         {text}
        </div>
       </div>

       {d.number_of_seasons && (
        <div
         className="seasons"
         style={{ fontFamily: `"Staatliches", cursive` }}
        >
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
         className="fa-solid fa-user-group"
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
         className="fa-solid fa-rectangle-list"
         style={{
          color: "white",
          fontSize: "14.5px",
          marginTop: "2px",
         }}
        ></i>
        <div>{data.Plot}</div>
       </div>

       {w1 && (
        <div class="w">
         <i className="fa-solid fa-satellite-dish dish"></i>
         <div className="t" style={{ font_size: "10px" }}>
          NOW STREAMING ON
         </div>
         {d["watch/providers"] && w1 && <div className="ott">{w1}</div>}
         {d["watch/providers"] && w2 && <div className="ott">{w2}</div>}
         {d["watch/providers"] && w3 && <div className="ott">{w3}</div>}
        </div>
       )}

       {d.recommendations && d.recommendations.results.length > 0 && (
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
       {console.log(d.recommendations)}
       {d.recommendations && d.recommendations.results.length > 0 && (
        <div className="border_line"></div>
       )}
       {d.recommendations && d.recommendations.results.length > 0 && (
        <div className="similar">
         {d.recommendations &&
          d.recommendations.results.map((m) => {
           if (m.popularity > 40) {
            if (loc.pathname.split("/")[1] == "tv") {
             var share_titled = m.name
             var link = `/tv/${m.id}/${share_titled}`
            } else {
             var share_titled = m.title
             var link = `/similar/${m.id}/${share_titled}`
            }
            return (
             <div>
              <Link
               state={{
                data: m,
               }}
               onClick={() => {
                if (link == `/tv/${m.id}/${share_titled}`) {
                 window.screenTop(0, 0)
                }
               }}
               key={uuidv4()}
               to={link}
              >
               <img
                className="similar_pic"
                src={similar_pic + m.backdrop_path}
                alt={m.title}
               ></img>
              </Link>
              <div className="similar_title">{share_titled}</div>
             </div>
            )
           }
          })}
        </div>
       )}
      </div>
     )}
    </div>
   </div>

   {data && <Footer />}
  </>
 )
}
