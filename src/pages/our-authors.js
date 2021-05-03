import { Box } from '@material-ui/core';
import Head from 'next/head';
import Layout from '../components/Layout';
import Page from '../components/Page';

function OurWriters() {
    return (
        <>
            <Head>
                <title>আমাদের লেখকগণ (Our Authors): Informative Coding - ইনফরমেটিভ কোডিং</title>
            </Head>
            <Layout>
                <Box marginTop="10rem" />
                <Page title="আমাদের লেখকগণ" />
                <Box marginTop="10rem" />
            </Layout>
        </>
    );
}

export default OurWriters;
