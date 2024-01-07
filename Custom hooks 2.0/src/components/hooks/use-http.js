import { useState } from "react";

export default function useHttp(requestData, applyData){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const sendRequest = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
        requestData.url,
        {
          method: requestData.method ? requestData.method : 'GET',
          body: requestData.body ? JSON.stringify(requestData.body) : {},
          headers: requestData.headers ? requestData.headers : null
        });
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        
        console.log(data)
        console.log('asdasd')

        applyData(data);

      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    };

    return {
        isLoading,
        error,
        sendRequest,
    }
}