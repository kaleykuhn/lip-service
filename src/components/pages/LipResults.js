import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import LipResult from "../ui/LipResult";
//import lipsticks from "../../mock-data/lipsticks";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";
import currentUser from "../../store/reducers/currentUser";

class LipResults extends React.Component {
   constructor(props) {
      super(props);

      axios
         .get("https://run.mocky.io/v3/8737dfe5-5cdd-4b97-b4e6-a64a283f7dfc")
         .then((res) => {
            // handle success
            console.log(res);
            console.log(res.data);
            props.dispatch({
               type: actions.STORE_LIPSTICK,
               payload: res.data,
            });
         })

         .catch((error) => {
            // handle error
            console.log(error);
         });
      axios
         .get("https://run.mocky.io/v3/d35a8f5c-4f55-4d37-b22a-11a74898a230")
         .then((res) => {
            // handle success
            console.log(res);
            console.log(res.data);
            props.dispatch({
               type: actions.UPDATE_CURRENT_USER,
               payload: res.data,
            });
         })

         .catch((error) => {
            // handle error
            console.log(error);
         });

      // props.dispatch({
      //    type: actions.UPDATE_CURRENT_USER,
      //    payload: res.data,
      // });
   }
   render() {
      const lipsticks = this.props.lipstick;
      console.log(lipsticks);

      //const test2 = this.props.lipstick;
      //console.log("TESY", test2);
      const userAnswers = {};
      let user = this.props.location.results;
      let recomendations = [];

      if (user === undefined) {
         user = this.props.currentUser;
      } else {
         user = this.props.location.results;
      }
      console.log(this.props.currentUser);
      {
         lipsticks.forEach((lipstick) => {
            user.tags.forEach((tag) => {
               if (tag.id == lipstick.tag.id) {
                  recomendations.push(lipstick);
               }
            });
         });
      }

      console.log("recomendations", recomendations);
      // const lipsticks = this.props.lipstick;

      // const lipstickRecommendations = lipsticks
      //    .map((lipstick) => {
      //       let timesMatched = 0;
      //       user.tags.forEach((tags) => {
      //          lipstick.forEach((tag) => {
      //             if (tag.tag.id === tags.id) timesMatched += 1;
      //          });
      //       });
      //       if (timesMatched > 0) lipstick.isRecommended = true;
      //       else lipstick.isRecommended = false;
      //       return lipstick;
      //    })
      //    .filter((lipstick) => lipstick.isRecommended);
      // console.log(lipstickRecommendations);

      return (
         <AppTemplate>
            <Header />
            <Navigation />
            <div className="row">
               <div className="col mb-0">
                  <h2 className="mb-0">Results</h2>
               </div>
            </div>
            <hr className="my-4"></hr>
            <div className="mb-5"></div>
            <div className="row">
               <div className="col">
                  <h3 className="text-center">
                     Give your Lips the personality they deserve!
                  </h3>
               </div>
            </div>
            <div className="row">
               <div className="col">
                  <p className=" my-5  d-flex justify-content-left ">
                     These are your personalized lip matches.The buy now buttons
                     will instantly take you to purchase your personalized lip
                     color.You can save each look by clicking save below.
                  </p>
               </div>
            </div>
            <div className="row">
               {/* <LipResult lipstick={lipstickRecommendations[0]} />
               <LipResult lipstick={lipstickRecommendations[1]} />
               <LipResult lipstick={lipstickRecommendations[2]} />
               <LipResult lipstick={lipstickRecommendations[3]} /> */}

               {recomendations.map((match) => (
                  <LipResult lipstick={match} />
               ))}
            </div>

            {/* {users.map((lipresult) => {
               return <UsersList /> ; */}
            {/* {users.map((user) => {
               return <UsersList /> ;
               <LipResult  tags={lipResult.tags}} 
               />
               );
            })} 
               const user = [];
               const lipsticks = [];
               const lipsticks = [];
               const filteredLipsticks = lipsticks.filter((lipstick)) => {
                  return( 
                      lipstick.id === user.tags[0].id ||
                      lipstick.id === user.tags[1].id ||
                      lipstick.id === user.tags[2].id ||
                      lipstick.id === user.tags[3].id 
                  );
               });
                           
                        
   
            {
                  props.location.state.selectedLipsticks.map( selection => {
                   return ( <LipResult lipstick={lipsticks[selection] /> )
                  }
            
                  {memoryCards.map((memoryCard) => {
               return (
                  <MemoryCard
                     answer={memoryCard.answer}
                     imagery={memoryCard.imagery}
                     key={memoryCard.id}
                  />
               );
            
            */}

            <div className="mb-8"></div>
            <div className="mb-8"></div>
            <Link
               to="/your-looks"
               className="btn btn-outline-secondary btn-lg float-right"
               id="nextButton"
            >
               Save
            </Link>
            <Link
               to="/lip-service-quiz"
               className="btn btn-outline-secondary btn-lg"
               id="nextButton"
            >
               Back
            </Link>
            <div className="mb-8"></div>
         </AppTemplate>
      );
   }
}
function mapStateToProps(state) {
   return {
      lipstick: state.lipstick,
      currentUser: state.currentUser[0],
   };
}
export default connect(mapStateToProps)(LipResults);
