<script setup lang="ts">
import { Stimulsoft } from 'stimulsoft-reports-js-vuejs'
import '../styles.css';

async function saveReportPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.loadFile("Reports/SimpleList.mrt");

    await report.renderAsync2();

    var settings = new Stimulsoft.Report.Export.StiPdfExportSettings();
    settings.creatorString = 'My Company Name';
    settings.keywordsString = 'SimpleList Report Export';
    settings.embeddedFonts = false;
    settings.passwordInputUser = "123";

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf, null, settings);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
}
</script>

<template>
    <div class="container">
        <h4>This example shows how to export a report to a PDF file and adjust the export settings via code. Please, enter the password <b>123</b> to show report</h4>
        <div class="container-button">
            <button @click="saveReportPdf" class="button" title="Export Report to PDF File">Export to PDF</button>
        </div>
    </div>
</template>

<style scoped></style>
