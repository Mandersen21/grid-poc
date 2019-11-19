import React from "react"

import styled from "@emotion/styled"
import { BaseCSS, Container, Row, Col } from 'styled-bootstrap-grid';

const Box = styled.div`
    height: 100px;
    background-color: #efefef;
    display: flex;
    font-size: 16px;
    font-family: 'DFDS';
    align-items: center;
    justify-content: center;
`

const StyledBootstrapGridPage = () => {

    return (
        <>
            <BaseCSS></BaseCSS>
            <Container>
                <Row>
                    <Col col xl={6}>
                        <Box>1</Box>
                    </Col>
                    <Col col>
                        <Box>2</Box>
                    </Col>
                    <Col col>
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
                </Row>
            </Container>
        </>
    )
}

export default StyledBootstrapGridPage