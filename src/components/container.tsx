import React from "react"

import { Container as Container_, Grid } from '@material-ui/core'

type Props = {
    children?: React.ReactNode
    fluid?: boolean
}

const Container = (props: Props) => {
    return (
        <Container_ {...props.fluid ? { maxWidth: false } : { fixed: true }}>
            <Grid container spacing={3}>
                {props.children}
            </Grid>
        </Container_>
    )
}

export default Container