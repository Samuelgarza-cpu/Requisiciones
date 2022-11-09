import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        if(localStorage.getItem('email') == 'admin@hotmail.com'){
            this.model = [
                {
                    label: 'Home',
                    items: [
                        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
                    ]
                },
                {
                    label: 'Requisiciones',
                    items: [
                        { label: 'Listado', icon: 'pi pi-fw pi-prime', routerLink: ['/dashboard/listado'] },
                        { label: 'Alta Requisicion', icon: 'pi pi-fw pi-desktop',routerLink:['/dashboard/altarequisicion'] },
                    ]
                },
                {
                    label: 'Autorizacion',
                    items: [
                        { label: 'Autorizar', icon: 'pi pi-fw pi-prime', routerLink: ['#'] },
                      
                    ]
                },
          
            ];

        }else{

            this.model = [
                {
                    label: 'Home',
                    items: [
                        { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
                    ]
                },
                {
                    label: 'Usuarios',
                    items: [
                        { label: 'Crear Usuario', icon: 'pi pi-fw pi-id-card', routerLink: ['#'] },
                        { label: 'Permisos Usuario', icon: 'pi pi-fw pi-id-card', routerLink: ['#'] }
                    ]
                },
                {
                    label: 'Catalogo',
                    items: [
                        { label: 'Departamentos', icon: 'pi pi-fw pi-eye', routerLink: ['#']},
                        { label: 'Autorizadores', icon: 'pi pi-fw pi-globe', routerLink: ['#'] },
                        { label: 'Relacion de Usuario', icon: 'pi pi-fw pi-globe',
                            items: [
                            {label: 'Departamentos'},
                            {label: 'Tipo de Requisicion'},
                            {label: 'Centro de costos'}
                            ]},
                        
                    ]
                },
                {
                    label: 'Requisiciones',
                    items: [
                        { label: 'Listado', icon: 'pi pi-fw pi-prime', routerLink: ['#'] },
                        { label: 'Alta Requisicion', icon: 'pi pi-fw pi-desktop',routerLink:['/dashboard/altarequisicion'] },
                    ]
                },
                {
                    label: 'Autorizacion',
                    items: [
                        { label: 'Autorizar', icon: 'pi pi-fw pi-prime', routerLink: ['#'] },
                      
                    ]
                },
          
            ];

        }
  
    }
}
