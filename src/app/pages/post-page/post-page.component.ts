import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent {
  constructor(
    private route: ActivatedRoute,
    ) { }
    id: string = '';

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
    }
    
}
