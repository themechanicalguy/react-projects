import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";

const UsersList = () => {
  //PREVIEW
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUser);
  const [doCreateUser, isCreatingUser, CreatingUserError] = useThunk(addUser);
  // const [isCreatingUser, setIsCreatingUser] = useState(false);
  // const [CreatingUserError, setCreatingUserError] = useState(null);
  // const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  if (loadingUsersError) {
    return <div>Error Fetching Data</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? (
          "creating user..."
        ) : (
          <Button loading={isCreatingUser} onClick={handleUserAdd}>
            + Add User
          </Button>
        )}
        {CreatingUserError && "Error Creating User..."}
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
