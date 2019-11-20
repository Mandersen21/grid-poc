import React from "react"

import styled from "@emotion/styled"
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { media } from 'styled-bootstrap-grid';


const Box = styled.div`
    height: 100px;
    background-color: #efefef;
    display: flex;
    font-size: 16px;
    font-family: 'DFDS';
    align-items: center;
    justify-content: center;
`

const gridTheme = {
    breakpoints: { // defaults below
        xl: 1360,
        lg: 1280,
        md: 1025,
        sm: 768,
        xs: 0,
    },
    row: {
        padding: 0
    },
    col: {
        padding: 12, // default 15
    },
    container: {
        padding: 0, // default 15
        maxWidth: { // defaults below
            xl: 1200,
            lg: 1200,
        },
    },
};

const ContainerStyled = styled(Container)`
    @media (max-width: 767px) {
        max-width: none;
        padding-left: 0;
        padding-right: 0;

        div {
            padding-left: 0;
            padding-right: 0;
        }
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        max-width: none;
        padding-left: 40px;
        padding-right: 40px;
    }
    
    @media (min-width: 1280px) {
        max-width: 1200px;
    }
`

const StyledBootstrapGridPage = () => {

    return (
        <>
            <GridThemeProvider
                gridTheme={gridTheme}>
                <div>
                    <ContainerStyled>
                        <Row>
                            <Col col sm={6}>
                                <Box>1</Box>
                            </Col>
                            <Col col sm={6}>
                                <Box>2</Box>
                            </Col>
                            {/* <Col col>
                            <Box>3</Box>
                        </Col>
                        <Col col>
                            <Box>4</Box>
                        </Col>
                        <Col col>
                            <Box>5</Box>
                        </Col>
                        <Col col>
                            <Box>6</Box>
                        </Col>
                        <Col col>
                            <Box>7</Box>
                        </Col>
                        <Col col>
                            <Box>8</Box>
                        </Col>
                        <Col col>
                            <Box>9</Box>
                        </Col>
                        <Col col>
                            <Box>10</Box>
                        </Col>
                        <Col col>
                            <Box>11</Box>
                        </Col>
                        <Col col>
                            <Box>12</Box>
                        </Col>
                        <Col col>
                            <Box>13</Box>
                        </Col> */}
                        </Row>
                        <Row>
                            <Col col sm={10}>
                                <Box>3</Box>
                            </Col>
                            <Col col sm={2}>
                                <Box>4</Box>
                            </Col>
                        </Row>
                    </ContainerStyled>

                    <div className="viewport-viewer">
                        <div className="xxl hidden">Viewport: XXL</div>
                        <div className="xl hidden">Viewport: XL</div>
                        <div className="l hidden">Viewport: L</div>
                        <div className="s hidden">Viewport: S</div>
                        <div className="m hidden">Viewport: M</div>
                    </div>
                </div>
            </GridThemeProvider>
        </>
    )
}

export default StyledBootstrapGridPage