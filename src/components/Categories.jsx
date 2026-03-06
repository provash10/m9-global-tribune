import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/demo-data/categories.json")
                            .then((res)=>res.json());

const Categories = () => {
    // console.log(categoryPromise);
    const categories = use(categoryPromise);

    return (
        <div>
            <h1 className='texl-xl font-bold'>All Categories : {categories.length}</h1>
            <div className='grid grid-cols-1 mt-4 gap-3'>
                {
                    categories.map((category)=>
                    <NavLink to={`/category/${category.id}`}
                    className={"btn bg-base-100 border-1, hover:bg-base-300 font-semibold text-violet-600"} key={category.id}>{category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;