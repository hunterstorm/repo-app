import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const HeaderAnimation = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.to(headerRef.current, {
      
      duration: 4,
      opacity: 1,
      x: 30, 
      ease: "power2.out",
      stagger: 0.4,
      onComplete: () => {
        console.log("Animation Complete");
      }
    });
  }, []);

  return <h1 ref={headerRef} style={{ opacity: 0 }}>repoLab</h1>;
};

export default HeaderAnimation;