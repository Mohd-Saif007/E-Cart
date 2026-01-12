import React from 'react'

export default function Review() {
  return (
    <div className="container mt-5">
    <div className="text-center text-danger mb-4">
      <h1>Reviews</h1>
      <p>What our customers say</p>
    </div>

    <div className="row text-center g-4">
      <div className="col-lg-4 col-md-6 col-12">
        <h4>Yoyo</h4>
        <p>Very good quality products 👌</p>
      </div>

      <div className="col-lg-4 col-md-6 col-12">
        <h4>Sam</h4>
        <p>Fast delivery and nice support 👍</p>
      </div>

      <div className="col-lg-4 col-md-6 col-12">
        <h4>Roni</h4>
        <p>Highly recommended 💯</p>
      </div>
    </div>
  </div>
  )
}
