import { NgModule                 } from '@angular/core';
import { CommonModule             } from '@angular/common';
import { AccountManagerComponent  } from './account-manager/account-manager.component';
import { AccountCreatorComponent  } from './account-creator/account-creator.component';
import { CustomUiModule           } from '@custom-ui/custom-ui.module';

@NgModule({
    declarations: [
        AccountManagerComponent,
        AccountCreatorComponent
    ],
    imports: [
        CommonModule,
        CustomUiModule
    ]
})
export class AccountsModule { }
