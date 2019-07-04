import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {


empform=new FormGroup(
{
'uname':new FormControl('',[Validators.required,Validators.minLength(3)]),
'age':new FormControl('',[Validators.required,Validators.min(10),Validators.max(20)]),
'email':new FormControl('',[Validators.required,Validators.email]),
'password':new FormControl('',[Validators.required,Validators.minLength(6)]),
'cnfpassword':new FormControl('',[Validators.required,Validators.pattern('password')])


}
);

fn(){
  console.log(this.empform);
// this.obj(this.empform);
}

















  constructor() { }

  ngOnInit() {
  }

}
