import { Component, OnInit } from '@angular/core';
import { UserService, ViewService } from '../../../index';
import {
  DrupalConstants, ViewOptions, UserEntity, ContentService, ContentEntity, TaxonomyService,
  TaxonomyTermEntity
} from '../../../src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private userService: UserService,
    private viewService: ViewService,
    private contentService: ContentService,
    private taxonomyService: TaxonomyService,
  ) { }

  ngOnInit() {
    console.log(DrupalConstants.Connection);
  }

  login() {
    const user = {
      name: 'root',
      pass: 'root'
    };
    this.userService.login(user).subscribe(data => {
      console.log(data);
    });
  }

  logout() {
    this.userService.logout().subscribe(data => {
      console.log('logged out');
    });
  }

  getUser() {
    this.userService.get(2).subscribe(data => {
      console.log(data);
    });
  }

  createUser() {
    const user: UserEntity = {
      name: [
        { value: '123123123' }
      ],
      mail: [
        { value: 'blabla@awdawd.com' }
      ]
    };
    this.userService.create(user).subscribe(data => {
      console.log(data);
    });
  }

  updateUser() {
    const user: UserEntity = {
      name: [
        { value: 'newname' }
      ],
      mail: [
        { value: 'newmail@awdawdadw.com' }
      ]
    };
    this.userService.update(2, user).subscribe(data => {
      console.log(data);
    });
  }

  deleteUser() {
    this.userService.delete(2).subscribe(data => {
      console.log(data);
    });
  }

  getView() {
    this.viewService.getView('test').subscribe(data => {
      console.log(data);
    });
  }

  getViewResult() {
    const options: ViewOptions = {
      args: [],
      filters: {
        // uid: 'testtest, root'
      },
      pagination: {
        page: 1
      }
    };
    this.viewService.get('/view/test', options).subscribe(data => {
      console.log(data);
    });
  }

  getContent() {
    this.contentService.get(1).subscribe(data => {
      console.log(data);
    });
  }

  createContent() {
    const node: ContentEntity = {
      title: [
        {
          value: 'teest',
        },
      ],
      type: [
        {
          target_id: 'article',
        },
      ],
    };
    this.contentService.create(node).subscribe(data => {
      console.log(data);
    });
  }

  updateContent() {
    const node: ContentEntity = {
      title: [
        {
          value: 'test2',
        },
      ],
    };
    this.contentService.update(2, node).subscribe(data => {
      console.log(data);
    });
  }

  deleteContent() {
    this.contentService.delete(2).subscribe(data => {
      console.log(data);
    });
  }

  contentType() {
    this.contentService.contentType('article').subscribe(data => {
      console.log(data);
    });
  }

  getTerm() {
    this.taxonomyService.get(1).subscribe(data => {
      console.log(data);
    });
  }

  createTerm() {
    const term: TaxonomyTermEntity = {
      name: [
        {
          value: 'test'
        }
      ],
      vid: [
        {
          target_id: 'tags'
        }
      ]
    };

    this.taxonomyService.create(term).subscribe(data => {
      console.log(data);
    });
  }

  updateTerm() {
    const term: TaxonomyTermEntity = {
      name: [
        {
          value: 'test1'
        }
      ],
      vid: [
        {
          target_id: 'tags'
        }
      ]
    };

    this.taxonomyService.update(2, term).subscribe(data => {
      console.log(data);
    });
  }

  deleteTerm() {
    this.taxonomyService.delete(2).subscribe(data => {
      console.log(data);
    });
  }

  getVocabulary() {
    this.taxonomyService.vocabulary('tags').subscribe(data => {
      console.log(data);
    });
  }

}
