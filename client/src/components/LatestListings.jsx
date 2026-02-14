import React from 'react'
import Title from './Title'
import {useDispatch, useSelector} from 'react-redux'
import ListingCard from './ListingCard';

const LatestListings = () => {
  const {listings} = useSelector(state => state.listing);

  return (
    <div className='mt-20 mb-8'>
      <Title title="Latest Listings" description="Discover the hottest social media profiles available for purchase."/>

      <diV className='flex flex-col gap-6 px-6'>
        {listings.slice(0,4).map((listing, index) => (
          <div key={index} className='mx-auto w-full max-w-3xl rounded-xl'>
            <ListingCard listing={listing} />
          </div>
        ))}
      </diV>
    </div>
  )
}

export default LatestListings
