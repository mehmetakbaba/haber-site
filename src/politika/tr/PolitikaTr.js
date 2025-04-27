import React, { useRef } from "react";
import './PolitikaTr.css';
import { setAll } from "../../WideScreenSlider.js";
import {  useDispatch } from 'react-redux';


function PolitikaTr({ data, isLoading, error,isMobile }) {
  const dispatch = useDispatch();
  
  
  const image1Used = useRef(false);
  const image2Used = useRef(false);
  const image3Used = useRef(false);
  const image4Used = useRef(false);




  return (
    <div className='general-grid'>
      {data.map((item, index) => {
        if (isMobile) {


          if (item.imageUrl !== null) {
            return (
              <div key={`normal-${item.id}`} onClick={() => dispatch(setAll({ title: item.title, description: item.description }))} className="d">
                <img src={item.imageUrl} alt={item.title}></img>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            );
          }
          return (
            <div key={`normal-${item.id}`} onClick={() => dispatch(setAll({ title: item.title, description: item.description }))} className="d">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          );
        }


        if (!image1Used.current && item.imageUrl !== null) {
          image1Used.current = true;
          return (
            <div key={`first-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }} className="d" onClick={() => dispatch(setAll({title:item.title,description:item.description}))} id='d-0-pl-tr'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          );
        }
        
        if (!image2Used.current  && item.imageUrl !== null) {
          image2Used.current = true;
          return (
            <div key={`second-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }}  onClick={() =>dispatch(setAll({title:item.title,description:item.description}))} className="d" id='d-1-pl-tr'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          );
        } 
        // if(item.imageUrl === null && !notImage2Used.current) {
        //   notImage2Used.current = true;
        //   return (
        //     <div key={`normal-${item.id}`} id='pl-tr-normal-2'  onClick={() => dispatch(setAll({title:item.title,description:item.description}))} className="d">
        //     <h1>{item.title}</h1>
        //     <p>{item.description}</p>
        //   </div>
        //   );
        // }
        if (!image3Used.current && item.imageUrl !== null) {
          image3Used.current = true;
          return (
            <div key={`first-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }} className="d" onClick={() => dispatch(setAll({title:item.title,description:item.description}))} id='d-2-pl-tr'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          );
        }
        if (!image4Used.current && item.imageUrl !== null) {
          image4Used.current = true;
          return (
            <div key={`second-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }}  onClick={() =>dispatch(setAll({title:item.title,description:item.description}))} className="d" id='d-3-pl-tr'>
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
        
        // if(item.imageUrl === null && !notImage1Used.current) {
        //   notImage1Used.current = true;
        //   return (
        //     <div key={`normal-${item.id}`} id='pl-tr-normal-1'  onClick={() => dispatch(setAll({title:item.title,description:item.description}))} className="d">
        //     <h1>{item.title}</h1>
        //     <p>{item.description}</p>
        //   </div>
        //   );
        // }
        
       

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

export default PolitikaTr;