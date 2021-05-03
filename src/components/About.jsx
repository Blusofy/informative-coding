import { Box, Button, Typography } from '@material-ui/core';

function About() {
    return (
        <Box textAlign="center">
            <Typography variant="h4" color="primary" align="center">
                আমাদের সম্পর্কে
            </Typography>
            <br />
            <br />

            <Typography variant="body1" color="textPrimary" align="center">
                ইনফরমেটিভ কোডিং হচ্ছে একটি অলাভজনক সংস্থা। যার উদ্দেশ্য বাংলায় প্রোগ্রামিং সম্পর্কিত
                বিষয় সমূহের বৃহৎ সংস্থান গড়ে তোলে মানুষ কে শিখার সুযোগ করে দেওয়া। এবং প্রোগ্রামিং
                সম্পর্কিত বিষয় সমূহকে সহজ উপস্থাপনার মাধ্যমে মানুষের আগ্রহকে বাড়িয়ে তোলা। ইনফরমেটিভ
                কোডিং এর কনটেন্ট ইউটুব এবং ওয়েবসাইটের মাধ্যমে প্রকাশিত হয়। ধন্যবাদ
            </Typography>
            <br />

            <Button variant="text">
                <Typography variant="subtitle1" color="primary">
                    আমাদের এপ্লিকেশন ডাউনলোড করুন
                </Typography>
            </Button>
            <Button variant="text">
                <Typography variant="subtitle1" color="primary">
                    আমাদের চ্যানেল সাবস্ক্রাইব করুন
                </Typography>
            </Button>
        </Box>
    );
}
export default About;
