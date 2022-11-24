import { useState } from "react"
import "./shortflim.css"
export default function Shortflims() {
 const [playShort, setPlayShort] = useState(false)
 const [yt, setY] = useState("")
 const sf = [
  {
   poster: "https://img.youtube.com/vi/4p9dFL_Xcrg/maxresdefault.jpg",
   title: "madhuram",
   yid: "v=4p9dFL_Xcrg",
   rt: "1hr",
   gen: "7 stages of love",
  },

  {
   poster: "https://img.youtube.com/vi/SRqNpKOe3-4/maxresdefault.jpg",
   title: `there's no 'WE' in family`,
   yid: `v=SRqNpKOe3-4`,
   rt: `6min`,
   gen: `satire`,
  },
  {
   poster: `https://img.youtube.com/vi/Ojy_UgBZbxo/maxresdefault.jpg`,
   title: `The Viva by Sabarish Kandregula`,
   yid: `v=Ojy_UgBZbxo`,
   rt: `13min`,
   gen: `Comedy`,
  },
  {
   poster: `https://img.youtube.com/vi/fpLcxtihnp0/maxresdefault.jpg`,
   title: `BACKSPACE`,
   yid: `v=fpLcxtihnp0`,
   rt: `22min`,
   gen: `sci-fi`,
  },
  {
   poster: `https://img.youtube.com/vi/Ff82XtV78xo/maxresdefault.jpg`,
   title: `Ahalya`,
   yid: `v=Ff82XtV78xo`,
   rt: `14min`,
   gen: "drama",
  },
  {
   poster: `https://img.youtube.com/vi/PzctkHXhIic/maxresdefault.jpg`,
   title: `The Breakup Consultant`,
   yid: `v=PzctkHXhIic`,
   rt: `19min`,
   gen: `drama`,
  },
  {
   poster: `https://img.youtube.com/vi/1r8sD-FtbGk/maxresdefault.jpg`,
   title: `Dialogue in the Dark`,
   yid: `v=1r8sD-FtbGk`,
   rt: `10min`,
   gen: `feel good`,
  },
  {
   poster: `https://img.youtube.com/vi/51K-tcaAXnw/maxresdefault.jpg`,
   title: `Poles Apart`,
   yid: `v=51K-tcaAXnw`,
   rt: `31min`,
   gen: `perpective`,
  },
  {
   poster: `https://img.youtube.com/vi/og8_oPxvLQE/maxresdefault.jpg`,
   title: `SOLITUDE`,
   yid: `v=og8_oPxvLQE`,
   rt: `9min`,
   gen: `thrill`,
  },
  {
   poster: `https://img.youtube.com/vi/fMziCmBAH8E/maxresdefault.jpg`,
   title: `The booth`,
   yid: `v=fMziCmBAH8E`,
   rt: `15min`,
   gen: `lust`,
  },
  {
   poster: `https://img.youtube.com/vi/BtpwWqJjvTM/maxresdefault.jpg`,
   title: `Budidalo Posina Pannerula`,
   yid: `v=BtpwWqJjvTM`,
   rt: `2min`,
   gen: `dark`,
  },
  {
   poster: `https://img.youtube.com/vi/_r6DkKSbEuQ/maxresdefault.jpg`,
   title: `TAKEN`,
   yid: `v=_r6DkKSbEuQ`,
   rt: `11min`,
   gen: `action`,
  },
  {
   poster: `https://img.youtube.com/vi/aYdMg859SkI/maxresdefault.jpg`,
   title: `Middle Finger`,
   yid: `v=aYdMg859SkI`,
   rt: `29min`,
   gen: `attitude`,
  },
  {
   poster: `https://i3.ytimg.com/vi/el0k89rIA-w/hqdefault.jpg`,
   title: `BRICOLEUR`,
   yid: `v=el0k89rIA-w`,
   rt: `4min`,
   gen: "feel good",
  },
  {
   poster: `https://img.youtube.com/vi/V0VfyYDY3dQ/maxresdefault.jpg`,
   title: `SENTRY`,
   yid: `v=V0VfyYDY3dQ`,
   rt: `3min`,
   gen: `thril`,
  },
  {
   poster: `https://img.youtube.com/vi/MDqxBGL738U/maxresdefault.jpg`,
   title: `AFRAID`,
   yid: `v=MDqxBGL738U`,
   rt: `4min`,
   gen: "thrill",
  },
  {
   poster: `https://img.youtube.com/vi/n1Vt_z4BuWk/maxresdefault.jpg`,
   title: `The Big Shave`,
   yid: `v=n1Vt_z4BuWk`,
   rt: `6min`,
   gen: `drama`,
  },
  {
   poster: `https://img.youtube.com/vi/erk7wRSIWiE/maxresdefault.jpg`,
   title: `31st Night`,
   yid: `v=erk7wRSIWiE`,
   rt: `12min`,
   gen: `comedy`,
  },
 ]
 const youtube_url = `https://www.youtube.com/embed/`

 return (
  <>
   <div>
    <span className="title_short"> SHORT FLIMS ON YOUTUBE</span>
    <i style={{ fontSize: "15px" }} className="fa fa-chevron-right"></i>
    <div className="short_flim_scroll">
     {sf &&
      sf.map((s, i) => {
       return (
        <div>
         <img
          src={s.poster}
          key={i}
          className="short_pic"
          alt={s.title}
          data-id={s.yid.split("=")[1]}
          onClick={(e) => {
           setPlayShort(true)
           setY(e.target.dataset.id)
          }}
         ></img>
         <div className="short_title">{s.title}</div>
        </div>
       )
      })}
    </div>
   </div>

   {playShort && (
    <div
     className="youtube_container"
     style={{ position: "fixed", bottom: "0", right: "0", zIndex: "1000000" }}
    >
     <div
      style={{
       textAlign: "right",
       marginBottom: "5px",
       marginRight: "5PX",
      }}
      className="close"
      onClick={() => {
       setPlayShort(false)
      }}
     >
      close
     </div>
     <iframe
      frameBorder={0}
      src={youtube_url + yt}
      border="0"
      width="290px"
      height="200px"
      allowFullScreen
     ></iframe>
    </div>
   )}
  </>
 )
}
