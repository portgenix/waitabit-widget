import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
<div style="background-color:#F7F7F9;padding-top:40px;">
 <div style=" auto;margin-left:10%;margin-right:10%;">
  <div class="row">

    <div class="col-lg-8">
    <h5> Widget Apperance</h5>
  </div>
  <div class="col-lg-4">
  <h6> Customize</h6>
  </div>
</div>
  <div class="row" >
  
    <div class="col-6"style="padding: 25px 25px 25px 25px;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);background-color:white;border:1px solid #ebe9e9;" >
    
    <waitabit-widget [widgetSettings]="widgetSettings"></waitabit-widget>
    </div>
    <div class="col-5 " style="margin-left:4%;padding:4px;background-color:white;border:1px solid #ebe9e9;
  ">
      <waitabit-config [(widgetSettings)]="widgetSettings"></waitabit-config>
    </div>
  </div>
</div>
</div>
 



  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  public widgetSettings = {
    waitlistTitle: 'Get Early Access',
    primaryColor: '#4051B5',
    buttonText: 'Join Waitlist!',
    buttonPosition: 'right',
    apiToken: 'Pd5bfee5b',
    widgetPosition: 'left',
    pageDisplay: 'singlePage',
    thankyouTitle: 'Thank you for joining the waitlist',
    descriptionText: 'Want to move up in line and get access earlier? Skip ahead by referring friends!',
    socialShareLink: ["Facebook", "Twitter", "Linkedin", "Email"]

  };
}
