import React from "react";
import './PageNotFound.css'
import img404 from '../../assets/image/ups-erro-404.jpg'

export default function PageNotFound() {
    return (
        <boby className='page-not-found'>
            <div className="page-not-found__content">
                <h1 className='page-not-found__content__title'>Not Found</h1>
                <p className='page-not-found__content__text'>The resouce request cold not be found on this server!</p>
            </div>
            <img src={img404} alt="Page is not found - 404" className='page-not-found__img'/>
        </boby>
    )
}