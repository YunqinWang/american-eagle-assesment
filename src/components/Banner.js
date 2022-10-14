import React,{useState} from 'react'
import BannerAd from './BannerAd';

function Banner() {
    const [slideState,setSlideState] = useState(0);
  return (
    <section class="hero">
        <div class="hero__carousel" id="hero__carousel">
            <div class="hero__carousel-slide">
                <div class="hero__carousel-img">
                    <img src={require("../images/slide1.png")} alt="" />
                </div>
                <div class="hero__outter-text-container">
                    <BannerAd/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner