import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marque from './components/Marque';
import About from './components/about';
import Eyes from './components/Eyes';
import Features from './components/Features';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className="w-full min-h-screen text-amber-50 bg-zinc-900" data-scroll-container>
      <Navbar />
      <Landing />
      <Marque />
      <About />
      <Eyes />
      <Features />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
