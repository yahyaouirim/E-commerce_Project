// import React, { useState } from "react";
// import "./CSS/LoginRegister.css";
// import axios from "axios";

// const LoginRegister = () => {
//     const [state, setState] = useState("Login");
//     const [formData, setFormData] = useState({ username: "", email: "", password: "", isadmin: false });

//     const changeHandler = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     }

//     const login = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/login', formData, {
//                 headers: {
//                     'Accept': 'application/form-data',
//                     'Content-Type': 'application/json',
//                 }
//             });
//             const dataObj = response.data;
//             console.log(dataObj);
//             if (dataObj.success) {
//                 localStorage.setItem('auth-token', dataObj.token);
//                 if(formData.isadmin){window.location.replace("/adminpanel/");}
//                 else{ window.location.replace("/");  }      
//             } 
//             else {
//                 alert(dataObj.errors);
//             }
//         } catch (error) {
//             console.error('Error while logging in:', error);
//         }
//     }

//     const register = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/register', formData, {
//                 headers: {
//                     'Accept': 'application/form-data',
//                     'Content-Type': 'application/json',
//                 }
//             });
//             const dataObj = response.data;
//             if (dataObj.success) {
//                 localStorage.setItem('auth-token', dataObj.token);
//                 if(formData.isadmin){window.location.replace("/adminpanel/");}
//                 else{ window.location.replace("/");  }
//             } else {
//                 alert(dataObj.errors);
//             }
//         } catch (error) {
//             console.error('Error while registering:', error);
//         }
//     }

//     return (
//         <div className="loginsignup">
//             <div className="loginsignup-container">
//                 <h1>{state}</h1>
//                 <div className="loginsignup-fields">
//                     {state === "Register" ?
//                      <div>
//                         <input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler} /> 
//                     <input type="checkbox" name="isadmin" value={formData.isadmin} onChange={changeHandler}/>
//                     <label for="isadmin"> Is Admin</label>
//                         </div>: <></>}
//                     <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler} />
//                     <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler} />
                    
//                 </div>

//                 <button onClick={() => { state === "Login" ? login() : register() }}>Continue</button>

//                 {state === "Login" ?
//                     <p className="loginsignup-login">Create an account? <span onClick={() => { setState("Register") }}>Click here</span></p>
//                     : <p className="loginsignup-login">Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p>}

//                 <div className="loginsignup-agree">
//                     <input type="checkbox" name="" id="" />
//                     <p>By continuing, i agree to the terms of use & privacy policy.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginRegister;
 

import React, { useState } from "react";
import axios from "axios";

const LoginRegister = () => {
    const [state, setState] = useState("Login");
    const[username, setUserName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[isadmin, setIsadmin]=useState(false);
      const login = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login',{email,password,isadmin}, {
                headers: {
                    'Accept': 'application/form-data',
                    'Content-Type': 'application/json',
                }
            });
            const dataObj = response.data;
            console.log(dataObj);
            if (dataObj.success) {
                localStorage.setItem('auth-token', dataObj.token);
                if(isadmin){window.location.replace("/adminpanel/");}
                else{ window.location.replace("/");  }      
            } 
            else {
                alert(dataObj.errors);
            }
        } catch (error) {
            console.error('Error while logging in:', error);
        }
    }

    const register = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/register',{username,email,password,isadmin} , {
                headers: {
                    'Accept': 'application/form-data',
                    'Content-Type': 'application/json',
                }
            });
            const dataObj = response.data;
            console.log(dataObj);

            if (dataObj.success) {
                console.log(dataObj);
                localStorage.setItem('auth-token', dataObj.token);
                if(isadmin){window.location.replace("/adminpanel/");}
                else{ window.location.replace("/");  }
            } else {
                alert(dataObj.errors);
            }
        } catch (error) {
            console.error('Error while registering:', error);
        }
    }

    return (
        <div>
            <form className="container border rounded-5 p-4 shadow-lg m-5 w-50 bg-white mx-auto">
                <h1>{state}</h1>
                    {state === "Register" &&
                        <div className="form-group">
                            <input type="text" placeholder="Your name" className="form-control w-100 p-2" name="username" value={username} onChange={e => { setUserName(e.target.value) }} /> 
                           
                        </div>
                    }
                    <div className="form-group mt-3">
                    <input type="email" placeholder="Email address" className="form-control w-100 p-2" name="email" value={email} onChange={e => { setEmail(e.target.value) }} />

                    </div>
                    <div className="form-group mt-3">
                    <input type="password" placeholder="Password" className="form-control w-100 p-2" name="password" value={password} onChange={e => { setPassword(e.target.value) }} />

                    </div>
                    <div className="form-group mt-3">
                    <input type="checkbox" name="isadmin" value={isadmin} onChange={e =>{setIsadmin(e.target.checked)}}/> <label htmlFor="isadmin"> Is Admin</label>

                    </div>

                <button type="button" className="btn btn-primary w-100 p-2 mt-3" onClick={() => { state === "Login" ? login() : register() }}>Continue</button>

                {state === "Login" ?
                    <p className="loginsignup-login">Create an account? <span className="text-danger" onClick={() => { setState("Register") }}>Click here</span></p>
                    : <p className="loginsignup-login">Already have an account? <span className="text-danger" onClick={() => { setState("Login") }}>Login here</span></p>
                }

                <div className="form-group">
                    <input type="checkbox" name="" id="" />
                    <label>By continuing, I agree to the terms of use & privacy policy.</label>
                </div>
            </form>
        </div>
    );
};

export default LoginRegister;
