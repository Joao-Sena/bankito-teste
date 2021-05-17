import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getAll<T extends { id: string }>(collectionName: string): T[] {
    const collection = window.localStorage.getItem(this.getStorageId(collectionName));
    const parsedCollection = JSON.parse(collection);
    return parsedCollection ?? [];
  }

  get<T extends { id: string }>(collectionName: string, docId: string): T {
    const collection = this.getAll(collectionName);
    return collection.find( c => c.id === docId) as T;
  }

  addOrUpdate<T extends { id: string }>(collectionName: string, value: T): void {
    const collection = this.getAll(collectionName);
    const index = collection.findIndex( doc => doc.id === value.id );

    if (index >= 0) {
      collection[index] = { ...collection[index], ...value };
    } else {
      collection.push(value);
    }

    this.updateAll(collectionName, collection);
  }

  delete(collectionName: string, docId: string): number {
    const collection = this.getAll(collectionName);

    const index = collection.findIndex( doc => doc.id === docId );
    if (index < 0) {
      return -1;
    } else {
      collection.splice(index, 1);
      this.updateAll(collectionName, collection);
      return 0;
    }
  }

  private updateAll(collectionName: string, value: unknown[]): void {
    window.localStorage.setItem(this.getStorageId(collectionName), JSON.stringify(value));
  }

  private getStorageId(collectionName: string): string {
    return `collection#${collectionName}`;
  }
}
