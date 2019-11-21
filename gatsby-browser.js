
import React from 'react'

import './src/styling/global.css';
import { BaseCSS } from 'styled-bootstrap-grid';

export const wrapRootElement = ({ element }) => {
    return (
        <>
            <BaseCSS />
            {element}
        </>
    )
}