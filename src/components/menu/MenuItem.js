import React from 'react';

const MenuItem = () => {
    return (

            <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center
             group hover:bg-white hover:shadow-xl hover:shadow-black/25 transition-all">
                <img src="./pizza.png" className="max-h-auto max-h-24 block max-auto" alt="pizza"/>
                <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
                <p className="text-gray-500 text-sm mb-4 text-center">Pepperoni pizza, a timeless classic in the world of culinary delights, has earned its place as
                    one of the most beloved and iconic pizza varieties.
                </p>
                <button className="bg-primary text-white rounded-full px-8 p-2 px-4 py-2">Add to cart $12</button>
            </div>


    );
};

export default MenuItem;