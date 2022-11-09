import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import {AltasreqComponent} from "./demo/components/altasreq/altasreq.component"
import {ListadoComponent} from "./demo/components/listado/listado.component"
import { AccesoGuard } from './guards/acceso.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'dashboard', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path:'altarequisicion',component:AltasreqComponent},
                    { path : 'listado',component:ListadoComponent}
                ],
                canActivate:[AccesoGuard]
            },
           
            { path: '', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },

            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
