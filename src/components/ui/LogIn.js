import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
   return (
      <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-6 offset-lg-1 col-lg-4 offset-xl-1 col-xl-4 mb-6 mt-8">
         <div className="card">
            <div className="card-body text-dark bg-white rounded">
               <h2 className="card-title">Welcome back</h2>
               <p className="card-title">
                  Log in with your email address and password.
               </p>

               <p className="text-success"></p>
               <label htmlFor="exampleInputEmail2" className="text-muted">
                  Email address
               </label>
               <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder=""
               />
               <small id="emailHelp" className="form-text text-muted"></small>

               <label htmlFor="exampleInputPassword2" className="text-muted">
                  Password
               </label>
               <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder=""
               />

               <button
                  type="button"
                  className="btn btn-success float-right mt-6"
               >
                  Log in
               </button>
            </div>
         </div>
      </div>
   );
}
