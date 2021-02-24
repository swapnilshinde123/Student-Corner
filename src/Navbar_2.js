import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "./axios";
import "./Navbar.css";
import { toast } from "react-toastify";
import Logo from "./icon/logo.png"
toast.configure();
function Navbar() {

    const history = useHistory();
    const [data, setData] = useState();
    const [user, setUser] = useState("");
       

    const handleChange_logout =()=>{
  localStorage.clear()
  setUser("")
    }
    const handleChange = (e) => {
        setData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
        console.log(data);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        Axios.post("/signin", data)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", res.data.user.email);
                setUser(res.data.user.email)
                console.log("user", user);
                var btn1 = document.getElementById("spn3")
                var btn2 = document.getElementById("spn4")
                console.log(btn1)
                // btn.classList.toggle('show')
                toast(`Logged in Successfully`, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
                history.push("/");

            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                alert(err.response);
                toast(err.response.data, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: false,
                });
            });

    };
    const [Data1, setData1] = useState({});

    const handleChange_signup = (e) => {
        console.log(e.target);
        setData1((prevstate) => {
            return {
                ...prevstate,
                [e.target.name]: e.target.value,
            };
        });
        console.log(Data1);

    };



    const handleSubmit_signup = (e) => {
        e.preventDefault();
        {
            Axios.post("/signup", Data1)
                .then((res) => {
                    {
                        console.log(res.data);
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("user", res.data.user.name);
                        setUser(res.data.user.email)
                        console.log(user);
                        toast(`Registered Successfully`,
                            {
                                position: toast.POSITION.TOP_CENTER,
                                autoClose: 3000,
                            });
                        history.push("/");
                    }

                })
                .catch((err) => {
                    console.log(err.response)
                    toast(`${err.response.data}`, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: false,
                    });
                });
            setData1("");
        }

    };
    

   

    return (
        <div >
            <nav className=" navbar navbar-expand-lg navbar-light bg-light">
                {/* <a href="#" className="navbar-brand">learn <b>a skill</b></a> */}
               
               
                          
                            <div class="logo1">
                                <a><img style={{width:"14vw"}} src={Logo}alt=""/></a>
                            </div>  
                        
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>

                <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                    <div className="navbar-nav">
                        
                           
                           <Link to="/">
                            <li class="active "><a >Home</a></li>
                           
                           </Link>
                           <Link to="/Profile_create">
                            <li class="active "><a >Profile_create</a></li>
                           </Link>
                           <Link to="/Dashboards">
                            <li class="active "><a >Dashboards</a></li>
                           </Link>
                      
                    </div>

                    <div className="navbar-nav ml-auto action-buttons ">
                        {user ? (<>
                            <a href="#" className=" btn btn-primary login-btn mr-4" onClick={handleChange_logout}>Logout</a>
                            <a href="#" style={{ "textTransform": "lowercase" }} className="  btn btn-primary login-btn mr-4">{user}</a>
                        </>) : (<>

                            <div className="nav-item dropdown mr-4 ">
                                <a href="#" data-toggle="dropdown" className=" btn btn-primary dropdown-toggle login_button  login-btn ">Login</a>
                                <div className="dropdown-menu action-form mt-3 nn" id="spn3">
                                    <form action="/examples/actions/confirmation.php" method="post" onSubmit={handleSubmit}>
                                        <p className="hint-text">Sign in with your social media account</p>
                                        <div className="form-group social-btn clearfix">
                                            <a href="#" className="btn btn-secondary facebook-btn float-left"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
                                            <a href="#" className="btn btn-secondary google-btn float-right"><i className="fa fa-google" /> Google</a>
                                        </div>
                                        <div className="or-seperator"><b>or</b></div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" type="email"
                                                class="form-control"

                                                onChange={handleChange}
                                                name="email" placeholder="Username" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" type="password"
                                                class="form-control"
                                                placeholder="password "
                                                onChange={handleChange}
                                                name="password" required="required" />
                                        </div>
                                        <input type="submit" onChange={handleChange}

                                            value="Login" className="btn btn-primary btn-block" defaultValue="Login" />
                                            <input type="submit" onChange={handleChange}

value="Login2" className="btn btn-primary btn-block" defaultValue="Login" />

                                        <div className="text-center mt-2">
                                            <a href="#">Forgot Your password?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" data-toggle="dropdown" className="btn btn-primary dropdown-toggle  sign-up-btn">Sign up</a>
                                <div className="dropdown-menu action-form mt-3 nn" id="spn3">
                                    <form action="/examples/actions/confirmation.php" method="post" onSubmit={handleSubmit_signup}>
                                        <p className="hint-text">Fill in this form to create your account!</p>
                                        <div className="form-group">
                                            <input type="email" name="email" onChange={handleChange_signup} className="form-control" placeholder="Email" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" onChange={handleChange_signup} className="form-control" placeholder="Password" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" minlength="10"
                                                maxlength="10" name="mobile" onChange={handleChange_signup} className="form-control" placeholder="mobile no" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms &amp; Conditions</a></label>
                                        </div>
                                        <input type="submit" value="Register" className="btn btn-primary btn-block" defaultValue="Sign up" />
                                    </form>
                                </div>
                            </div>
                        </>)}
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar

