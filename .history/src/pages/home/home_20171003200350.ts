import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	options: BarcodeScannerOptions;
	results: {};

  constructor(
		private barcode: BarcodeScanner,
		public navCtrl: NavController
	) { }

	async scanBarcode() {

		this.options = {
			prompt: 'Escanea un Código de barras para ver el resultado!'
		}
		this.results = await this.barcode.scan(this.options);
		console.log(this.results);
	}

}
