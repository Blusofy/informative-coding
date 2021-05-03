import { Box } from '@material-ui/core';
import Head from 'next/head';
import Layout from '../components/Layout';
import Tutorials from '../components/Tutorials/Tutorials';

function Home() {
    return (
        <>
            <Head>
                <title>
                    জনপ্রিয় প্রযুক্তি (Popular Technologies): Informative Coding - ইনফরমেটিভ কোডিং
                </title>
            </Head>
            <Layout>
                <Box marginTop="10rem" />
                <Tutorials />
                <Box marginTop="10rem" />
            </Layout>
        </>
    );
}

export default Home;
