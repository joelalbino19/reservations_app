import { FormControl } from "@angular/forms";

export interface IUser {
  username: FormControl<string | any>;
  email: FormControl<string | any>;
  password: FormControl<string | any>;
  confirmPassword: FormControl<string | any>;
}
