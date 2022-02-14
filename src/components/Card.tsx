import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserDetailsType from "../interfaces/user";
import { StoreType } from "../store";
import { getUserThunk } from "../store/reducers/usersThunk";
import "./style.css";

type DD = {
  user: UserDetailsType;
  loading: boolean;
};

const Card = () => {
  const dispatch = useDispatch();
  const { user }: DD = useSelector(
    (state: StoreType) => state.RadomUserReducer
  );

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  return (
    <div className="card">
      <img className="profile" src={user?.picture?.medium} alt="userImage" />

      <h3>
        {user?.name.first} {user?.name.last}
      </h3>
    </div>
  );
};

export default Card;
