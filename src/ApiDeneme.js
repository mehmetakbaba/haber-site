
import React from 'react';
import { useGetNewsQuery } from './ApiSlice'; 
import { Button } from '@mui/material';


function ApiDeneme() {
  const { data, isLoading, isError } = useGetNewsQuery();
  if (isLoading) return <p>Yükleniyor...</p>;
  if (isError) return <p>Bir hata oluştu.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>API Deneme</h1>
      <p>Bu bir API deneme sayfasıdır.</p>
        {data.politikaTr.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
        
    </div>
  );
}

export default ApiDeneme;
