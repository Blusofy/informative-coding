// /**
//  * Date:05/04/2021
//  * Author: Muhammad Minhaj
//  * Title: SLIDE SHOW
//  * Description: Web Static Slide
//  * * */
import { Box, Button, Divider, Grid, Typography } from '@material-ui/core';

function Thumbnail() {
    return (
        <div>
            <Grid container>
                <Grid item sm={6}>
                    <Typography variant="h4">আসসালামু আলাইকুম,,,</Typography>
                    <Box marginTop="1rem" />

                    <Typography variant="h2" color="primary">
                        ইনফরমেটিভ কোডিং এর পক্ষ থেকে আপনাকে স্বাগতম।
                    </Typography>
                    <Box marginTop="2rem" />

                    <Divider />

                    <Typography variant="body1" color="textSecondary">
                        ইনফরমেটিভ কোডিং হচ্ছে একটি অলাভজনক সংস্থা। যার উদ্দেশ্য বাংলায় প্রোগ্রামিং
                        সম্পর্কিত বিষয় সমূহের বৃহৎ সংস্থান গড়ে তোলে মানুষ কে শিখার সুযোগ করে দেওয়া।
                        ইনফরমেটিভ কোডিং এর কনটেন্ট ইউটুব এবং ওয়েবসাইটের মাধ্যমে প্রকাশিত হয়।
                    </Typography>
                    <Box marginTop="5rem" />

                    <Button
                        color="primary"
                        variant="outlined"
                        size="large"
                        style={{ marginRight: '0.5rem' }}
                    >
                        আমাদের এপপ্স
                    </Button>
                    <Button color="primary" variant="contained" size="large">
                        নতুন কিছু শিখুন
                    </Button>
                </Grid>
                <Grid item sm={6}>
                    <div style={{ maxWidth: '450px', float: 'right' }}>
                        <img
                            src="/static/images/slide4.jpg"
                            alt="sldie"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Thumbnail;
