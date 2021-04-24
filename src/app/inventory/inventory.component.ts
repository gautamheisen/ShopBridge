import { Component, OnInit } from '@angular/core';
import{HelperserviceService} from '../helperservice.service'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private helper:HelperserviceService) { }
inventorylist :any
modifyinventory = false
obj = {}
  ngOnInit(): void {
    this.helper.getInventoryList().subscribe(data=>{
      this.inventorylist=data
    })
  }
Modify(type,data){
if(type=='Update'){
  this.modifyinventory = true
  this.obj ={id:data.id,name : data.name,description:data.description,price:data.price}
}
else if(type=='New'){
  this.modifyinventory = true
  this.obj ={id:'',name : '',description:'',price:''}
}
else if(type=='Delete'){
  this.modifyinventory = false
  this.helper.DeleteInventory(data).subscribe(response=>{
    console.log(response)
  })
}
}
OnModifyInventory(){
  this.modifyinventory = false
}
}
