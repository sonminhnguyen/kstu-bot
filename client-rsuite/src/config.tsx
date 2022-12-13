import React from 'react';
import { Icon } from '@rsuite/icons';
import { VscCalendar, VscListUnordered } from 'react-icons/vsc';
import { MdFingerprint, MdDashboard } from 'react-icons/md';
import TaskIcon from '@rsuite/icons/Task';

export const appNavs = [
  {
    eventKey: 'dashboard',
    icon: <Icon as={MdDashboard} />,
    title: 'Dashboard',
    to: '/dashboard'
  },
  {
    eventKey: 'calendar',
    icon: <Icon as={VscCalendar} />,
    title: 'Calendar',
    to: '/calendar'
  },
  {
    eventKey: 'require',
    icon: <Icon as={TaskIcon} />,
    title: 'Require',
    to: '/require',
    children: [
      {
        eventKey: 'inQueue',
        title: 'In Queue',
        to: '/inqueue'
      },
      {
        eventKey: 'solved',
        title: 'Solved',
        to: '/solved'
      }
    ]
  },
  {
    eventKey: 'command',
    icon: <Icon as={VscListUnordered} />,
    title: 'Command',
    to: '/command'
  },
  {
    eventKey: 'authentication',
    title: 'Authentication',
    icon: <Icon as={MdFingerprint} />,
    children: [
      {
        eventKey: 'sign-in',
        title: 'Sign In',
        to: '/sign-in'
      },

      {
        eventKey: 'sign-up',
        title: 'Sign Up',
        to: '/sign-up'
      },

      {
        eventKey: 'error400',
        title: 'Error 404',
        to: '/error-404'
      },
      {
        eventKey: 'error500',
        title: 'Error 500',
        to: '/error-500'
      }
    ]
  },

  // {
  //   eventKey: 'components',
  //   title: 'Components',
  //   icon: <CubesIcon />,
  //   href: 'https://rsuitejs.com/components/overview/',
  //   target: '_blank'
  // }
];
