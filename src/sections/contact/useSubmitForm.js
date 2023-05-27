import { useState } from "react";

export const useSubmitForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (body) => {
    setIsLoading(true);

    try {
      // send data to server
      await sleep(1500);
      console.log(body);
    } catch (e) {
      // log an error (sentry or whatever)
      console.log(e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  return [submit, isLoading];
};

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
