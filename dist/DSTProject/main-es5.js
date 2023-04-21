function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 2,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(httpClient) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
      }

      _createClass(ApiService, [{
        key: "insertDstData",
        value: function insertDstData(dstModelData) {
          var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post('http://localhost:8080/insert', dstModelData, {
            headers: options
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            return console.log('Data Fetched:' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "insertQuery",
        value: function insertQuery(dstQueryData) {
          var options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post('http://localhost:8080/insert/query', dstQueryData, {
            headers: options
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            return console.log('Data Fetched:' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        } // addProduct(product: any): Observable<any> {
        //   const options = new HttpHeaders({ 'Content-Type': 'application/json' });
        //   return this.httpClient.post( 'http://localhost:8080/insert', product, { headers: options }).pipe(
        //     catchError(this.handleError)
        //   );
        // }

      }, {
        key: "handleError",
        value: function handleError(err) {
          var errMsg = '';

          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
            errMsg = err.error.message;
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log("Backend returned code ".concat(err.status));
            errMsg = err.error.status;
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _resources_resources_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resources/resources.component */
    "./src/app/resources/resources.component.ts");
    /* harmony import */


    var _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./trainings/trainings.component */
    "./src/app/trainings/trainings.component.ts");
    /* harmony import */


    var _example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./example/example.component */
    "./src/app/example/example.component.ts");

    var routes = [//{ path: 'home', component: HomeComponent },
    {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
      path: 'resources',
      component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_3__["ResourcesComponent"]
    }, {
      path: 'trainings',
      component: _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_4__["TrainingsComponent"]
    }, {
      path: 'example',
      component: _example_example_component__WEBPACK_IMPORTED_MODULE_5__["ExampleComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _domain_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./domain/user */
    "./src/app/domain/user.ts");
    /* harmony import */


    var _domain_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./domain/query */
    "./src/app/domain/query.ts");
    /* harmony import */


    var _assets_BuildingQuestions_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../assets/BuildingQuestions.json */
    "./src/assets/BuildingQuestions.json");

    var _assets_BuildingQuestions_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/BuildingQuestions.json */
    "./src/assets/BuildingQuestions.json", 1);
    /* harmony import */


    var _assets_DeviceQuestions_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../assets/DeviceQuestions.json */
    "./src/assets/DeviceQuestions.json");

    var _assets_DeviceQuestions_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/DeviceQuestions.json */
    "./src/assets/DeviceQuestions.json", 1);
    /* harmony import */


    var _assets_About_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../assets/About.json */
    "./src/assets/About.json");

    var _assets_About_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/About.json */
    "./src/assets/About.json", 1);
    /* harmony import */


    var _assets_FeaturesOutput_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../assets/FeaturesOutput.json */
    "./src/assets/FeaturesOutput.json");

    var _assets_FeaturesOutput_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/FeaturesOutput.json */
    "./src/assets/FeaturesOutput.json", 1);
    /* harmony import */


    var _app_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../app/api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _app_dst_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../app/dst.service */
    "./src/app/dst.service.ts");
    /* harmony import */


    var _app_dst_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../app/dst.query */
    "./src/app/dst.query.ts");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.es.min.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! html2canvas */
    "./node_modules/html2canvas/dist/html2canvas.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! pdfmake/build/pdfmake */
    "./node_modules/pdfmake/build/pdfmake.js");
    /* harmony import */


    var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! pdfmake/build/vfs_fonts */
    "./node_modules/pdfmake/build/vfs_fonts.js");
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var html_to_pdfmake__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! html-to-pdfmake */
    "./node_modules/html-to-pdfmake/index.js");
    /* harmony import */


    var html_to_pdfmake__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(html_to_pdfmake__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/user-service */
    "./src/app/services/user-service.ts");
    /* harmony import */


    var _services_query_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/query-service */
    "./src/app/services/query-service.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/list.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ng2-tooltip-directive */
    "./node_modules/ng2-tooltip-directive/__ivy_ngcc__/fesm2015/ng2-tooltip-directive.js"); //import * as jsPDF from 'jspdf';


    var _c0 = ["myDiv"];
    var _c1 = ["outputDiv"];

    function AppComponent_div_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h5", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " We are a research team of professors, scientists, graduate students, and field practitioners at Drexel University, Environmental Science and Policy Research Institute (ESPRI), and University of Colorado, Boulder. Under the U.S. Environmental Protection Agency ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Assistance Agreement # R836880");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " to Drexel University, we complied comprehensive guidance for water quality management in large buildings which are based on");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "h5", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.extractAbout["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.extractAbout["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.extractAbout["content-6"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.extractAbout["content-7"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.extractAbout["content-8"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.extractAbout["content-9"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.extractAbout["content-10"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.extractAbout["content-11"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.extractAbout["content-12"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AppComponent_div_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Refer to the below links for more information:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ASHRAE. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ANSI/ASHRAE Standard 188-2018 Legionellosis: Risk Management for Building Water Systems");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " ; ASHRAE: Atlanta, GA, USA, 2018. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " CDC. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Developing a Water Management Program to Reduce ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Growth & Spread in Buildings: A Practical Guide to Implementing Industry Standards");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " ; US Department of Health and Human Services: Atlanta, GA, USA, 2017. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " CDC. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Guidelines for Environmental Infection Control in Health-Care Facilities: Recommendations of CDC and the Healthcare Infection Control Practices Advisory Committee (HICPAC)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " ; CDC: Atlanta, GA, USA, 2003. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " CDC. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Annex to the Model Aquatic Health Code: Scientific Rationale");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " ; CDC: Atlanta, GA, USA, 2016. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Centers for Medicare & Medicaid Services. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Requirement to Reduce ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Risk in Healthcare Facility Water Systems to Prevent Cases and Outbreaks of Legionnaires\u2019 Disease (LD)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " ; Centers for Medicare & Medicaid Services: Baltimore, MD, USA, 2017. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Department of Veterans Affairs. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "VHA Directive 1061: Prevention of Healthcare-Associated Legionnaires\u2019 Disease and Scald Injury from Potable Water Distribution Systems");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " ; Department of Veterans Affairs: Washington, DC, USA, 2014. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Department of Veterans Affairs. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "VHA Directive 2008-010: Prevention of Legionnaires\u2019 Disease");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " ; Department of Veterans Affairs: Washington, DC, USA, 2008. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " European Guidelines Working Group. European Technical Guidelines for the Prevention, Control and Investigation, of Infections Caused by ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Species. 2017. Available online: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "https://ecdc.europa.eu/sites/portal/files/documents/");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "%20GuidelinesFinal%20updated%20for%20ECDC%20corrections.pdf");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Government of Western Australia. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Department of Commerce, Department of Mines and Petroleum Code of Practice: Prevention and Control of Legionnaires\u2019 Disease 2010");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " ; Government of Western Australia: Perth, Australia, 2010. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " NASEM. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Management of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " in Water Systems");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " ; The National Academies Press; National Academies of Sciences, Engineering and Medicine: Washington, DC, USA, 2019. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " OSHA. Legionnaires\u2019 Disease: Section II: What Water Systems in Workplaces are Potential Sources of Legionnaires\u2019 Bacteria (LDB)? OSHA: Washington, DC, USA, 1996. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " U.S. EPA. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Drinking Water Criteria Document for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " (Final Draft)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " ; Environmental Criteria and Assessment Office: Washington, DC, USA, 1985. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " UK Department of Health. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Health Technical Memorandum 04-01: Safe Water in Healthcare Premises. Part C: Pseudomonas Aeruginosa-Advice for Augmented Care Units");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " ; UK Department of Health: London, UK, 2017. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " World Health Organization. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " and the Prevention of Legionellosis");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " ; Bartram, J., Chartier, Y., Lee, J.V., Pond, K., Surman-Lee, S., Eds.; World Health Organization: Geneva, Switzerland, 2007; ISBN 978-92-4-156297-3. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " World Health Organization. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Water Safety in Buildings");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " ; Cunliffe, D., Bartram, J., Briand, E., Charier, Y., Colbourne, J., Drury, D., Lee, J., Schaefer, B., Surman-Lee, S., Eds.; World Health Organization: Geneva, Switzerland, 2011; ISBN 978-92-4-154810-6. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please refer to the below links for trainings on reducing risk for Legionnaires\u2019 disease");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Preventing Legionnaires\u2019 Disease: A Training on ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Water Management Programs (PreventLD Training)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA0\xA0- Are you involved in water safety for buildings? Take this training from CDC and partners on creating a water management program to reduce risk for Legionnaires\u2019 disease. PreventLD Training aligns with industry standards (ASHRAE 188) on managing risk for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " bacteria. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Interactive Overview of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " in Water Systems from National Academy of Sciences");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ECDC course on Legionnaires\u2019 Disease: Risk Assessment, Outbreak Investigation and Control. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 51, 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_div_50_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.onQueryFormSubmit(_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 55, 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_50_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.query.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email address:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 58, 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_50_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.query.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 61, 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_50_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.query.query = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.query.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.query.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.query.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.query.query);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r6.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.submitMessage);
      }
    }

    function AppComponent_div_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Why should you use PIPE?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Building plumbing systems can harbor harmful microorganisms, including ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " which is responsible for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "18,000");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " hospitalizations annually in the United States. In addition, building plumbing can leach harmful substances, such as lead, into drinking water. PIPE helps building owners find the information they need to protect against these health threats. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "How do I use PIPE?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Answer the support tool's questions about your building. If you know don\u2019t know the answer to a question, you can leave it blank (in that case PIPE will give you less specific information). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "A short video introduction to PIPE, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "iframe", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "What does PIPE do? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " PIPE has a summary of information from dozens of guidance documents produced by governmental agencies and professional societies. Based on the information you provide, PIPE will identify the guidance that is relevant to your building. PIPE puts this information into a downloadable document with summaries of key points from different guidance documents links to further information. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "What does PIPE not do?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " PIPE does not make judgments among established sources of information. The many guidance documents are not always consistent. PIPE summarizes what the different guidance documents say but does not resolve inconsistencies among them. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "PIPE does not substitute for an engineering evaluation of water safety.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_22_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Is the thermostatic mixing valve centralized or are separate valves provided for individual fixtures? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 156, 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Individual \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 158, 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Centralized ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_22_div_9_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.user.tmvCent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.user.tmvCent);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r143.invalid && _r15.submitted && !ctx_r20.isValidFormSubmitted);
      }
    }

    function AppComponent_div_52_div_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_88_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_88_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " What is the hot water temperature at the end of recirculation loop? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 159, 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " >= 140 \xB0F [ >= 60 \u2103 ]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 161, 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 131 - 139 \xB0F [ 55 - 59 \u2103 ]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 162, 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 123 - 130 \xB0F [ 51 \u2013 54 \u2103 ] ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 163, 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " 119 - 122 \xB0F [ 49 \u2013 50 \u2103 ]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 164, 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 110 - 118 \xB0F [ 43 \u2013 48 \u2103 ] ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 165, 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " < 110 \xB0F [ < 43 \u2103 ] ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 166, 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Don't Know ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_div_52_div_88_div_30_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.user.recLoopTemp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.user.recLoopTemp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.user.recLoopTemp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.user.recLoopTemp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.user.recLoopTemp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.user.recLoopTemp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.user.recLoopTemp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r146.invalid && _r15.submitted && !ctx_r38.isValidFormSubmitted);
      }
    }

    function AppComponent_div_52_div_108_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_109_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_109_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " What is the measured chlorine disinfectant residual level (mg/L) at a typical faucet in your plumbing system?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 167, 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " < 0.2 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 169, 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 0.2 \u2013 0.5 mg/L");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 170, 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 0.6 \u2013 0.9 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 171, 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " 1.0 \u2013 2.0 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 172, 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " > 2.0 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 173, 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Don\u2019t know ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppComponent_div_52_div_109_div_26_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.user.residualLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.user.residualLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.user.residualLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.user.residualLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.user.residualLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r44.user.residualLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r154.invalid && _r15.submitted && !ctx_r44.isValidFormSubmitted);
      }
    }

    function AppComponent_div_52_div_110_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_110_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " What is the measured chloramine disinfectant residual level (mg/L) at a typical faucet in your plumbing system?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 174, 175);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " < 0.5 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 176, 175);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 0.5 \u2013 2.0 mg/L");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 177, 175);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 2.0 \u2013 4.0 mg/L");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 178, 175);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " > 4.0 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 179, 175);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Don\u2019t know ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_div_52_div_110_div_23_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.user.chloramineLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.user.chloramineLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.user.chloramineLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.user.chloramineLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r45.user.chloramineLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r161.invalid && _r15.submitted && !ctx_r45.isValidFormSubmitted);
      }
    }

    function AppComponent_div_52_div_111_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_111_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " What is the measured chlorine dioxide disinfectant residual level (mg/L) at a typical faucet in your plumbing system?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 180, 181);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " < 0.2 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 182, 181);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 0.2 \u2013 0.5 mg/L");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 183, 181);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 0.5 \u2013 0.8 mg/L");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 184, 181);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " > 0.8 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 185, 181);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Don\u2019t know ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_div_52_div_111_div_23_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.user.dioxideLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.user.dioxideLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.user.dioxideLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.user.dioxideLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r46.user.dioxideLevel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r167.invalid && _r15.submitted && !ctx_r46.isValidFormSubmitted);
      }
    }

    function AppComponent_div_52_div_142_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_154_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_163_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_172_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_181_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_193_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_202_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_211_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_220_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_232_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_241_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_250_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_div_259_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please select one of the field. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function AppComponent_div_52_ng_template_269_img_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 194);
      }
    }

    function AppComponent_div_52_ng_template_269_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_52_ng_template_269_img_0_Template, 1, 0, "img", 186);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 187);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 188);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Disclaimer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 189);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_52_ng_template_269_Template_button_click_4_listener() {
          var modal_r173 = ctx.$implicit;
          return modal_r173.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 190);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 191);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The PIPE DST includes a broad database to address complicated water quality issues in building water systems to reduce the risk of contamination and waterborne disease outbreaks but no one resource can be comprehensive. Premise plumbing water systems vary significantly. There may be no substitute for measuring water quality in your building. In the absence of measurement, no system can provide any assurance that water quality objectives are being met. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The PIPE DST is for informational purposes only for the decision-makers, and it does not substitute for engineering guidance for water management. The output report provided by this DST does not judge which source of guidance is best but does provide citations to full documents for the user to review in-depth as needed to make well-informed decisions. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 192);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 193);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_52_ng_template_269_Template_button_click_15_listener() {
          var modal_r173 = ctx.$implicit;
          return modal_r173.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Ok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r92.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r92.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r92.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r92.isLoading);
      }
    }

    function AppComponent_div_52_div_275_tr_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " < 43 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " < 110 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u274C\u274C\u274C\u274C\u274C\u274C\u274C\u274C(0/8)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " < 43 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " < 110 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u274C\u274C\u274C\u274C\u274C\u274C\u274C\u274C(0/8)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 43 - 48 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 110 \u2013 118 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u274C\u274C\u274C\u274C\u274C\u274C\u274C\u274C(0/8)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 43 - 48 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 110 \u2013 118 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u274C\u274C\u274C\u274C\u274C\u274C\u274C\u274C(0/8)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 49 - 50 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 119 \u2013 122 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u2714\u2714\u274C\u274C\u274C\u274C(4/8)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 49 - 50 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 119 \u2013 122 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u2714\u2714\u274C\u274C\u274C\u274C(4/8)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 51 - 54 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "123 \u2013 130");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u2714\u2714\u2714\u2714\u274C\u274C(6/8)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 51 - 54 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "123 \u2013 130");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u2714\u2714\u2714\u2714\u274C\u274C(6/8)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 55 - 59 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "131 \u2013 139");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u2714\u2714\u2714\u2714\u2714\u2714(8/8)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 55 - 59 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "131 \u2013 139");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u2714\u2714\u2714\u2714\u2714\u2714(8/8)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " >= 60 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " >= 140");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u2714\u2714\u2714\u2714\u2714\u2714(8/8)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " >= 60 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " >= 140");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u2714\u2714\u2714\u2714\u2714\u2714(8/8)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your water heater temperature set point is lower than Recirculation loop or TMV upstream temp or POU temp. This suggests that ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "you may have made an error in the inputs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " you selected. If not entered correctly, please enter your correct inputs and re-run the report to obtain appropriate guidance for microbial risk. If you are not able to resolve this, then you may need an engineering consultation on your system. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " < 43 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " < 110 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u2714\u2714(4/4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " < 43 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " < 110 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u2714\u2714(4/4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 43 - 48 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 110 \u2013 118 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u274C\u274C(2/4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 43 - 48");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 110 \u2013 118 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u274C\u274C(2/4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 49 - 50 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "119 \u2013 122 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u274C\u274C(2/4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 49 - 50 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 119 \u2013 122 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2714\u2714\u274C\u274C(2/4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 209);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 51 - 54 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "123 \u2013 130");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u274C\u274C\u274C\u274C\uFE0F(0/4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 51 - 54 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "123 \u2013 130");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u274C\u274C\u274C\u274C\uFE0F(0/4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 55 - 59 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "131 \u2013 139");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u274C\u274C\u274C\u274C\uFE0F(0/4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 55 - 59 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "131 \u2013 139");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u274C\u274C\u274C\u274C\uFE0F(0/4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 208);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " >= 60 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " >= 140");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u274C\u274C\u274C\u274C\uFE0F(0/4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_tr_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " >= 60 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " >= 140");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u274C\u274C\u274C\u274C\uFE0F(0/4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_275_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 195);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 196);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Suggested Management Guidelines for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "/Microbial Control and Protection Against Scald:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 197);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u27A3 Potential Risks");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 198);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 199);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 200);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Microbial Risk");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 201);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hot Water ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 202);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u2103");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 202);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\xB0F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Compliance with 8 Guidance Documents");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_div_52_div_275_tr_24_Template, 7, 0, "tr", 203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_div_52_div_275_tr_25_Template, 7, 0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppComponent_div_52_div_275_tr_26_Template, 7, 0, "tr", 203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_div_52_div_275_tr_27_Template, 7, 0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppComponent_div_52_div_275_tr_28_Template, 7, 0, "tr", 203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AppComponent_div_52_div_275_tr_29_Template, 7, 0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_div_52_div_275_tr_30_Template, 7, 0, "tr", 203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AppComponent_div_52_div_275_tr_31_Template, 7, 0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AppComponent_div_52_div_275_tr_32_Template, 7, 0, "tr", 203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_div_52_div_275_tr_33_Template, 7, 0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AppComponent_div_52_div_275_tr_34_Template, 7, 0, "tr", 203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AppComponent_div_52_div_275_tr_35_Template, 7, 0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6", 204);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Annotation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 204);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u274C Not hot enough to comply ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6", 204);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u2714 Hot enough \u2013 complies with guidance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AppComponent_div_52_div_275_div_42_Template, 6, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 205);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 200);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Scald Risk");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 201);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Point of use ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 202);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u2103");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 202);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\xB0F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Compliance with 4 Guidance Documents ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AppComponent_div_52_div_275_tr_57_Template, 7, 0, "tr", 203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AppComponent_div_52_div_275_tr_58_Template, 7, 0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AppComponent_div_52_div_275_tr_59_Template, 7, 0, "tr", 203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, AppComponent_div_52_div_275_tr_60_Template, 7, 0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, AppComponent_div_52_div_275_tr_61_Template, 7, 0, "tr", 203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AppComponent_div_52_div_275_tr_62_Template, 7, 0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AppComponent_div_52_div_275_tr_63_Template, 7, 0, "tr", 206);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AppComponent_div_52_div_275_tr_64_Template, 7, 0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AppComponent_div_52_div_275_tr_65_Template, 7, 0, "tr", 203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AppComponent_div_52_div_275_tr_66_Template, 7, 0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AppComponent_div_52_div_275_tr_67_Template, 7, 0, "tr", 203);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, AppComponent_div_52_div_275_tr_68_Template, 7, 0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h6", 204);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Annotation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h6", 204);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u274C Too hot to comply with guidance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h6", 204);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u2714 Cool enough \u2013 complies with guidance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "References:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "List of Eight Microbial Risk Guidance Documents:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ol");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "CDC.\u202FGuidelines for Environmental Infection Control in Health-Care Facilities: Recommendations of CDC and the Healthcare Infection Control Practices Advisory Committee (HICPAC); CDC: Atlanta, GA, USA, 2003. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "[Recommended Temp. \u2265 51 \xB0C]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Department of Veterans Affairs.\u202FVHA Directive 1061: Prevention of Healthcare-Associated Legionnaires\u2019 Disease and Scald Injury from Potable Water Distribution Systems; Department of Veterans Affairs: Washington, DC, USA, 2014. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "[Recommended Temp.\u2265 51.1 \xB0C]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "European Guidelines Working Group. European Technical Guidelines for the Prevention, Control and Investigation, of Infections Caused by\u202FLegionella\u202FSpecies. 2017. Available online:\u202F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 207);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u202FLegionella Guidelines (accessed on 19 September 2017).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "[Recommended Temp. > 50 \xB0C]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "OSHA.\u202FLegionnaires\u2019 Disease: Section II: What Water Systems in Workplaces are Potential Sources of Legionnaires\u2019 Bacteria (LDB)?\u202FOSHA: Washington, DC, USA, 1996. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "[Recommended Temp. \u2265 50 \xB0C]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "NASEM.\u202FManagement of Legionella in Water Systems; The National Academies Press; National Academies of Sciences, Engineering and Medicine: Washington, DC, USA, 2019. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "[Recommended Temp. > 55 \xB0C]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "U.S. EPA.\u202FDrinking Water Criteria Document for Legionella (Final Draft); Environmental Criteria and Assessment Office: Washington, DC, USA, 1985. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "[Recommended Temp. \u2265 55 \xB0C]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "World Health Organization.\u202FLegionella and the Prevention of Legionellosis; Bartram, J., Chartier, Y., Lee, J.V., Pond, K., Surman-Lee, S., Eds.; World Health Organization: Geneva, Switzerland, 2007; ISBN 978-92-4-156297-3. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "[Recommended Temp. > 50 \xB0C]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "World Health Organization.\u202FWater Safety in Buildings; Cunliffe, D., Bartram, J., Briand, E., Charier, Y., Colbourne, J., Drury, D., Lee, J., Schaefer, B., Surman-Lee, S., Eds.; World Health Organization: Geneva, Switzerland, 2011; ISBN 978-92-4-154810-6. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "[Recommended Temp. > 50 \xB0C]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "List of Four Scald Risk Guidance Documents:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ol");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Department of Veterans Affairs.\u202FVHA Directive 1061: Prevention of Healthcare-Associated Legionnaires\u2019 Disease and Scald Injury from Potable Water Distribution Systems; Department of Veterans Affairs: Washington, DC, USA, 2014. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "[Recommended Temp. \u2264 51.1 \xB0C]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "European Guidelines Working Group. European Technical Guidelines for the Prevention, Control and Investigation, of Infections Caused by\u202FLegionella\u202FSpecies. 2017. Available online:\u202F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 207);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Legionella Guidelines (accessed on 19 September 2017).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "[Recommended Temp. < 50 \xB0C]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "International Plumbing Code; International Code Council: Washington, DC, USA, 2015. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "[Recommended Temp. < 43 \xB0C]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "World Health Organization.\u202FWater Safety in Buildings; Cunliffe, D., Bartram, J., Briand, E., Charier, Y., Colbourne, J., Drury, D., Lee, J., Schaefer, B., Surman-Lee, S., Eds.; World Health Organization: Geneva, Switzerland, 2011; ISBN 978-92-4-154810-6. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "[Recommended Temp. between 41-45 \xB0C or between < 43 \xB0C]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onHotTemp1());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r94.onHotTemp1());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onHotTemp2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r94.onHotTemp2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onHotTemp3());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r94.onHotTemp3());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onHotTemp4());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r94.onHotTemp4());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onHotTemp5());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r94.onHotTemp5());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onHotTemp6());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r94.onHotTemp6());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onHotTemp0());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onpou6());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r94.onpou6());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onpou5());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r94.onpou5());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onpou4());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r94.onpou4());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onpou3());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r94.onpou3());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onpou2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r94.onpou2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.onpou1());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r94.onpou1());
      }
    }

    function AppComponent_div_52_div_282_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Stagnant water in dead-end pipes can provide favorable conditions for the growth of opportunistic pathogens. These pathogens can then seed the rest of the plumbing system (NASEM, 2019).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_284_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Dead-ends should be removed. If removal is not possible, automated flushing may be considered for portions of the system that are at risk of being seeded from the dead end. NASEM (2019) cites Darelid et al., (2002) and Totaro et al., (2018) as evidence that frequent automated flushing procedures (e.g., 1 minute every 2 hours) may be helpful in controlling opportunistic pathogens and water management plans may include sampling and analysis to assess the effectiveness of such measures. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_297_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You indicated that the building has a recirculation loop but did not provide a temperature for the recirculation loop. In general it is problematic to have long pipe lengths like those associated with recirculation loops downstream of a thermostatic mixing valve. The temperature of water in the recirculation loop is a key factor for understanding microbial growth potential. Please either measure the temperature of the recirculation loop or consult with a professional who can measure the temperature for you. Then re-run PIPE when you have this information. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_298_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You indicated that the building has a recirculation loop but did not provide a temperature for the recirculation loop. In general it is problematic to have long pipe lengths like those associated with recirculation loops downstream of a thermostatic mixing valve. The temperature of water in the recirculation loop is a key factor for understanding microbial growth potential. Please either measure the temperature of the recirculation loop or consult with a professional who can measure the temperature for you. Then re-run PIPE when you have this information. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_299_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You indicated that the building has a recirculation loop but did not provide a temperature for the recirculation loop. In general it is problematic to have long pipe lengths like those associated with recirculation loops downstream of a thermostatic mixing valve. The temperature of water in the recirculation loop is a key factor for understanding microbial growth potential. Please either measure the temperature of the recirculation loop or consult with a professional who can measure the temperature for you. Then re-run PIPE when you have this information. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_300_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your water heater temperature set point is lower than Recirculation loop or thermostatic mixing valve upstream temp or point of use temp. This suggests that you may have made an error in the inputs you selected. If not entered correctly, please enter your correct inputs and re-run the report to obtain appropriate guidance for microbial risk. If you are not able to resolve this, then you may need an engineering consultation on your system. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_301_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Guidance is based on water heater setpoint temperature which may be substantially higher than temperature found in water distribution system (i.e., recirculation loop, Point of Use, etc.). As such guidance may underestimate microbial risk, particularly if distribution system is lengthy, includes a recirculation loop, or otherwise allows for temperature losses during distribution. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The high water heater temperature set point and short time to tap coupled with very low hot water temperature (i.e., recirculation loop/point of use temp) suggests the following: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " You may have made an error in the inputs you selected for your temperatures. Please check, and if so re-run your request with the correct temperatures. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " If inputs are correct, then the substantial drop in temperature from the heater to the distribution system (i.e., recirculation loop/point of use) temperature suggests that either the water heater set point may be measured incorrectly or there may be problems with the hydraulic design of the plumbing system. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " An engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_1_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater set point temperature could bring the hot water temperature into compliance with guidance on microbial risk but at the cost of going out of compliance with some guidance on protection from scalding since no thermostatic mixing valve is present. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may review the different rows in Table 2 for above tradeoffs. For example, rows #3 and #4 show temperatures that simultaneously comply with some guidance on microbial risk and some guidance on scalding, although no temperatures comply with all guidance. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " If you do increase the water heater set point temperature, you may consider the installation of thermostatic mixing valves to allow a high temperature while protecting against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_1_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The high water heater temperature setpoint coupled with very low Hot Water (i.e., recirculation loop/point of use) and lack of thermostatic mixing valve suggests that ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "you may have made an error in the inputs you selected.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " If inputs are correct then the substantial drop in temperature from the heater to the distribution system/point of use suggests that either the water heater set point is measured incorrectly or there are problems with the hydraulic design of the plumbing system. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " An engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_1_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater setpoint temperature could bring the building into compliance with guidance on microbial risk but at the cost of going out of compliance with some guidance on protection from scalding. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may review the different rows in Table 2 for these tradeoffs. For example, rows #3 and #4 show temperatures that simultaneously comply with some guidance on microbial risk and some guidance on scalding, although no temperatures comply with all guidance. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " If you do increase the water heater set point temperature, you may consider the installation of thermostatic mixing valves to allow a high temperature while protecting against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is lower than the temperature recommended for controlling ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth by all 8 of 8 guidance documents considered here. Hence the water system may present very high ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth potential. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_302_div_1_div_12_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_302_div_1_div_13_Template, 11, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_52_div_302_div_1_div_14_Template, 11, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_302_div_1_div_15_Template, 13, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r202.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r202.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r202.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r202.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r202.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r202.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_302_div_2_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The high water heater temperature setpoint and short time to tap coupled with very low distribution system (i.e., recirculation loop/POU) temperature suggests the following: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " You may have made an error in the inputs you selected for your temperatures. Please check, and if so re-run your request with the correct temperature. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " If inputs are correct, then the substantial drop in temperature from the heater to the distribution system (i.e., recirculation loop/POU) temperature suggests that either the water heater set point may be measured incorrectly or there may be problems with the hydraulic design of the plumbing system. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " An engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_2_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater set point temperature could bring the building into compliance with guidance on microbial risk but at the cost of going out of compliance with some guidance on protection from scalding because there is no thermostatic mixing valve present. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may review the different rows of Table 2 for above tradeoffs. For example, rows #3 and #4 show temperatures that simultaneously comply with some guidance on microbial risk and some guidance on scalding, although no temperatures comply with all guidance. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " If you do increase the water heater setpoint temperature, you may consider the installation of thermostatic mixing valves to allow a high temperature while protecting against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_2_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The high water heater temperature set point and short time to tap coupled with low distribution system (i.e., recirculation loop/POU) temperature suggests the following: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " You may have made an error in the inputs you selected for your temperatures. Please check, and if so re-run your request with the correct temperature. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " If inputs are correct then the substantial drop in temperature from the heater to the distribution system (i.e., recirculation loop/POU) temperature suggests that either the water heater set point is measured incorrectly or there are problems with the hydraulic design of the plumbing system. An engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_2_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater set point temperature could bring the building into compliance with guidance on microbial risk but at the cost of going out of compliance with some guidance on protection from scalding because there is no thermostatic mixing valve present. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may review the different rows of Table 2 for these tradeoffs. For example, rows #3 and #4 show temperatures that simultaneously comply with some guidance on microbial risk and some guidance on scalding, although no temperatures comply with all guidance. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " If you do increase the water heater set point temperature, you may consider the installation of thermostatic mixing valves to allow a high temperature while protecting against scalding. If you select this option, be aware that poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth so you will need to develop and implement a thermostatic mixing valves maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is lower than the temperature recommended for controlling ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth by all 8 of the guidance documents reviewed here. Hence the water system may present very high to moderate risk of opportunistic pathogen, such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_302_div_2_div_12_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_302_div_2_div_13_Template, 11, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_52_div_302_div_2_div_14_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_302_div_2_div_15_Template, 13, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r203.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r203.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r203.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r203.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r203.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r203.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_302_div_3_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " While the system complies with some guidance on microbial risk, to achieve higher temperatures to comply with more of the guidance documents, you may consider an engineering consultation on the hydraulics of the plumbing system (i.e., flow balance, pipe lengths, hot water pipe insulation, if applicable), because your setpoint temperature complies with guidance of >= 60 \u2103, but the hot water temperature in the pipes is lower than some documents recommend. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " If you do increase the temperature at the point of use, you may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_3_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " While the system complies with some guidance on microbial risk, increasing the water heater set point temperature could bring the building into compliance with more of the guidance on microbial risk but at the cost of going out of compliance with some guidance on protection from scalding because there are no thermostatic mixing valves present. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may review the different rows of Table 2 for above tradeoffs. For example, rows #3 and #4 show temperatures that simultaneously comply with some guidance on microbial risk and some guidance on scalding, although no temperatures comply with all guidance. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " If you do increase the temperature at the point of use, you may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_3_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics (i.e., flow balance, hot water pipe insulation and/or pipe length, etc.) of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " If you do increase the temperature at the point of use, you may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_3_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater set point temperature could bring the building into compliance with more of the guidance on microbial risk but at the cost of going out of compliance with some guidance on protection from scalding. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may review the different rows for Table 2 for above tradeoffs. For example, rows #3 and #4 show temperatures that simultaneously comply with some guidance on microbial risk and some guidance on scalding, although no temperatures comply with all guidance. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " If you do consider increasing water heater temperature, ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "installation of thermostatic mixing valves may be required to reduce the scalding risk.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics (i.e., hot water pipe insulation and/or pipe length, etc.) of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is high enough according to 4 of the 8 guidance documents reviewed here. The remaining 4 recommend higher temperatures to control ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth. The existing water temperature may present a low risk of opportunistic pathogen, such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_302_div_3_div_12_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_302_div_3_div_13_Template, 11, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_52_div_302_div_3_div_14_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_302_div_3_div_15_Template, 16, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r204.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r204.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r204.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r204.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r204.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r204.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_302_div_4_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The system complies with most guidance on temperature and water heater setpoint is already meets the guidance of >= 60 \u2103. If you do increase the temperature at the point of use, you may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_4_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The system complies with most guidance on temperature even with the water heater setpoint below the recommended >= 60 \u2103. If you do increase the temperature at the point of use, you may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_4_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The system complies with most guidance on temperature and water heater setpoint is already meets the guidance of >= 60 \u2103. If you do increase the temperature at the point of use, you may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_4_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The system complies with most guidance on temperature even with the water heater setpoint below the recommended >= 60 \u2103. If you do increase the temperature at the point of use, you may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is high enough to control the growth of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " according to 6 of the 8 documents considered here. The remaining 2 recommend higher temperatures to control ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth. Water temperature may present very low to no risk of opportunistic pathogen, more specifically ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ", growth. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_302_div_4_div_15_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_div_52_div_302_div_4_div_16_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_div_52_div_302_div_4_div_17_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_div_52_div_302_div_4_div_18_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r205.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r205.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r205.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r205.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r205.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r205.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_302_div_5_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_5_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_5_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_5_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is high enough to control the growth of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " according to all 8 documents considered here and water temperature is not favorable for the growth of opportunistic pathogens, more specifically ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".\t");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_302_div_5_div_12_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_302_div_5_div_13_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_52_div_302_div_5_div_14_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_302_div_5_div_15_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r206.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r206.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r206.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r206.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r206.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r206.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_302_div_6_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_6_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_6_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_6_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You may consider the installation of thermostatic mixing valves to protect against scalding. If you select this option, be aware that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_302_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is high enough to control the growth of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " according to all 8 documents considered here and water temperature may present no risk of opportunistic pathogen, more specifically ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ", growth.\t");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_302_div_6_div_12_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_302_div_6_div_13_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_52_div_302_div_6_div_14_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_302_div_6_div_15_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r207.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r207.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r207.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r207.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r207.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r207.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_302_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_52_div_302_div_1_Template, 16, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_52_div_302_div_2_Template, 16, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_52_div_302_div_3_Template, 16, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_52_div_302_div_4_Template, 19, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_52_div_302_div_5_Template, 16, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_52_div_302_div_6_Template, 16, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.onHotTemp1());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.onHotTemp2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.onHotTemp3());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.onHotTemp4());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.onHotTemp5());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r102.onHotTemp6());
      }
    }

    function AppComponent_div_52_div_303_div_1_div_4_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. You may consider an engineering consultation on hydraulics of plumbing system (i.e., mixing value, pipe insulation, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow water in the recirculation loop to be kept at a higher temperature and at the same time to protect against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_4_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The water heater set point temperature is not in compliance with the generally recommended >= 60 \u2103 set point temperature. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " (Five Guidance Documentsuments- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020).--> ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Increasing the setpoint temperature may not affect the recirculation loop temperature due to the presence of the thermostatic mixing value. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. You may consider an engineering consultation on hydraulics of plumbing system (i.e., mixing value, pipe insulation, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow water in the recirculation loop to be kept at a higher temperature and at the same time to protect against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_4_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. You may consider an engineering consultation on hydraulics of plumbing system (i.e., mixing value, pipe insulation, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow water in the recirculation loop to be kept at a higher temperature and at the same time to protect against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_4_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The water heater set point temperature is not in compliance with the generally recommended >= 60 \u2103 set point temperature (Five Guidance Documentsuments- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Increasing the setpoint temperature may not affect the recirculation loop temperature due to the presence of the thermostatic mixing value. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. You may consider an engineering consultation on hydraulics of plumbing system (i.e., mixing value, pipe insulation, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow water in the recirculation loop to be kept at a higher temperature and at the same time to protect against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature in plumbing distribution system is lower than the temperature recommended for controlling ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth by all 8 of 8 guidance documents considered here. Hence the water system may present very high ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth potential. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_303_div_1_div_4_div_12_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_303_div_1_div_4_div_13_Template, 14, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_52_div_303_div_1_div_4_div_14_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_303_div_1_div_4_div_15_Template, 13, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r234.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r234.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r234.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r234.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r234.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r234.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_303_div_1_div_5_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. You may consider an engineering consultation on hydraulics of plumbing system (i.e., mixing value, pipe insulation, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow water in the recirculation loop to be kept at a higher temperature and at the same time to protect against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_5_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The water heater set point temperature is not in compliance with the generally recommended >= 60 \u2103 set point temperature (Five Guidance Documentsuments- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Increasing the setpoint temperature may not affect the recirculation loop temperature due to the presence of the thermostatic mixing value. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. You may consider an engineering consultation on hydraulics of plumbing system (i.e., mixing value, pipe insulation, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow water in the recirculation loop to be kept at a higher temperature and at the same time to protect against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_5_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. You may consider an engineering consultation on hydraulics of plumbing system (i.e., mixing value, pipe insulation, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow water in the recirculation loop to be kept at a higher temperature and at the same time to protect against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_5_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The water heater set point temperature is not in compliance with the generally recommended >= 60 \u2103 set point temperature (Five Guidance Documentsuments- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Increasing the setpoint temperature may not affect the recirculation loop temperature due to the presence of the thermostatic mixing value. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. You may consider an engineering consultation on hydraulics of plumbing system (i.e., mixing value, pipe insulation, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow water in the recirculation loop to be kept at a higher temperature and at the same time to protect against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain, and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature in plumbing distribution system is lower than the temperature recommended for controlling ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth by all 8 of the guidance documents reviewed here. Hence the water system may present very high to moderate risk of growth of opportunistic pathogen, such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_303_div_1_div_5_div_12_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_303_div_1_div_5_div_13_Template, 13, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_52_div_303_div_1_div_5_div_14_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_303_div_1_div_5_div_15_Template, 13, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r235.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r235.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r235.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r235.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r235.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r235.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_303_div_1_div_6_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. You may consider an engineering consultation on hydraulics of plumbing system (i.e., mixing value, pipe insulation, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow water in the recirculation loop to be kept at a higher temperature and at the same time to protect against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain, and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_6_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The water heater set point temperature is not in compliance with the generally recommended >= 60 \u2103 set point temperature (Five Guidance Documents- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Increasing the setpoint temperature may not affect the recirculation loop temperature due to the presence of the thermostatic mixing value. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. You may consider an engineering consultation on hydraulics of plumbing system (i.e., mixing value, pipe insulation, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow water in the recirculation loop to be kept at a higher temperature and at the same time to protect against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain, and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_6_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. You may consider an engineering consultation on hydraulics of plumbing system (i.e., mixing value, pipe insulation, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow water in the recirculation loop to be kept at a higher temperature and at the same time to protect against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain, and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_6_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The water heater set point temperature is not in compliance with the generally recommended >= 60 \u2103 set point temperature (Five Guidance Documentsuments- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Increasing the setpoint temperature may not affect the recirculation loop temperature due to the presence of the thermostatic mixing value. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. You may consider an engineering consultation on hydraulics of plumbing system (i.e., mixing value, pipe insulation, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow water in the recirculation loop to be kept at a higher temperature and at the same time to protect against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain, and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is high enough according to 4 of the 8 guidance documents reviewed here. The remaining 4 recommend higher temperatures to control ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth. The existing water temperature may present some risk of growth of opportunistic pathogens, such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_303_div_1_div_6_div_12_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_303_div_1_div_6_div_13_Template, 13, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_52_div_303_div_1_div_6_div_14_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_303_div_1_div_6_div_15_Template, 13, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r236.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r236.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r236.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r236.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r236.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r236.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_303_div_1_div_7_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. While the temperature you report is consistent with recommendations from most guidance documents for control of microbial growth, you should be sure that temperature in the recirculation loop is being measured properly and reflects conditions throughout the entire loop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_7_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. While the temperature you report is consistent with recommendations from most guidance documents for control of microbial growth, you should be sure that temperature in the recirculation loop is being measured properly and reflects conditions throughout the entire loop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_7_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. While the temperature you report is consistent with recommendations from most guidance documents for control of microbial growth, you should be sure that temperature in the recirculation loop is being measured properly and reflects conditions throughout the entire loop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_7_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. While the temperature you report is consistent with recommendations from most guidance documents for control of microbial growth, you should be sure that temperature in the recirculation loop is being measured properly and reflects conditions throughout the entire loop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is high enough to control the growth of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " according to 6 of the 8 documents considered here. The remaining 2 recommend higher temperatures to control ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth and water temperature may present very low to no risk of opportunistic pathogen, such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " growth. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_303_div_1_div_7_div_15_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_div_52_div_303_div_1_div_7_div_16_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_div_52_div_303_div_1_div_7_div_17_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_div_52_div_303_div_1_div_7_div_18_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r237.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r237.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r237.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r237.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r237.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r237.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_303_div_1_div_8_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. While the temperature you report is consistent with recommendations from guidance documents for control of microbial growth, you should be sure that temperature in the recirculation loop is being measured properly and reflects conditions throughout the entire loop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_8_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. While the temperature you report is consistent with recommendations from guidance documents for control of microbial growth, you should be sure that temperature in the recirculation loop is being measured properly and reflects conditions throughout the entire loop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_8_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. While the temperature you report is consistent with recommendations from most guidance documents for control of microbial growth, you should be sure that temperature in the recirculation loop is being measured properly and reflects conditions throughout the entire loop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_8_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. While the temperature you report is consistent with recommendations from most guidance documents for control of microbial growth, you should be sure that temperature in the recirculation loop is being measured properly and reflects conditions throughout the entire loop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is high enough to control the growth of opportunistic pathogens such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " according to all 8 documents considered here. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_303_div_1_div_8_div_9_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_52_div_303_div_1_div_8_div_10_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_52_div_303_div_1_div_8_div_11_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_303_div_1_div_8_div_12_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r238.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r238.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r238.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r238.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r238.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r238.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_303_div_1_div_9_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. While the temperature you report is consistent with recommendations from most guidance documents for control of microbial growth, you should be sure that temperature in the recirculation loop is being measured properly and reflects conditions throughout the entire loop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_9_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. While the temperature you report is consistent with recommendations from most guidance documents for control of microbial growth, you should be sure that temperature in the recirculation loop is being measured properly and reflects conditions throughout the entire loop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_9_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. While the temperature you report is consistent with recommendations from most guidance documents for control of microbial growth, you should be sure that temperature in the recirculation loop is being measured properly and reflects conditions throughout the entire loop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_9_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Maintaining appropriate water temperate in a recirculation loop downstream of a single, centralized thermostatic mixing value is difficult. While the temperature you report is consistent with recommendations from most guidance documents for control of microbial growth, you should be sure that temperature in the recirculation loop is being measured properly and reflects conditions throughout the entire loop. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is high enough to control the growth of opportunistic pathogens including ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " according to all 8 documents considered here. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_303_div_1_div_9_div_9_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_52_div_303_div_1_div_9_div_10_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_52_div_303_div_1_div_9_div_11_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_303_div_1_div_9_div_12_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r239.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r239.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r239.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r239.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r239.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r239.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_303_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Guidance for microbial risk in your building are based on the recirculation loop temperature.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_52_div_303_div_1_div_4_Template, 16, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_52_div_303_div_1_div_5_Template, 16, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_52_div_303_div_1_div_6_Template, 16, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_52_div_303_div_1_div_7_Template, 19, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_52_div_303_div_1_div_8_Template, 13, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_303_div_1_div_9_Template, 13, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r232.onHotTemp1());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r232.onHotTemp2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r232.onHotTemp3());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r232.onHotTemp4());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r232.onHotTemp5());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r232.onHotTemp6());
      }
    }

    function AppComponent_div_52_div_303_div_2_div_10_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Consider increasing set point temperature significantly to protect against ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth risk upstream to the thermostatic mixing valve, preferably >= 60 \u2103. If you do choose to increase your setpoint temperature, make sure to check that the thermostatic mixing valve is properly installed and functioning protect against scalding to its downstream. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " You may also consider installing individual thermostatic mixing valves at each fixture which will allow the water temperature in the distribution pipes to be kept at a higher temperature while at the same time protecting against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_2_div_10_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Consider increasing set point temperature significantly to protect against ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth risk upstream to the thermostatic mixing valve, preferably >= 60 \u2103. If you do choose to increase your setpoint temperature, make sure to check that the thermostatic mixing valve is properly installed and functioning protect against scalding to its downstream. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " You may also consider installing individual thermostatic mixing valves at each fixture, particularly if you have long pipe lengths after the thermostatic mixing valve. These individual thermostatic mixing values will allow the water temperature in the distribution pipes to be kept at a higher temperature while at the same time protecting against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_2_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature in plumbing distribution system is lower than the temperature recommended for controlling ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth by all 8 of 8 guidance documents considered here. Hence the water system may present very high ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth potential. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_303_div_2_div_10_div_12_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_303_div_2_div_10_div_13_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r264.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r264.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r264.onLowTime());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r264.onHighTime());
      }
    }

    function AppComponent_div_52_div_303_div_2_div_11_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Consider increasing set point temperature significantly to protect against ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth risk upstream to the thermostatic mixing valve, preferably >= 60 \u2103. If you do choose to increase your setpoint temperature, make sure to check that the thermostatic mixing valve is properly installed and functioning protect against scalding to its downstream. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " You may also consider installing individual thermostatic mixing valves at each fixture, particularly if you have long pipe lengths after the thermostatic mixing valve. These individual thermostatic mixing values will allow the water temperature in the distribution pipes to be kept at a higher temperature while at the same time protecting against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_2_div_11_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Consider increasing set point temperature significantly to protect against ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth risk upstream to the thermostatic mixing valve, preferably >= 60 \u2103. If you do choose to increase your setpoint temperature, make sure to check that the thermostatic mixing valve is properly installed and functioning protect against scalding to its downstream. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " You may also consider installing individual thermostatic mixing valves at each fixture, particularly if you have long pipe lengths after the thermostatic mixing valve. These individual thermostatic mixing values will allow the water temperature in the distribution pipes to be kept at a higher temperature while at the same time protecting against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_2_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The set point water temperature is low and as a result the plumbing distribution system temperature is expected to be lower than the temperature recommended for controlling ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth by all 8 of 8 guidance documents considered here. Hence the water system may present very high ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth potential. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_303_div_2_div_11_div_12_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_303_div_2_div_11_div_13_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r265.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r265.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r265.onLowTime());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r265.onHighTime());
      }
    }

    function AppComponent_div_52_div_303_div_2_div_12_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Consider increasing set point temperature significantly to protect against ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth risk upstream to the thermostatic mixing valve, preferably >= 60 \u2103. If you do choose to increase your setpoint temperature, make sure to check that the thermostatic mixing valve is properly installed and functioning protect against scalding to its downstream. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " You may also consider installing individual thermostatic mixing valves at each fixture, particularly if you have long pipe lengths after the thermostatic mixing valve. These individual thermostatic mixing values will allow the water temperature in the distribution pipes to be kept at a higher temperature while at the same time protecting against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_2_div_12_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Consider increasing setpoint temperature preferably to >= 60 \u2103 (cite source). If you do choose to increase your setpoint temperature, make sure to check that the thermostatic mixing valve is properly installed and functioning protect against scalding to its downstream. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may also consider installing individual thermostatic mixing valves at each fixture, particularly if you have long pipe lengths after the thermostatic mixing valve. These individual thermostatic mixing values will allow the water temperature in the distribution pipes to be kept at a higher temperature while at the same time protecting against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_2_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The set-point water temperature may present a low to medium risk of growth of opportunistic pathogens, such a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ", and is below the recommended value of >=60 \u2103 (Five Guidance Documents- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020) to control microbial growth downstream from the water heater. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_303_div_2_div_12_div_9_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_52_div_303_div_2_div_12_div_10_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r266.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r266.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r266.onLowTime());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r266.onHighTime());
      }
    }

    function AppComponent_div_52_div_303_div_2_div_13_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Consider increasing setpoint temperature preferably to >= 60 \u2103 (cite source). If you do choose to increase your setpoint temperature, make sure to check that the thermostatic mixing valve is properly installed and functioning protect against scalding to its downstream. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may also consider installing individual thermostatic mixing valves at each fixture, particularly if you have long pipe lengths after the thermostatic mixing valve. These individual thermostatic mixing values will allow the water temperature in the distribution pipes to be kept at a higher temperature while at the same time protecting against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_2_div_13_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Consider increasing setpoint temperature preferably to >= 60 \u2103 (cite source). If you do choose to increase your setpoint temperature, make sure to check that the thermostatic mixing valve is properly installed and functioning protect against scalding to its downstream. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may also consider installing individual thermostatic mixing valves at each fixture, particularly if you have long pipe lengths after the thermostatic mixing valve. These individual thermostatic mixing values will allow the water temperature in the distribution pipes to be kept at a higher temperature while at the same time protecting against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_2_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The set-point water temperature may present very low to no risk of opportunistic pathogen growth, such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " in the water heater itself, but the water heater temperature is below the recommended range of >= 60 \u2103 by guidance (Five Guidance Documents- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020) to control microbial growth downstream from the water heater. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_303_div_2_div_13_div_9_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_52_div_303_div_2_div_13_div_10_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r267.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r267.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r267.onLowTime());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r267.onHighTime());
      }
    }

    function AppComponent_div_52_div_303_div_2_div_14_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Consider increasing setpoint temperature preferably to >= 60 \u2103 (cite source). If you do choose to increase your setpoint temperature, make sure to check that the thermostatic mixing valve is properly installed and functioning protect against scalding to its downstream. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may also consider installing individual thermostatic mixing valves at each fixture, particularly if you have long pipe lengths after the thermostatic mixing valve. These individual thermostatic mixing values will allow the water temperature in the distribution pipes to be kept at a higher temperature while at the same time protecting against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_2_div_14_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Consider increasing setpoint temperature preferably to >= 60 \u2103 (cite source). If you do choose to increase your setpoint temperature, make sure to check that the thermostatic mixing valve is properly installed and functioning protect against scalding to its downstream. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You may also consider installing individual thermostatic mixing valves at each fixture, particularly if you have long pipe lengths after the thermostatic mixing valve. These individual thermostatic mixing values will allow the water temperature in the distribution pipes to be kept at a higher temperature while at the same time protecting against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_2_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The setpoint water temperature does not present risk of the growth of opportunistic pathogens, such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " in the water heater itself, but the water heater temperature is below the recommended range of >= 60 \u2103 by guidance (Five Guidance Documents- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020) to control microbial growth downstream from the water heater. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_303_div_2_div_14_div_9_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_52_div_303_div_2_div_14_div_10_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r268.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r268.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r268.onLowTime());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r268.onHighTime());
      }
    }

    function AppComponent_div_52_div_303_div_2_div_15_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " While your setpoint temperature complies with guidance, you may consider installing individual thermostatic mixing valves at each fixture, particularly if you have long pipe lengths after the thermostatic mixing valve. These individual thermostatic mixing values will allow the water temperature in the distribution pipes to be kept at a higher temperature while at the same time protecting against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_2_div_15_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " While your setpoint temperature complies with guidance, you may consider installing individual thermostatic mixing valves at each fixture, particularly if you have long pipe lengths after the thermostatic mixing valve. These individual thermostatic mixing values will allow the water temperature in the distribution pipes to be kept at a higher temperature while at the same time protecting against scalding at the point of use. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program, particularly if you choose to install individual thermostatic mixing valves at each fixture. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_303_div_2_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This setpoint temperature meets the guidance recommendation of >= 60 \u2103 (Five Guidance Documents- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020) to control microbial growth downstream from the water heater. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_52_div_303_div_2_div_15_div_6_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_52_div_303_div_2_div_15_div_7_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r269.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r269.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r269.onLowTime());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r269.onHighTime());
      }
    }

    function AppComponent_div_52_div_303_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Guidance for microbial risk is based on water heater setpoint temperature. However, you indicated that your system has a single centralized thermostatic mixing value. Guidance indicates that pipe run lengths after thermostatic mixing valves should be short (CDC, 2003; Department of Veterans Affairs, 2014; NASEM, 2020). If the building has long pipe lengths after the thermostatic mixing valve, then these areas of the system may present a risk for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " growth even if the setpoint temperature meets the guidance criteria. Monitoring and professional consultation may be appropriate to ensure that you do not have ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " downstream of the thermostatic mixing valve.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_52_div_303_div_2_div_10_Template, 14, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_52_div_303_div_2_div_11_Template, 14, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_303_div_2_div_12_Template, 11, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_303_div_2_div_13_Template, 11, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_52_div_303_div_2_div_14_Template, 11, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_303_div_2_div_15_Template, 8, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r233.onHotTemp1());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r233.onHotTemp2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r233.onHotTemp3());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r233.onHotTemp4());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r233.onHotTemp5());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r233.onHotTemp6());
      }
    }

    function AppComponent_div_52_div_303_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_52_div_303_div_1_Template, 10, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_52_div_303_div_2_Template, 16, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r103.onRecircTemp());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r103.onNoRecircTemp());
      }
    }

    function AppComponent_div_52_div_304_div_1_div_4_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The high water heater temperature set point and short time to tap coupled with very low Hot Water (i.e., recirculation loop/ thermostatic mixing valve upstream temp) suggests the following: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You may have made an error in the inputs you selected for your temperatures. Please check, and if so re-run your request with the correct temperature.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " If inputs are correct, then the substantial drop in temperature from the heater to the distribution system temperature suggests that either the water heater set point may be measured incorrectly or there may be problems with the hydraulic design of the plumbing system. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " An engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_4_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The water heater set point temperature is not in compliance with the generally recommended >= 60 \u2103 set point temperature. (Five Guidance Documentsuments- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Increasing the water heater set point temperature could bring the hot water temperature into compliance with guidance on microbial risk. However, If you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_4_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The high water heater set point temperature coupled with very low Hot Water Temperature indicate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " may have made an error in the inputs you selected, and if so re-run your request with the correct temperature.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " If inputs are correct then the substantial drop in temperature from the heater to the distribution system/POU suggests that either the water heater set point is measured incorrectly or there are problems with the hydraulic design of the plumbing system. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The large time to tap coupled with low water temperature in distribution system indicate an engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_4_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The water heater set point temperature is not in compliance with the generally recommended >= 60 \u2103 set point temperature. (Five Guidance Documentsuments- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Increasing the water heater set point temperature could bring the hot water temperature into compliance with guidance on microbial risk. However, If you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The large time to tap coupled with low water temperature in distribution system indicate an engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature in plumbing distribution system is substantially lower than the temperature recommended for controlling ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth by all 8 of 8 guidance documents considered here. Hence the water system may present very high risk of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_304_div_1_div_4_div_12_Template, 17, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_304_div_1_div_4_div_13_Template, 11, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_52_div_304_div_1_div_4_div_14_Template, 15, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_304_div_1_div_4_div_15_Template, 13, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r284.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r284.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r284.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r284.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r284.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r284.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_304_div_1_div_5_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The high water heater temperature set point and short time to tap coupled with very low Hot Water Temperature (i.e., recirculation loop/ thermostatic mixing valve upstream temp) suggests the following: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You may have made an error in the inputs you selected for your temperatures. Please check, and if so re-run your request with the correct temperature.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " If inputs are correct, then the substantial drop in temperature from the heater to the distribution system temperature suggests that either the water heater set point may be measured incorrectly or there may be problems with the hydraulic design of the plumbing system. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " An engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Be aware of the risk that thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_5_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The water heater set point temperature is not in compliance with the generally recommended >= 60 \u2103 set point temperature. (Five Guidance Documentsuments- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Increasing the water heater set point temperature could bring the hot water temperature into compliance with guidance on microbial risk. However, If you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_5_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The high water heater set point temperature coupled with very low Hot Water Temperature indicate ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " may have made an error in the inputs you selected, and if so re-run your request with the correct temperature.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " If inputs are correct then the substantial drop in temperature from the heater to the distribution system/POU suggests that either the water heater set point is measured incorrectly or there are problems with the hydraulic design of the plumbing system. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The large time to tap coupled with low water temperature in distribution system indicate an engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_5_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The water heater set point temperature is not in compliance with the generally recommended >= 60 \u2103 set point temperature. (Five Guidance Documentsuments- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Increasing the water heater set point temperature could bring the hot water temperature into compliance with guidance on microbial risk. However, If you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The large time to tap coupled with low water temperature in distribution system indicate an engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature in plumbing distribution system is lower than the temperature recommended for controlling ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth by all 8 of the guidance documents reviewed here. Hence the water system may present very high to moderate risk of opportunistic pathogen growth, such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_304_div_1_div_5_div_12_Template, 17, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_304_div_1_div_5_div_13_Template, 11, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_52_div_304_div_1_div_5_div_14_Template, 15, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_304_div_1_div_5_div_15_Template, 13, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r285.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r285.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r285.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r285.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r285.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r285.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_304_div_1_div_6_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The high water heater temperature set point and short time to tap coupled with slightly lower Hot Water Temperature (i.e., recirculation loop/thermostatic mixing valve upstream temp) suggests there may be problems with the hydraulic design of the plumbing system. An engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_6_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The water heater set point temperature is not in compliance with generally recommended >= 60 \u2103 set point temperature. (Five Guidance Documentsuments- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Increasing the water heater set point temperature could bring the hot water temperature into compliance with guidance on microbial risk. However, If you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_6_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The high water heater temperature set point and large time to tap coupled with slightly lower Hot Water Temperature (i.e., recirculation loop/thermostatic mixing valve upstream temp) suggests there may be problems with the hydraulic design of the plumbing system. An engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_6_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The water heater set point temperature is not in compliance with generally recommended >= 60 \u2103 set point temperature. (Five Guidance Documentsuments- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Increasing the water heater set point temperature (to >= 60 \u2103 if possible) could bring the hot water temperature into compliance with guidance on microbial risk. However, If you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The large time to tap coupled with low water distribution system temperature indicates an engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is high enough according to 4 of the 8 guidance documents reviewed here. The remaining 4 recommend higher temperatures to control ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth. These water temperature may present a low risk of opportunistic pathogen, such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_304_div_1_div_6_div_12_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_304_div_1_div_6_div_13_Template, 11, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_52_div_304_div_1_div_6_div_14_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_304_div_1_div_6_div_15_Template, 13, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r286.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r286.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r286.onLowTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r286.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r286.onHighTimeHighSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r286.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_304_div_1_div_7_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_7_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is high enough to control the growth of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " according to 6 of the 8 documents considered here. The remaining 2 recommend higher temperatures to control ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth and water temperature may present very low to no risk of opportunistic pathogen, such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " growth. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_52_div_304_div_1_div_7_div_15_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_div_52_div_304_div_1_div_7_div_16_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r287.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r287.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r287.onLowTimeHighSetPoint() || ctx_r287.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r287.onHighTimeHighSetPoint() || ctx_r287.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_304_div_1_div_8_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_8_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is high enough to control the growth of opportunistic pathogens such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " according to all 8 documents considered here. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_304_div_1_div_8_div_9_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_52_div_304_div_1_div_8_div_10_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r288.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r288.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r288.onLowTimeHighSetPoint() || ctx_r288.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r288.onHighTimeHighSetPoint() || ctx_r288.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_304_div_1_div_9_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_9_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature is high enough to control the growth of opportunistic pathogens including ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " according to all 8 documents considered here. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_304_div_1_div_9_div_9_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_52_div_304_div_1_div_9_div_10_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r289.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r289.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r289.onLowTimeHighSetPoint() || ctx_r289.onLowTimeLowSetPoint());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r289.onHighTimeHighSetPoint() || ctx_r289.onHighTimeLowSetPoint());
      }
    }

    function AppComponent_div_52_div_304_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Guidance for microbial risk in your building are based on the recirculation loop temperature.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_52_div_304_div_1_div_4_Template, 16, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_52_div_304_div_1_div_5_Template, 16, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_52_div_304_div_1_div_6_Template, 16, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_52_div_304_div_1_div_7_Template, 17, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_52_div_304_div_1_div_8_Template, 11, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_304_div_1_div_9_Template, 11, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r282.onHotTemp1());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r282.onHotTemp2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r282.onHotTemp3());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r282.onHotTemp4());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r282.onHotTemp5());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r282.onHotTemp6());
      }
    }

    function AppComponent_div_52_div_304_div_2_div_4_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater setpoint temperature (to >= 60 \u2103 if possible) could bring the hot water temperature into compliance with guidance on microbial risk. However, if you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_2_div_4_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater setpoint temperature (to >= 60 \u2103 if possible) could bring the hot water temperature into compliance with guidance on microbial risk. However, if you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " The large time to tap indicate an engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The water temperature in plumbing distribution system is lower than the temperature recommended for controlling ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth by all 8 of 8 guidance documents considered here. Hence the water system may present very high ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth potential. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_304_div_2_div_4_div_12_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_304_div_2_div_4_div_13_Template, 11, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r308.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r308.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r308.onLowTime());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r308.onHighTime());
      }
    }

    function AppComponent_div_52_div_304_div_2_div_5_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater setpoint temperature (to >= 60 \u2103 if possible) could bring the hot water temperature into compliance with guidance on microbial risk. However, if you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_2_div_5_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater setpoint temperature (to >= 60 \u2103 if possible) could bring the hot water temperature into compliance with guidance on microbial risk. However, if you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " The large time to tap indicate an engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The set point water temperature is low and as a result the plumbing distribution system temperature is expected to be lower than the temperature recommended for controlling ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " growth by all 8 of 8 guidance documents considered here. Hence the water system may present very high ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth potential. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_52_div_304_div_2_div_5_div_12_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_52_div_304_div_2_div_5_div_13_Template, 11, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r309.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r309.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r309.onLowTime());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r309.onHighTime());
      }
    }

    function AppComponent_div_52_div_304_div_2_div_6_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater setpoint temperature (to >= 60 \u2103 if possible) could bring the hot water temperature into compliance with guidance on microbial risk. However, if you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_2_div_6_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater setpoint temperature (to >= 60 \u2103 if possible) could bring the hot water temperature into compliance with guidance on microbial risk. However, if you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " The large time to tap indicate an engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_2_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The set-point water temperature may present a low to medium risk of growth of opportunistic pathogens, such a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ", and is below the recommended value of >=60 \u2103 (Five Guidance Documents- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020) to control microbial growth downstream from the water heater. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_304_div_2_div_6_div_9_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_52_div_304_div_2_div_6_div_10_Template, 11, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r310.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r310.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r310.onLowTime());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r310.onHighTime());
      }
    }

    function AppComponent_div_52_div_304_div_2_div_7_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater setpoint temperature (to >= 60 \u2103 if possible) could bring the hot water temperature into compliance with guidance on microbial risk. However, if you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_2_div_7_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater setpoint temperature (to >= 60 \u2103 if possible) could bring the hot water temperature into compliance with guidance on microbial risk. However, if you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " The large time to tap indicate an engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_2_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The set-point water temperature may present very low to no risk of opportunistic pathogen growth, such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " in the water heater itself, but the water heater temperature is below the recommended range of >= 60 \u2103 by guidance (Five Guidance Documents- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020) to control microbial growth downstream from the water heater. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_304_div_2_div_7_div_9_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_52_div_304_div_2_div_7_div_10_Template, 11, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r311.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r311.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r311.onLowTime());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r311.onHighTime());
      }
    }

    function AppComponent_div_52_div_304_div_2_div_8_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater setpoint temperature (to >= 60 \u2103 if possible) could bring the hot water temperature into compliance with guidance on microbial risk. However, if you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_2_div_8_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Increasing the water heater setpoint temperature (to >= 60 \u2103 if possible) could bring the hot water temperature into compliance with guidance on microbial risk. However, if you do choose to increase your setpoint temperature, make sure to check that all thermostatic mixing valves are properly installed and functioning to protect against scalding at the point of use. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " The large time to tap indicate an engineering consultation on hydraulics of plumbing system (i.e., pipe insulation, if applicable, and pipe length) may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_2_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " The setpoint water temperature does not present risk of the growth of opportunistic pathogens, such as ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " in the water heater itself, but the water heater temperature is below the recommended range of >= 60 \u2103 by guidance (Five Guidance Documents- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020) to control microbial growth downstream from the water heater. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_304_div_2_div_8_div_9_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_52_div_304_div_2_div_8_div_10_Template, 11, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r312.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r312.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r312.onLowTime());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r312.onHighTime());
      }
    }

    function AppComponent_div_52_div_304_div_2_div_9_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_2_div_9_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The length of time for hot water to reach the tap does not comply with available guidance, which suggests that an engineering consultation on the hydraulics of the system may be appropriate. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Be aware of the risk that poorly designed or maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth. If not in place already, you will need to develop and implement a thermostatic mixing valve maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_304_div_2_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This setpoint temperature meets the guidance recommendation of >= 60 \u2103 (Five Guidance Documentsuments- OSHA, 1996; CDC, 2003; WHO, 2007; EGWG, 2017; NASEM, 2020) to control microbial growth downstream from the water heater. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_52_div_304_div_2_div_9_div_6_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_52_div_304_div_2_div_9_div_7_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r313.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r313.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r313.onLowTime());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r313.onHighTime());
      }
    }

    function AppComponent_div_52_div_304_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Microbial risk is based on water heater setpoint temperature which may be substantially higher than temperature found in water distribution system. As such guidance may underestimate microbial risk, particularly if distribution system is lengthy, includes a recirculation loop, or otherwise allows for temperature losses during distribution.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_52_div_304_div_2_div_4_Template, 14, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_52_div_304_div_2_div_5_Template, 14, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_52_div_304_div_2_div_6_Template, 11, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_52_div_304_div_2_div_7_Template, 11, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_52_div_304_div_2_div_8_Template, 11, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_52_div_304_div_2_div_9_Template, 8, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r283.onHotTemp1());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r283.onHotTemp2());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r283.onHotTemp3());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r283.onHotTemp4());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r283.onHotTemp5());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r283.onHotTemp6());
      }
    }

    function AppComponent_div_52_div_304_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_52_div_304_div_1_Template, 10, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_52_div_304_div_2_Template, 10, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r104.onRecircTemp());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r104.onNoRecircTemp());
      }
    }

    function AppComponent_div_52_div_310_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The POU Temperature complies with 4 of 4 guidance documents reviewed for scald risk. Thus, anticipated risk is minimal.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_311_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You have not entered \u2018Point of Use\u2019 temperature and therefore no not scald guidance can be provided. For scald associated with different temperatures please refer to Tables 2 and 3. If you have missed entering POU temp., please enter the appropriate value and re-run the report to obtain appropriate guidance for scald risk. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_312_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The POU Temperature complies with 2 of 4 sources of guidance available on the scald risk. Some scalding risk may exist but would require a long duration of exposure (first degree burn after approx. 35 minutes exposure to water at this temperature and second degree burn after 45 mins exposure)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_313_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your water temperature does not comply with 2 of the 4 scald risk guidance documents and scalding can occur if contact with the water persists for some duration (first degree burn after approx. 1 minute exposure to water at this temperature and second degree burn after 5 mins exposure)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_314_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your water temperature does not comply with any of the 4 scald risk guidance documents reviewed here. Scalding can occur during short exposures. (First degree burn can occur as short as 5 seconds exposure and second degree burn can occur as short as 25 seconds exposure. [Table 3, Rows 10]). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_315_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your water temperature does not comply with any of the 4 scald risk guidance documents considered here, and scalding risk is high. Scald may occur during very brief exposures (first degree burn may occur as small as approx. 2 to 5 seconds exposure to water at these temperatures. Similarly, second degree burn may occur after 5 to 25 seconds exposures [Table 3, Rows 8 and 9]). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_316_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your water temperature does not comply with any of the 5 scald risk guidance documents considered here, and scalding risk is high. Scald may occur during very brief exposures (first degree burn may occur as small as 2 seconds or lower exposure to water at these temperatures. Similarly, second degree burn may occur after 5 second or lower exposures.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_318_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Water temperature is too low to present any scald risk as per all four guidance documents considered.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_319_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You may decide that no action is required. If a vulnerable population resides in the building, you may consider the installing TMVs at each fixture to protect against scalding. If you select this option, be aware that poorly maintained TMVs can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a TMV maintenance program. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_320_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "These may be some scald present, particularly for vulnerable populations. You may consider installing thermostatic mixing valves at each fixture to protect against scalding, particularly if a vulnerable population resides in the building. If you select this option, be aware that poorly maintained TMVs can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a TMV maintenance program");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_321_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The POU temperature reported presents a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "potential for scalding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". You may consider lowering heater setpoint temperature, but this may increase microbial concerns.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You may also consider installing thermostatic mixing valves at each fixture to protect against scalding. If you select this option, be aware that poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_322_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The POU temperature reported presents a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "high potential for scalding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". You may consider lowering heater setpoint temperature, but should keep the temperature high enough to address microbial concerns.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You may also consider installing thermostatic mixing valves at each fixture to protect against scalding. If you select this option, be aware that poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_323_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The POU temperature reported presents a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "very high potential for scalding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". You may lower the heater setpoint temperature, but should keep the temperature high enough to address microbial.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You may also consider installing thermostatic mixing valves at each fixture to protect against scalding. If you select this option, be aware that poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_324_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Water temperature is too low to present any scald risk as per all 4 out of 4 guidance documents available.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "If you do not already have a thermostatic mixing valve maintenance plan, consider developing one as poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_325_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You may decide that no action is required. If a vulnerable population resides in the building, you may consider installing TMVs at each fixture to protect against scalding. If you select this option, be aware that poorly maintained TMVs can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " growth so you will need to develop and implement a TMV maintenance program ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_326_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "There is some scald risk present, particularly for vulnerable populations in buildings. An inspection/expert consultation to adjust the thermostatic mixing valve to a lower mixing temperature may be requested. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Adjusting the central TMV to lower the temperature of water downstream of the value is one option, but this may increase microbial concerns (see Table X). You may consider installing Individual TMVs to protect against scalding, particularly if vulnerable population resides in the building. If you select this option, be aware that you will have more TMVs to maintain and poorly maintained TMVs can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth so you will need to develop and implement a TMV maintenance program if don\u2019t already have one in place. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_327_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The point of use temperature reported presents a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "potential for scalding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". You may consider lowering thermostatic mixing valve mixing temperature, but this may increase microbial concerns.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You may also consider installing thermostatic mixing valves at each fixture to protect against scalding. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_328_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The point of use temperature reported presents a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "high potential for scalding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". You may consider lowering thermostatic mixing valve mixing temperature, but should also consider microbial concerns which might be increased.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You may also consider installing thermostatic mixing valves at each fixture to protect against scalding. If you select this option, be aware that you will have more thermostatic mixing valves to maintain and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth so you will need to develop and implement a thermostatic mixing valve maintenance program.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_329_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The point of use temperature reported presents a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "very high potential for scalding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". You may lower the mixing valve temperature, but should keep the temperature high enough to address microbial.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You may also consider installing thermostatic mixing valves at each fixture to protect against scalding. If you select this option, be aware that you will have more thermostatic mixing valves to maintain, and poorly maintained thermostatic mixing valves can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth, so you will need to develop and implement a thermostatic mixing valve maintenance program.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_330_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No guidance is required as water temperature is too low to cause any scald risk as per 4 out of four guidance available documents. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_331_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " As scalding requires considerable exposure time, you may decide that no action is required. If a vulnerable population resides in the building, you may consider adjusting the mixing temperature of the TMVs at each fixture to protect against scalding. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Also, if a TMV maintenance plan is not already in place, be aware that poorly maintained TMVs can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth so you will need to develop and implement a TMV maintenance program.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_332_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "There is some scald risk present, particularly for vulnerable population in building. You may lower the mixing temperatures of the thermostatic mixing valves to address this risk. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Also, if a TMV maintenance plan is not already in place, be aware that poorly maintained TMVs can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " growth so you will need to develop and implement a TMV maintenance program.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_333_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The point of use temperature reported presents a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "potential for scalding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". You may lower the thermostatic mixing valve mixing temperature. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Also, if a TMV maintenance plan is not already in place, be aware that poorly maintained TMVs can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth so you will need to develop and implement a TMV maintenance program.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_334_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The point of use temperature reported presents a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "high potential for scalding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". You may lower the thermostatic mixing valve mixing temperature. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Also, if a TMV maintenance plan is not already in place, be aware that poorly maintained TMVs can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth so you will need to develop and implement a TMV maintenance program.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_335_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The point of use temperature reported presents a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "very high potential for scalding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". You may lower the thermostatic mixing valve mixing temperature. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Also, if a TMV maintenance plan is not already in place, be aware that poorly maintained TMVs can actually promote ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " growth so you will need to develop and implement a TMV maintenance program.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_339_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You have indicated that no residual disinfectant is present in the plumbing system.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_52_div_340_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 210);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody", 211);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 212);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Residual in Plumbing System");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Free chlorine residual: 0.2\u20130.5 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "WHO, 2007");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr", 213);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Free chlorine residual: \u2265 0.2 mg/L and \u2264 4.0 mg/L");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "NASEM, 2019 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Chlorine residual: 0.2\u20131 mg/L (at the point of delivery)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "European Guidelines Working Group, 2017 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr", 213);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Free chlorine residual: 1\u20132 mg/L");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CDC, 2003, U.S. EPA, 1985 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "If your residual is lower than desired, consider implementing a regular flushing program. Flushing pipes replaces older, stagnant water which has lost its residual disinfectant with fresher water that can be expected to have residual levels closer to what is provided by the water supplier.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r131.residualResults);
      }
    }

    function AppComponent_div_52_div_341_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 210);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody", 211);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 214);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Residual in Plumbing System");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Chloramine residual: 0.5 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Department of Veterans Affairs, 2014");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr", 213);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total chlorine (chloramines): \u2265 0.5 mg/L and \u2264 4.0 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "NASEM, 2019 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Chloramine residual: 0.5\u20132 mg/L Maximum chloramine residual: 3 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "European Guidelines Working Group, 2017");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "If your residual is lower than desired, consider implementing a regular flushing program. Flushing pipes replaces older, stagnant water which has lost its residual disinfectant with fresher water that can be expected to have residual levels closer to what is provided by the water supplier.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r132.chloramineLevelResults);
      }
    }

    function AppComponent_div_52_div_342_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 210);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody", 211);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 214);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Residual in Plumbing System");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Chlorine dioxide: \u2264 0.5 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "European Guidelines Working Group, 2017 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr", 213);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Chlorine dioxide: \u2265 0.2 mg/L and \u2264 0.8 mg/L");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "NASEM, 2019 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Chlorine dioxide residual: \u2265 0.5 mg/L ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Department of Veterans Affairs, 2014 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "If your residual is lower than desired, consider implementing a regular flushing program. Flushing pipes replaces older, stagnant water which has lost its residual disinfectant with fresher water that can be expected to have residual levels closer to what is provided by the water supplier.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r133.dioxideLevelResults);
      }
    }

    function AppComponent_div_52_div_347_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 210);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 211);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 215);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Time to Tap");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "10-30 seconds");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ASPE, 2013");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "50-55 within 1 min at point of use");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "European Guidelines Working Group, 2017");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Minimum 55 within 1 min at distal points");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "NASEM, 2019");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r134.results);
      }
    }

    function AppComponent_div_52_div_350_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Low Flow Fixtures");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Definition of low flow fixture:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Your response to questions 10 indicates that you have low flow fixtures present in your building. The following guidance is suggested for maintaining low flow fixtures in the building plumbing system. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "According to the National Academies of Sciences, Engineering, and Medicine (NASEM 2019) \u201CLower-flow fixtures, including toilets, dishwashers, washing machines, showerheads, and faucets are required by the EPA WaterSense program to reduce flows by at least 20 percent.\u201D ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Low flow fixtures can increase ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " risk due to:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "increase in water age (NASEM 2019)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "a decrease in the residual disinfectant concentration (NASEM 2019)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lower flow results in less effective scouring of biofilms and promotes the growth of biofilm-associated ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " (European Guidelines Working Group, 2017; NASEM 2019)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Low flow fixtures also take a longer flushing time for the target water temperature to be achieved (NASEM 2019).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u201CLow-flow fixtures should not be allowed in hospitals and long-term care facilities because of their high-risk occupant populations.\u201D (NASEM 2019)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Low flow fixtures must be flushed a minimum of two times a week to prevent water stagnation leading to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " growth (Department of Veterans Affairs 2014).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "References:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Department of Veterans Affairs. 2014. \u201CVHA Directive 1061: Prevention of Healthcare-AssociatedDisease and Scald Injury from Potable Water Distribution Systems.\u201D Washington, DC.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "ECDC. 2017. \u201CEuropean Technical Guidelines for the Prevention, Control and Investigation of Infections Caused bySpecies.\u201D Stockholm: European Centre for Disease Prevention and Control. http://ecdc.europa.eu/en/publications-data/european-technical-guidelines-prevention-control-and-investigation-infections.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "NASEM. 2019. \u201CManagement ofin Water Systems | The National Academies Press.\u201D Washington, DC: National Academies of Sceinces, Engineering and Medicine. https://www.nap.edu/catalog/25474/management-of-legionella-in-water-systems. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r135.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r135.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AppComponent_div_52_div_351_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Electronic Faucets");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "u");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Suggested remedial actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 216);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(NASEM, 2019): ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r136.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r136.featuresOutput["ef-concerns"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r136.featuresOutput["ef-action"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AppComponent_div_52_div_352_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Showers with flexible hoses");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r137.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r137.featuresOutput["sfh-concerns"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r137.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r137.featuresOutput["sfh-action"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AppComponent_div_52_div_353_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cooling Tower");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cooling towers (aerosol & biofilm-generating devices) are associated with Legionnaires\u2019 disease (NASEM 2019; U.S. EPA 1985; Department of Veterans Affairs 2014; Bartram et al. 2007) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Temperatures in cooling towers are ideal temperature for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " growth (NASEM 2019) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cooling towers also provide a large surface area for biofilm colonization (NASEM 2019). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cooling towers should be checked for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " quarterly with a target of less than 100 CFU/L (NASEM 2019) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contractors could be used for inspection, water treatment, maintenance, cleaning, and disinfection of cooling towers (European Guidelines Working Group 2017). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cooling towers should be maintained according to the manufacturer\u2019s recommendations and current industry standards and should be drained, disinfected, and cleaned at least twice per year (European Guidelines Working Group 2017).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cooling towers should be made from corrosion-resistant materials and designed for ease of maintenance. Internal surfaces should be smooth-faced and designed to facilitate cleaning (European Guidelines Working Group 2017).");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r138.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r138.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AppComponent_div_52_div_354_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hot tub");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "In hot tubs and spas, several different conditions can influence ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " growth and can increase contamination risk. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Aerosols that are generated by the water jets in hot tubs can be easily inhaled both by the pool users and those in the immediate vicinity ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 217);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "(NASEM, 2019; ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 218);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "European Guidelines Working Group 2017)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hot tubs/spas support biofilm growth which promotes the growth of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " (NASEM 2019) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Hot tubs contain stagnant warm water for prolonged periods which is found to be linked with ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " growth ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 216);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " (NASEM 2019) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "The potential of high organic content in the pools increases ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " growth potential. Water not drained causes the accumulation of nutrients in the multi-body spas (Bartram et al. 2007) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Spas and hot tubs mostly maintain temperatures higher than 30 \u2103, an ideal condition for the growth of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " and other waterborne pathogens (NASEM 2019; European Guidelines Working Group 2017) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r139.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r139.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r139.featuresOutput["ht-action"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AppComponent_div_52_div_355_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Decorative fountain");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Decorative fountains use water at temperatures which can be favorable for microbial growth (OSHA 1996; CDC 2003; Department of Veterans Affairs 2008; ANSI/ASHRAE 2018). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Decorative fountains generate water aerosols which were found to be associated with ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " transmission (NASEM 2019; CDC 2003). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Avoid placing decorative fountains in patient-care areas (CDC 2003). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Regularly disinfect and maintenance fountains (CDC 2003). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Complete drain the system for cleaning (CDC 2003). ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r140.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r140.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AppComponent_div_52_div_356_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Centrally-installed mister, atomizer, air washer, or humidifier");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your response to question 8 indicates that the building has a centrally-installed mister, atomizer, air washer, or humidifier. According to the Centers for Disease Control and Prevention Tool-Kit (CDC, 2017), you need a Water Management Program for any centrally-installed mister, atomizer, air washer, or humidifier. However, water management program template for these devices are not directly available. If these devices are present, one should refer to the manufacturer\u2019s instructions for use for proper cleaning and disinfection instructions of these devices. For more information on developing a water management program for these devices you can refer to the templates available for similar other devices such as cooling systems, medical devices, and other recreational devices available on pages 40-78 of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 219);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "the document here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Humidifiers are potential microbial sources because of their capacity to support biofilm growth (NASEM 2019), ability to generate aerosols, and favorable temperature range for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " growth and amplification (NASEM 2019; Bartram et al. 2007)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u201CUse of humidifiers, particularly those using water misting, should be discouraged among higher-risk patients\u201D (NASEM 2019)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "During chemical treatment of humidification systems, there is a potential for the disinfectant chemicals to be discharged into HVAC systems and inhaled by building residents (NASEM 2019)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "New buildings should avoid humidifier designs (i.e., ultrasonic humidifiers and centrifugal sprays) which produce water droplets within the temperature spectrum favorable to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " growth. Existing humidifiers that employ such designs should be replaced during building renovations (NASEM 2019)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Rigorous cleaning and inspection (monthly) of line strainers, sparge pipes, valves, spray nozzles, and components of steam, and spray humidifiers releasing moisture into the airstream are required (Government of Western Australia, Department of Commerce, Department of Mines and Petroleum 2010)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "All HVAC equipment should maintain water storage temperatures either below or above the 25\u2103 to 43\u2103 range which is conducive for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Legionella");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " growth (NASEM 2019)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "A steam injection system should be implemented in the HVAC humidifiers to reduce possible microbial contamination (OSHA 1996)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Considering this risk of disinfectant chemicals to be discharged into HVAC systems and inhaled by building residents, UV and photochemical ozone generators could be used for water treatment (NASEM 2019)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "HVAC systems should be operated using 100% outside air for 8 hours before returning the building to normal operating conditions after cleaning or disinfecting the misters/humidifiers (OSHA 1996)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r141.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r141.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r141.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AppComponent_div_52_div_357_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Thermostatic mixing valves");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r142.featuresOutput["tmv-p"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r142.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r142.featuresOutput["tmv-concerns"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r142.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r142.featuresOutput["tmv-action"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function AppComponent_div_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 67, 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_div_52_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r326.onFormSubmit(_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Answer the following questions to help assess if a water quality management plan is required for your building, and identify building plumbing features/factors (e.g., dead ends, low flow fixtures, temperature settings, time to tap) for which special guidance is warranted.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Building Plumbing System Monitoring: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 1.\xA0 Does your building have thermostatic mixing valves? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 70, 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_52_Template_input_change_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r328.radioChangedYes($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 72, 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_52_Template_input_change_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var ctx_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r329.radioChangedNo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " No \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 73, 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_52_Template_input_change_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r330.radioChangedMaybe($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Don't Know ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_div_52_div_21_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_div_52_div_22_Template, 10, 3, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 2.\xA0 What is the hot water temperature at a typical tap in your building? (i.e., when only the hot-water tap is open and the cold-water tap is completely closed and the faucet is running for a sufficiently long time, i.e. hot-water temperature is stabilized)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 76, 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " > 140 \xB0F [ > 60 \u2103 ]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 78, 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " 131 - 139 \xB0F [ 55 - 59 \u2103 ]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 79, 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 123 - 130 \xB0F [ 51 \u2013 54 \u2103 ] ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 80, 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 119 - 122 \xB0F [ 49 \u2013 50 \u2103 ]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 81, 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 110 - 118 \xB0F [ 43 \u2013 48 \u2103 ] ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 82, 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " < 110 \xB0F [ < 43 \u2103 ] ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 83, 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Don't Know ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AppComponent_div_52_div_54_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " 3.\xA0 How long does it take for the hot-water to reach a steady temperature from the time when the hot-water valve at a typical faucet is opened at its full capacity to the point when hot-water temperature stabilizes? (Note: Keep the cold-water valve remains closed for the entire duration)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 84, 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " > 60 seconds ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 86, 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " 31 \u2013 60 seconds ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 87, 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " 11 \u2013 30 seconds ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 88, 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " 1 \u2013 10 seconds ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 89, 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Don\u2019t know ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, AppComponent_div_52_div_77_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " 4.\xA0 Does your building have recirculation loop? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 90, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_52_Template_input_change_81_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r331.recLoopYes($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "input", 92, 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_52_Template_input_change_84_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r332.recLoopNo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, AppComponent_div_52_div_87_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AppComponent_div_52_div_88_Template, 31, 8, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " 5. \xA0What type of residual disinfectant is present in the plumbing system? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "input", 93, 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_52_Template_input_change_92_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r333.residualType1($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Chlorine ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "input", 95, 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_52_Template_input_change_96_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r334.residualType2($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Monochloramine");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "input", 96, 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_52_Template_input_change_100_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r335.residualType3($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Chlorine Dioxide ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "input", 97, 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_52_Template_input_change_104_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r336.residualType4($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " None");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, AppComponent_div_52_div_108_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, AppComponent_div_52_div_109_Template, 27, 7, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, AppComponent_div_52_div_110_Template, 24, 6, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, AppComponent_div_52_div_111_Template, 24, 6, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " 6. \xA0What is the water heater temperature setpoint in your building?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 98, 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " \u2265 140 \xB0F [ \u2265 60 \u2103] ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 100, 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " 131 \u2013 139 \xB0F [ 55 \u2013 59 \u2103]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 101, 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " 123 \u2013 130 \xB0F [ 51 \u2013 54 \u2103 ] ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "input", 102, 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " 119 \u2013 122 \xB0F [49 \u2013 50 \u2103 ]");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "input", 103, 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " 110 \u2013 118 \xB0F [ 43 \u2013 48 \u2103 ] ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "input", 104, 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " < 110 \xB0F [ < 43 \u2103 ] ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "input", 105, 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Don't Know ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, AppComponent_div_52_div_142_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "General Water Devices:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "input", 106, 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "input", 108, 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](154, AppComponent_div_52_div_154_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "input", 109, 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "input", 111, 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](163, AppComponent_div_52_div_163_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "input", 112, 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "input", 114, 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, AppComponent_div_52_div_172_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "input", 115, 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "input", 117, 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](181, AppComponent_div_52_div_181_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Critical Water Devices:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "input", 118, 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "input", 120, 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](193, AppComponent_div_52_div_193_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "input", 121, 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "input", 123, 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](202, AppComponent_div_52_div_202_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "input", 124, 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "input", 126, 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](211, AppComponent_div_52_div_211_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "input", 127, 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "input", 129, 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](220, AppComponent_div_52_div_220_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Building/Facility Type:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "input", 130, 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "input", 132, 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](232, AppComponent_div_52_div_232_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "input", 133, 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "input", 135, 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](241, AppComponent_div_52_div_241_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "input", 136, 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "input", 138, 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](250, AppComponent_div_52_div_250_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "input", 139, 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " Yes \xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "input", 141, 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](259, AppComponent_div_52_div_259_Template, 2, 1, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "button", 142);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_52_Template_button_click_261_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](270);

          var ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r337.open(_r91);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " \xA0 \xA0 \xA0\t");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "button", 143);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_52_Template_button_click_264_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r338.resetForm(_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Click here to scroll to output");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](269, AppComponent_div_52_ng_template_269_Template, 17, 4, "ng-template", null, 145, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 146, 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](275, AppComponent_div_52_div_275_Template, 135, 25, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Dead End Guidance:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](282, AppComponent_div_52_div_282_Template, 4, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](284, AppComponent_div_52_div_284_Template, 4, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "References:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " Darelid, J., S. Lofgren, and B.-E. Malmvall. 2002. Control of nosocomial Legionnaires\u2019 disease by keeping the circulating hot water temperature above 55\xB0C: Experience from a 10-year surveillance programme in a district general hospital. Journal of Hospital Infection 50(3):213-219. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " Totaro, M., P. Valentini, A.L. Costa, S. Giorgi, B. Casini, A. Baggiani. 2018. Rate of Legionella pneumophila colonization in hospital hot water network after time flow taps installation. Journal of Hospital Infection 98:60-63. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Microbial Risk Guidance:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](297, AppComponent_div_52_div_297_Template, 3, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](298, AppComponent_div_52_div_298_Template, 3, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](299, AppComponent_div_52_div_299_Template, 3, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](300, AppComponent_div_52_div_300_Template, 3, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](301, AppComponent_div_52_div_301_Template, 3, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](302, AppComponent_div_52_div_302_Template, 7, 6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](303, AppComponent_div_52_div_303_Template, 3, 2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](304, AppComponent_div_52_div_304_Template, 3, 2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Scald Risk Guidance:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](310, AppComponent_div_52_div_310_Template, 4, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](311, AppComponent_div_52_div_311_Template, 4, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](312, AppComponent_div_52_div_312_Template, 4, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](313, AppComponent_div_52_div_313_Template, 4, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](314, AppComponent_div_52_div_314_Template, 4, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](315, AppComponent_div_52_div_315_Template, 4, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](316, AppComponent_div_52_div_316_Template, 4, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "h6", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](318, AppComponent_div_52_div_318_Template, 4, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](319, AppComponent_div_52_div_319_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](320, AppComponent_div_52_div_320_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](321, AppComponent_div_52_div_321_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](322, AppComponent_div_52_div_322_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](323, AppComponent_div_52_div_323_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](324, AppComponent_div_52_div_324_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](325, AppComponent_div_52_div_325_Template, 7, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](326, AppComponent_div_52_div_326_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](327, AppComponent_div_52_div_327_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](328, AppComponent_div_52_div_328_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](329, AppComponent_div_52_div_329_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](330, AppComponent_div_52_div_330_Template, 4, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](331, AppComponent_div_52_div_331_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](332, AppComponent_div_52_div_332_Template, 9, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](333, AppComponent_div_52_div_333_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](334, AppComponent_div_52_div_334_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](335, AppComponent_div_52_div_335_Template, 12, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "Guidance for Residual Concentration in Building:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](339, AppComponent_div_52_div_339_Template, 3, 0, "div", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](340, AppComponent_div_52_div_340_Template, 32, 1, "div", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](341, AppComponent_div_52_div_341_Template, 27, 1, "div", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](342, AppComponent_div_52_div_342_Template, 27, 1, "div", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Guidance for Plumbing Hydraulics- Time for Hot Water to Reach at Tap or POU: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](347, AppComponent_div_52_div_347_Template, 23, 1, "div", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](350, AppComponent_div_52_div_350_Template, 57, 2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](351, AppComponent_div_52_div_351_Template, 13, 3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](352, AppComponent_div_52_div_352_Template, 9, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](353, AppComponent_div_52_div_353_Template, 31, 2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](354, AppComponent_div_52_div_354_Template, 42, 3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](355, AppComponent_div_52_div_355_Template, 24, 2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](356, AppComponent_div_52_div_356_Template, 51, 3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](357, AppComponent_div_52_div_357_Template, 10, 5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "a", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "Click here to go back to input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "button", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_52_Template_button_click_361_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r339.downloadAsPDF();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Download PDF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "div", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);

        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);

        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](93);

        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](116);

        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](149);

        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](158);

        var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](167);

        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](176);

        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](188);

        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](197);

        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](206);

        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](215);

        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](227);

        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](236);

        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](245);

        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](254);

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.tmv);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.tmv);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.tmv);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r16.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.ShowHideDiv());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.pou);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.pou);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.pou);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.pou);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.pou);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.pou);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.pou);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r21.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.timeToTapInput);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.timeToTapInput);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.timeToTapInput);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.timeToTapInput);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.timeToTapInput);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r29.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.recLoop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.recLoop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r35.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.ShowHideRecLooptemp());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.residualType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.residualType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.residualType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.residualType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r39.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showHideChlorine() && ctx_r5.onDisinfectant());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showHideChloramine() && ctx_r5.onDisinfectant());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showHideDioxide() && ctx_r5.onDisinfectant());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.setpoint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.setpoint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.setpoint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.setpoint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.setpoint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.setpoint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.setpoint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r47.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.extractDeviceQuestions["content-9"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.deadEnd);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.deadEnd);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r55.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.extractDeviceQuestions["content-10"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.llf);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.llf);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r58.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.extractDeviceQuestions["content-11"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.ef);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.ef);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r61.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.extractDeviceQuestions["content-12"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.sfh);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.sfh);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r64.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.extractDeviceQuestions["content-5"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.coolingTower);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.coolingTower);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r67.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.extractDeviceQuestions["content-6"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.hotTub);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.hotTub);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r70.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.extractDeviceQuestions["content-7"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.decoFoun);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.decoFoun);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r73.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.extractDeviceQuestions["content-8"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.humidifier);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.humidifier);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r76.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.extractBuildingQuestions["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.buidingType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.buidingType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r79.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.extractBuildingQuestions["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.retirementBuilding);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.retirementBuilding);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r82.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.extractBuildingQuestions["content-3"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.hotelBuilding);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.hotelBuilding);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r85.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.extractBuildingQuestions["content-4"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.basement);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.user.basement);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r88.invalid && _r15.submitted && !ctx_r5.isValidFormSubmitted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r15.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r5.isValidFormSubmitted)("ngClass", "success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onQ9());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onQ9());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onRecircNoTemp());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onpou7());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onrecLoopTemp7());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.onRecircNoTemp() && ctx_r5.onSetpointOverRecirc());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onSetpointAsHot() && ctx_r5.onMicrobialRiskNoTMV());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onMicrobialRiskNoTMV());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onMicrobialRiskCentTMV());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onMicrobialRiskIndTMV());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.featuresOutput["content-1"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onFullScaldCompliance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onpou7());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onLowerScaldCompliance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onLowerMidScaldCompliance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onMidScaldCompliance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onUpperScaldCompliance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onNoScaldCompliance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.featuresOutput["content-2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.noTmvFullGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.noTmvLowerGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.noTmvLowerMidGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.noTmvMidGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.noTmvUpperGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.noTmvNoGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.centTmvFullGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.centTmvLowerGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.centTmvLowerMidGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.centTmvMidGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.centTmvUpperGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.centTmvNoGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.indTmvFullGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.indTmvLowerGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.indTmvLowerMidGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.indTmvMidGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.indTmvUpperGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.indTmvNoGuidance());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.onDisinfectant());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onResidualLevel());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onChloramineLevel());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onDioxideLevel());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onTimeToTap());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onLowFixtures());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onEf());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onSfh());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onCt());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onHt());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onDecoFoun());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onHumid());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onThermoMix());
      }
    }

    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_13___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_14___default.a.pdfMake.vfs;

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(userService, queryService, modalService, ApiService, modelContent, queryContent) {
        _classCallCheck(this, AppComponent);

        this.userService = userService;
        this.queryService = queryService;
        this.modalService = modalService;
        this.ApiService = ApiService;
        this.modelContent = modelContent;
        this.queryContent = queryContent;
        this.isValidFormSubmitted = false;
        this.user = new _domain_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.query = new _domain_query__WEBPACK_IMPORTED_MODULE_2__["Query"]();
        this.deadEnds = false;
        this.thermo = false;
        this.llf = false;
        this.ct = false;
        this.cim = false;
        this.deco = false;
        this.spa = false;
        this.faucet = false;
        this.hose = false;
        this.showForm = false;
        this.showMainContent = true;
        this.clickMessage = '';
        this.closeResult = '';
        this.display = 'none';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.extractBuildingQuestions = _assets_BuildingQuestions_json__WEBPACK_IMPORTED_MODULE_3__;
          this.extractDeviceQuestions = _assets_DeviceQuestions_json__WEBPACK_IMPORTED_MODULE_4__;
          this.extractAbout = _assets_About_json__WEBPACK_IMPORTED_MODULE_5__;
          this.featuresOutput = _assets_FeaturesOutput_json__WEBPACK_IMPORTED_MODULE_6__; // this.insertData(this.modelContent);
        } // prepareQueryInputData()
        // {
        //     this.queryContent.name == this.query.name;
        //     this.queryContent.email == this.query.email;
        //     this.queryContent.query == this.query.query;
        //     this.insertQuery(this.queryContent);
        // }

      }, {
        key: "prepareInputData",
        value: function prepareInputData() {
          console.log("this.user.buidingType", this.modelContent.question1);

          if (this.user.buidingType == 'buidingTypeYes') {
            this.modelContent.question1 = 'Yes';
          } else {
            this.modelContent.question1 = 'No';
          }

          if (this.user.retirementBuilding == 'retirementBuildingYes') {
            this.modelContent.question2 = 'Yes';
          } else {
            this.modelContent.question2 = 'No';
          }

          if (this.user.hotelBuilding == 'hotelBuildingYes') {
            this.modelContent.question3 = 'Yes';
          } else {
            this.modelContent.question3 = 'No';
          }

          if (this.user.basement == 'basementYes') {
            this.modelContent.question4 = 'Yes';
          } else {
            this.modelContent.question4 = 'No';
          }

          if (this.user.coolingTower == 'coolingTowerYes') {
            this.modelContent.question5 = 'Yes';
          } else {
            this.modelContent.question5 = 'No';
          }

          if (this.user.hotTub == 'hotTubYes') {
            this.modelContent.question6 = 'Yes';
          } else {
            this.modelContent.question6 = 'No';
          }

          if (this.user.decoFoun == 'decoFounYes') {
            this.modelContent.question7 = 'Yes';
          } else {
            this.modelContent.question7 = 'No';
          }

          if (this.user.humidifier == 'humidifierYes') {
            this.modelContent.question8 = 'Yes';
          } else {
            this.modelContent.question8 = 'No';
          }

          if (this.user.deadEnd == 'deadEndYes') {
            this.modelContent.question9 = 'Yes';
          } else {
            this.modelContent.question9 = 'No';
          }

          if (this.user.llf == 'llfYes') {
            this.modelContent.question10 = 'Yes';
          } else {
            this.modelContent.question10 = 'No';
          }

          if (this.user.ef == 'efYes') {
            this.modelContent.question11 = 'Yes';
          } else {
            this.modelContent.question11 = 'No';
          }

          if (this.user.sfh == 'sfhYes') {
            this.modelContent.question12 = 'Yes';
          } else {
            this.modelContent.question12 = 'No';
          }

          this.insertData(this.modelContent);
        }
      }, {
        key: "insertData",
        value: function insertData(modeldata) {
          var _this = this;

          if (modeldata.question1 !== undefined) {
            this.ApiService.insertDstData(modeldata).subscribe(function (response) {
              console.log('response first1:', response); //next() callback
              // console.log('response received for delete')

              _this.dstPostData = response;
              console.log('response received for delete2', _this.dstPostData);
            }, function (error) {
              console.error('Request failed with error');
            }, function () {
              console.error('Request completed'); //This is actually not needed 
            });
          } else {
            console.log("error");
          }
        }
      }, {
        key: "insertQuery",
        value: function insertQuery(modeldata) {
          var _this2 = this;

          if (modeldata.query !== undefined) {
            this.ApiService.insertQuery(modeldata).subscribe(function (response) {
              console.log('response first1:', response); //next() callback
              // console.log('response received for delete')

              _this2.dstPostData = response;
              _this2.submitMessage = "Your query has been sumitted successfully. We will get back to you with a reply as soon as possible"; //console.log('response received for delete2', this.dstPostData);
            }, function (error) {
              console.error('Request failed with error');
            }, function () {
              console.error('Request completed'); //This is actually not needed 
            });
          } else {
            console.log("error");
          }
        }
      }, {
        key: "onQueryFormSubmit",
        value: function onQueryFormSubmit(form) {
          this.query.name = form.controls['name'].value;
          this.query.email = form.controls['email'].value;
          this.query.query = form.controls['query'].value;
          console.log("NgForm", this.query);
          this.insertQuery(this.query); //this.prepareQueryInputData();
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit(form) {
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

          this.user = new _domain_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
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

          if (this.user.recLoop === 'recLoopYes') {
            this.user.recLoopTemp = form.controls['recLoopTemp'].value;
          }

          this.user.residualType = form.controls['residualType'].value;

          if (this.user.residualType === 'residualType2') {
            this.user.chloramineLevel = form.controls['chloramineLevel'].value;
          } else if (this.user.residualType === 'residualType3') {
            this.user.dioxideLevel = form.controls['dioxideLevel'].value;
          } else if (this.user.residualType === 'residualType1') {
            this.user.residualLevel = form.controls['residualLevel'].value;
          }

          if (this.user.tmv === 'tmvYes') {
            this.user.tmvCent = form.controls['tmvCent'].value;
          } // this.user.tot = form.controls['tot'].value;
          // this.user.buildingLevel = form.controls['buildingLevel'].value;
          // this.prepareInputData(); //uncomment to execute service
          //  this.user.buildingLevel = form.controls['buildingLevel'].value;
          //this.user.isDeadEnd = form.controls['deadEnds'].value;
          //this.userService.createUser(this.user);
          //this.onClickMe();
          // this.resetForm(form);


          var tempKeys = {
            1: 60,
            2: 55,
            3: 51,
            4: 49,
            5: 43,
            6: 42
          };
          var pou = tempKeys[this.user.pou[this.user.pou.length - 1]];
          var setpoint = tempKeys[this.user.setpoint[this.user.setpoint.length - 1]];
          var recLoopTemp = this.user.recLoop === 'recLoopYes' ? tempKeys[this.user.recLoopTemp[this.user.recLoopTemp.length - 1]] : -1;
          var MER = 0;

          if (this.user.recLoop === 'recLoopNo') {
            if (setpoint <= pou) {
              this.user.hotTemp = MER;
            } else {
              this.user.hotTemp = pou;
            }
          } else if (this.user.tmv === 'tmvNo') {
            this.user.hotTemp = Math.min(pou, recLoopTemp);
          } else if (this.user.recLoop === 'recLoopNo') {
            if (setpoint <= pou) {
              this.user.hotTemp = MER;
            } else {
              this.user.hotTemp = pou;
            }
          } else {
            this.user.hotTemp = setpoint !== -1 ? setpoint : recLoopTemp;

            if (recLoopTemp <= pou && recLoopTemp != -1) {
              this.user.hotTemp = recLoopTemp;
              this.user.hotTempType = 'recLoop';
            } else {
              this.user.hotTemp = pou;
              this.user.hotTempType = 'pou';
            }

            if (setpoint <= pou && setpoint <= recLoopTemp) {
              this.user.hotTemp = MER;
            }
          }
        }
      }, {
        key: "onDisinfectant",
        value: function onDisinfectant() {
          return this.user.residualType !== 'residualType4';
        }
      }, {
        key: "redirectToResources",
        value: function redirectToResources(event) {
          event.preventDefault();
          this.isShowResources = true;
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          this.user = new _domain_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
          this.isValidFormSubmitted = false;
          form.resetForm({});
        }
      }, {
        key: "showHome",
        value: function showHome() {
          this.isShowAbout = false;
          this.isShowResources = false;
          this.isTrainings = false;
          this.isQuestions = false;
          this.isHome = true;
        }
      }, {
        key: "showSurvey",
        value: function showSurvey() {
          this.isShowAbout = false;
          this.isShowResources = false;
          this.isTrainings = false;
          this.isQuestions = false;
          this.isHome = false;
        }
      }, {
        key: "ScrolltoAnswers",
        value: function ScrolltoAnswers() {
          window.scrollTo(405, 6633);
        }
      }, {
        key: "showAbout",
        value: function showAbout() {
          this.isShowAbout = true;
          this.isShowResources = false;
          this.isTrainings = false;
          this.isQuestions = false;
        }
      }, {
        key: "showResources",
        value: function showResources() {
          this.isShowAbout = false;
          this.isShowResources = true;
          this.isTrainings = false;
          this.isQuestions = false;
        }
      }, {
        key: "showTrainings",
        value: function showTrainings() {
          this.isShowAbout = false;
          this.isShowResources = false;
          this.isTrainings = true;
          this.isQuestions = false;
        }
      }, {
        key: "showQuestions",
        value: function showQuestions() {
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

      }, {
        key: "onBuilding",
        value: function onBuilding() {
          //console.log(this.showForm);
          if (this.user.buidingType === 'buidingTypeYes' || this.user.retirementBuilding === 'retirementBuildingYes' || this.user.hotelBuilding === 'hotelBuildingYes' || this.user.basement === 'basementYes') {
            return true;
          }
        }
      }, {
        key: "onCt",
        value: function onCt() {
          if (this.user.coolingTower === 'coolingTowerYes') {
            return true;
          }
        }
      }, {
        key: "onCtDont",
        value: function onCtDont() {
          if (this.user.coolingTower === 'coolingTowerDont') {
            return true;
          }
        }
      }, {
        key: "onHt",
        value: function onHt() {
          if (this.user.hotTub === 'hotTubYes') {
            return true;
          }
        }
      }, {
        key: "onDecoFoun",
        value: function onDecoFoun() {
          if (this.user.decoFoun === 'decoFounYes') {
            return true;
          }
        }
      }, {
        key: "onHumid",
        value: function onHumid() {
          if (this.user.humidifier === 'humidifierYes') {
            return true;
          }
        }
      }, {
        key: "onLowFixtures",
        value: function onLowFixtures() {
          if (this.user.llf === 'llfYes') {
            return true;
          }
        }
      }, {
        key: "onDe",
        value: function onDe() {
          if (this.user.deadEnd === 'deadEndYes') {
            return true;
          }
        }
      }, {
        key: "onThermoMix",
        value: function onThermoMix() {
          if (this.user.tmv === 'tmvYes') {
            return true;
          }
        }
      }, {
        key: "radioChangedYes",
        value: function radioChangedYes(event) {
          this.tmv = event.target.value;
        }
      }, {
        key: "radioChangedNo",
        value: function radioChangedNo(event) {
          this.tmv = event.target.value;
        }
      }, {
        key: "radioChangedMaybe",
        value: function radioChangedMaybe(event) {
          this.tmv = event.target.value;
        }
      }, {
        key: "recLoopYes",
        value: function recLoopYes(event) {
          this.recLoop = event.target.value;
        }
      }, {
        key: "recLoopNo",
        value: function recLoopNo(event) {
          this.recLoop = event.target.value;
        }
      }, {
        key: "residualType1",
        value: function residualType1(event) {
          this.residualType = event.target.value;
        }
      }, {
        key: "residualType2",
        value: function residualType2(event) {
          this.residualType = event.target.value;
        }
      }, {
        key: "residualType3",
        value: function residualType3(event) {
          this.residualType = event.target.value;
        }
      }, {
        key: "residualType4",
        value: function residualType4(event) {
          this.residualType = event.target.value;
        }
      }, {
        key: "onrecLoopTemp7",
        value: function onrecLoopTemp7() {
          if (this.user.recLoopTemp === 'recLoopTemp7') {
            return true;
          }
        }
      }, {
        key: "onpou1",
        value: function onpou1() {
          if (this.user.pou === 'pou1') {
            return true;
          }
        }
      }, {
        key: "onpou2",
        value: function onpou2() {
          if (this.user.pou === 'pou2') {
            return true;
          }
        }
      }, {
        key: "onpou3",
        value: function onpou3() {
          if (this.user.pou === 'pou3') {
            return true;
          }
        }
      }, {
        key: "onpou4",
        value: function onpou4() {
          if (this.user.pou === 'pou4') {
            return true;
          }
        }
      }, {
        key: "onpou5",
        value: function onpou5() {
          if (this.user.pou === 'pou5') {
            return true;
          }
        }
      }, {
        key: "onpou6",
        value: function onpou6() {
          if (this.user.pou === 'pou6') {
            return true;
          }
        }
      }, {
        key: "onpou7",
        value: function onpou7() {
          if (this.user.pou === 'pou7') {
            return true;
          }
        }
      }, {
        key: "onsetpoint1",
        value: function onsetpoint1() {
          if (this.user.setpoint === 'setpoint1') {
            return true;
          }
        }
      }, {
        key: "onsetpoint2",
        value: function onsetpoint2() {
          if (this.user.setpoint === 'setpoint2') {
            return true;
          }
        }
      }, {
        key: "onsetpoint3",
        value: function onsetpoint3() {
          if (this.user.setpoint === 'setpoint3') {
            return true;
          }
        }
      }, {
        key: "onsetpoint4",
        value: function onsetpoint4() {
          if (this.user.setpoint === 'setpoint4') {
            return true;
          }
        }
      }, {
        key: "onsetpoint5",
        value: function onsetpoint5() {
          if (this.user.setpoint === 'setpoint5') {
            return true;
          }
        }
      }, {
        key: "onsetpoint6",
        value: function onsetpoint6() {
          if (this.user.setpoint === 'setpoint6') {
            return true;
          }
        }
      }, {
        key: "onsetpoint7",
        value: function onsetpoint7() {
          if (this.user.setpoint === 'setpoint6') {
            return true;
          }
        }
      }, {
        key: "ShowHideDiv",
        value: function ShowHideDiv() {
          if (this.tmv === 'tmvYes') {
            return true;
          } else if (this.tmv === 'tmvNo') {
            return false;
          }
        }
      }, {
        key: "ShowHideRecLooptemp",
        value: function ShowHideRecLooptemp() {
          if (this.recLoop === 'recLoopYes') {
            return true;
          } else if (this.recLoop === 'recLoopNo') {
            return false;
          }
        }
      }, {
        key: "showHide",
        value: function showHide() {
          if (this.recLoop === 'recLoopNo' && this.tmv === 'tmvYes') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "showHideChlorine",
        value: function showHideChlorine() {
          if (this.residualType === 'residualType1') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "showHideChloramine",
        value: function showHideChloramine() {
          if (this.residualType === 'residualType2') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "showHideDioxide",
        value: function showHideDioxide() {
          if (this.residualType === 'residualType3') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "onFirstFourYes",
        value: function onFirstFourYes() {
          return this.user.buidingType === 'buidingTypeYes' || this.user.retirementBuilding === 'retirementBuildingYes' || this.user.hotelBuilding === 'hotelBuildingYes' || this.user.basement === 'basementYes';
        }
      }, {
        key: "onSecondFourYes",
        value: function onSecondFourYes() {
          return this.user.coolingTower === 'coolingTowerYes' || this.user.hotTub === 'hotTubYes' || this.user.decoFoun === 'decoFounYes' || this.user.humidifier === 'humidierYes';
        }
      }, {
        key: "resetOutput",
        value: function resetOutput() {
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
      }, {
        key: "onMicrobialRiskNoTMV",
        value: function onMicrobialRiskNoTMV() {
          console.log(this.user.hotTemp, this.user.hotTempType);
          return this.user.tmv === 'tmvNo';
        }
      }, {
        key: "onMicrobialRiskIndTMV",
        value: function onMicrobialRiskIndTMV() {
          return this.user.tmvCent === 'tmvCent1';
        }
      }, {
        key: "onMicrobialRiskCentTMV",
        value: function onMicrobialRiskCentTMV() {
          return this.user.tmvCent === 'tmvCent2';
        }
      }, {
        key: "onRecircNoTemp",
        value: function onRecircNoTemp() {
          return this.user.recLoop !== 'recLoopNo' && this.user.recLoopTemp === 'n/a';
        }
      }, {
        key: "onSetpointAsHot",
        value: function onSetpointAsHot() {
          return this.user.hotTempType === 'setpoint';
        }
      }, {
        key: "onSetpointOverRecirc",
        value: function onSetpointOverRecirc() {
          return this.user.recLoopTemp !== 'n/a' && this.user.hotTempType === 'setpoint';
        }
      }, {
        key: "onRecircTemp",
        value: function onRecircTemp() {
          return this.user.recLoopTemp !== 'n/a';
        }
      }, {
        key: "onNoRecircTemp",
        value: function onNoRecircTemp() {
          return this.user.recLoopTemp === 'n/a';
        }
      }, {
        key: "onHotTemp6",
        value: function onHotTemp6() {
          return this.user.hotTemp === 60;
        }
      }, {
        key: "onHotTemp5",
        value: function onHotTemp5() {
          return this.user.hotTemp === 55;
        }
      }, {
        key: "onHotTemp4",
        value: function onHotTemp4() {
          return this.user.hotTemp === 51;
        }
      }, {
        key: "onHotTemp3",
        value: function onHotTemp3() {
          return this.user.hotTemp === 49;
        }
      }, {
        key: "onHotTemp2",
        value: function onHotTemp2() {
          return this.user.hotTemp === 43;
        }
      }, {
        key: "onHotTemp1",
        value: function onHotTemp1() {
          return this.user.hotTemp === 42;
        }
      }, {
        key: "onHotTemp0",
        value: function onHotTemp0() {
          return this.user.hotTemp === 0;
        }
      }, {
        key: "onLowTime",
        value: function onLowTime() {
          return this.user.timeToTap !== '60';
        }
      }, {
        key: "onHighTime",
        value: function onHighTime() {
          return this.user.timeToTap === '60';
        }
      }, {
        key: "onLowSetPoint",
        value: function onLowSetPoint() {
          return this.user.setpoint !== 'setpoint1';
        }
      }, {
        key: "onHighSetPoint",
        value: function onHighSetPoint() {
          return this.user.setpoint === 'setpoint1';
        }
      }, {
        key: "onLowTimeHighSetPoint",
        value: function onLowTimeHighSetPoint() {
          return this.onLowTime() && this.onHighSetPoint();
        }
      }, {
        key: "onLowTimeLowSetPoint",
        value: function onLowTimeLowSetPoint() {
          return this.onLowTime() && this.onLowSetPoint();
        }
      }, {
        key: "onHighTimeHighSetPoint",
        value: function onHighTimeHighSetPoint() {
          return this.onHighTime() && this.onHighSetPoint();
        }
      }, {
        key: "onHighTimeLowSetPoint",
        value: function onHighTimeLowSetPoint() {
          return this.onHighTime() && this.onLowSetPoint();
        }
      }, {
        key: "onFullScaldCompliance",
        value: function onFullScaldCompliance() {
          if (this.user.pou === 'pou6') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "onLowerScaldCompliance",
        value: function onLowerScaldCompliance() {
          if (this.user.pou === 'pou5') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "onLowerMidScaldCompliance",
        value: function onLowerMidScaldCompliance() {
          if (this.user.pou === 'pou4') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "onMidScaldCompliance",
        value: function onMidScaldCompliance() {
          if (this.user.pou === 'pou3') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "onUpperScaldCompliance",
        value: function onUpperScaldCompliance() {
          if (this.user.pou === 'pou2') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "onNoScaldCompliance",
        value: function onNoScaldCompliance() {
          if (this.user.pou === 'pou1') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "noTmvFullGuidance",
        value: function noTmvFullGuidance() {
          if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou6') {
            return true;
          }

          return false;
        }
      }, {
        key: "noTmvLowerGuidance",
        value: function noTmvLowerGuidance() {
          if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou5') {
            return true;
          }

          return false;
        }
      }, {
        key: "noTmvLowerMidGuidance",
        value: function noTmvLowerMidGuidance() {
          if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou4') {
            return true;
          }

          return false;
        }
      }, {
        key: "noTmvMidGuidance",
        value: function noTmvMidGuidance() {
          if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou3') {
            return true;
          }

          return false;
        }
      }, {
        key: "noTmvUpperGuidance",
        value: function noTmvUpperGuidance() {
          if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou2') {
            return true;
          }

          return false;
        }
      }, {
        key: "noTmvNoGuidance",
        value: function noTmvNoGuidance() {
          if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou1') {
            return true;
          }

          return false;
        }
      }, {
        key: "centTmvFullGuidance",
        value: function centTmvFullGuidance() {
          if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou6') {
            return true;
          }

          return false;
        }
      }, {
        key: "centTmvLowerGuidance",
        value: function centTmvLowerGuidance() {
          if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou5') {
            return true;
          }

          return false;
        }
      }, {
        key: "centTmvLowerMidGuidance",
        value: function centTmvLowerMidGuidance() {
          if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou4') {
            return true;
          }

          return false;
        }
      }, {
        key: "centTmvMidGuidance",
        value: function centTmvMidGuidance() {
          if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou3') {
            return true;
          }

          return false;
        }
      }, {
        key: "centTmvUpperGuidance",
        value: function centTmvUpperGuidance() {
          if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou2') {
            return true;
          }

          return false;
        }
      }, {
        key: "centTmvNoGuidance",
        value: function centTmvNoGuidance() {
          if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou1') {
            return true;
          }

          return false;
        }
      }, {
        key: "indTmvFullGuidance",
        value: function indTmvFullGuidance() {
          if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou6') {
            return true;
          }

          return false;
        }
      }, {
        key: "indTmvLowerGuidance",
        value: function indTmvLowerGuidance() {
          if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou5') {
            return true;
          }

          return false;
        }
      }, {
        key: "indTmvLowerMidGuidance",
        value: function indTmvLowerMidGuidance() {
          if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou4') {
            return true;
          }

          return false;
        }
      }, {
        key: "indTmvMidGuidance",
        value: function indTmvMidGuidance() {
          if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou3') {
            return true;
          }

          return false;
        }
      }, {
        key: "indTmvUpperGuidance",
        value: function indTmvUpperGuidance() {
          if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou2') {
            return true;
          }

          return false;
        }
      }, {
        key: "indTmvNoGuidance",
        value: function indTmvNoGuidance() {
          if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou1') {
            return true;
          }

          return false;
        }
      }, {
        key: "onQ1ToQ4",
        value: function onQ1ToQ4() {
          return this.user.buidingType === 'buidingTypeYes' || this.user.retirementBuilding === 'retirementBuildingYes' || this.user.hotelBuilding === 'hotelBuildingYes' || this.user.basement === 'basementYes';
        }
      }, {
        key: "onQ5",
        value: function onQ5() {
          return this.user.coolingTower === 'coolingTowerYes';
        }
      }, {
        key: "onQ6",
        value: function onQ6() {
          return this.user.hotTub === 'hotTubYes';
        }
      }, {
        key: "onQ7",
        value: function onQ7() {
          return this.user.decoFoun === 'decoFounYes';
        }
      }, {
        key: "onQ8",
        value: function onQ8() {
          return this.user.humidifier === 'humidifierYes';
        }
      }, {
        key: "onQ5ToQ8",
        value: function onQ5ToQ8() {
          return this.onQ5() || this.onQ6() || this.onQ7() || this.onQ8();
        }
      }, {
        key: "onQ9",
        value: function onQ9() {
          return this.user.deadEnd === 'deadEndYes';
        }
      }, {
        key: "onQ10",
        value: function onQ10() {
          return this.user.llf === 'llfYes';
        }
      }, {
        key: "onQ11",
        value: function onQ11() {
          return this.user.ef === 'efYes';
        }
      }, {
        key: "onQ12",
        value: function onQ12() {
          return this.user.sfh === 'sfhYes';
        }
      }, {
        key: "onTempDecisionTree",
        value: function onTempDecisionTree() {
          this.resetOutput(); // point of use > 50

          if (this.user.tmv === 'tmvNo' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output1 = true;
          } else if (this.user.tmv === 'tmvNo' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output2 = true;
          } else if (this.user.tmv === 'tmvNo' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output3 = true;
          } else if (this.user.tmv === 'tmvNo' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output4 = true;
          } else if (this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output5 = true;
          } else if (this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output6 = true;
          } else if (this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output7 = true;
          } else if (this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output8 = true;
          } else if (this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output9 = true;
          } else if (this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output10 = true;
          } else if (this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output11 = true;
          } else if (this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou1' || this.user.pou === 'pou2') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output12 = true;
          } // point of use 49 - 50


          if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou3' && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output13 = true;
          } else if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou3' && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output14 = true;
          } else if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou3' && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output15 = true;
          } else if (this.user.tmv === 'tmvNo' && this.user.pou === 'pou3' && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output16 = true;
          } else if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou3' && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output17 = true;
          } else if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou3' && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output18 = true;
          } else if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou3' && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output19 = true;
          } else if (this.user.tmvCent === 'tmvCent2' && this.user.pou === 'pou3' && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output20 = true;
          } else if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou3' && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output21 = true;
          } else if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou3' && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output22 = true;
          } else if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou3' && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output23 = true;
          } else if (this.user.tmvCent === 'tmvCent1' && this.user.pou === 'pou3' && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output24 = true;
          } // point of use < 49


          if (this.user.tmv === 'tmvNo' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output25 = true;
          } else if (this.user.tmv === 'tmvNo' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output26 = true;
          } else if (this.user.tmv === 'tmvNo' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output27 = true;
          } else if (this.user.tmv === 'tmvNo' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output28 = true;
          } else if (this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output29 = true;
          } else if (this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output30 = true;
          } else if (this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output31 = true;
          } else if (this.user.tmvCent === 'tmvCent2' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output32 = true;
          } else if (this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output33 = true;
          } else if (this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput !== 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output34 = true;
          } else if (this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint === 'setpoint1') {
            this.output35 = true;
          } else if (this.user.tmvCent === 'tmvCent1' && (this.user.pou === 'pou4' || this.user.pou === 'pou5') && this.user.timeToTapInput === 'timeToTapInputa' && this.user.setpoint !== 'setpoint1') {
            this.output36 = true;
          }

          return true;
        }
      }, {
        key: "onOutput1",
        value: function onOutput1() {
          if (this.output1 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput2",
        value: function onOutput2() {
          if (this.output2 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput3",
        value: function onOutput3() {
          if (this.output3 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput4",
        value: function onOutput4() {
          if (this.output4 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput5",
        value: function onOutput5() {
          if (this.output5 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput6",
        value: function onOutput6() {
          if (this.output6 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput7",
        value: function onOutput7() {
          if (this.output7 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput8",
        value: function onOutput8() {
          if (this.output8 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput9",
        value: function onOutput9() {
          if (this.output9 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput10",
        value: function onOutput10() {
          if (this.output10 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput11",
        value: function onOutput11() {
          if (this.output11 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput12",
        value: function onOutput12() {
          if (this.output12 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput13",
        value: function onOutput13() {
          if (this.output13 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput14",
        value: function onOutput14() {
          if (this.output14 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput15",
        value: function onOutput15() {
          if (this.output15 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput16",
        value: function onOutput16() {
          if (this.output16 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput17",
        value: function onOutput17() {
          if (this.output17 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput18",
        value: function onOutput18() {
          if (this.output18 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput19",
        value: function onOutput19() {
          if (this.output19 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput20",
        value: function onOutput20() {
          if (this.output20 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput21",
        value: function onOutput21() {
          if (this.output21 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput22",
        value: function onOutput22() {
          if (this.output22 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput23",
        value: function onOutput23() {
          if (this.output23 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput24",
        value: function onOutput24() {
          if (this.output24 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput25",
        value: function onOutput25() {
          if (this.output25 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput26",
        value: function onOutput26() {
          if (this.output26 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput27",
        value: function onOutput27() {
          if (this.output27 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput28",
        value: function onOutput28() {
          if (this.output28 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput29",
        value: function onOutput29() {
          if (this.output29 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput30",
        value: function onOutput30() {
          if (this.output30 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput31",
        value: function onOutput31() {
          if (this.output31 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput32",
        value: function onOutput32() {
          if (this.output32 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput33",
        value: function onOutput33() {
          if (this.output33 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput34",
        value: function onOutput34() {
          if (this.output34 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput35",
        value: function onOutput35() {
          if (this.output35 === true) {
            return true;
          }
        }
      }, {
        key: "onOutput36",
        value: function onOutput36() {
          if (this.output36 === true) {
            return true;
          }
        }
      }, {
        key: "onEf",
        value: function onEf() {
          if (this.user.ef === 'efYes') {
            return true;
          }
        }
      }, {
        key: "onSfh",
        value: function onSfh() {
          if (this.user.sfh === 'sfhYes') {
            return true;
          }
        }
      }, {
        key: "ctinfo",
        value: function ctinfo(e) {
          //console.log(e.target.onClickMe);
          this.ct = e.target.onClickMe;
        }
      }, {
        key: "onDeadEnds",
        value: function onDeadEnds(e) {
          this.deadEnds = e.target.checked;
        }
      }, {
        key: "onThermo",
        value: function onThermo(e) {
          this.thermo = e.target.checked;
        }
      }, {
        key: "onLlf",
        value: function onLlf(e) {
          this.llf = e.target.checked;
        }
      }, {
        key: "onCim",
        value: function onCim(e) {
          this.cim = e.target.checked;
        }
      }, {
        key: "onDeco",
        value: function onDeco(e) {
          this.deco = e.target.checked;
        }
      }, {
        key: "onSpa",
        value: function onSpa(e) {
          this.spa = e.target.checked;
        }
      }, {
        key: "onFaucet",
        value: function onFaucet(e) {
          this.faucet = e.target.checked;
        }
      }, {
        key: "onHose",
        value: function onHose(e) {
          this.hose = e.target.checked;
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

      }, {
        key: "downloadPDF",
        value: function downloadPDF() {
          var DATA = this.outputDiv.nativeElement; //let DATA = document.getElementById('MyDIv');

          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["default"]('p', 'pt', 'a4');
          var handleElement = {
            '#editor': function editor(element, renderer) {
              return true;
            }
          }; //	doc.fromHTML(DATA.innerHTML,15,15,{
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
      }, {
        key: "generatePDF",
        value: function generatePDF() {
          //var data = document.getElementById('output');
          var data = this.outputDiv.nativeElement;
          html2canvas__WEBPACK_IMPORTED_MODULE_11___default()(data).then(function (canvas) {
            var imgWidth = 208;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_10__["default"]('p', 'mm', 'a4');
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('newPDF.pdf');
          });
        }
      }, {
        key: "downloadAsPDF",
        value: function downloadAsPDF() {
          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_10__["default"](); //get table html

          var pdfTable = this.outputDiv.nativeElement; //html to pdf format

          var html = html_to_pdfmake__WEBPACK_IMPORTED_MODULE_15___default()(pdfTable.innerHTML);
          var documentDefinition = {
            content: html
          };
          pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_13___default.a.createPdf(documentDefinition).open();
        }
      }, {
        key: "captureScreen",
        value: function captureScreen() {
          var data = this.outputDiv.nativeElement;
          html2canvas__WEBPACK_IMPORTED_MODULE_11___default()(data).then(function (canvas) {
            // Few necessary setting options
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_10__["default"]('p', 'pt', 'a4'); // A4 size page of PDF

            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
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

      }, {
        key: "ShowHideButton",
        value: function ShowHideButton() {
          this.showMainContent = this.showMainContent ? false : true;
        }
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

      }, {
        key: "MinPOU",
        value: function MinPOU() {
          var POU = 0;

          if (this.user.pou === 'pou1') {
            POU = 1;
          } else if (this.user.pou === 'pou2') {
            POU = 2;
          } else if (this.user.pou === 'pou3') {
            POU = 3;
          } else if (this.user.pou === 'pou4') {
            POU = 4;
          } else if (this.user.pou === 'pou5') {
            POU = 5;
          } else if (this.user.pou === 'pou6') {
            POU = 6;
          }

          return POU;
        }
      }, {
        key: "MinSetpoint",
        value: function MinSetpoint() {
          var Setpoint = 0;

          if (this.user.setpoint === 'setpoint1') {
            Setpoint = 1;
          } else if (this.user.setpoint === 'setpoint2') {
            Setpoint = 2;
          } else if (this.user.setpoint === 'setpoint3') {
            Setpoint = 3;
          } else if (this.user.setpoint === 'setpoint4') {
            Setpoint = 4;
          } else if (this.user.setpoint === 'setpoint5') {
            Setpoint = 5;
          } else if (this.user.setpoint === 'setpoint6') {
            Setpoint = 6;
          }

          return Setpoint;
        }
      }, {
        key: "MinRecLoop",
        value: function MinRecLoop() {
          var RecLoop = 0;

          if (this.user.setpoint === 'recLoopTemp1') {
            RecLoop = 1;
          } else if (this.user.setpoint === 'recLoopTemp2') {
            RecLoop = 2;
          } else if (this.user.setpoint === 'recLoopTemp3') {
            RecLoop = 3;
          } else if (this.user.setpoint === 'recLoopTemp4') {
            RecLoop = 4;
          } else if (this.user.setpoint === 'recLoopTemp5') {
            RecLoop = 5;
          } else if (this.user.setpoint === 'recLoopTemp6') {
            RecLoop = 6;
          }

          return RecLoop;
        } //results: string;

      }, {
        key: "onTimeToTap",
        value: function onTimeToTap() {
          if (this.user.timeToTapInput === '60') {
            // this.results = 'Based on your input, your time to temperature is unacceptable based on available guidance documents. Please find a summary of guidance documents below:';
            this.results = 'Your input of \'> 60 seconds\' for time to tap is unacceptable based on all three guidance documents considered here. Please find a summary of guidance documents below:';
          } else if (this.user.timeToTapInput === '31 - 60') {
            // this.results = 'Based on your input, your time to temperature is acceptable based on most of the guidance documents except ASPE, 2003. Please find a summary of guidance documents below:';
            this.results = 'Your input of \'31 - 60 seconds\' for time to tap is acceptable based on two of three guidance documents (NASEM, 2019, European Guidelines Working Group, 2017) out of the three guidance documents considered here. Please find a summary of guidance documents below:';
          } else if (this.user.timeToTapInput === '11 - 30') {
            // this.results = 'Based on your input, your time to temperature is acceptable based on available guidance documents. Please find a summary of guidance documents below:';    
            this.results = 'Your input of \'11 - 30 seconds\' for time to tap is acceptable based on all three guidance documents considered here. Please find a summary of guidance documents below:';
          } else if (this.user.timeToTapInput === '1 - 10') {
            // this.results = 'Based on your input, your time to temperature is acceptable based on available guidance documents. Please find a summary of guidance documents below:';    
            this.results = 'Your input of \'1 - 10 seconds\' for time to tap is acceptable based on all three guidance documents considered here. Please find a summary of guidance documents below:';
          } else if (this.user.timeToTapInput === 'timeToTapInpute') {
            this.results = 'Please find a summary of guidance documents below:';
          }

          return true;
        }
      }, {
        key: "onKey",
        value: function onKey(event) {
          this.value = event.target.value;

          if (this.value >= 60) {
            this.results = 'Based on your input, your time to temperature is unacceptable based on available guidance documents. Please find a summary of guidance documents below:';
          } else if (this.value >= 30) {
            this.results = 'Based on your input, your time to temperature is acceptable based on most of the guidance documents except ASPE, 2003. Please find a summary of guidance documents below:';
          } else if (this.value < 30) {
            this.results = 'Based on your input, your time to temperature is acceptable based on available guidance documents. Please find a summary of guidance documents below:';
          }
        }
      }, {
        key: "onSetpoint",
        value: function onSetpoint() {
          if (this.user.setpoint === 'setpoint1') {
            this.setpointResults = 'Based on your input, your hot water temperature at POU is acceptable based on available guidance documents. Please find a summary of guidance documents below:';
          } else if (this.user.setpoint === 'setpoint2') {
            this.setpointResults = 'Based on your input, your hot water temperature at POU is unacceptable based on most of the available guidance documents. Please find a summary of guidance documents below:';
          } else if (this.user.setpoint === 'setpoint3') {
            this.setpointResults = 'Based on your input, your hot water temperature at POU is acceptable based on only IPC, 2015. Please find a summary of guidance documents below:';
          } else if (this.user.setpoint === 'setpoint4') {
            this.setpointResults = 'Based on your input, your hot water temperature at POU is acceptable based on only IPC, 2015. Please find a summary of guidance documents below:';
          } else if (this.user.setpoint === 'setpoint5') {
            this.setpointResults = 'Based on your input, your hot water temperature at POU is acceptable based on only IPC, 2015. Please find a summary of guidance documents below:';
          }

          return true;
        }
      }, {
        key: "onResidualLevel",
        value: function onResidualLevel() {
          if (this.user.residualLevel === 'residualLevel1') {
            this.residualResults = 'Your input of \'< 0.2 mg/L\' for measured chlorine disinfectant residual level is below levels recommended by all the 5 guidance documents considered here (WHO, 2007; European Guidelines Working Group, 2017; U.S. EPA, 1985; CDC, 2003; NASEM, 2019). Periodic flushing allows fresh residual to be brought into the pipes. Please find a summary of guidance documents for appropriate chlorine residual level in the plumbing system below: ';
            return true;
          } else if (this.user.residualLevel === 'residualLevel2') {
            this.residualResults = 'Your input of \'0.2 – 0.5 mg/L\' for measured chlorine disinfectant residual level is acceptable based on 3 of the 5 guidance documents considered here (WHO, 2007; European Guidelines Working Group, 2017; NASEM, 2019).Two guidance documents, one from the US EPA (U.S. EPA, 1985) and one from the CDC (CDC, 2003) recommend higher levels to control microbial growth. Please find a summary of guidance documents for appropriate chlorine residual level in the plumbing system below:';
            return true;
          } else if (this.user.residualLevel === 'residualLevel3') {
            this.residualResults = 'Your input of \'0.6 – 0.9 mg/L\' for measured chlorine disinfectant residual level is acceptable based on 2 of the 5 guidance documents considered here (NASEM, 2019; European Guidelines Working Group, 2017). Two guidance documents, one from the US EPA (U.S. EPA, 1985) and one from the CDC (CDC, 2003) recommend higher levels to control microbial growth. One guidance document from the WHO (WHO, 2007) recommends lower levels. Please find a summary of guidance documents for appropriate chlorine residual level in the plumbing system below:';
            return true;
          } else if (this.user.residualLevel === 'residualLevel4') {
            this.residualResults = 'Your input of \'1.0 – 2.0 mg/L\' for measured chlorine disinfectant residual level is acceptable based on 4 of the 5 guidance documents considered here (CDC, 2003; European Guidelines Working Group, 2017; U.S. EPA, 1985; NASEM, 2019). One guidance document from the WHO (WHO, 2007) recommends lower levels, 0.2-0.5 mg/L. Please find a summary of guidance documents for appropriate chlorine residual level in the plumbing system below:';
            return true;
          } else if (this.user.residualLevel === 'residualLevel5') {
            this.residualResults = 'Your input of \'> 2.0 mg/L\' for measured chlorine disinfectant residual level is acceptable based on 1 of the 5 guidance documents considered here (NASEM, 2019). Your residual level exceeds values that are recommended by 4 of 5 of the guidance documents considered here. While high residual concentration may protect your system from microbial growth, the higher residual concentration will increase the risk of corrosion in plumbing systems and produce more harmful disinfection byproducts. Unless you add disinfectant in your building, this is caused by high levels of disinfectant from your water supplier. You may contact your water supplier on this issue. Please find a summary of guidance documents for appropriate chlorine residual level in the plumbing system below:';
            return true;
          } else if (this.user.residualLevel === 'residualLevel6') {
            this.residualResults = 'US guidelines recommend a higher level of chlorine residual such as 1-2 mg/L. However, maintaining higher residual concentration also increases the chances of corrosion in plumbing systems and produces more DBPs (CDC, 2003; U.S. EPA, 1985). As per EPA, the maximum allowed level of chlorine level is 4 mg/L (US EPA, 2015). European guidelines recommend that the concentration of residual free chlorine should be between 0.2-1 mg/L in the plumbing systems to protect from Legionella colonization and to reduce the likelihood of corrosion (European Guidelines Working Group, 2017). Please find a summary of guidance documents for appropriate chlorine residual level in the plumbing system below:';
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "onChloramineLevel",
        value: function onChloramineLevel() {
          if (this.user.chloramineLevel === 'chloramineLevel1') {
            this.chloramineLevelResults = 'Your input of \'< 0.5 mg/L\' for measured chloramine disinfectant residual level is below levels recommended by all the 3 guidance documents considered here (Department of Veterans Affairs, 2014; European Guidelines Working Group, 2017; NASEM, 2019). Periodic flushing allows fresh residual to be brought into the pipes. Please find a summary of guidance documents for appropriate chloramine residual level in the plumbing system below: ';
            return true;
          } else if (this.user.chloramineLevel === 'chloramineLevel2') {
            this.chloramineLevelResults = 'Your input of \'0.5 – 2.0 mg/L\' for measured chloramine disinfectant residual level is acceptable based on all the guidance documents considered here (Department of Veterans Affairs, 2014; European Guidelines Working Group, 2017; NASEM, 2019). Please find a summary of guidance documents for appropriate chloramine residual level in the plumbing system below: ';
            return true;
          } else if (this.user.chloramineLevel === 'chloramineLevel3') {
            this.chloramineLevelResults = 'Your input of \'> 2.0 – ≤ 4.0 mg/L\' for measured chloramine disinfectant residual level is acceptable based on 1 of the 3 guidance documents considered here (NASEM, 2019). Two guidance documents, one from the Department of Veterans Affairs (Department of Veterans Affairs, 2014) and one from the European Guidelines Working Group (European Guidelines Working Group, 2017) recommend lower levels to control microbial growth. Also, as per the European Guidelines Working Group, the maximum allowed level of chloramine level is 3 mg/L (European Guidelines Working Group, 2017). Please find a summary of guidance documents for appropriate chloramine residual level in the plumbing system below:';
            return true;
          } else if (this.user.chloramineLevel === 'chloramineLevel4') {
            this.chloramineLevelResults = 'Your input of \'> 4.0 mg/L\' for measured chloramine disinfectant residual level is unacceptable based on all the guidance documents considered here (Department of Veterans Affairs, 2014; European Guidelines Working Group, 2017; NASEM, 2019). While high residual concentration may protect your system from microbial growth, the higher residual concentration will increase the risk of corrosion in plumbing systems. Unless you add disinfectant in your building, this is caused by high levels of disinfectant from your water supplier. You may contact your water supplier on this issue. Please find a summary of guidance documents for appropriate chloramine residual level in the plumbing system below: ';
            return true;
          } else if (this.user.chloramineLevel === 'chloramineLevel5') {
            this.chloramineLevelResults = 'US guidelines recommend a higher level of chloramine disinfectant residual such as ≥ 0.5 mg/L and ≤ 4.0 mg/L (NASEM, 2019). However, maintaining higher chloramine residual concentration also increases the chances of corrosion in plumbing systems (European Guidelines Working Group, 2017). European guidelines recommend that the concentration of residual chloramine should be between 0.5-2 mg/L in the plumbing systems to protect from Legionella colonization and to reduce the likelihood of corrosion (European Guidelines Working Group, 2017). Also, the maximum allowed level of chloramine level is 3 mg/L (European Guidelines Working Group, 2017). Please find a summary of guidance documents for appropriate chloramine residual level in the plumbing system below: ';
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "onDioxideLevel",
        value: function onDioxideLevel() {
          if (this.user.dioxideLevel === 'dioxideLevel1') {
            this.dioxideLevelResults = 'Your input of \'< 0.2 mg/L\' for measured chlorine dioxide disinfectant residual is acceptable based on 1 of the 3 guidance documents considered here (European Guidelines Working Group, 2017). Two guidance documents, one from the Department of Veterans Affairs (Department of Veterans Affairs, 2014) and one from the NASEM (NASEM, 2019) recommend higher levels to control microbial growth. Periodic flushing allows fresh residual to be brought into the pipes. Please find a summary of guidance documents for appropriate chlorine dioxide residual level in the plumbing system below: ';
            return true;
          } else if (this.user.dioxideLevel === 'dioxideLevel2') {
            this.dioxideLevelResults = 'Your input of \'0.2 – 0.5 mg/L\' for measured chlorine dioxide disinfectant residual level is acceptable based on all the guidance documents considered here (Department of Veterans Affairs, 2014; European Guidelines Working Group, 2017; NASEM, 2019). Please find a summary of guidance documents for appropriate chlorine dioxide residual level in the plumbing system below: ';
            return true;
          } else if (this.user.dioxideLevel === 'dioxideLevel3') {
            this.dioxideLevelResults = 'Your input of \'> 0.5 – ≤ 0.8 mg/L\' for measured chlorine dioxide disinfectant residual level is acceptable based on 2 of the 3 guidance documents considered here (NASEM, 2019; Department of Veterans Affairs, 2014). One guidance documents from the European Guidelines Working Group (European Guidelines Working Group, 2017) recommend lower levels to control microbial growth and to reduce the formation of chlorite and chlorate by-products. Also, as per the EPA, the maximum allowed level of chlorine dioxide disinfectant residual level is 0.8 mg/L (NASEM, 2019). Please find a summary of guidance documents for appropriate chlorine dioxide residual level in the plumbing system below: ';
            return true;
          } else if (this.user.dioxideLevel === 'dioxideLevel4') {
            this.dioxideLevelResults = 'Your input of \'> 0.8 mg/L\' for measured chlorine dioxide disinfectant residual level is unacceptable based on all the guidance documents considered here (Department of Veterans Affairs, 2014; European Guidelines Working Group, 2017; NASEM, 2019). While high residual concentration may protect your system from microbial growth, the higher residual concentration will increase the risk of harmful byproducts formation such as chlorite and chlorate and odors in plumbing systems. Unless you add disinfectant in your building, this is caused by high levels of disinfectant from your water supplier. You may contact your water supplier on this issue. Please find a summary of guidance documents for appropriate chlorine dioxide residual level in the plumbing system below: ';
            return true;
          } else if (this.user.dioxideLevel === 'dioxideLevel5') {
            this.dioxideLevelResults = 'US guidelines recommend a higher level of chlorine dioxide disinfectant residual such as between ≥ 0.2 mg/L and ≤ 0.8 mg/L (NASEM, 2019; Department of Veterans Affairs, 2014). However, maintaining higher chlorine dioxide residual concentration also increases the chances of harmful byproducts such as chlorite and chlorate and odors (NASEM, 2019; European Guidelines Working Group, 2017). European guidelines recommend that the concentration of residual chlorine dioxide should be less than 0.5 mg/L in the plumbing systems to protect from microbial colonization and to reduce the likelihood of by-product formation (European Guidelines Working Group, 2017). Also, as per the EPA, the maximum allowed level of chlorine dioxide disinfectant residual level is 0.8 mg/L (NASEM, 2019). Please find a summary of guidance documents for appropriate chlorine dioxide residual level in the plumbing system below: ';
            return true;
          } else {
            return false;
          }
        } //constructor(private modalService: NgbModal) {}

      }, {
        key: "open",
        value: function open(content) {
          var _this3 = this;

          this.isLoading = true;
          setTimeout(function () {
            _this3.isLoading = false;
          }, 1000); //this.prepareInputData();

          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this3.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this3.closeResult = "Dismissed ".concat(_this3.getDismissReason(reason));
          });
        }
      }, {
        key: "openModal",
        value: function openModal(form) {
          console.log(form);
          this.onFormSubmit(form);
          this.display = 'block';
        }
      }, {
        key: "onCloseHandled",
        value: function onCloseHandled() {
          this.display = 'none';
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_query_service__WEBPACK_IMPORTED_MODULE_17__["QueryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_dst_service__WEBPACK_IMPORTED_MODULE_8__["IModalContent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_dst_query__WEBPACK_IMPORTED_MODULE_9__["IQueryContent"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.outputDiv = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_app_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _app_dst_service__WEBPACK_IMPORTED_MODULE_8__["IModalContent"], _app_dst_query__WEBPACK_IMPORTED_MODULE_9__["IQueryContent"]])],
      decls: 60,
      vars: 6,
      consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"], [1, "navbar", "navbar-expand-sm"], [1, "container-fluid"], [1, "navbar-header"], [1, "main-section", "container-fluid", "text-center"], [1, "row", "content"], [1, "col-sm-2", "sidenav"], [1, "logo"], ["src", "https://research.coe.drexel.edu/caee/pipe/assets/images/Drexel_vertical_blue.png", "alt", "logo", "width", "126px", "height", "130px", 1, "img-thumbnail"], ["role", "navigation"], [1, "nav-bar"], ["matLine", "", "type", "button", 3, "click"], [1, "col-sm-8", "text-left"], [1, "empty"], [1, "main-heading"], ["id", "about", 4, "ngIf"], ["id", "resources", 4, "ngIf"], ["id", "trainings", 4, "ngIf"], ["id", "questions", 4, "ngIf"], [4, "ngIf"], ["id", "input", 4, "ngIf"], [1, "footer", "text-center"], [1, "fa", "fa-envelope", 2, "font-size", "24px"], ["href", "https://www.researchgate.net/project/Building-Water-Quality", "target", "_tab", 2, "color", "black"], ["id", "about"], [3, "innerHTML"], [1, "heading", "form-outline", "mb-4"], ["href", "https://cfpub.epa.gov/ncer_abstracts/index.cfm/fuseaction/display.abstractDetail/abstract/10735", "target", "_blank"], ["id", "resources"], ["href", "https://www.ashrae.org/technical-resources/bookstore/ansi-ashrae-standard-188-2018-legionellosis-risk-management-for-building-water-systems", "target", "_blank"], ["href", "https://www.cdc.gov/Legionella/downloads/toolkit.pdf", "target", "_blank"], ["href", "https://www.cdc.gov/infectioncontrol/pdf/guidelines/environmental-guidelines-P.pdf", "target", "_blank"], ["href", "https://www.cdc.gov/mahc/pdf/2016-mahc-annex-final.pdf", "target", "_blank"], ["href", "https://www.cms.gov/Medicare/Provider-Enrollment-and-Certification/SurveyCertificationGenInfo/Downloads/Survey-and-Cert-Letter-17-30.pdf", "target", "_blank"], ["href", "https://www.va.gov/vhapublications/ViewPublication.asp?pub_ID=3033", "target", "_blank"], ["href", "https://specialpathogenslab.com/wp-content/uploads/2020/05/va-Legionella-directive-2008.pdf", "target", "_blank"], ["href", "https://ecdc.europa.eu/sites/portal/files/documents/Legionella%20GuidelinesFinal%20updated%20for%20ECDC%20corrections.pdf", "target", "_blank"], ["href", "https://www.commerce.wa.gov.au/sites/default/files/atoms/files/legionnaires-code.pdf", "target", "_blank"], ["href", "https://www.ncbi.nlm.nih.gov/books/NBK555109/pdf/Bookshelf_NBK555109.pdf", "target", "_blank"], ["href", "https://cfpub.epa.gov/ncea/risk/era/recordisplay.cfm?deid=37634", "target", "_blank"], ["href", "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/140105/Health_Technical_Memorandum_04-01_Addendum.pdf", "target", "_blank"], ["href", "https://apps.who.int/iris/handle/10665/43233", "target", "_blank"], ["href", "https://apps.who.int/iris/bitstream/handle/10665/76145/9789241548106_eng.pdf?sequence=1", "target", "_blank"], ["id", "trainings"], ["href", "https://www.cdc.gov/nceh/ehs/elearn/prevent-LD-training.html", "target", "_blank"], ["href", "https://www.nap.edu/resource/25474/interactive/", "target", "_blank"], ["href", "https://eva.ecdc.europa.eu/course/view.php?id=177", "target", "_blank"], ["id", "questions"], [3, "ngSubmit"], ["queryForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["for", "alterEgo"], ["type", "text", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["alterEgo", "ngModel"], ["for", "power"], ["name", "query", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["power", "ngModel"], ["type", "submit", 1, "btn", "btn-secondary", 2, "color", "rgb(80, 200, 120)", 3, "disabled"], [2, "color", "rgb(255, 30, 30)"], ["width", "600", "height", "400", "src", "https://www.youtube.com/embed/JrTdol0QlgM/?controls=1"], ["id", "input"], ["novalidate", "", 3, "ngSubmit"], ["userForm", "ngForm"], [1, "form-outline", "mb-4"], ["type", "radio", "value", "tmvYes", "name", "tmv", "required", "", 3, "ngModel", "change"], ["tmv", "ngModel"], ["type", "radio", "value", "tmvNo", "name", "tmv", "required", "", 3, "ngModel", "change"], ["type", "radio", "value", "tmvMaybe", "name", "tmv", "required", "", 3, "ngModel", "change"], [3, "ngClass", 4, "ngIf"], ["class", "form-outline mb-4", 4, "ngIf"], ["type", "radio", "value", "pou1", "name", "pou", "required", "", 3, "ngModel"], ["pou", "ngModel"], ["type", "radio", "value", "pou2", "name", "pou", "required", "", 3, "ngModel"], ["type", "radio", "value", "pou3", "name", "pou", "required", "", 3, "ngModel"], ["type", "radio", "value", "pou4", "name", "pou", "required", "", 3, "ngModel"], ["type", "radio", "value", "pou5", "name", "pou", "required", "", 3, "ngModel"], ["type", "radio", "value", "pou6", "name", "pou", "required", "", 3, "ngModel"], ["type", "radio", "value", "pou7", "name", "pou", "required", "", 3, "ngModel"], ["type", "radio", "value", "60", "name", "timeToTapInput", "required", "", 3, "ngModel"], ["timeToTapInput", "ngModel"], ["type", "radio", "value", "31 - 60", "name", "timeToTapInput", "required", "", 3, "ngModel"], ["type", "radio", "value", "11 - 30", "name", "timeToTapInput", "required", "", 3, "ngModel"], ["type", "radio", "value", "1 - 10", "name", "timeToTapInput", "required", "", 3, "ngModel"], ["type", "radio", "value", "timeToTapInpute", "name", "timeToTapInput", "required", "", 3, "ngModel"], ["type", "radio", "value", "recLoopYes", "name", "recLoop", "required", "", 3, "ngModel", "change"], ["recLoop", "ngModel"], ["type", "radio", "value", "recLoopNo", "name", "recLoop", "required", "", 3, "ngModel", "change"], ["type", "radio", "value", "residualType1", "name", "residualType", "required", "", 3, "ngModel", "change"], ["residualType", "ngModel"], ["type", "radio", "value", "residualType2", "name", "residualType", "required", "", 3, "ngModel", "change"], ["type", "radio", "value", "residualType3", "name", "residualType", "required", "", 3, "ngModel", "change"], ["type", "radio", "value", "residualType4", "name", "residualType", "required", "", 3, "ngModel", "change"], ["type", "radio", "value", "setpoint1", "name", "setpoint", "required", "", 3, "ngModel"], ["setpoint", "ngModel"], ["type", "radio", "value", "setpoint2", "name", "setpoint", "required", "", 3, "ngModel"], ["type", "radio", "value", "setpoint3", "name", "setpoint", "required", "", 3, "ngModel"], ["type", "radio", "value", "setpoint4", "name", "setpoint", "required", "", 3, "ngModel"], ["type", "radio", "value", "\n\t\t\t\t", "name", "setpoint", "required", "", 3, "ngModel"], ["type", "radio", "value", "setpoint6", "name", "setpoint", "required", "", 3, "ngModel"], ["type", "radio", "value", "setpoint7", "name", "setpoint", "required", "", 3, "ngModel"], ["type", "radio", "value", "deadEndYes", "name", "deadEnd", "required", "", 3, "ngModel"], ["deadEnd", "ngModel"], ["type", "radio", "value", "deadEndNo", "name", "deadEnd", "required", "", 3, "ngModel"], ["type", "radio", "value", "llfYes", "name", "llf", "required", "", 3, "ngModel"], ["llf", "ngModel"], ["type", "radio", "value", "llfNo", "name", "llf", "required", "", 3, "ngModel"], ["type", "radio", "value", "efYes", "name", "ef", "required", "", 3, "ngModel"], ["ef", "ngModel"], ["type", "radio", "value", "efNo", "name", "ef", "required", "", 3, "ngModel"], ["type", "radio", "value", "sfhYes", "name", "sfh", "required", "", 3, "ngModel"], ["sfh", "ngModel"], ["type", "radio", "value", "sfhNo", "name", "sfh", "required", "", 3, "ngModel"], ["type", "radio", "value", "coolingTowerYes", "name", "coolingTower", "required", "", 3, "ngModel"], ["coolingTower", "ngModel"], ["type", "radio", "value", "coolingTowerNo", "name", "coolingTower", "required", "", 3, "ngModel"], ["type", "radio", "value", "hotTubYes", "name", "hotTub", "required", "", 3, "ngModel"], ["hotTub", "ngModel"], ["type", "radio", "value", "hotTubNo", "name", "hotTub", "required", "", 3, "ngModel"], ["type", "radio", "value", "decoFounYes", "name", "decoFoun", "required", "", 3, "ngModel"], ["decoFoun", "ngModel"], ["type", "radio", "value", "decoFounNo", "name", "decoFoun", "required", "", 3, "ngModel"], ["type", "radio", "value", "humidifierYes", "name", "humidifier", "required", "", 3, "ngModel"], ["humidifier", "ngModel"], ["type", "radio", "value", "humidifierNo", "name", "humidifier", "required", "", 3, "ngModel"], ["type", "radio", "value", "buidingTypeYes", "name", "buidingType", "required", "", 3, "ngModel"], ["buidingType", "ngModel"], ["type", "radio", "value", "buidingTypeNo", "name", "buidingType", "required", "", 3, "ngModel"], ["type", "radio", "value", "retirementBuildingYes", "name", "retirementBuilding", "required", "", 3, "ngModel"], ["retirementBuilding", "ngModel"], ["type", "radio", "value", "retirementBuildingNo", "name", "retirementBuilding", "required", "", 3, "ngModel"], ["type", "radio", "value", "hotelBuildingYes", "name", "hotelBuilding", "required", "", 3, "ngModel"], ["hotelBuilding", "ngModel"], ["type", "radio", "value", "hotelBuildingNo", "name", "hotelBuilding", "required", "", 3, "ngModel"], ["type", "radio", "value", "basementYes", "name", "basement", "required", "", 3, "ngModel"], ["basement", "ngModel"], ["type", "radio", "value", "basementNo", "name", "basement", "required", "", 3, "ngModel"], [1, "btn", "btn-secondary", 2, "color", "rgb(173,255,47)", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 2, "color", "rgb(244, 143, 177 )", 3, "click"], ["href", "#output"], ["content", ""], [2, "border-style", "ridge", 3, "hidden", "ngClass"], ["outputDiv", ""], [1, "col-sm-11", "myDiv"], ["id", "Guidance", 4, "ngIf"], [1, "container"], ["class", "container", 4, "ngIf"], ["href", "#input"], [1, "btn", "btn-secondary", 3, "click"], [1, "col-sm-1"], [3, "ngClass"], ["type", "radio", "value", "tmvCent1", "name", "tmvCent", "required", "", "checked", "checked", 3, "ngModel"], ["tmvCent", "ngModel"], ["type", "radio", "value", "tmvCent2", "name", "tmvCent", "required", "", 3, "ngModel"], ["type", "radio", "value", "recLoopTemp1", "name", "recLoopTemp", "required", "", 3, "ngModel"], ["recLoopTemp", "ngModel"], ["type", "radio", "value", "recLoopTemp2", "name", "recLoopTemp", "required", "", 3, "ngModel"], ["type", "radio", "value", "recLoopTemp3", "name", "recLoopTemp", "required", "", 3, "ngModel"], ["type", "radio", "value", "recLoopTemp4", "name", "recLoopTemp", "required", "", 3, "ngModel"], ["type", "radio", "value", "recLoopTemp5", "name", "recLoopTemp", "required", "", 3, "ngModel"], ["type", "radio", "value", "recLoopTemp6", "name", "recLoopTemp", "required", "", 3, "ngModel"], ["type", "radio", "value", "recLoopTemp7", "name", "recLoopTemp", "required", "", 3, "ngModel"], ["type", "radio", "value", "residualLevel1", "name", "residualLevel", "required", "", 3, "ngModel"], ["residualLevel", "ngModel"], ["type", "radio", "value", "residualLevel2", "name", "residualLevel", "required", "", 3, "ngModel"], ["type", "radio", "value", "residualLevel3", "name", "residualLevel", "required", "", 3, "ngModel"], ["type", "radio", "value", "residualLevel4", "name", "residualLevel", "required", "", 3, "ngModel"], ["type", "radio", "value", "residualLevel5", "name", "residualLevel", "required", "", 3, "ngModel"], ["type", "radio", "value", "residualLevel6", "name", "residualLevel", "required", "", 3, "ngModel"], ["type", "radio", "value", "chloramineLevel1", "name", "chloramineLevel", "required", "", 3, "ngModel"], ["chloramineLevel", "ngModel"], ["type", "radio", "value", "chloramineLevel2", "name", "chloramineLevel", "required", "", 3, "ngModel"], ["type", "radio", "value", "chloramineLevel3", "name", "chloramineLevel", "required", "", 3, "ngModel"], ["type", "radio", "value", "chloramineLevel4", "name", "chloramineLevel", "required", "", 3, "ngModel"], ["type", "radio", "value", "chloramineLevel5", "name", "chloramineLevel", "required", "", 3, "ngModel"], ["type", "radio", "value", "dioxideLevel1", "name", "dioxideLevel", "required", "", 3, "ngModel"], ["dioxideLevel", "ngModel"], ["type", "radio", "value", "dioxideLevel2", "name", "dioxideLevel", "required", "", 3, "ngModel"], ["type", "radio", "value", "dioxideLevel3", "name", "dioxideLevel", "required", "", 3, "ngModel"], ["type", "radio", "value", "dioxideLevel4", "name", "dioxideLevel", "required", "", 3, "ngModel"], ["type", "radio", "value", "dioxideLevel5", "name", "dioxideLevel", "required", "", 3, "ngModel"], ["style", "width : 500px", "src", "https://research.coe.drexel.edu/caee/pipe/assets/images/spinner.gif", 4, "ngIf"], [1, "modal-header", 3, "hidden"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 3, "hidden"], [1, "modal-footer", 3, "hidden"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["src", "https://research.coe.drexel.edu/caee/pipe/assets/images/spinner.gif", 2, "width", "500px"], ["id", "Guidance"], ["id", "output"], [2, "font-size", "25px"], [2, "display", "table-row", "height", "100px"], [2, "display", "inline-table", "text-align", "center"], [2, "font-size", "20px"], ["colspan", "2"], ["scope", "col"], ["class", "temperature-box", 4, "ngIf"], [2, "font-size", "15px"], [2, "display", "inline-table", "text-align", "center", "margin-top", "20px"], ["class", "temperature-box", "s", "", 4, "ngIf"], ["href", "https://ecdc.europa.eu/sites/portal/files/documents/Legionella%20GuidelinesFinal%20updated%20for%20ECDC%20corrections.pdf"], [1, "temperature-box"], ["s", "", 1, "temperature-box"], [1, "table", "table-bordered"], [2, "text-align", "center"], ["rowspan", "4", 2, "text-align", "center", "padding-top", "100px"], [1, "table-secondary"], ["rowspan", "3", 2, "text-align", "center", "padding-top", "100px"], ["rowspan", "3", 2, "text-align", "center", "padding-top", "80px"], ["tooltip", "Refer to section 10 in Resources", 2, "color", "cornflowerblue"], ["tooltip", "The National Academies Press; National Academies of Sciences, Engineering and Medicine: Washington, DC, USA, 2019.", 2, "color", "cornflowerblue"], ["tooltip", "European Guidelines Working Group. European Technical Guidelines for the Prevention, Control and Investigation, of Infections Caused by <i>Legionella</i> Species. 2017. Available online", 2, "color", "cornflowerblue"], ["target", "_blank", "href", "https://cha.com/wp-content/uploads/2019/03/Water-Management-Program-Template.pdf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-nav-list", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_19_listener() {
            return ctx.showHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_23_listener() {
            return ctx.showSurvey();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "PIPE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_27_listener() {
            return ctx.showAbout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_31_listener() {
            return ctx.showResources();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Resources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_35_listener() {
            return ctx.showTrainings();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Trainings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_39_listener() {
            return ctx.showQuestions();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Have Questions?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Plumbing Information and Performance Evaluation (PIPE): A Decision Support Tool");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AppComponent_div_47_Template, 24, 9, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AppComponent_div_48_Template, 111, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AppComponent_div_49_Template, 25, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AppComponent_div_50_Template, 25, 6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AppComponent_div_51_Template, 35, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AppComponent_div_52_Template, 365, 143, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "footer", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Connect with us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowAbout);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowResources);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTrainings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isQuestions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isShowAbout && !ctx.isShowResources && !ctx.isTrainings && !ctx.isQuestions && ctx.isHome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isShowAbout && !ctx.isShowResources && !ctx.isTrainings && !ctx.isQuestions && !ctx.isHome);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbNavbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatLine"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_22__["TooltipDirective"]],
      styles: ["table[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    border: 1px solid black;\n}\n.error[_ngcontent-%COMP%] {\n    color: red;\n}\n.success[_ngcontent-%COMP%] {\n    color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3N0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxudGFibGUsIHRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG4uc3VjY2VzcyB7XG4gICAgY29sb3I6IGdyZWVuO1xufSAiXX0= */", ".row.content[_ngcontent-%COMP%] {height: inherit}\n    \n\t.navbar[_ngcontent-%COMP%] {\n\t\tbackground-color: slategray;\n\t}\n\n\t.navbar-header[_ngcontent-%COMP%] {\n\t\theight: 30px;\n\t}\n    \n    .sidenav[_ngcontent-%COMP%] {\n\t  padding-top: 20px;\n      background-color: lightsteelblue;\n      height: auto;\n    }\n    \n\t.logo[_ngcontent-%COMP%] {\n\t  height: 140px;\n\t}\n\n\t.heading[_ngcontent-%COMP%] {\n\t\tbackground-color: lightsteelblue;\n    \tpadding: 1px;\n    \theight: 30px;\n\t}\n\n    #trainings[_ngcontent-%COMP%] {\n\t\theight: 530px;\n\t}\n\n\t#questions[_ngcontent-%COMP%] {\n\t\theight: 545px;\n\t}\n\n\t.empty[_ngcontent-%COMP%] {\n\t\theight: 10px;\n\t}\n\n    .main-heading[_ngcontent-%COMP%] {\n\n\t\tbackground-color: lightsteelblue;\n    \tpadding: 18px;\n    \theight: 75px;\n\t}\n\n    .nav-bar[_ngcontent-%COMP%] {\n\t\tfont-family: inherit;\n\t\theight: 45px;\n\t\ttext-align: left;\n\t\tpadding-left: 20px\n\t}\n\n\t.modal-body[_ngcontent-%COMP%] {\n    max-height:400px; \n    overflow-y: auto;\n   }\n\n\t.myDiv[_ngcontent-%COMP%] {\n\t\tcolor: black \n\t}\n\n\t.container[_ngcontent-%COMP%] {\n  border: 2px solid #ccc;\n  background-color: #eee;\n  border-radius: 5px;\n  padding: 16px;\n  margin: 16px 0;\n  width: auto;\n}\n\n.container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 20px;\n}\n\n.container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 15px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n\tbackground-color: #f1f1f1;\n}\n\n.backdrop[_ngcontent-%COMP%]{\nbackground-color:rgba(0,0,0,0.6);\nposition:fixed;\ntop:0;\nleft:0;\nwidth:100%;\nheight:100vh;\n}\n\n@media (max-width: 500px) {\n  .container[_ngcontent-%COMP%] {\n      text-align: center;\n  }\n  .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      margin: auto;\n      float: none;\n      display: block;\n  }\n}\n\n\t#results[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n  color: black;\n}\n\n#results[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #results[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#results[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child{background-color: #f2f2f2;}\n\n#results[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: #ddd;}\n\n#results[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #989a9c;\n  color: white;\n  font-weight: bold\n}\n\n#cssTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] \n{\n    text-align: center; \n    vertical-align: middle;\n\twidth: 200px;\n}\n\n#annotationTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n\twidth: 200px;\n}\n\n\n.table[_ngcontent-%COMP%] {\n  border: 0.5px solid #000000;\n}\n.table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n   border: 0.5px solid #000000;\n}\n\n.temperature-box[_ngcontent-%COMP%] {\n\tbox-sizing: content-box;\n\tborder: solid red 5px;\n\tpadding: 5px;\n}\n    \n    footer[_ngcontent-%COMP%] {\n      background-color: slategray;\n      color: white;\n      padding: 15px;\n\t  margin-bottom:0;\n\t  position: absolute;\n      width: 100%;\n    }\n\n\t.bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url(\"photographer.jpg\");\n  \n  \n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  \n  \n  height: 100%; \n  \n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n\n.bg-text[_ngcontent-%COMP%] {\n  background-color: rgb(0,0,0); \n  background-color: rgba(0,0,0, 0.4); \n  color: white;\n  font-weight: bold;\n  border: 3px solid #f1f1f1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 80%;\n  padding: 20px;\n  text-align: center;\n}\n    \n    \n    @media screen and (max-width: 767px) {\n      .sidenav[_ngcontent-%COMP%] {\n        height: auto;\n        padding: 15px;\n      }\n      .row.content[_ngcontent-%COMP%] {height:auto;} \n    }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./style.css'],
          providers: [_app_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _app_dst_service__WEBPACK_IMPORTED_MODULE_8__["IModalContent"], _app_dst_query__WEBPACK_IMPORTED_MODULE_9__["IQueryContent"]]
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]
        }, {
          type: _services_query_service__WEBPACK_IMPORTED_MODULE_17__["QueryService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"]
        }, {
          type: _app_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _app_dst_service__WEBPACK_IMPORTED_MODULE_8__["IModalContent"]
        }, {
          type: _app_dst_query__WEBPACK_IMPORTED_MODULE_9__["IQueryContent"]
        }];
      }, {
        myDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['myDiv']
        }],
        outputDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['outputDiv']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _reactive_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reactive-form.component */
    "./src/app/reactive-form.component.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/user-service */
    "./src/app/services/user-service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/list.js");
    /* harmony import */


    var _demo_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./demo-material.module */
    "./src/app/demo-material.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _resources_resources_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./resources/resources.component */
    "./src/app/resources/resources.component.ts");
    /* harmony import */


    var _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./trainings/trainings.component */
    "./src/app/trainings/trainings.component.ts");
    /* harmony import */


    var _example_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./example/example.component */
    "./src/app/example/example.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_query_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/query-service */
    "./src/app/services/query-service.ts");
    /* harmony import */


    var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ng2-tooltip-directive */
    "./node_modules/ng2-tooltip-directive/__ivy_ngcc__/fesm2015/ng2-tooltip-directive.js"); //import { TemplateDrivenFormComponent }  from './template-driven-form.component';


    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_query_service__WEBPACK_IMPORTED_MODULE_18__["QueryService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_10__["DemoMaterialModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], //TemplateDrivenFormComponent,
        _reactive_form_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _resources_resources_component__WEBPACK_IMPORTED_MODULE_14__["ResourcesComponent"], _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_15__["TrainingsComponent"], _example_example_component__WEBPACK_IMPORTED_MODULE_16__["ExampleComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_10__["DemoMaterialModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _demo_material_module__WEBPACK_IMPORTED_MODULE_10__["DemoMaterialModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], //TemplateDrivenFormComponent,
          _reactive_form_component__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _resources_resources_component__WEBPACK_IMPORTED_MODULE_14__["ResourcesComponent"], _trainings_trainings_component__WEBPACK_IMPORTED_MODULE_15__["TrainingsComponent"], _example_example_component__WEBPACK_IMPORTED_MODULE_16__["ExampleComponent"]],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_query_service__WEBPACK_IMPORTED_MODULE_18__["QueryService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo-material.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/demo-material.module.ts ***!
    \*****************************************/

  /*! exports provided: DemoMaterialModule */

  /***/
  function srcAppDemoMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function () {
      return DemoMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/table.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var DemoMaterialModule = /*#__PURE__*/_createClass(function DemoMaterialModule() {
      _classCallCheck(this, DemoMaterialModule);
    });

    DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DemoMaterialModule
    });
    DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DemoMaterialModule_Factory(t) {
        return new (t || DemoMaterialModule)();
      },
      imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, {
        exports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/domain/query.ts":
  /*!*********************************!*\
    !*** ./src/app/domain/query.ts ***!
    \*********************************/

  /*! exports provided: Query */

  /***/
  function srcAppDomainQueryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Query", function () {
      return Query;
    });

    var Query = /*#__PURE__*/_createClass(function Query() {
      _classCallCheck(this, Query);
    });
    /***/

  },

  /***/
  "./src/app/domain/user.ts":
  /*!********************************!*\
    !*** ./src/app/domain/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppDomainUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = /*#__PURE__*/_createClass(function User() {
      _classCallCheck(this, User);

      this.residualLevel = 'n/a';
      this.tmvCent = 'n/a';
      this.recLoop = 'n/a';
      this.recLoopTemp = 'n/a';
      this.tmvUpstream = 'n/a';
      this.residualType = 'n/a';
      this.chloramineLevel = 'n/a';
      this.dioxideLevel = 'n/a';
      this.hotTempType = 'n/a';
    });
    /***/

  },

  /***/
  "./src/app/dst.query.ts":
  /*!******************************!*\
    !*** ./src/app/dst.query.ts ***!
    \******************************/

  /*! exports provided: IQueryContent */

  /***/
  function srcAppDstQueryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IQueryContent", function () {
      return IQueryContent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IQueryContent = /*#__PURE__*/_createClass(function IQueryContent() {
      _classCallCheck(this, IQueryContent);
    });

    IQueryContent.ɵfac = function IQueryContent_Factory(t) {
      return new (t || IQueryContent)();
    };

    IQueryContent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IQueryContent,
      factory: IQueryContent.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IQueryContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dst.service.ts":
  /*!********************************!*\
    !*** ./src/app/dst.service.ts ***!
    \********************************/

  /*! exports provided: IModalContent */

  /***/
  function srcAppDstServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IModalContent", function () {
      return IModalContent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IModalContent = /*#__PURE__*/_createClass(function IModalContent() {
      _classCallCheck(this, IModalContent);
    });

    IModalContent.ɵfac = function IModalContent_Factory(t) {
      return new (t || IModalContent)();
    };

    IModalContent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IModalContent,
      factory: IModalContent.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IModalContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/example/example.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/example/example.component.ts ***!
    \**********************************************/

  /*! exports provided: ExampleComponent */

  /***/
  function srcAppExampleExampleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleComponent", function () {
      return ExampleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExampleComponent = /*#__PURE__*/function () {
      function ExampleComponent() {
        _classCallCheck(this, ExampleComponent);
      }

      _createClass(ExampleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExampleComponent;
    }();

    ExampleComponent.ɵfac = function ExampleComponent_Factory(t) {
      return new (t || ExampleComponent)();
    };

    ExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExampleComponent,
      selectors: [["app-example"]],
      decls: 2,
      vars: 0,
      template: function ExampleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "example works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-example',
          templateUrl: './example.component.html',
          styleUrls: ['./example.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 3,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "INSIDE THE CHILD CONTROLELR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/reactive-form.component.ts":
  /*!********************************************!*\
    !*** ./src/app/reactive-form.component.ts ***!
    \********************************************/

  /*! exports provided: ReactiveFormComponent */

  /***/
  function srcAppReactiveFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveFormComponent", function () {
      return ReactiveFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _domain_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./domain/user */
    "./src/app/domain/user.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/user-service */
    "./src/app/services/user-service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ReactiveFormComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Form submitted successfully.\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "success");
      }
    }

    function ReactiveFormComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function ReactiveFormComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function ReactiveFormComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Accept T & C. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    var ReactiveFormComponent = /*#__PURE__*/function () {
      function ReactiveFormComponent(userService) {
        _classCallCheck(this, ReactiveFormComponent);

        this.userService = userService;
        this.isValidFormSubmitted = null;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          uname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          married: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
          tc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue)
        });
        this.user = new _domain_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
      }

      _createClass(ReactiveFormComponent, [{
        key: "onFormSubmit",
        value: function onFormSubmit() {
          this.isValidFormSubmitted = false;

          if (this.userForm.invalid) {
            return;
          }

          this.isValidFormSubmitted = true;
          console.log(this.userForm.valid); //this.user.userName = this.userForm.get('uname').value;
          //this.user.gender = this.userForm.get('gender').value;

          this.user.isTCAccepted = this.userForm.get('tc').value;
          this.userService.createUser(this.user);
          this.reset();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.userForm.reset({
            married: false
          });
        }
      }, {
        key: "setDefaultValues",
        value: function setDefaultValues() {
          this.userForm.patchValue({
            uname: 'Krishna',
            gender: 'male',
            married: true
          });
        }
      }]);

      return ReactiveFormComponent;
    }();

    ReactiveFormComponent.ɵfac = function ReactiveFormComponent_Factory(t) {
      return new (t || ReactiveFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    ReactiveFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReactiveFormComponent,
      selectors: [["app-reactive"]],
      decls: 43,
      vars: 5,
      consts: [[3, "ngClass", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["formControlName", "uname"], ["type", "radio", "value", "male", "formControlName", "gender"], ["type", "radio", "value", "female", "formControlName", "gender"], ["type", "radio", "value", "third", "formControlName", "gender"], ["type", "checkbox", "formControlName", "married"], ["type", "checkbox", "formControlName", "tc"], ["colspan", "2"], ["type", "button", 3, "click"], [3, "ngClass"]],
      template: function ReactiveFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reactive Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReactiveFormComponent_p_2_Template, 2, 1, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Questions about building type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ReactiveFormComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onFormSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReactiveFormComponent_div_12_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\xA0 \xA01.\tPlease tell us about the water system for the building you manage. Options to choose from:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Hospital ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Residence primarily for those >=65 years old ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Hotel or High-rise apartment - multiple housing units and a centralized hot water system ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReactiveFormComponent_div_23_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Are you married? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Accept T & C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ReactiveFormComponent_div_34_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReactiveFormComponent_Template_button_click_39_listener() {
            return ctx.setDefaultValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Set Default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReactiveFormComponent_Template_button_click_41_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValidFormSubmitted && ctx.userForm.pristine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userForm.get("uname").invalid && ctx.isValidFormSubmitted != null && !ctx.isValidFormSubmitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userForm.get("gender").invalid && ctx.isValidFormSubmitted != null && !ctx.isValidFormSubmitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userForm.get("tc").invalid && ctx.isValidFormSubmitted != null && !ctx.isValidFormSubmitted);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      styles: ["table[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n    border: 1px solid black;\n}\n.error[_ngcontent-%COMP%] {\n    color: red;\n}\n.success[_ngcontent-%COMP%] {\n    color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3N0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxudGFibGUsIHRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG4uc3VjY2VzcyB7XG4gICAgY29sb3I6IGdyZWVuO1xufSAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactiveFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reactive',
          templateUrl: './reactive-form.component.html',
          styleUrls: ['./style.css']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resources/resources.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/resources/resources.component.ts ***!
    \**************************************************/

  /*! exports provided: ResourcesComponent */

  /***/
  function srcAppResourcesResourcesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function () {
      return ResourcesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResourcesComponent = /*#__PURE__*/function () {
      function ResourcesComponent() {
        _classCallCheck(this, ResourcesComponent);
      }

      _createClass(ResourcesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResourcesComponent;
    }();

    ResourcesComponent.ɵfac = function ResourcesComponent_Factory(t) {
      return new (t || ResourcesComponent)();
    };

    ResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourcesComponent,
      selectors: [["app-resources"]],
      decls: 2,
      vars: 0,
      template: function ResourcesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "resources works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlcy9yZXNvdXJjZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourcesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resources',
          templateUrl: './resources.component.html',
          styleUrls: ['./resources.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/query-service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/query-service.ts ***!
    \*******************************************/

  /*! exports provided: QueryService */

  /***/
  function srcAppServicesQueryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueryService", function () {
      return QueryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var QueryService = /*#__PURE__*/function () {
      function QueryService() {
        _classCallCheck(this, QueryService);
      }

      _createClass(QueryService, [{
        key: "createUser",
        value: function createUser(query) {}
      }]);

      return QueryService;
    }();

    QueryService.ɵfac = function QueryService_Factory(t) {
      return new (t || QueryService)();
    };

    QueryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: QueryService,
      factory: QueryService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user-service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user-service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserService = /*#__PURE__*/function () {
      function UserService() {
        _classCallCheck(this, UserService);
      }

      _createClass(UserService, [{
        key: "createUser",
        value: function createUser(user) {}
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)();
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/trainings/trainings.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/trainings/trainings.component.ts ***!
    \**************************************************/

  /*! exports provided: TrainingsComponent */

  /***/
  function srcAppTrainingsTrainingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrainingsComponent", function () {
      return TrainingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TrainingsComponent = /*#__PURE__*/function () {
      function TrainingsComponent() {
        _classCallCheck(this, TrainingsComponent);
      }

      _createClass(TrainingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TrainingsComponent;
    }();

    TrainingsComponent.ɵfac = function TrainingsComponent_Factory(t) {
      return new (t || TrainingsComponent)();
    };

    TrainingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TrainingsComponent,
      selectors: [["app-trainings"]],
      decls: 2,
      vars: 0,
      template: function TrainingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "trainings works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWluaW5ncy90cmFpbmluZ3MuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrainingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-trainings',
          templateUrl: './trainings.component.html',
          styleUrls: ['./trainings.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/About.json":
  /*!*******************************!*\
    !*** ./src/assets/About.json ***!
    \*******************************/

  /*! exports provided: content-1, content-2, content-3, content-4, content-5, content-6, content-7, content-8, content-9, content-10, content-11, content-12, default */

  /***/
  function srcAssetsAboutJson(module) {
    module.exports = JSON.parse("{\"content-1\":\"Welcome to Building Water Quality Research Group at Drexel University!\",\"content-2\":\"About Us: \",\"content-3\":\"We are a research team of professors, scientists, graduate students, and field practitioners at Drexel University, Environmental Science and Policy Research Institute (ESPRI), and University of Colorado, Boulder. Under the U.S. Environmental Protection Agency\",\"content-4\":\"Assistance Agreement # R836880\",\"content-5\":\"to Drexel University, we complied comprehensive guidance for water quality management in large buildings which are based on\",\"content-6\":\"<li> the review of existing guidance documents from agencies across the US and worldwide and available scientific literature</li><li>interviews with subject matter experts from worldwide. </li><li>interviews with building water quality management practitioners </li>\",\"content-7\":\"PIPE Decision Support Tool\",\"content-8\":\"Purpose of the DST:\",\"content-9\":\"Building owners, facility managers, and other stakeholders responsible for maintaining water quality in large buildings are frequently concerned about the contamination of drinking water systems in buildings. These concerns are more pronounced in buildings such as the following: <br><ul><li>Large buildings or buildings where elderly and immunocompromised populations reside, such as hospitals and long-term care facilities </li><li>Buildings with innovative technologies, such as water or energy-conserving or recycling technologies, advanced valves, and treatment systems, that may have unintended impacts on water quality through changes to water residence times and constituent concentrations </li> <li>Buildings subject to intended or unintended prolonged closures such as schools and hotels closed during the COVID-19 pandemic </li></ul>The purpose of the PIPE decision support tool is to provide a free resource for building managers, such as those in the above mentioned, highly susceptible buildings, for assessing and protecting water quality in their buildings.\",\"content-10\":\"How it Works: \",\"content-11\":\"We provide a FREE web-based decision support tool to assist users in managing water quality in their building. This tool will help you assess:<br> - If you need a formal water quality management plan <br> - What features in your plumbing need management, i.e., temperature settings, thermostatic mixing valve, low flow fixtures, etc.<br> &nbsp;&nbsp;&nbsp; - You provide basic information on the water distribution system, operational and design parameters in your plumbing <br> &nbsp;&nbsp;&nbsp;- The tool provides downloadable guidance information from multiple sources tailored to your building need\",\"content-12\":\"<b>Note: </b>The PIPE DST includes a broad database to address complicated water quality issues in building water systems to reduce the risk of contamination and waterborne disease outbreaks but no one resource can be comprehensive. Premise plumbing water systems vary significantly. There may be no substitute for measuring water quality in your building. In the absence of measurement, no system can provide any assurance that water quality objectives are being met. The PIPE DST is for informational purposes only for the decision-makers, and it does not substitute for engineering guidance for water management. The output report provided by this DST does not judge which source of guidance is best but does provide citations to full documents for the user to review in-depth as needed to make well-informed decisions.\"}");
    /***/
  },

  /***/
  "./src/assets/BuildingQuestions.json":
  /*!*******************************************!*\
    !*** ./src/assets/BuildingQuestions.json ***!
    \*******************************************/

  /*! exports provided: content-1, content-2, content-3, content-4, default */

  /***/
  function srcAssetsBuildingQuestionsJson(module) {
    module.exports = JSON.parse("{\"content-1\":\"15. &nbsp; Is your building a healthcare facility where patients stay overnight or does your building house or treat people who have chronic and acute medical problems or weakened immune systems?\",\"content-2\":\"16. &nbsp;Does your building primarily house people older than 65 years (like a retirement home or assisted-living facility)?\",\"content-3\":\"17. &nbsp;Does your building have multiple housing units and a centralized hot water system (like a hotel or high-rise apartment complex)?\",\"content-4\":\"18. &nbsp;Does your building have more than 10 stories (including basement levels)?\"}");
    /***/
  },

  /***/
  "./src/assets/DeviceQuestions.json":
  /*!*****************************************!*\
    !*** ./src/assets/DeviceQuestions.json ***!
    \*****************************************/

  /*! exports provided: content-5, content-6, content-7, content-8, content-9, content-10, content-11, content-12, default */

  /***/
  function srcAssetsDeviceQuestionsJson(module) {
    module.exports = JSON.parse("{\"content-5\":\"11. &nbsp; Does your building have a cooling tower?\",\"content-6\":\"12. &nbsp;Does your building have a hot tub (also known as a spa) that is not drained between each use?\",\"content-7\":\"13. &nbsp;Does your building have a decorative fountain?\",\"content-8\":\"14. &nbsp;Does your building have a centrally-installed mister, atomizer, air washer, or humidifier?\",\"content-9\":\"7. &nbsp;Does your building have dead ends? (Dead ends- Sections of pipes that do not have outlets at the end. Pipes that were capped either due to the removal of something or in anticipation of installing something at a later time)\",\"content-10\":\"8. &nbsp;Does your building have low flow fixtures? (As per EPA, guidlines for low flow fixtures are: Shower heads- 2.0 gpm, Faucets- 1.5 gpm, Toilet- 1.28 gpf)\",\"content-11\":\"9. &nbsp; Does your building have Electronic (i.e., automatic/no touch) faucets?\",\"content-12\":\"10. &nbsp; Does your building have Showers with flexible hoses?\"}");
    /***/
  },

  /***/
  "./src/assets/FeaturesOutput.json":
  /*!****************************************!*\
    !*** ./src/assets/FeaturesOutput.json ***!
    \****************************************/

  /*! exports provided: content-1, content-2, ht-concerns, ht-action, tmv-p, tmv-concerns, tmv-action, lff-p, lff-concerns, lff-action, de-concerns, de-action, ef-concerns, ef-action, sfh-concerns, sfh-action, humid-concerns, humid-action, decoFoun-concerns, decoFoun-action, default */

  /***/
  function srcAssetsFeaturesOutputJson(module) {
    module.exports = JSON.parse("{\"content-1\":\"<u>Potential concerns: </u>\",\"content-2\":\"<u>Suggested remedial action:  </u>\",\"ht-concerns\":\"In hot tubs and spas, several different conditions can influence Legionella growth and can increase contamination risk. <ul><li>Aerosols that are generated by the water jets in hot tubs can be easily inhaled both by the pool users and those in the immediate vicinity <a tooltip='The National Academies Press; National Academies of Sciences, Engineering and Medicine: Washington, DC, USA, 2019.' style='color: cornflowerblue;'>(NASEM, 2019; </a><a tooltip='European Guidelines Working Group. European Technical Guidelines for the Prevention, Control and Investigation, of Infections Caused by Legionella Species. 2017. Available online' style='color: cornflowerblue;'>European Guidelines Working Group 2017)</a></li><li>Hot tubs/spas support biofilm growth which promotes the growth of Legionella (NASEM 2019) </li><li>Hot tubs contain stagnant warm water for prolonged periods which is found to be linked with Legionella growth (NASEM 2019)  </li><li>The potential of high organic content in the pools increases Legionella growth potential. Water not drained causes the accumulation of nutrients in the multi-body spas (Bartram et al. 2007) </li><li>Spas and hot tubs mostly maintain temperatures higher than 30 0C, an ideal condition for the growth of Legionella and other waterborne pathogens (NASEM 2019; European Guidelines Working Group 2017) </li></ul>\",\"ht-action\":\"Guidance to follow to reduce potential conditions for Legionella growth and limiting the risk of exposure for hot tub and spa users. <ul><li>If spas have water filters or cartridge filters, they should be regularly cleaned and checked for their performance. Following a daily routine of disinfection with a disinfectant is necessary for the guidance of the disinfectant manufacturer's instructions. While cleaning, caution should be maintained, so the staff does not get contaminated with residuals on cartridge filters. Once the filters are cleaned, and they should be re-installed as per the manufacturer's design (ASHRAE 2018; CDC 2016)  </li><li>The whole system, including the balance tank, should be cleaned at least once a week, and half of the volume of water should be replaced each day (Bartram et al. 2007)  </li> <li>Sand filters should be back-washed daily (Bartram et al. 2007; European Guidelines Working Group 2017)  </li><li>According to the WHO, the free chlorine residual concentration should be maintained at least 1 mg/L for hot tub water (Bartram et al. 2007), and in the USA as per CDC, free chlorine residual concentration should be maintained at 2-5 mg/L for spas (CDC 2016)  </li><li>A pH range of 7.2-7.8 for chlorine and 7.2-8.0 for bromine-based or other non-chlorine-based biocide is recommended (Bartram et al. 2007)  </li><li>According to the European guideline, the free chlorine residual concentration should be maintained at 3-5 mg/L for spa water and the PH should be 7.0-7.6 (European Guidelines Working Group 2017)</li><li>If bromine is used in place of chlorine to treat the pools, the available bromine concentration should be maintained at 4-6 mg/L in water (European Guidelines Working Group 2017) </li><li>Filter the spa water for at least two hours per day even if not in use and filter water one hour after every use (Government of Western Australia, Department of Commerce, Department of Mines and Petroleum 2010) </li><li>Regular (monthly) microbial testing to be performed on spa water to check Legionella and other microbial activity to remain under acceptable concentrations specified by local, regional, and national codes. If any form of contamination is discovered, the spa should be discontinued from service immediately, and a rigorous cleaning procedure should be followed (ASHRAE 2018)</li></ul>\",\"tmv-p\":\"Thermostatic mixing valves (TMVs), or anti-scald valves, prevent water hot enough to cause burns from passing through a fixture. They allow higher water temperatures to be used upstream to their installation point and are thereby helpful in controlling the growth pathogens (like Legionella) in plumbing systems that can cause disease. Unfortunately, if not maintained carefully they can instead promote the growth of opportunistic pathogens. These concerns with TMVs and some of the available guidance to address them are summarized below.\",\"tmv-concerns\":\"<ol><li>Materials used in TMVs can promote Legionella and biofilm growth (NASEM, 2019). </li><li>TMVs whose designs can cause backflow in either the cold or hot water pipes are prone to allow stagnation of water in the water pipes at a temperature range suitable for Legionella growth (NASEM, 2019).</li><li>In old pipes, rusting, and release of rust particles within the pipe can accumulate at the valves within TMV, which can provide surfaces for Legionella growth (NASEM, 2019). </li><li>TMVs fitted far from the POU, or a single common TMV with multiple POUs can have pipe length with water temperature suitable for Legionella growth. Tepid water or dead water volume at these pipe lengths are highly susceptible to Legionella growth (European Guidelines Working Group, 2017).  </li></ol>\",\"tmv-action\":\"<ol><li>Materials with higher potential to enhance Legionella growth (e.g., natural rubber, linseed oil-based jointing compounds, fiber washers) should be avoided as internal components of TMV and mixing valves' designs (CDC, 2003; European Guidelines Working Group, 2017; NASEM, 2019). </li><li>Placing the TMVs as close as possible to the faucet reduces the dead water volumes and provides easy access for cleaning and maintenance of the TMVs  (CDC, 2003; Department of Veterans Affairs, 2014; NASEM, 2019). </li><li>TMVs should have an integrated check valve to prevent backflow into cold and hot water pipes. Also, designs that have no or minimal tepid water should be preferred (NASEM, 2019). </li><li>TMVs can be avoided completely if the temperature of water at fixtures does not possess a high risk of scalding. Installing TMVs can provide additional surface area that can increase Legionella growth potential (European Guidelines Working Group, 2017; NASEM, 2019) </li><li>TMVs are prone to failures if not manufactured with good design and robust materials. If they are installed, regular maintenance is necessary for repair in case of failures (NASEM, 2019). </li></ol>\",\"lff-p\":\"According to the National Academies of Sciences, Engineering, and Medicine (NASEM 2019) “Lower-flow fixtures, including toilets, dishwashers, washing machines, showerheads, and faucets are required by the EPA WaterSense program to reduce flows by at least 20 percent.” According to the EPA WaterSense program “Water-Sense labeled showerheads are designed to use 2.0 gpm or less and thus are 20 percent more water-efficient than standard showerheads on the market.” (EPA, 2016)\",\"lff-concerns\":\"<ul><li> Low flow fixtures can increase Legionella risk due to: <ul><li>increase in water age (NASEM 2019) </li><li>a decrease in the residual disinfectant concentration (NASEM 2019) </li><li>Lower flow results in less effective scouring of biofilms and promotes the growth of biofilm-associated Legionella  (European Guidelines Working Group, 2017; NASEM 2019) </li></ul></li><li>Low flow fixtures also take a longer flushing time for the target water temperature to be achieved (NASEM 2019).</li></ul>\",\"lff-action\":\"<ul><li>“Low-flow fixtures should not be allowed in hospitals and long-term care facilities because of their high-risk occupant populations.” (NASEM 2019) </li><li>Low flow fixtures must be flushed a minimum of two times a week to prevent water stagnation leading to Legionella growth (Department of Veterans Affairs 2014). </li></ul>\",\"de-concerns\":\"Long distances to taps and other outlet devices (e.g., showerheads, shower hoses, water conservation tap fixtures, etc.) in building plumbing systems can increase the risk to Legionella due to one or a combination of the following reasons (NASEM, 2019)<ul><li>increase in water age in pipes,  </li><li>reduction of hot water temperature to lukewarm temperature favorable to opportunistic pathogens, or  </li><li>reduction of disinfectant residual concentration.  </li></ul>\",\"de-action\":\"The following suggestions regarding distal devices should be considered to reduce risk from Legionella growth:  <ul><li>use smaller pipe diameters (NASEM, 2019) </li><li>use preventative flushing (NASEM, 2019; WHO, 2007) </li> <li>use of biostable pipe material (resistant to microbial growth), particularly when shower hoses are present as some flexible hoses leach organic matter (NASEM, 2019) </li><li>monitor the concentration of residual disinfectants; maintain 0.2 -1.0 mg/L at point of delivery (European Guidelines Working Group, 2017) </li><li>choosing simple design devices excluding electronic activation and if needed, the design should only include mixing valves (NASEM, 2019) </li></ul>\",\"ef-concerns\":\"Electronic faucets are identified as potential points of concern for Legionella growth risk in building water systems because (NASEM, 2019) <ul><li>Sometimes the materials used in these faucets can support biofilm growth  </li><li>They are usually used in combination with TMVs which can provide a locally favorable temperature regime for Legionella risk </li><li>They may provide for pockets of stagnant water within the faucets with increased water age that allows for Legionella growth.  </li><li>They may provide shelter against disinfection (Sydnor et al., 2012). </li></ul>\",\"ef-action\":\"<ul><li>Use design materials that minimize Legionella growth.  </li><li>Use simple designs that hold minimal tepid water volumes. </li></ul>\",\"sfh-concerns\":\"<p>Showers with flexible hoses are a potential risk for Legionella growth because:</p><ul><li>Natural materials used in the hoses such as natural rubber are a risk factor for biofilm growth (Bartram et al. 2007; NASEM 2019)  </li><li>Microorganisms can grow on materials that leach from the hoses (WHO 2011) </li></ul>\",\"sfh-action\":\"<ul><li>Avoid materials and components (i.e., rubber washers, and jointing compounds) to prevent the growth of microorganisms (ECDC 2017). </li><li>Avoid flexible hoses entirely and hoses with inappropriate lining materials (Department of Health (DH) 2013)</li></ul>\",\"humid-concerns\":\"<ul><li>Humidifiers are potential microbial risk sources because of the generation of aerosols and favorable temperature range to Legionella growth and amplification (NASEM 2019; Bartram et al. 2007). </li><li>A potential source of biofilm growth (NASEM 2019).</li><li>“Use of humidifiers, particularly those using water misting, should be discouraged among higher-risk patients.” (NASEM 2019).</li></ul>\",\"humid-action\":\"<ul><li>New buildings should avoid humidifier designs (i.e., ultrasonic humidifiers and centrifugal sprays) which produce water droplets within the temperature spectrum favorable to Legionella growth. Existing humidifiers should be replaced during the building renovations (NASEM 2019).</li><li>Rigorous cleaning and inspection (monthly) of line strainers, sparge pipes, valves, spray nozzles, parts of steam, and spray humidifiers releasing moisture into the airstream are required (Government of Western Australia, Department of Commerce, Department of Mines and Petroleum 2010).</li><li>All HVAC equipment should maintain water storage temperature either below or above the 25℃ to 43℃ range which is conducive for Legionella growth (NASEM 2019).</li><li>A steam injection system should be implemented in the HVAC humidifiers to reduce possible microbial contamination (OSHA 1996).</li><li>There is a potential for the disinfectant chemicals to be discharged into HVAC systems and inhaled by building residents. Considering this risk, UV and photochemical ozone generators could be used for water treatment (NASEM 2019).</li><li>HVAC systems should be operated using 100% outside air for 8 hours before returning the building to normal operating conditions after cleaning or disinfecting the misters/humidifiers (OSHA 1996).</li></ul>\",\"decoFoun-concerns\":\"<ul><li>Water temperature in decorative fountains is favorable for microbial growth (OSHA 1996; CDC 2003; Department of Veterans Affairs 2008; ANSI/ASHRAE 2018).</li><li>Decorative fountains generate water aerosols which were found to be associated with Legionella transmission (NASEM 2019; CDC 2003).</li></ul>\",\"decoFoun-action\":\"<ul><li>Avoid placing decorative fountains in patient-care areas (CDC 2003).</li><li>Make sure disinfection and maintenance of the fountains if used in the common areas of the hospitals and long-term care facilities (CDC 2003).</li><li>Complete drain system for cleaning the fountains (CDC 2003).</li></ul>\"}");
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"); // if (environment.production) {
    //   enableProdMode();
    // }


    if (!/localhost/.test(document.location.host)) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/harshasureshbabu/Documents/GitHub/DSTProject/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map