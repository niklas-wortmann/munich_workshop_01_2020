import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  public search = new FormControl();
  @Output() value = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.search.valueChanges.subscribe(value => {
      this.value.emit(value);
    })
  }
}
