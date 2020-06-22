import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// PIPES MODULE
import { PipesModule } from '../pipes/pipes.module';

@NgModule({

    imports: [
        RouterModule,
        CommonModule,
        PipesModule
    ],

    declarations: [
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        NopagefoundComponent
    ],

    exports: [
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        NopagefoundComponent
    ]
})

export class SharedModule {}
