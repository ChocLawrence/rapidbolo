import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  DxDataGridModule,
  DxTooltipModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {
  NgbDropdownModule,
  NgbButtonsModule,
  NgbAlertModule,
  NgbDatepickerModule,
  NgbModalModule,
  NgbTooltipModule,
  NgbPopoverModule,
  NgbAccordionModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { HeaderComponent } from './components/header/header.component';
import localeGb from '@angular/common/locales/en-GB';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
registerLocaleData(localeGb);

@NgModule({
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    TranslateModule,
    DxDataGridModule,
    DxTooltipModule,
    DxTemplateModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.4)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
      fullScreenBackdrop: true,
    }),
    NgbDropdownModule,
    NgbButtonsModule,
    NgbAlertModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgbTooltipModule,
    NgbPopoverModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  declarations: [
    ConsoleComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [NgbActiveModal],
})
export class ConsoleModule {}
