<script setup lang="ts">
import { ref } from 'vue';
import { Stimulsoft } from 'stimulsoft-reports-js-vuejs';
import '../styles.css';

const isLoading = ref(false);

async function exportPdf() {
    var report = new Stimulsoft.Report.StiReport();
    report.renderedPages.clear();
    report.reportUnit = Stimulsoft.Report.StiReportUnitType.HundredthsOfInch;

    var tempReport = new Stimulsoft.Report.StiReport();
    for (var index = 0; index < 6; index++) {
        tempReport.loadDocumentFile('Reports/MasterDetailSubdetail.mdc');

        for (var page of tempReport.renderedPages.list) {
            page.report = tempReport;
            page.guid = Stimulsoft.System.Guid.newGuidString();
            report.renderedPages.add(page);
        }
    }

    var pdfData = await report.exportDocumentAsync2(Stimulsoft.Report.StiExportFormat.Pdf);
    Stimulsoft.System.StiObject.saveAs(pdfData, report.reportAlias + '.pdf', 'application/pdf');
}

const handleClick = () => {
    isLoading.value = true;
    setTimeout(async () => {
        await exportPdf();
        isLoading.value = false;
    }, 0);
};
</script>

<template>
    <div class="container">
        <h4>This sample demonstrates how to export a report to a PDF file and save it:</h4>
        <div class="container-button">
            <button @click="handleClick" :disabled="isLoading" class="button" title="Export Report to PDF File">
                {{ isLoading ? 'Please, wait...' : 'Export to PDF' }}
            </button>
        </div>
    </div>
</template>

<style scoped></style>
