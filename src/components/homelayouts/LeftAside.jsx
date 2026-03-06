import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <h1>left a side</h1>
            <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;