import { redirect } from "react-router-dom"
import styled from "styled-components"
import "./exfooter.css"
import { FiMail } from "react-icons/fi"
import { AiFillInstagram, AiFillGithub } from "react-icons/ai"
import { FaPaperPlane } from "react-icons/fa"
export default function Exfooter() {
 const Footer = styled.section`
  font-family: "Staatliches", cursive;
  position: "relative";
 `

 return (
  <>
   <Footer>
    <div
     className="footer-backdrop"
     style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original/2NArMoObkAbnIPvqlHC3gRGsfBb.jpg')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: "200px",
      filter: "grayscale(50%)",
      margin: "10px",
      outline: "none",
      backgroundRepeat: "no-repeat",
      borderRadius: "3px",
     }}
    >
     <div className="cine">
      {" "}
      <h1 style={{ letterSpacing: "5px", fontSize: "40px" }}>
       recommend a movie
      </h1>
      <input
       className="mail"
       type="text"
       placeHolder="SUGGEST A WORTH WATCHING MOVIE !"
      ></input>
      <div className="plane">
       <FaPaperPlane style={{ fontSize: "20px" }} />
      </div>
     </div>
    </div>
    <div className="foot-name">
     <span className="foot-time">TIME</span>
     <span className="foot-pass">PASS</span>
    </div>
    <div className="details-about">
     <div className="INBETWEENERS">THE INBETWEENERS</div>
    </div>
   </Footer>
  </>
 )
}
