import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Navigate, useParams } from "react-router-dom";

const GET_FINAL_URL = gql`
  query MyQuery($k: String!) {
    url_urls(where: { key: { _eq: $k } }) {
      value
    }
  }
`;

const Redirecter = () => {
  const params = useParams();
  const key = params.key;

  const { loading, error, data } = useQuery(GET_FINAL_URL, {
    variables: { k: key },
  });

  if (loading) {
    return (
      <div className='bg-gray-900 grid place-items-center h-screen w-full'>
        <div className='animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-75'></div>
      </div>
    );
  }
  if (data.url_urls.length > 0) {
    window.location.href = data.url_urls[0].value;
    return <div></div>;
  }

  return (
    <div className='bg-gray-900 grid place-items-center text-white text-lg h-screen w-full'>
      Oops! You're URL is not valid!
    </div>
  );
};

export default Redirecter;
