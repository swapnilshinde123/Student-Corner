import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom";
import Corousel from './corousel'
function Home() {


    return (
        <div>
            <Corousel />


            <div class="container mt-5 pt-5 ">
	<div class="row">
		<div class="MultiCarousel col-md-12 " data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
            <div class="MultiCarousel-inner">
                <div class="item">
                    <div class="pad15">
                    <img alt=".." src="https://o.remove.bg/downloads/6947a1dc-21ab-4cd5-a5be-eca0f47f2048/161_Gateway_of_India_1000_0001-removebg-preview.png"/>
                    <p>Mumbai</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                       <img alt="." src="https://o.remove.bg/downloads/043b76c7-01b4-4509-8f0d-97dbc576bd49/charminar-hyderabad-india-vector-india-indian-sketch-vector-illustration-vector-illustration-architecture-building-famous-monument-134356536__1___1_-removebg-preview.png"/>
                       <p>Hyberabad </p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                       <img alt="" className="mt-5" src="https://o.remove.bg/downloads/9b61a839-00ce-441f-aa44-456e811f8eb2/360_F_314737196_Rm6Eefk1GYY48WXLCMljTkzDHanFWTZo-removebg-preview.png"/>
                       <p className="mt-4">Pune</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img alt="."  className="mt-3"src="https://o.remove.bg/downloads/23c6570c-a2d5-4c5f-b177-dd987ac5e7be/chennai-central-illustration-by-khuzema-on-dribbble-chennai-central-png-800_600-removebg-preview.png"/>
                    <p className="mt-4">chennai </p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                      <img alt="." src="https://o.remove.bg/downloads/f26aa235-5a94-4ab1-b99f-b67fdb7760f8/151_India_Gate_1000_0001-removebg-preview.png"/>
                      <p>Delhi</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                       <img className="mt-4" alt="" src="https://o.remove.bg/downloads/1ed43c11-ec72-44ef-9ca5-bc2e350d336d/6ee1d4491b2d0ebc680608df81ed59eb-removebg-preview__1_-removebg-preview.png"/>
                       <p className="mt-3"> kolkata</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img alt=".." src="https://o.remove.bg/downloads/6947a1dc-21ab-4cd5-a5be-eca0f47f2048/161_Gateway_of_India_1000_0001-removebg-preview.png"/>
                    <p>Mumbai</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                       <img alt="." src="https://o.remove.bg/downloads/043b76c7-01b4-4509-8f0d-97dbc576bd49/charminar-hyderabad-india-vector-india-indian-sketch-vector-illustration-vector-illustration-architecture-building-famous-monument-134356536__1___1_-removebg-preview.png"/>
                       <p>Hyberabad </p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                       <img alt="" className="mt-5" src="https://o.remove.bg/downloads/9b61a839-00ce-441f-aa44-456e811f8eb2/360_F_314737196_Rm6Eefk1GYY48WXLCMljTkzDHanFWTZo-removebg-preview.png"/>
                       <p className="mt-4">Pune</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <img alt="."  className="mt-3"src="https://o.remove.bg/downloads/23c6570c-a2d5-4c5f-b177-dd987ac5e7be/chennai-central-illustration-by-khuzema-on-dribbble-chennai-central-png-800_600-removebg-preview.png"/>
                    <p className="mt-4">chennai </p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                      <img alt="." src="https://o.remove.bg/downloads/f26aa235-5a94-4ab1-b99f-b67fdb7760f8/151_India_Gate_1000_0001-removebg-preview.png"/>
                      <p>Delhi</p>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                       <img className="mt-4" alt="" src="https://o.remove.bg/downloads/1ed43c11-ec72-44ef-9ca5-bc2e350d336d/6ee1d4491b2d0ebc680608df81ed59eb-removebg-preview__1_-removebg-preview.png"/>
                       <p className="mt-3"> kolkata</p>
                    </div>
                </div>
            </div>
            <button class="fa fa-chevron-left btn btn-primary leftLst"></button>
            <button class="btn btn-primary fa fa-chevron-right rightLst"></button>
           
        </div>
	</div>

</div>
            <div className="App">






                <section class="news-box top-margin kp ">
                    <div class="container event">
                        <h2><span>Wedding <b>Activities</b></span></h2>
                        <div class="row">

                            <div class="col-lg-2 col-md-2 col-sm-12">
                                <div class="newsBox  border_img">
                                    <div class="portfolio-item">
                                        <img src="https://o.remove.bg/downloads/9d0d2633-de94-4ff0-ba9d-1a86a0244ac9/technical-removebg-preview.png" alt="" />
                                        <div class="portfolio-desc align-center">
                                            <div class="folio-info">
                                                <a >
                                                    <Link to="/Menu">
                                                        <h5>Wedding</h5>
                                                    </Link>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                            <div class="col-lg-2 col-md-2 col-sm-12">
                                <div class="newsBox  border_img">
                                    <div class="portfolio-item">
                                        <img src="https://o.remove.bg/downloads/1e8121d8-ae19-4499-99dc-6bb98ffe46d3/6714408_preview-removebg-preview.png" alt="" />
                                        <div class="portfolio-desc align-center">
                                            <div class="folio-info">
                                                <a >
                                                    <Link to="/Menu">
                                                        <h5>Wedding</h5>
                                                    </Link>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                            
                            
                            <div class="col-lg-2 col-md-2 col-sm-12">
                                <div class="newsBox  border_img">
                                    <div class="thumbnail ">
                                        <figure><img src="https://o.remove.bg/downloads/31da33bd-bd1d-4db9-abea-a04744db8d52/310-3108154_web-assets-button-coding-icon-removebg-preview.png" alt="" /></figure>
                                        <div class="portfolio-desc align-center">
                                           
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="newsBox  border_img">
                                    <div class="thumbnail">
                                        <figure><img src="https://images.unsplash.com/photo-1505281146541-4001d2fe6fcf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80" alt="" /></figure>
                                        <div class="caption maxheight2">
                                            <div class="box_inner">
                                                <div class="box">
                                                    <p class="title"><strong>Business Party </strong></p>

                                                </div>
                                                {/* <div>
                                            <a href="#" class="btn-inline">more</a>
                                        </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="newsBox  border_img">
                                    <div class="portfolio-item">
                                        <img src="https://images.unsplash.com/photo-1505281146541-4001d2fe6fcf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80" alt="" />
                                        <div class="portfolio-desc align-center">
                                            <div class="folio-info">
                                                <a >
                                                    <h5>Business Party</h5>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="newsBox  border_img">
                                    <div class="thumbnail">
                                        <figure><img src="https://images.unsplash.com/photo-1505281146541-4001d2fe6fcf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80" alt="" /></figure>
                                        <div class="caption maxheight2">
                                            <div class="box_inner">
                                            <Link to="/Menu">
                                                        <h5>Wedding</h5>
                                                    </Link>
                                                {/* <div>
                                            <a href="#" class="btn-inline">more</a>
                                        </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <div class="col-lg-4 col-md-4 col-sm-12 pk">
                  
            </div>
              
            <div class="col-lg-4 col-md-4 col-sm-12  pm">
          
           


</div> */}



                <div class="container-xl">
                    <div class="row">
                        <div class="col-lg-12 col-md-9  mx-auto">
                            <h2><span>Wedding <b>Mackup</b></span></h2>
                            <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">

                                <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    <li data-target="#myCarousel" data-slide-to="3"></li>
                                </ol>

                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-sm-3"><div class="img-box "><img src="https://www.khoobsurat.in/uploaded-files/article-images/Hire-the-best-wedding-makeup-artist-despite-the-bridal-makeup-cost-in-Delhi06_30_52.jpg" class="img-fluid" alt="" /></div></div>
                                            <div class="col-sm-3"><div class="img-box"><img src="https://www.khoobsurat.in/uploaded-files/article-images/Hire-the-best-wedding-makeup-artist-despite-the-bridal-makeup-cost-in-Delhi06_30_52.jpg" class="img-fluid" alt="" /></div></div>
                                            <div class="col-sm-3"><div class="img-box"><img src="https://www.khoobsurat.in/uploaded-files/article-images/Hire-the-best-wedding-makeup-artist-despite-the-bridal-makeup-cost-in-Delhi06_30_52.jpg" class="img-fluid" alt="" /></div></div>
                                            <div class="col-sm-3"><div class="img-box"><img src="https://www.khoobsurat.in/uploaded-files/article-images/Hire-the-best-wedding-makeup-artist-despite-the-bridal-makeup-cost-in-Delhi06_30_52.jpg" class="img-fluid" alt="" /></div></div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-sm-3"><div class="img-box"><img src="https://www.khoobsurat.in/uploaded-files/article-images/Hire-the-best-wedding-makeup-artist-despite-the-bridal-makeup-cost-in-Delhi06_30_52.jpg" class="img-fluid" alt="" /></div></div>
                                            <div class="col-sm-3"><div class="img-box"><img src="https://www.khoobsurat.in/uploaded-files/article-images/Hire-the-best-wedding-makeup-artist-despite-the-bridal-makeup-cost-in-Delhi06_30_52.jpg" class="img-fluid" alt="" /></div></div>
                                            <div class="col-sm-3"><div class="img-box"><img src="https://www.khoobsurat.in/uploaded-files/article-images/Hire-the-best-wedding-makeup-artist-despite-the-bridal-makeup-cost-in-Delhi06_30_52.jpg" class="img-fluid" alt="" /></div></div>
                                            <div class="col-sm-3"><div class="img-box"><img src="https://www.khoobsurat.in/uploaded-files/article-images/Hire-the-best-wedding-makeup-artist-despite-the-bridal-makeup-cost-in-Delhi06_30_52.jpg" class="img-fluid" alt="" /></div></div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-sm-3"><div class="img-box"><img src="https://www.khoobsurat.in/uploaded-files/article-images/Hire-the-best-wedding-makeup-artist-despite-the-bridal-makeup-cost-in-Delhi06_30_52.jpg" class="img-fluid" alt="" /></div></div>
                                            <div class="col-sm-3"><div class="img-box"><img src="https://www.khoobsurat.in/uploaded-files/article-images/Hire-the-best-wedding-makeup-artist-despite-the-bridal-makeup-cost-in-Delhi06_30_52.jpg" class="img-fluid" alt="" /></div></div>
                                            <div class="col-sm-3"><div class="img-box"><img src="https://www.khoobsurat.in/uploaded-files/article-images/Hire-the-best-wedding-makeup-artist-despite-the-bridal-makeup-cost-in-Delhi06_30_52.jpg" class="img-fluid" alt="" /></div></div>
                                            <div class="col-sm-3"><div class="img-box"><img src="https://www.khoobsurat.in/uploaded-files/article-images/Hire-the-best-wedding-makeup-artist-despite-the-bridal-makeup-cost-in-Delhi06_30_52.jpg" class="img-fluid" alt="" /></div></div>
                                        </div>
                                    </div>

                                </div>

                                <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                    <i class="fa fa-chevron-left"></i>
                                </a>
                                <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                                    <i class="fa fa-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12   pm">

                    <div class="col-lg-5 col-md-11 col-11  pk">

                    </div>
                    <div class="col-lg-5 col-md-11 col-11 pk">

                    </div>
                    <div class="col-lg-5 col-md-4 col-11 pk">

                    </div>
                    <div class="col-lg-5 col-md-11 col-11 pk">

                    </div>
                    <div class="col-lg-5 col-md-11 col-11 pk">

                    </div>
                    <div class="col-lg-5 col-md-11 col-11 pk">

                    </div>




                </div>




            </div>

            

        </div>
    )
}

export default Home


