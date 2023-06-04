import React, { useRef } from 'react';
import { useGsapPhotoDropping, useGsapPhotoLevitate, useGsapShutterUnveil } from '../../Hook/Gsap';

const HomePageComponents = () => {
    const heroRef = useRef(null);
    const shutter1 = useRef(null);
    const shutter2 = useRef(null);
  
    const photo1Ref = useRef(null);
    const photo2Ref = useRef(null);
    const photo3Ref = useRef(null);
    const photo4Ref = useRef(null);
    const photo5Ref = useRef(null);
  
    const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref]
    useGsapShutterUnveil(shutter1, 0, heroRef);
    useGsapShutterUnveil(shutter2, 0.1, heroRef);
    useGsapPhotoDropping(photosArr);
    useGsapPhotoLevitate(photosArr, heroRef);
    return (
        <section className="hero wrapper my-5 " ref={heroRef}>
        <h1 className="ethereal">
          Goenka's <span ref={shutter1}></span>
        </h1>
        <h1 className="canvas">
          Fashion <span ref={shutter2}></span>
        </h1>
        <div className="photos">
          <div
            ref={photo1Ref}
            className="photo one"
            style={{
              backgroundImage:
                'url("https://cdn.pixabay.com/photo/2018/08/18/14/41/fashion-3614897_1280.jpg")',
            }}
          ></div>
          <div
            ref={photo2Ref}
            className="photo two"
            style={{
              backgroundImage:
                'url("https://cdn.pixabay.com/photo/2018/03/22/16/17/dress-3250938_1280.jpg")',
            }}
          ></div>
          <div
            ref={photo3Ref}
            className="photo three"
            style={{
              backgroundImage:
                'url("https://cdn.pixabay.com/photo/2016/10/16/23/34/fashion-show-1746596_1280.jpg")',
            }}
          ></div>
          <div
            ref={photo4Ref}
            className="photo four"
            style={{
              backgroundImage:
                'url("https://cdn.pixabay.com/photo/2019/02/07/17/31/wardrobe-3981732_1280.jpg")',
            }}
          ></div>
          <div
            ref={photo5Ref}
            className="photo five"
            style={{
              backgroundImage:
                'url("https://cdn.pixabay.com/photo/2018/11/02/17/14/goth-3790614_1280.jpg")',
            }}
          ></div>
        </div>
      </section>

      
    );
};

export default HomePageComponents;