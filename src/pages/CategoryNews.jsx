import React, { useEffect, useState} from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';


const CategoryNews = () => {
    const {id}= useParams();
    const data= useLoaderData();
    //  console.log(id,data);

    const [categoryNews, setCategoryNews]=useState([]);

    useEffect(()=>{
        if(id=="0"){
            setCategoryNews(data);
            return;
        }else if(id=="1"){
            const filteredNews=data.filter((news)=>news.others.is_today_pick ==true);
             setCategoryNews(filteredNews);
        }
        else{
             const filteredNews=data.filter((news)=>news.category_id == id)
        console.log(filteredNews);
        setCategoryNews(filteredNews);}
    },[data,id])
    

    return (
        <div>
            {/* <h1>Category News- {id}</h1> */}
            <h1 className='text-2xl text-center font-bold underline mb-5'>
                Total <span className='text-3xl font-bold text-green-400'>{categoryNews.length}</span> News Found
            </h1>
            <div className='grid grid-cols-1 gap-5 p-2'>
                {
                    categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>

        </div>
    );
};

export default CategoryNews;