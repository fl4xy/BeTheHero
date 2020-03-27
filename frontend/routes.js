import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';

export default function Routes() {
	<BrowserRouter>
		<Switch>
			<Route path="/" component={Logon} />
		</Switch>
	</BrowserRouter>
}