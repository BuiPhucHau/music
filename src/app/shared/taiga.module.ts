import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiDialogModule,
  TuiAlertModule,
  TuiTextfieldControllerModule,
  TuiModeModule,
} from '@taiga-ui/core';
import {
  TuiAccordionModule,
  TuiComboBoxModule,
  TuiInputDateRangeModule,
  TuiInputMonthModule,
  TuiInputTagModule,
  TuiMarkerIconModule,
  TuiSliderModule,
  TuiSortCountriesPipeModule,
  TuiStringifyContentPipeModule,
  TuiTabsModule,
} from '@taiga-ui/kit';

import {
  TuiActiveZoneModule,
  TuiFilterPipeModule,
  TuiMapperPipeModule,
  TuiValidatorModule,
} from '@taiga-ui/cdk';
import { TuiBadgeModule } from '@taiga-ui/kit';
import { TuiAutoFocusModule } from '@taiga-ui/cdk';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { TuiGroupModule } from '@taiga-ui/core';
import { TuiCarouselModule } from '@taiga-ui/kit';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiTagModule } from '@taiga-ui/kit';
import { TuiPaginationModule } from '@taiga-ui/kit';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { TuiDataListModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule } from '@taiga-ui/kit';
import { TuiSelectModule } from '@taiga-ui/kit';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiCheckboxModule } from '@taiga-ui/kit';
import { TuiFieldErrorPipeModule } from '@taiga-ui/kit';
import { TuiErrorModule } from '@taiga-ui/core';
import { TuiInputSliderModule } from '@taiga-ui/kit';
import { TuiInputNumberModule } from '@taiga-ui/kit';
import { TuiInputDateModule } from '@taiga-ui/kit';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiInputPhoneModule } from '@taiga-ui/kit';
import { TuiRadioBlockModule } from '@taiga-ui/kit';
import { TuiInputTimeModule } from '@taiga-ui/kit';
import { TuiCheckboxLabeledModule } from '@taiga-ui/kit';
import { TuiTooltipModule, TuiHintModule } from '@taiga-ui/core';
import { TuiPrimitiveCheckboxModule } from '@taiga-ui/core';
import { TuiLoaderModule } from '@taiga-ui/core';
import { TuiNotificationModule } from '@taiga-ui/core';
import { TuiInputFilesModule } from '@taiga-ui/kit';
import { TuiLabelModule } from '@taiga-ui/core';
import { TuiPrimitiveTextfieldModule } from '@taiga-ui/core';
import { TuiHostedDropdownModule } from '@taiga-ui/core';
import { TuiDropdownModule } from '@taiga-ui/core';
import { TuiFilterByInputPipeModule } from '@taiga-ui/kit';
import { TuiExpandModule } from '@taiga-ui/core';
import { TuiRatingModule } from '@taiga-ui/kit';
import { TuiInputDateTimeModule } from '@taiga-ui/kit';
import { TuiActionModule } from '@taiga-ui/kit';
import { TuiTilesModule } from '@taiga-ui/kit';
import { TuiRadioLabeledModule } from '@taiga-ui/kit';
import { TuiTextareaModule } from '@taiga-ui/kit';
import { TuiRangeModule } from '@taiga-ui/kit';
import { TuiStepperModule } from '@taiga-ui/kit';
import { TuiInputPhoneInternationalModule } from '@taiga-ui/kit';
import { TuiToggleModule } from '@taiga-ui/kit';
import { TuiLinkModule } from '@taiga-ui/core';
import { TuiMediaModule } from '@taiga-ui/cdk';
import { TuiProgressModule } from '@taiga-ui/kit';
import { TuiMultiSelectModule } from '@taiga-ui/kit';
import { TuiLineClampModule } from '@taiga-ui/kit';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';

const TaigaModules = [
  TuiInputModule,
  TuiInputNumberModule,
  TuiInputDateModule,
  TuiInputPasswordModule,
  TuiInputPhoneModule,
  TuiInputTimeModule,
  TuiInputDateTimeModule,
  TuiInputSliderModule,
  TuiInputMonthModule,
  TuiInputTagModule,
  TuiInputFilesModule,
  TuiTextareaModule,
  TuiInputDateRangeModule,
  TuiInputPhoneInternationalModule,

  TuiButtonModule,
  TuiActionModule,

  TuiCheckboxModule,
  TuiCheckboxLabeledModule,
  TuiPrimitiveCheckboxModule,
  TuiComboBoxModule,

  TuiRadioBlockModule,
  TuiRadioLabeledModule,
  TuiSelectModule,
  TuiMultiSelectModule,
  TuiDialogModule,
  TuiHintModule,
  TuiTooltipModule,
  TuiToggleModule,
  TuiAlertModule,
  TuiBadgeModule,
  TuiSvgModule,
  TuiAvatarModule,
  TuiGroupModule,
  TuiCarouselModule,
  TuiIslandModule,
  TuiTagModule,
  TuiPaginationModule,
  TuiScrollbarModule,
  TuiDataListModule,
  TuiDataListWrapperModule,
  TuiAccordionModule,
  TuiTabsModule,
  TuiFilterPipeModule,
  TuiFilterByInputPipeModule,
  TuiMapperPipeModule,
  TuiValidatorModule,
  TuiAutoFocusModule,
  TuiErrorModule,
  TuiLoaderModule,
  TuiNotificationModule,
  TuiLabelModule,

  TuiTextfieldControllerModule,
  TuiPrimitiveTextfieldModule,
  TuiFieldErrorPipeModule,

  TuiDropdownModule,
  TuiHostedDropdownModule,

  TuiExpandModule,
  TuiRatingModule,
  TuiTilesModule,
  TuiRangeModule,
  TuiStepperModule,
  TuiLinkModule,
  TuiMediaModule,
  TuiProgressModule,
  TuiLineClampModule,
  TuiMarkerIconModule,
  TuiSliderModule,
  TuiSortCountriesPipeModule,
  TuiStringifyContentPipeModule,
  TuiModeModule,
  TuiActiveZoneModule,
  TuiLetModule,
  TuiSidebarModule,

];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...TaigaModules],
  exports: [...TaigaModules],
})
export class TaigaModule { }