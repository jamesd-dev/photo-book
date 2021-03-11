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
    },
    numberText: {
        fontFamily: 'Libre Baskerville',
    }
});

const titleLayouts = [
    (
        <View style={styles.container}>
            <View style={[styles.horizontalPhotoBox, {top: '5mm', left: '3.5cm'}]}><Text style={styles.numberText}>1</Text></View>
            <View style={[styles.verticalPhotoBox, {top: '75mm', left: '1cm'}]}><Text style={styles.numberText}>2</Text></View>
            <View style={[styles.verticalPhotoBox, {top: '75mm', right: '1cm'}]}><Text style={styles.numberText}>3</Text></View>
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