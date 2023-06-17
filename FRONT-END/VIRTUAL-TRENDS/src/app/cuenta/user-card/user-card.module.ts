import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserCardComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  exports: [UserCardComponent]
})
export class UserCardModule { }
