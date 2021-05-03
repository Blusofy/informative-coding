import { Box } from '@material-ui/core';
import Head from 'next/head';
import Layout from '../components/Layout';
import Page from '../components/Page';

function Contribution() {
    return (
        <>
            <Head>
                <title>কন্ট্রিবিউশন (Contribution): Informative Coding - ইনফরমেটিভ কোডিং</title>
            </Head>
            <Layout>
                <Box marginTop="10rem" />
                <Page title="কন্ট্রিবিউশন" />
                <Box marginTop="10rem" />
            </Layout>
        </>
    );
}

export default Contribution;
