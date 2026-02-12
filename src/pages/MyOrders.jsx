import React, { useState } from 'react'

const MyOrders = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true);

  
  return (
    <div>
      <h1>MyOrders page</h1>
    </div>
  )
}

export default MyOrders
