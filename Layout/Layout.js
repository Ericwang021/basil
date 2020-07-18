import Head from 'next/head';
import React, { Fragment } from 'react';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ClassInfoBox from '../components/ClassInfoBox/ClassInfoBox';

const Layout = (props) => {
    return (
        <Fragment>
            <Head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
            </Head>
            <CssBaseline />
            <Header />
            <div className={styles.container}>
                <ClassInfoBox title={'Learn with Academy - Academy Tutorial'} />
                <Container
                    maxWidth={false}
                    className={styles.containerBackground}>
                    <main>{props.children}</main>
                </Container>
            </div>
        </Fragment>
    );
};

export default Layout;
