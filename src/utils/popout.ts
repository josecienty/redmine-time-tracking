import browser from 'webextension-polyfill';

type WindowLocationType = "popup" | "popout" | "options" | "unknown";

export const getWindowLocationType = () => (new URLSearchParams(location.search).get("location") ?? "unknown") as WindowLocationType;

export const createPopOut = () => {
  const { width, height } = document.body.getBoundingClientRect();

  browser.windows.create({
    url: browser.runtime.getURL("/index.html?location=popout"),
    type: "popup",
    width: width + 14,
    height: height + 14,
    focused: true,
  });
};
