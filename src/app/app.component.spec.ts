import { TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideStore(reducers, { metaReducers })],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
