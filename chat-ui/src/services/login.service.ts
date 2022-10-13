import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

interface UserDataModel {
  username?: string
}

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    userData = new BehaviorSubject<UserDataModel>({});

    setUserData(data: UserDataModel): void{
        this.userData.next(data);
        localStorage.setItem('todo', JSON.stringify(data))
    }

    getUserData(): Observable<UserDataModel>{
        return this.userData.asObservable();
    }

    checkAuthData(){
        const userData = localStorage.getItem('todo');
        if(userData){
            this.userData.next(JSON.parse(userData));
        }

    }
}
