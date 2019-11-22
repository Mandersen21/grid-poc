import React, { useState } from "react"

import { Container as Container_, Grid } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme, createStyles } from "@material-ui/core/styles"
import styled from "@emotion/styled"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints"
import useMedia from "./useMedia"

type Props = {
    children?: React.ReactNode
    fluid?: boolean
}

const breakpoints = createBreakpoints({
    values: {
        xs: 0,
        sm: 768,
        md: 1025,
        lg: 1280,
        xl: 1360,
      },
})

const theme = createMuiTheme({
    breakpoints: breakpoints,

    overrides: ({
        MuiContainer: ({
            root: {
                marginBottom: "8px",

                [breakpoints.only('xs')]: {
                    paddingLeft: "0px",
                    paddingRight: "0px"
                },
                [breakpoints.only('sm')]: {
                    paddingLeft: "40px",
                    paddingRight: "40px"
                },
                [breakpoints.only('md')]: {
                    paddingLeft: "40px",
                    paddingRight: "40px"
                },
                [breakpoints.up('lg')]: {
                    paddingLeft: "0px",
                    paddingRight: "0px"
                },
            },
            maxWidthXs: ({
                [breakpoints.only('xs')]: {
                    maxWidth: "none",
                    marginTop: "-8px"
                }
            }),
            maxWidthMd: ({
                [breakpoints.down('md')]: {
                    maxWidth: "none"
                }
            }),
            maxWidthLg: ({
                [breakpoints.up('lg')]: {
                    maxWidth: "1200px"
                }
            }),
        }),
        MuiGrid: ({
            item: {
                paddingTop: "8px",
                paddingBottom: "8px"
            }
        }),
    })
})

const Container = (props: Props) => {
    const { maxWidth_ } = useMedia(
        ['(max-width: 767px)',
            '(max-width: 1279px and min-width: 768px)',
            '(min-width: 1280px)'],
        [
            { maxWidth_: "xs" }, // Mobile
            { maxWidth_: "md" }, // Large
            { maxWidth_: "lg" }, // X-large and up
        ],
        { maxWidth_: "xl" },
    )

    return (
        <MuiThemeProvider theme={theme}>
            <Container_  {...props.fluid ? { maxWidth: false } : { maxWidth: maxWidth_ }}>
                <Grid container spacing={maxWidth_ == "xs" ? 0 : 2}>
                    {props.children}
                </Grid>
            </Container_>
        </MuiThemeProvider>
    )
}

export default Container