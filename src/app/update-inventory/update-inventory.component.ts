import { Component, OnInit,Input, OnChanges,Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import{HelperserviceService} from '../helperservice.service'


@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit,OnChanges {
@Input () data : any;
@Output() saveEvent = new EventEmitter<any>();
  constructor(private fb: FormBuilder,private helper:HelperserviceService) { }
inventoryform = this.fb.group(
  {
    name : ['',Validators.required],
    description :['',Validators.required],
    price:['',Validators.required]
  }
)
  ngOnInit(): void {
    this.inventoryform.setValue({name:this.data.name,description:this.data.description,price:this.data.price})
  }
  ngOnChanges():void{
    this.inventoryform.setValue({name:this.data.name,description:this.data.description,price:this.data.price})
  }
  submit(){
    console.log(this.inventoryform.getRawValue())
    if(this.data.id=''){
      this.helper.postInventory(this.inventoryform.getRawValue()).subscribe(response=>{
        console.log(response)
      })

    }
    else{
      this.helper.UpdateInventory(this.inventoryform.getRawValue()).subscribe(response=>{
        console.log(response)
      })
    }
    this.saveEvent.emit();
  }

}
