import {
  IconCopy,
  IconLayoutDashboard,
  IconTypography,
  IconUserCircle,
  IconListCheck,
  IconCalendarEvent,
  IconLogout,
  IconEditCircle,
} from "@tabler/icons";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "בית",
  },
  {
    id: uniqueId(),
    title: "ראשי",
    icon: IconListCheck,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "פרופיל",
  },
  {
    id: uniqueId(),
    title: "הפרופיל שלי",
    icon: IconUserCircle,
    href: "/profile",
  },
  {
    navlabel: true,
    subheader: "יציאה",
  },
  {
    id: uniqueId(),
    title: "התנתק",
    icon: IconLogout,
    isLogout: true,
  },
];

export default Menuitems;
