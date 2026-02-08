import { Component, inject, Injector, ResourceLoaderParams, ResourceRef, signal } from '@angular/core'; 
import { rxResource } from '@angular/core/rxjs-interop';
import { IFlagList } from '../../model/flags.model';
 import { FlagListService } from '../../service/flag-list/flag-list';

@Component({
  selector: 'app-flag-list',
  imports: [],
  template: `
    @if (flagResource.isLoading()) {
      <div class="p-2 border flex flex-wrap items-center gap-2 border-gray-200 rounded-sm">
        @for (item of [1,2,3,4,5,6,7,8,9,10]; track $index) {
          <div class="w-[240px] h-[200px] bg-gray-200 animate-pulse rounded-sm"></div> 
        } 
      </div>
    } @else {
      <div class="p-2 flex flex-wrap gap-2">
        @for (item of flagResource.value(); track $index; let pokeID = $index) {
          <div class="p-2 w-[240px] border flex flex-col items-center gap-2 border-gray-200 rounded-sm">
            <img
              [src]="item.flags.png"
              alt="{{ item.name.common }}"
              class="w-20 h-auto"
            />
            <h4>{{ item.name.common }}</h4>
          </div>
        }
      </div>
    }
  `,
  styles: ``,
})
export class FlagList {
  private flagListService = inject(FlagListService);
  private pageCount = signal(20); 
  protected flagResource = rxResource({
      params: () => this.pageCount(),
      stream: (params: ResourceLoaderParams<number>) => this.flagListService.getflagList() 
    });

  constructor() { 
  }
}
