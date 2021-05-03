import { Box } from '@material-ui/core';
import Head from 'next/head';
import Layout from '../components/Layout';
import Page from '../components/Page';

function TermsAndConditions() {
    return (
        <>
            <Head>
                <title> ব্লগ (Blog): Informative Coding - ইনফরমেটিভ কোডিং</title>
            </Head>
            <Layout>
                <Box marginTop="10rem" />
                <Page title="ব্লগ" />
                <Box marginTop="10rem" />
            </Layout>
        </>
    );
}

export default TermsAndConditions;
