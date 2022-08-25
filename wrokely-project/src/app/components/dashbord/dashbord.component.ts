import { Component, OnInit } from '@angular/core';
import { FileuplodService } from 'src/app/services/fileuplod.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private userService:UserService,private fileUploadService:FileuplodService) { }
    users:any=[]
    file: any=null;
    userName:string=""
    shortLink: string = "";
    loading: boolean = false;
    img_url:string=''
  ngOnInit(): void {
    console.log("Under get User")
    this.userService.getUserDetail().subscribe((resp:any)=>{
      this.users=resp
      console.log(resp)
    },
    (err:any)=>{
      console.log(err)
})
  }

  getUser(){
    console.log("Under get User")
      this.userService.getUserDetail().subscribe((resp:any)=>{
        this.users=resp
        console.log(resp)
      },
      (err:any)=>{
        console.log(err)
  })
  }
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (resp:any)=>{
        this.users=resp
        console.log(resp)
      },
      (err:any)=>{
        console.log(err.error.text)
        this.img_url=err.error.text
        this.loading=false
  }
    )
}

  onChange(event:any ) {
    this.file = event.target.files[0];
}

}
