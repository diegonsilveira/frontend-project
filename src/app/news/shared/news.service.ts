import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NewsService {

  //private url: string = "http://demo4401129.mockable.io/news";
  private url: string = "http://127.0.0.1:3000/noticias";

  constructor(private http: Http) { }

  getNews(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getOnlyOneNews(id){
    return this.http.get(this.getNewsUrl(id))
      .map(res => res.json());
  }

  addNews(news){
    return this.http.post(this.url, JSON.stringify(news))
      .map(res => res.json());
  }

  updateNews(news){
    return this.http.put(this.getNewsUrl(news._id), JSON.stringify(news))
      .map(res => res.json());
  }

  deleteNews(id){
    return this.http.delete(this.getNewsUrl(id))
      .map(res => res.json());
  }

  private getNewsUrl(id){
    return this.url + "/" + id;
  }
}
