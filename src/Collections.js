import { useEffect ,useState} from "react";
import './section.css'



const Collections  = (props) => {
const [data,setData] = useState(null);
const collection_id = props.data;
const section_title = props.title;
const API_KEY = `680db35a08bf7184a8a2c16cd0d7308e`;
const end  = `https://api.themoviedb.org/3/collection/${collection_id}?api_key=${API_KEY}&language=en-US`
const arr = [1,2,4,5,6,7,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9];
const collections_ids = [1241,121938,119,10,8864,52985,295,528,9485,748,264,8650,33514,131635,87359,8091,84,1570,2344,313086,295130,404609,304,656,328,702624]
useEffect(()=>{
    var count  = 0;
    const collect_data  = []
    collections_ids.forEach(async m => {
        const end  = `https://api.themoviedb.org/3/collection/${m}?api_key=${API_KEY}&language=en-US`
       const temp_data = await  fetch(end).then(data => data.json()).then(data => {
           count  = count + 1;
            collect_data.push(data)
             if(count == collections_ids.length){
                setData(collect_data)
             }            
       })
      
    })
},[])
return (
    
      <>
     <section>
        <div className="theme section">{section_title}<i style={{fontSize:"15px",}} className="fa fa-chevron-right"></i></div>
        <div className="o-div" id="layout">
            {!data &&
            
                  arr.map((m,i) => {
                    return (
                        <div className="place" key={i}>
                         <div className="inner-place"></div>
                    </div>
                    )
                  })
                    }
           {data && data.map((m,i) => {
                const photo_link = m.poster_path;
                  const photo = `https://image.tmdb.org/t/p/w300${photo_link}`;
                return (
                    <div className="item" key={i}>
                    <img  loading="lazy"  className="img clicking_here" src={photo} alt={m.name}></img>
                    <div className="title">
                      <span>{m.name}</span>
                      <span style={{color:'red'}}>({m.parts.length})</span>
                      </div>
                    </div>
                    
                )
            })}
          
        </div>
        </section>
    
    
    </>
)

}












export default Collections;