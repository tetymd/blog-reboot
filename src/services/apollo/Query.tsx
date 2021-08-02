import React, { useRef } from "react";
import { ApolloError, useQuery } from "@apollo/client";
import { QueryComponentOptions } from "@apollo/client/react/components/types";

export const Query = React.memo((props: QueryComponentOptions) => {
  const counter = useRef(7);
  const { children, query, ...options } = props;

  options.onError = async (error: ApolloError) => {
    console.log("refetching...", counter.current);
    console.log(error);
    counter.current--;
    if (counter.current >= 0) await result.refetch();
  };

  const result = useQuery(query, options);
  return result ? children(result) : null;
});
