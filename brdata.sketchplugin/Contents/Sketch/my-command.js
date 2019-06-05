var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/my-command.js":
/*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
/*! exports provided: onStartup, onShutdown, onGenerateName, onGenerateSurname, onGenerateNameSurname, onGenerateState, onGenerateCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStartup", function() { return onStartup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShutdown", function() { return onShutdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGenerateName", function() { return onGenerateName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGenerateSurname", function() { return onGenerateSurname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGenerateNameSurname", function() { return onGenerateNameSurname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGenerateState", function() { return onGenerateState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGenerateCity", function() { return onGenerateCity; });
var sketch = __webpack_require__(/*! sketch */ "sketch");

var DataSupplier = sketch.DataSupplier;

var util = __webpack_require__(/*! util */ "util"); //Dados


var nome = ["Helena", "Miguel", "Alice", "Arthur", "Laura", "Heitor", "Manuela", "Bernardo", "Valentina", "Davi", "Sophia	", "Théo", "Isabella", "Lorenzo", "Heloísa	", "Gabriel", "Luiza", "Pedro", "Júlia	", "Benjamin", "Lorena	", "Matheus", "Lívia", "Lucas", "Maria Luiza", "Nicolas", "Cecília", "Joaquim", "Eloá", "Samuel", "Giovanna", "Henrique", "Maria Clara", "Rafael", "Maria Eduarda", "Guilherme", "Mariana", "Enzo", "Lara", "Murilo", "Beatriz", "Benício", "Antonella", "Gustavo", "Maria Júlia", "Isaac", "Emanuelly", "João Miguel", "Isadora", "Lucca", "Ana Clara", "Enzo Gabriel", "Melissa", "Pedro Henrique", "Ana Luiza", "Felipe", "Ana Júlia", "João Pedro", "Esther", "Pietro", "Lavínia", "Anthony", "Maitê", "Daniel", "Maria Cecília", "Bryan", "Maria Alice", "Davi Lucca", "Sarah", "Leonardo", "Elisa", "Vicente", "Liz", "Eduardo", "Yasmin", "Gael", "Isabelly", "Antônio", "Alícia", "Vitor", "Clara", "Noah", "Isis", "Caio", "Rebeca", "João"];
var sobrenome = ["Silva", "Souza", "Costa", "Santos", "Oliveira", "Pereira", "Rodrigues", "Almeida", "Nascimento", "Lima", "Araújo", "Fernandes", "Carvalho", "Gomes", "Martins", "Rocha", "Ribeiro", "Alves", "Monteiro", "Mendes", "Barros", "Freitas", "Barbosa", "Pinto", "Moura", "Cavalcanti", "Dias", "Castro", "Campos", "Cardoso"];
var estado = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
var cidade = ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Goiânia", "Belém", "Porto Alegre", "Guarulhos", "Campinas", "São Luís", "São Gonçalo", "Maceió", "Duque de Caxias", "Campo Grande", "Natal", "Teresina", "São Bernardo do Campo", "Nova Iguaçu", "João Pessoa", "Santo André", "São José dos Campos", "Jaboatão dos Guararapes", "Osasco", "Ribeirão Preto", "Uberlândia", "Sorocaba", "Contagem", "Aracaju", "Feira de Santana", "Cuiabá", "Joinville", "Aparecida de Goiânia", "Juiz de Fora", "Londrina", "Ananindeua", "Porto Velho", "Niterói", "Belford Roxo", "Serra", "Caxias do Sul", "Campos dos Goytacazes", "Macapá", "Florianópolis", "Vila Velha", "São João de Meriti", "Mauá", "São José do Rio Preto", "Mogi das Cruzes", "Santos", "Betim", "Diadema", "Maringá", "Jundiaí", "Campina Grande", "Montes Claros", "Rio Branco", "Piracicaba", "Carapicuíba", "Olinda", "Anápolis", "Cariacica", "Boa Vista", "Bauru", "Itaquaquecetuba", "Caucaia", "São Vicente", "Vitória", "Caruaru", "Blumenau", "Franca", "Ponta Grossa", "Canoas", "Petrolina", "Pelotas", "Vitória da Conquista", "Ribeirão das Neves", "Uberaba", "Paulista", "Cascavel", "Praia Grande", "Guarujá", "São José dos Pinhais", "Taubaté", "Petrópolis", "Limeira", "Santarém", "Suzano", "Mossoró", "Camaçari", "Palmas", "Taboão da Serra", "Várzea Grande", "Santa Maria"];
function onStartup() {
  // To register the plugin, uncomment the relevant type:
  DataSupplier.registerDataSupplier('public.text', 'Cidade', 'GenerateCity');
  DataSupplier.registerDataSupplier('public.text', 'Nome', 'GenerateName');
  DataSupplier.registerDataSupplier('public.text', 'Sobrenome', 'GenerateSurname');
  DataSupplier.registerDataSupplier('public.text', 'Nome e Sobrenome', 'GenerateNameSurname');
  DataSupplier.registerDataSupplier('public.text', 'Estado', 'GenerateState');
}
function onShutdown() {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers();
}
function onGenerateName(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach(function (item, index) {
    var data = nome[Math.round(Math.random() * nome.length)];
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}
function onGenerateSurname(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach(function (item, index) {
    var data = sobrenome[Math.round(Math.random() * sobrenome.length)];
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}
function onGenerateNameSurname(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach(function (item, index) {
    var data = nome[Math.round(Math.random() * nome.length)] + " " + sobrenome[Math.round(Math.random() * sobrenome.length)];
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}
function onGenerateState(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach(function (item, index) {
    var data = estado[Math.round(Math.random() * estado.length)];
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}
function onGenerateCity(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach(function (item, index) {
    var data = cidade[Math.round(Math.random() * cidade.length)];
    DataSupplier.supplyDataAtIndex(dataKey, data, index);
  });
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onStartup'] = __skpm_run.bind(this, 'onStartup');
that['onShutdown'] = __skpm_run.bind(this, 'onShutdown');
that['onGenerateNameSurname'] = __skpm_run.bind(this, 'onGenerateNameSurname');
that['onGenerateName'] = __skpm_run.bind(this, 'onGenerateName');
that['onGenerateSurname'] = __skpm_run.bind(this, 'onGenerateSurname');
that['onGenerateState'] = __skpm_run.bind(this, 'onGenerateState');
that['onGenerateCity'] = __skpm_run.bind(this, 'onGenerateCity');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=my-command.js.map