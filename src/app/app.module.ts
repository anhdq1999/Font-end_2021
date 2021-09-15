import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TrangChuComponent } from "./Component/trang-chu/trang-chu.component";
import { ChinhTriComponent } from "./Component/chinh-tri/chinh-tri.component";
import { KinhDoanhComponent } from "./Component/kinh-doanh/kinh-doanh.component";
import { TopHeaderComponent } from "./Page/top-header/top-header.component";
import { HeaderComponent } from "./Page/header/header.component";
import { NavBarComponent } from "./Page/nav-bar/nav-bar.component";
import { FooterComponent } from "./Page/footer/footer.component";
import { ThoiSuComponent } from "./Component/thoi-su/thoi-su.component";
import { GiaiTriComponent } from "./Component/giai-tri/giai-tri.component";
import { TheGioiComponent } from "./Component/the-gioi/the-gioi.component";
import { GiaoDucComponent } from "./Component/giao-duc/giao-duc.component";
import { DoiSongComponent } from "./Component/doi-song/doi-song.component";
import { PhapLuatComponent } from "./Component/phap-luat/phap-luat.component";
import { TheThaoComponent } from "./Component/the-thao/the-thao.component";
import { SucKhoeComponent } from "./Component/suc-khoe/suc-khoe.component";
import { TalksComponent } from "./Component/talks/talks.component";
import { BatDongSanComponent } from "./Component/bat-dong-san/bat-dong-san.component";
import { BanDocComponent } from "./Component/ban-doc/ban-doc.component";
import { XeComponent } from "./Component/xe/xe.component";
import { TinMoiNhatComponent } from "./Component/tin-moi-nhat/tin-moi-nhat.component";
import { ChinhTriDetailComponent } from "./Component/chinh-tri/chinh-tri-detail/chinh-tri-detail.component";
import { DoiSongDetailComponent } from "./Component/doi-song/doi-song-detail/doi-song-detail.component";
import { KinhDoanhDetailComponent } from "./Component/kinh-doanh/kinh-doanh-detail/kinh-doanh-detail.component";
import { BatDongSanDetailComponent } from "./Component/bat-dong-san/bat-dong-san-detail/bat-dong-san-detail.component";
import { GiaiTriDetailComponent } from "./Component/giai-tri/giai-tri-detail/giai-tri-detail.component";
import { XeDetailComponent } from "./Component/xe/xe-detail/xe-detail.component";
import { TalksDetailComponent } from "./Component/talks/talks-detail/talks-detail.component";
import { TheGioiDetailComponent } from "./Component/the-gioi/the-gioi-detail/the-gioi-detail.component";
import { GiaoDucDetailComponent } from "./Component/giao-duc/giao-duc-detail/giao-duc-detail.component";
import { PhapLuatDetailComponent } from "./Component/phap-luat/phap-luat-detail/phap-luat-detail.component";
import { TheThaoDetailComponent } from "./Component/the-thao/the-thao-detail/the-thao-detail.component";
import { CongNgheDetailComponent } from "./Component/cong-nghe/cong-nghe-detail/cong-nghe-detail.component";
import { CongNgheComponent } from "./Component/cong-nghe/cong-nghe.component";
import { SucKhoeDetailComponent } from "./Component/suc-khoe/suc-khoe-detail/suc-khoe-detail.component";
import { ThoiSuDetailComponent } from "./Component/thoi-su/thoi-su-detail/thoi-su-detail.component";
import { TuanVnComponent } from "./Component/tuan-vn/tuan-vn.component";
import { TuanVnDetailComponent } from "./Component/tuan-vn/tuan-vn-detail/tuan-vn-detail.component";
import { GocNhinThangComponent } from "./Component/goc-nhin-thang/goc-nhin-thang.component";
import { GocNhinThangDetailComponent } from "./Component/goc-nhin-thang/goc-nhin-thang-detail/goc-nhin-thang-detail.component";
import { TinNongNhatComponent } from "./Component/tin-nong-nhat/tin-nong-nhat.component";
import { TinNongNhatDetailComponent } from "./Component/tin-nong-nhat/tin-nong-nhat-detail/tin-nong-nhat-detail.component";
import { TinMoiNhatDetailComponent } from "./Component/tin-moi-nhat/tin-moi-nhat-detail/tin-moi-nhat-detail.component";
import { BanDocDetailComponent } from "./Component/ban-doc/ban-doc-detail/ban-doc-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    ChinhTriComponent,
    KinhDoanhComponent,
    TopHeaderComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
    ThoiSuComponent,
    GiaiTriComponent,
    TheGioiComponent,
    GiaoDucComponent,
    DoiSongComponent,
    PhapLuatComponent,
    TheThaoComponent,
    SucKhoeComponent,
    TalksComponent,
    BatDongSanComponent,
    BanDocComponent,
    XeComponent,
    TinMoiNhatComponent,
    ChinhTriDetailComponent,
    DoiSongDetailComponent,
    KinhDoanhDetailComponent,
    BatDongSanDetailComponent,
    GiaiTriDetailComponent,
    XeDetailComponent,
    TalksDetailComponent,
    TheGioiDetailComponent,
    GiaoDucDetailComponent,
    PhapLuatDetailComponent,
    TheThaoDetailComponent,
    CongNgheDetailComponent,
    CongNgheComponent,
    SucKhoeDetailComponent,
    ThoiSuDetailComponent,
    TuanVnComponent,
    TuanVnDetailComponent,
    GocNhinThangComponent,
    GocNhinThangDetailComponent,
    TinNongNhatComponent,
    TinNongNhatDetailComponent,
    TinMoiNhatDetailComponent,
    BanDocDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
