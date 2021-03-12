import backgrounds from "./backgrounds/backgrounds";
import React from 'react';
import { Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import titleLayouts from "./layouts/titlePage/titleLayouts";
import emptyLayouts from "./layouts/EmptyPageLayouts/EmptyLayouts";

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        padding: '1cm 1cm',
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
        fontFamily: 'Libre Baskerville',
    },
    description: {
        fontSize: '10pt',
        paddingTop: '5mm',
        fontFamily: 'Montserrat',
    },
});

function getRandomFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex];
}

function PhotoPage({page, index}) {
    const { title, description, bg } = page;
    const backgroundImage = (backgrounds[bg]) ? backgrounds[bg] : backgrounds.triangles;

    return (
        <>
                <Page size="A5" style={styles.page}>
                    <Image style={styles.image} src={backgroundImage}/>
                    <View style={styles.header}>
                        <Text style={styles.title}>{`${index + 1} - ${title}`}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                    {getRandomFromArray(titleLayouts)}
                </Page>
                <Page size="A5" style={styles.page}>
                    <Image style={styles.image} src={backgroundImage}/>
                    {getRandomFromArray(emptyLayouts)}
                </Page>
        </>
    );
}

export default PhotoPage;