import React from 'react';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    console.log(news);
    // const {} =news;
    
    return (
        <div className='space-y-5'>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
            <h2 className='text-2xl text-center font-bold'>{news.title}</h2>
            <p className=''>{news.details}</p>

            <div className='flex justify-center'>
                <Link className='text-xl font-bold click-btn flex items-center gap-2' to={`/category/${news.category_id}`}> 
            <FaRegArrowAltCircleLeft size={30} />
            Back To Category News</Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;