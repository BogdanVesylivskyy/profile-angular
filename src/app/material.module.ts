import {NgModule} from '@angular/core';
import {
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
  } from '@angular/material';


@NgModule({
    imports: [
    ],
    exports: [
        MatCardModule,
        MatPaginatorModule,
        MatTableModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
  })
  export class MaterialModule {}
