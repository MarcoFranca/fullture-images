import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "../../pages/index/Index";
import Search from "../../pages/search/Search";
import PageNotFound from "../../pages/pageNotFound/PageNotFound";



export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Index/>}/>
                <Route path='/search/' element={<Search/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}