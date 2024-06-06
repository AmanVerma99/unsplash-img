import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from './context';

const url = 'https://api.unsplash.com/search/photos?client_id=X-n4HD96Iy2rnJi-trpyjjklNvwf_5ezCljjSd4NCdA';

const Gallery = () => {
    const { searchTerm } = useGlobalContext();
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: async () => {
            const response = await axios.get(`${url}&query=${searchTerm}`);
            return response.data;
        }
    });

    if (isLoading) {
        return (
            <section className='image-container'>
                <h4>Loading....</h4>
            </section>
        );
    }

    if (isError) {
        return (
            <section className='image-container'>
                <h4>Error occurred...</h4>
            </section>
        );
    }

    const results = data?.results || [];

    if (results.length < 1) {
        return (
            <section className='image-container'>
                <h4>No results found...</h4>
            </section>
        );
    }

    return (
        <section className='image-container'>
            {results.map((item) => {
                const url = item?.urls?.regular;
                return <img src={url} key={item.id} alt={item.alt_description} className='img' />;
            })}
        </section>
    );
};

export default Gallery;
