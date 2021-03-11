import React from 'react';
import {StyleSheet, View, Text} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    horizontalPhotoBox: {
        width: '8cm',
        height: '6cm',
        position: 'absolute',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    verticalPhotoBox: {
        width: '6cm',
        height: '8cm',
        position: 'absolute',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberText: {

    }
});

const titleLayouts = [
    (
        <View style={styles.container}>
            <View style={[styles.horizontalPhotoBox, {bottom: '14cm', left: '3.5cm'}]}><Text style={styles.numberText}>1</Text></View>
            <View style={[styles.verticalPhotoBox, {bottom: '5cm', left: '1cm'}]}><Text style={styles.numberText}>2</Text></View>
            <View style={[styles.verticalPhotoBox, {bottom: '5cm', right: '1cm'}]}><Text style={styles.numberText}>3</Text></View>
        </View>
    ),
    (
        <View style={styles.container}>
            <View style={[styles.horizontalPhotoBox, {bottom: '5cm', left: '3.5cm'}]}><Text style={styles.numberText}>3</Text></View>
            <View style={[styles.verticalPhotoBox, {bottom: '12cm', left: '1cm'}]}><Text style={styles.numberText}>1</Text></View>
            <View style={[styles.verticalPhotoBox, {bottom: '12cm', right: '1cm'}]}><Text style={styles.numberText}>2</Text></View>
        </View>
    ),
];

export default titleLayouts;