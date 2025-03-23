<script setup lang="ts">
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/viewer'

function onEmailReport(args: Stimulsoft.Viewer.EmailReportArgs) {
    alert(`Email: ${args.settings.email} File name:${args.fileName}`);
}

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Reports/SimpleList.mrt");

var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
viewerOptions.toolbar.showSendEmailButton = true;
</script>

<template>
    <Viewer :report="report" :options="viewerOptions" @email-report=onEmailReport />
</template>

<style scoped></style>
