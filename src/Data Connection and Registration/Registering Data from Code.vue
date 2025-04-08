<script setup lang="ts">
import { ref } from 'vue';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/viewer'
import '../styles.css';

var report = ref<Stimulsoft.Report.StiReport>(null);

function updateReport(dataSet: Stimulsoft.System.Data.DataSet) {
    var newReport = new Stimulsoft.Report.StiReport();
    newReport.loadFile("Reports/TwoSimpleLists.mrt");
    newReport.dictionary.databases.clear();
    newReport.regData("Demo", "Demo", dataSet);
    report.value = newReport;
}

function buttonXmlClick() {
    var dataSet = new Stimulsoft.System.Data.DataSet();
    dataSet.readXmlSchemaFile("Data/Demo.xsd");
    dataSet.readXmlFile("Data/Demo.xml");

    updateReport(dataSet);
}

function buttonJsonClick() {
    var dataSet = new Stimulsoft.System.Data.DataSet();
    dataSet.readJsonFile("Data/Demo.json");

    updateReport(dataSet);
}

</script>

<template>
    <div class="container">
        <div class="container-button">
            <button @click="buttonXmlClick" class="button" title="Using regData() method for registering XML data">Register XML Data</button>
            <button @click="buttonJsonClick" class="button" title="Using regData() method for registering JSON data">Register JSON Data</button>
        </div>
        <div>
            <Viewer :report="report" />
        </div>
    </div>
</template>

<style scoped></style>