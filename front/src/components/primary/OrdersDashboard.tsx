import { getOrders } from '@/database/user'
import React from 'react'

const OrdersDashboard = async (token: any) => {
  const orders = await getOrders(token!)
  console.log(orders)
  return (
    <div>
      
    </div>
  )
}

export default OrdersDashboard
