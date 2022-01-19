import React from "react";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import getUsers from "../api/getUsers";
import { User } from "../datatypes";

const getUsersWrapper = async () => {
  const response = await getUsers();
  return response?.data?.users;
};

const UserTestComponent: React.FC = () => {
  const { data, error, isLoading } = useQuery<User[], AxiosError>(
    "users",
    getUsersWrapper,
    {
      staleTime: 5000,
      refetchInterval: 5000
    }
  );

  if (isLoading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      Nutzernamen:
      {data?.map((item, id) => (
        <div key={id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UserTestComponent;
