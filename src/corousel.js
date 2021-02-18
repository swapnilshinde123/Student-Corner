import React from 'react'
import "./corousel.css";
import slide1 from "./corousel_photo/1.jpg";
import slide2 from "./corousel_photo/2.jpg";
import slide3 from "./corousel_photo/3.jpg";
import slide4 from "./corousel_photo/4.jpg";
import slide5 from "./corousel_photo/5.jpg";
import slide6 from "./corousel_photo/6.jpg";

function corousel() {
    return (
        // <div style={{marginTop:"-20px"}}>
        //     <header id="head">
        //         <div class="container  "  >
        //             <div class="fluid_container">
        //                 <div class="camera_wrap camera_emboss pattern_1" id="camera_wrap_4">
                            
        //                     <div  data-src="https://images.unsplash.com/photo-1587271636175-90d58cdad458?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80">
        //                     </div>
        //                     <div data-src="https://images.unsplash.com/photo-1583878545126-2f1ca0142714?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80">
                                
        //                     </div>
        //                     <div data-src="https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80">
        //                     </div>
        //                     <div data-src=" https://images.unsplash.com/flagged/photo-1572534779127-b64758946728?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80">
        //                     </div>
        //                     <div data-src=" https://images.unsplash.com/photo-1555244162-803834f70033?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80">
        //                     </div>
                            
                           
        //                 </div>
        //             </div>
        //         </div>
        //     </header>
        // </div>
        <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators ">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
    <li data-target="#demo" data-slide-to="4"></li>
    <li data-target="#demo" data-slide-to="5"></li>
   
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={slide1}/>
      <div class="carousel-caption">
        <h3>Los Angeles</h3>
        <p>We had such a great time in LA!</p>
      </div>   
    </div>
    <div class="carousel-item">
    <img src={slide2}/>
      <div class="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>   
    </div>
    <div class="carousel-item">
    <img src={slide3}/>
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src={slide4}/>
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src={slide5}/>
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src={slide6}/>
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>
   
  </div>
 
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                    <i class="fa fa-chevron-left"></i>
                                </a>
                                <a class="carousel-control-next" href="#demo" data-slide="next">
                                    <i class="fa fa-chevron-right"></i>
                                </a>
</div>

    )
}

export default corousel
