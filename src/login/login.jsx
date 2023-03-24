import React from "react";
import './login.css';
import loginImage from '../assets/Login.png';

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-page-item log-item1">
                <img
                    src={loginImage}
                />
            </div>
            <div className="login-page-item log-item2">
                <div className="login-head" style={{'width':'100%'}}>
                    <h1>Login</h1>
                </div>
                <div className="form" style={{'display':'flex', 'flexDirection':'column', 'width':'100%', }}>
                    <div className="form-item">
                        <label for = "email" style={{'marginBottom':'10px'}}>Email</label>
                        <input name="email" placeholder="e.g.. johndoe@gmail.com"/>
                    </div>
                    <div className="form-item">
                        <label for = "password" style={{'marginBottom':'10px'}}>Password</label>
                        <input name="password" type="password" placeholder="mot de passe"/>
                        <button style={{'width':'73%', 'marginTop':'20px'}}>SE CONNECTER</button>
                    </div>
                </div>    
            </div>
        </div>
    )
}
export default Login