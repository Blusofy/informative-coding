import { Box } from '@material-ui/core';
import Layout from '../components/Layout';
import Tutorials from '../components/Tutorials/Tutorials';

function Home() {
    return (
        <Layout>
            <Box marginTop="10rem" />
            <Tutorials />
            <Box marginTop="10rem" />
        </Layout>
    );
}

export default Home;
