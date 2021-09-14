import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuComponent } from './Component/trang-chu/trang-chu.component';
import { ChinhTriComponent } from './Component/chinh-tri/chinh-tri.component';
import { KinhDoanhComponent } from './Component/kinh-doanh/kinh-doanh.component';
import { TopHeaderComponent } from './Page/top-header/top-header.component';
import { HeaderComponent } from './Page/header/header.component';
import { NavBarComponent } from './Page/nav-bar/nav-bar.component';
import { FooterComponent } from './Page/footer/footer.component';
import { ThoiSuComponent } from './Component/thoi-su/thoi-su.component';
import { GiaiTriComponent } from './Component/giai-tri/giai-tri.component';
import { TheGioiComponent } from './Component/the-gioi/the-gioi.component';
import { GiaoDucComponent } from './Component/giao-duc/giao-duc.component';
import { DoiSongComponent } from './Component/doi-song/doi-song.component';
import { PhapLuatComponent } from './Component/phap-luat/phap-luat.component';
import { TheThaoComponent } from './Component/the-thao/the-thao.component';
import { CongNgheComponent } from './Component/cong-nghe/cong-nghe.component';
import { SucKhoeComponent } from './Component/suc-khoe/suc-khoe.component';
import { TalksComponent } from './Component/talks/talks.component';
import { BatDongSanComponent } from './Component/bat-dong-san/bat-dong-san.component';
import { BanDocComponent } from './Component/ban-doc/ban-doc.component';
import { XeComponent } from './Component/xe/xe.component';
import { TinMoiNhatComponent } from './Component/tin-moi-nhat/tin-moi-nhat.component';
import { DuLichComponent } from './Component/du-lich/du-lich.component';
import { ChinhTriDetailComponent } from './Component/chinh-tri/chinh-tri-detail/chinh-tri-detail.component';
import { CongNgheDetailComponent } from './Component/cong-nghe/cong-nghe-detail/cong-nghe-detail.component';
import { ComponentDetailComponent } from './Component/component-detail/component-detail.component';



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
    CongNgheComponent,
    SucKhoeComponent,
    TalksComponent,
    BatDongSanComponent,
    BanDocComponent,
    XeComponent,
    TinMoiNhatComponent,
    DuLichComponent,
    ChinhTriDetailComponent,
    CongNgheDetailComponent,
    ComponentDetailComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
