import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { WaitabitWidgetComponent } from './waitabit-widget/waitabit-widget.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { WaitabitConfigComponent } from './waitabit-config/waitabit-config.component';



@NgModule({
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule],
  //declarations: [ WaitabitWidgetComponent, WaitabitConfigComponent],
  //exports: [WaitabitWidgetComponent, WaitabitConfigComponent],
  //entryComponents: [WaitabitWidgetComponent, WaitabitConfigComponent],
})
export class WaitabitModule {}
