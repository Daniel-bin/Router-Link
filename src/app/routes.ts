import { FlopListComponent} from './flop-list/flop-list.component';
import { WatchListComponent } from './watch-list/watch-list.component';


export const routingTable = [
  { path: '', redirectTo: 'flops', pathMatch: 'full'},
  { path: 'flops', component: FlopListComponent},
  { path: 'watchlist', component: WatchListComponent}
]