import React,{useRef} from "react";
import './SporTr.css';
import { setAll } from "../../WideScreenSlider.js";
import {  useDispatch } from 'react-redux';

function SporTr({ data, isLoading, error,isMobile }) {
  const dispatch = useDispatch();
    
    
    const image1Used = useRef(false);
    const image2Used = useRef(false);
    const image3Used = useRef(false);
    const image4Used = useRef(false);
    const image5Used = useRef(false);
    const image6Used = useRef(false);
    const image7Used = useRef(false);
   
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




            if(!image1Used.current && item.imageUrl !== null && !item.imageUrl.includes("haber16")){
                image1Used.current = true;
                return(
                    <div key={`first-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }} className="d" onClick={() => dispatch(setAll({title:item.title,description:item.description}))} id='d-0-sp-tr'>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                );
            }
            if(!image2Used.current && item.imageUrl !== null && !item.imageUrl.includes("haber16")){
                image2Used.current = true;
                return(
                    <div key={`second-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }}  onClick={() =>dispatch(setAll({title:item.title,description:item.description}))} className="d" id='d-8-sp-tr'>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                );
            }
            if(!image3Used.current && item.imageUrl !== null && !item.imageUrl.includes("haber16")){
                image3Used.current = true;
                return(
                    <div key={`first-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }} className="d" onClick={() => dispatch(setAll({title:item.title,description:item.description}))} id='d-3-sp-tr'>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                );
            }
            if(!image4Used.current && item.imageUrl !== null && !item.imageUrl.includes("haber16")){
                image4Used.current = true;
                return(
                    <div key={`first-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }} className="d" onClick={() => dispatch(setAll({title:item.title,description:item.description}))} id='d-4-sp-tr'>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                );
            }
            if(!image5Used.current && item.imageUrl !== null && !item.imageUrl.includes("haber16")){
                image5Used.current = true;
                return(
                    <div key={`first-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }} className="d" onClick={() => dispatch(setAll({title:item.title,description:item.description}))} id='d-5-sp-tr'>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                );
            }
            if(!image6Used.current && item.imageUrl !== null && !item.imageUrl.includes("haber16")){
                image6Used.current = true;
                return(
                    <div key={`first-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }} className="d" onClick={() => dispatch(setAll({title:item.title,description:item.description}))} id='d-6-sp-tr'>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                );
            }
            if(!image7Used.current && item.imageUrl !== null && !item.imageUrl.includes("haber16")){
                image7Used.current = true;
                return(
                    <div key={`first-${item.id}`} style={{ backgroundImage: `url(${item.imageUrl})` }} className="d" onClick={() => dispatch(setAll({title:item.title,description:item.description}))} id='d-7-sp-tr'>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                );
            }
            
            if(item.imageUrl !== null && !item.imageUrl.includes("haber16")) {
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
        
    
        </div> );
}

export default SporTr;