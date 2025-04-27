
import './PolitikaGl.css';
import { setAll } from "../../WideScreenSlider.js";
import {  useDispatch } from 'react-redux';
import { useRef } from 'react';
function PolitikaGl({ data, isLoading, error,isMobile }) {
  const dispatch = useDispatch();
    const image1Used = useRef(false);
    const image2Used = useRef(false);
    const image3Used = useRef(false);
    const image4Used = useRef(false);
    return ( 
      <div className='general-grid '>
        {data.map((item, index) => {
          if(isMobile) {
            if(item.imageUrl !== null){
              return(
                <div key={`normal-${item.id}`} onClick={() => dispatch(setAll({title:item.title,description:item.description}))} className="d">
                  <img src={item.imageUrl} alt={item.title}></img>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              );
            }
            return(
              <div key={`normal-${item.id}`} onClick={() => dispatch(setAll({title:item.title,description:item.description}))} className="d">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            );
          }

        
          if(item.imageUrl !== null && !image1Used.current){
            image1Used.current = true;
            return(
              <div key={`first-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }} className="d" onClick={() => dispatch(setAll({title:item.title,description:item.description}))} id='d-0-pl-gl'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            );
          }
          if(item.imageUrl !== null && !image2Used.current){
            image2Used.current = true;
            return(
              <div key={`second-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }} className="d" onClick={() => dispatch(setAll({title:item.title,description:item.description}))} id='d-8-pl-gl'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            );
          }

          if(item.imageUrl !== null && !image3Used.current){
            image3Used.current = true;
            return(
              <div key={`second-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }} className="d" onClick={() => dispatch(setAll({title:item.title,description:item.description}))} id='d-2-pl-gl'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            );
          }
          if(item.imageUrl !== null && !image4Used.current){
            image4Used.current = true;
            return(
              <div key={`second-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }} className="d" onClick={() => dispatch(setAll({title:item.title,description:item.description}))} id='d-3-pl-gl'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            );
          }
          if(item.imageUrl !== null) {
                    return (
                      <div key={`normal-${item.id}`}   onClick={() => dispatch(setAll({title:item.title,description:item.description}))} className="d">
                        <img src={`${item.imageUrl}`} alt={`${item.title}`}></img>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                      </div>
                    );
          
                  }
          return (
                    <div key={`normal-${item.id}`}  onClick={() => dispatch(setAll({title:item.title,description:item.description}))} className="d">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                    </div>
                  );
})}

      </div>
        
    );
  
   
}

export default PolitikaGl;