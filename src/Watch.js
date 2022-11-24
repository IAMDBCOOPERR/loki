import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function Watch() {
 const { id } = useParams()
 return (
  <>
   <div
    className="watch-movie"
    style={{
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     height: "100vh",
    }}
   >
    <iframe
     style={{
      width: "100%",
      height: "400px",
     }}
     frameBorder={0}
     src={`https://2embed.org/embed/movie?tmdb=${id}`}
     allowFullScreen
    ></iframe>
   </div>
  </>
 )
}
