import { Box } from '@material-ui/core';
import Exoplore from '../components/Explore';
import Layout from '../components/Layout';
import Thumbnail from '../components/Thumbnail';
import Tutorials from '../components/Tutorials/Tutorials';

function Home() {
    return (
        <Layout>
            <Box marginTop="10rem" />
            <Thumbnail />
            <Box marginTop="10rem" />
            <Tutorials />
            <Box marginTop="10rem" />
            <Exoplore />
            <Box marginTop="10rem" />
        </Layout>
    );
}

export default Home;
