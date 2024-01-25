import { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(email, password);
    };

    return (
        <div>
            <form action="">

                <label htmlFor="">
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>

                <label htmlFor="">
                    <span>Password</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};