import './mustwatch.css';
import { useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import Movie from './MustWatchMovie';
const Mustwatch  = () => {
    const [data,setData] = useState('')
    const API_KEY = `680db35a08bf7184a8a2c16cd0d7308e`;
    var mustwatch = ["tt0137523","tt0068646","tt0114814","tt0111161","tt0108052","tt0364569","tt5311514","tt0167404"];
    useEffect(()=>{
        var count  = 0;
        const collect_data  = []
        mustwatch.forEach(async m => {
            const end = `https://api.themoviedb.org/3/movie/${m}?api_key=${API_KEY}&language=en-US&append_to_response=images&include_image_language=en,null`;
           const temp_data = await  fetch(end).then(data => data.json()).then(data => {
               count  = count + 1;
                collect_data.push(data)
                 if(count == mustwatch.length){
                    setData(collect_data)
                 }            
           })
          
        })
    },[])
    return (
      <> 
      
     {!data &&  <Swiper loop={true} pagination={true} modules={[Pagination]} className="mySwiper">
        {
           [1,2,3,4,5,6,7,8].map(m => {
             return (
                 <SwiperSlide className='swiperslide'>
                    <div className='container' style={{
                        backgroundColor:'red',
                       
                    }}> 
                       
                     </div>
                 </SwiperSlide>
             )
           })
        }
     </Swiper>}
       {  
        data && <Movie data={data}/>
      }
      
       </>
    )
}
export default Mustwatch