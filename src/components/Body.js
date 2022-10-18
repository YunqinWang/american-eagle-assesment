import React from 'react'
import Banner from './Banner';
import TwoColTextImg from './TwoColTextImg';
import TwoColTextProduct from './TwoColTextProduct';
import ImageRow from './ImageRow';
import OfferRow from './OfferRow';
import Mission from './Mission';
import NewsLetter from './NewsLetter';

function Body() {
  return (
    <div>
        <Banner />

        <TwoColTextProduct 
          type ="product"
          title = {{
            description:{ subtitle: "This Month", title:"Featured Products"},
            btn: {style:"btn-fill-blue", text:"View All"}
          }}
          color="blue"
          products ={[
            {product:{
              img:require("../images/elephantsleeper.jpg"),
              name:"Elephant Sleeper",
              price:"$48"
            }},
            {product:{
              img:require("../images/elephantsleeper.jpg"),
              name:"Elephant Sleeper",
              price:"$48"
            }},
            {product:{
              img:require("../images/elephantsleeper.jpg"),
              name:"Elephant Sleeper",
              price:"$48"
            }},
          ]}
        />

        <TwoColTextImg
          type ="image"
          title = {{
            description:{ subtitle: "Sleep Tight", title:"Crib Bedding"},
            btn: {style:"btn-fill-yellow", text:"Shop bedding"}
          }}
          image={{
            src:require("../images/cribbedding.png"), 
            text:"Make sure you little one catches all the Z’s",
          }}
          textPosition="right"
          color="yellow"
        />

        <TwoColTextImg
          type ="image"
          title = {{
            description:{subtitle: "Cozy comfortable", title:"Children’s Firniture"},
            btn: {style:"btn-fill-red", text:"Shop Furniture"},
          }}
          image={{
            src:require("../images/furniture.png"), 
            text:"Unwind and relax after play time",
          }}
          textPosition="left"
          color="red"
        />

        <OfferRow 
          offers={[
            {offer:{
              icon:require("../images/BB-stroller-graphic.png"),
              title:"10% Off Registry",
              subtitle:"When you enroll with us",
            }},
            {offer:{
              icon:require("../images/BB-box-graphic.png"),
              title:"Free Shipping",
              subtitle:"On all orders over $100",
            }},
            {offer:{
              icon:require("../images/BB-gift-graphic.png"),
              title:"Free Gift Wrapping",
              subtitle:"On all gift purchases",
            }}
          ]}
        />  

        <ImageRow 
          images={[
            {image:{
              src:require("../images/welovebabies-left.png"),
              alt:"We-love-babies-image1"
            }},
            {image:{
              src:require("../images/welovebabies-right.png"),
              alt:"We-love-babies-image2"
            }},
          ]}
        />

        <Mission />

        <NewsLetter/>
    </div>
  )
}

export default Body