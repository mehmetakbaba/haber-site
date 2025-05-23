import React from "react";

import { setAll } from "../WideScreenSlider.js";
import { useDispatch } from 'react-redux';

function SporGl({ data, isLoading, error,isMobile }) {
  const dispatch = useDispatch();
  
  return (
    <div className='general-grid'>
      {
        data.map((item) => {
       
            
            if (item.imageUrl !== null) {
              return (
                <div key={`normal-${item.id}`} onClick={() => dispatch(setAll({ title: item.title, description: item.describe	 }))} className="d">
                  <img src={item.imageUrl} alt={item.title} />
                  <h1>{item.title}</h1>
                  <p>{item.describe	}</p>
                </div>
              );
            }
            return (
              <div key={`normal-${item.id}`} onClick={() => dispatch(setAll({ title: item.title, description: item.describe	 }))} className="d">
                <h1>{item.title}</h1>
                <p>{item.describe	}</p>
              </div>
            );
          
        })
      }
    </div>
  );
}

export default SporGl;
