import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue';

import LocalizingTheDesigner from './Localizing the Designer.vue';
import LocalizingTheViewer from './Localizing the Viewer.vue';
import GlobalizingReport from './Globalizing Report.vue';

import UsingCustomFont from './Using a Custom Font.vue';
import AddingFontToTheResource from './Adding a Font to the Resource.vue';

import PrintingTheReportFromCode from './Printing the Report from Code.vue';
import ExportingReportToPDF from './Exporting a Report to PDF.vue';
import ExportingReportToHTML from './Exporting a Report to HTML.vue';
import ExportingReportFromCodeWithChangingExportSettings from './Exporting a Report from Code with Changing Export Settings.vue';
import ExportingManyFilesToSinglePDF from './Exporting Many Files to Single PDF.vue';

import CreatingNewDataConnectionFromCode from './Creating a new Data Connection from code.vue';
import RegisteringDataFromCode from './Registering Data from Code.vue';
import UsingSqlDataSources from './Using SQL Data Sources.vue';
import UsingParametersInSqlQuery from './Using Parameters in SQL Query.vue';
import UsingCustomDataAdapter from './Using a Custom Data Adapter.vue';
import SupplyCustomHeadersForJsonDatabase from './Supply Custom Headers for JSON Database.vue';

import CustomizingTheDesigner from './Customizing the Designer.vue';
import ChangingTheDesignerTheme from './Changing the Designer Theme.vue';
import CustomizingTheViewer from './Customizing the Viewer.vue';
import ChangingTheViewerTheme from './Changing the Viewer Theme.vue';
import ShowingReportInTheViewerWithoutToolbar from './Showing a Report in the Viewer without Toolbar.vue';
import UsingDesignerEvents from './Using Designer Events.vue';
import UsingViewerEvents from './Using Viewer Events.vue';
import WorkingWithOnDesignAndOnExitEvents from './Working with onDesign and onExit Events.vue';
import UsingTheTwoViewerInTheOneProject from './Using the two Viewer in the One Project.vue';
import GetModifiedReportFromTheDesigner from './Get a modified Report from the Designer.vue';
import UsingTheRightToLeftModeInTheViewer from './Using the Right-To-Left Mode in the Viewer.vue';

import HowToActivateTheProduct from './How to Activate the Product.vue';
import RenderingReportFromCode from './Rendering a Report from Code.vue';
import UsingReportVariablesInCode from './Using Report Variables in Code.vue';
import CreatingReportAtRuntime from './Creating Report at Runtime.vue';

import ListSamples from './ListSamples.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ListSamples },

        { path: '/Localizing_the_Designer', component: LocalizingTheDesigner },
        { path: '/Localizing_the_Viewer', component: LocalizingTheViewer },
        { path: '/Globalizing_Report', component: GlobalizingReport },

        { path: '/Using_Custom_Font', component: UsingCustomFont },
        { path: '/Adding_a_Font_to_the_Resource', component: AddingFontToTheResource },

        { path: '/Printing_the_Report_from_Code', component: PrintingTheReportFromCode },
        { path: '/Exporting_a_Report_to_PDF', component: ExportingReportToPDF },
        { path: '/Exporting_a_Report_to_HTML', component: ExportingReportToHTML },
        { path: '/Exporting_a_Report_from_Code_with_Changing_Export_Settings', component: ExportingReportFromCodeWithChangingExportSettings },
        { path: '/Exporting_Many_Files_to_Single_PDF', component: ExportingManyFilesToSinglePDF },

        { path: '/Creating_a_new_Data_Connection_from_code', component: CreatingNewDataConnectionFromCode },
        { path: '/Registering_Data_from_Code', component: RegisteringDataFromCode },
        { path: '/Using_SQL_Data_Sources', component: UsingSqlDataSources },
        { path: '/Using_Parameters_in_SQL_Query', component: UsingParametersInSqlQuery },
        { path: '/Using_a_Custom_Data_Adapter', component: UsingCustomDataAdapter },
        { path: '/Supply_Custom_Headers_for_JSON_Database', component: SupplyCustomHeadersForJsonDatabase },

        { path: '/Customizing_the_Designer', component: CustomizingTheDesigner },
        { path: '/Changing_the_Designer_Theme', component: ChangingTheDesignerTheme },
        { path: '/Customizing_the_Viewer', component: CustomizingTheViewer },
        { path: '/Changing_the_Viewer_Theme', component: ChangingTheViewerTheme },
        { path: '/Showing_a_Report_in_the_Viewer_without_Toolbar', component: ShowingReportInTheViewerWithoutToolbar },
        { path: '/Using_Designer_Events', component: UsingDesignerEvents },
        { path: '/Using_Viewer_Events', component: UsingViewerEvents },
        { path: '/Working_with_onDesign_and_onExit_Events', component: WorkingWithOnDesignAndOnExitEvents },
        { path: '/Using_the_two_Viewer_in_the_One_Project', component: UsingTheTwoViewerInTheOneProject },
        { path: '/Get_a_modified_Report_from_the_Designer', component: GetModifiedReportFromTheDesigner },
        { path: '/Using_the_Right-To-Left_Mode_in_the_Viewer', component: UsingTheRightToLeftModeInTheViewer },

        { path: '/How_to_Activate_the_Product', component: HowToActivateTheProduct },
        { path: '/Rendering_a_Report_from_Code', component: RenderingReportFromCode },
        { path: '/Using_Report_Variables_in_Code', component: UsingReportVariablesInCode },
        { path: '/Creating_Report_at_Runtime', component: CreatingReportAtRuntime }
    ]
})

createApp(App)
    .use(router)
    .mount('#app');

