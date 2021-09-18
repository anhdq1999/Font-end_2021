import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BanDocDetailComponent } from "./Component/ban-doc/ban-doc-detail/ban-doc-detail.component";
import { BanDocComponent } from "./Component/ban-doc/ban-doc.component";
import { BatDongSanDetailComponent } from "./Component/bat-dong-san/bat-dong-san-detail/bat-dong-san-detail.component";
import { BatDongSanComponent } from "./Component/bat-dong-san/bat-dong-san.component";
import { ChinhTriDetailComponent } from "./Component/chinh-tri/chinh-tri-detail/chinh-tri-detail.component";
import { ChinhTriComponent } from "./Component/chinh-tri/chinh-tri.component";
import { CongNgheDetailComponent } from "./Component/cong-nghe/cong-nghe-detail/cong-nghe-detail.component";
import { CongNgheComponent } from "./Component/cong-nghe/cong-nghe.component";
import { DoiSongComponent } from "./Component/doi-song/doi-song.component";
import { GiaiTriDetailComponent } from "./Component/giai-tri/giai-tri-detail/giai-tri-detail.component";
import { GiaiTriComponent } from "./Component/giai-tri/giai-tri.component";
import { GiaoDucDetailComponent } from "./Component/giao-duc/giao-duc-detail/giao-duc-detail.component";
import { GiaoDucComponent } from "./Component/giao-duc/giao-duc.component";
import { GocNhinThangDetailComponent } from "./Component/goc-nhin-thang/goc-nhin-thang-detail/goc-nhin-thang-detail.component";
import { GocNhinThangComponent } from "./Component/goc-nhin-thang/goc-nhin-thang.component";
import { KinhDoanhDetailComponent } from "./Component/kinh-doanh/kinh-doanh-detail/kinh-doanh-detail.component";
import { KinhDoanhComponent } from "./Component/kinh-doanh/kinh-doanh.component";
import { PageNotFoundComponent } from "./Component/page-not-found/page-not-found.component";
import { PhapLuatDetailComponent } from "./Component/phap-luat/phap-luat-detail/phap-luat-detail.component";
import { PhapLuatComponent } from "./Component/phap-luat/phap-luat.component";
import { SucKhoeDetailComponent } from "./Component/suc-khoe/suc-khoe-detail/suc-khoe-detail.component";
import { SucKhoeComponent } from "./Component/suc-khoe/suc-khoe.component";
import { TalksDetailComponent } from "./Component/talks/talks-detail/talks-detail.component";
import { TalksComponent } from "./Component/talks/talks.component";
import { TheGioiDetailComponent } from "./Component/the-gioi/the-gioi-detail/the-gioi-detail.component";
import { TheGioiComponent } from "./Component/the-gioi/the-gioi.component";
import { TheThaoComponent } from "./Component/the-thao/the-thao.component";
import { ThoiSuDetailComponent } from "./Component/thoi-su/thoi-su-detail/thoi-su-detail.component";
import { ThoiSuComponent } from "./Component/thoi-su/thoi-su.component";
import { TinMoiNhatDetailComponent } from "./Component/tin-moi-nhat/tin-moi-nhat-detail/tin-moi-nhat-detail.component";
import { TinMoiNhatComponent } from "./Component/tin-moi-nhat/tin-moi-nhat.component";
import { TinNongNhatDetailComponent } from "./Component/tin-nong-nhat/tin-nong-nhat-detail/tin-nong-nhat-detail.component";
import { TinNongNhatComponent } from "./Component/tin-nong-nhat/tin-nong-nhat.component";
import { TrangChuComponent } from "./Component/trang-chu/trang-chu.component";
import { TuanVnDetailComponent } from "./Component/tuan-vn/tuan-vn-detail/tuan-vn-detail.component";
import { TuanVnComponent } from "./Component/tuan-vn/tuan-vn.component";
import { XeDetailComponent } from "./Component/xe/xe-detail/xe-detail.component";
import { XeComponent } from "./Component/xe/xe.component";

const routes: Routes = [
  { path: "trang-chu", component: TrangChuComponent },
  { path: "", redirectTo: "/trang-chu", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
  
  { path: "thoi-su", component: ThoiSuComponent },
  { path: "thoi-su/:title", component: ThoiSuDetailComponent },

  { path: "chinh-tri", component: ChinhTriComponent },
  { path: "chinh-tri/:title", component: ChinhTriDetailComponent },

  { path: "kinh-doanh", component: KinhDoanhComponent },
  { path: "kinh-doanh/:title", component: KinhDoanhDetailComponent },

  { path: "bat-dong-san", component: BatDongSanComponent },
  { path: "bat-dong-san/:title", component: BatDongSanDetailComponent },

  { path: "giai-tri", component: GiaiTriComponent },
  { path: "giai-tri/:title", component: GiaiTriDetailComponent },

  { path: "xe", component: XeComponent },
  { path: "xe/:title", component: XeDetailComponent },

  { path: "talks", component: TalksComponent },
  { path: "talks/:title", component: TalksDetailComponent },

  { path: "the-gioi", component: TheGioiComponent },
  { path: "the-gioi/:title", component: TheGioiDetailComponent },

  { path: "giao-duc", component: GiaoDucComponent },
  { path: "giao-duc/:title", component: GiaoDucDetailComponent },

  { path: "phap-luat", component: PhapLuatComponent },
  { path: "phap-luat/:title", component: PhapLuatDetailComponent },

  { path: "the-thao", component: TheThaoComponent },
  { path: "the-thao/:title", component: TheGioiDetailComponent },

  { path: "doi-song", component: DoiSongComponent },
  { path: "doi-song/:title", component: DoiSongComponent },

  { path: "cong-nghe", component: CongNgheComponent },
  { path: "cong-nghe/:title", component: CongNgheDetailComponent },

  { path: "suc-khoe", component: SucKhoeComponent },
  { path: "suc-khoe/:title", component: SucKhoeDetailComponent },

  { path: "tuan-vn", component: TuanVnComponent },
  { path: "tuan-vn/:title", component: TuanVnDetailComponent },

  { path: "goc-nhin-thang", component: GocNhinThangComponent },
  { path: "goc-nhin-thang/:title", component: GocNhinThangDetailComponent },

  { path: "tin-moi-nhat", component: TinMoiNhatComponent },
  { path: "tin-moi-nhat/:title", component: TinMoiNhatDetailComponent },

  { path: "tin-nong-nhat", component: TinNongNhatComponent },
  { path: "tin-nong-nhat/:title", component: TinNongNhatDetailComponent },

  { path: "ban-doc", component: BanDocComponent },
  { path: "ban-doc/:title", component: BanDocDetailComponent },

 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
