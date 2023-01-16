import { NgModule                   } from '@angular/core';
import { BrowserModule              } from '@angular/platform-browser';
import { HttpClientModule           } from '@angular/common/http';
import { ButtonsModule              } from 'ngx-bootstrap/buttons';
import { FormsModule                } from '@angular/forms';

import { AppComponent               } from './app.component';
import { AppRoutingModule           } from './app-routing.module';
import { AccountsModule             } from './accounts/accounts.module';

import { BookingsModule             } from './bookings/bookings.module';
import { AnimalsModule              } from './animals/animals.module';
import { NavbarComponent            } from './navbar/navbar.component';
import { HomepageComponent          } from './homepage/homepage.component';
import { DashboardComponent         } from './dashboard/dashboard.component';
import { PageNotFoundComponent      } from './pagenotfound/pagenotfound.component';
import { CustomUiModule             } from '@custom-ui/custom-ui.module';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomepageComponent,
        DashboardComponent,
        PageNotFoundComponent
    ],
    providers: [
    //Injecting at a module level means one service is shared for ALL components within this module
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ButtonsModule,
        FormsModule,
        AccountsModule,
        BookingsModule,
        AnimalsModule,
        CustomUiModule
    ]
})
export class AppModule { }
