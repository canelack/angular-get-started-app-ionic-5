import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {products} from '../products';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    products = products;

    constructor(private alertController: AlertController) {
    }

    ngOnInit() {
    }

    async share() {
        const alert = await this.alertController.create({
            header: 'Sharing',
            message: 'This product has been shared',
            buttons: ['OK']
        });

        await alert.present();
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }

}
