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
    Typography
} from '@material-ui/core';
import {
    Code as CodeIcon,
    DataUsage as DataUsageIcon,
    ShowChart as ShowChartIcon
} from '@material-ui/icons';
import { useRouter } from 'next/router';

const styleObj = { width: '4rem', height: '4rem' };

const exploreList = [
    {
        name: 'প্রোগ্রামিং',
        icon: <CodeIcon style={styleObj} />,
        url: '/programming',
        description:
            'যদি প্রোগ্রামিং শুরু করার কথা ভেবে থাকেন তাহলে এটি আপনার জন্য। প্রোগ্রামিং এর মূল বিষয় গুলো সম্পর্কে প্রাথমিক পর্যায় থেকে বিস্তারিত আলোচনা করা হয়েছে।',
    },
    {
        name: 'ডাটা স্ট্রাটার্স',
        icon: <DataUsageIcon style={styleObj} />,
        url: '/data-structures',
        description:
            'জাভাস্ক্রিপ্ট দ্বারা ডাটা স্ট্রাটার্স শিখুন এবং এর প্রয়োজনীয়তা সম্পর্কে জানুন। ডাটা স্ট্রাটার্স এর প্রাথমিক পর্যায় থেকে শুরু করে বিস্তারিত আলোচনা করা হয়েছে।',
    },
    {
        name: 'অ্যালগরিদমস',
        icon: <ShowChartIcon style={styleObj} />,
        url: '/algorithms',
        description:
            'জাভাস্ক্রিপ্ট দ্বারা অ্যালগরিদমস শিখুন এবং এর প্রয়োজনীয়তা সম্পর্কে জানুন। অ্যালগরিদমস এর প্রাথমিক পর্যায় থেকে শুরু করে বিস্তারিত আলোচনা করা হয়েছে।',
    },
];

function CustomCard({ name, url, icon, description }) {
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
                            {description}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" onClick={() => router.push(url)} fullWidth>
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
