import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanDocComponent } from './Component/ban-doc/ban-doc.component';
import { BatDongSanComponent } from './Component/bat-dong-san/bat-dong-san.component';
import { ChinhTriComponent } from './Component/chinh-tri/chinh-tri.component';
import { CongNgheComponent } from './Component/cong-nghe/cong-nghe.component';
import { DoiSongComponent } from './Component/doi-song/doi-song.component';
import { DuLichComponent } from './Component/du-lich/du-lich.component';
import { GiaiTriComponent } from './Component/giai-tri/giai-tri.component';
import { GiaoDucComponent } from './Component/giao-duc/giao-duc.component';
import { KinhDoanhComponent } from './Component/kinh-doanh/kinh-doanh.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { PhapLuatComponent } from './Component/phap-luat/phap-luat.component';
import { SucKhoeComponent } from './Component/suc-khoe/suc-khoe.component';
import { TalksComponent } from './Component/talks/talks.component';
import { TheGioiComponent } from './Component/the-gioi/the-gioi.component';
import { TheThaoComponent } from './Component/the-thao/the-thao.component';
import { ThoiSuComponent } from './Component/thoi-su/thoi-su.component';
import { TrangChuComponent } from './Component/trang-chu/trang-chu.component';
import { XeComponent } from './Component/xe/xe.component';

const routes: Routes = [
  { path: '', redirectTo:'/trang-chu',pathMatch:'full' },
  { path: 'trang-chu', component: TrangChuComponent },
  { path: 'chinh-tri', component: ChinhTriComponent },
  { path: 'kinh-doanh', component: KinhDoanhComponent },
  { path: 'cong-nghe', component: CongNgheComponent },
  { path: 'doi-song', component: DoiSongComponent },
  { path: 'giai-tri', component: GiaiTriComponent },
  { path: 'giao-duc', component: GiaoDucComponent },
  { path: 'phap-luat', component: PhapLuatComponent },
  { path: 'suc-khoe', component: SucKhoeComponent },
  { path: 'the-thao', component: TheThaoComponent },
  { path: 'thoi-su', component: ThoiSuComponent },
  { path: 'xe', component: XeComponent },
  { path: 'ban-doc', component: BanDocComponent },
  { path: 'bat-dong-san', component: BatDongSanComponent },
  { path: 'talks', component: TalksComponent },
  { path: 'the-gioi', component: TheGioiComponent },
  { path: 'du-lich', component: DuLichComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
