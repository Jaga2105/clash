import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const register = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-full md:w-[550px] shadow-md rounded-xl py-5 px-10 bg-white">
        <div>
          <h1 className="text-4xl text-center font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
            Clash
          </h1>
          <h1 className="text-3xl font-bold">Register</h1>
          <p>Welcome to Clash</p>
          <form>
          <div className="mt-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name..."
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email..."
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password.."
              />
              <div className="text-right font-bold">
              <Link href={"forget-password"} > Forget password?</Link>
              </div>
            </div>
            <div className="mt-4">
              <Label htmlFor="cpassword">Confirm Password</Label>
              <Input
                id="cpassword"
                name="confirm_password"
                type="password"
                placeholder="Confirm your password.."
              />
            </div>
            <div className="mt-4">
                <Button className="w-full">Submit</Button>
            </div>
          </form>

          <p className="mt-2 text-center">Already have an account? <strong>
            <Link href={"/login"}>Login</Link></strong></p>
        </div>
      </div>
    </div>
  );
};

export default register;
