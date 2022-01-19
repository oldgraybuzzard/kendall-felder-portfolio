import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { send } from 'emailjs-com';

import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
    const [pages] = useState([
        { name: "about me" },
        { name: "portfolio" },
        { name: "contact" },
        { name: "resume" }
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <div>
            <Header>
                <Nav
                    pages={pages}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Nav>
            </Header>
            <main>
                <Page currentPage={currentPage}></Page>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;