import React from 'react'
import "./Profile.css"
function Profile() {
    return (
        <div className="main">
            
  
  
  <div className="main1 main-raised">
    <div className="profile-content">
      <div className="container ">
        <div className="row">
          <div className="col-md-3 col-6 ml-auto mr-auto mt-5">
            <div className="profile">
              <div className="avatar">
                <img src="https://images.unsplash.com/photo-1509145844239-0d160c78a06a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1834&q=80" alt="Circle Image" className="img-raised rounded-circle img-fluid" />
                <h3 className="title   ">Jatin Udasi</h3>
              </div>
             
            </div>
          </div>
        </div>
        <div className="description text-center">
          <p>35mm Candids captures the most precious memories of your life. On your big day, emotions, personalities, and sentiments will shine through – creating memories that will last a lifetime. They take pride in their passion to preserve your memories. They are experts in candid as well as traditional photography. Operating from Mumbai, they provide about 500 edited pictures to their clients. Having about 4 years of experience, they are open to travel all over India. They Claim, "We are a young, creative team, making your functions memorable; be it an engagement /mehendi & sangeet, wedding, reception, cocktail party, music concerts, and other related functions. Services Offered: Candid Photography Wedding Films Traditional Photography Pre-Wedding Shoots Albums Maternity Shoots Pre-wedding Films </p>
        </div>
        <div className="row">
          <div className="col-md-6 ml-auto mt-5 mr-auto">
            <div className="profile-tabs">
              <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" href="#studio" role="tab" data-toggle="tab">
                    <i className="material-icons">camera</i>
                    Photo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#works" role="tab" data-toggle="tab">
                  <i class="fa fa-video-camera" aria-hidden="true"></i>
                    Video
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#favorite" role="tab" data-toggle="tab">
                    <i className="material-icons">favorite</i>
                    Favorite
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content tab-space ">
          <div className="tab-pane active text-center gallery" id="studio">
            <div className="row">
              <div className="col-md-4 mt-5 ml-auto">
                <img src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80" className="rounded" />
                <img src="https://images.unsplash.com/photo-1528249227670-9ba48616014f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66b8e7db17b83084f16fdeadfc93b95b&auto=format&fit=crop&w=357&q=80" className="rounded" />
              </div>
              <div className="col-md-4  mt-5 mr-auto">
                <img src="https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=72da2f550f8cbd0ec252ad6fb89c96b2&auto=format&fit=crop&w=334&q=80" className="rounded" />
                <img src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80" className="rounded" />
              </div>
            </div>
          </div>
          <div className="tab-pane text-center gallery" id="works">
            <div className="row">
              <div className="col-md-4 mt-5 ml-auto">
                <img src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80" className="rounded" />
                <img src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80" className="rounded" />
                <img src="https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec2bdc92a9687b6af5089b335691830e&auto=format&fit=crop&w=750&q=80" className="rounded" />  					</div>
              <div className="col-md-4  mt-5 mr-auto">
                <img  src="https://images.unsplash.com/photo-1504346466600-714572c4b726?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6754ded479383b7e3144de310fa88277&auto=format&fit=crop&w=750&q=80" className="rounded" />
                <img src="https://images.unsplash.com/photo-1494028698538-2cd52a400b17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83bf0e71786922a80c420c17b664a1f5&auto=format&fit=crop&w=334&q=80" className="rounded" />
              </div>
            </div>
          </div>
          <div className="tab-pane text-center gallery " id="favorite">
            <div className="row">
              <div className="col-md-4 mt-5 ml-auto">
                <img src="https://images.unsplash.com/photo-1504346466600-714572c4b726?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6754ded479383b7e3144de310fa88277&auto=format&fit=crop&w=750&q=80" className="rounded" />
                <img src="https://images.unsplash.com/photo-1494028698538-2cd52a400b17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83bf0e71786922a80c420c17b664a1f5&auto=format&fit=crop&w=334&q=80" className="rounded" />
              </div>
              <div className="col-md-4 mt-5 mr-auto">
                <img src="https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec2bdc92a9687b6af5089b335691830e&auto=format&fit=crop&w=750&q=80" className="rounded" />  					
                <img src="https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83079913579babb9d2c94a5941b2e69d&auto=format&fit=crop&w=751&q=80" className="rounded" />
                <img src="https://images.unsplash.com/photo-1506667527953-22eca67dd919?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6326214b7ce18d74dde5e88db4a12dd5&auto=format&fit=crop&w=750&q=80" className="rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


        </div>
    )
}

export default Profile
