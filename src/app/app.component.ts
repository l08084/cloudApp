import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // 初期化処理完了通知のngOnInit()実装

  tourObj; // 選択したツアー情報(1件分)
  selectedData; // 選択したエリアのツアー情報
  bookmarks; // ブックマーク
  isMobile = false; // PCとモバイルの判定
  MOBILE_SCREEN_WIDTH = 768; // モバイル判定画面幅
  isCollapsed = false; // エリア選択メニューの開閉
  areas = [
    // 3エリアの全データ
    { code: 'BCH', name: 'ビーチリゾート', data: null},
    { code: 'EUR', name: 'ヨーロッパ', data: null},
    { code: 'DUS', name: 'アメリカ', data: null},
    { code: 'BOOKMARK', name: 'お気に入り', data: null},
  ];

  public constructor(private httpService: HttpService) { }

  // アプリ起動時の処理
  ngOnInit() {
    // クラウドからツアー情報取得
    this.getTour();
  }

  // 3エリアのツアー情報を一括受信
  getTour() {
    this.selectedData = null;
    for (let i = 0; i < this.areas.length; i++) {
      let areaCode = this.areas[i].code;
      if (areaCode === 'BOOKMARK') {
        // お気に入りはローカル保存のため受信不要
        continue;
      }
      this.httpService.getTourData(areaCode)
        .subscribe(
          result => this.setTour(result, i),
          error => alert('通信エラー¥n' + error)
        );
    }
  }

  // 受信データの取得
  setTour(result, i) {
    // Web APIエラー発生時
    if (result.error) {
      alert('Web APIエラー¥n' + result.message);
      return;
    }
    // Web API成功時
    this.areas[i].data = result;
  }
}
