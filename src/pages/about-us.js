import { Box } from '@material-ui/core';
import Head from 'next/head';
import Layout from '../components/Layout';
import Page from '../components/Page';

function Home() {
    return (
        <>
            <Head>
                <title>আমাদের সম্পর্কে (About Us): Informative Coding - ইনফরমেটিভ কোডিং</title>
            </Head>
            <Layout>
                <Box marginTop="10rem" />
                <Page
                    title="আমাদের সম্পর্কে"
                    bodyText="ইনফরমেটিভ কোডিং হচ্ছে একটি অলাভজনক সংস্থা। যার উদ্দেশ্য বাংলায় প্রোগ্রামিং সম্পর্কিত
                বিষয় সমূহের বৃহৎ সংস্থান গড়ে তোলে মানুষ কে শিখার সুযোগ করে দেওয়া। এবং প্রোগ্রামিং
                সম্পর্কিত বিষয় সমূহকে সহজ উপস্থাপনার মাধ্যমে মানুষের আগ্রহকে বাড়িয়ে তোলা। ইনফরমেটিভ
                কোডিং এর কনটেন্ট ইউটুব এবং ওয়েবসাইটের মাধ্যমে প্রকাশিত হয়। ধন্যবাদ"
                />
                <Box marginTop="10rem" />
            </Layout>
        </>
    );
}

export default Home;
