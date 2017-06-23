import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory} from 'react-router';
// import Home from '/imports/ui/pages/Home.jsx';
// import Luffy from '/imports/ui/pages/Luffy.jsx';
// import Sabo from '/imports/ui/pages/Sabo.jsx'
// import Solo from '/imports/ui/pages/Solo.jsx'
// import Hancock from '/imports/ui/pages/Hancock.jsx'
// import Kuma from '/imports/ui/pages/Kuma.jsx'
// import Mr0 from '/imports/ui/pages/Mr0.jsx'
// import Rayleigh from '/imports/ui/pages/Rayleigh.jsx'
// import Robin from '/imports/ui/pages/Robin.jsx'
// import WhiteBeard from '/imports/ui/pages/WhiteBeard.jsx'
import HomeContainer from '/imports/ui/container/HomeContainer.jsx';
import MainLayout from '/imports/ui/layout/MainLayout.jsx';
import ReviewLayout from '/imports/ui/layout/ReviewLayout.jsx';
export default () => (

  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={HomeContainer}/>
      <Route component={ReviewLayout}>

        {/* <Route path="/luffy" component={Luffy}/>
        <Route path="/sabo" component={Sabo}/>
        <Route path="/solo" component={Solo}/>
        <Route path="/hancock" component={Hancock}/>
        <Route path="/kuma" component={Kuma}/>
        <Route path="/mr0" component={Mr0}/>
        <Route path="/rayleigh" component={Rayleigh}/>
        <Route path="/robin" component={Robin}/>
        <Route path="/whiteBeard" component={WhiteBeard}/> */}
      </Route>
    </Route>
  </Router>
)
