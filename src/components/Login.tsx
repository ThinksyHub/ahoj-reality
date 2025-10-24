import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input.tsx"; // or your UI components

interface Props {
    onLogin: () => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        // hardcoded credentials
        if (username === "postmaster@ahojreality.sk" && password === "123456") {
            localStorage.setItem("isAdmin", "true"); // store login state locally
            onLogin();
        } else {
            setError("Nesprávne meno alebo heslo");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="p-8 border rounded-lg bg-white shadow-md w-96">
                <h1 className="text-xl font-bold mb-4">Admin Login</h1>
                <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mb-4"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4"
                />
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <Button className="w-full" onClick={handleLogin}>
                    Prihlásiť sa
                </Button>
            </div>
        </div>
    );
};

export default Login;
