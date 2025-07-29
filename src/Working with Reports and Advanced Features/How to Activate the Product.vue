<script setup lang="ts">
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/viewer'

// Using one of the functions below to register your license from the JavaScript code

// Stimulsoft.Base.StiLicense.key = '6vJhGtLLLz2GNviWmUTrhSqnO...';
// Stimulsoft.Base.StiLicense.loadFromFile('license.key')

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Reports/SimpleList.mrt");
</script>

<template>
    <Viewer :report="report" />
</template>

<style scoped></style>