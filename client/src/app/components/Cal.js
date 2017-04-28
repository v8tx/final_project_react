import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';

//import sample events;
import events from './events';

//initialize BigCalendar;
import moment from 'moment';
import {
    connect,
} from "react-redux";
const mapStateToProps = (state) => ({
    profile: state.profile,
});

BigCalendar.momentLocalizer(moment);

//css styles for calendar;
import "react-big-calendar/lib/css/react-big-calendar.css";

class Cal extends Component {
    render() {
        return ( <BigCalendar
        {...this.props}
        events={events}
        defaultDate={new Date(2015, 3, 21)}
      />
	);
    }
}

export default connect(mapStateToProps)(Cal);
