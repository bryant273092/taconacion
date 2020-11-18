import Head from 'next/head'
import NavBar from '../navBar';
import Footer from '../footer';


export const HOC = (Content) => {
    const WrappedComponent = (props) => {
        return (
            <>
                <Head>
                    <title>Taco Nacion</title>
                </Head>
                <NavBar />
                <Content {...props} />
                <Footer />
                

            </>
        );
    };

    return WrappedComponent;
}