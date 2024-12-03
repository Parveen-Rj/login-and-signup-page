

"use client"
import { useState } from "react"
import {Input} from "@/components/ui/input";

import {Button} from "@/components/ui/button"
import {Card , CardContent , CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const SignUpForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Login attempt with:", {email,password})
    }
    return (
        <Card className="w-[350px]">
<CardHeader>
    <CardTitle>Login</CardTitle>

<CardDescription>Enter your credential to eccess your accont</CardDescription>
</CardHeader>
<CardContent>
    <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
            <Input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e:any)=> setEmail(e.target.value)}
            required/>
        </div>
        <div className="space-y-2">
            <Input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e:any) => setPassword(e.target.value)}
            required/>
        </div>

        <div className="space-y-2">
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e: any) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
       <Button type="submit" className="w-full" onClick={()=> alert('Thans for SignUp!')}>SignUp</Button> 
    </form>
    </CardContent>  
        </Card> 
    )
}
export default SignUpForm