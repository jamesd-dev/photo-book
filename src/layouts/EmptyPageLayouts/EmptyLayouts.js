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

const emptyLayouts = [
    (
        <View style={styles.container}>
            <View style={[styles.verticalPhotoBox, {top: '15mm', left: '1cm'}]}><Text style={styles.numberText}>4</Text></View>
            <View style={[styles.verticalPhotoBox, {top: '25mm', right: '1cm'}]}><Text style={styles.numberText}>5</Text></View>
            <View style={[styles.verticalPhotoBox, {top: '105mm', left: '1cm'}]}><Text style={styles.numberText}>6</Text></View>
            <View style={[styles.verticalPhotoBox, {top: '115mm', right: '1cm'}]}><Text style={styles.numberText}>7</Text></View>
        </View>
    ),
    (
        <View style={styles.container}>
            <View style={[styles.verticalPhotoBox, {top: '15mm', right: '1cm'}]}><Text style={styles.numberText}>4</Text></View>
            <View style={[styles.verticalPhotoBox, {top: '25mm', left: '1cm'}]}><Text style={styles.numberText}>5</Text></View>
            <View style={[styles.verticalPhotoBox, {top: '105mm', right: '1cm'}]}><Text style={styles.numberText}>6</Text></View>
            <View style={[styles.verticalPhotoBox, {top: '115mm', left: '1cm'}]}><Text style={styles.numberText}>7</Text></View>
        </View>
    ),
    (
        <View style={styles.container}>
            <View style={[styles.horizontalPhotoBox, {top: '5mm', right: '1cm'}]}><Text style={styles.numberText}>4</Text></View>
            <View style={[styles.horizontalPhotoBox, {top: '75mm', left: '3.5cm'}]}><Text style={styles.numberText}>5</Text></View>
            <View style={[styles.horizontalPhotoBox, {bottom: '5mm', left: '1cm'}]}><Text style={styles.numberText}>6</Text></View>
        </View>
    ),
    (
        <View style={styles.container}>
            <View style={[styles.horizontalPhotoBox, {top: '5mm', left: '1cm'}]}><Text style={styles.numberText}>4</Text></View>
            <View style={[styles.horizontalPhotoBox, {top: '75mm', left: '3.5cm'}]}><Text style={styles.numberText}>5</Text></View>
            <View style={[styles.horizontalPhotoBox, {bottom: '5mm', right: '1cm'}]}><Text style={styles.numberText}>6</Text></View>
        </View>
    ),
];

export default emptyLayouts;