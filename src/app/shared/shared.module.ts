import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InfoComponent } from './components/info/info.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [HeaderComponent, ButtonComponent, CardComponent, InfoComponent, ModalComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ButtonComponent, CardComponent, InfoComponent, ModalComponent],
})
export class SharedModule {}
