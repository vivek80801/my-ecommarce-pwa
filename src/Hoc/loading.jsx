import React, { useState, useEffect } from "react";

const loading = (WrappedComponent) => {
  const Loading = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      return () => {
        setLoading(false);
      };
    }, [loading]);

    return <WrappedComponent loading={loading}/>;
  };
  return Loading;
};

export default loading;
