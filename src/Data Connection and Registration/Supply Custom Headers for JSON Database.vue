<script setup lang="ts">
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/viewer'

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Reports/MasterDetail.mrt");

report.onBeginProcessData = function (args) {
    if (args.database === "JSON" && args.command === "GetData") {
        // Add custom header to pass through backend server protection
        args.headers.push({ key: "X-Auth-Token", value: "*YOUR TOKEN*" });
    }
};

var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
viewerOptions.appearance.fullScreenMode = true;
</script>

<template>
    <Viewer :report="report" :options="viewerOptions" />
</template>

<style scoped></style>
