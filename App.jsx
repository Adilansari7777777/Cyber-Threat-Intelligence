import React, { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
    const [user, setUser] = useState(null);

    return (
        <>
            {!user ? <Login setUser={setUser} /> : <Dashboard user={user} />}
        </>
    );
}

export default App;
