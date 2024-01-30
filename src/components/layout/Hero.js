import React from 'react';
import Image from "next/image";
import Right from "@/components/icons/Right";

const Hero = () => {
    return (
        <section className='hero'>
            <div className='py-12'>
                <h1 className='text-4xl font-semibold'>Everything is better with a <span className='text-primary'> Pizza</span> </h1>
                <p className='my-6 text-gray-500 text-sm'>
                    Pizza is a beloved and iconic dish that has captured the hearts and taste buds of people around the world.
                    Originating from Italy, pizza has evolved into a diverse and customizable culinary delight that caters to
                    a wide range of preferences.
                </p>
                <div className='flex gap-4 text-sm py-4'>
                    <button className='bg-primary items-center uppercase flex gap-4 rounded-full text-white px-8 py-2 '>
                        Order Now
                        <Right/>
                    </button>

                    <button className='flex py-2 gap-2 text-gray-500 font-semibold'>
                        Learn More
                        <Right/>
                    </button>
                </div>
            </div>

            <div className='relative'>
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
            </div>
        </section>

    );
};

export default Hero;
//style={{ width: '200px', height: '200px', borderRadius: '80%',
//                 overflow: 'hidden',margin: '60px 100px' }}