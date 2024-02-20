import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";
// import { map } from "rxjs/operators";
import { CommentData, Comment } from "../interfaces/comment";
import { User } from "../interfaces/user";

@Injectable({
  providedIn: "root",
})
export class CommentService {
  commentsAPI = "api/comments";
  userAPI = "api/user";
  httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.commentsAPI).pipe(
      tap((data) => {
        console.log("comments --> ", data);
      }),
      catchError(this.handleError<Comment[]>("getComments")),
    );
  }

  getUser(): Observable<User> {
    return this.httpClient.get<User>(this.userAPI).pipe(
      tap((data) => {
        console.log("user --> ", data);
      }),
      catchError(this.handleError<User>("getUser")),
    );
  }

  addComment(newComment: Comment): Observable<Comment> {
    console.log("incoming newComment", newComment);
    return this.httpClient.post<Comment>(this.commentsAPI, newComment, this.httpOptions).pipe(
      tap((newComment: Comment) => {
        console.log("added a new comment", newComment);
      }),
      catchError(this.handleError<Comment>("addComment")),
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
