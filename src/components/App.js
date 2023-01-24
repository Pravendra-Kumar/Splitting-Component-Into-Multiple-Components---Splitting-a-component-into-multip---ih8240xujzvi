import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
    return (
        <div className="container">
            <Header id = "my-header" content = "Header"/>
            <Main  id = "my-main" content  = "Main"/>
            <Footer id = "my-footer" content = "Footer"/>
           
        </div>
    );
}

export default App;
