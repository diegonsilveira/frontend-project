import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { News } from '../shared/news';
import { NewsService } from '../shared/news.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-student-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  news: News = new News();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {
    this.form = formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      description:['', []]
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['_id'];

      this.title = id ? 'Alterar notícia' : 'Incluir notícia';

      if (!id)
        return;

      this.newsService.getOnlyOneNews(id)
        .subscribe(
          news => this.news = news,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
    newsValue = this.form.value;

    if (newsValue.id){
      result = this.newsService.updateNews(newsValue);
    } else {
      result = this.newsService.addNews(newsValue);
    }

    result.subscribe(data => this.router.navigate(['news']));
  }
}
