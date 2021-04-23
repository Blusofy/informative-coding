import { Container } from '@material-ui/core';
import Footer from './Footer/Footer';
import Header from './Header';

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                <Container>{children}</Container>
            </main>
            <Footer />
        </>
    );
}
export default Layout;
