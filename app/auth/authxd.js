import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export function LoginForm() {
  return (
    <div className="mx-auto grid mt-2 w-full gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-2xl mt-2 semibold">Login</h1>
            
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="medium">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="border-[#474747] "
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password"  className="medium">Password</Label>
               
              </div>
              <Input id="password" type="password" required
                className="border-[#474747] "
                />
            </div>
            <Button type="submit" className="w-full medium">
              Login
            </Button>
            <Button variant="outline" className="w-full border-[#474747]">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm -mb-6">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      
  )
}