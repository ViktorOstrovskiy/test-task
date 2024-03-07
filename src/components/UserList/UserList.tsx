import React from "react";
import { IUser } from "../../types/IUser";
import { Button } from "../UI/Button/Button";
import { Loader } from "../UI/Loader/Loader";
import { UserItem } from "../UserItem/UserItem";
import "./UserList.scss";

type Props = {
  increaseCount: () => void;
  users: IUser[];
  isLoaded: boolean;
  isButtonVisible: boolean;
};

export const UserList: React.FC<Props> = React.memo(
  ({ increaseCount, users, isLoaded, isButtonVisible }) => {
    return (
      <section className="UserList" id="UserList">
        <h2 className="subtitle UserList__subtitle">
          Working with GET request
        </h2>

        {isLoaded ? (
          <>
            <div className="UserList__container">
              {users.map((user) => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>

            {isButtonVisible && (
              <div className="ButtonContainer">
                <Button width120px={true} clickHandler={increaseCount}>
                  Show more
                </Button>
              </div>
            )}
          </>
        ) : (
          <Loader />
        )}
      </section>
    );
  }
);
