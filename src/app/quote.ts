import { ɵBrowserPlatformLocation } from '@angular/platform-browser';

export class Quote {

  showInfo:boolean;
  constructor(  
    public id:number,
    public name:string,
    public title:string,
    public quote:string,
    public author:string)
    {
      this.showInfo=false;
    }
}
