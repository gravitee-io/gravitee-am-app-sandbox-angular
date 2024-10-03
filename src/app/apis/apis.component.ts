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
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfigurationService } from "../services/configuration.service";

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {
  apis: any = [];
  response: any;

  constructor(
    private configurationService: ConfigurationService,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) { }

  ngOnInit(): void {
    this.apis = this.configurationService.get('api').services;
  }

  call(path: string, name: string): void {
    const apiConfig = this.configurationService.get('api');
    this.httpClient.get<any>(apiConfig.baseURL + path, { observe: 'response' })
      .subscribe(
        response => {
          setTimeout(() => this.response = response, 1500);
          console.log(name)
          this.snackBar.open(`API call successful to ${name}! Status: ${response.status}`, 'Close', { // Success message
            duration: 3000,
          });
        },
        error => {
          console.error(error);
          this.snackBar.open(`API call failed to ${name}: ` + error.message, 'Close', { // Error message
            duration: 5000,
          });
        }
      );
  }
}