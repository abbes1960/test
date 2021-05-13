import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [HeaderComponent, TestComponent],
  imports: [IonicModule, CommonModule],
  exports: [HeaderComponent, TestComponent],
})
export class ComponentsModule {}
