import React from 'react'
import Banner from './Banner';
import TwoColTextImg from './TwoColTextImg';
import TwoColTextProduct from './TwoColTextProduct';

function Body() {
  return (
    <div>
        <Banner />
        <TwoColTextProduct 
          title = {{
            description:{ subtitle: "Sleep Tight", title:"Crib Bedding"},
            btn: {style:"btn-fill-blue", text:"Shop bedding"}
          }}
          color="blue"
          product1={{
            img:require("../images/elephantsleeper.jpg"),
            name:"Elephant Sleeper",
            price:"$48"
          }}
          product2={{
            img:require("../images/elephantsleeper.jpg"),
            name:"Elephant Sleeper",
            price:"$48"
          }}
          product3={{
            img:require("../images/elephantsleeper.jpg"),
            name:"Elephant Sleeper",
            price:"$48"
          }}
            
        />
        <TwoColTextImg
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
          title = {{
            description:{subtitle: "Cozy comfortable", title:"Children’s Firniture"},
            btn: {style:"btn-fill-red", text:"View all"}
          }}
          image={{
            src:require("../images/furniture.png"), 
            text:"Unwind and relax after play time",
          }}
          textPosition="left"
          color="red"
        />
        
    </div>
  )
}

export default Body