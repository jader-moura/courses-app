import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/course-card/course-card.component';
import { InfoComponent } from './components/info/info.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    InfoComponent,
    ModalComponent,
    FormComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    InfoComponent,
    ModalComponent,
    FormComponent,
  ],
})
export class SharedModule {}
