/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: WEB FOOTTER
 * Description: Web footer section
 * * */
import { Container, Divider, Grid, Typography, useMediaQuery } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import SocialLinks from '../SocialLinks';
import CustomList from './List';

function GapDiv({ children }) {
    return <div style={{ padding: '2rem' }}>{children}</div>;
}

const languages = [
    {
        name: 'জাভাস্ক্রিপ্ট',
        url: '/javascript',
    },
    {
        name: 'পাইথন',
        url: '/python',
    },
    {
        name: 'সি',
        url: '/c',
    },
    {
        name: 'সি++',
        url: '/c',
    },
    {
        name: 'টাইপস্ক্রিপট',
        url: '/typescript',
    },
];
const resources = [
    {
        name: 'প্রোগ্রামিং',
        url: '/programming',
    },
    {
        name: 'ডাটা স্ট্রাটার্স',
        url: '/datastructures',
    },
    {
        name: 'অ্যালগরিদমস',
        url: '/algorithms',
    },
    {
        name: 'টেকনোলজিস',
        url: '/technologies',
    },
    {
        name: 'ব্লগস',
        url: '/blogs',
    },
];
const organization = [
    {
        name: 'সম্পর্কে',
        url: '/about',
    },
    {
        name: 'কন্ট্রিবিউশন',
        url: '/contribution',
    },
    {
        name: 'প্রাইভেসি পলিসি',
        url: '/privacy-policy',
    },
    {
        name: 'টার্মস এন্ড কন্ডিশন',
        url: '/terms-conditions',
    },
    {
        name: 'ইউটুব',
        url: '/youtube',
    },
];
const links = [
    { name: 'facebook', href: 'https://facebook.com/InformativeCoding' },
    { name: 'linkedin', href: 'https://www.linkedin.com/company/informativecoding' },
    { name: 'github', href: 'https://github.com/InformativeCoding' },
    { name: 'youtube', href: 'https://www.youtube.com/channel/UCBSNbOumi5uNLJz8vFGJLRQ' },
];
function Footer() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <footer style={{ background: '#f5f5f5' }}>
            <Container>
                <Grid container>
                    <Grid item sm={3}>
                        <GapDiv>
                            <Typography variant="h5">প্রোগ্রামিং ভাষা</Typography>
                            <CustomList lists={languages} icon={<FiberManualRecordIcon />} />
                        </GapDiv>
                    </Grid>
                    <Grid item sm={3}>
                        <GapDiv>
                            <Typography variant="h5">রিসোর্স</Typography>
                            <CustomList lists={resources} icon={<TrendingFlatIcon />} />
                        </GapDiv>
                    </Grid>
                    <Grid item sm={3}>
                        <GapDiv>
                            <Typography variant="h5">অর্গানাইজেশন</Typography>
                            <CustomList lists={organization} icon={<FiberManualRecordIcon />} />
                        </GapDiv>
                    </Grid>
                    <Grid item sm={3}>
                        <GapDiv>
                            <Typography variant="h5">About</Typography>
                            <br />

                            <Typography variant="body1">
                                প্রোগ্রামিং শিখুন নিজের মাতৃভাষায়। প্রোগ্রামিং এর ভয়কে করব জয়। আর
                                সময় নষ্ট করবেন না আজকে থেকে শুরু করুন। প্রোগ্রামিং শিখুন নিজের
                                মাতৃভাষায়। প্রোগ্রামিং এর ভয়কে করব জয়। আর সময় নষ্ট করবেন না আজকে
                                থেকে শুরু করুন।
                            </Typography>
                        </GapDiv>
                    </Grid>
                </Grid>
                <Divider />
                <div
                    style={{
                        padding: '0.5rem 0rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: isMobile ? 'column-reverse' : 'row',
                    }}
                >
                    <Typography variant="h6" color="textSecondary">
                        - ইনফরমেটিভ কোডিং
                    </Typography>
                    <SocialLinks links={links} />
                </div>
            </Container>
        </footer>
    );
}
export default Footer;
