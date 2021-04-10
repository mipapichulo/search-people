import { Switch, Route } from 'react-router-dom';
import PageNotFound from '../pages/404';
import DetailResult from '../pages/DetailResult';
import Results from '../pages/Results';


const ResultsRouter = () => (
    <Switch>
      <Route path="/results¿n=:name" component={Results} />
      <Route path="/results¿id=:id" component={DetailResult}/>
      <Route path="/results" exact component={Results} />
      <Route component={PageNotFound}/>
    </Switch>
)

export default ResultsRouter;