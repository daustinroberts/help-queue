import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import { connect } from 'react-redux';

function Admin(props){
  console.log(props);

  let optionalSelectedTicketContent = null;
  if (props.selectedTicket.length > 0){
    optionalSelectedTicketContent =  <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  selectedTicket: PropTypes.object
};

const mapStateToProps = state => {
  console.log(state);
  return {
    selectedTicket: state.selectedTicket,
    ticketList: state.masterTicketList
  };
};

export default connect(mapStateToProps)(Admin);
