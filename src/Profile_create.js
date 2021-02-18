import React from 'react'
import "./Profile_create.css";
function Profile_create() {
    return (
        <div>
                  <div className="container ">
        <div className="row ">
          <section>
            <div className="wizard ">
              <div className="wizard-inner ">
                <div className="connecting-line  " />
                <ul className="nav nav-tabs " role="tablist">
                  <li role="presentation" className="active">
                    <a class="ml-5" href="#step1" data-toggle="tab" aria-controls="step1" role="tab" title="Step 1">
                      <span className="round-tab kk">
                        <i className="glyphicon glyphicon-folder-open" />
                      </span>
                    </a>
                  </li>
                  <li role="presentation" className="disabled">
                    <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" title="Step 2">
                      <span className="round-tab">
                        <i className="glyphicon glyphicon-pencil" />
                      </span>
                    </a>
                  </li>
                  <li role="presentation" className="disabled">
                    <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab" title="Step 3">
                      <span className="round-tab">
                        <i className="glyphicon glyphicon-picture" />
                      </span>
                    </a>
                  </li>
                  <li role="presentation" className="disabled">
                    <a href="#complete" data-toggle="tab" aria-controls="complete" role="tab" title="Complete">
                      <span className="round-tab">
                        <i className="glyphicon glyphicon-ok" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <form role="form col-md-12">
                <div className="tab-content">
                  <div className="tab-pane active" role="tabpanel" id="step1">
                    <div className="step1 ">
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="exampleInputEmail1">First Name</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="exampleInputEmail1">Last Name</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="exampleInputEmail1">Confirm Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="exampleInputEmail1">Mobile Number</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <div className="row">
                            <div className="col-md-3 col-xs-3">
                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div className="col-md-9 col-xs-9">
                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="list-inline pull-right">
                      <li><button type="button" className="btn btn-primary next-step">Save and continue</button></li>
                    </ul>
                  </div>
                  <div className="tab-pane" role="tabpanel" id="step2">
                  <div className="step2">
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="exampleInputEmail1">First Name</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="exampleInputEmail1">Last Name</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="exampleInputEmail1">Confirm Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label htmlFor="exampleInputEmail1">Mobile Number</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <div className="row">
                            <div className="col-md-3 col-xs-3">
                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                            <div className="col-md-9 col-xs-9">
                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="list-inline pull-right">
                      <li><button type="button" className="btn btn-default prev-step">Previous</button></li>
                      <li><button type="button" className="btn btn-primary next-step">Save and continue</button></li>
                    </ul>
                  </div>
                  <div className="tab-pane" role="tabpanel" id="step3">
                    <div className="step3 col-md-6">
                      <h5><strong>Basic Details</strong></h5>
                      <hr />
                      <div className="row mar_ned">
                      </div>
                      <div className="row mar_ned">
                        <div className="col-md-4 col-xs-3">
                          <p align="right"><stong>Date of birth</stong></p>
                        </div>
                        <div className="col-md-8 col-xs-9">
                          <div className="row">
                            <div className="col-md-4 col-xs-4 wdth">
                              <select name="visa_status" id="visa_status" className="dropselectsec1">
                                <option value>Date</option>
                                <option value={2}>1</option>
                                <option value={1}>2</option>
                                <option value={4}>3</option>
                                <option value={5}>4</option>
                                <option value={6}>5</option>
                                <option value={3}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                              </select>
                            </div>
                            <div className="col-md-4 col-xs-4 wdth">
                              <select name="visa_status" id="visa_status" className="dropselectsec1">
                                <option value>Month</option>
                                <option value={2}>Jan</option>
                                <option value={1}>Feb</option>
                                <option value={4}>Mar</option>
                                <option value={5}>Apr</option>
                                <option value={6}>May</option>
                                <option value={3}>June</option>
                                <option value={7}>July</option>
                                <option value={8}>Aug</option>
                                <option value={9}>Sept</option>
                              </select>
                            </div>
                            <div className="col-md-4 col-xs-4 wdth">
                              <select name="visa_status" id="visa_status" className="dropselectsec1">
                                <option value>Year</option>
                                <option value={2}>1990</option>
                                <option value={1}>1991</option>
                                <option value={4}>1992</option>
                                <option value={5}>1993</option>
                                <option value={6}>1994</option>
                                <option value={3}>1995</option>
                                <option value={7}>1996</option>
                                <option value={8}>1997</option>
                                <option value={9}>1998</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mar_ned">
                        <div className="col-md-4 col-xs-3">
                          <p align="right"><stong>Marital Status</stong></p>
                        </div>
                        <div className="col-md-8 col-xs-9">
                          <label className="radio-inline">
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" /> Single
                          </label>
                          <label className="radio-inline">
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" /> Married
                          </label>
                        </div>
                      </div>
                      <div className="row mar_ned">
                        <div className="col-md-4 col-xs-3">
                          <p align="right"><stong>Highest Education</stong></p>
                        </div>
                        <div className="col-md-8 col-xs-9">
                          <select name="highest_qualification" id="highest_qualification" className="dropselectsec">
                            <option value> Select Highest Education</option>
                            <option value={1}>Ph.D</option>
                            <option value={2}>Masters Degree</option>
                            <option value={3}>PG Diploma</option>
                            <option value={4}>Bachelors Degree</option>
                            <option value={5}>Diploma</option>
                            <option value={6}>Intermediate / (10+2)</option>
                            <option value={7}>Secondary</option>
                            <option value={8}>Others</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mar_ned">
                        <div className="col-md-4 col-xs-3">
                          <p align="right"><stong>Specialization</stong></p>
                        </div>
                        <div className="col-md-8 col-xs-9">
                          <input type="text" name="specialization" id="specialization" placeholder="Specialization" className="dropselectsec" autoComplete="off" />
                        </div>
                      </div>
                      <div className="row mar_ned">
                        <div className="col-md-4 col-xs-3">
                          <p align="right"><stong>Year of Passed Out</stong></p>
                        </div>
                        <div className="col-md-8 col-xs-9">
                          <select name="year_of_passedout" id="year_of_passedout" className="birthdrop">
                            <option value>Year</option>
                            <option value={1980}>1980</option>
                            <option value={1981}>1981</option>
                            <option value={1982}>1982</option>
                            <option value={1983}>1983</option>
                            <option value={1984}>1984</option>
                            <option value={1985}>1985</option>
                            <option value={1986}>1986</option>
                            <option value={1987}>1987</option>
                            <option value={1988}>1988</option>
                            <option value={1989}>1989</option>
                            <option value={1990}>1990</option>
                            <option value={1991}>1991</option>
                            <option value={1992}>1992</option>
                            <option value={1993}>1993</option>
                            <option value={1994}>1994</option>
                            <option value={1995}>1995</option>
                            <option value={1996}>1996</option>
                            <option value={1997}>1997</option>
                            <option value={1998}>1998</option>
                            <option value={1999}>1999</option>
                            <option value={2000}>2000</option>
                            <option value={2001}>2001</option>
                            <option value={2002}>2002</option>
                            <option value={2003}>2003</option>
                            <option value={2004}>2004</option>
                            <option value={2005}>2005</option>
                            <option value={2006}>2006</option>
                            <option value={2007}>2007</option>
                            <option value={2008}>2008</option>
                            <option value={2009}>2009</option>
                            <option value={2010}>2010</option>
                            <option value={2011}>2011</option>
                            <option value={2012}>2012</option>
                            <option value={2013}>2013</option>
                            <option value={2014}>2014</option>
                            <option value={2015}>2015</option>
                          </select>
                        </div>
                      </div>
                      <div className="row mar_ned">
                        <div className="col-md-4 col-xs-3">
                          <p align="right"><stong>Total Experience</stong></p>
                        </div>
                        <div className="col-md-8 col-xs-9">
                          <div className="row">
                            <div className="col-md-6 col-xs-6 wdth">
                              <select name="visa_status" id="visa_status" className="dropselectsec1">
                                <option value>Month</option>
                                <option value={2}>Jan</option>
                                <option value={1}>Feb</option>
                                <option value={4}>Mar</option>
                                <option value={5}>Apr</option>
                                <option value={6}>May</option>
                                <option value={3}>June</option>
                                <option value={7}>July</option>
                                <option value={8}>Aug</option>
                                <option value={9}>Sept</option>
                              </select>
                            </div>
                            <div className="col-md-6 col-xs-6 wdth">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mar_ned">
                      </div>
                    </div>
                    <ul className="list-inline pull-right col-md-12">
                      <li><button type="button" className="btn btn-default prev-step">Previous</button></li>
                      <li><button type="button" className="btn btn-default next-step">Skip</button></li>
                      <li><button type="button" className="btn btn-primary btn-info-full next-step">Save and continue</button></li>
                    </ul>
                  </div>
                  <div className="tab-pane" role="tabpanel" id="complete">
                    <div className="step44 col-6">
                      <h5>Completed</h5>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>



        </div>
    )
}

export default Profile_create
