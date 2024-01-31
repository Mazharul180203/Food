import React from 'react';

const Page = () => {
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Register
            </h1>
            <form className="block max-w-sm mx-auto">
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button  type="submit">Submit</button>
                <div>
                    <button  type="submit">login wit google</button>
                </div>
            </form>
        </section>
    );
};

export default Page;