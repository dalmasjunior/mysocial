import { Component } from '@angular/core';

import { DashboardPage } from '../dashboard/dashboard';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = HomePage;

  constructor() {

  }
}
