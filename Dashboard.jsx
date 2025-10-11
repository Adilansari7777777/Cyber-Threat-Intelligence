import React from "react";

function Dashboard({ user }) {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Welcome, {user}</h1>
            <p className="mt-2">This is your Cyber Threat Intelligence Dashboard.</p>
            {/* Threat lookup & charts can be added here */}
        </div>
    );
}

export default Dashboard;
