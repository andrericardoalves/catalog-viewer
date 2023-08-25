import { Component, Input, OnInit, Output, EventEmitter, } from "@angular/core";

@Component({
  selector: "thumbs",
  templateUrl: "./thumbs.component.html",
  styleUrls: ["./thumbs.component.scss"]
})
export class Thumbs implements OnInit {
  @Input() items;
  @Input() currentIndex;
  @Output() selectedCatalog: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit() {

  }

  selectItem(item){
    this.currentIndex = item;
    this.selectedCatalog.emit(item);
  }

}
