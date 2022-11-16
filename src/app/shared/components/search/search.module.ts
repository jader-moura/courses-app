import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [SearchComponent],
})
export class SearchModule {}
