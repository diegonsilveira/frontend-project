import { Component, OnInit } from '@angular/core';
import { News } from "./shared/news";
import { NewsService } from './shared/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private news: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe(data => this.news = data);
  }

  deleteStudent(n){
    if (confirm("Tem certeza que gostaria de excluir a notícia " + n.title + "?")) {
      var index = this.news.indexOf(n);
      n.splice(index, 1);

      this.newsService.deleteNews(n._id)
        .subscribe(null,
          err => {
            alert("A notícia não pode ser deletada.");
            this.news.splice(index, 0, n);
          });
    }
  }

}
