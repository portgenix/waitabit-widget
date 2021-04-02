import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'waitabit-config',
  templateUrl: './waitabit-config.component.html',
  styleUrls: ['./waitabit-config.component.css'],
})
export class WaitabitConfigComponent {
  // @Output() public widgetSettingsChange: EventEmitter<any> = new EventEmitter()
  linkFormArray: any;
  uiLinkArray: any;


  //waitlist title
  @Input() public title = "Get Access"
  @Output() public titleChange: EventEmitter<any> = new EventEmitter()
  public titleChanged(title) {
    this.title = title
    this.titleChange.emit(this.title)
  }

  //color
  @Input() public color = '#4050b5'
  @Output() public colorChange: EventEmitter<any> = new EventEmitter()
  public colorChanged(color) {
    this.color = color
    this.colorChange.emit(this.color)
  }
  //buttontext

  @Input() public buttontext = 'Join Waitlist'
  @Output() public buttontextChange: EventEmitter<any> = new EventEmitter()
  public buttontextChanged(buttontext) {
    this.buttontext = buttontext
    this.buttontextChange.emit(this.buttontext)
  }
  //buttonposition
  @Input() public buttonposition = 'right'
  @Output() public buttonpositionChange: EventEmitter<any> = new EventEmitter()
  buttonpositionchanged(value) {
    this.buttonposition = value;
    this.buttonpositionChange.emit(this.buttonposition)
  }

  //apitoken
  @Input() public apitoken = '<Your-API-Token>'
  @Output() public apitokenChange: EventEmitter<any> = new EventEmitter()
  public apitokenChanged(apitoken) {
    this.apitoken = apitoken
    this.apitokenChange.emit(this.apitoken)
  }

  //widgetposition

  @Input() public widgetposition = 'left'
  @Output() public widgetpositionChange: EventEmitter<any> = new EventEmitter()
  widgetpositionChanged(value) {
    this.widgetposition = value;
    this.widgetpositionChange.emit(this.widgetposition)
  }


  //thankmsg
  @Input() public thankmsg = 'Thanks for joining the waitlist'
  @Output() public thankmsgChange: EventEmitter<any> = new EventEmitter()
  public thankmsgChanged(thankmsg) {
    this.thankmsg = thankmsg
    this.thankmsgChange.emit(this.thankmsg)
  }


  //desctext
  @Input() public desctext = 'Want to move up in line and get access earlier? Skip ahead by referring friends!'
  @Output() public desctextChange: EventEmitter<any> = new EventEmitter()
  public desctextChanged(desctext) {
    this.desctext = desctext
    this.desctextChange.emit(this.desctext)
  }

  //pagedisplay
  @Input() public pagedisplay = 'popup'
  @Output() public pagedisplayChange: EventEmitter<any> = new EventEmitter()
  pagedisplayChanged(value) {
    this.pagedisplay = value;
    this.pagedisplayChange.emit(this.pagedisplay)

  }

  //sharelinks
  @Input() public sharelinks = ["Facebook", "Twitter", "Linkedin", "Email", "Telegram"]
  @Output() public sharelinksChange: EventEmitter<any> = new EventEmitter()

  sharelinkss = [{ link: "Facebook" }, { link: "Twitter" }, { link: "Linkedin" }, { link: 'Email' }, { link: 'Telegram' }];
  myForm: FormGroup;

  // @Input() public widgetSettings = {
  //   title: 'Get Early Access',
  //   color: 'blue',
  //   buttontext: 'Join Waitlist!',
  //   buttonposition: 'right',
  //   apitoken: '',
  //   widgetposition: 'left',
  //   pagedisplay: 'popup',
  //   thankmsg: '',
  //   desctext: '',
  //   sharelinks: ["Facebook", "Twitter", "Linkedin", "Email", "Telegram"]
  // };





  scriptCode = `
  <script src="./waitabit-widget.js"></script>
  <waitabit-widget id="widget"></waitabit-widget>
  <script>
  const widget=document.getElementById("widget");
  widget.widgetSettings={
    "title":"` + this.title +
    `","color":"` + this.color +
    `","buttontext":"` + this.buttontext +
    `","apitoken":"` + this.apitoken +
    `","thankmsg":"` + this.thankmsg +
    `","widgetposition":"` + this.widgetposition +
    `",desctext:"","sharelinks":["` +
    this.sharelinks.join('\", \"') + `"]};</script>
  `

  // update() {
  //   this.widgetSettingsChange.emit(this.widgetSettings);
  // }

  constructor(private fb: FormBuilder) {


    this.linkFormArray = []
    this.uiLinkArray = []
    this.sharelinks.forEach(element => {
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
    this.sharelinks = this.linkFormArray
    this.sharelinksChange.emit(this.sharelinks)
  }

  generate() {
    this.scriptCode = `
      <link rel="stylesheet" href="https://unpkg.com/bootstrap@4.5.2/dist/css/bootstrap.min.css">
      <script src="./waitabit-widget.js"/>
      <waitabit-widget id="widget" 
      title= "` + this.title + `"
      color= "` + this.color + `"
      buttontext= "` + this.buttontext + `"
      buttonposition="` + this.buttonposition + `"
      pagedisplay= "` + this.pagedisplay + `"
      apitoken= "` + this.apitoken + `"
      thankmsg= "` + this.thankmsg + `"
      widgetposition= "` + this.widgetposition + `"
      desctext= "` + this.desctext + `"
      sharelinks= "` +[ this.sharelinks ]+`"
     
      
      ></waitabit-widget>   
      `
  }





}
