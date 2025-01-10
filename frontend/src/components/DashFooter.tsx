import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const DashFooter = () => {
  const navigate = useNavigate(); // React hook for navigation
  const { pathname } = useLocation(); // React hook for getting the current path

  const onGoHomeClicked = () => navigate("/dash"); // Go to /dash when the home button is clicked

  let goHomeButton = null; // Initialize the home button as null
  if (pathname !== "/dash") {
    // If the current path is not /dash, show the home button
    goHomeButton = (
      <button
        className="dash-footer__button icon-button"
        title="Home"
        onClick={onGoHomeClicked}
      >
        <FontAwesomeIcon icon={faHouse} />
      </button> // The home button is a FontAwesome icon
    );
  }

  const content = // The content of the dashboard footer
    (
      <footer className="dash-footer">
        {" "}
        {/* The footer of the dashboard */}
        {goHomeButton} {/* Show the home button */}
        <p>Current User:</p>
        <p>Status:</p>
      </footer>
    );
  return content;
};

export default DashFooter;
