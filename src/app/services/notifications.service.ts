import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { UrlsService } from "../core/urls.service";
import { CoreService } from "../core/core.service";
import { CustomHttpParamEncoder } from "../core/custom-http-param-encoder";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded",
  }),
};

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  public apiUrl: string;
  public httpOptions;

  constructor(
    private http: HttpClient,
    private urlService: UrlsService,
    public core: CoreService
  ) {

    this.apiUrl = `${this.urlService.apiUrl()}` + "notifications/";
    this.httpOptions = this.core.httpOptions;
  }


  getNotifications(dataObject: any): Promise<any> {
    let url = this.apiUrl + "?";

    if (!this.core.isEmptyOrNull(dataObject.receiver_id)) {
      url += `receiver_id=${encodeURIComponent(dataObject.receiver_id)}`;
    }

    if (!this.core.isEmptyOrNull(dataObject.sender_id)) {
      url += `&sender_id=${encodeURIComponent(dataObject.sender_id)}`;
    }

    if (!this.core.isEmptyOrNull(dataObject.keyword)) {
      url += `&keyword=${encodeURIComponent(dataObject.keyword)}`;
    }

    if (!this.core.isEmptyOrNull(dataObject.sortBy)) {
      url += `&sortBy=${encodeURIComponent(dataObject.sortBy)}`;
    }

    if (!this.core.isEmptyOrNull(dataObject.sortOrder)) {
      url += `&sortOrder=${encodeURIComponent(dataObject.sortOrder)}`;
    }

    if (!this.core.isEmptyOrNull(dataObject.page_size)) {
      url += `&page_size=${encodeURIComponent(dataObject.page_size)}`;
    }

    if (!this.core.isEmptyOrNull(dataObject.page)) {
      url += `&page=${encodeURIComponent(dataObject.page)}`;
    } else {
      url += `&page=1`;
    }

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }


  getSingleNotification(id: any
  ): Promise<any> {
    let url = this.apiUrl + id;

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }

   /** PUT: update a currenciess basic data  */
   addNotification(dataObject: any): Promise<any> {
    let url = this.apiUrl;

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.sender_id)) {
      params.append('sender_id', dataObject.sender_id);
    }

    if (!this.core.isEmptyOrNull(dataObject.receiver_id)) {
      params.append("receiver_id", dataObject.receiver_id);
    }

    if (!this.core.isEmptyOrNull(dataObject.summary)) {
      params.append("summary", dataObject.summary);
    }

    if (!this.core.isEmptyOrNull(dataObject.details)) {
      params.append("details", dataObject.details);
    }

    if (!this.core.isEmptyOrNull(dataObject.url)) {
      params.append("url", dataObject.url);
    }

    if (!this.core.isEmptyOrNull(dataObject.read)) {
      params.append("read", dataObject.read);
    }

    return this.core.makeRemoteRequest(url, "post", params, this.httpOptions);
  }


  /** PUT: read notification  */
  markAsRead(id: any): Promise<any> {
    let url = this.apiUrl + 'mark-as-read/' + id;

    return this.core.makeRemoteRequest(url, "put", null, null);
  }

  markAsUnread(id: any): Promise<any> {
    let url = this.apiUrl + 'mark-as-unread/' + id;

    return this.core.makeRemoteRequest(url, "put", null, null);
  }

  /** DELETE: delete a notification  */
  deleteNotification(id: any): Promise<any> {
    let url = '';

    // let params = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    if (!this.core.isEmptyOrNull(id)) {
      url = this.apiUrl + id;
    }

    return this.core.makeRemoteRequest(url, "delete", null, this.httpOptions);
  }

}
