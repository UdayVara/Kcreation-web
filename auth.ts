import { User } from "@/models/User";
import { connectToDB } from "@/utils/connectToDb";
import NextAuth  from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: "abc1233jlkjdfksdf",
  providers: [
    Credentials({
      credentials: {
        name: {},
        email: {},
        password: {},
      },
      async authorize(credentials, request) {
        const { name, email, password } = credentials;

        connectToDB();

        const user = await User.find({ email: email });

        if (user.length == 0) {
          const res = await User.create({
            email: email,
            name: name,
            password: password,
          });
          // console.log("res",res)
          console.log(res)
          if (res) {
            return {
              name: res.name,
              email: res.email,
              password: res.password,
              id: res._id,
            };
          }
          throw new Error("Internal Server Error");
        }else{
          if(user[0].password == password){
            return {...user}
          }else{
            throw new Error("Invalid Credentials")
          }
        }
      },
    }),
  ],
  callbacks:{
    
      async jwt(params:any) {
        
        if(params.user){
          params.token.user = params.user[0]
        }
        return params.token
      },
      session(params) {
        if(params.token && params.token.user){
          params.session.user = params.token.user as any
        }
        return params.session
      },
  },
  pages: {
    signIn: "/",
    signOut: "/",
  },
});
