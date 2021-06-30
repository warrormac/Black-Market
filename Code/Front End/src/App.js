import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/home-page/home-page.component";
import AdminPanel from "./pages/admin-panel/admin-panel.component";
import AddContent from "./pages/add-content/add-content.component";
import DeleteContent from "./pages/delete-content/delete-content.component";
import AddCategory from "./pages/add-category/add-category.component";
import MainPage from "./pages/main-page/main-page.component";
import About from "./pages/about/about.component";
import PuchasesHistory from "./pages/purchases-history/purchases-history.component";
import Users from "./pages/users/users.component";

import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import PurchasesHistory from "./pages/purchases-history/purchases-history.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          }); //console.log(snapShot)
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (
                this.state.currentUser &&
                this.state.currentUser.uid === "Bml5ta0t2FVG9mq75haLIfq6Luk1"
              )
                return <Redirect to="/admin-panel" />;

              if (this.state.currentUser) return <Redirect to="/main-page" />;

              return <HomePage />;
            }}
          />

          <Route
            exact
            path="/admin-panel"
            render={() =>
              !this.state.currentUser ? <Redirect to="/" /> : <AdminPanel />
            }
          />

          <Route exact path="/users" component={Users} />

          <Route exact path="/add-content" component={AddContent} />

          <Route exact path="/delete-content" component={DeleteContent} />

          <Route exact path="/add-category" component={AddCategory} />

          <Route
            exact
            path="/main-page"
            render={() =>
              !this.state.currentUser ? <Redirect to="/" /> : <MainPage />
            }
          />

          <Route exact path="/about" component={About} />

          <Route exact path="/purchases-history" component={PurchasesHistory} />
        </Switch>
      </div>
    );
  }
}

export default App;
