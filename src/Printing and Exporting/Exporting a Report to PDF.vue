<script setup lang="ts">
import { Stimulsoft } from 'stimulsoft-reports-js-vuejs'

async function saveReportPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile("Reports/SimpleList.mrt");

    await report.renderAsync2();

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
}
</script>

<template>
    <button @click="saveReportPdf">Export and Save PDF report to file</button>
</template>

<style scoped></style>