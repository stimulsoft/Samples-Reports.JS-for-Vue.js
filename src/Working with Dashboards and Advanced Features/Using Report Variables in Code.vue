<script setup lang="ts">
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/viewer'

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Reports/Variables.mrt");

report.setVariable("Name", "Andrew");
report.setVariable("Surname", "Fox");
report.setVariable("Email", "email@dot.com");
report.setVariable("Address", "Address");
report.setVariable("Sex", true);
report.setVariable("BirthDay", Stimulsoft.System.DateTime.fromString("10.10.2010"));

</script>

<template>
    <Viewer :report="report" />
</template>

<style scoped></style>
