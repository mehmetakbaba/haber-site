import React from "react";
import './FinansTr.css';
import { setAll } from "../../WideScreenSlider.js";
import { useDispatch } from 'react-redux';
function FinansTr({ data, isLoading, error,isMobile }) {
  const dispatch = useDispatch();



    return (
        <div className='general-grid'>
          {
            
            data.map((item, index) => {
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
         
            if(item.imageUrl !== null && !item.imageUrl.includes('donanimhaber')){
              return(
                <div key={`normal-${item.id}`}   onClick={() => dispatch(setAll({title:item.title,description:item.description}))} className="d">
                  <img src={`${item.imageUrl}`} alt={`${item.title}`}></img>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
              );
            }
          
          
            return(
              <div key={`normal-${item.id}`}   onClick={() => dispatch(setAll({title:item.title,description:item.description}))} className="d">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            );
            })
          }
           </div>
            
          );
}

export default FinansTr;