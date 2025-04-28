import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { PolitikaTr, PolitikaGl, FinansTr, FinansGl, Button, Divider } from './imports';
import SporTr from './spor/tr/SporTr';
import SporGl from './spor/gl/SporGl';
import BottomDrawer from './BottomDrawer';
import { useGetNewsQuery } from './ApiSlice';
import CustomSkeleton from './CustomSkeleton';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  const { data, isLoading, error } = useGetNewsQuery();

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
    const buttonIds = ['trHeader', 'glHeader', 'politikaH3', 'finansH3', 'sporH3'];

    const handleScroll = () => {
      buttonIds.forEach(id => {
        const button = document.getElementById(id);
        if (button) {
          button.style.fontSize = '1rem';
        }
      });

      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (section2Ref.current) {
        if (scrollY < section2Ref.current.offsetTop - 100) {
          document.getElementById('politikaH3').style.fontSize = '2rem';
          document.getElementById('trHeader').style.fontSize = '1.5rem';
        } else if (scrollY >= section2Ref.current.offsetTop - 100 && scrollY < section3Ref.current?.offsetTop - 100) {
          document.getElementById('politikaH3').style.fontSize = '2rem';
          document.getElementById('glHeader').style.fontSize = '1.5rem';
        } else if (scrollY >= section3Ref.current?.offsetTop - 100 && scrollY < section4Ref.current?.offsetTop - 100) {
          document.getElementById('finansH3').style.fontSize = '2rem';
          document.getElementById('trHeader').style.fontSize = '1.5rem';
        } else if (scrollY >= section4Ref.current?.offsetTop - 100 && scrollY < section5Ref.current?.offsetTop - 100) {
          document.getElementById('finansH3').style.fontSize = '2rem';
          document.getElementById('glHeader').style.fontSize = '1.5rem';
        } else if (scrollY >= section5Ref.current?.offsetTop - 100 && scrollY < section6Ref.current?.offsetTop - 100) {
          document.getElementById('sporH3').style.fontSize = '2rem';
          document.getElementById('trHeader').style.fontSize = '1.5rem';
        } else {
          document.getElementById('sporH3').style.fontSize = '2rem';
          document.getElementById('glHeader').style.fontSize = '1.5rem';
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
          <Button onClick={() => scrollToDivider(section1Ref)} disableRipple>
            <h3 id='politikaH3'>Gündem</h3>
          </Button>
          <h3 id='trHeader'>Türkiye</h3>
          <Button onClick={() => scrollToDivider(section3Ref)} disableRipple>
            <h3 id='finansH3'>Finans</h3>
          </Button>
          <h3 id='glHeader'>Dünya</h3>
          <Button onClick={() => scrollToDivider(section5Ref)} disableRipple>
            <h3 id='sporH3'>Spor</h3>
          </Button>
          <h4 style={{ position: 'absolute', top: '10px', right: '10px', margin: 0 }}>  newsswayinfo@gmail.com </h4>
        </div>
      </header>   </>
      ) : <>
      <header style={{ 
  position: 'fixed', 
 
  width: '100%',
  backgroundColor: 'white', // Add background color for readability
 
}}>
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px'
  }}>
    <h1 style={{ fontSize: '1.5rem', margin: 0 }}>News Sway</h1>
    <h4 style={{ margin: 0, fontSize: '0.8rem' }}>newsswayinfo@gmail.com</h4>
  </div>
  
  <div className='button-div' style={{
    display: 'flex',
    overflowX: 'auto',
    height:'100%',
    gap: '10px',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none' // For Firefox
  }}>
    <Button onClick={() => scrollToDivider(section1Ref)} disableRipple style={{ minWidth: 'unset' }}>
      <h3 id='politikaH3' style={{ fontSize: '1rem', margin: 0 }}>Gündem</h3>
    </Button>
    <h3 id='trHeader' style={{ fontSize: '1rem', margin: 0 }}>Türkiye</h3>
    <Button onClick={() => scrollToDivider(section3Ref)} disableRipple style={{ minWidth: 'unset' }}>
      <h3 id='finansH3' style={{ fontSize: '1rem', margin: 0 }}>Finans</h3>
    </Button>
    <h3 id='glHeader' style={{ fontSize: '1rem', margin: 0 }}>Dünya</h3>
    <Button onClick={() => scrollToDivider(section5Ref)} disableRipple style={{ minWidth: 'unset' }}>
      <h3 id='sporH3' style={{ fontSize: '1rem', margin: 0 }}>Spor</h3>
    </Button>
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
          <PolitikaTr 
            data={data?.data?.PolitikaTr || []}
            isLoading={isLoading}
            error={error}
            isMobile={isMobile}
          />

          <Divider ref={section2Ref} />
          <PolitikaGl 
            data={data?.data?.PolitikaGl || []}
            isLoading={isLoading}
            error={error}
            isMobile={isMobile}
          />

          <Divider ref={section3Ref} />
          <FinansTr 
            data={data?.data?.FinansTr || []}
            isLoading={isLoading}
            error={error}
            isMobile={isMobile}
          />

          <Divider ref={section4Ref} />
          <FinansGl 
            data={data?.data?.FinansGl || []}
            isLoading={isLoading}
            error={error}
            isMobile={isMobile}
          />

          <Divider ref={section5Ref} />
          <SporTr 
            data={data?.data?.SporTr || []}
            isLoading={isLoading}
            error={error}
            isMobile={isMobile}
          />

          <Divider ref={section6Ref} />
          <SporGl 
            data={data?.data?.SporGl || []}
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
