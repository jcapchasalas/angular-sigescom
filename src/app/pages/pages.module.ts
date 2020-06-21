import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// RUTAS
import { PAGES_ROUTES } from './pages.routes';

// MODULO IMPORTADOS
import { SharedModule } from '../shared/shared.module';

// NG2 - CHARTS
import { ChartsModule } from 'ng2-charts';

// COMPONENTES
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// COMPONENTES TEMPORAL
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],

    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],

    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ],
})

export class PagesModule { }
