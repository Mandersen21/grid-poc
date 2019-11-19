import React from "react"

import { Container, Row, Col } from 'reactstrap';
import styled from "@emotion/styled"

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
            <Container>
                <Row>
                    <Col>
                        <Box>1</Box>
                    </Col>
                    <Col>
                        <Box>2</Box>
                    </Col>
                    <Col>
                        <Box>3</Box>
                    </Col>
                    <Col>
                        <Box>4</Box>
                    </Col>
                    <Col>
                        <Box>5</Box>
                    </Col>
                    <Col>
                        <Box>6</Box>
                    </Col>
                    <Col>
                        <Box>7</Box>
                    </Col>
                    <Col>
                        <Box>8</Box>
                    </Col>
                    <Col>
                        <Box>9</Box>
                    </Col>
                    <Col>
                        <Box>10</Box>
                    </Col>
                    <Col>
                        <Box>11</Box>
                    </Col>
                    <Col>
                        <Box>12</Box>
                    </Col>
                    <Col>
                        <Box>13</Box>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default StyledBootstrapGridPage