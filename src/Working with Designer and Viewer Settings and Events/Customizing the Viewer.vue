<script setup lang="ts">
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/viewer'

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Reports/SimpleList.mrt");

var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
viewerOptions.appearance.theme = Stimulsoft.Viewer.StiViewerTheme.Office2022LightGrayTeal;
viewerOptions.appearance.fullScreenMode = true;
viewerOptions.toolbar.showOpenButton = false;
viewerOptions.exports.showExportToPdf = false;
</script>

<template>
    <Viewer :report="report" :options="viewerOptions" />
</template>

<style scoped></style>
