import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


interface Event {
    venueName: string;
    venueLink?: string;
    date: Date;
    address: string;
    addressLink?: string;
    moreInfo?: string;
    moreInfoLink?: string;
}

const tableData: Event[] = [
    {
        venueName: "Vertagogo",
        venueLink: "https://www.vertagogo.com/",
        date: new Date("2022-07-20"),
        address: "1385 Main St E, Hamilton, ON L8K 1B9",
        addressLink: "https://www.google.com/maps/place/Vertagogo/@43.2407214,-79.8104972,15z/data=!4m2!3m1!1s0x0:0xaf29e5000a1763a9?sa=X&ved=1t:2428&ictx=111",
        moreInfo: "Event Details",
        moreInfoLink: "https://www.vertagogo.com/event-details",
    }
]
const createData = (
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) => {
    return { name, calories, fat, carbs, protein };
}

const UpcomingEventsPage = () => {
    const navigate = useNavigate();
    const clickExternalLink = (link: string) => {
        if (!link) {
            return;
        }
        window.open(link, "_blank");
    }
    const styles = {
        tableContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgb(176, 167, 178)",
            height: "100%",
            width: "100%",
            border: "1px solid black",
            boxSizing: "border-box",
        },
        contactUsContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgb(176, 167, 178)",
            height: "100%",
            width: "100%",
            border: "1px solid black",
            boxSizing: "border-box",
        },
        embeddedLink: {
            cursor: "pointer",
        },
        titleContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgb(176, 167, 178)",
            border: "1px solid black",
            margin: '10px',
        },
        tableCell: {
            border: "none"
        }
    }
    return (
        <Box>
            <Box sx={styles.titleContainer}>
                <Typography variant="h4">Upcoming Events</Typography>
            </Box>

            <TableContainer component={Box} sx={styles.tableContainer}>
                <Table sx={{ minWidth: 650 }} >
                    <TableBody>
                        {tableData.map((row, index) => (
                            <TableRow key={index} sx={{border: "1px solid black"}}>
                                <TableCell sx={styles.tableCell}>
                                    <Box component="span" sx={styles.embeddedLink} onClick={() => { clickExternalLink(row.venueLink ?? "") }}>{row.venueName}</Box>
                                </TableCell>
                                <TableCell sx={styles.tableCell}>
                                    {row.date.toDateString()}
                                </TableCell>
                                <TableCell sx={styles.tableCell}>
                                    <Box component="span" sx={styles.embeddedLink} onClick={() => { clickExternalLink(row.addressLink ?? "") }}>{row.address}</Box>
                                </TableCell>
                                <TableCell sx={styles.tableCell}>
                                    <Box component="span" sx={styles.embeddedLink} onClick={() => { clickExternalLink(row.moreInfoLink ?? "") }}>{row.moreInfo}</Box>
                                </TableCell>
                            </TableRow>
                        ))

                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={styles.contactUsContainer}>
                <Typography>
                    Interested in booking us for an event? <Box component="span" sx={styles.embeddedLink} onClick={() => { navigate("/contact") }}>Contact us here!</Box>
                </Typography>
            </Box>
        </Box>
    );
}

export default UpcomingEventsPage;