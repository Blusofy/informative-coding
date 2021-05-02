// /**
//  * Date:05/04/2021
//  * Author: Muhammad Minhaj
//  * Title: SLIDE SHOW
//  * Description: Web Static Slide
//  * * */
import { Button, Grid, Typography } from '@material-ui/core';
import { ExpandMore as MoreIcon } from '@material-ui/icons';
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
];

function Tutorials() {
    return (
        <div>
            <Typography variant="h4" color="primary" align="center">
                বিষয় নির্বাচন করুন
            </Typography>
            <br />

            <Grid container>
                {tutorialsData.map(({ title, description, url, iconUrl }) => (
                    <Grid item sm={6} md={4} style={{ width: '100%' }} key={title}>
                        <Card title={title} description={description} url={url} iconUrl={iconUrl} />
                    </Grid>
                ))}
            </Grid>
            <br />

            <Button
                variant="outlined"
                color="primary"
                size="large"
                endIcon={<MoreIcon />}
                style={{ marginLeft: '0.5rem' }}
            >
                <Typography variant="subtitle1" color="primary">
                    আরো দেখুন
                </Typography>
            </Button>
        </div>
    );
}

export default Tutorials;
