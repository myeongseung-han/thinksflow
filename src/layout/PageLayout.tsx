import { ReactNode } from "react"
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

type Props = {
    children: ReactNode,
}

function PageLayout({children}: Props) {
    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
            >
                <Typography variant="h5">Angular / Angular-cli</Typography>
            </Box>
            {children}
        </>
    )
} 

export default PageLayout;