<script setup lang="ts">
import { Designer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/designer';

var report = new Stimulsoft.Report.StiReport();
report.loadFile("CusomFontSimpleList.mrt");

var fileContent = Stimulsoft.System.IO.File.getFile("LongCang-Regular.ttf", true);
var resource = new Stimulsoft.Report.Dictionary.StiResource("LongCang", "LongCang", false, Stimulsoft.Report.Dictionary.StiResourceType.FontTtf, fileContent);
report.dictionary.resources.add(resource);

var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
designerOptions.appearance.fullScreenMode = true;

</script>

<template>
    <Designer :report="report" :options="designerOptions" />
</template>

<style scoped></style>