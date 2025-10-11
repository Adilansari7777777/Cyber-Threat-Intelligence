import React, { useState } from "react";

function Login({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (data.status === "success") setUser(username);
        else alert(data.message);
    };

    const handleRegister = async () => {
        const res = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        alert(data.message);
    };

    return (
        <div className="flex flex-col items-center mt-20">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="border p-2 mb-2"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="border p-2 mb-2"
            />
            <div className="space-x-2">
                <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
                <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 rounded">Register</button>
            </div>
        </div>
    );
}

export default Login;
