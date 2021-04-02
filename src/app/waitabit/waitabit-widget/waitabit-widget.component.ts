import { ChangeDetectorRef, Component, Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { fadeIn, fadeInOut } from '../animations'

import { RestService } from "../../services/rest.service";

import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { Output } from '@angular/core';

@Component({
  selector: 'waitabit-widget',
  templateUrl: './waitabit-widget.component.html',
  styleUrls: ['./waitabit-widget.component.css'],
  animations: [fadeInOut, fadeIn],
  encapsulation: ViewEncapsulation.Emulated
})
export class WaitabitWidgetComponent implements OnInit, OnChanges {
  @Input() title ='';
  @Input() color ='#4050b5';
  @Input() buttontext ='Join Waitlist';
  @Input() buttonposition ='right';
  @Input() apitoken ='<Your-API-Token>';
  @Input() widgetposition ='left';
  @Input() thankmsg ='Thanks for joining the waitlist';
  @Input() desctext ='Want to move up in line and get access earlier? Skip ahead by referring friends!';
  @Input() pagedisplay ='singlePage';
  @Input() sharelinks:["Facebook","Twitter","Linkedin","Email","Telegram"];

  @Input() copyText = 'Copy';
  @Output() response = new EventEmitter<string>();

  /*@Input() public  widgetSettings = {
    title:'Get Early Access',
    color: 'blue',
    buttontext: 'Join Waitlist!',
    buttonposition:'right',
    apitoken : '<YOUR-API-TOKEN-HERE>',
    pagedisplay:'popup',
    thankmsg:'Thanks for joining the waitlist',
    widgetposition:'left',
    desctext:'',
    sharelinks:["Facebook","Twitter","Linkedin","Email"],
  };*/

  //@Input() public src = `<waitabit-widget id="widget" [title]=`+ this.widgetSettings.title + `</waitabit-widget>`
  public current_url: string = "";
  public email: string = "";
  public message: string = "";
  public isResponse: boolean = false;
  public errorMessage: string = "";
  public selectedPos=this.widgetposition;
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

  constructor(private ref: ChangeDetectorRef, private elementRef: ElementRef, private modalService: NgbModal,private formBuilder: FormBuilder, private restService: RestService) { 
    this.modalOptions = {
      size:'lg'
     }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.title) {
      console.log("Changes detected in title", this.title)
      this.response.emit(this.title);
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
        .post(this.apitoken, payload)
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
              if(this.isResponse && this.pagedisplay=="popup"){
                this.modalService.open(content, this.modalOptions)
              } 
          },
          (error) => {
            this.message = error.error.message
            console.log(error);
            if(error.error="Invalid Token")
            {
              this.errorMessage ="API Token Missing"
            }
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
