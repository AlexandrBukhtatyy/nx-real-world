import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, MainComponent],
  exports: [HeaderComponent, FooterComponent, MainComponent],
})
export class FrontendUiModule {}
