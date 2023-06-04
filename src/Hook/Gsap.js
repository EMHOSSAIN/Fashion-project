import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGsapShutterUnveil = (item, trig) => {
    useEffect(() => {
      const el = item.current;
  
      gsap.fromTo(
        el,
        {
          height: "100%",
        },
        {
          height: 0,
          duration: 2,
          ease: Expo.easeInOut,
         
          scrollTrigger: {
            trigger: trig.current,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, []);
  };

  export const useGsapPhotoDropping = (arr) => {
    useEffect(() => {
      const el = arr.map((item) => item.current);
  
      gsap.fromTo(
        el,
        {
          y: "-100vh",
          scale: 0,
        },
        {
          y: 0,
          scale: 1,
          duration: 2,
          stagger: 0.2,
         
          ease: Expo.easeInOut,
        }
      );
    }, []);
  };

  export const useGsapPhotoLevitate = (arr, trig) => {
    useEffect(() => {
      const el = arr.map((item) => item.current);
  
      gsap.fromTo(
        el,
        {
          y: 0,
        },
        {
          y: "-30%",
          ease: Expo.easeInOut,
          scrollTrigger: {
            trigger: trig.current,
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, []);
  };

  export const useGsapFeatureLeftShutterUnveil = (item, trig) => {
    useEffect(() => {
      const el = item.current;
  
      gsap.fromTo(
        el,
        {
          height: "100%",
        },
        {
          height: 0,
          duration: 1.3,
          ease: Expo.easeInOut,
          scrollTrigger: {
            trigger: trig.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, []);
  };
  export const useGsapFeatureRightShutterUnveil = (item, trig) => {
    useEffect(() => {
      const el = item.current;
  
      gsap.fromTo(
        el,
        {
          width: "100%",
        },
        {
          width: 0,
          duration: 1.3,
          ease: Expo.easeInOut,
          scrollTrigger: {
            trigger: trig.current,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, []);
  };

  export const useGsapGalleryImage = (item) => {
    useEffect(() => {
      const el = item.current;
  
      gsap.fromTo(
        el,
        {
          x: 0,
          width: 0,
        },
        {
          x: "30%",
          width: "100%",
          duration: 1,
          ease: Expo.easeInOut,
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, []);
  };

  export const useGsapGalleryTitle = (item, trig) => {
    useEffect(() => {
      const el = item.current;
  
      gsap.fromTo(
        el,
        {
          x: "30%",
        },
        {
          x: 0,
          duration: 1,
          ease: Expo.easeInOut,
          scrollTrigger: {
            trigger: trig.current,
            start: "top center",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, []);
  };
  export const useGsapGalleryCategory = (item, trig) => {
    useEffect(() => {
      const el = item.current;
  
      gsap.fromTo(
        el,
        {
          x: "-100vw ",
        },
        {
          x: "30%",
          duration: 1,
          ease: Expo.easeInOut,
          scrollTrigger: {
            trigger: trig.current,
            start: "top center",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, []);
  };
  
  export const useGsapFooterHeadline = (item, trig) => {
    useEffect(() => {
      const el = item.current;
  
      gsap.fromTo(
        el,
        {
          y: "-100%",
        },
        {
          y: 0,
          duration: 1,
          ease: Expo.easeInOut,
          scrollTrigger: {
            trigger: trig.current,
            toggleActions: "play",
          },
        }
      );
    }, []);
  };