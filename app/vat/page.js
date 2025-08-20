import React from 'react'

const page = () => {
  return (
    <div>
      <h1>VAT calculator</h1>
      <input type="number" label="Enter amount" />
      <button>Calculate VAT</button>
      <div>VAT Amount: </div>
      <div>Total Amount: </div>
    </div>
  )
}

export default page