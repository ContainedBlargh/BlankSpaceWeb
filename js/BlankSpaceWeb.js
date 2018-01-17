if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'BlankSpaceWeb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'BlankSpaceWeb'.");
}
var BlankSpaceWeb = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  PageContext$BindException.prototype = Object.create(IllegalArgumentException.prototype);
  PageContext$BindException.prototype.constructor = PageContext$BindException;
  CanvasView.prototype = Object.create(AbstractView.prototype);
  CanvasView.prototype.constructor = CanvasView;
  HomeView.prototype = Object.create(AbstractView.prototype);
  HomeView.prototype.constructor = HomeView;
  function main$lambda() {
    var contentDiv = document.getElementById('Content');
    if (contentDiv != null && Kotlin.isType(contentDiv, HTMLDivElement)) {
      var homeView = new HomeView(contentDiv);
    }
     else {
      var message = 'No contentDiv found!';
      throw new Kotlin.kotlin.IllegalStateException(message.toString());
    }
  }
  function main(args) {
    println('Main function running...!');
    PageContext$Companion_getInstance().onReady_o14v8n$(main$lambda);
  }
  function HomeController(view) {
  }
  function HomeController$createNewCanvas$lambda(closure$req, this$HomeController) {
    return function (f) {
      var tmp$, tmp$_0;
      var token = closure$req.response.token;
      tmp$_0 = typeof (tmp$ = token) === 'string' ? tmp$ : Kotlin.throwCCE();
      this$HomeController.connectToCanvas_61zpoe$(tmp$_0);
    };
  }
  function HomeController$createNewCanvas$lambda_0(this$HomeController) {
    return function (f) {
      this$HomeController.handleNetworkError();
    };
  }
  HomeController.prototype.createNewCanvas = function () {
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('POST', 'http://blankspaceapi.azurewebsites.net/api/v1/canvas', true);
    req.onreadystatechange = HomeController$createNewCanvas$lambda(req, this);
    req.onerror = HomeController$createNewCanvas$lambda_0(this);
    req.send();
  };
  HomeController.prototype.handleNetworkError = function () {
    var reason = 'Handle network errors by displaying something on the main page.\nThis is PageContext territory imo.';
    throw new Kotlin.kotlin.NotImplementedError('An operation is not implemented: ' + reason);
  };
  HomeController.prototype.connectToCanvas_61zpoe$ = function (canvasToken) {
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', Config_getInstance().SERVER_ADDRESS + '/api/v1/canvas/' + canvasToken);
    var reason = 'Navigate to this canvas';
    throw new Kotlin.kotlin.NotImplementedError('An operation is not implemented: ' + reason);
  };
  HomeController.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HomeController',
    interfaces: []
  };
  function SignalRController() {
  }
  SignalRController.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SignalRController',
    interfaces: []
  };
  function Config() {
    Config_instance = this;
    this.SERVER_ADDRESS = 'http://blankspaceapi.azurewebsites.net';
  }
  Config.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Config',
    interfaces: []
  };
  var Config_instance = null;
  function Config_getInstance() {
    if (Config_instance === null) {
      new Config();
    }
    return Config_instance;
  }
  function PageContext() {
    PageContext$Companion_getInstance();
  }
  function PageContext$Companion() {
    PageContext$Companion_instance = this;
  }
  function PageContext$Companion$onReady$lambda(closure$action) {
    return function (f) {
      println('DOMContentLoaded!');
      closure$action();
    };
  }
  PageContext$Companion.prototype.onReady_o14v8n$ = function (action) {
    document.addEventListener('DOMContentLoaded', EventListener(PageContext$Companion$onReady$lambda(action)));
  };
  function PageContext$Companion$onLoad$lambda(closure$action) {
    return function (f) {
      closure$action(new PageContext());
    };
  }
  PageContext$Companion.prototype.onLoad_sk443n$ = function (action) {
    window.addEventListener('load', EventListener(PageContext$Companion$onLoad$lambda(action)));
  };
  PageContext$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PageContext$Companion_instance = null;
  function PageContext$Companion_getInstance() {
    if (PageContext$Companion_instance === null) {
      new PageContext$Companion();
    }
    return PageContext$Companion_instance;
  }
  function PageContext$BindException(message) {
    IllegalArgumentException.call(this, message);
    this.name = 'PageContext$BindException';
  }
  PageContext$BindException.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BindException',
    interfaces: [IllegalArgumentException]
  };
  PageContext.prototype.bind_3nk6j2$ = Kotlin.defineInlineFunction('BlankSpaceWeb.util.PageContext.bind_3nk6j2$', function (T_0, isT, id) {
    var tmp$, tmp$_0;
    var element = document.getElementById(id);
    if (element != null && isT(element)) {
      tmp$_0 = element;
    }
     else {
      throw new _.util.PageContext.BindException('No element with id: ' + id + ' bindable to type ' + ((tmp$ = Kotlin.getKClass(T_0).simpleName) != null ? tmp$ : Kotlin.throwNPE()) + '!');
    }
    return tmp$_0;
  });
  PageContext.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PageContext',
    interfaces: []
  };
  function AbstractView(div) {
    this.div = div;
    this.initialize_h4b71y$_0();
  }
  function AbstractView$initialize$lambda(this$AbstractView) {
    return function (pageContext) {
      this$AbstractView.init_eqtm98$(pageContext);
    };
  }
  AbstractView.prototype.initialize_h4b71y$_0 = function () {
    println('Inserting html by calling abstract method!');
    this.div.innerHTML = this.markup();
    println('Binding markup with abstract method!');
    PageContext$Companion_getInstance().onLoad_sk443n$(AbstractView$initialize$lambda(this));
  };
  AbstractView.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbstractView',
    interfaces: []
  };
  function CanvasView(div, signalRController) {
    AbstractView.call(this, div);
    this.signalRController = signalRController;
    this.canvas_0 = this.canvas_0;
  }
  CanvasView.prototype.markup = function () {
    return '\n            <div id="CanvasContent">\n                <canvas id="Canvas"><\/canvas>\n            <\/div>\n            ';
  };
  CanvasView.prototype.init_eqtm98$ = function (pageContext) {
    var tmp$, tmp$_0;
    var element = document.getElementById('Canvas');
    if (element != null && Kotlin.isType(element, HTMLCanvasElement)) {
      tmp$_0 = element;
    }
     else {
      throw new _.util.PageContext.BindException('No element with id: ' + 'Canvas' + ' bindable to type ' + ((tmp$ = Kotlin.getKClass(HTMLCanvasElement).simpleName) != null ? tmp$ : Kotlin.throwNPE()) + '!');
    }
    this.canvas_0 = tmp$_0;
  };
  CanvasView.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CanvasView',
    interfaces: [AbstractView]
  };
  function HomeView(div) {
    AbstractView.call(this, div);
    this.controller_0 = new HomeController(this);
    this.tokenField_0 = this.tokenField_0;
    this.createButton_0 = this.createButton_0;
    this.connectButton_0 = this.connectButton_0;
  }
  HomeView.prototype.markup = function () {
    println('Setting up initial markup for HomeView!');
    return '\n            <div id="HomeContent">\n                <div>\n                    <label id="TokenLabel">Token:<\/label>\n                    <input type="text" id="TokenField" maxLength="4"><\/input>\n                <\/div>\n                <div>\n                    <button id="CreateButton">Create new Canvas<\/button>\n                    <button id="ConnectButton">Connect to Canvas<\/button>\n                <\/div>\n            <\/div>\n            ';
  };
  function HomeView$init$lambda(this$HomeView) {
    return function (it) {
      this$HomeView.tokenField_0.value = this$HomeView.tokenField_0.value.toUpperCase();
    };
  }
  function HomeView$init$lambda_0(this$HomeView) {
    return function (f) {
      println('CreateButton fired!');
      this$HomeView.controller_0.createNewCanvas();
    };
  }
  function HomeView$init$lambda_1(this$HomeView) {
    return function (f) {
      println('ConnectButton fired!');
      this$HomeView.handleConnectButtonClick_0();
    };
  }
  HomeView.prototype.init_eqtm98$ = function (pageContext) {
    println('Binding HomeView!');
    var id = 'TokenField';
    var tmp$, tmp$_0;
    var element = document.getElementById(id);
    if (element != null && Kotlin.isType(element, HTMLInputElement)) {
      tmp$_0 = element;
    }
     else {
      throw new _.util.PageContext.BindException('No element with id: ' + id + ' bindable to type ' + ((tmp$ = Kotlin.getKClass(HTMLInputElement).simpleName) != null ? tmp$ : Kotlin.throwNPE()) + '!');
    }
    this.tokenField_0 = tmp$_0;
    var id_0 = 'CreateButton';
    var tmp$_1, tmp$_2;
    var element_0 = document.getElementById(id_0);
    if (element_0 != null && Kotlin.isType(element_0, HTMLButtonElement)) {
      tmp$_2 = element_0;
    }
     else {
      throw new _.util.PageContext.BindException('No element with id: ' + id_0 + ' bindable to type ' + ((tmp$_1 = Kotlin.getKClass(HTMLButtonElement).simpleName) != null ? tmp$_1 : Kotlin.throwNPE()) + '!');
    }
    this.createButton_0 = tmp$_2;
    var id_1 = 'ConnectButton';
    var tmp$_3, tmp$_4;
    var element_1 = document.getElementById(id_1);
    if (element_1 != null && Kotlin.isType(element_1, HTMLButtonElement)) {
      tmp$_4 = element_1;
    }
     else {
      throw new _.util.PageContext.BindException('No element with id: ' + id_1 + ' bindable to type ' + ((tmp$_3 = Kotlin.getKClass(HTMLButtonElement).simpleName) != null ? tmp$_3 : Kotlin.throwNPE()) + '!');
    }
    this.connectButton_0 = tmp$_4;
    this.tokenField_0.addEventListener('input', EventListener(HomeView$init$lambda(this)));
    this.createButton_0.onclick = HomeView$init$lambda_0(this);
    this.connectButton_0.onclick = HomeView$init$lambda_1(this);
  };
  HomeView.prototype.handleConnectButtonClick_0 = function () {
    var token = this.tokenField_0.value;
    println('Attempting to connect to ' + token + '...');
    this.controller_0.connectToCanvas_61zpoe$(token);
    println('Connected!');
  };
  HomeView.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HomeView',
    interfaces: [AbstractView]
  };
  _.main_kand9s$ = main;
  var package$controller = _.controller || (_.controller = {});
  package$controller.HomeController = HomeController;
  var package$signalling = _.signalling || (_.signalling = {});
  package$signalling.SignalRController = SignalRController;
  var package$util = _.util || (_.util = {});
  Object.defineProperty(package$util, 'Config', {
    get: Config_getInstance
  });
  Object.defineProperty(PageContext, 'Companion', {
    get: PageContext$Companion_getInstance
  });
  PageContext.BindException = PageContext$BindException;
  package$util.PageContext = PageContext;
  var package$view = _.view || (_.view = {});
  package$view.AbstractView = AbstractView;
  $$importsForInline$$.BlankSpaceWeb = _;
  package$view.CanvasView = CanvasView;
  package$view.HomeView = HomeView;
  main([]);
  Kotlin.defineModule('BlankSpaceWeb', _);
  return _;
}(typeof BlankSpaceWeb === 'undefined' ? {} : BlankSpaceWeb, kotlin);

//# sourceMappingURL=BlankSpaceWeb.js.map
