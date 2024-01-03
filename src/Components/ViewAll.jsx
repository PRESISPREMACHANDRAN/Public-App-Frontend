import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewAll = () => {
    const [data, changeData] = useState({
      count: 1427,
      entries: [],
    });

    const fetchData=()=>{
      axios.get("https://api.publicapis.org/entries").then(
        (response)=>{
          changeData(response.data)
        }
      )

    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
{
    data.entries.map(
        (value,index)=>{
            return (
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex allign-items-stretch">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{value.API}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                      Category: {value.Category}
                    </h6>
                    <p class="card-text">{value.Description}</p>
                    <p class="card-text">Auth: {value.Auth}</p>
                    <p class="card-text">HTTPS{value.HTTPS}</p>
                    <p class="card-text">CORS:{value.Cors}</p>
                    <Link to={value.Link} class="card-link">
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            );
        }
    )
}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ViewAll