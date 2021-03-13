import React from "react";
import PhotoPage from "./Page";
import {PDFDownloadLink, Document, PDFViewer, StyleSheet, Font} from "@react-pdf/renderer";
import libreBaskerville from './fonts/libre-baskerville.ttf';
import montserrat from './fonts/montserrat.ttf';
import ExamplePage from "./ExamplePage";
import TextPage from "./TextPage";
import windowsWalletImage from './howToUseThisBookImages/Screenshot 2021-03-13 161211.png';
import ContentsPage from "./ContentsPage";

const styles = StyleSheet.create({
    viewer: {
        width: '100vw',
        height: '100vh',
    }
});

Font.register( {
    family: 'Libre Baskerville',
    src: libreBaskerville,
});

Font.register( {
    family: 'Montserrat',
    src: montserrat,
});

const MyDoc = () => {
    const { pages, howToUsePage, introduction, contentsPage } = require('./content.json');

    return (
        <PDFViewer style={styles.viewer}>
        <Document>
            {/*{pages.map((page, index) =>*/}
            {/*    <PhotoPage index={index} page={page}/>*/}
            {/*)}*/}
            {/*<ExamplePage/>*/}
            <TextPage page={introduction}/>
            <TextPage page={howToUsePage} photos={[windowsWalletImage]}/>
            <ContentsPage page={contentsPage} themePages={pages}/>
        </Document>
        </PDFViewer>
    )
}

const App = () => (
    // <div>
    //     <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
    //         {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    //     </PDFDownloadLink>
    // </div>
    <MyDoc/>
)

export default App;
