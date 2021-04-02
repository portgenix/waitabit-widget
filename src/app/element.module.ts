import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Injector, NgModule } from '@angular/core'

import { createCustomElement } from '@angular/elements'
import { WaitabitModule, WaitabitWidgetComponent, WaitabitConfigComponent } from './waitabit/'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [WaitabitWidgetComponent, WaitabitConfigComponent],
  imports: [BrowserModule, BrowserAnimationsModule, WaitabitModule,FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule],
  exports: [WaitabitModule],
  entryComponents:[
    WaitabitWidgetComponent, WaitabitConfigComponent
  ]
})
export class ElementModule {
  constructor(private injector: Injector) {
    const waitabitConfig = createCustomElement(WaitabitConfigComponent, {injector})
    customElements.define('waitabit-config', waitabitConfig)
    
    const waitabitWidget = createCustomElement(WaitabitWidgetComponent, {injector})
    customElements.define('waitabit-widget', waitabitWidget)
  }

  ngDoBootstrap() {
  }
}
