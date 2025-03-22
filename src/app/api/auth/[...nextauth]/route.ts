import {authOptions } from "@/auth.config";
import NextAuth from "next-auth";

export async function POST(req, res) {
    // Handle POST request (which is how NextAuth works for authentication)
    // console.log(req, 'POST')
    return NextAuth(req, res, authOptions);
  }
  
  export async function GET(req, res) {
    // You can handle GET request if needed
    // console.log(req, 'GET')
    return NextAuth(req, res, authOptions);
  }