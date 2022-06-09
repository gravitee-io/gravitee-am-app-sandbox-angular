/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Component} from '@angular/core';
import {ConfigurationService} from '../services/configuration.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  private authConfig: any;
  paymentRequest: any = {};
  response: any;

  constructor(private configurationService: ConfigurationService) {
    this.authConfig = this.configurationService.get('auth');
  }

  initiatePayment(): void {
    let parameterizedScope = 'openid profile email payment:' + this.paymentRequest.message + '-' + this.paymentRequest.amount;
    window.location.href = this.authConfig.baseURL
      + '/'
      + this.authConfig.domain
      + '/oauth/authorize?client_id=' + this.authConfig.clientId
      + '&response_type=token&scope=' + encodeURIComponent(parameterizedScope)
      + '&redirect_uri=' + window.location.origin + '/login/callback';
  }
}
