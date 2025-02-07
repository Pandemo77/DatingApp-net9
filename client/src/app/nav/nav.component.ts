import * as core from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/accounts.service';
import { inject} from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@core.Component({
  selector: 'app-nav',
  imports: [FormsModule, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  model: any ={};

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
       
      },
      error: error => console.log(error)

    })
  } 

  logout() {
    this.accountService.logout();
  }

}
