
import React from 'react'

// import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseCSS } from 'styled-bootstrap-grid';

export const wrapRootElement = ({ element }) => {
    return (
        <>
            {/* <BaseCSS /> */}
            {element}
        </>
    )
}