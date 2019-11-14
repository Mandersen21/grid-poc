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
    return (
        <>
        <Grid 
            item 
            {...props.m ? { md: props.m } : { md: false }}
            {...props.l ? { lg: props.l } : { lg: false }}
            {...props.xl ? { xl: props.xl } : { xl: false }}
            {...!props.m && !props.l && !props.xl && !props.xxl ? { xs: true } : { xs: false } }>
            {props.children}
        </Grid>
        </>
    )
}

export default Column