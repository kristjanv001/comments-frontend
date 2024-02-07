import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";
import { CommentData } from "../interfaces/comment";

@Injectable({
  providedIn: "root",
})
export class CommentService {
  commentDataLocation = "assets/data.json";

  constructor(private httpClient: HttpClient) {}

  getCommentData(): Observable<CommentData> {
    return this.httpClient.get<CommentData>(this.commentDataLocation).pipe(
      tap((data) => {
        console.log(data)
      }),
      catchError(this.handleError<CommentData>("getComments")),
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
