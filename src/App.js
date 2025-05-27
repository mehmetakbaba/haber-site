import './App.css';
import  { useEffect, useRef, useState } from 'react';
import { General, Finance,Sport, Divider } from './imports';
import { Button } from '@mui/material';
import { languages } from "./languages";
import { useSelector } from 'react-redux';
import { getSelectCountry } from './slice/SelectSlice';
import BottomDrawer from './BottomDrawer';
import  useSelectCountry  from './SelectCountry';
import CustomSkeleton from './CustomSkeleton';
import CountryButton from './CountryButton';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const stateLangue = useSelector(getSelectCountry);

  const { data, isLoading, error } = useSelectCountry();
const {general, sport, finance, header, dropdown} = languages[stateLangue];



  const scrollToDivider = (section) => {
    if (section.current) {
      section.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const buttonIds = ['politikaH3','finansH3', 'sporH3'];

    const handleScroll = () => {
      buttonIds.forEach(id => {
        const button = document.getElementById(id);
        if (button) {
          button.style.fontSize = '1rem';
        }
      });

      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (section1Ref.current) {
        if (scrollY < section2Ref.current.offsetTop - 100) {
          document.getElementById('politikaH3').style.fontSize = '2rem';
        
        } 
        
         else if (scrollY >= section2Ref.current?.offsetTop - 100 && scrollY < section3Ref.current?.offsetTop - 100) {
          document.getElementById('finansH3').style.fontSize = '2rem';
      
        
        } else if (scrollY >= section3Ref.current?.offsetTop - 100) {
          document.getElementById('sporH3').style.fontSize = '2rem';
          
        } 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='App'>
      {!isMobile ? (
        <>
        <header style={{ position: 'fixed', zIndex: 1 }}>
        <h1>News Sway</h1>
       
        <div className='button-div'>
          <Button sx={{backgroundColor: 'transparent', 
                      color: 'black',}}  onClick={() => scrollToDivider(section1Ref)} disableRipple>
            <h3 style={{fontSize : '2rem'}} id='politikaH3'>{general}</h3>
          </Button>
          <Button sx={{backgroundColor: 'transparent', 
                      color: 'black',}} onClick={() => scrollToDivider(section2Ref)} disableRipple>
            <h3 id='finansH3'>{finance}</h3>
          </Button>
          <Button sx={{backgroundColor: 'transparent', 
                      color: 'black',}} onClick={() => scrollToDivider(section3Ref)} disableRipple>
            <h3 id='sporH3'>{sport}</h3>
          </Button>
          <CountryButton  {...dropdown}>
            <h3 id='country'>{header}</h3>
          </CountryButton>
           
          <h4 style={{ position: 'absolute', top: '10px', right: '10px', margin: 0 }}>  newsswayinfo@gmail.com </h4>
        </div>
      </header>   </>
      ) : <>
      <header style={{ 
  position: 'fixed', 
 
  width: '100%',
  backgroundColor: 'white', 
 
}}>
  <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 10px',
  position: 'relative',
}}>



 
  <h1 style={{ 
    fontSize: '1.5rem', 
    margin: 0, 
    textAlign: 'center', 
    
  }}>
    News Sway
  </h1>


  <h4 style={{ 
    margin: 0, 
    fontSize: '0.8rem', 
    textAlign: 'right', 
     
  }}>
    newsswayinfo@gmail.com
  </h4>
</div>

  
  <div className='button-div' style={{
    display: 'flex',
   
  
    height:'100%',
    gap: '10px',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none' 
  }}>
    <Button sx={{backgroundColor: 'transparent', 
                      color: 'black',}}  onClick={() => scrollToDivider(section1Ref)} disableRipple>
            <h3 style={{fontSize : '2rem'}} id='politikaH3'>{general}</h3>
          </Button>
          <Button sx={{backgroundColor: 'transparent', 
                      color: 'black',}} onClick={() => scrollToDivider(section2Ref)} disableRipple>
            <h3 id='finansH3'>{finance}</h3>
          </Button>
          <Button sx={{backgroundColor: 'transparent', 
                      color: 'black',}} onClick={() => scrollToDivider(section3Ref)} disableRipple>
            <h3 id='sporH3'>{sport}</h3>
          </Button>
          <CountryButton  {...dropdown}>
            <h3 id='country'>{header}</h3>
            
          </CountryButton>
  </div>
</header>

      
      </>}

      {isLoading ? (
        <>
         
          <div className='skeleton-flex'>
          <CustomSkeleton skeletonCount={5} />
          </div>
          <div className='skeleton-flex'>
          <CustomSkeleton skeletonCount={5} />
          </div>
         
        </>
      ) : (
        <>
       
          <Divider ref={section1Ref} />
          <General 
            data={data?.Genel || []}
            isLoading={isLoading}
            error={error}
            isMobile={isMobile}
          />

          <Divider ref={section2Ref} />
          

         
          <Finance 
            data={data?.Finans || []}
            isLoading={isLoading}
            error={error}
            isMobile={isMobile}
          />
          
          

           <Divider ref={section3Ref} />
          <Sport 
            data={data?.Spor || []}
            isLoading={isLoading}
            error={error}
            isMobile={isMobile}
          />

         
          
        </>
      )}

      <BottomDrawer />
    </div>
  );
}

export default App;
