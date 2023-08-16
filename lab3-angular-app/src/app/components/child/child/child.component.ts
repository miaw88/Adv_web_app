import { Component, OnInit, Input, EventEmitter, Output, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, AfterViewChecked } from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnChanges,
  OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() parentData!: number;

  @Output() messageEvent = new EventEmitter<number>();

  childData!: number;

  constructor() {
    console.log('Constructor Work!');
  }

  ngOnInit(): void {
    this.childData = 0;
    console.log('ngOnInit child Work!');
  }

  ngOnChanges() {
    console.log('ngOnChanges child Work!');
  }
  ngDoCheck() {
    console.log('ngDoCheck child Work!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit child Work!');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked child Work!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit child Work!');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked child Work!');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy child Work!');
  }
  onClick2Parent() {
    this.childData += 1;
    this.messageEvent.emit(this.childData)
  }
}