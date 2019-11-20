import React from "react"

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
        else if (props.xl) return props.xl
        else if (props.l) return props.l
        else if (props.m) return props.m
        else return true
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