import React from 'react';

const SectionHeader = ({subHeader,mainHeader}) => {
    return (
        <>
            <h3 className="uppercase text-gray-500 font-semibold leading-4">
                {subHeader}
            </h3>
            <h3 className="text-primary font-bold text-4xl italic">
                {mainHeader}
            </h3>
        </>
    );
};

export default SectionHeader;