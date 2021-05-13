import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  data = [
    {
      id: 72,
      code: '002020001',
      libelle: 'Coca Boite1',
      scateg: 'Coca-Sprite-Fanta',
      categ: 'Boissons',
      pa: 1.0,
      pv: 23.021,
      tva: 7,
      stock: 0,
      four: 'Ste X',
      codef: 400006,
      description: 'you have to taste it',
    },
    {
      id: 63,
      code: '002010001',
      libelle: 'Coca Boite',
      scateg: 'Coca Boite',
      categ: 'Boissons',
      pa: 1.5,
      pv: 2.982,
      tva: 7,
      stock: 0,
      four: 'Ste Foulen',
      codef: 400005,
      description: 'you have to taste it',
    },
    {
      id: 73,
      code: '002010002',
      libelle: 'Red Bull',
      scateg: 'Coca Boite',
      categ: 'Boissons',
      pa: 5.0,
      pv: 13.99,
      tva: 7,
      stock: 4,
      four: 'Ste Y',
      codef: 400007,
      description: 'you have to taste it',
    },
    {
      id: 64,
      code: '003010001',
      libelle: 'Pizza',
      scateg: 'Pizza italienne',
      categ: 'Pizza',
      pa: 2.5,
      pv: 10.0,
      tva: 7,
      stock: 0,
      four: 'Ste Foulen',
      codef: 400005,
      description: 'you have to taste it',
    },
    {
      id: 71,
      code: '003010002',
      libelle: 'Pizza 1',
      scateg: 'Pizza italienne',
      categ: 'Pizza',
      pa: 5.0,
      pv: 8.0,
      tva: 7,
      stock: 0,
      four: 'Ste Y',
      codef: 400007,
      description: 'you have to taste it',
    },
  ];

  constructor() {}
  trackByFn(index, item) {
    return item.id;
  }
  formatNumberBeforeDigit = (x) => {
    return Math.trunc(x);
  };
  formatNumberAfterDigit = (x) => {
    const res = (x % 1).toFixed(3).substring(2);
    return res;
  };
}
