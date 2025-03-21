<script setup lang="ts">
import { Designer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/designer'

var report = new Stimulsoft.Report.StiReport();
report.loadFile("SimpleList.mrt");

var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
designerOptions.appearance.theme = Stimulsoft.Designer.StiDesignerTheme.Office2022WhiteViolet;
designerOptions.appearance.fullScreenMode = true;
</script>

<template>
    <Designer :report="report" :options="designerOptions" />
</template>

<style scoped></style>
