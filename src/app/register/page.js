'use client'
import React, {useState} from 'react';
import Image from "next/image";

const Page = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handelFormSubmit (event){
       event.preventDefault();
       await fetch('/api/register',{
           method:'POST',
           body:JSON.stringify({email,password}),
           headers:{'Content-Type':'application/json'},
       })
    };
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Register
            </h1>
            <form className="block max-w-sm mx-auto" onSubmit={handelFormSubmit}>
                <input type="email" placeholder="email" value={email}
                       onChange={e=>setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password}
                       onChange={e=>setPassword(e.target.value)} />
                <button  type="submit">Submit</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                    <button className="flex gap-4 justify-center py-2">
                        <Image src={'/google.PNG'} alt={'google'} width={24} height={24}/>
                        Login in google
                    </button>
            </form>
        </section>
    );
};

export default Page;