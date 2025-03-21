<script setup lang="ts">
import { ref, watch } from 'vue';
import { Viewer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/viewer'

var selectedCountry = ref('en-US');
var report: Stimulsoft.Report.StiReport;

watch(selectedCountry, () => {
    const locFile = selectedCountry.value.substring(0, 2) + ".xml";
    Stimulsoft.Base.Localization.StiLocalization.setLocalizationFile(locFile);

    report = new Stimulsoft.Report.StiReport();
    report.loadFile("Globalization.mrt");
    report.culture = selectedCountry.value;
}, { immediate: true });

</script>

<template>
    <div>
        <label :style="{ fontSize: '14px' }">
            Select Country
            <select v-model="selectedCountry">
                <option value="en-US">United States</option>
                <option value="de-DE">Germany</option>
                <option value="ru-RU">Russia</option>
            </select>
        </label>
        <Viewer :report="report" />
    </div>
</template>

<style scoped></style>