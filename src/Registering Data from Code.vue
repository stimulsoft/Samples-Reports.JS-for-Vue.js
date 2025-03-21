<script setup lang="ts">
import { ref } from 'vue';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/viewer'

var report = ref<Stimulsoft.Report.StiReport>(null);

function updateReport(dataSet: Stimulsoft.System.Data.DataSet) {
    var newReport = new Stimulsoft.Report.StiReport();
    newReport.loadFile("TwoSimpleLists.mrt");
    newReport.dictionary.databases.clear();
    newReport.regData("Demo", "Demo", dataSet);
    report.value = newReport;
}

function buttonXmlClick() {
    var dataSet = new Stimulsoft.System.Data.DataSet();
    dataSet.readXmlSchemaFile("Demo.xsd");
    dataSet.readXmlFile("Demo.xml");

    updateReport(dataSet);
}

function buttonJsonClick() {
    var dataSet = new Stimulsoft.System.Data.DataSet();
    dataSet.readJsonFile("Demo.json");

    updateReport(dataSet);
}

</script>

<template>
    <div>
        <button @click=buttonXmlClick>Register XML Data</button>
        <button @click=buttonJsonClick>Register JSON Data</button>
        <Viewer :report=report />
    </div>
</template>

<style scoped></style>