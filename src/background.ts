import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener(({ reason }) => {
  //@ts-ignore
  if (reason === browser.runtime.OnInstalledReason.INSTALL) {
    browser.runtime.openOptionsPage();
    browser.runtime.setUninstallURL("https://github.com/CrawlerCode/redmine-time-tracking/discussions/1");
  }
});
