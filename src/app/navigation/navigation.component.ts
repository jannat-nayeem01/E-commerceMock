import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
Name="Jannatun Nayeem";
MyInfo={
  name:'Jannatun Nayeem',
  id: 'st124438'
}
whenchanged(event:any){
  this.Name = event.target.value;
}

}
