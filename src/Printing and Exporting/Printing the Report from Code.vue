<script setup lang="ts">
import { Stimulsoft } from 'stimulsoft-reports-js-vuejs'
import '../styles.css';

function printPdf_Click() {
    report.printToPdf();
}

function printHtml_Click() {
    report.print();
}

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Reports/SimpleList.mrt");

</script>

<template>
    <div class="container">
        <h4>This sample demonstrates how to print a report:</h4>
        <div class="container-button">
            <button @click="printPdf_Click" class="button" title="Print Report as PDF File">Print PDF</button>
            <button @click="printHtml_Click" class="button" title="Print Report as HTML File">Print HTML</button>
        </div>
    </div>
</template>

<style scoped></style>
