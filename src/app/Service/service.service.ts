import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { throwError } from "rxjs/internal/observable/throwError";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ServesHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  // rss thoi_su
  private rss_thoi_su =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fthoi-su.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  //url chinh-tri
  private rss_chinh_tri =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fthoi-su-chinh-tri.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&order_dir=asc&count=20";

  // url kinh-doanh
  private rss_kinh_doanh =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fkinh-doanh.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // url bat-dong-san
  private rss_bat_dong_san =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fbat-dong-san.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // url giai-tri
  private rss_giai_tri =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fgiai-tri.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss xe
  private rss_xe =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Foto-xe-may.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";
  // rss talks
  private rss_talks =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Ftalkshow.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss the-gioi
  private rss_the_gioi =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fthe-gioi.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss giao-duc
  private rss_giao_duc =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fgiao-duc.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss phap-luat
  private rss_phap_luat =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fphap-luat.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss doi-song
  private rss_doi_song =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fdoi-song.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss cong nghe
  private rss_cong_nghe =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fcong-nghe.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss suc_khoe
  private rss_suc_khoe =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fsuc-khoe.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss ban-doc
  private rss_ban_doc =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fban-doc.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss tuan-vn
  private rss_tuan_vn = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Ftuanvietnam.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss goc_nhin_thang
  private rss_goc_nhin_thang = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fgoc-nhin-thang.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss tin_moi_nhat
  private rss_tin_moi_nhat = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Ftin-moi-nhat.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss tin_nong_nhat
  private tin_nong_nhat = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Ftin-moi-nong.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

  // rss thể thao
  private rss_the_thao = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvietnamnet.vn%2Frss%2Fthe-thao.rss&api_key=rwr7qgkfpar8hckdq10q3ctab06e8fal6id1vkuh&count=20";

 

  // get json thoi-su
  public getThoiSu(): Observable<any> {
    return this.httpClient.get(this.rss_thoi_su);
  }

  // get json chinh-tri
  public getChinhtri(): Observable<any> {
    return this.httpClient.get(this.rss_chinh_tri);
  }
  // lấy json của kinh doanh
  public getKinhDoanh(): Observable<any> {
    return this.httpClient.get(this.rss_kinh_doanh);
  }
  // lấy json của kinh doanh
  public getBatDongSan(): Observable<any> {
    return this.httpClient.get(this.rss_bat_dong_san);
  }
  //  lấy json của Giải trí
  public getGiaiTri(): Observable<any> {
    return this.httpClient.get(this.rss_giai_tri);
  }
  // Lấy json của xe
  public getXe(): Observable<any> {
    return this.httpClient.get(this.rss_xe);
  }
  // Lấy json của Talks
  public getTalks(): Observable<any> {
    return this.httpClient.get(this.rss_talks);
  }
  // Lấy json của the-gioi
  public getTheGioi(): Observable<any> {
    return this.httpClient.get(this.rss_the_gioi);
  }
  // get json of giao-duc
  public getGiaoDuc(): Observable<any> {
    return this.httpClient.get(this.rss_giao_duc);
  }
  // get json phap-luat
  public getPhapLuat(): Observable<any> {
    return this.httpClient.get(this.rss_phap_luat);
  }
  // get json phap-luat
  public getDoiSong(): Observable<any> {
    return this.httpClient.get(this.rss_doi_song);
  }
  // get json cong-nghe
  public getCongNghe(): Observable<any> {
    return this.httpClient.get(this.rss_cong_nghe);
  }
  // get json suc khoe
  public getSucKhoe(): Observable<any> {
    return this.httpClient.get(this.rss_suc_khoe);
  }
  // get json ban-doc
  public getBanDoc(): Observable<any> {
    return this.httpClient.get(this.rss_ban_doc);
  }
  // get json tuanVN
  public getTuanVN(): Observable<any> {
    return this.httpClient.get(this.rss_tuan_vn);
  }
  // get json gocNhinThang
  public getGocNhinThang(): Observable<any> {
    return this.httpClient.get(this.rss_goc_nhin_thang);
  }
  // get json tinNong
  public getTinNongNhat(): Observable<any> {
    return this.httpClient.get(this.tin_nong_nhat);
  }
  // get json tinmoinhat
  public getTinMoiNhat(): Observable<any> {
    return this.httpClient.get(this.rss_tin_moi_nhat);
  }
  // get json tinmoinhat
  public getTheThao(): Observable<any> {
    return this.httpClient.get(this.rss_the_thao);
  }



  constructor(private httpClient: HttpClient) {}
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError("Something bad happened; please try again later.");
  }
}
