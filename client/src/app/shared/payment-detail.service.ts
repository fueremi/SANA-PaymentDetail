import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = "http://localhost:11601/api/PaymentDetails";
  formData: PaymentDetail = new PaymentDetail()
  list: PaymentDetail[];

  postPaymentDetail() {
    return this.http.post(this.baseURL, this.formData)
  }

  updatePaymentDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailId}`, this.formData)
  }

  fetchList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res => this.list = res as PaymentDetail[])
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`)
  }
}
