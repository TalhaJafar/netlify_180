import '../styles/globals.css';
import '../styles/sass/home.scss';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { GET_TEXT_CONTENT } from '../GraphQL/queries/queries';

const { default: Footer } = require("./structure/Footer");
const { default: Nav } = require("./structure/Nav");

let disclaimer = '';
let footerLinks = '';

const footerDisclaimer = () => {
    const { loading, error, data } = useQuery(GET_TEXT_CONTENT);
    if (data) {
        data ? disclaimer = data.cmsBlocks.items[1].content : null
        data ? footerLinks = data.cmsBlocks.items[0].content : null
    }
}

const Layout = (props) => {
    footerDisclaimer();
    return (
        <div>
            <Head>
                <title>180 Smoke</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <div >
                {props.children}
            </div>
            <Footer disclaimer={disclaimer} footerLinks={footerLinks} />
        </div>
    )
}

export default Layout;