import React from 'react'

import SalesWhaleIcon from '../icons/SalesWhaleIcon';
import ChatIcon from '../icons/ChatIcon';
import TeamsIcon from '../icons/TeamsIcon';
import ContactIcon from '../icons/ContactIcon';
import ReportIcon from '../icons/ReportIcon';
import HelpIcon from '../icons/HelpIcon';


const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="flex flex-col">
        <div className="sidenav-icon opacity-100" title="SalesWhale">
          <SalesWhaleIcon />
        </div>
        <div className="sidenav-icon"  title="Campaigns">
          <div style={{ height: '26px' }}>
            <ChatIcon />
          </div>
        </div>
        <div className="sidenav-icon active" title="Teams">
          <TeamsIcon />
        </div>
        <div className="sidenav-icon" title="Leads">
          <div style={{ height: '28px' }}>
            <ContactIcon />
          </div>
        </div>
        <div className="sidenav-icon" title="Reports">
          <ReportIcon />
        </div>
      </div>
      <div>
        <div className="sidenav-icon" title="Help">
          <HelpIcon />
        </div>
      </div>
    </div>)
}

export default Sidenav