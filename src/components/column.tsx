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
            xs={12}
            sm={12}
            {...props.m ? { md: props.m } : { md: 6 }}
            {...props.l ? { lg: props.l } : { lg: 4 }}
            {...props.xl ? { xl: props.xl } : { xl: 3 }}>
            {props.children}
        </Grid>
        </>
    )
}
//{...!props.m && !props.l && !props.xl && !props.xxl ? { xs: 12, sm: 12 } : { xs: false, sm: false } }

export default Column