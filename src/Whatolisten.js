import { useEffect, useState } from "react"
import "./section.css"

const arr = [
 1, 2, 4, 5, 6, 7, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
]

const Listen = () => {
 const CLIENT_ID = `c670d0131cfe4f238fc841b8837a5926`
 const CLIENT_SECRET = `4a7feaf59cd444dfb71b22d36cf627f3`
 const [accessToken, setAccessToken] = useState("")
 const [data, setData] = useState("")
 const [play, setPlay] = useState(false)
 useEffect(() => {
  var authParameters = {
   method: "POST",
   headers: {
    "Content-Type": "application/x-www-form-urlencoded",
   },
   body:
    `grant_type=client_credentials&client_id=` +
    CLIENT_ID +
    "&client_secret=" +
    CLIENT_SECRET,
  }
  fetch("https://accounts.spotify.com/api/token", authParameters)
   .then((result) => result.json())
   .then((data) => {
    setAccessToken(data.access_token)
   })
 }, [])
 useEffect(() => {
  if (accessToken) {
   async function playlist() {
    var auth = {
     method: "GET",
     headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
     },
    }
    const playlistData = await fetch(
     "https://api.spotify.com/v1/playlists/4W55pFzhOj9X9H2G6T0EZJ",
     auth
    )
     .then((d) => d.json())
     .then((d) => {
      console.log(
       d.tracks.items.track.name,
       d.tracks.items.trackalbum.images[1].url
      )
      setData(d.tracks.items)
     })
   }
   playlist(accessToken)
  } else return
 }, [accessToken])
 return (
  <>
   <section>
    <div className="theme section">
     What to Listen?{" "}
     <i style={{ fontSize: "15px" }} className="fa fa-chevron-right"></i>
    </div>
    <div className="o-div" id="layout">
     {!data &&
      arr.map((m, i) => {
       return (
        <div className="place" key={i}>
         <div className="songs_inner_place"></div>
        </div>
       )
      })}
     {data &&
      data.map((m, i) => {
       const song = m.track.name
       const play_preview = m.track.preview_url
       const rating = m.track.popularity
       const img_src = m.track.album.images[1].url
       return (
        <div className="item" key={i}>
         <img
          loading="lazy"
          key={m.track.name}
          data-url={play_preview}
          className="song_img clicking_here"
          src={img_src}
          alt={song}
         ></img>

         <div className="title song_title">
          <span>{song}</span>
          <span>❤️{rating}%</span>
         </div>
        </div>
       )
      })}
    </div>
   </section>
  </>
 )
}

export default Listen
