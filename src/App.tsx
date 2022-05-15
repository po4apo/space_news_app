import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {NewsPage} from "./components/News";
import {AboutPage} from "./components/About";
import {ArticlePage} from "./components/Article";
import {NotFoundPage} from "./components/NotFound";



const App: React.FC = () => {
    return (
        <BrowserRouter>
        <>
            <header className="clearfix">

                <Navbar/>
            </header>

            <div id="main">
                <div className="wrapper">
                    <div className="home-block">

                        <Routes>
                            <Route path = '/space_news_app/' element={<Navigate replace to="/space_news_app/news" />}/>
                            <Route path = '/space_news_app/news' element={<NewsPage />} />
                            <Route path = '/space_news_app/about' element={<AboutPage />} />
                            <Route path = '/space_news_app/news/:id' element={<ArticlePage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>

                    </div>
                </div>
            </div>
        </>
        </BrowserRouter>
    );
}

export default App;
