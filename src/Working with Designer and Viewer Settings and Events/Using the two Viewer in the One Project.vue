<script setup lang="ts">
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/viewer'

var report1 = new Stimulsoft.Report.StiReport();
report1.loadFile("Reports/SimpleList.mrt");

var report2 = new Stimulsoft.Report.StiReport();
report2.loadFile("Reports/TwoSimpleLists.mrt");
</script>

<template>
    <div>
        <div :style="{ width: '50%', display: 'inline-block' }">
            <Viewer :report=report1 />
        </div>
        <div :style="{ width: '50%', display: 'inline-block' }">
            <Viewer :report=report2 />
        </div>
    </div>
</template>

<style scoped></style>