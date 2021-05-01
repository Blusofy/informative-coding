// /**
//  * Date:05/04/2021
//  * Author: Muhammad Minhaj
//  * Title: SLIDE SHOW
//  * Description: Web Static Slide
//  * * */
import { Button, Grid, Typography } from '@material-ui/core';
import { ExpandMore as MoreIcon } from '@material-ui/icons';
import Card from './Card';

const initDescription = 'প্রোগ্রামিং শিখুন নিজের মাতৃভাষায়। প্রোগ্রামিং এর ভয়কে করব জয়।';

const tutorialsData = [
    {
        title: 'জাভাস্ক্রিপ্ট',
        description: initDescription,
        url: '/javascript',
        iconUrl: '/static/icons/js.png',
    },
    {
        title: 'পাইথন',
        description: initDescription,
        url: '/python',
        iconUrl: '/static/icons/py.png',
    },
    {
        title: 'সি',
        description: initDescription,
        url: '/c',
        iconUrl: '/static/icons/c.png',
    },
    {
        title: 'সি++',
        description: initDescription,
        url: '/c++',
        iconUrl: '/static/icons/c++.png',
    },
    {
        title: 'জাভা',
        description: initDescription,
        url: '/java',
        iconUrl: '/static/icons/java.png',
    },
    {
        title: 'টাইপস্ক্রিপট',
        description: initDescription,
        url: '/typescript',
        iconUrl: '/static/icons/ts.png',
    },
];

function Tutorials() {
    return (
        <div>
            <Typography variant="h4" color="primary" align="center">
                প্রোগ্রামিং ভাষা
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
