// /**
//  * Date:05/04/2021
//  * Author: Muhammad Minhaj
//  * Title: SLIDE SHOW
//  * Description: Web Static Slide
//  * * */
import { Button, Grid, Grow, Typography } from '@material-ui/core';
import { ExpandMore as MoreIcon } from '@material-ui/icons';
import { useRouter } from 'next/router';
import Card from './Card';

const initDescription = (title) => ` প্রাথমিক পর্যায় থেকে বাংলায় সহজে ${title} শিখুন।`;

const tutorialsData = [
    {
        title: 'জাভাস্ক্রিপ্ট',
        description: initDescription('জাভাস্ক্রিপ্ট'),
        url: '/javascript',
        iconUrl: '/static/icons/js.png',
    },
    {
        title: 'পাইথন',
        description: initDescription('পাইথন'),
        url: '/python',
        iconUrl: '/static/icons/py.png',
    },
    {
        title: 'সি',
        description: initDescription('সি'),
        url: '/c',
        iconUrl: '/static/icons/c.png',
    },
    {
        title: 'সি++',
        description: initDescription('সি++'),
        url: '/c++',
        iconUrl: '/static/icons/c++.png',
    },
    {
        title: 'জাভা',
        description: initDescription('জাভা'),
        url: '/java',
        iconUrl: '/static/icons/java.png',
    },
    {
        title: 'টাইপস্ক্রিপট',
        description: initDescription('টাইপস্ক্রিপট'),
        url: '/typescript',
        iconUrl: '/static/icons/ts.png',
    },
    {
        title: 'জাভা1',
        description: initDescription('জাভা'),
        url: '/java',
        iconUrl: '/static/icons/java.png',
    },
    {
        title: 'টাইপস্ক্রিপট1',
        description: initDescription('টাইপস্ক্রিপট'),
        url: '/typescript',
        iconUrl: '/static/icons/ts.png',
    },
];

function Tutorials({ isLimited }) {
    const router = useRouter();
    return (
        <div>
            <Typography variant="h4" color="primary" align="center">
                জনপ্রিয় প্রযুক্তি
            </Typography>

            <Typography variant="subtitle1" color="textSecondary" align="center">
                আপনার শেখার শুরুটা হোক আনন্দময়! নিজে শিখুন এবং অন্যকে শেখার সুযোগ করে দিন।
            </Typography>
            <br />
            <Grid container>
                {tutorialsData
                    .slice(0, isLimited ? 6 : tutorialsData.length)
                    .map(({ title, description, url, iconUrl }) => (
                        <Grow in key={title}>
                            <Grid item sm={6} md={4} style={{ width: '100%' }}>
                                <Card
                                    title={title}
                                    description={description}
                                    url={url}
                                    iconUrl={iconUrl}
                                />
                            </Grid>
                        </Grow>
                    ))}
            </Grid>
            <br />
            {isLimited && (
                <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    endIcon={<MoreIcon />}
                    style={{ marginLeft: '0.5rem' }}
                    onClick={() => router.push('/technologies')}
                >
                    <Typography variant="subtitle1" color="primary">
                        আরো দেখুন
                    </Typography>
                </Button>
            )}
        </div>
    );
}

export default Tutorials;
