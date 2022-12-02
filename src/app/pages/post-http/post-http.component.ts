import { Component, OnInit } from '@angular/core';
import {ArticlePostService} from "../../services/article-post.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-post-http',
  templateUrl: './post-http.component.html',
  styleUrls: ['./post-http.component.css']
})
export class PostHttpComponent implements OnInit {

  posts: Post[] = []

  constructor(private service: ArticlePostService) { }

  ngOnInit(): void {
    // La requête vers le serveur n'est lancée qu'a partir du moment ou on souscrit à l'observable
    this.service.all().subscribe({
      next: postsServer => {
        this.posts = postsServer
      },
      error: (err) => console.log(err) // On s'assure de toujours avoir une trace en cas d'erreur
    })
  }

  deletePost(id?: number) { // Paramètre optionnel : id? (Le ? indique la possibilité du 'undefined')
    if(id) {
      this.service.delete(id).subscribe({
        // Si l'objet retourné ne me sert à rien, je ne suis pas obligé de le déclarer
        next: () => {
          alert("Article Supprimé")
          this.ngOnInit()
        }
      })
    }
  }
}
