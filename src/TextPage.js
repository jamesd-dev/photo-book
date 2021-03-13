import React from 'react';
import { Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

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
    description: {
        fontSize: '10pt',
        paddingTop: '5mm',
        fontFamily: 'Montserrat',
    },
});

    function TextPage({page, photos}) {
    const { title, content } = page;
    let photoIndex = 0;

    return (
        <>
            <Page size="A5" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>{`${title}`}</Text>
                    {content.map(paragraph => {
                        if(paragraph !== "<photo>") {
                            return <Text style={styles.description}>{paragraph}</Text>
                        } else {
                            return <Image style={styles.image} src={photos[photoIndex++]}/>
                        }
                    })}
                </View>
            </Page>
        </>
    );
}

export default TextPage;