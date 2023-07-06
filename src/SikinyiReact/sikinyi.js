import React from "react";
import './sikinyi.css'

const SikinyiReact = ()=>{
    return (
        <div className="react">
            <h1 className="heading"> LET US TALK ABOUT CARS</h1>
            <p> There are differnt types of cars. Majorly a car is 
                distinct from another because of the type of Engine or the manufacturer</p>
            <p className="engines">TYPES OF ENGINES</p>
            <p>There are 3 types of engines.</p> 
            <p> a.V shaped engines : this is an engine whose pistons are V-shaped </p>
            <p className="veengine"><img src="./Images/vengine.jpeg" alt=""/>
                <img src="./Images/Vshapedengine.jpeg" alt="" /> 
                <img src="./Images/Bluev.jpg" alt="" className="blue"/> </p>
            <p> b.BOX shaped engines: This is a type of engine that has its cylinders positioned
                horizontally instead of vertically</p> 
                <p className="boxengine"><img src="./Images/Boxengine.jpeg" alt=""/>
                <img src="./Images/redbox.jpg" alt="" className="red"/> 
                <img src="./Images/innerengine.jpg" alt="" className="red"/> </p>
            <p> c.INLINE engines: is a piston engine where all of the cylinders are 
                aligned in a row along the crankshaft. </p>
                <p className="inlineengine"><img src="./Images/reddy.jpg" alt=""className="Teddy"/>
                <img src="./Images/inline.jpg" alt="" className="Teddy"/> 
                <img src="./Images/gooodinline.jpeg" alt="" className="Teddy"/> </p>
            
            <p></p>
            <p>react is not a walk in the park</p>


        </div>
    );
};
export default SikinyiReact;