import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opc: MenuItem[] = [];
  estilosMenu: {}= {
    'background-color': '#8DC3D8',
    'border': '0',


  }
  constructor() { }

  ngOnInit(): void {

    this.opc = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        // items: [
        //   {
        //     label: 'Crud Cliente'
        //   },
        //   {
        //     label: 'HTML 2'
        //   }
        // ]
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-qrcode',
      },
      {
        label: 'Comprar',
        icon: 'pi pi-fw pi-shopping-bag',
      },
      {
        label: 'Distribuir',
        icon: 'pi pi-fw pi-shopping-cart',
      },
      {
        label: 'Proveedores',
        icon: 'pi pi-fw pi-shopping-cart',
      }

    ];
  }

}
