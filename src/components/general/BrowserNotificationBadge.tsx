import { useEffect } from "react";
import browser from 'webextension-polyfill';

type PropTypes = {
  text: string;
  backgroundColor: string;
};

const BrowserNotificationBadge = ({ text, backgroundColor }: PropTypes) => {
  useEffect(() => {
    browser.action.setBadgeBackgroundColor({ color: backgroundColor });
  }, [backgroundColor]);

  useEffect(() => {
    browser.action.setBadgeText({
      text: text,
    });
  }, [text]);

  return null;
};

export default BrowserNotificationBadge;
