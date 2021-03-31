import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'waitabit-config',
  templateUrl: './waitabit-config.component.html',
  styleUrls: ['./waitabit-config.component.css'],
})
export class WaitabitConfigComponent {
  @Output() public widgetSettingsChange: EventEmitter<any> = new EventEmitter()
  linkFormArray: any;
  uiLinkArray: any;
  

  socialShareLinks = [{ link: "Facebook" }, { link: "Twitter" }, { link: "Linkedin" }, { link: 'Email' }, { link: 'Telegram' }];
  myForm: FormGroup;

  @Input() public widgetSettings = {
    waitlistTitle: 'Get Early Access',
    primaryColor: 'blue',
    buttonText: 'Join Waitlist!',
    buttonPosition:'right',
    apiToken: '',
    widgetPosition: 'left',
    pageDisplay:'popup',
    thankyouTitle: '',
    descriptionText: '',
    socialShareLink: ["Facebook", "Twitter", "Linkedin", "Email", "Telegram"]
  };


  


  scriptCode = `
  <script src="./waitabit-widget.js"></script>
  <waitabit-widget id="widget"></waitabit-widget>
  <script>const widget=document.getElementById("widget");widget.widgetSettings={"waitlistTitle":"` + this.widgetSettings.waitlistTitle +  `","primaryColor":"` + this.widgetSettings.primaryColor + `","buttonText":"`+  this.widgetSettings.buttonText+`","apiToken":"`+  this.widgetSettings.apiToken + `","thankyouTitle":"`+ this.widgetSettings.thankyouTitle +`","widgetPosition":"`+ this.widgetSettings.widgetPosition+`",descriptionText:"","socialShareLink":["`+ this.widgetSettings.socialShareLink.join('\", \"') +`"]};</script>
  `


  update() {
    this.widgetSettingsChange.emit(this.widgetSettings);
  }



  constructor(private fb: FormBuilder) {


    this.linkFormArray = []
    this.uiLinkArray = []
    this.widgetSettings.socialShareLink.forEach(element => {
      this.linkFormArray.push(element)
      this.uiLinkArray.push(element)
    });
  }

  onChange(shareLink: string, isChecked: boolean) {
    if (isChecked) {
      this.linkFormArray.push(shareLink);
    } else {
      const index = this.linkFormArray.indexOf(shareLink, 0);
      if (index > -1) {
        this.linkFormArray.splice(index, 1);
      }
    }
    this.widgetSettings.socialShareLink = this.linkFormArray
  }

  generate() {
    this.scriptCode = `
      <link rel="stylesheet" href="https://unpkg.com/bootstrap@4.5.2/dist/css/bootstrap.min.css">
      <script src="https://unpkg.com/jquery@3.5.1/dist/jquery.min.js"/>
      <script src="https://unpkg.com/bootstrap@4.5.2/dist/js/bootstrap.min.js"/>
      <script src="./waitabit-widget.js"/>
      <waitabit-widget id="widget"/></waitabit-widget>
      <script>const widget=document.getElementById("widget");widget.widgetSettings={"waitlistTitle":"` + this.widgetSettings.waitlistTitle +  `","primaryColor":"` + this.widgetSettings.primaryColor + `","buttonText":"`+  this.widgetSettings.buttonText+`","apiToken":"`+  this.widgetSettings.apiToken + `","thankyouTitle":"`+ this.widgetSettings.thankyouTitle +`","widgetPosition":"`+ this.widgetSettings.widgetPosition+`",descriptionText:"","socialShareLink":["`+ this.widgetSettings.socialShareLink.join('\", \"') +`"]};</script>
      `
  }

  changed(value) {
    this.widgetSettings.buttonPosition = value;
  }
  onItemChange(value){
    this.widgetSettings.pageDisplay = value;
    console.log( this.widgetSettings.pageDisplay)
 }
 onAlignmentItemChange(value){
  this.widgetSettings.widgetPosition = value;
 }

}
