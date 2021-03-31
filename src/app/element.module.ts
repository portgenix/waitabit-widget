import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Injector, NgModule } from '@angular/core'

import { createCustomElement } from '@angular/elements'
import { WaitabitModule, WaitabitWidgetComponent, WaitabitConfigComponent } from './waitabit/'

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, WaitabitModule],
  exports: [WaitabitModule]
})
export class ElementModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const waitabitConfig = <any>createCustomElement(WaitabitConfigComponent, {
      injector: this.injector,
    })
    const waitabitWidget = <any>createCustomElement(WaitabitWidgetComponent, {
      injector: this.injector,
    })
    customElements.define('waitabit-config', waitabitConfig)
    customElements.define('waitabit-widget', waitabitWidget)

    waitabitConfig.addEventListener(
      'themeChange',
      (evt) => (waitabitWidget.theme = evt.detail),
    )
    
  }
}
