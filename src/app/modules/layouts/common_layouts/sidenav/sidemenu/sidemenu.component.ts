import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  isExpanded = true;
  state = 'collapsed';
  title: any = '';
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.title = params['name'];
    });
  }

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }
}
