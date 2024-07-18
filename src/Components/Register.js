import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { BaseUrl } from "../consistents";

function Register(props) {
    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const navigate = useNavigate();

    function usernameHandler(e) {
        setUsername(e.target.value);
    }

    function emailHandler(e) {
        setEmail(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function confirmPasswordHandler(e) {
        setConfirmPassword(e.target.value);
    }

    function register() {
        if (password !== confirmPassword) {
            setRegisterStatus("Passwords do not match!");
            return;
        }

        let data = JSON.stringify({
            "username": username,
            "email": email,
            "password": password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl+ 'chat/register/',
            headers: {
                'Authorization': 'token d3e8f543f7ac7c114c62b9cf91952119c6e12d15', 
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setRegisterStatus("Registration Successful!");
                navigate('/login'); // Redirect to login page after successful registration
            })
            .catch((error) => {
                console.log(error);
                setUsername("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setRegisterStatus("Registration failed!");
            });
    }

    return (
        <div>
            <h1>Register page</h1>
            <p>Username <input id={"username"} type={'text'} onChange={usernameHandler} value={username}/></p>
            <p>Email <input id={"email"} type={'email'} onChange={emailHandler} value={email}/></p>
            <p>Password <input id={"password"} type={'password'} onChange={passwordHandler} value={password}/></p>
            <p>Confirm Password <input id={"confirmPassword"} type={'password'} onChange={confirmPasswordHandler} value={confirmPassword}/></p>
            <p>
                <button id={"registerbtn"} onClick={register}>Register</button>
            </p>
            <p id={'register_status'}>{registerStatus}</p>
        </div>
    );
}

export default Register;