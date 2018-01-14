if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'BlankSpaceWeb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'BlankSpaceWeb'.");
}
var BlankSpaceWeb = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var NotImplementedError = Kotlin.kotlin.NotImplementedError;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var throwUPAE = Kotlin.throwUPAE;
  PageContext$BindException.prototype = Object.create(IllegalArgumentException.prototype);
  PageContext$BindException.prototype.constructor = PageContext$BindException;
  CanvasView.prototype = Object.create(AbstractView.prototype);
  CanvasView.prototype.constructor = CanvasView;
  HomeView.prototype = Object.create(AbstractView.prototype);
  HomeView.prototype.constructor = HomeView;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException;
  function main$lambda() {
    var contentDiv = document.getElementById('Content');
    if (contentDiv != null && Kotlin.isType(contentDiv, HTMLDivElement)) {
      var homeView = new HomeView(contentDiv);
    }
     else {
      throw new IllegalStateException_init('No contentDiv found!'.toString());
    }
    return Unit;
  }
  function main(args) {
    println('Main function running...!');
    PageContext$Companion_getInstance().onReady_o14v8n$(main$lambda);
  }
  function HomeController(view) {
  }
  HomeController.prototype.createNewCanvas = function () {
    throw new NotImplementedError('Should create a new canvas with the API and then display this canvas.');
  };
  HomeController.prototype.connectToCanvas_61zpoe$ = function (canvasToken) {
    throw new NotImplementedError('Should connect to a canvas by setting up a new canvas page.');
  };
  HomeController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HomeController',
    interfaces: []
  };
  function SignalRController() {
  }
  SignalRController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SignalRController',
    interfaces: []
  };
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
      return Unit;
    };
  }
  PageContext$Companion.prototype.onReady_o14v8n$ = function (action) {
    document.addEventListener('DOMContentLoaded', EventListener(PageContext$Companion$onReady$lambda(action)));
  };
  function PageContext$Companion$onLoad$lambda(closure$action) {
    return function (f) {
      closure$action(new PageContext());
      return Unit;
    };
  }
  PageContext$Companion.prototype.onLoad_sk443n$ = function (action) {
    window.addEventListener('load', EventListener(PageContext$Companion$onLoad$lambda(action)));
  };
  PageContext$Companion.$metadata$ = {
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
    simpleName: 'BindException',
    interfaces: [IllegalArgumentException]
  };
  PageContext.prototype.bind_3nk6j2$ = defineInlineFunction('BlankSpaceWeb.util.PageContext.bind_3nk6j2$', wrapFunction(function () {
    var println = Kotlin.kotlin.io.println_s8jyv4$;
    var getKClass = Kotlin.getKClass;
    var ensureNotNull = Kotlin.ensureNotNull;
    var PageContext$PageContext$BindException_init = _.util.PageContext.BindException;
    return function (T_0, isT, id) {
      var tmp$;
      println('F: ' + id);
      var element = document.getElementById(id);
      println(element);
      if (element != null && isT(element)) {
        tmp$ = element;
      }
       else
        throw new PageContext$PageContext$BindException_init('No element with id: ' + id + ' bindable to type ' + ensureNotNull(getKClass(T_0).simpleName) + '!');
      return tmp$;
    };
  }));
  PageContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageContext',
    interfaces: []
  };
  function AbstractView(div) {
    this.div = div;
    this.initialize_z7ldv0$_0();
  }
  function AbstractView$initialize$lambda(this$AbstractView) {
    return function (pageContext) {
      this$AbstractView.init_eqtm98$(pageContext);
      return Unit;
    };
  }
  AbstractView.prototype.initialize_z7ldv0$_0 = function () {
    println('Inserting html by calling abstract method!');
    this.div.innerHTML = this.initialMarkup();
    println('Binding markup with abstract method!');
    PageContext$Companion_getInstance().onLoad_sk443n$(AbstractView$initialize$lambda(this));
  };
  AbstractView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractView',
    interfaces: []
  };
  function CanvasView(div, signalRController) {
    AbstractView.call(this, div);
    this.signalRController = signalRController;
    this.canvas_e8ag9y$_0 = this.canvas_e8ag9y$_0;
  }
  Object.defineProperty(CanvasView.prototype, 'canvas_0', {
    get: function () {
      if (this.canvas_e8ag9y$_0 == null)
        return throwUPAE('canvas');
      return this.canvas_e8ag9y$_0;
    },
    set: function (canvas) {
      this.canvas_e8ag9y$_0 = canvas;
    }
  });
  CanvasView.prototype.initialMarkup = function () {
    return '\n            <div id="CanvasContent">\n                <canvas id="Canvas"><\/canvas>\n            <\/div>\n            ';
  };
  var getKClass = Kotlin.getKClass;
  var ensureNotNull = Kotlin.ensureNotNull;
  CanvasView.prototype.init_eqtm98$ = function (pageContext) {
    var tmp$;
    println('F: ' + 'Canvas');
    var element = document.getElementById('Canvas');
    println(element);
    if (element != null && Kotlin.isType(element, HTMLCanvasElement)) {
      tmp$ = element;
    }
     else
      throw new PageContext$BindException('No element with id: ' + 'Canvas' + ' bindable to type ' + ensureNotNull(getKClass(HTMLCanvasElement).simpleName) + '!');
    this.canvas_0 = tmp$;
  };
  CanvasView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CanvasView',
    interfaces: [AbstractView]
  };
  function HomeView(div) {
    AbstractView.call(this, div);
    this.controller_0 = new HomeController(this);
    this.tokenField_gv17vs$_0 = this.tokenField_gv17vs$_0;
    this.createButton_5xjqxh$_0 = this.createButton_5xjqxh$_0;
    this.connectButton_izkdwh$_0 = this.connectButton_izkdwh$_0;
  }
  HomeView.prototype.initialMarkup = function () {
    println('Setting up initial markup for HomeView!');
    return '\n            <div id="HomeContent">\n                <div>\n                    <label id="TokenLabel">Token:<\/label>\n                    <input type="text" id="TokenField" maxLength="4"><\/input>\n                <\/div>\n                <div>\n                    <button id="CreateButton">Create new Canvas<\/button>\n                    <button id="ConnectButton">Connect to Canvas<\/button>\n                <\/div>\n            <\/div>\n            ';
  };
  Object.defineProperty(HomeView.prototype, 'tokenField_0', {
    get: function () {
      if (this.tokenField_gv17vs$_0 == null)
        return throwUPAE('tokenField');
      return this.tokenField_gv17vs$_0;
    },
    set: function (tokenField) {
      this.tokenField_gv17vs$_0 = tokenField;
    }
  });
  Object.defineProperty(HomeView.prototype, 'createButton_0', {
    get: function () {
      if (this.createButton_5xjqxh$_0 == null)
        return throwUPAE('createButton');
      return this.createButton_5xjqxh$_0;
    },
    set: function (createButton) {
      this.createButton_5xjqxh$_0 = createButton;
    }
  });
  Object.defineProperty(HomeView.prototype, 'connectButton_0', {
    get: function () {
      if (this.connectButton_izkdwh$_0 == null)
        return throwUPAE('connectButton');
      return this.connectButton_izkdwh$_0;
    },
    set: function (connectButton) {
      this.connectButton_izkdwh$_0 = connectButton;
    }
  });
  function HomeView$init$lambda(this$HomeView) {
    return function (f) {
      println('CreateButton fired!');
      this$HomeView.controller_0.createNewCanvas();
      return Unit;
    };
  }
  function HomeView$init$lambda_0(this$HomeView) {
    return function (f) {
      println('ConnectButton fired!');
      this$HomeView.handleConnectButtonClick_0();
      return Unit;
    };
  }
  HomeView.prototype.init_eqtm98$ = function (pageContext) {
    println('Binding HomeView!');
    var id = 'TokenField';
    var tmp$;
    println('F: ' + id);
    var element = document.getElementById(id);
    println(element);
    if (element != null && Kotlin.isType(element, HTMLInputElement)) {
      tmp$ = element;
    }
     else
      throw new PageContext$BindException('No element with id: ' + id + ' bindable to type ' + ensureNotNull(getKClass(HTMLInputElement).simpleName) + '!');
    this.tokenField_0 = tmp$;
    var id_0 = 'CreateButton';
    var tmp$_0;
    println('F: ' + id_0);
    var element_0 = document.getElementById(id_0);
    println(element_0);
    if (element_0 != null && Kotlin.isType(element_0, HTMLButtonElement)) {
      tmp$_0 = element_0;
    }
     else
      throw new PageContext$BindException('No element with id: ' + id_0 + ' bindable to type ' + ensureNotNull(getKClass(HTMLButtonElement).simpleName) + '!');
    this.createButton_0 = tmp$_0;
    var id_1 = 'ConnectButton';
    var tmp$_1;
    println('F: ' + id_1);
    var element_1 = document.getElementById(id_1);
    println(element_1);
    if (element_1 != null && Kotlin.isType(element_1, HTMLButtonElement)) {
      tmp$_1 = element_1;
    }
     else
      throw new PageContext$BindException('No element with id: ' + id_1 + ' bindable to type ' + ensureNotNull(getKClass(HTMLButtonElement).simpleName) + '!');
    this.connectButton_0 = tmp$_1;
    this.createButton_0.onclick = HomeView$init$lambda(this);
    this.connectButton_0.onclick = HomeView$init$lambda_0(this);
  };
  HomeView.prototype.handleConnectButtonClick_0 = function () {
    var token = this.tokenField_0.value;
    println('Attempting to connect to ' + token + '...');
    this.controller_0.connectToCanvas_61zpoe$(token);
    println('Connected!');
  };
  HomeView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HomeView',
    interfaces: [AbstractView]
  };
  _.main_kand9s$ = main;
  var package$controller = _.controller || (_.controller = {});
  package$controller.HomeController = HomeController;
  var package$signalling = _.signalling || (_.signalling = {});
  package$signalling.SignalRController = SignalRController;
  Object.defineProperty(PageContext, 'Companion', {
    get: PageContext$Companion_getInstance
  });
  PageContext.BindException = PageContext$BindException;
  var package$util = _.util || (_.util = {});
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
