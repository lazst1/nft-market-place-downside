import { useHistory } from "react-router";
import Page from "src/components/Page";

export default function NotFound() {
  const history = useHistory();
  return (
    <Page title="Page not found" noFooter>
      <div className="comingsoon-div">
        <div className="coming-content">
          <h1 className="mt-4 mb-4">404</h1>
          <h4 style={{ marginBottom: 10 }}>
            The page you are looking for isn’t here
          </h4>
          <h5 style={{ marginBottom: 20 }}>
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation.
          </h5>
          <button
            className="btn btn-green mr-3"
            onClick={() => history.push("/")}
          >
            Go to Home
          </button>
        </div>
      </div>
    </Page>
  );
}
