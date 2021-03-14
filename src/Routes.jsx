import { Route, Switch, Redirect } from "react-router-dom"


import Directory from './components/Home/index';
import NotFound from './components/NotFound/NotFound';
import Loop1Step1 from './components/Loop1/Step1/Step1';
import Loop1Step2 from './components/Loop1/Step2/Step2';
import Loop1Step3 from './components/Loop1/Step3/Step3';
import Loop1Step4 from './components/Loop1/Step4/Step4';
import Loop1Step5 from './components/Loop1/Step5/Step5';
import Loop1Step6 from "./components/Loop1/Step6/Step6";
import Loop1Step7 from './components/Loop1/Step7/Step7';
import Loop1Step8 from './components/Loop1/Step8/Step8';
import Loop1Step9 from './components/Loop1/Step9/Step9';
import Loop1Step10 from './components/Loop1/Step10/Step10';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Switch>
    <Route path="/loop1-step1" component={Loop1Step1} />
    <Route path="/loop1-step2" component={Loop1Step2} />
    <Route path="/loop1-step3" component={Loop1Step3} />
    <Route path="/loop1-step4" component={Loop1Step4} />
    <Route path="/loop1-step5" component={Loop1Step5} />
    <Route path="/loop1-step6" component={Loop1Step6} />
    <Route path="/loop1-step7" component={Loop1Step7} />
    <Route path="/loop1-step8" component={Loop1Step8} />
    <Route path="/loop1-step9" component={Loop1Step9} />
    <Route path="/loop1-step10" component={Loop1Step10} />
    <Route path="/not-found" component={NotFound} />
    <Route path="/" exact component={Directory} />
    <Redirect to="/not-found" />
  </Switch>
)
