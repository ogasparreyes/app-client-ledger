import { Component , inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from '../../components/side-menu/side-menu';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet,SideMenu],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage {
   protected readonly themeService = inject(ThemeService);
}
