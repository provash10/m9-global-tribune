import React from 'react';
import { FaStar, FaEye, FaBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const {id, author, title, image_url, details, rating, total_view, tags } = news;

    return (
        <div className='bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
            {/* Author Info */}
            <div className='flex items-center justify-between p-4 pb-3'>
                <div className='flex items-center gap-3'>
                    <img
                        src={author.img}
                        alt={author.name}
                        className='w-12 h-12 rounded-full object-cover'
                    />
                    <div>
                        <h3 className='font-semibold text-gray-800'>{author.name}</h3>
                        <p className='text-sm text-gray-500'>
                            {new Date(author.published_date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit'
                            })}
                        </p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <button className='text-gray-500 hover:text-gray-700'>
                        <FaBookmark size={20} />
                    </button>
                    <button className='text-gray-500 hover:text-gray-700'>
                        <FaShareAlt size={20} />
                    </button>
                </div>
            </div>

            {/* Title */}
            <h2 className='text-xl font-bold text-gray-900 px-4 mb-3 leading-tight'>
                {title}
            </h2>

            {/* Image */}
            <img
                src={image_url}
                alt={title}
                className='w-full h-64 object-cover'
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/660x372?text=Image+Not+Available';
                }}
            />

            {/* Tags */}
            <div className='px-4 pt-4'>
                <p className='text-sm text-gray-500 mb-2'>
                    {new Date(author.published_date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })} | Tag Cloud Tags: {tags.slice(0, 5).join(', ')}
                </p>

                <div>
                    {
                        details.length > 200 ? (
                            <>
                                <p className='text-gray-700 text-sm leading-relaxed mb-3'>
                                    {details.slice(0, 150)}...
                                </p>
                                <Link to={`/news-details/${id}`} className='text-orange-500 font-semibold text-sm hover:text-orange-600'>
                                    Read More
                                </Link>
                            </>
                        ) : (
                            details
                        )
                    }
                </div>
            </div>

            {/* Rating & Views */}
            <div className='flex items-center justify-between px-4 py-4 border-t border-gray-100 mt-3'>
                <div className='flex items-center gap-2'>
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={index < rating.number ? 'text-orange-400' : 'text-gray-300'}
                            size={20}
                        />
                    ))}
                    <span className='text-gray-600 font-semibold ml-2'>{rating.number}</span>
                </div>
                <div className='flex items-center gap-2 text-gray-600'>
                    <FaEye size={20} />
                    <span className='font-semibold'>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;