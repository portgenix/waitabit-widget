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
    
    <waitabit-widget
        [title]=title
        [color]=color
        [buttontext]=buttontext
        [buttonposition]=buttonposition
        [apitoken]=apitoken
        [widgetposition]=widgetposition
        [thankmsg]=thankmsg
        [desctext]=desctext
        [pagedisplay]=pagedisplay
        [sharelinks]=sharelinks></waitabit-widget>
    </div>
    <div class="col-5 " style="margin-left:4%;padding:4px;background-color:white;border:1px solid #ebe9e9;
  ">
      <waitabit-config 
       [(title)]=title
       [(color)]=color
       [(buttontext)]=buttontext
       [(buttonposition)]=buttonposition
       [(widgetposition)]=widgetposition
       [(apitoken)]=apitoken
       [(thankmsg)]=thankmsg
       [(desctext)]=desctext
       [(pagedisplay)]=pagedisplay
       [(sharelinks)]=sharelinks 

       ></waitabit-config>
    </div>
  </div>
</div>
</div>`,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  public title = 'Get Access'
  public color='#4050b5'
  public buttontext= 'Join Waitlist!'
  public buttonposition='right'
  public apitoken='Pd5bfee5b'
  public widgetposition= 'left'
  public thankmsg='Thank you for joining the waitlist'
  public desctext= 'Want to move up in line and get access earlier? Skip ahead by referring friends!'
  public pagedisplay= 'singlePage'
  public sharelinks=["Facebook", "Twitter", "Linkedin", "Email","Telegram"]

//  public widgetSettings = {
//     title: 'Get Early Access',
//     color: '#4051B5',
//     buttontext: 'Join Waitlist!',
//     buttonposition: 'right',
//     apitoken: 'Pd5bfee5b',
//     widgetposition: 'left',
//     pagedisplay: 'singlePage',
//     thankmsg: 'Thank you for joining the waitlist',
//     desctext: 'Want to move up in line and get access earlier? Skip ahead by referring friends!',
//     sharelinks: ["Facebook", "Twitter", "Linkedin", "Email"]

//   };
}
