import React from "react"

import { Container as Container_, Grid } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import styled from "@emotion/styled"

type Props = {
    children?: React.ReactNode
    fluid?: boolean
}

const breakPointValues = {
    xs: 0,
    sm: 768, // medium
    md: 1025, // large
    lg: 1280, // x-large
    xl: 1360, // xx-large
}

const theme = createMuiTheme({
    breakpoints: { values: breakPointValues },
    spacing: 6,
})

type ContainerProp = {
    fluid: boolean
}

const ContainerStyled = styled(Container_) <ContainerProp>`
    @media (max-width: 767px) {
        max-width: none;
        padding-left: 0 !important;
        padding-right: 0 !important;

        div {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        max-width: none;
        ${props => props.fluid ? '' : 'padding-left: 40px'}; 
        ${props => props.fluid ? '' : 'padding-right: 40px'};
    }
    
    @media (min-width: 1280px) {
        ${props => props.fluid ? '' : 'max-width: 1200px'};
    }
`

const Container = (props: Props) => {

    return (
        <MuiThemeProvider theme={theme}>
            <ContainerStyled fluid={props.fluid} {...props.fluid ? { maxWidth: false } : { fixed: false }}>
                <Grid container spacing={4}>
                    {props.children}
                </Grid>
            </ContainerStyled>
        </MuiThemeProvider>
    )
}

export default Container