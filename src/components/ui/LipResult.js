import React from "react";
import appLogo from "../../img/comfortmattetemperud.jpg";

class LipResult extends React.Component {
   constructor(props) {
      super(props);
      console.log("lip-results");
   }
   render() {
      const lipstick = this.props.lipstick;

      return (
         <div className="col-12 col-xl-10 offset-xl-1 col-lg-12 offset-lg-0 col-md-12 offset-md-0 card mb-2 px-2">
            <div className="card-header">Match</div>
            <div className="card-body ">
               <img
                  src={appLogo}
                  width="46px;"
                  alt="Lip Service Lips"
                  className="mb-2"
               />
               <img
                  src={lipstick.modelImageUrl}
                  width="182px;"
                  alt="Lip Service Lips"
                  className=" float-right"
               />
               <div className="mb-0"></div>
               <h4 className="cardfontcolor">{lipstick.name}</h4>
               <h4 className="cardfontcolor">{lipstick.color}</h4>
               <h4 className="cardfontcolor">{lipstick.finish}</h4>
               <h4 className="cardfontcolor"> {lipstick.brand}</h4>
               <a
                  href={lipstick.buyNowUrl}
                  className="btn btn-primary float-right btn-sm "
               >
                  Buy Now
               </a>
               <h5 className="card-title">Light card title</h5>
               <p className="card-text cardfontcolor">{lipstick.desc}</p>
            </div>
         </div>
      );
   }
}
export default LipResult;
