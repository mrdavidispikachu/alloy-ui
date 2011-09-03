AUI.add("aui-dialog",function(o){var j=o.Lang,I=j.isBoolean,z=j.isArray,N=j.isObject,C=o.WidgetStdMod,R=function(A){return parseInt(A,10)||0;},t="",S="boundingBox",V="button",c="buttons",T="close",O="closethick",J="constrain2view",d="dd",P="default",U="destroyOnClose",v="dialog",w=".",l="draggable",B="dragConfig",k="dragInstance",g="footerContent",Q="hd",H="height",F="icon",b="icons",r="io",u="loading",y="modal",W="proxy",e="resizable",E="resizableConfig",m="resizableInstance",D="stack",i="useARIA",M="viewportRegion",f="width",p="resize:resize",K="resize:end",h=o.getClassName,x=h(v),a=h(v,Q),s=h(F,u),n=h(d),G=document.createTextNode("");var q=function(A){if(!o.DialogMask){o.DialogMask=new o.OverlayMask().render();}};o.mix(q,{NAME:v,ATTRS:{bodyContent:{value:G},buttons:{value:[],validator:z},close:{value:true},constrain2view:{setter:"_setConstrain2view",value:false,validator:I},destroyOnClose:{value:false,validator:I},draggable:{value:true},dragConfig:{setter:function(L){var A=this;return o.merge({bubbleTargets:A,node:A.get(S),handles:[w+a]},L||{});},writeOnce:true,value:{},validator:N},dragInstance:{setter:"_setDragInstance",value:null},modal:{lazyAdd:false,setter:"_setModal",validator:I,value:false},resizableConfig:{setter:function(L){var A=this;return o.merge({bubbleTargets:A,handles:"r,br,b",minHeight:100,minWidth:200,constrain2view:true,node:A.get(S),proxy:true,after:{end:o.bind(A._syncResizableDimentions,A),resize:o.bind(A._syncResizableDimentions,A)}},L||{});},writeOnce:true,value:{},validator:N},resizableInstance:{setter:"_setResizableInstance",value:null},resizable:{value:true},stack:{value:true,setter:function(A){return this._setStack(A);},validator:I},strings:{value:{close:"Close dialog"}}}});q.prototype={initializer:function(X){var A=this;var Y=A.get(b);var aa=A.get(T);var Z=A.get(c);if(Z&&Z.length&&!A.get(g)){A.set(g,G);}if(aa){var L={icon:O,id:O,handler:{fn:A.close,context:A},title:A.get("strings").close};if(Y){Y.push(L);}A.set(b,Y);}A.publish("close",{defaultFn:A._close});A.after("constrain2viewChange",A._afterConstrain2viewChange,A);A.after("draggableChange",A._afterDraggableChange,A);A.after("dragInstanceChange",A._afterDragInstanceChange,A);A.after("render",A._afterRenderer);A.after("resizableChange",A._afterResizableChange,A);A.after("resizableInstanceChange",A._afterResizableInstanceChange,A);},bindUI:function(){var A=this;A._bindLazyComponents();A.on("visibleChange",A._afterSetVisible);},syncUI:function(){var A=this;if(A.get(i)){A.plug(o.Plugin.Aria,{attributes:{visible:{ariaName:"hidden",format:function(L){return !L;}}}});}},destructor:function(){var A=this;var L=A.get(S);o.Event.purgeElement(L,true);o.DialogManager.remove(A);},alignToViewport:function(X,L){var A=this;var Y=o.getDoc().get(M);A.move([Y.left+R(X),Y.top+R(L)]);},_bindLazyComponents:function(){var A=this;var L=A.get(S);L.on("mouseenter",o.bind(A._initLazyComponents,A));},close:function(){var A=this;A.fire("close");},_afterRenderer:function(L){var A=this;A._initButtons();A.get(D);A.get(r);},_close:function(){var A=this;if(A.get(U)){A.destroy();}else{A.hide();}if(A.get(y)){o.DialogMask.hide();}},_initButtons:function(){var A=this;var X=A.get(c);if(X.length){var L=new o.Toolbar({children:X});L._DEFAULT_CONTEXT=A;L.render(A.footerNode);A.fire("contentUpdate");A.buttons=L;}},_initLazyComponents:function(){var A=this;A.get(k);A.get(m);},_setDefaultARIAValues:function(){var A=this;if(!A.get(i)){return;}A.aria.setRole("dialog",A.get(S));if(A.icons){var L=A.icons.item(O);if(L){A.aria.setAttribute("controls",A.get("id"),L.get(S));}}},_setDragInstance:function(L){var A=this;if(A.get(l)){L=new o.DD.Drag(A.get(B));A._updateDDConstrain2view(L);}return L;},_setModal:function(L){var A=this;if(L){o.DialogMask.show();}else{o.DialogMask.hide();}return L;},_setResizableInstance:function(L){var A=this;if(A.get(e)){L=new o.Resize(A.get(E));}return L;},_setStack:function(L){var A=this;if(L){o.DialogManager.register(A);}else{o.DialogManager.remove(A);}return L;},_syncResizableDimentions:function(X){var A=this;var L=X.type;var Y=X.info;if((L===K)||((L===p)&&!X.currentTarget.get(W))){A.set(H,Y.offsetHeight);A.set(f,Y.offsetWidth);}},_updateDDConstrain2view:function(X){var A=this;var L=A.get(J);if(L){X.plug(o.Plugin.DDConstrained,{constrain2view:L});}else{X.unplug(o.Plugin.DDConstrained);}},_afterConstrain2viewChange:function(L){var A=this;A._updateDDConstrain2view(A.get(k));},_afterDraggableChange:function(L){var A=this;A.set(k,null);},_afterDragInstanceChange:function(L){var A=this;if(L.prevVal){L.prevVal.destroy();}},_afterResizableChange:function(L){var A=this;A.set(m,null);},_afterResizableInstanceChange:function(L){var A=this;if(L.prevVal){L.prevVal.destroy();}},_afterSetVisible:function(L){var A=this;if(A.get(y)){if(L.newVal){o.DialogMask.show();}else{o.DialogMask.hide();}}},_uiHandles:[]};o.Dialog=o.Component.create({NAME:v,EXTENDS:o.Panel,AUGMENTS:[q,o.WidgetPosition,o.WidgetStack,o.WidgetPositionAlign,o.WidgetPositionConstrain]});o.DialogManager=new o.OverlayManager({zIndexBase:1000});o.mix(o.DialogManager,{findByChild:function(A){return o.Widget.getByNode(o.one(A).ancestor(w+x,true));},closeByChild:function(A){return o.DialogManager.findByChild(A).close();},refreshByChild:function(L){var A=o.DialogManager.findByChild(L);if(A&&A.io){A.io.start();}}});},"@VERSION@",{requires:["aui-panel","dd-constrain","aui-button-item","aui-overlay-manager","aui-overlay-mask","aui-io-plugin","aui-resize"],skinnable:true});