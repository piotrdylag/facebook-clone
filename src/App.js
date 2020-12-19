import React from 'react';
import './styles/App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import Login from "./components/Login/Login";

function App() {
    const user = "PiotrDylag";
    return (
        <div className="App">
            {!user ? (
                <Login />
            ): (
                <>+
                <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
                </>
            )}
        </div>
    );
}

export default App;
