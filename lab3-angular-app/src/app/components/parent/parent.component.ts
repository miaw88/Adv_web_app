import { OnInit, Component, ViewChild, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from "@angular/core";
import { ChildComponent } from "../child/child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.CSS']
})

export class ParentComponent implements OnChanges,
  OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @ViewChild(ChildComponent)
  childComponent!: ChildComponent;

  parentData!: number;
  childData!: number;
  textMessage!: string;
  status!: string;
  public showChild = true;

  constructor() {
    console.log('Constructor Work!');
  }

  ngOnInit(): void {
    this.parentData = 0;
    this.childData = 0;
    console.log('ngOnInit child Work!');
  }

  ngOnChanges() {
    console.log('ngOnChanges child Work!');
  }
  ngDoCheck() {
    console.log(this.textMessage);

    console.log('ngDoCheck child Work!');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit child Work!');
  }
  ngAfterContentChecked() {
    if (this.textMessage == "B6310646") { this.status = "Your ID is OK"; } else { this.status = "Error"; }
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

  onClick2Child() {
    this.parentData += 1;
  }

  receiveData($event: any) {
    this.childData = $event;
  }

  onClickViewChild() {
    this.childComponent.onClick2Parent();
  }

  update(){
    this.showChild = !this.showChild
  }
}