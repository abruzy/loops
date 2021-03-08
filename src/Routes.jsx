import { Route, Switch, Redirect } from "react-router-dom"


import Directory from './components/Home/index';
import Loop1Step1 from './components/Loop1/Step1';
import Loop1Step2 from './components/Loop2/Step2';
import Loop1Step3 from './components/Loop3/Step3';
import NotFound from './components/NotFound/NotFound';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Switch>
    <Route path="/loop1-step1" component={Loop1Step1} />
    <Route path="/loop1-step2" component={Loop1Step2} />
    <Route path="/loop1-step3" component={Loop1Step3} />
    <Route path="/not-found" component={NotFound} />
    <Route path="/" exact component={Directory} />
    <Redirect to="/not-found" />
  </Switch>
)
