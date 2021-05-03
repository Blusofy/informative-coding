import { Box, Button, Typography } from '@material-ui/core';
import { useState } from 'react';
import Alert from './Alert';

function About({ title, bodyText }) {
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => setOpen(!isOpen);
    return (
        <Box textAlign="center">
            <Typography variant="h4" color="primary" align="center">
                {title}
            </Typography>
            <br />
            <br />

            <Typography variant="body1" color="textPrimary" align="center">
                {bodyText ||
                    'আমাদের শুরুটা খুব অল্প সময়ে হয়েছে, যার কারণে সব কন্টেন্ট এখনো উপলব্ধ নয়। আমরা কনটেন্ট তৈরী নিয়ে কাজ করছি। আশা করা যায় খুব শিগ্রই সকল কনটেন্ট ইনফরমেটিভ কোডিং ওয়েবসাইটে প্রকাশিত হবে। ইনশাহআল্লাহ। ধন্যবাদ আমাদের সাথে থাকার জন্য।'}
            </Typography>
            <br />

            <Button variant="text">
                <Typography variant="subtitle1" color="primary" onClick={handleClick}>
                    আমাদের এপ্লিকেশন ডাউনলোড করুন
                </Typography>
            </Button>
            <Button
                variant="text"
                href="https://www.youtube.com/channel/UCBSNbOumi5uNLJz8vFGJLRQ"
                target="blank"
            >
                <Typography variant="subtitle1" color="primary">
                    আমাদের চ্যানেল সাবস্ক্রাইব করুন
                </Typography>
            </Button>
            <Alert isOpen={isOpen} handleClick={handleClick} />
        </Box>
    );
}
export default About;
