import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "../../pages/Index";
import Search from "../../pages/Search/Search";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Index/>}/>
                <Route path='/search/:params' element={<Search/>}/>
                <Route path='*' element={<div>Page is not found - 404</div>}/>
            </Routes>
        </BrowserRouter>
    )
}