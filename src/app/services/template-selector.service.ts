import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TemplateSelectorService {
  private isProState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isPro = this.isProState.asObservable();

  changeTemplate(isPro: boolean) {
    this.isProState.next(isPro);
  }
}
