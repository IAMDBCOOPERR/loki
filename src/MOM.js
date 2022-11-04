import "./mom.css";
import { Link } from "react-router-dom";
export default function Mom(props) {
  const m = props;
  const mom_pic = `https://image.tmdb.org/t/p/original${props.backdrop_path}`;

  return (
    <section className="mom-parent">
      <Link
        style={{ textDecoration: "none" }}
        state={{ data: m }}
        to={`/title/${props.id}`}
      >
        <div
          className="mom"
          style={{
            backgroundImage: `url(${mom_pic})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "3.5px",
          }}
        >
          <div className="mom_details">
            <p className="mom_head">{props.tag}</p>
            <h3 className="mom_name">{props.title}</h3>
            <p id="u" className="net">
              {props.ott}
            </p>
            <p id="p">{props.tagline}</p>
          </div>
        </div>
      </Link>
    </section>
  );
}
