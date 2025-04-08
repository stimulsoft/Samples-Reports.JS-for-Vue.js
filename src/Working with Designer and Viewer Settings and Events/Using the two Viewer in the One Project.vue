<script setup lang="ts">
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/viewer';
import '../styles.css';

var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
viewerOptions.appearance.scrollbarsMode = true;
viewerOptions.height = '100vh';

var report1 = new Stimulsoft.Report.StiReport();
report1.loadFile('Reports/SimpleList.mrt');

var report2 = new Stimulsoft.Report.StiReport();
report2.loadFile('Reports/TwoSimpleLists.mrt');
</script>

<template>
    <div class="container">
        <h4>This sample demonstrates how to add two viewers to one page:</h4>
        <div class="container-viewer">
            <Viewer :report="report1" :options="viewerOptions" />
            <Viewer :report="report2" :options="viewerOptions" />
        </div>
    </div>
</template>

<style scoped></style>
