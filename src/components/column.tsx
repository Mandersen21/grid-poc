import React, { useEffect, useLayoutEffect } from "react"

import { Grid } from '@material-ui/core'

type Props = {
    children?: React.ReactNode
    m?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    l?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    xxl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const Column = (props: Props) => {

    const getXXtraLarge = () => {
        if (props.xxl) return props.xxl
    }

    const getXtraLarge = () => {
        if (props.xl) return props.xl
        else if (props.l) return props.l
        else if (props.m) return props.m
        else return true
    }

    const getLarge = () => {
        if (props.l) return props.l
        else if (props.m) return props.m
        else return true
    }

    const getMedium = () => {
        if (props.m) return props.m
        else return 6
    }

    return (
        <>
            <Grid
                item
                xs={12}
                sm={getMedium()}
                md={getLarge()}
                lg={getXtraLarge()}
                xl={getXXtraLarge()}>
                {props.children}
            </Grid>
        </>
    )
}

export default Column

                // xs={true}
                // sm={props.m} // Medium
                // md={props.l} // Large
                // lg={props.xl} // Xlarge
                // xl={props.xxl} // XXlarge
                // lg={true}
                // xs={12}
                // sm={ props.m || 6}
                // md={ props.l}
                // xs={12}
                // {...props.m ? { sm: props.m } : { sm: false }} // Medium
                // {...props.l ? { md: props.l } : { md: false }} // Large
                // {...props.xl ? { lg: props.xl } : { lg: false }} // X-large
                // {...props.xxl ? { xl: props.xxl } : { xl: false }} // XX-large