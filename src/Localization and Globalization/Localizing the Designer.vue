<script setup lang="ts">
import { Designer, Stimulsoft } from 'stimulsoft-reports-js-vuejs/designer'

var report = new Stimulsoft.Report.StiReport();
report.loadFile("Reports/SimpleList.mrt");

var designerOptions = new Stimulsoft.Designer.StiDesignerOptions();
designerOptions.appearance.fullScreenMode = true;

Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile("public/Localizations/de.xml");

// Add a localization file to the menu and use a custom label. Note that the file will not load until it is chosen
Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile("public/Localizations/ja.xml", false, "MyLabel");

// Add a localization file to the menu and load the file when the designer is started
Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile("public/Localizations/ko.xml", true);

// Add a localization file and set it as the default. The default file will be loaded before the designer starts
Stimulsoft.Base.Localization.StiLocalization.addLocalizationFile("public/Localizations/pt.xml", true);
Stimulsoft.Base.Localization.StiLocalization.cultureName = 'Portuguese';
</script>

<template>
    <Designer :report="report" :options="designerOptions" />
</template>

<style scoped></style>
