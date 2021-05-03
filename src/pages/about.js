import { Box } from '@material-ui/core';
import Layout from '../components/Layout';
import About from '../components/About';

function Home() {
    return (
        <Layout>
            <Box marginTop="10rem" />
            <About />
            <Box marginTop="10rem" />
        </Layout>
    );
}

export default Home;
