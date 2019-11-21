import React from "react"

import { Container as Container_, Grid } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme, createStyles } from "@material-ui/core/styles"
import styled from "@emotion/styled"
import { maxWidth } from "@material-ui/system"

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
    
    overrides: ({
        MuiContainer: ({
            root: {
                
            },
            maxWidthMd: ({
                maxWidth: "1200px !important"
            }),
            maxWidthXl: ({
                maxWidth: "1200px !important"
            }),
            maxWidthLg: ({
                maxWidth: "1200px !important"
            })
        })
    })
})

type ContainerProp = {
    fluid: boolean
}

const ContainerStyled = styled(Container_)<ContainerProp>`
    @media (max-width: 767px) {
        max-width: none;
        /* padding-left: 0;
        padding-right: 0; */

        /* div {
            padding-left: 0;
            padding-right: 0;
        } */
    }

    @media (min-width: 768px) and (max-width: 1279px) {
        max-width: none;
        ${props => props.fluid ? '' : 'padding-left: 40px'}; 
        ${props => props.fluid ? '' : 'padding-right: 40px'};
    }
    
    @media (min-width: 1280px) {
        ${props => props.fluid ? 'max-width: none' : 'max-width: 1200px'};
    }
`

const Container = (props: Props) => {

    return (
        <MuiThemeProvider theme={theme}>
            <Container_ {...props.fluid ? { maxWidth: false } : { }}>
                <Grid container spacing={6}>
                    {props.children}
                </Grid>
            </Container_>
        </MuiThemeProvider>
    )
}

export default Container