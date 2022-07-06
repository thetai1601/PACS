import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  responseData: any;
  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.findById().subscribe((res) => {
      this.responseData = res.data
      console.log(this.responseData);
    })
  }

}
