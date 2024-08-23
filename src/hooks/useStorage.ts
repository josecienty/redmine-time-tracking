import { useEffect, useState } from "react";
import browser from 'webextension-polyfill';

const Storage = {
  getItem: async (key: string) => (await browser.storage.local.get(key))[key],
  setItem: (key: string, value: string) => browser.storage.local.set({ [key]: value }),
  removeItem: (key: string) => browser.storage.local.remove(key),
  serialize: JSON.stringify,
  deserialize: JSON.parse,
};

export const getStorage = async <T>(name: string, defaultValue: T): Promise<T> => {
  const data = await Storage.getItem(name);
  if (!data) return defaultValue;
  return Storage.deserialize(data as string);
};

export const setStorage = <T>(name: string, data: T) => {
  Storage.setItem(name, Storage.serialize(data));
};

const useStorage = <T>(name: string, defaultValue: T) => {
  const [localData, setLocalData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(true);

  // set data to storage
  const setData = (data: T) => setStorage(name, data);

  // Init load data
  useEffect(() => {
    getStorage(name, defaultValue).then((data) => {
      setLocalData(data);
      setIsLoading(false);
    });
  }, []);

  // On chrome storage change => load data
  useEffect(() => {
    const onChange: Parameters<typeof browser.storage.local.onChanged.addListener>[0] = (changes) => {
      if (!changes[name]) return; // other changed
      setLocalData(Storage.deserialize(changes[name].newValue as string));
    };

    browser.storage.local.onChanged.addListener(onChange);
    return () => browser.storage.local.onChanged.removeListener(onChange);
  }, [name]);

  return { data: localData, setData, isLoading };
};

export default useStorage;
