import { useState } from "react";
import { useParams } from "react-router-dom";
import slider from "../../../public/slider-1.jpg"
import { FiLogIn } from "react-icons/fi";
import '../../assets/loginPage.css'
const LoginForm = () => {

  
  const isSeller = useParams()
  const [data, setData] = useState({
    email : "",
    password: ""
  })

  return (
    <section className="login-form" id="login-form">
      <div className="container mx-auto">
          <div className="row">
            <div className="col-md-12 mb-5">
              <h1 className="text-center mt-5">Log In</h1>
              <p className="text-center mt-2">Make Your Experience More Better</p>
            </div>

            <div className="col-md-8 mx-auto ">
                <div className="card shadow border border-0 rounded my-3">
                <img className="loginImage" src= {slider}alt="slider" />
                  <div className="card-body p-5">
                     <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
                    </div>
                     <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Password</label>
                      <input type="password" className="form-control d-inline" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password "/>
                    </div>
                    <div className="mb-3">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" >
                          Seller
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                        <label className="form-check-label" >
                          Buyer
                        </label>
                      </div>
                      <div className="mb-3 my-1" id="forterms">
                      
                      <span><input class="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault"/> terms and conditions</span>
                        </div>
                      <div className="mb-3 mx-auto d-flex gap-2 justify-content-center mt-2 position-relative">
                              <button type="button" className="loginBtn" >Login Now <FiLogIn/></button>
                            <button type="button" className="regisBtn" >Registraion <FiLogIn/></button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default LoginForm;