import React, { useState } from 'react'
import Header from './Header'

const AddData = () => {
    const [input, changeInput] = useState({
      API: "",
      Description: "",
      Auth: "",
      HTTPS: "",
      Cors: "",
      Link: "",
      Category: "",
    });


    const readValue=(e)=>{
        changeInput({...input,[e.target.name]:e.target.value})
    }

    const submitValue=()=>{
        console.log(input)
    }


  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  API
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="API"
                  value={input.API}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Description"
                  value={input.Description}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Auth
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Auth"
                  value={input.Auth}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  HTTPS
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="HTTPS"
                  value={input.HTTPS}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Cors
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Cors"
                  value={input.Cors}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Link"
                  value={input.Link}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Category"
                  value={input.Category}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddData