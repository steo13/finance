import { Avatar, Button, CardActions, CardContent, Divider, Paper, Stack, Typography } from "@mui/material";

export default function NetWorthSummary() {
    return (
        <Paper elevation={24}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Total Balance
                </Typography>
                <Typography variant="h4" component="div" sx={{marginBottom: '8px'}}>
                    €5789
                </Typography>
                <Divider/>
                <Stack direction='row' spacing={1} sx={{ marginTop: '16px'}}>
                    <Avatar src='/buddybank.png' sx={{width: 24, height: 24}}/>
                    <Typography sx={{fontSize: 12, alignContent: 'center'}}>€3500 - Buddybank</Typography>
                </Stack>
                <Stack direction='row' spacing={1} sx={{ marginTop: '8px'}}>
                    <Avatar src='/tradeRepublic.png' sx={{width: 24, height: 24}}/>
                    <Typography sx={{fontSize: 12, alignContent: 'center'}}>€3500 - Trade Republic</Typography>
                </Stack>
            </CardContent>
            <CardActions sx={{justifyContent: 'center'}}>
                <Button fullWidth variant='contained' size="small">Show More</Button>
            </CardActions>
        </Paper>
    )
}