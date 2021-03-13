import React from 'react';
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        padding: '1cm 1cm',
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        margin: '1cm 0',
    },
    title: {
        fontSize: '20pt',
        fontFamily: 'Libre Baskerville',
    },
    subtitle: {
        fontSize: '10pt',
        fontFamily: 'Montserrat',
        paddingBottom: '5mm',
    },
    contents: {
        fontSize: '12pt',
        fontFamily: 'Montserrat',
        fontWeight: '900',
    }
});

function ContentsPage({page, themePages}) {
    const {title, description} = page;
    let contentIndex = 0;
    return (
        <>
            <Page size="A5" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>{`${title}`}</Text>
                    <Text style={styles.subtitle}>{description}</Text>
                    {themePages.slice(0, 32).map((themePage) => <Text style={styles.contents}>{`${contentIndex++} - ${themePage.title}`}</Text>)}
                </View>
            </Page>
            <Page size="A5" style={styles.page}>
                <View style={styles.header}>
                    {themePages.slice(32).map((themePage) => <Text style={styles.contents}>{`${contentIndex++} - ${themePage.title}`}</Text>)}
                </View>
            </Page>
        </>
    );
}

export default ContentsPage;