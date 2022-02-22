import { Link } from "react-router-dom";

import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'


import { useContext } from "react";
import { AuthContext } from "../App";

export default function Nav() {
  const user = useContext(AuthContext);

  return (
    <div className="navBar">
      <nav>
        <Link to="/"> Feed </Link>

        {user === null ? (
          <></>
        ) : (
          <>
            <Link to="/createrecipe"> Create Recipe </Link>
            <Link to="/likedrecipes"> Liked Recipes </Link>
          </>
        )}
        <Link to="/profilepage"> <FontAwesomeIcon icon={faUser} /> </Link>
      </nav>
    </div>
  );
}