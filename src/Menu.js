import React from 'react';
import "./Menu.css";
import { Link } from "react-router-dom";
import Corousel from './corousel'
// import Upload from "./Upload/main"
function Menu() {


    return (
        <div>


            <Corousel />
            <div class="container rd">
                <div class="row">
                    <aside class="col-md-4 ">

                        <div class="card">
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                                        <i class="icon-control fa fa-chevron-down"></i>
                                        <h4 class="title">List of cities</h4>
                                    </a>
                                </header>
                                <div class="filter-content collapse show" id="collapse_1">
                                    <div class="card-body">
                                        <form class="pb-3">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Search" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
                                                </div>
                                            </div>
                                        </form>

                                        <ul class="list-menu">
                                            <li className=" box_back"><a href="#">Pune  </a></li>
                                            <li className=" box_back"><a href="#">Mumbai </a></li>
                                            <li className=" box_back"><a href="#">Thane  </a></li>
                                            <li className=" box_back"><a href="#">Ahmednagar  </a></li>
                                            <li className=" box_back"><a href="#">Bhusawal </a></li>
                                            <li className=" box_back"><a href="#">Satara</a></li>
                                            <li className=" box_back"><a href="#">Aurangabad </a></li>
                                        </ul>

                                    </div>
                                </div>
                            </article>
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" class="">
                                        <i class="icon-control fa fa-chevron-down"></i>
                                        <h4 class="title">Cities </h4>
                                    </a>
                                </header>
                                <div class="filter-content collapse show" id="collapse_2">
                                    <div class="card-body">
                                        <label class="custom-control custom-checkbox ">
                                            <input type="checkbox" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Pune
				  	<b class="badge badge-pill badge-light float-right">120</b>  </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Mumbai
				  	<b class="badge badge-pill badge-light float-right">15</b>  </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Thane
				  	<b class="badge badge-pill badge-light float-right">35</b> </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Ahmednagar
				  	<b class="badge badge-pill badge-light float-right">89</b> </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Satara
				  	<b class="badge badge-pill badge-light float-right">30</b>  </div>
                                        </label>
                                    </div>
                                </div>
                            </article>
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
                                        <i class="icon-control fa fa-chevron-down"></i>
                                        <h4 class="title">Price range </h4>
                                    </a>
                                </header>
                                <div class="filter-content collapse show" id="collapse_3">
                                    <div class="card-body">
                                        <input type="range" class="custom-range" min="0" max="100" name="" />
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Min</label>
                                                <input class="form-control" placeholder="$0" type="number" />
                                            </div>
                                            <div class="form-group text-right col-md-6">
                                                <label>Max</label>
                                                <input class="form-control" placeholder="$1,0000" type="number" />
                                            </div>
                                        </div>
                                        <button class="btn btn-block btn-primary">Apply</button>
                                    </div>
                                </div>
                            </article>
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" class="">
                                        <i class="icon-control fa fa-chevron-down"></i>
                                        <h4 class="title">Rating  </h4>
                                    </a>
                                </header>
                                <div class="filter-content collapse show" id="collapse_4">
                                    <div class="card-body">
                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light ml-2"> <i class="fa fa-star" aria-hidden="true"></i>
                                            </span>
                                        </label>

                                        <label class="checkbox-btn ml-3">
                                            <input type="checkbox" />
                                            <span class="btn btn-light ml-2">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>  </span>
                                        </label>

                                        <label class="checkbox-btn ml-3">
                                            <input type="checkbox" />
                                            <span class="btn btn-light ml-2"> <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i> </span>
                                        </label>

                                        <label class="checkbox-btn ml-3">
                                            <input type="checkbox" />
                                            <span class="btn btn-light ml-2">
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                <i class="fa fa-star" aria-hidden="true"></i></span>
                                        </label>
                                    </div>
                                </div>
                            </article>
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" class="">
                                        <i class="icon-control fa fa-chevron-down"></i>
                                        <h4 class="title">More filter </h4>
                                    </a>
                                </header>
                                <div class="filter-content collapse in" id="collapse_5">
                                    <div class="card-body">
                                        <label class="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Any condition</div>
                                        </label>

                                        <label class="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                            <div class="custom-control-label">Brand new </div>
                                        </label>

                                        <label class="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                            <div class="custom-control-label">Used items</div>
                                        </label>

                                        <label class="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                            <div class="custom-control-label">Very old</div>
                                        </label>
                                    </div>
                                </div>
                            </article>
                        </div>

                    </aside>
                    <main class="col-md-8 ">

                        <header class="border-bottom   mb-5 pb-3">
                            <div class="form-inline">
                                <span class="mr-md-auto">32 Profile found </span>
                                <select class="mr-2 form-control">
                                    <option>Latest items</option>
                                    <option>Trending</option>
                                    <option>Most Popular</option>
                                    <option>Cheapest</option>
                                </select>
                                <div class="btn-group">
                                    <a href="#" class="btn btn-outline-secondary" data-toggle="tooltip" title="" data-original-title="List view">
                                        <i class="fa fa-bars"></i></a>
                                    <a href="#" class="btn  btn-outline-secondary active" data-toggle="tooltip" title="" data-original-title="Grid view">
                                        <i class="fa fa-th"></i></a>
                                </div>
                            </div>
                        </header>

                        <div class="row">
                            <div class="col-md-4  ">
                                <figure class="card card-product-grid box_back">
                                    <div class="img-wrap">

                                        <img src="https://image.wedmegood.com/resized/1000X/uploads/vendor_cover_pic/23893/81cfc33c-cf1f-4222-8782-24485dcb6598.png" class="img-fluid" />
                                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                    </div>
                                    <figcaption class="info-wrap">
                                        <div class="fix-height">
                                            <h4>Frozen Memories</h4>
                                            <h6>South Mumbai</h6>
                                            <div class="price-wrap mt-2">
                                                <span class="price">Rs.111280 per day</span>
                                            </div>
                                        </div>
                                       
                                        <Link to ="/Profile">
                                            <a href="#" class="btn btn-block btn-primary">View </a>
                                        </Link>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="col-md-4">
                                <figure class="card card-product-grid  box_back">
                                    <div class="img-wrap">
                                        <img src="https://image.wedmegood.com/resized/1000X/uploads/vendor_cover_pic/23893/81cfc33c-cf1f-4222-8782-24485dcb6598.png" class="img-fluid" />
                                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                    </div>
                                    <figcaption class="info-wrap">
                                        <div class="fix-height">
                                            <h4>Frozen Memories</h4>
                                            <h6>South Mumbai</h6>
                                            <div class="price-wrap mt-2">
                                                <span class="price">Rs.111280 per day</span>
                                            </div>
                                        </div>
                                        <Link to ="/Profile">
                                            <a href="#" class="btn btn-block btn-primary">View </a>
                                        </Link>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="col-md-4">
                                <figure class="card card-product-grid  box_back">
                                    <div class="img-wrap">
                                        <img src="https://image.wedmegood.com/resized/1000X/uploads/vendor_cover_pic/23893/81cfc33c-cf1f-4222-8782-24485dcb6598.png" class="img-fluid" />
                                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                    </div>
                                    <figcaption class="info-wrap">
                                        <div class="fix-height">
                                            <h4>Frozen Memories</h4>
                                            <h6>South Mumbai</h6>
                                            <div class="price-wrap mt-2">
                                                <span class="price">Rs.111280 per day</span>
                                            </div>
                                        </div>
                                        <a href="#" class="btn btn-block btn-primary">Book Now </a>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="col-md-4">
                                <figure class="card card-product-grid  box_back">
                                    <div class="img-wrap">
                                        <img src="https://image.wedmegood.com/resized/1000X/uploads/vendor_cover_pic/23893/81cfc33c-cf1f-4222-8782-24485dcb6598.png" class="img-fluid" />
                                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                    </div>
                                    <figcaption class="info-wrap">
                                        <div class="fix-height">
                                            <h4>Frozen Memories</h4>
                                            <h6>South Mumbai</h6>
                                            <div class="price-wrap mt-2">
                                                <span class="price">Rs.111280 per day</span>
                                            </div>
                                        </div>
                                        <Link to ="/Profile">
                                            <a href="#" class="btn btn-block btn-primary">View </a>
                                        </Link>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="col-md-4">
                                <figure class="card card-product-grid  box_back" >
                                    <div class="img-wrap">
                                        <img src="https://image.wedmegood.com/resized/1000X/uploads/vendor_cover_pic/23893/81cfc33c-cf1f-4222-8782-24485dcb6598.png" class="img-fluid" />
                                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                    </div>
                                    <figcaption class="info-wrap">
                                        <div class="fix-height">
                                            <h4>Frozen Memories</h4>
                                            <h6>South Mumbai</h6>
                                            <div class="price-wrap mt-2">
                                                <span class="price">Rs.111280 per day</span>
                                            </div>
                                        </div>
                                        <a href="#" class="btn btn-block btn-primary">Book Now </a>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="col-md-4">
                                <figure class="card card-product-grid  box_back">
                                    <div class="img-wrap">
                                        <img src="https://image.wedmegood.com/resized/1000X/uploads/vendor_cover_pic/23893/81cfc33c-cf1f-4222-8782-24485dcb6598.png" class="img-fluid" />
                                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                    </div>
                                    <figcaption class="info-wrap">
                                        <div class="fix-height">
                                            <h4>Frozen Memories</h4>
                                            <h6>South Mumbai</h6>
                                            <div class="price-wrap mt-2">
                                                <span class="price">Rs.111280 per day</span>
                                            </div>
                                        </div>
                                        <a href="#" class="btn btn-block btn-primary">Book Now </a>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="col-md-4">
                                <figure class="card card-product-grid  box_back">
                                    <div class="img-wrap">
                                        <img src="https://image.wedmegood.com/resized/1000X/uploads/vendor_cover_pic/23893/81cfc33c-cf1f-4222-8782-24485dcb6598.png" class="img-fluid" />
                                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                                    </div>
                                    <figcaption class="info-wrap">
                                        <div class="fix-height">
                                            <h4>Frozen Memories</h4>
                                            <h6>South Mumbai</h6>
                                            <div class="price-wrap mt-2">
                                                <span class="price">Rs.111280 per day</span>
                                            </div>
                                        </div>
                                        <a href="#" class="btn btn-block btn-primary">Book Now </a>
                                    </figcaption>
                                </figure>
                            </div>

                            <div class="col-md-4">
                                <figure class="card card-product-grid  box_back">
                                    <div class="img-wrap">
                                        <img src="https://image.wedmegood.com/resized/1000X/uploads/vendor_cover_pic/23893/81cfc33c-cf1f-4222-8782-24485dcb6598.png" class="img-fluid" />

                                    </div>
                                    <figcaption class="info-wrap">
                                        <div class="fix-height">
                                            <h4>Frozen Memories</h4>
                                            <h6>South Mumbai</h6>
                                            <div class="price-wrap mt-2">
                                                <span class="price">Rs.111280 per day</span>
                                            </div>
                                        </div>
                                        <a href="#" class="btn btn-block btn-primary">Book Now </a>
                                    </figcaption>
                                </figure>
                            </div>

                        </div>

                        <nav class="mt-4" aria-label="Page navigation sample">
                            <ul class="pagination">
                                <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>

                    </main>

                </div>
            </div>


            {/* <section className="multi_step_form">  
        <form id="msform"> 
         
          <div className="tittle">
            <h2>Verification Process</h2>
            <p>In order to use this service, you have to complete this verification process</p>
          </div>
       
          <ul id="progressbar">
            <li className="active">Verify Phone</li>  
            <li>Upload Documents</li> 
            <li>Security Questions</li>
          </ul>
         
          <fieldset>
            <h3>Setup your phone</h3>
            <h6>We will send you a SMS. Input the code to verify.</h6> 
            <div className="form-row"> 
              <div className="form-group col-md-6">  
                <input type="tel" id="phone" className="form-control" placeholder={+880} /> 
              </div>  
              <div className="form-group col-md-6"> 
                <input type="text" className="form-control" placeholder={+8801123456789} />
              </div> 
            </div> 
            <div className="done_text"> 
              <a href="#" className="don_icon"><i className="ion-android-done" /></a> 
              <h6>A secret code is sent to your phone. <br />Please enter it here.</h6> 
            </div>  
            <div className="code_group"> 
              <input type="text" className="form-control" placeholder={0} />
              <input type="text" className="form-control" placeholder={0} />
              <input type="text" className="form-control" placeholder={0} />
              <input type="text" className="form-control" placeholder={0} />
            </div>  
            <button type="button" className="action-button previous_button">Back</button>
            <button type="button" className="next action-button">Continue</button>  
          </fieldset>
          <fieldset>
            <h3>Verify Your Identity</h3>
            <h6>Please upload any of these documents to verify your Identity.</h6>
            <div className="passport">
              <h4>Govt. ID card <br />PassPort <br />Driving License.</h4> 
              <a href="#" className="don_icon"><i className="ion-android-done" /></a> 
            </div>
            <div className="input-group"> 
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="upload" />
                <label className="custom-file-label" htmlFor="upload"><i className="ion-android-cloud-outline" />Choose file</label>
              </div>
            </div>
            <ul className="file_added">
              <li>File Added:</li>
              <li><a href="#"><i className="ion-paperclip" />national_id_card.png</a></li>
              <li><a href="#"><i className="ion-paperclip" />national_id_card_back.png</a></li>
            </ul>
            <button type="button" className="action-button previous previous_button">Back</button>
            <button type="button" className="next action-button">Continue</button>  
          </fieldset>  
          <fieldset>
            <h3>Create Security Questions</h3>
            <h6>Please update your account with security questions</h6> 
            <div className="form-group"> 
              <select className="product_select">
                <option data-display="1. Choose A Question">1. Choose A Question</option> 
                <option>2. Choose A Question</option>
                <option>3. Choose A Question</option> 
              </select>
            </div> 
            <div className="form-group fg_2"> 
              <input type="text" className="form-control" placeholder="Anwser here:" />
            </div> 
            <div className="form-group"> 
              <select className="product_select">
                <option data-display="1. Choose A Question">1. Choose A Question</option> 
                <option>2. Choose A Question</option>
                <option>3. Choose A Question</option> 
              </select>
            </div> 
            <div className="form-group fg_3"> 
              <input type="text" className="form-control" placeholder="Anwser here:" />
            </div> 
            <button type="button" className="action-button previous previous_button">Back</button> 
            <a href="#" className="action-button">Finish</a> 
          </fieldset>  
        </form>  
      </section>

      <div id="mock-up"></div> */}


        </div>
    )
}

export default Menu
