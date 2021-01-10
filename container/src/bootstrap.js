import {mount as productsMount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartIndex';

productsMount(document.getElementById('container-product-list'));
cartMount(document.getElementById('container-cart'));