import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Ноутбуки' },
      { id: 3, name: 'Телевизори' },
      { id: 4, name: 'Смартфони' },
    ];
    this._brands = [
      { id: 1, name: 'POCO' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Xiaomi' },
      { id: 4, name: 'Asus' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'x4 gt',
        price: 15000,
        rating: 5,
        img: 'https://hotline.ua/img/tx/349/3498057985.jpg',
      },
      {
        id: 2,
        name: 'x4 gt',
        price: 15000,
        rating: 5,
        img: 'https://hotline.ua/img/tx/349/3498057985.jpg',
      },
      {
        id: 3,
        name: 'x4 gt',
        price: 15000,
        rating: 5,
        img: 'https://hotline.ua/img/tx/349/3498057985.jpg',
      },
      {
        id: 4,
        name: 'x4 gt',
        price: 15000,
        rating: 5,
        img: 'https://hotline.ua/img/tx/349/3498057985.jpg',
      },
      {
        id: 5,
        name: 'x4 gt',
        price: 15000,
        rating: 5,
        img: 'https://hotline.ua/img/tx/349/3498057985.jpg',
      },
      {
        id: 6,
        name: 'x4 gt',
        price: 15000,
        rating: 5,
        img: 'https://hotline.ua/img/tx/349/3498057985.jpg',
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }
  setTypes(types) {
    this.types = types;
  }
  setBrands(brands) {
    this.brands = brands;
  }
  setDevices(devices) {
    this.devices = devices;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
