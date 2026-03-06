import React, { use } from 'react';

const categoryPromise = fetch("/demo-data/categories.json")
                            .then((res)=>res.json());

const Categories = () => {
    // console.log(categoryPromise);
    const categories = use(categoryPromise);

    return (
        <div>
            <h1 className='texl-xl font-bold'>All Categories : {categories.length}</h1>
        </div>
    );
};

export default Categories;