import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/blog/models/blog';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {
  @Output() deleteAllEmitter = new EventEmitter<string>();

  constructor(private router: Router, private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {}

  goToPage($myParam: string = ''): void {
    let s = this.router.url;
    const navigationDetails: string[] = [s]; 
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

deleteAll () {
  this.deleteAllEmitter.emit();
}

}