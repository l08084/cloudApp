// ------------------------
// 通信処理
// ------------------------
import { Injectable } from '@angular/core';
import { RequestOptions, URLSearchParams, Jsonp, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable() // DIできるように@Injectable宣言
export class HttpService {
    // Web API URL
    WEB_API_URL: String = 'https://webservice.recruit.co.jp/ab-road/tour/v1/';
    // APIキー
    API_KEY = '入手したAPIキー';
    // 取得件数
    DEFAULT_SIZE = '30';
    // 取得の順番(人気順:5)
    SORT_RANKING = '5';
    // JSONPコールバック関数名(Angular2固有値)
    CALLBACK = 'JSONP_CALLBACK';

    // JsonpのDI
    constructor(private jsonp: Jsonp) {
        // JsonpをDI
    }

    // クラウドからツアー情報取得
    getTourData(areaCode: String): Observable<any> {
        // 接続設定
        let option = this.setParam(areaCode);
        // データ取得
        return this.reqData(option);
    }

    // 通信

}
