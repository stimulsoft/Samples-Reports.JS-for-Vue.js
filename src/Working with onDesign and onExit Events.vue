<script setup lang="ts">
import { ref } from 'vue';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/viewer'
import { Designer } from 'stimulsoft-reports-js-vuejs/designer'


function onDesignReport(args: Stimulsoft.Viewer.DesignReportArgs) {
    isViewer.value = false;
}

function onOpenedReport(args: Stimulsoft.Viewer.OpenedReportArgs) {
    report = args.report;
}

async function onExitDesigner() {
    await report.renderAsync2();
    isViewer.value = true;
}

function onAssignedReport(args: Stimulsoft.Designer.AssignedReportArgs) {
    report = args.report;
}

const isViewer = ref(true);

var report = new Stimulsoft.Report.StiReport();
report.loadFile("SimpleList.mrt");

var viewerOptions = new Stimulsoft.Viewer.StiViewerOptions();
viewerOptions.appearance.fullScreenMode = true;
viewerOptions.toolbar.displayMode = Stimulsoft.Viewer.StiToolbarDisplayMode.Separated;
viewerOptions.toolbar.showFullScreenButton = false;
viewerOptions.toolbar.showDesignButton = true;

var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
designerOptions.appearance.fullScreenMode = true;
designerOptions.toolbar.showFileMenuExit = true;
</script>

<template>
    <Viewer v-if="isViewer" :options=viewerOptions :report=report @design-report=onDesignReport
        @opened-report=onOpenedReport />
    <Designer v-else :options=designerOptions :report=report @exit=onExitDesigner @assigned-report=onAssignedReport />
</template>

<style scoped></style>
