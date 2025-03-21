<script setup lang="ts">
import { Stimulsoft } from 'stimulsoft-reports-js-vuejs'

async function exportPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.renderedPages.clear();
    report.reportUnit = Stimulsoft.Report.StiReportUnitType.HundredthsOfInch;

    var tempReport = new Stimulsoft.Report.StiReport();
    for (var index = 0; index < 6; index++) {
        tempReport.loadDocumentFile("MasterDetailSubdetail.mdc");

        for (var page of tempReport.renderedPages.list) {
            page.report = tempReport;
            page.guid = Stimulsoft.System.Guid.newGuidString();
            report.renderedPages.add(page);
        }
    }

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + ".pdf", "application/pdf");
}
</script>

<template>
    <button @click="exportPdf">Export PDF (about 400 pages)</button>
</template>

<style scoped></style>
