import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from './../environments/environment';
import { NgForm } from '@angular/forms';

import { UserService } from './services/user-service';
import { QueryService } from './services/query-service';
import { User } from './domain/user';
import { Query } from './domain/query';
import domtoimage from 'dom-to-image';
//import * as jsPDF from 'jspdf';
import BuildingQuestions from "../assets/BuildingQuestions.json";
import DeviceQuestions from "../assets/DeviceQuestions.json";
import About from "../assets/About.json";
import FeaturesOutput from "../assets/FeaturesOutput.json";
import { ApiService } from "../app/api.service";
import { IModalContent } from "../app/dst.service";
import { IQueryContent } from "../app/dst.query"

import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./style.css'],
    providers: [ApiService, IModalContent, IQueryContent]
})
export class AppComponent implements OnInit{ 
    
        @ViewChild('myDiv') myDiv:ElementRef;
        @ViewChild('outputDiv') outputDiv:ElementRef;

    
        isValidFormSubmitted = false;
        user = new User();
        query = new Query();
        deadEnds = false;
        thermo = false;
        llf = false;
        ct = false;
        cim = false;
        deco = false;
        spa = false;
        faucet = false;
        hose = false;
        showForm=false;
        isLoading:Boolean;
        showMainContent: Boolean = true;
        extractBuildingQuestions: any;
        extractDeviceQuestions: any;
        extractAbout: any;
        featuresOutput: any;
        dstPostData: any;
        submitMessage: string;
        hotTemp: Number;
        
        constructor(private userService: UserService, private queryService: QueryService, private modalService: NgbModal, private ApiService: ApiService, private modelContent: IModalContent, private queryContent: IQueryContent) {
          
        }

        ngOnInit(): void {
            this.extractBuildingQuestions = BuildingQuestions;
            this.extractDeviceQuestions = DeviceQuestions;
            this.extractAbout = About;
            this.featuresOutput = FeaturesOutput;
          // this.insertData(this.modelContent);

        }

        // prepareQueryInputData()
        // {
        //     this.queryContent.name == this.query.name;
        //     this.queryContent.email == this.query.email;
        //     this.queryContent.query == this.query.query;

        //     this.insertQuery(this.queryContent);
        // }
        prepareInputData(){
            console.log("this.user.buidingType", this.modelContent.question1);
            if(this.user.buidingType == 'buidingTypeYes') {
                this.modelContent.question1 = 'Yes';
            } else {
                this.modelContent.question1 = 'No';
            }
            if(this.user.retirementBuilding =='retirementBuildingYes') {
                this.modelContent.question2 = 'Yes';
            } else {
                this.modelContent.question2 = 'No';
            }
            if(this.user.hotelBuilding =='hotelBuildingYes') {
                this.modelContent.question3 = 'Yes';
            } else {
                this.modelContent.question3 = 'No';
            }
            if(this.user.basement =='basementYes') {
                this.modelContent.question4 = 'Yes';
            } else {
                this.modelContent.question4 = 'No';
            }
            if(this.user.coolingTower =='coolingTowerYes') {
                this.modelContent.question5 = 'Yes';
            } else {
                this.modelContent.question5 = 'No';
            }
            if(this.user.hotTub =='hotTubYes') {
                this.modelContent.question6 = 'Yes';
            } else {
                this.modelContent.question6 = 'No';
            }
            if(this.user.decoFoun =='decoFounYes') {
                this.modelContent.question7 = 'Yes';
            } else {
                this.modelContent.question7 = 'No';
            }
            if(this.user.humidifier =='humidifierYes') {
                this.modelContent.question8 = 'Yes';
            } else {
                this.modelContent.question8 = 'No';
            }
            if(this.user.deadEnd =='deadEndYes') {
                this.modelContent.question9 = 'Yes';
            } else {
                this.modelContent.question9 = 'No';
            }
            if(this.user.llf =='llfYes') {
                this.modelContent.question10 = 'Yes';
            } else {
                this.modelContent.question10 = 'No';
            }
            if(this.user.ef =='efYes') {
                this.modelContent.question11 = 'Yes';
            } else {
                this.modelContent.question11 = 'No';
            }
            if(this.user.sfh =='sfhYes') {
                this.modelContent.question12 = 'Yes';
            } else {
                this.modelContent.question12 = 'No';
            }

            this.insertData(this.modelContent);
        }

         insertData(modeldata){
             if(modeldata.question1 !== undefined){
            this.ApiService.insertDstData(modeldata).subscribe(
                (response) => {    
                    console.log('response first1:', response);                                //next() callback
                  // console.log('response received for delete')
                  this.dstPostData = response; 
                  console.log('response received for delete2', this.dstPostData);

                },
                (error) => {                                        //error() callback
                  console.error('Request failed with error')
                },
                () => {                                              //complete() callback
                  console.error('Request completed');      //This is actually not needed 
                })
            } else{
                console.log("error");
            }
        }

        insertQuery(modeldata){
            if(modeldata.query !== undefined){
          this.ApiService.insertQuery(modeldata).subscribe(
              (response) => {    
                  console.log('response first1:', response);                                //next() callback
                 // console.log('response received for delete')
                 this.dstPostData = response; 
                 this.submitMessage = "Your query has been sumitted successfully. We will get back to you with a reply as soon as possible";
                 //console.log('response received for delete2', this.dstPostData);

              },
              (error) => {                                        //error() callback
                 console.error('Request failed with error')
              },
              () => {                                              //complete() callback
                 console.error('Request completed');      //This is actually not needed 
              })
          } else{
              console.log("error");
          }
      }

        onQueryFormSubmit(form: NgForm) {
         
            this.query.name = form.controls['name'].value;
            this.query.email = form.controls['email'].value;
            this.query.query = form.controls['query'].value;
            console.log("NgForm", this.query);
            this.insertQuery(this.query);

            //this.prepareQueryInputData();
        }

        onFormSubmit(form: NgForm) {
            this.showForm = true;
            this.isValidFormSubmitted = true;
         /*  this.isValidFormSubmitted = false;
            if(form.invalid){
              return;	
            } 	
            this.isValidFormSubmitted = true;
            this.showForm = true;*/
          // this.user.isTCAccepted = form.controls['tc'].value;
          // this.user.rcAccepted = form.controls['rc'].value;
          // this.user.timeToTap = form.controls['timeToTapInput'].value;
            this.user = new User();

            this.user.buidingType = form.controls['buidingType'].value;
            this.user.retirementBuilding = form.controls['retirementBuilding'].value;
            this.user.hotelBuilding = form.controls['hotelBuilding'].value;
            this.user.coolingTower = form.controls['coolingTower'].value;
            this.user.decoFoun = form.controls['decoFoun'].value;
            this.user.hotTub = form.controls['hotTub'].value;
            this.user.humidifier = form.controls['humidifier'].value;
            this.user.llf = form.controls['llf'].value;
            this.user.tmv = form.controls['tmv'].value;
            this.user.deadEnd = form.controls['deadEnd'].value;
            this.user.basement = form.controls['basement'].value;
            this.user.ef = form.controls['ef'].value;
            this.user.sfh = form.controls['sfh'].value;
            this.user.setpoint = form.controls['setpoint'].value;
            this.user.timeToTapInput = form.controls['timeToTapInput'].value;
            this.user.pou = form.controls['pou'].value;
            this.user.recLoop = form.controls['recLoop'].value;
            if(this.user.recLoop === 'recLoopYes') {
            this.user.recLoopTemp = form.controls['recLoopTemp'].value;
            }
            this.user.residualType = form.controls['residualType'].value;
            if(this.user.residualType === 'residualType2') {
            this.user.chloramineLevel = form.controls['chloramineLevel'].value;
            } else if(this.user.residualType === 'residualType3') {
            this.user.dioxideLevel = form.controls['dioxideLevel'].value;
            } else if(this.user.residualType === 'residualType1') {
            this.user.residualLevel = form.controls['residualLevel'].value;
            }
            if (this.user.tmv === 'tmvYes') {
                this.user.tmvCent = form.controls['tmvCent'].value;
            }

          // this.user.tot = form.controls['tot'].value;
          // this.user.buildingLevel = form.controls['buildingLevel'].value;

          // this.prepareInputData(); //uncomment to execute service

         //  this.user.buildingLevel = form.controls['buildingLevel'].value;
            //this.user.isDeadEnd = form.controls['deadEnds'].value;
            //this.userService.createUser(this.user);
            //this.onClickMe();
          // this.resetForm(form);

            const tempKeys = {
                1: 60,
                2: 55,
                3: 51,
                4: 49,
                5: 43,
                6: 42
            };
 
            const pou = tempKeys[this.user.pou[this.user.pou.length - 1]];
            const setpoint = tempKeys[this.user.setpoint[this.user.setpoint.length - 1]];
            const recLoopTemp = this.user.recLoop === 'recLoopYes' ? tempKeys[this.user.recLoopTemp[this.user.recLoopTemp.length - 1]] : -1;
            const MER = 0;

            if (this.user.recLoop === 'recLoopNo') {
                if (setpoint <= pou){
                    this.user.hotTemp = MER;
                }
                else{
                    this.user.hotTemp = pou;
                }
            } else if (this.user.tmv === 'tmvNo') {
                this.user.hotTemp = Math.min(
                    pou,
                    recLoopTemp
                );
            } else if (this.user.recLoop === 'recLoopNo') {
                if (setpoint <= pou){
                    this.user.hotTemp = MER;
                }
                else {
                    this.user.hotTemp = pou
                }
            } else {
                this.user.hotTemp = 
                    setpoint !== -1 
                        ? setpoint 
                        : recLoopTemp;
                
                if (recLoopTemp <= pou && recLoopTemp != -1) {
                    this.user.hotTemp = recLoopTemp;
                    this.user.hotTempType = 'recLoop';
                } else {
                    this.user.hotTemp = pou;
                    this.user.hotTempType = 'pou';
                }
                if (setpoint <= pou && setpoint <= recLoopTemp){
                    this.user.hotTemp = MER;

                }
            }
        



        }
        onDisinfectant() {
            return this.user.residualType !== 'residualType4';
        }

        redirectToResources(event) {
            event.preventDefault();
            this.isShowResources = true;
        }
        resetForm(form: NgForm) {
            this.user = new User();	
            this.isValidFormSubmitted = false;
            form.resetForm({
                
            });	
        }
    
        /*onElectric(){
            if(this.user.headfield === 'electric'){
                return true;
            }
        }*/
        isShowAbout : boolean;
        isShowResources: boolean;
        isTrainings: boolean;
        isQuestions: boolean;
        isHome: boolean;
        tmv: string;
        recLoop: string;
        residualType: string;
        
        showHome() {
            this.isShowAbout = false;
            this.isShowResources = false;
            this.isTrainings = false;
            this.isQuestions = false;
            this.isHome = true;
        }

        showSurvey(){
            this.isShowAbout = false;
            this.isShowResources = false;
            this.isTrainings = false;
            this.isQuestions = false;
            this.isHome = false;
        }

        ScrolltoAnswers(){
            window.scrollTo(405,6633);
        }

        showAbout(){
            this.isShowAbout = true;
            this.isShowResources = false;
            this.isTrainings = false;
            this.isQuestions = false;
        }

        showResources(){
            this.isShowAbout = false;
            this.isShowResources = true;
            this.isTrainings = false;
            this.isQuestions = false;
        }

        showTrainings(){
            this.isShowAbout = false;
            this.isShowResources = false;
            this.isTrainings = true;
            this.isQuestions = false;
        }

        showQuestions(){
            this.isShowAbout = false;
            this.isShowResources = false;
            this.isTrainings = false;
            this.isQuestions = true;
        }
        
      /* openTab(evt, cityName) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablinks");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
          }
          document.getElementById(cityName).style.display = "block";
          evt.currentTarget.className += " active";
        }
        element: HTMLElement;
        fakeclick() {
        this.element = document.getElementById("defaultOpen") as HTMLElement;
        this.element.click();
        }*/

        
        
        // Get the element with id="defaultOpen" and click on it
        //document.getElementById("defaultOpen").click();
        //<HTMLInputElement>document.getElementById("defaultOpen").click();
      

        onBuilding(){
            //console.log(this.showForm);
            if(this.user.buidingType ==='buidingTypeYes' || this.user.retirementBuilding==='retirementBuildingYes' || this.user.hotelBuilding === 'hotelBuildingYes' || this.user.basement === 'basementYes') {
                return true;
            }
        }
    
         onCt() {
            if(this.user.coolingTower === 'coolingTowerYes') {
                return true;
            }
        }
        onCtDont() {
            if(this.user.coolingTower === 'coolingTowerDont') {
                return true;
            }
        }
    
        onHt() {
            if(this.user.hotTub === 'hotTubYes') {
                return true;
            }
        }
    
        onDecoFoun() {
            if(this.user.decoFoun === 'decoFounYes') {
                return true;
            }
        }
    
        onHumid() {
            if(this.user.humidifier === 'humidifierYes') {
                return true;
            }
        }
    
        onLowFixtures() {
            if(this.user.llf === 'llfYes') {
                return true;
            }
        }
    
        onDe() {
            if(this.user.deadEnd === 'deadEndYes') {
                return true;
            }
        }
    
        
        onThermoMix() {
            if(this.user.tmv === 'tmvYes') {
                return true;
            }
        }

        radioChangedYes(event: any){
            this.tmv = event.target.value;
        }

        radioChangedNo(event: any){
            this.tmv = event.target.value;
        }

        radioChangedMaybe(event: any){
            this.tmv = event.target.value;
        }

        recLoopYes(event: any){
            this.recLoop = event.target.value;
        }

        recLoopNo(event: any){
            this.recLoop = event.target.value;
        }

        residualType1(event: any) {
            this.residualType = event.target.value;
        }

        residualType2(event: any) {
            this.residualType = event.target.value;
        }

        residualType3(event: any) {
            this.residualType = event.target.value;
        }

        residualType4(event: any) {
            this.residualType = event.target.value;
        }
        onrecLoopTemp7(){
            if(this.user.recLoopTemp === 'recLoopTemp7'){
                return true
            }
        }

        onpou1() {
            if(this.user.pou === 'pou1'){
                return true
            }
        }
        
        onpou2() {
            if(this.user.pou === 'pou2'){
                return true
            }
        }

        onpou3() {
            if(this.user.pou === 'pou3'){
                return true
            }
        }

        onpou4() {
            if(this.user.pou === 'pou4'){
                return true
            }
        }

        onpou5() {
            if(this.user.pou === 'pou5'){
                return true
            }
        }

        onpou6() {
            if(this.user.pou === 'pou6'){
                return true
            }
        }
        onpou7() {
            if(this.user.pou === 'pou7'){
                return true
            }
        }       
         onsetpoint1() {
            if(this.user.setpoint === 'setpoint1') {
                return true;
            }
        }

        onsetpoint2() {
            if(this.user.setpoint === 'setpoint2') {
                return true;
            }
        }

        onsetpoint3() {
            if(this.user.setpoint === 'setpoint3') {
                return true;
            }
        }

        onsetpoint4() {
            if(this.user.setpoint === 'setpoint4') {
                return true;
            }
        }

        onsetpoint5() {
            if(this.user.setpoint === 'setpoint5') {
                return true;
            }
        }

        onsetpoint6() {
            if(this.user.setpoint === 'setpoint6') {
                return true;
            }
        }

        onsetpoint7() {
            if(this.user.setpoint === 'setpoint6') {
                return true;
            }
        }
        
    
        ShowHideDiv(){
            if(this.tmv === 'tmvYes'){
                return true; 
            } else if(this.tmv === 'tmvNo'){
                return false; 
            }
        }

        ShowHideRecLooptemp(){
            if(this.recLoop === 'recLoopYes'){
                return true; 
            } else if(this.recLoop === 'recLoopNo'){
                return false; 
            }
        }

        showHide
        () {
            if(this.recLoop === 'recLoopNo' && this.tmv === 'tmvYes'){
                return true; 
                        } else {
                            return false; 
                        }
        }

        showHideChlorine() {
            if(this.residualType === 'residualType1') {
                return true;
            } else {
                return false;
            }
        }

        showHideChloramine() {
            if(this.residualType === 'residualType2') {
                return true;
            } else {
                return false;
            }
        }

        showHideDioxide() {
            if(this.residualType === 'residualType3') {
                return true;
            } else {
                return false;
            }
        }

        onFirstFourYes() {
            return this.user.buidingType === 'buidingTypeYes'
                || this.user.retirementBuilding === 'retirementBuildingYes'
                || this.user.hotelBuilding === 'hotelBuildingYes'
                || this.user.basement === 'basementYes';
        }

        onSecondFourYes() {
            return this.user.coolingTower === 'coolingTowerYes'
                || this.user.hotTub === 'hotTubYes'
                || this.user.decoFoun === 'decoFounYes'
                || this.user.humidifier === 'humidierYes';
        }

        output1:boolean
        output2: boolean
        output3: boolean
        output4: boolean
        output5: boolean
        output6: boolean
        output7: boolean
        output8: boolean
        output9: boolean
        output10: boolean
        output11: boolean
        output12: boolean
        output13: boolean
        output14: boolean
        output15: boolean
        output16: boolean
        output17: boolean
        output18: boolean
        output19: boolean
        output20: boolean
        output21: boolean
        output22: boolean
        output23: boolean
        output24: boolean
        output25: boolean
        output26: boolean
        output27: boolean
        output28: boolean
        output29: boolean
        output30: boolean
        output31: boolean
        output32: boolean
        output33: boolean
        output34: boolean
        output35: boolean
        output36: boolean

        resetOutput() {
            this.output1 = false;
            this.output2 = false;
            this.output3 = false;
            this.output4 = false;
            this.output5 = false;
            this.output6 = false;
            this.output7 = false;
            this.output8 = false;
            this.output8 = false;
            this.output10 = false;
            this.output11 = false;
            this.output12 = false;
            this.output13 = false;
            this.output14 = false;
            this.output15 = false;
            this.output16 = false;
            this.output17 = false;
            this.output18 = false;
            this.output19 = false;
            this.output20 = false;
            this.output21 = false;
            this.output22 = false;
            this.output23 = false;
            this.output24 = false;
            this.output25 = false;
            this.output26 = false;
            this.output27 = false;
            this.output28 = false;
            this.output29 = false;
            this.output30 = false;
            this.output31 = false;
            this.output32 = false;
            this.output33 = false;
            this.output34 = false;
            this.output35 = false;
            this.output36 = false;
        }

        onMicrobialRiskNoTMV() {
            console.log(this.user.hotTemp, this.user.hotTempType)
            return this.user.tmv === 'tmvNo';
        }

        onMicrobialRiskIndTMV() {
            return this.user.tmvCent === 'tmvCent1';
        }

        onMicrobialRiskCentTMV() {
            return this.user.tmvCent === 'tmvCent2';
        }

        onRecircNoTemp() {
            return this.user.recLoop !== 'recLoopNo' 
                && this.user.recLoopTemp === 'n/a';
        }

        onSetpointAsHot() {
            return this.user.hotTempType === 'setpoint';
        }

        onSetpointOverRecirc() {
            return (this.user.recLoopTemp !== 'n/a'
                && this.user.hotTempType === 'setpoint');
        }

        onRecircTemp() {
            return this.user.recLoopTemp !== 'n/a';
        }

        onNoRecircTemp() {
            return this.user.recLoopTemp === 'n/a';
        }

        onHotTemp6() {
            return this.user.hotTemp === 60;
        }

        onHotTemp5() {
            return this.user.hotTemp === 55;
        }

        onHotTemp4() {
            return this.user.hotTemp === 51;
        }

        onHotTemp3() {
            return this.user.hotTemp === 49;
        }

        onHotTemp2() {
            return this.user.hotTemp === 43;
        }

        onHotTemp1() {
            return this.user.hotTemp === 42;
        }

        onHotTemp0() {
            return this.user.hotTemp === 0;
        }

        onLowTime() {
            return this.user.timeToTap !== '60';
        }

        onHighTime() {
            return this.user.timeToTap === '60';
        }

        onLowSetPoint() {
            return this.user.setpoint !== 'setpoint1';
        }

        onHighSetPoint() {
            return this.user.setpoint === 'setpoint1';
        }

        onLowTimeHighSetPoint() {
            return this.onLowTime() && this.onHighSetPoint();
        }

        onLowTimeLowSetPoint() {
            return this.onLowTime() && this.onLowSetPoint();
        }

        onHighTimeHighSetPoint() {
            return this.onHighTime() && this.onHighSetPoint();
        }

        onHighTimeLowSetPoint() {
            return this.onHighTime() && this.onLowSetPoint()
        }

        onFullScaldCompliance() {
            if (this.user.pou === 'pou6') {
                return true;
            } else {
                return false;
            }
        }

        onLowerScaldCompliance() {
            if (this.user.pou === 'pou5') {
                return true;
            } else {
                return false;
            }
        }

        onLowerMidScaldCompliance() {
            if (this.user.pou === 'pou4') {
                return true;
            } else {
                return false;
            }
        }

        onMidScaldCompliance() {
            if (this.user.pou === 'pou3') {
                return true;
            } else {
                return false;
            }
        }

        onUpperScaldCompliance() {
            if (this.user.pou === 'pou2') {
                return true;
            } else {
                return false;
            }
        }

        onNoScaldCompliance() {
            if (this.user.pou === 'pou1') {
                return true;
            } else {
                return false;
            }
        }

        noTmvFullGuidance() {
            if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou6') {
                return true;
            }
            return false;
        }

        noTmvLowerGuidance() {
            if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou5') {
                return true;
            }
            return false;
        }

        noTmvLowerMidGuidance() {
            if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou4') {
                return true;
            }
            return false;
        }

        noTmvMidGuidance() {
            if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou3') {
                return true;
            }
            return false;
        }

        noTmvUpperGuidance() {
            if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou2') {
                return true;
            }
            return false;
        }

        noTmvNoGuidance() {
            if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou1') {
                return true;
            }
            return false;
        }

        centTmvFullGuidance() {
            if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou6') {
                return true;
            }
            return false;
        }

        centTmvLowerGuidance() {
            if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou5') {
                return true;
            }
            return false;
        }

        centTmvLowerMidGuidance() {
            if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou4') {
                return true;
            }
            return false;
        }

        centTmvMidGuidance() {
            if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou3') {
                return true;
            }
            return false;
        }

        centTmvUpperGuidance() {
            if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou2') {
                return true;
            }
            return false;
        }

        centTmvNoGuidance() {
            if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou1') {
                return true;
            }
            return false;
        }

        indTmvFullGuidance() {
            if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou6') {
                return true;
            }
            return false;
        }

        indTmvLowerGuidance() {
            if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou5') {
                return true;
            }
            return false;
        }

        indTmvLowerMidGuidance() {
            if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou4') {
                return true;
            }
            return false;
        }

        indTmvMidGuidance() {
            if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou3') {
                return true;
            }
            return false;
        }

        indTmvUpperGuidance() {
            if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou2') {
                return true;
            }
            return false;
        }

        indTmvNoGuidance() {
            if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou1') {
                return true;
            }
            return false;
        }

        onQ1ToQ4() {
            return this.user.buidingType === 'buidingTypeYes'
                || this.user.retirementBuilding === 'retirementBuildingYes'
                || this.user.hotelBuilding === 'hotelBuildingYes'
                || this.user.basement === 'basementYes';
        }

        onQ5() {
            return this.user.coolingTower === 'coolingTowerYes';
        }

        onQ6() {
            return this.user.hotTub === 'hotTubYes';
        }

        onQ7() {
            return this.user.decoFoun === 'decoFounYes';
        }

        onQ8() {
            return this.user.humidifier === 'humidifierYes';
        }

        onQ5ToQ8() {
            return this.onQ5()
                || this.onQ6()
                || this.onQ7()
                || this.onQ8();
        }

        onQ9() {
            return this.user.deadEnd === 'deadEndYes';
        }

        onQ10() {
            return this.user.llf === 'llfYes';
        }

        onQ11() {
            return this.user.ef === 'efYes';
        }

        onQ12() {
            return this.user.sfh === 'sfhYes';
        }

        onTempDecisionTree(){
            this.resetOutput();

            // point of use > 50

            
            if(this.user.tmv === 'tmvNo' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output1 = true;
            } 
            else if(this.user.tmv === 'tmvNo' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output2 = true;
            } 
            else if(this.user.tmv === 'tmvNo' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output3 = true;
            } 
            else if(this.user.tmv === 'tmvNo' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output4= true
            } 
            else if(this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output5= true
            } 
            else if(this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output6 = true
            } 
            else if(this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output7 = true
            } 
            else if(this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output8 = true
            } 
            else if(this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output9 = true
            } 
            else if(this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output10= true
            } 
            else if(this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output11 = true
            } 
            else if(this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output12 = true
            }

            // point of use 49 - 50

            if(this.user.tmv === 'tmvNo' && this.user.pou === 'pou3' && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output13 = true;
            } 
            else if(this.user.tmv === 'tmvNo' && this.user.pou === 'pou3' && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output14 = true;
            } 
            else if(this.user.tmv === 'tmvNo' && this.user.pou === 'pou3' && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output15 = true;
            } 
            else if(this.user.tmv === 'tmvNo' && this.user.pou === 'pou3' && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output16 = true
            } 
            else if(this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou3' && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output17 = true
            } 
            else if(this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou3' && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output18 = true
            } 
            else if(this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou3' && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output19 = true
            } 
            else if(this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou3' && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output20 = true
            } 
            else if(this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou3' && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output21 = true
            } 
            else if(this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou3' && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output22 = true
            } 
            else if(this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou3' && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output23 = true
            } 
            else if(this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou3' && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output24 = true
            }            

            // point of use < 49

            if(this.user.tmv === 'tmvNo' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output25 = true;
            } 
            else if(this.user.tmv === 'tmvNo' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output26 = true;
            } 
            else if(this.user.tmv === 'tmvNo' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output27 = true;
            } 
            else if(this.user.tmv === 'tmvNo' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output28 = true
            } 
            else if(this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output29 = true
            } 
            else if(this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output30 = true
            } 
            else if(this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output31 = true
            } 
            else if(this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output32 = true
            } 
            else if(this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output33 = true
            } 
            else if(this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output34 = true
            } 
            else if(this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
                this.output35 = true
            } 
            else if(this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
                this.output36 = true
            }
        
            return true;
        
        }

        onOutput1(){
            if(this.output1 === true){
                return true;
            }
        }

        onOutput2(){
            if(this.output2 === true){
                return true;
            }
        }

        onOutput3(){
            if(this.output3 === true){
                return true;
            }
        }

        onOutput4(){
            if(this.output4 === true){
                return true;
            }
        }

        onOutput5(){
            if(this.output5 === true){
                return true;
            }
        }

        onOutput6(){
            if(this.output6 === true){
                return true;
            }
        }

        onOutput7(){
            if(this.output7 === true){
                return true;
            }
        }

        onOutput8(){
            if(this.output8 === true){
                return true;
            }
        }

        onOutput9(){
            if(this.output9 === true){
                return true;
            }
        }

        onOutput10(){
            if(this.output10 === true){
                return true;
            }
        }

        onOutput11(){
            if(this.output11 === true){
                return true;
            }
        }

        onOutput12(){
            if(this.output12 === true){
                return true;
            }
        }

        onOutput13(){
            if(this.output13 === true){
                return true;
            }
        }

        onOutput14(){
            if(this.output14 === true){
                return true;
            }
        }

        onOutput15(){
            if(this.output15 === true){
                return true;
            }
        }

        onOutput16(){
            if(this.output16 === true){
                return true;
            }
        }

        onOutput17(){
            if(this.output17 === true){
                return true;
            }
        }

        onOutput18(){
            if(this.output18 === true){
                return true;
            }
        }

        onOutput19(){
            if(this.output19 === true){
                return true;
            }
        }

        onOutput20(){
            if(this.output20 === true){
                return true;
            }
        }


        onOutput21(){
            if(this.output21 === true){
                return true;
            }
        }

        onOutput22(){
            if(this.output22 === true){
                return true;
            }
        }

        onOutput23(){
            if(this.output23 === true){
                return true;
            }
        }

        onOutput24(){
            if(this.output24 === true){
                return true;
            }
        }

        onOutput25(){
            if(this.output25 === true){
                return true;
            }
        }

        onOutput26(){
            if(this.output26 === true){
                return true;
            }
        }

        onOutput27(){
            if(this.output27 === true){
                return true;
            }
        }

        onOutput28(){
            if(this.output28 === true){
                return true;
            }
        }

        onOutput29(){
            if(this.output29 === true){
                return true;
            }
        }

        onOutput30(){
            if(this.output30 === true){
                return true;
            }
        }

        onOutput31(){
            if(this.output31 === true){
                return true;
            }
        }

        onOutput32(){
            if(this.output32 === true){
                return true;
            }
        }

        onOutput33(){
            if(this.output33 === true){
                return true;
            }
        }

        onOutput34(){
            if(this.output34 === true){
                return true;
            }
        }

        onOutput35(){
            if(this.output35 === true){
                return true;
            }
        }

        onOutput36(){
            if(this.output36 === true){
                return true;
            }
        }

        onEf() {
            if(this.user.ef === 'efYes') {
                return true;
            }
        }
    
        onSfh() {
            if(this.user.sfh === 'sfhYes') {
                return true;
            }
        }
    
        ctinfo(e) {
            //console.log(e.target.onClickMe);
            this.ct = e.target.onClickMe;
        }
        onDeadEnds(e){
            this.deadEnds= e.target.checked;
          }
          onThermo(e){
            this.thermo= e.target.checked;
          }
          onLlf(e){
            this.llf= e.target.checked;
          }
          onCim(e){
            this.cim= e.target.checked;
          }
          onDeco(e){
            this.deco= e.target.checked;
          }
          onSpa(e){
            this.spa= e.target.checked;
          }
          onFaucet(e){
            this.faucet= e.target.checked;
          }
          onHose(e){
            this.hose= e.target.checked;
          }
    
        
        /*onRecirculation() {
            if(this.user.rcAccepted === 'yes'){
                return true;
            }
        }*/
    
      /* exportAsPDF()
        {
          //let data = document.querySelector('#myDiv');  
          html2canvas(document.querySelector('#myDiv')).then(canvas => {
            const contentDataURL = canvas.toDataURL('image/png')  
            let pdf = new jspdf('l', 'cm', 'a4'); //Generates PDF in landscape mode
            // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
            pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
            pdf.save('Filename.pdf');    
          }); 
        }
    
        public openPDF():void {
            let DATA = this.myDiv.nativeElement;
            let doc = new jspdf('p','pt', 'a4');
            doc.fromHTML(DATA.innerHTML,15,15);
            doc.output('dataurlnewwindow');
        
          }*/
    
         downloadPDF() {
            let DATA = this.outputDiv.nativeElement;
            //let DATA = document.getElementById('MyDIv');
            let doc = new jspdf('p','pt', 'a4');
        
            let handleElement = {
              '#editor':function(element,renderer){
                return true;
              }
            };
        //	doc.fromHTML(DATA.innerHTML,15,15,{
        //	  'width': 200,
        //	  'elementHandlers': handleElement
        //	});
       // doc.fromHTML(DATA.innerHTML, 15, 15, {
        //    'width': 500
        //  }, function (dispose) {
         // doc.save('DST-results.pdf');
         // });
            
        //	doc.save('angular-demo.pdf');
          }

          generatePDF() {
            //var data = document.getElementById('output');
            var data = this.outputDiv.nativeElement;
            html2canvas(data).then(canvas => {
              var imgWidth = 208;
              var imgHeight = canvas.height * imgWidth / canvas.width;
              const contentDataURL = canvas.toDataURL('image/png')
              let pdf = new jspdf('p', 'mm', 'a4');
              var position = 0;
              pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
              pdf.save('newPDF.pdf');
            });
         }

         public downloadAsPDF() {
            const doc = new jsPDF();
            //get table html
            const pdfTable = this.outputDiv.nativeElement;
            //html to pdf format
            var html = htmlToPdfmake(pdfTable.innerHTML);
            const documentDefinition = { content: html };
            pdfMake.createPdf(documentDefinition).open();
         }
         
      

         public captureScreen()
{
var data = this.outputDiv.nativeElement;
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'pt', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('DST-results.pdf'); // Generated PDF
});
}

         /* downloadPDF()
          {

             var node = document.getElementById('myDiv');

             var img;
             var filename;
             var newImage;


             domtoimage.toPng(node, { bgcolor: '#fff' })

                .then(function(dataUrl) {

                  img = new Image();
                  img.src = dataUrl;
                  newImage = img.src;

                  img.onload = function(){

                  var pdfWidth = img.width;
                  var pdfHeight = img.height;

                     // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image

                     var doc;

                     if(pdfWidth > pdfHeight)
                     {
                        doc = new jsPDF('l', 'px', [pdfWidth , pdfHeight]);
                     }
                     else
                     {
                        doc = new jsPDF('p', 'px', [pdfWidth , pdfHeight]);
                     }


                     var width = doc.internal.pageSize.getWidth();
                     var height = doc.internal.pageSize.getHeight();


                     doc.addImage(newImage, 'PNG',  10, 10, width, height);
                     filename = 'mypdf_' + '.pdf';
                     doc.save(filename);

                  };


                })
                .catch(function(error) {

                 // Error Handling

                });
            }*/
    
          ShowHideButton() {
            this.showMainContent = this.showMainContent ? false : true;
         }
    
         clickMessage = '';
         results: string;
         value:number;
    
      /*onClickMe() { 
          //this.results=false;
        if(this.user.timeToTap >= '60'){
            this.results = 'number is greater than 60';
            return true;
      } else if(this.user.timeToTap >= '30') {
          console.log('yay')
          this.results = 'value above 30';
          return true;
          
        } else if(this.user.timeToTap < '30') {
            this.results = 'value below 30';
            return true;
          
        }
      return false;
    
    }*/
    
    //harsha Microbial Risk guidance
      MinPOU(){
          var POU = 0;
        
          if(this.user.pou === 'pou1'){
            POU = 1;
          }
          else if(this.user.pou === 'pou2'){
            POU = 2;
          }
          else if(this.user.pou === 'pou3'){
            POU = 3;
          }
          else if(this.user.pou === 'pou4'){
            POU = 4;
          }
          else if(this.user.pou === 'pou5'){
                POU = 5;
                }
          else if(this.user.pou === 'pou6'){
                POU = 6;
            }
            return POU;
        }
        MinSetpoint(){
            var Setpoint = 0;
            if(this.user.setpoint === 'setpoint1') {
                Setpoint = 1;
            }
                else if(this.user.setpoint === 'setpoint2') {
                    Setpoint = 2;
                }
                else if(this.user.setpoint === 'setpoint3') {
                    Setpoint = 3;
                }
                else if(this.user.setpoint === 'setpoint4') {
                    Setpoint = 4;
                }
                else if(this.user.setpoint === 'setpoint5') {
                    Setpoint = 5;
                }
                else if(this.user.setpoint === 'setpoint6') {
                    Setpoint = 6;
                }
                return Setpoint;
        }
        
        MinRecLoop(){
            var RecLoop = 0;
            if(this.user.setpoint === 'recLoopTemp1') {
                RecLoop = 1;
            }
                else if(this.user.setpoint === 'recLoopTemp2') {
                    RecLoop = 2;
                }
                else if(this.user.setpoint === 'recLoopTemp3') {
                    RecLoop = 3;
                }
                else if(this.user.setpoint === 'recLoopTemp4') {
                    RecLoop = 4;
                }
                else if(this.user.setpoint === 'recLoopTemp5') {
                    RecLoop = 5;
                }
                else if(this.user.setpoint === 'recLoopTemp6') {
                    RecLoop = 6;
                }
             return RecLoop;
            }

            //harsha type 2 microbial guidance Risk 
        /*   MicrobialRisk(){
                const tempKeys = {
                    1: 60,
                    2: 55,
                    3: 51,
                    4: 49,
                    5: 43,
                    6: 42
                };
     
            const pou = tempKeys[this.user.pou[this.user.pou.length - 1]];
            const setpoint = tempKeys[this.user.setpoint[this.user.setpoint.length - 1]];
            const recLoopTemp = this.user.recLoop === 'recLoopYes' ? tempKeys[this.user.recLoopTemp[this.user.recLoopTemp.length - 1]] : -1;

            if (this.user.tmv === 'tmvNo' && recLoopTemp !== -1) {
                this.user.hotTemp = Math.min(
                    pou,
                    setpoint,
                    recLoopTemp
                );
            } else if (this.user.tmv === 'tmvNo') {
                this.user.hotTemp = Math.min(
                    pou,
                    setpoint
                );
            } else {
                this.user.hotTemp = 
                    recLoopTemp !== -1 
                        ? recLoopTemp 
                        : setpoint;
                
                if (recLoopTemp <= setpoint && recLoopTemp != -1) {
                    this.user.hotTemp = recLoopTemp;
                    this.user.hotTempType = 'recLoop';
                } else {
                    this.user.hotTemp = setpoint;
                    this.user.hotTempType = 'setpoint';
                }
            }
            }
*/
      values: number;
      //results: string;

      onTimeToTap() {
        if(this.user.timeToTapInput === '60') {
          // this.results = 'Based on your input, your time to temperature is unacceptable based on available guidance documents. Please find a summary of guidance documents below:';
            this.results = 'Your input of \'> 60 seconds\' for time to tap is unacceptable based on all three guidance documents considered here. Please find a summary of guidance documents below:'
        } else if(this.user.timeToTapInput === '31 - 60') {
          // this.results = 'Based on your input, your time to temperature is acceptable based on most of the guidance documents except ASPE, 2003. Please find a summary of guidance documents below:';
            this.results = 'Your input of \'31 - 60 seconds\' for time to tap is acceptable based on two of three guidance documents (NASEM, 2019, European Guidelines Working Group, 2017) out of the three guidance documents considered here. Please find a summary of guidance documents below:'
        } else if(this.user.timeToTapInput === '11 - 30') {
          // this.results = 'Based on your input, your time to temperature is acceptable based on available guidance documents. Please find a summary of guidance documents below:';    
            this.results = 'Your input of \'11 - 30 seconds\' for time to tap is acceptable based on all three guidance documents considered here. Please find a summary of guidance documents below:'
        } else if(this.user.timeToTapInput === '1 - 10') {
          // this.results = 'Based on your input, your time to temperature is acceptable based on available guidance documents. Please find a summary of guidance documents below:';    
            this.results = 'Your input of \'1 - 10 seconds\' for time to tap is acceptable based on all three guidance documents considered here. Please find a summary of guidance documents below:'
        } else if(this.user.timeToTapInput === 'timeToTapInpute') {
            this.results = 'Please find a summary of guidance documents below:';    
          }
          return true;
      }
    
      onKey(event: any) { 
        this.value = event.target.value;
         if(this.value >= 60){
            this.results = 'Based on your input, your time to temperature is unacceptable based on available guidance documents. Please find a summary of guidance documents below:';
          
      } else if(this.value >= 30) {
          this.results = 'Based on your input, your time to temperature is acceptable based on most of the guidance documents except ASPE, 2003. Please find a summary of guidance documents below:';
         
          
        } else if(this.value < 30) {
            this.results = 'Based on your input, your time to temperature is acceptable based on available guidance documents. Please find a summary of guidance documents below:';    
          
        }
        
      }
    
      setpointResults: string;
      onSetpoint(){
          if(this.user.setpoint === 'setpoint1') {
              this.setpointResults = 'Based on your input, your hot water temperature at POU is acceptable based on available guidance documents. Please find a summary of guidance documents below:';
          } else if(this.user.setpoint === 'setpoint2') {
              this.setpointResults = 'Based on your input, your hot water temperature at POU is unacceptable based on most of the available guidance documents. Please find a summary of guidance documents below:';
          } else if(this.user.setpoint === 'setpoint3') {
              this.setpointResults = 'Based on your input, your hot water temperature at POU is acceptable based on only IPC, 2015. Please find a summary of guidance documents below:';
          } else if(this.user.setpoint === 'setpoint4') {
            this.setpointResults = 'Based on your input, your hot water temperature at POU is acceptable based on only IPC, 2015. Please find a summary of guidance documents below:';
        } else if(this.user.setpoint === 'setpoint5') {
            this.setpointResults = 'Based on your input, your hot water temperature at POU is acceptable based on only IPC, 2015. Please find a summary of guidance documents below:';
        }
          return true;
      }
    
      residualResults: string;
      onResidualLevel() {
          if(this.user.residualLevel === 'residualLevel1') {
              this.residualResults = 'Your input of \'< 0.2 mg/L\' for measured chlorine disinfectant residual level is below levels recommended by all the 5 guidance documents considered here (WHO, 2007; European Guidelines Working Group, 2017; U.S. EPA, 1985; CDC, 2003; NASEM, 2019). Periodic flushing allows fresh residual to be brought into the pipes. Please find a summary of guidance documents for appropriate chlorine residual level in the plumbing system below: ';
              return true;
            } else if(this.user.residualLevel === 'residualLevel2') {
            this.residualResults = 'Your input of \'0.2 – 0.5 mg/L\' for measured chlorine disinfectant residual level is acceptable based on 3 of the 5 guidance documents considered here (WHO, 2007; European Guidelines Working Group, 2017; NASEM, 2019).Two guidance documents, one from the US EPA (U.S. EPA, 1985) and one from the CDC (CDC, 2003) recommend higher levels to control microbial growth. Please find a summary of guidance documents for appropriate chlorine residual level in the plumbing system below:';
            return true;
        } else if(this.user.residualLevel === 'residualLevel3') {
            this.residualResults = 'Your input of \'0.6 – 0.9 mg/L\' for measured chlorine disinfectant residual level is acceptable based on 2 of the 5 guidance documents considered here (NASEM, 2019; European Guidelines Working Group, 2017). Two guidance documents, one from the US EPA (U.S. EPA, 1985) and one from the CDC (CDC, 2003) recommend higher levels to control microbial growth. One guidance document from the WHO (WHO, 2007) recommends lower levels. Please find a summary of guidance documents for appropriate chlorine residual level in the plumbing system below:';
            return true;
        } else if(this.user.residualLevel === 'residualLevel4') {
            this.residualResults = 'Your input of \'1.0 – 2.0 mg/L\' for measured chlorine disinfectant residual level is acceptable based on 4 of the 5 guidance documents considered here (CDC, 2003; European Guidelines Working Group, 2017; U.S. EPA, 1985; NASEM, 2019). One guidance document from the WHO (WHO, 2007) recommends lower levels, 0.2-0.5 mg/L. Please find a summary of guidance documents for appropriate chlorine residual level in the plumbing system below:';
            return true;
        }else if(this.user.residualLevel === 'residualLevel5') {
            this.residualResults = 'Your input of \'> 2.0 mg/L\' for measured chlorine disinfectant residual level is acceptable based on 1 of the 5 guidance documents considered here (NASEM, 2019). Your residual level exceeds values that are recommended by 4 of 5 of the guidance documents considered here. While high residual concentration may protect your system from microbial growth, the higher residual concentration will increase the risk of corrosion in plumbing systems and produce more harmful disinfection byproducts. Unless you add disinfectant in your building, this is caused by high levels of disinfectant from your water supplier. You may contact your water supplier on this issue. Please find a summary of guidance documents for appropriate chlorine residual level in the plumbing system below:';
            return true;
        }else if(this.user.residualLevel === 'residualLevel6') {
            this.residualResults = 'US guidelines recommend a higher level of chlorine residual such as 1-2 mg/L. However, maintaining higher residual concentration also increases the chances of corrosion in plumbing systems and produces more DBPs (CDC, 2003; U.S. EPA, 1985). As per EPA, the maximum allowed level of chlorine level is 4 mg/L (US EPA, 2015). European guidelines recommend that the concentration of residual free chlorine should be between 0.2-1 mg/L in the plumbing systems to protect from Legionella colonization and to reduce the likelihood of corrosion (European Guidelines Working Group, 2017). Please find a summary of guidance documents for appropriate chlorine residual level in the plumbing system below:';
            return true;  
        } else {
            return false;
        }
          
      }

      chloramineLevelResults: string;
      onChloramineLevel() {
          if(this.user.chloramineLevel === 'chloramineLevel1') {
              this.chloramineLevelResults = 'Your input of \'< 0.5 mg/L\' for measured chloramine disinfectant residual level is below levels recommended by all the 3 guidance documents considered here (Department of Veterans Affairs, 2014; European Guidelines Working Group, 2017; NASEM, 2019). Periodic flushing allows fresh residual to be brought into the pipes. Please find a summary of guidance documents for appropriate chloramine residual level in the plumbing system below: '
              return true;
            } else if(this.user.chloramineLevel === 'chloramineLevel2') {
            this.chloramineLevelResults = 'Your input of \'0.5 – 2.0 mg/L\' for measured chloramine disinfectant residual level is acceptable based on all the guidance documents considered here (Department of Veterans Affairs, 2014; European Guidelines Working Group, 2017; NASEM, 2019). Please find a summary of guidance documents for appropriate chloramine residual level in the plumbing system below: '
            return true;  
        } else if(this.user.chloramineLevel === 'chloramineLevel3') {
            this.chloramineLevelResults = 'Your input of \'> 2.0 – ≤ 4.0 mg/L\' for measured chloramine disinfectant residual level is acceptable based on 1 of the 3 guidance documents considered here (NASEM, 2019). Two guidance documents, one from the Department of Veterans Affairs (Department of Veterans Affairs, 2014) and one from the European Guidelines Working Group (European Guidelines Working Group, 2017) recommend lower levels to control microbial growth. Also, as per the European Guidelines Working Group, the maximum allowed level of chloramine level is 3 mg/L (European Guidelines Working Group, 2017). Please find a summary of guidance documents for appropriate chloramine residual level in the plumbing system below:'
            return true;  
        } else if(this.user.chloramineLevel === 'chloramineLevel4') {
            this.chloramineLevelResults = 'Your input of \'> 4.0 mg/L\' for measured chloramine disinfectant residual level is unacceptable based on all the guidance documents considered here (Department of Veterans Affairs, 2014; European Guidelines Working Group, 2017; NASEM, 2019). While high residual concentration may protect your system from microbial growth, the higher residual concentration will increase the risk of corrosion in plumbing systems. Unless you add disinfectant in your building, this is caused by high levels of disinfectant from your water supplier. You may contact your water supplier on this issue. Please find a summary of guidance documents for appropriate chloramine residual level in the plumbing system below: '
            return true;  
        } else if(this.user.chloramineLevel === 'chloramineLevel5') {
            this.chloramineLevelResults = 'US guidelines recommend a higher level of chloramine disinfectant residual such as ≥ 0.5 mg/L and ≤ 4.0 mg/L (NASEM, 2019). However, maintaining higher chloramine residual concentration also increases the chances of corrosion in plumbing systems (European Guidelines Working Group, 2017). European guidelines recommend that the concentration of residual chloramine should be between 0.5-2 mg/L in the plumbing systems to protect from Legionella colonization and to reduce the likelihood of corrosion (European Guidelines Working Group, 2017). Also, the maximum allowed level of chloramine level is 3 mg/L (European Guidelines Working Group, 2017). Please find a summary of guidance documents for appropriate chloramine residual level in the plumbing system below: '
            return true;  
        } else {
            return false;
        }
      }

      dioxideLevelResults: string;
      onDioxideLevel() {
          if(this.user.dioxideLevel === 'dioxideLevel1') {
              this.dioxideLevelResults = 'Your input of \'< 0.2 mg/L\' for measured chlorine dioxide disinfectant residual is acceptable based on 1 of the 3 guidance documents considered here (European Guidelines Working Group, 2017). Two guidance documents, one from the Department of Veterans Affairs (Department of Veterans Affairs, 2014) and one from the NASEM (NASEM, 2019) recommend higher levels to control microbial growth. Periodic flushing allows fresh residual to be brought into the pipes. Please find a summary of guidance documents for appropriate chlorine dioxide residual level in the plumbing system below: '
              return true;
            } else if(this.user.dioxideLevel === 'dioxideLevel2') {
            this.dioxideLevelResults = 'Your input of \'0.2 – 0.5 mg/L\' for measured chlorine dioxide disinfectant residual level is acceptable based on all the guidance documents considered here (Department of Veterans Affairs, 2014; European Guidelines Working Group, 2017; NASEM, 2019). Please find a summary of guidance documents for appropriate chlorine dioxide residual level in the plumbing system below: '
            return true;  
        } else if(this.user.dioxideLevel === 'dioxideLevel3') {
            this.dioxideLevelResults = 'Your input of \'> 0.5 – ≤ 0.8 mg/L\' for measured chlorine dioxide disinfectant residual level is acceptable based on 2 of the 3 guidance documents considered here (NASEM, 2019; Department of Veterans Affairs, 2014). One guidance documents from the European Guidelines Working Group (European Guidelines Working Group, 2017) recommend lower levels to control microbial growth and to reduce the formation of chlorite and chlorate by-products. Also, as per the EPA, the maximum allowed level of chlorine dioxide disinfectant residual level is 0.8 mg/L (NASEM, 2019). Please find a summary of guidance documents for appropriate chlorine dioxide residual level in the plumbing system below: '
            return true;  
        } else if(this.user.dioxideLevel === 'dioxideLevel4') {
            this.dioxideLevelResults = 'Your input of \'> 0.8 mg/L\' for measured chlorine dioxide disinfectant residual level is unacceptable based on all the guidance documents considered here (Department of Veterans Affairs, 2014; European Guidelines Working Group, 2017; NASEM, 2019). While high residual concentration may protect your system from microbial growth, the higher residual concentration will increase the risk of harmful byproducts formation such as chlorite and chlorate and odors in plumbing systems. Unless you add disinfectant in your building, this is caused by high levels of disinfectant from your water supplier. You may contact your water supplier on this issue. Please find a summary of guidance documents for appropriate chlorine dioxide residual level in the plumbing system below: '
            return true;  
        } else if(this.user.dioxideLevel === 'dioxideLevel5') {
            this.dioxideLevelResults = 'US guidelines recommend a higher level of chlorine dioxide disinfectant residual such as between ≥ 0.2 mg/L and ≤ 0.8 mg/L (NASEM, 2019; Department of Veterans Affairs, 2014). However, maintaining higher chlorine dioxide residual concentration also increases the chances of harmful byproducts such as chlorite and chlorate and odors (NASEM, 2019; European Guidelines Working Group, 2017). European guidelines recommend that the concentration of residual chlorine dioxide should be less than 0.5 mg/L in the plumbing systems to protect from microbial colonization and to reduce the likelihood of by-product formation (European Guidelines Working Group, 2017). Also, as per the EPA, the maximum allowed level of chlorine dioxide disinfectant residual level is 0.8 mg/L (NASEM, 2019). Please find a summary of guidance documents for appropriate chlorine dioxide residual level in the plumbing system below: '
            return true;  
        } else {
            return false;
        }
      }

      closeResult = '';

      //constructor(private modalService: NgbModal) {}
    
      open(content: any) {
        this.isLoading = true;

        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        //this.prepareInputData();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
         }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
         });
        
      }

      
      display='none';
      openModal(form: NgForm){
          console.log(form);
        this.onFormSubmit(form);
        this.display='block';
    }

    onCloseHandled(){
        this.display='none';
    }

      private getDismissReason(reason: any): string {
         if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
         } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
         } else {
            return `with: ${reason}`;
         }
      }


    }
         

     