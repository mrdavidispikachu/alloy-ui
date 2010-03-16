;(function() {
	var PATH_BASE = YUI.config.base;
	var PATH_JAVASCRIPT = PATH_BASE;
	var PATH_THEME_ROOT = PATH_BASE + 'themes/base/css/';
	var PATH_THEME_IMAGES = PATH_THEME_ROOT + '../images/';

	window.AUI = {
		defaults: {
			chart: {
				swfURL: 'assets/chart.swf'
			},

			classNamePrefix: 'aui',

			filter: 'raw',

			io: {
				method: 'GET'
			},

			modules: {
				'aui-autocomplete': {skinnable:true, requires:['aui-base','aui-overlay-base','datasource','dataschema','aui-form-combobox']},
				'aui-base': {requires:['aui-node','aui-component','aui-delayed-task','event','oop','widget-css'], skinnable:false},
				'aui-calendar': {submodules: {'aui-calendar-datepicker-select': {skinnable:true, requires:['aui-calendar-base','aui-tool-item']}, 'aui-calendar-base': {skinnable:true, requires:['aui-overlay-context','datatype-date','widget-locale']} }, skinnable:true, use:['aui-calendar-base','aui-calendar-datepicker-select']},
				'aui-char-counter': {skinnable:false, requires:['aui-base','aui-event-input']},
				'aui-chart': {skinnable:false, requires:['datasource','aui-swf','json']},
				'aui-color-picker': {skinnable:true, requires:['aui-overlay-context','dd','slider','substitute','aui-tool-item','aui-form','aui-panel']},
				'aui-component': {skinnable:false, requires:['widget']},
				'aui-data-set': {skinnable:false, requires:['oop','collection','base']},
				'aui-datatype': {skinnable:false, requires:['aui-base']},
				'aui-delayed-task': {skinnable:false},
				'aui-dialog': {skinnable:true, requires:['aui-panel','dd-constrain','aui-tool-item','aui-overlay-manager','aui-overlay-mask','aui-io-plugin','aui-resize']},
				'aui-editable': {skinnable:true, requires:['aui-base','aui-form-combobox']},
				'aui-event': {submodules: {'aui-event-input': {requires:['aui-base']} }, use:['aui-event-input'], skinnable:false},
				'aui-form': {submodules: {'aui-form-textfield': {requires:['aui-form-field']}, 'aui-form-textarea': {skinnable:true, requires:['aui-form-textfield']}, 'aui-form-manager': {requires:['aui-base','substitute']}, 'aui-form-field': {requires:['aui-base','aui-component','substitute']}, 'aui-form-combobox': {skinnable:true, requires:['aui-form-textarea','aui-tool-set']}, 'aui-form-base': {requires:['aui-base','aui-data-set','aui-form-field','querystring-parse']} }, use:['aui-form-base','aui-form-combobox','aui-form-field','aui-form-manager','aui-form-textarea','aui-form-textfield'], skinnable:false},
				'aui-image-viewer': {submodules: {'aui-image-viewer-gallery': {skinnable:true, requires:['aui-image-viewer-base','aui-paginator','aui-tool-set']}, 'aui-image-viewer-base': {skinnable:true, requires:['anim','aui-overlay-mask','substitute']} }, use:['aui-image-viewer-base','aui-image-viewer-gallery'], skinnable:true},
				'aui-io': {submodules: {'aui-io-plugin': {requires:['aui-overlay-base','aui-parse-content','aui-io-request','aui-overlay-loading']}, 'aui-io-request': {requires:['aui-base','io','json','plugin']} }, use:['aui-io-request','aui-io-plugin'], skinnable:false},
				'aui-live-search': {skinnable:false, requires:['aui-base']},
				'aui-nested-list': {skinnable:false, requires:['aui-base','dd']},
				'aui-node': {submodules: {'aui-node-fx': {requires:['aui-base','anim','anim-node-plugin']}, 'aui-node-html5': {requires:['collection','aui-base']}, 'aui-node-base': {requires:['aui-base']} }, use:['aui-node-base','aui-node-html5','aui-node-fx'], skinnable:false},
				'aui-overlay': {submodules: {'aui-overlay-mask': {skinnable:true, requires:['aui-base','aui-overlay-base','event-resize']}, 'aui-overlay-manager': {requires:['aui-base','aui-overlay-base','overlay','plugin']}, 'aui-overlay-loading': {skinnable:true, requires:['aui-overlay-mask','plugin','substitute']}, 'aui-overlay-context-panel': {skinnable:true, requires:['aui-overlay-context','anim']}, 'aui-overlay-context': {requires:['aui-overlay-manager','aui-delayed-task']}, 'aui-overlay-base': {requires:['aui-component','widget-position','widget-stack','widget-position-align','widget-stdmod']} }, use:['aui-overlay-base','aui-overlay-context','aui-overlay-context-panel','aui-overlay-loading','aui-overlay-manager','aui-overlay-mask'], skinnable:true},
				'aui-paginator': {skinnable:true, requires:['aui-base','substitute']},
				'aui-panel': {skinnable:true, requires:['aui-component','widget-stdmod','aui-tool-set']},
				'aui-parse-content': {skinnable:false, requires:['async-queue','aui-base','io','plugin']},
				'aui-portal-layout': {skinnable:true, requires:['aui-base','dd']},
				'aui-rating': {skinnable:true, requires:['aui-base']},
				'aui-resize': {skinnable:true, requires:['aui-base','dd','substitute']},
				'aui-sortable': {skinnable:true, requires:['aui-base','dd']},
				'aui-state-interaction': {skinnable:false, requires:['aui-base','plugin']},
				'aui-swf': {skinnable:false, requires:['aui-base','querystring-stringify-simple']},
				'aui-tabs': {skinnable:true, requires:['aui-component','aui-state-interaction']},
				'aui-textboxlist': {skinnable:true, requires:['anim-node-plugin','aui-autocomplete','node-focusmanager']},
				'aui-tool': {submodules: {'aui-tool-set': {skinnable:true, requires:['aui-data-set','aui-tool-item']}, 'aui-tool-item': {requires:['aui-base','aui-state-interaction']} }, use:['aui-tool-item','aui-tool-set'], skinnable:true},
				'aui-tooltip': {skinnable:true, requires:['aui-overlay-context-panel']},
				'aui-tree': {submodules: {'aui-tree-view': {skinnable:true, requires:['aui-tree-node','dd']}, 'aui-tree-node': {skinnable:false, requires:['aui-tree-data','io','json']}, 'aui-tree-data': {skinnable:false, requires:['aui-base']} }, use:['aui-tree-data', 'aui-tree-node', 'aui-tree-view'], skinnable:true}
			},

			paths: {
				images: PATH_THEME_IMAGES
			}
		}
	}
})();
;(function() {

	var toString = Object.prototype.toString;

	var isFunction = function(obj) {
		return toString.call(obj) === "[object Function]";
	};

	// Based on jQuery.extend
	var apply = function() {
		var target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false,
			options;

		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			i = 2;
		}

		if (typeof target !== 'object' && !isFunction(target)) {
			target = {};
		}

		if (length == i) {
			target = this;
			--i;
		}

		for (; i < length; i++) {
			if ((options = arguments[i]) != null) {
				for (var name in options) {
					var src = target[name],
						copy = options[name];

					if (target === copy) {
						continue;
					}

					if (deep && copy && typeof copy === 'object' && !copy.nodeType) {
						target[name] = apply(
							deep,
							src || (copy.length != null ? [] : {}),
							copy
						);
					}

					else if (copy !== undefined) {
						target[name] = copy;
					}

				}
			}
		}

		return target;
	};

	/*
	 * Alloy JavaScript Library v@VERSION@
	 * http://alloyui.com/
	 *
	 * Copyright (c) 2009 Liferay Inc.
	 * Licensed under the MIT license.
	 * http://alloyui.com/License
	 *
	 * Eduardo Lundgren (eduardo.lundgren@liferay.com)
	 * Nate Cavanaugh (nate.cavanaugh@liferay.com)
	 *
	 * Date: @DATE@
	 * Revision: @REVISION@
	 */

	window.AUI = window.AUI || {};

	var defaults = AUI.defaults || {};

	apply(
		YUI.prototype,
		{
			apply: apply,
			ready: function() {
				var instance = this;

				var slice = Array.prototype.slice;
				var args = slice.call(arguments, 0), index = args.length - 1;

				var fn = args[index];

				var modules = slice.call(arguments, 0, index);

				modules.push('event');

				modules.push(
					function(instance) {
						var args = arguments;

						instance.on(
							'domready',
							function() {
								fn.apply(this, args);
							}
						);
					}
				);

				instance.use.apply(instance, modules);
			}
		}
	);

	var ALLOY = YUI(apply({}, defaults));

	ALLOY.Env._guidp = ['aui', ALLOY.version, ALLOY.Env._yidx, new Date().getTime()].join('-').replace(/\./g, '-');

	var originalConfig = ALLOY.config;

	ALLOY.config = ALLOY.merge(originalConfig, AUI.defaults);

	AUI = function(o) {
		var instance = this;

		if (o || instance instanceof AUI) {
			return YUI(ALLOY.merge(ALLOY.config, o));
		}

		return ALLOY;
	};

	var UA = ALLOY.UA;

	apply(
		AUI,
		YUI,
		{
			__version: '@VERSION',

			apply: apply,

			defaults: defaults,

			html5shiv: function(frag) {
				var instance = this;
				var doc = frag || document;

				if (UA.ie && doc && doc.createElement) {
					var elements = AUI.HTML5_ELEMENTS, length = elements.length;

					while (length--) {
						doc.createElement(elements[length]);
					}
				}

				return frag;
			},

			setDefaults: function(defaults) {
				var instance = this;

				ALLOY.config = ALLOY.merge(AUI.defaults, defaults);
			},

			HTML5_ELEMENTS: 'abbr,article,aside,audio,canvas,details,figcaption,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,summary,time,video'.split(',')
		}
	);

	/*
	* HTML5 Compatability for IE
	*/

	AUI.html5shiv();

	/*
		UA extensions
	*/

	var p = navigator.platform;
	var u = navigator.userAgent;
	var b = /(Firefox|Opera|Safari|KDE|iCab|Flock|IE)/.exec(u);
	var os = /(Win|Mac|Linux|iPhone|Sun|Solaris)/.exec(p);
	var versionDefaults = [0,0];

	b = (!b || !b.length) ? (/(Mozilla)/.exec(u) || ['']) : b;
	os = (!os || !os.length) ? [''] : os;

	apply(
		UA,
		{
			gecko: /Gecko/.test(u) && !/like Gecko/.test(u),
			webkit: /WebKit/.test(u),

			aol: /America Online Browser/.test(u),
			camino: /Camino/.test(u),
			firefox: /Firefox/.test(u),
			flock: /Flock/.test(u),
			icab: /iCab/.test(u),
			konqueror: /KDE/.test(u),
			mozilla: /mozilla/.test(u),
			ie: /MSIE/.test(u),
			netscape: /Netscape/.test(u),
			opera: /Opera/.test(u),
			safari: /Safari/.test(u),
			browser: b[0].toLowerCase(),

			win: /Win/.test(p),
			mac: /Mac/.test(p),
			linux: /Linux/.test(p),
			iphone: /iPhone/.test(p),
			sun: /Solaris|SunOS/.test(p),
			os: os[0].toLowerCase(),

			platform: p,
			agent: u
		}
	);

	UA.version = {
		string: ''
	};

	if (UA.ie) {
		UA.version.string = (/MSIE ([^;]+)/.exec(u) || versionDefaults)[1];
	}
	else if (UA.firefox) {
		UA.version.string = (/Firefox\/(.+)/.exec(u) || versionDefaults)[1];
	}
	else if (UA.safari) {
		UA.version.string = (/Version\/([^\s]+)/.exec(u) || versionDefaults)[1];
	}
	else if (UA.opera) {
		UA.version.string = (/Opera\/([^\s]+)/.exec(u) || versionDefaults)[1];
	}

	UA.version.number = parseFloat(UA.version.string) || versionDefaults[0];
	UA.version.major = (/([^\.]+)/.exec(UA.version.string) || versionDefaults)[1];

	UA[UA.browser + UA.version.major] = true;

	UA.renderer = '';

	if (UA.ie) {
		UA.renderer = 'trident';
	}
	else if (UA.gecko) {
		UA.renderer = 'gecko';
	}
	else if (UA.webkit) {
		UA.renderer = 'webkit';
	}
	else if (UA.opera) {
		UA.renderer = 'presto';
	}

	/*
	* Browser selectors
	*/

	var selectors = [
		UA.renderer,
		UA.browser,
		UA.browser + UA.version.major,
		UA.os,
		'js'
	];

	if (UA.os == 'macintosh') {
		selectors.push('mac');
	}
	else if (UA.os == 'windows') {
		selectors.push('win');
	}

	if (UA.mobile) {
		selectors.push('mobile');
	}

	if (UA.secure) {
		selectors.push('secure');
	}

	UA.selectors = selectors.join(' ');

	document.getElementsByTagName('html')[0].className += ' ' + UA.selectors;
})();
AUI.add('aui-base', function(A) {
A.mix(A.Array, {
	remove: function(a, from, to) {
	  var rest = a.slice((to || from) + 1 || a.length);
	  a.length = (from < 0) ? (a.length + from) : from;

	  return a.push.apply(a, rest);
	},

	removeItem: function(a, item) {
		var index = A.Array.indexOf(a, item);

		return A.Array.remove(a, index);
	}
});

A.mix(
	A.Lang,
	{
		emptyFn: function() {},
		emptyFnFalse: function() {
			return false;
		},
		emptyFnTrue: function() {
			return true;
		},

		// Courtesy of: http://simonwillison.net/2006/Jan/20/escape/
		escapeRegEx: function(str) {
			return str.replace(/([.*+?^$(){}|[\]\/\\])/g, '\\$1');
		}
	}
);

}, '@VERSION@' ,{requires:['aui-node','aui-component','aui-delayed-task','event','oop','widget-css'], skinnable:false});