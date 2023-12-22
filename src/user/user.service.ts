import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUsers(){
        return [
          {
            id:1,
            firstName:'Modou Fall'
          },
          {
            id:3,
            firstName:'mansour Fall'
          },
          {
            id:2,
            firstName:'pape Fall'
          }
        ]
      }
}
