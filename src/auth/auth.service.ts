import { Body, Injectable, Post } from '@nestjs/common';
import { AuthBody } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private readonly prisma:PrismaService){}
   async loin({authBody}:{authBody:AuthBody }){
    const{email,password}=authBody;
    const hashPassword=await this.hashPassword({password});
    console.log(hashPassword);

    //je vérifie si l'user existe 
    const existingUser=await this.prisma.user.findUnique({
        where:{
            email:authBody.email
        },
    });
    if(!existingUser){
        throw new Error("l'utilisateur n'existe pas ")
    }
    const isPasswordSame= password === existingUser.password;
    if(!isPasswordSame){
        throw new Error("le mot de pass est invalide ");
    }
    return existingUser;  
   }
  async hashPassword({password}: {password:string}){
    const hashedPassword=await bcrypt.hash(password,10)
    return hashedPassword;
   }

}
