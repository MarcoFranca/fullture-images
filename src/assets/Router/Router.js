import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "../../pages/Index";
import Search from "../../pages/Search/Search";
import PageNotFound from "../../pages/pageNotFound";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Index/>}/>
                <Route path='/search/' element={<Search/>}/>
                <Route path='*' element={<PageNotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}