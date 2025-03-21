<script setup lang="ts">
import { Stimulsoft } from 'stimulsoft-reports-js-vuejs'

function printPdf_Click() {
    report.printToPdf();
}

function printHtml_Click() {
    report.print();
}

var report = new Stimulsoft.Report.StiReport();
report.loadFile("SimpleList.mrt");

</script>

<template>
    <button @click=printPdf_Click>Print Report as PDF</button>
    <button @click=printHtml_Click>Print Report as HTML</button>
</template>

<style scoped></style>
