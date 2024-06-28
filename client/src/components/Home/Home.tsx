import { Box, Grid, Paper, styled } from "@mui/material";
import CustomAppBr from "../AppBar/CustomAppBar";
import { HomeProps } from "./type";
import NetWorthSummary from "../NetWorthSummary/NetWorthSummary";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Home(props: HomeProps) {
    return (
        <>
            <CustomAppBr path={props.path}/>
            <Box sx={{ flexGrow: 1, marginTop: '16px'}}>
                <Grid container spacing={2} sx={{justifyContent: 'center'}}>
                    <Grid item xs={2.5}>
                        <NetWorthSummary/>
                    </Grid>
                    <Grid item xs={6.5}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={2.5}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}