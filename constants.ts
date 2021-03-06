import { ScheduleType } from "@prisma/client";

export const OFFICE_IP_ADDRESSES = [
  "221.149.114.252",
  "218.153.187.125",
  "218.153.187.124",
];

export const TYPE_OFFICE: ScheduleType = "office";
export const TYPE_OUTSIDE: ScheduleType = "outside";
export const TYPE_HOME: ScheduleType = "home";
export const TYPE_EXTRA: ScheduleType = "extra";

export const KOREAN_DAY = ["일", "월", "화", "수", "목", "금", "토"];
