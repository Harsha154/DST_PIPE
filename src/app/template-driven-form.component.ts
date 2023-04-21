// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { NgForm } from '@angular/forms';

// import { UserService } from './services/user-service';
// import { User } from './domain/user';
// import jspdf from 'jspdf';
// import html2canvas from 'html2canvas';

// @Component({
//    selector: 'app-template',
//    templateUrl: './template-driven-form.component.html',
//    styleUrls: ['./style.css'] 
// })
// export class TemplateDrivenFormComponent { 
// 	@ViewChild('myDiv') myDiv:ElementRef;

//     isValidFormSubmitted = false;
// 	user = new User();
// 	deadEnds = false;
// 	thermo = false;
// 	llf = false;
// 	ct = false;
// 	cim = false;
// 	deco = false;
// 	spa = false;
// 	faucet = false;
// 	hose = false;
// 	showForm=false;
// 	showMainContent: Boolean = true;
// 	constructor(private userService: UserService) {
// 	}
// 	onFormSubmit(form: NgForm) {
// 	   this.isValidFormSubmitted = false;
// 	   if(form.invalid){
// 		  return;	
// 	   } 	
// 	   this.isValidFormSubmitted = true;
// 	   this.showForm = true;
// 	  // this.user.isTCAccepted = form.controls['tc'].value;
// 	  // this.user.rcAccepted = form.controls['rc'].value;
// 	  // this.user.timeToTap = form.controls['timeToTapInput'].value;
// 	   this.user.buidingType = form.controls['buidingType'].value;
// 	   this.user.retirementBuilding = form.controls['retirementBuilding'].value;
// 	   this.user.hotelBuilding = form.controls['hotelBuilding'].value;
// 	   this.user.coolingTower = form.controls['coolingTower'].value;
// 	   this.user.decoFoun = form.controls['decoFoun'].value;
// 	   this.user.hotTub = form.controls['hotTub'].value;
// 	   this.user.humidifier = form.controls['humidifier'].value;
// 	   this.user.llf = form.controls['llf'].value;
// 	   this.user.tmv = form.controls['tmv'].value;
// 	   this.user.deadEnd = form.controls['deadEnd'].value;
// 	   this.user.basement = form.controls['basement'].value;
// 	   this.user.ef = form.controls['ef'].value;
// 	   this.user.sfh = form.controls['sfh'].value;
// 	   this.user.buildingLevel = form.controls['buildingLevel'].value;
// 	   this.user.setpoint = form.controls['setpoint'].value;
// 	   this.user.residualLevel = form.controls['residualLevel'].value;
	   
// 	   //this.user.isDeadEnd = form.controls['deadEnds'].value;
// 	   //this.userService.createUser(this.user);
// 	   //this.onClickMe();
// 	   this.resetForm(form);
// 	}
// 	resetForm(form: NgForm) {
// 	   this.user = new User();	
// 	   form.resetForm({
		   
// 	   });	
// 	}

// 	/*onElectric(){
// 		if(this.user.headfield === 'electric'){
// 			return true;
// 		}
// 	}*/
	
	
// 	onBuilding(){
// 		console.log(this.showForm);
// 		if(this.user.buidingType ==='buidingTypeYes' || this.user.retirementBuilding==='retirementBuildingYes' || this.user.hotelBuilding === 'hotelBuildingYes' || this.user.basement === 'basementYes') {
// 			return true;
// 		}
// 	}

//     onCt() {
// 		if(this.user.coolingTower === 'coolingTowerYes') {
// 			return true;
// 		}
// 	}
// 	onCtDont() {
// 		if(this.user.coolingTower === 'coolingTowerDont') {
// 			return true;
// 		}
// 	}

// 	onHt() {
// 		if(this.user.hotTub === 'hotTubYes') {
// 			return true;
// 		}
// 	}

// 	onDecoFoun() {
// 		if(this.user.decoFoun === 'decoFounYes') {
// 			return true;
// 		}
// 	}

// 	onHumid() {
// 		if(this.user.humidifier === 'humidifierYes') {
// 			return true;
// 		}
// 	}

//    onLowFixtures() {
// 	   if(this.user.llf === 'llfYes') {
// 		   return true;
// 	   }
//    }

//    onDe() {
// 	   if(this.user.deadEnd === 'deadEndYes') {
// 		   return true;
// 	   }
//    }

//    onThermoMix() {
// 	   if(this.user.tmv === 'tmvYes') {
// 		   return true;
// 	   }
//    }

//    onEf() {
// 	   if(this.user.ef === 'efYes') {
// 		   return true;
// 	   }
//    }

//    onSfh() {
// 	   if(this.user.sfh === 'sfhYes') {
// 		   return true;
// 	   }
//    }

//    ctinfo(e) {
// 	   console.log(e.target.onClickMe);
// 	   this.ct = e.target.onClickMe;
//    }
// 	onDeadEnds(e){
// 		this.deadEnds= e.target.checked;
// 	  }
// 	  onThermo(e){
// 		this.thermo= e.target.checked;
// 	  }
// 	  onLlf(e){
// 		this.llf= e.target.checked;
// 	  }
// 	  onCim(e){
// 		this.cim= e.target.checked;
// 	  }
// 	  onDeco(e){
// 		this.deco= e.target.checked;
// 	  }
// 	  onSpa(e){
// 		this.spa= e.target.checked;
// 	  }
// 	  onFaucet(e){
// 		this.faucet= e.target.checked;
// 	  }
// 	  onHose(e){
// 		this.hose= e.target.checked;
// 	  }

	
// 	/*onRecirculation() {
// 		if(this.user.rcAccepted === 'yes'){
// 			return true;
// 		}
// 	}
// selectedDay:string;
// 	radioChanged(event: any){
// 		this.selectedDay = event.target.value;
// 	}

// 	ShowHideDiv(){
// 		if(this.selectedDay === 'gas'){
// return true;
// 		}
// 	}*/
// 	exportAsPDF()
// 	{
// 	  //let data = document.querySelector('#myDiv');  
// 	  html2canvas(document.querySelector('#myDiv')).then(canvas => {
// 		const contentDataURL = canvas.toDataURL('image/png')  
// 		let pdf = new jspdf('l', 'cm', 'a4'); //Generates PDF in landscape mode
// 		// let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
// 		pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
// 		pdf.save('Filename.pdf');   
// 	  }); 
// 	}

// 	public openPDF():void {
// 		let DATA = this.myDiv.nativeElement;
// 		let doc = new jspdf('p','pt', 'a4');
// 		doc.fromHTML(DATA.innerHTML,15,15);
// 		doc.output('dataurlnewwindow');
	
// 	  }

// 	 downloadPDF() {
// 		let DATA = this.myDiv.nativeElement;
// 		//let DATA = document.getElementById('MyDIv');
// 		let doc = new jspdf('p','pt', 'a4');
	
// 		let handleElement = {
// 		  '#editor':function(element,renderer){
// 			return true;
// 		  }
// 		};
// 	//	doc.fromHTML(DATA.innerHTML,15,15,{
// 	//	  'width': 200,
// 	//	  'elementHandlers': handleElement
// 	//	});
// 	doc.fromHTML(DATA.innerHTML, 15, 15, {
// 		'width': 500
// 	  }, function (dispose) {
// 	  doc.save('DST-results.pdf');
// 	  });
		
// 	//	doc.save('angular-demo.pdf');
// 	  }

// 	  ShowHideButton() {
// 		this.showMainContent = this.showMainContent ? false : true;
// 	 }

// 	 clickMessage = '';
// 	 results: string;
// 	 value:number;

//   /*onClickMe() { 
// 	  //this.results=false;
//    if(this.user.timeToTap >= '60'){
// 	   this.results = 'number is greater than 60';
// 	   return true;
//   } else if(this.user.timeToTap >= '30') {
// 	  console.log('yay')
// 	  this.results = 'value above 30';
// 	  return true;
	  
//    } else if(this.user.timeToTap < '30') {
// 	   this.results = 'value below 30';
// 	   return true;
	  
//    }
//   return false;

// }*/


  

  
//   values: number;
//   //results: string;

//   onKey(event: any) { 
// 	this.value = event.target.value;
// 	 if(this.value >= 60){
// 	   this.results = 'Based on your input, your time to temperature is unacceptable based on available guidance documents. Please find a summary of guidance documents below:';
	  
//   } else if(this.value >= 30) {
// 	  this.results = 'Based on your input, your time to temperature is acceptable based on most of the guidance documents except ASPE, 2003. Please find a summary of guidance documents below:';
	 
	  
//    } else if(this.value < 30) {
// 	   this.results = 'Based on your input, your time to temperature is acceptable based on available guidance documents. Please find a summary of guidance documents below:';   
	  
//    }
	
//   }

//   setpointResults: string;
//   onSetpoint(){
// 	  if(this.user.setpoint === 'setpointGreater') {
// 		  this.setpointResults = 'Based on your input, your hot water temperature at POU is acceptable based on available guidance documents. Please find a summary of guidance documents below:';
// 	  } else if(this.user.setpoint === 'setpointBetween') {
// 		  this.setpointResults = 'Based on your input, your hot water temperature at POU is unacceptable based on most of the available guidance documents. Please find a summary of guidance documents below:';
// 	  } else if(this.user.setpoint === 'setpointLesser') {
// 		  this.setpointResults = 'Based on your input, your hot water temperature at POU is acceptable based on only IPC, 2015. Please find a summary of guidance documents below:';
// 	  }
//   }

//   residualResults: string;
//   onResidualLevel() {
// 	  if(this.user.setpoint === 'residualLevel1') {
// 		  this.residualResults = 'Based on your input, your residual level is unacceptable based on available guidance documents and SMEs. Please find a summary of guidance documents below:';
// 	  } else if(this.user.setpoint === 'residualLevel1') {
// 		this.residualResults = 'Based on your input, residual level is acceptable based on most of the available guidance documents and SMEs except CDC and US EPA guidelines. Please find a summary of guidance documents below:';
// 	  } else if(this.user.setpoint === 'residualLevel1') {
// 		this.residualResults = 'Based on your input, residual level is acceptable based on most of the available guidance documents. Please find a summary of guidance documents below:';
// 	  } else if(this.user.setpoint === 'residualLevel1') {
// 		this.residualResults = 'Based on your input, your residual level is unacceptable based on available guidance documents. Please find a summary of guidance documents below:';
// 	  }
//   }
// }
    