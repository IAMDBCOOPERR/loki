import "./share.css"
import { useParams } from "react-router-dom"
export default function Share() {
 return (
  <>
   <div className="alert">
    <div className="alert_info">SCREENSHOT & SHARE TO STORIES</div>
   </div>
   <div
    className="main"
    style={{
     backgroundImage:
      "url(https://image.tmdb.org/t/p/original/fK5ssgvtI43z19FoWigdlqgpLRE.jpg)",
    }}
   >
    <div
     className="ma"
     style={{
      position: "absolute",
      fontFamily: `"Staatliches", cursive`,
      fontWeight: "600",
      color: "red",
      zIndex: "100000000",
     }}
    >
     <div className="timee">TIME PASS</div>

     <img
      className="poster_size"
      src="https://image.tmdb.org/t/p/original/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg"
     ></img>
    </div>
   </div>
  </>
 )
}
