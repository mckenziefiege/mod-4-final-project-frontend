import React, { Component } from 'react'

class EventForm extends Component {

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui image header">
            <div className="content">
              Create New Event:
            </div>
          </h2>
      <form className="ui form">
      <div className="field">
        <label>Event Name</label>
        <input type="text" name="event-name" placeholder="Event Name"/>
      </div>
      <label>Date</label>
      <div className="three fields">
        <div className="field">
          <select className="ui fluid search dropdown" name="month">
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="field">
          <select className="ui fluid search dropdown" name="day">
            <option value="">Day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
        </div>
        <div className="field">
          <select className="ui fluid search dropdown" name="year">
            <option value="">Year</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label>Description</label>
        <input type="text" name="description" placeholder="Description"/>
      </div>
      <div className="field">
        <label>Street Address</label>
        <input type="text" name="address" placeholder="address"/>
      </div>
      <div className="field">
        <label>City</label>
        <input type="text" name="city" placeholder="City"/>
      </div>
      <div className="field">
        <label>State</label>
        <input type="text" name="state" placeholder="State"/>
      </div>
      <div className="field">
        <label>Zip Code</label>
        <input type="text" name="zipcode" placeholder="Zip Code"/>
      </div>
      <button className="ui primary button" type="submit">Submit</button>
      </form>
      </div>
      </div>

    )
  }
}

export default EventForm;
