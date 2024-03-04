import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";
// import { map } from "rxjs/operators";
import { Comment } from "../interfaces/comment";
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
        // console.log("comments --> ", data);
      }),
      catchError(this.handleError<Comment[]>("getComments")),
    );
  }

  getUser(): Observable<User> {
    return this.httpClient.get<User>(this.userAPI).pipe(
      tap((data) => {
        // console.log("user --> ", data);
      }),
      catchError(this.handleError<User>("getUser")),
    );
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(this.commentsAPI, comment, this.httpOptions).pipe(
      tap((comment: Comment) => {
        // console.log("added a new comment");
      }),
      catchError(this.handleError<Comment>("addComment")),
    );
  }

  deleteComment(id: number): Observable<Comment> {
    return this.httpClient.delete<Comment>(this.commentsAPI).pipe(
      tap((comment: Comment) => {
        // console.log("deleted a comment");
      }),
      catchError(this.handleError<Comment>("deleteComment")),
    );
  }

  addReply(reply: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(this.commentsAPI, reply, this.httpOptions).pipe(
      tap((reply: Comment) => {
        // console.log("added a new reply", reply);
      }),
      catchError(this.handleError<Comment>("addReply")),
    );
  }

  updateComment(id: number, comment: Comment): Observable<Comment> {
    return this.httpClient.put<Comment>(this.commentsAPI, comment, this.httpOptions).pipe(
      tap((updatedComment: Comment) => {
        // console.log("updatedComment", updatedComment);
      }),
      catchError(this.handleError<Comment>("editComment")),
    );
  }

  genId(): number {
    const min = 1;
    const max = 10_000_000;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
