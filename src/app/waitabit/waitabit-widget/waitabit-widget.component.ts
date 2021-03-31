import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { fadeIn, fadeInOut } from '../animations'

import { RestService } from "../../services/rest.service";

import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'waitabit-widget',
  templateUrl: './waitabit-widget.component.html',
  styleUrls: ['./waitabit-widget.component.css'],
  animations: [fadeInOut, fadeIn],
})
export class WaitabitWidgetComponent implements OnInit {


  @Input() copyText = 'Copy';
    
  @Input() public  widgetSettings = {
    waitlistTitle:'Get Early Access',
    primaryColor: 'blue',
    buttonText: 'Join Waitlist!',
    buttonPosition:'right',
    apiToken : '<YOUR-API-TOKEN-HERE>',
    pageDisplay:'popup',
    thankyouTitle:'Thanks for joining the waitlist',
    widgetPosition:'left',
    descriptionText:'',
    socialShareLink:["Facebook","Twitter","Linkedin","Email"],
  };

  //@Input() public src = `<waitabit-widget id="widget" [title]=`+ this.widgetSettings.waitlistTitle + `</waitabit-widget>`
  public current_url: string = "";
  public email: string = "";
  public message: string = "";
  public isResponse: boolean = false;
  public selectedPos=this.widgetSettings.widgetPosition;
  //Thankyoupage 
  public currentPosition: number ;
  public noFriendsReferred: number;
  public copyLink: string = "";
  public facebookLink: string = "";
  public linkedinLink: string = "";
  public twitterLink: string = "";
  public emailLink: string = "";
  public chatLink: string = "";

  // formSubmitted = false;

  emailForm: FormGroup;
  submitted = false;
  modalOptions:NgbModalOptions;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder, private restService: RestService) { 
    this.modalOptions = {
      size:'lg'
      
     }
  }

  emailsMatchValidator(form: FormGroup) {
    return
  }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    }
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.emailForm.controls; }



  onSubmit(content) {
    this.submitted = true;
    if (this.emailForm.invalid) {
      return;
    } 
    else {
     var payload =
      {
        email: this.emailForm.value.email,
        current_url: window.location.href
      }

      this.restService
        .post(this.widgetSettings.apiToken, payload)
        .subscribe(
          (data: any) => {
            console.log(data)
            this.currentPosition=data.rank;
            this.noFriendsReferred=data.users_referred;
            this.copyLink=data.share_links.copy;
            this.facebookLink= "https://www.facebook.com/sharer/sharer.php?u="+encodeURI(data.share_links.facebook);
            this.twitterLink= "https://twitter.com/intent/tweet?url="+encodeURI(data.share_links.twitter);
            this.linkedinLink= "https://www.linkedin.com/shareArticle?mini=true&url="+encodeURI(data.share_links.linkedIn);
            this.emailLink= "mailto:info@example.com?&subject=&cc=&bcc=&body="+encodeURI(data.share_links.email);
            this.chatLink= "https://telegram.me/share/url?url="+encodeURI(data.share_links.chat);
     
            this.isResponse=true;
              if(this.isResponse && this.widgetSettings.pageDisplay=="popup"){
                this.modalService.open(content, this.modalOptions)
              } 
          },
          (error) => {
            this.message = error.error.message
            console.log(error);
            this.isResponse=false;
          }
        );
    }
  }

  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
   /*openNewTab() {
    window.open(window.location.href, '_blank');
  }*/
}
