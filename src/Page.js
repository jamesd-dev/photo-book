import backgrounds from "./backgrounds/backgrounds";
import React from 'react';
import { PDFViewer, Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer';
import titleLayouts from "./layouts/titlePage/titleLayouts";

const styles = StyleSheet.create({
    viewer: {
        width: '100vw',
        height: '100vh',
    },
    page: {
        backgroundColor: '#E4E4E4',
        margin: 0,
    },
    header: {
        backgroundColor: 'white',
        padding: '20pt',
    },
    image: {
        position: 'absolute',
        width: '110%',
        height: '110%',
        left: '-2%',
        top: '-2%',
        objectFit: 'cover',
    },
    title: {
        fontSize: '30pt',
    },
    description: {
        fontSize: '10pt',
        padding: '10pt 0',
    },
    horizontalPhotoBox: {
        width: '8cm',
        height: '6cm',
        backgroundColor: 'white',
        margin: 'auto',
    }
});

function PhotoPage(props) {

    const { id } = props.match.params;
    const { pages } = require('./content.json');
    const { title, description, bg } = pages[id];
    const backgroundImage = (backgrounds[bg]) ? backgrounds[bg] : backgrounds.triangles;

    return (
        <PDFViewer style={styles.viewer}>
            <Document style={styles.page}>
                <Page size="A5" style={styles.page}>
                    <Image style={styles.image} src={backgroundImage}/>
                    <View style={styles.header}>
                        <Text style={styles.title}>{`${id} - ${title}`}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                    {titleLayouts[1]}
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default PhotoPage;