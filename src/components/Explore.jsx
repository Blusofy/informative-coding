// /**
//  * Date:05/04/2021
//  * Author: Muhammad Minhaj
//  * Title: SERVICES
//  * Description: Web services
//  * * */
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    IconButton,
    Typography,
} from '@material-ui/core';
import {
    Code as CodeIcon,
    DataUsage as DataUsageIcon,
    ShowChart as ShowChartIcon,
} from '@material-ui/icons';
import { useRouter } from 'next/router';

const styleObj = { width: '4rem', height: '4rem' };

const exploreList = [
    {
        name: 'প্রোগ্রামিং',
        icon: <CodeIcon style={styleObj} />,
        url: '/programming',
    },
    {
        name: 'ডাটা স্ট্রাটার্স',
        icon: <DataUsageIcon style={styleObj} />,
        url: '/data-structures',
    },
    {
        name: 'অ্যালগরিদমস',
        icon: <ShowChartIcon style={styleObj} />,
        url: '/algorithms',
    },
];

function CustomCard({ name, url, icon }) {
    const router = useRouter();

    return (
        <Grid item sm={4}>
            <Card raised style={{ margin: '0.75rem' }}>
                <CardContent>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <IconButton>{icon}</IconButton>
                        {/* {icon} */}
                        <Typography variant="h5" color="primary">
                            {name}
                        </Typography>
                        <br />
                        <Typography variant="body2" color="textSecondary" align="center">
                            প্রোগ্রামিং শিখুন নিজের মাতৃভাষায়। প্রোগ্রামিং এর ভয়কে করব জয়। আর সময়
                            নষ্ট করবেন না আজকে থেকে শুরু করুন।
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button
                        // color="primary"
                        variant="outlined"
                        onClick={() => router.push(url)}
                        fullWidth
                    >
                        <Typography variant="subtitle2">শুরু করুন</Typography>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

function Services() {
    return (
        <>
            <Typography variant="h4" color="primary" align="center">
                মৌলিক বিষয়
            </Typography>
            <Grid container>
                {exploreList.map((elem) => (
                    <CustomCard {...elem} key={elem.name} />
                ))}
            </Grid>
        </>
    );
}
export default Services;
