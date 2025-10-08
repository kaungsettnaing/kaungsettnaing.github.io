import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">System Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Linux Lab</h4>
            <p>
              Server Administration, Network Management, Security Implementation, Virtualization, Backup Solutions, Solution Deployment, Root Cause Analysis, Documentation, Proof of Concept (PoC)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT System Administrator</h3>
            <h4 className="vertical-timeline-element-subtitle">LifePlus</h4>
            <p>
              Network Management, System Maintenance, User Support, Security Management, Hardware and Software Troubleshooting, Inventory Management, Vendor Coordination, CCTV
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Support</h3>
            <h4 className="vertical-timeline-element-subtitle">Yangon American International School</h4>
            <p>
              User Support, System Maintenance, Network Management, Hardware and Software Troubleshooting, Inventory Management, Vendor Coordination
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Technician</h3>
            <h4 className="vertical-timeline-element-subtitle">Luxembourg Development Agency</h4>
            <p>
              Project Management, User Support, System Maintenance, Network Management, Hardware and Software Troubleshooting, Inventory Management, Vendor Coordination, Training
            </p>
          </VerticalTimelineElement>
                    <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Young Professional</h3>
            <h4 className="vertical-timeline-element-subtitle">Luxembourg Development Agency</h4>
            <p>
              User Support, Network Management, Hardware and Software Troubleshooting, Inventory Management, Vendor Coordination
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;