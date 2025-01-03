import { FormControl } from "@angular/forms";

export interface IUser {
  email: FormControl<string | any>;
  password: FormControl<string | any>;
}
