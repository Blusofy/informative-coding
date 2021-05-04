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
import tutorialsData from './data.json';

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
