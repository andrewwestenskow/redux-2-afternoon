import React, { Component } from 'react';
import Background from './../shared/Background/Background'
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import './Budget.css';
import {connect} from 'react-redux'
import {requestUserData} from './../../ducks/usersReducer'
import {requestBudgetData, addPurchase, removePurchase} from './../../ducks/budgetReducer'


class Budget extends Component {

  componentDidMount(){
    this.props.requestUserData()
    this.props.requestBudgetData()
  }

  render() {
    const {firstName, lastName} = this.props.users
    const {purchases, budgetLimit} = this.props.budget
    return (
      <Background>
        {this.props.budget.loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav firstName={firstName} lastName={lastName} />
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase addPurchase={addPurchase}/>
              <DisplayPurchases purchases={purchases} removePurchase={removePurchase}/>
            </div>
            <div className='chart-container'>
              <Chart1 purchases={purchases} budgetLimit={budgetLimit} />
              <Chart2 purchases={purchases} />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

function mapStateToProps(state){
  return {
    budget: state.budget,
    users: state.users
  }
}

export default connect(mapStateToProps, {requestUserData, requestBudgetData, addPurchase, removePurchase})(Budget);
