import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AboutMeDialogComponent} from './about-me-dialog/about-me-dialog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RJ-Ramesh-Blog';

  constructor(public dialog: MatDialog){

  } 
  openDialog(){
    const dialogRef = this.dialog.open(AboutMeDialogComponent, );
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
