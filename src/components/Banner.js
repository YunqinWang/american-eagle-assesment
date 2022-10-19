import React,{useState} from 'react'
import BannerAd from './BannerAd';
import { ReactComponent as NavArrow }  from '../images/navarrow.svg'
import slide1 from '../images/slide1.png'
import slide2 from '../images/slide2.png'
import slide3 from '../images/slide3.png'


function Banner() {
    const [slideState,setSlideState] = useState(0);
    const slideImg = [
        {slide:{number:0, src:slide1}},
        {slide:{number:1, src:slide2}},
        {slide:{number:2, src:slide3}},
    ]
    const [btnClicked, setBtnClicked] = useState("next");

    function getSlideElement (slideImg, i, imgClassName){
        i = formatNum(i);
        return <img key={i} 
                    className = {imgClassName}
                    src={(`${slideImg[i].slide.src}`)} 
                    alt= {`banner image ${i}`} 
                />
    }

    //set the slideState number
    function slideNum(num){
        if(num>0) setBtnClicked("next");
        else setBtnClicked("prev");
        let slideNum = slideState + num;
        slideNum = formatNum(slideNum);
        setSlideState(slideNum);
        showCurr();
    }

    //format the slideNum to be [0, slideImg.length-1]
    function formatNum(slideNum){
        if(slideNum<0) slideNum =slideNum + slideImg.length;
        slideNum = slideNum % slideImg.length;
        return slideNum;
    }

    function showCurr(){
        let toShow=[];
        if(btnClicked == "next"){
            toShow.push(getSlideElement (slideImg, slideState-1, "slide-prev"));
            toShow.push(getSlideElement (slideImg, slideState, "slide-curr"));
            toShow.push(getSlideElement (slideImg, slideState+1, "slide-next"));
        }
        else{
            toShow.push(getSlideElement (slideImg, slideState+1, "slide-next"));
            toShow.push(getSlideElement (slideImg, slideState, "slide-curr"));
            toShow.push(getSlideElement (slideImg, slideState-1, "slide-prev"));
        }
        return toShow;
    }


    let dots = slideImg.map((d,i)=>{return <button key={i} onClick = {()=>setSlideState(i)}> </button>})

  return (
    <section className="hero">
        <div className="hero-carousel" id="hero-carousel">
            <div className="hero-carousel-slide">
                <div className="hero-carousel-img">
                    <div>{ showCurr()}</div>
                    <button className="hero-carousel-leftArr"
                            onClick={()=>slideNum(-1)}
                            >
                        <NavArrow width="20px"/>
                    </button>
                    <button className="hero-carousel-rightArr"
                            onClick={()=>slideNum(1)}
                        >
                        <NavArrow width="20px"/>
                    </button>
                    <div className = "hero-carousel-dot">
                        {dots}
                    </div>
                </div>
                <div className="hero-outter-text-container">
                    <BannerAd/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner