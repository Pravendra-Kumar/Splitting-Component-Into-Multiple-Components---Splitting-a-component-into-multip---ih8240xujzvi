import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
    return (
        <div className="container">
            <Header id = "header" content = "Header"/>
            <Main  id = "main" content  = "Main"/>
            <Footer id = "footer" content = "Footer"/>
           
        </div>
    );
}

export default App;
