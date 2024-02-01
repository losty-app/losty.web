import {
  IconCopy,
  IconLayoutDashboard,
  IconTypography,
  IconUserCircle,
  IconListCheck,
  IconCalendarEvent,
  IconLogout,
  IconEditCircle,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'בית',
  },
  {
    id: uniqueId(),
    title: 'לו״ז',
    icon: IconCalendarEvent,
    href: '/schedule',
  },
  {
    id: uniqueId(),
    title: 'אירועים',
    icon: IconListCheck,
    href: '/events',
  },
  {
    navlabel: true,
    subheader: 'פרופיל',
  },
  {
    id: uniqueId(),
    title: 'הפרופיל שלי',
    icon: IconUserCircle,
    href: '/profile',
  },
  {
    navlabel: true,
    subheader: 'מנהל',
  },
  {
    id: uniqueId(),
    title: 'מסך מנהל',
    icon: IconEditCircle,
    href: '/admin',
  },
  {
    navlabel: true,
    subheader: 'יציאה',
  },
  {
    id: uniqueId(),
    title: 'התנתק',
    icon: IconLogout,
    isLogout: true,
  },
  {
    navlabel: true,
    subheader: 'עזרים למפתח',
  },

  {
    id: uniqueId(),
    title: 'דאשבורד',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'כתב',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'צל',
    icon: IconCopy,
    href: '/ui/shadow',
  },
];

export default Menuitems;
