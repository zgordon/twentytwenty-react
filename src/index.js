const { render } = wp.element;
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

// import Votes from "./components/votes";
import Posts from "./components/posts";

const client = new ApolloClient({
  uri: "http://react-dev.local/graphql"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <p>My First Apollo Theme!</p>
        <Posts />
        {/* <Votes /> */}
      </div>
    </ApolloProvider>
  );
};
render(<App />, document.getElementById(`react-app`));
