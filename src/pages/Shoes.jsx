import React from 'react'
import { useNavigate } from 'react-router-dom'
import shoesData from '../json/ShoesJson'

export default function Shoes({addtocart}) {
  const Navigator = useNavigate();

  function next(data){
    Navigator("/details",{state:{mydata:data}})
  }

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row justify-content-center">

          {shoesData.map((users) => (
            <div className="col-sm-4 col-md-3 my-3" key={users.id}>
              
              <div className="card border-0 shadow-sm h-100 rounded-4">

                <div className="bg-light p-3 rounded-top-4 text-center">
                  <img 
                    src={users.image} 
                    alt="" 
                    className="img-fluid"
                    style={{ height: "220px", objectFit: "contain" }}
                  />
                </div>

                <div className="card-body text-center">
                  <h6 className="text-muted mb-1">ID: {users.id}</h6>
                  <h6 className="fw-bold">{users.tittle}</h6>

                  <h5 className="text-success mt-2">₹ {users.price}</h5>

                  

                  <p className="text-secondary small">
                    {users.description.slice(0, 50)}...
                  </p>

                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <button className="btn btn-outline-dark btn-sm" onClick={()=>addtocart(users)}>
                      Add to Cart
                    </button>

                    <button 
                      className="btn btn-success btn-sm"
                      onClick={() => next(users.tittle)}
                    >
                      View
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </>
  )
}
