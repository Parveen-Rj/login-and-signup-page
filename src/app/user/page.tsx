'use client'
import { useState } from "react";

import Login from '@/app/components/login';
import SignIn from "@/app/components/SignIn";
import { Button } from "@/components/ui/button";
export default function User(){
const [isLogin , setIsLogin] = useState(true)

return (
    <div className='min-h-screen flex flex-col justify-center items-center content-center bg-gray-50'>
<div className='mb-4'>
<Button
onClick={()=> setIsLogin(isLogin)}
variant={'ghost'}
>
{isLogin ? 'Need a account? Sing Up': 'Already have account? Log in'}
</Button>
</div>
{isLogin ?<Login />:<SignIn />}
    </div>
)
}