import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'async-pipe',
  template: `
 <div class="card card-block">
  <h4 class="card-title">AsyncPipe</h4>
  <p class="card-text" ngNonBindable>{{ observableData }}
  <p class="card-text">{{ observableData }}</p> 
 </div>
`
})
class AsyncPipeComponent {
  observableData: number;
  subscription: Object = null;

  constructor() {
    this.subscribeObservable();
  }

  getObservable() { 
    return Observable
        .interval(1000)
        .take(10)
        .map((v) => v * v);
  }

  subscribeObservable() { 
    this.subscription = this.getObservable()
        .subscribe( v => this.observableData = v);
  }

  ngOnDestroy() { 
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}