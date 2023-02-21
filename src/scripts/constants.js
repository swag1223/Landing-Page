const BREAKPOINT_XL = 992;

const AUTOPLAY_TIME = 5000;
const ANIMATION_DURATION = 1000;
const TOUCH_RATIO = 0.5;
const GAP = 30;
const PER_VIEW = 1;
const SLIDER_BP = {
  XXL: 1300,
  XL: 1100,
  LG: 993,
  MD: 767,
};

const EMAIL_FORMAT_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EMAIL_CONFIG = {
  empty: {
    message: "Email is required",
    styleClass: "email-field-msg--error",
  },
  invalid: {
    message: "Invalid Email",
    styleClass: "email-field-msg--error",
  },
  valid: {
    message: "Subscribed",
    styleClass: "email-field-msg--success",
  },
};

export {
  BREAKPOINT_XL,
  AUTOPLAY_TIME,
  ANIMATION_DURATION,
  TOUCH_RATIO,
  GAP,
  PER_VIEW,
  SLIDER_BP,
  EMAIL_FORMAT_REGEX,
  EMAIL_CONFIG,
};
