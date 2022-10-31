import React, { useEffect, useState } from "react";
import { getUserDetails } from "../utils/api";

export default function useAuth() {
  const [user, setUser] = useState();
  useEffect(() => {
    getUserDetails()
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return { user };
}
