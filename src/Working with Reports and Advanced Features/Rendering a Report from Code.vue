<script setup lang="ts">
import { Stimulsoft } from 'stimulsoft-reports-js-vuejs'

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Reports/SimpleList.mrt");

async function renderReport() {
    await report.renderAsync2();

    document.getElementById("message").innerText = "The report rendering is completed. Pages: " + report.renderedPages.count;
    document.getElementById("reportJson").innerText = report.saveDocumentToJsonString();
}
</script>

<template>
    <div>
        <button @click=renderReport>Render the Report</button>
        <br /><br />
        <div id="message"></div>
        <pre id="reportJson"></pre>
    </div>
</template>

<style scoped></style>
