import {authOptions } from "@/auth.config";
import NextAuth from "next-auth";

export async function POST(req :any, res: any) {
    // Handle POST request (which is how NextAuth works for authentication)
    // console.log(req, 'POST')
    return NextAuth(req, res, authOptions);
  }
  
  export async function GET(req: any, res: any) {
    // You can handle GET request if needed
    // console.log(req, 'GET')
    return NextAuth(req, res, authOptions);
  }