'use strict';

import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import {createHistory, useBasename} from 'history';
import CustomerApp from '../containers/customerApp';
import CustomerIndex from '../containers/customerIndex';
import InvestmentHall from '../components/investmentHall';
import Reg from '../components/reg';
import RegForm from '../components/regForm';
import InvestorNextstep from '../components/investorNextStep';
import FinshInvestorReg from '../components/finshInvestorReg';
import CompanyNextContainer from '../containers/companyNextContainer';
import LoginContainer from '../containers/LoginContainer';
import InvestorApp from '../containers/investorApp';
import InvestorIndexContainer from '../containers/investorIndexContainer';
import InvestorModelContainer from '../containers/InvestorModelContainer';
import ReleaseTenderContainer from '../containers/releaseTenderContainer';

const history = useBasename(createHistory)({
  basename: '/'
})

export default class CustomerRoute extends Component {
  render() {
	return (
	  <Router history={history}>
		<Route path="/customer" component={CustomerApp}>
		  <IndexRoute component={CustomerIndex} />
		  <Route path="index/:index" component={CustomerIndex} />
          <Route path="invest/:index" component={InvestmentHall} />
          <Route path="login" component={LoginContainer} />
          <Route path="reg" component={Reg}> 
            <Route path="investorNext" component={InvestorNextstep} />
            <Route path="finshInvestor" component={FinshInvestorReg} />
            <Route path="companyNext" component={CompanyNextContainer}/>
            <IndexRoute component={RegForm} />
          </Route>
		</Route>
		<Route path="/investor" component={InvestorApp}>
		  <IndexRoute component={InvestorIndexContainer} />
		  <Route path="index/:index" component={InvestorIndexContainer} />
		  <Route path="investModel/:index" component={InvestorModelContainer}/>
		  <Route path="ReleaseTender" component={ReleaseTenderContainer} />
		</Route>
	  </Router>
	)
  }
}