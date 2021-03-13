import backgrounds from "./backgrounds/backgrounds";
import React from 'react';
import { Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import exampleImage1 from './exampleImages/photo-1455390582262-044cdead277a.jfif';
import exampleImage2 from './exampleImages/photo-1481627834876-b7833e8f5570.jfif';
import exampleImage3 from './exampleImages/photo-1505682634904-d7c8d95cdc50.jfif';
import exampleImage4 from './exampleImages/photo-1523189442169-eaf5a86b3306.jfif';
import exampleImage5 from './exampleImages/photo-1581514371479-957e830dd85e.jfif';
import exampleImage6 from './exampleImages/photo-1586380951230-e6703d9f6833.jfif';

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
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    horizontalPhotoBox: {
        width: '79mm',
        height: '59mm',
        position: 'absolute',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#112131',
        borderStyle: 'solid',
        borderRadius: '1mm',
        objectFit: 'cover',
    },
    verticalPhotoBox: {
        width: '59mm',
        height: '79mm',
        position: 'absolute',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#112131',
        borderStyle: 'solid',
        borderRadius: '1mm',
        objectFit: 'cover',
    }
});

const TitleLayout = () => (
    <View style={styles.container}>
        <Image src={exampleImage3} style={[styles.horizontalPhotoBox, {top: '5mm', left: '3.5cm'}]}/>
        <Image src={exampleImage2} style={[styles.verticalPhotoBox, {top: '75mm', left: '1cm'}]}/>
        <Image src={exampleImage1} style={[styles.verticalPhotoBox, {top: '75mm', right: '1cm'}]}/>
    </View>
);

const EmptyLayout = () => (
    <View style={styles.container}>
        <Image src={exampleImage4} style={[styles.horizontalPhotoBox, {top: '5mm', right: '1cm'}]}/>
        <Image src={exampleImage5} style={[styles.horizontalPhotoBox, {top: '75mm', left: '3.5cm'}]}/>
        <Image src={exampleImage6} style={[styles.horizontalPhotoBox, {bottom: '5mm', left: '1cm'}]}/>
    </View>
);

function ExamplePage() {
    const { title, description, bg } = require('./content.json').examplePage;
    const backgroundImage = (backgrounds[bg]) ? backgrounds[bg] : backgrounds.triangles;

    return (
        <>
            <Page size="A5" style={styles.page}>
                <Image style={styles.image} src={backgroundImage}/>
                <View style={styles.header}>
                    <Text style={styles.title}>{`${title}`}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <TitleLayout/>
            </Page>
            <Page size="A5" style={styles.page}>
                <Image style={styles.image} src={backgroundImage}/>
                <EmptyLayout/>
            </Page>
        </>
    );
}

export default ExamplePage;