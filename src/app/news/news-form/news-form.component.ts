import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { News } from '../shared/news';
import { NewsService } from '../shared/news.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {

  form: FormGroup;
  titulo: string;
  news;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {
    this.form = formBuilder.group({
      titulo: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      conteudo:['', []]
    });
  }

  ngOnInit() {

    var self = this;

    //this.news = {};
    //this.news['titulo'] = 'titulo';
    //this.news['conteudo'] = 'conteudo';

    this.route.params.subscribe(params => {
      var id = params['id'];

      this.titulo = id ? 'Alterar notícia' : 'Incluir notícia';

      if (!id) {
        this.news = new News;
        debugger;
        return;
      }

      this.newsService.getOnlyOneNews(id).subscribe((news) =>{
        this.news = news;
      });
    });
  }

  save() {
      var result,
      newsValue = this.news;

      if (newsValue.id){
        result = this.newsService.updateNews(newsValue);
      } else {
        result = this.newsService.addNews(newsValue);
      }

      result.subscribe(data => this.router.navigate(['news']));
  }
}
