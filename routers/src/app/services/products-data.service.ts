import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor() { }

  products : { imgUrl : string , name : string , price : number  , id : number}[] = [
		{
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
			"name": "CHECK PRINT SHIRT",
			"price": 110 ,
      "id" : 1
		},
		{
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "GLORIA HIGH LOGO SNEAKER",
			"price": 91,
      "id":2
		},
		{
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "CATE RIGID BAG",
			"price": 94.5,
      "id":3
		},
		{
			"imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
			"name": "GUESS CONNECT WATCH",
			"price": 438.9,
      "id":4
		},
		{
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "'70s RETRO GLAM KEFIAH",
			"price": 20,
      "id":5
		}
	]
}
