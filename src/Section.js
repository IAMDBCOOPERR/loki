import { useEffect, useState } from "react";
import "./section.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
const Section = (props) => {
  const list_id = props.data;
  const section_title = props.title;
  const [data, setData] = useState(null);
  const API_KEY = `680db35a08bf7184a8a2c16cd0d7308e`;
  const end = `https://api.themoviedb.org/3/list/${list_id}?api_key=${API_KEY}&language=en-US`;
  const d = `https://picsum.photos/200/300`;
  const arr = [
    1, 2, 4, 5, 6, 7, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  ];
  useEffect(() => {
    fetch(end)
      .then((data) => data.json())
      .then((data) => {
        setData(data.items);
      });
  }, [end]);
  return (
    <section>
      <div className="theme section">
        {section_title}
        <i style={{ fontSize: "15px" }} className="fa fa-chevron-right"></i>
      </div>
      <div className="o-div" id="layout">
        {!data &&
          arr.map((m) => {
            return (
              <div className="place">
                <div className="inner-place"></div>
              </div>
            );
          })}
        {data &&
          data.map((m) => {
            const photo_link = m.poster_path;
            const photo = `https://image.tmdb.org/t/p/w300${photo_link}`;
            return (
              <div className="item">
                <Link to={`/title/${m.id}`} state={{ data: m, key: uuidv4() }}>
                  <img
                    loading="lazy"
                    decoding="async"
                    className="img clicking_here"
                    src={photo}
                    alt={m.title}
                  ></img>
                </Link>
                <div className="title">
                  <span>{m.title || m.name}</span>
                  <span style={{ color: "white", minWidth: "30px" }}>
                    🔥{m.vote_average}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Section;
