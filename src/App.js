import React from "react";
import PhotoPage from "./Page";
import {Document, PDFViewer, StyleSheet, Font} from "@react-pdf/renderer";
import libreBaskerville from './fonts/libre-baskerville.ttf';
import montserrat from './fonts/montserrat.ttf';

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

function App() {

    const { pages } = require('./content.json');

  return (
      <PDFViewer style={styles.viewer}>
          <Document>
              {pages.map((page, index) =>
                  <PhotoPage index={index} page={page}/>
              )}
          </Document>
      </PDFViewer>
  )
}

export default App;
