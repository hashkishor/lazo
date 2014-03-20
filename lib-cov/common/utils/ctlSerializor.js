/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['common/utils/ctlSerializor.js']) {
  _$jscoverage['common/utils/ctlSerializor.js'] = [];
  _$jscoverage['common/utils/ctlSerializor.js'][1] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][3] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][5] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][8] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][13] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][14] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][15] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][16] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][17] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][18] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][19] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][20] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][22] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][33] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][34] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][35] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][38] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][39] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][45] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][46] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][47] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][48] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][49] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][51] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][53] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][56] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][57] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][59] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][60] = 0;
  _$jscoverage['common/utils/ctlSerializor.js'][63] = 0;
}
_$jscoverage['common/utils/ctlSerializor.js'].source = ["define(['underscore', 'lazoModel'], function (_, Model) {","","    'use strict';","","    return {","","        serialize: function (ctl, rootCtx) {","            var serObj = {},","                viewRef,","                omit = rootCtx ? ['cookies', '_rawReq', 'models', 'collections'] :","                    ['cookies', '_rawReq', 'models', 'collections', '_rootCtx'];","","            serObj.cid = ctl.cid;","            serObj.ctx = _.omit(ctl.ctx, omit);","            serObj.ctx.models = {};","            serObj.ctx.collections = {};","            serObj.isBase = ctl.isBase;","            serObj.name = ctl.name;","            if (ctl.currentView &amp;&amp; ctl.currentView.options) {","                viewRef = ctl.currentView.options.ref;","","                serObj.currentView = {","                    cid: ctl.currentView.cid,","                    name: ctl.currentView.name,","                    ref: ctl.currentView.ref,","                    templatePath: ctl.currentView.templatePath,","                    compiledTemplatePath: ctl.currentView.compiledTemplatePath,","                    basePath: ctl.currentView.basePath,","                    isBase: ctl.currentView.isBase,","                    hasTemplate: ctl.currentView.hasTemplate","                };","","                if (ctl.currentView._itemEmptyViewConstructors) { // quack i am a collection view","                    serObj.currentView._itemEmptyViewConstructors = _.map(ctl.currentView._itemEmptyViewConstructors, function (val, key) {","                        return key;","                    });","","                    serObj.currentView._itemEmptyViewTemplates = _.map(ctl.currentView._itemEmptyViewTemplates, function (val, key) {","                        return { name: key, path: val.path };","                    });","                }","            }","","            //children","            var serializedKids = {};","            _.each(ctl.children, function (regionChildren, region) {","                var comps = [];","                _.each(regionChildren, function (child) {","                    comps.push(child.toJSON());","                });","                serializedKids[region] = comps;","            });","            serObj.children = serializedKids;","","            //models","            Model._serialize(ctl.ctx.models, serObj.ctx.models);","            Model._serialize(ctl.ctx.collections, serObj.ctx.collections);","","            _.each(ctl.ctx.collections, function (value, key, list) {","                serObj.ctx.collections[key] = value._getGlobalId();","            });","","            return serObj;","        },","","        deserialize: function (ctl, options) {","","        }","","    };","","});"];
_$jscoverage['common/utils/ctlSerializor.js'][1]++;
define(["underscore", "lazoModel"], (function (_, Model) {
  _$jscoverage['common/utils/ctlSerializor.js'][3]++;
  "use strict";
  _$jscoverage['common/utils/ctlSerializor.js'][5]++;
  return ({serialize: (function (ctl, rootCtx) {
  _$jscoverage['common/utils/ctlSerializor.js'][8]++;
  var serObj = {}, viewRef, omit = (rootCtx? ["cookies", "_rawReq", "models", "collections"]: ["cookies", "_rawReq", "models", "collections", "_rootCtx"]);
  _$jscoverage['common/utils/ctlSerializor.js'][13]++;
  serObj.cid = ctl.cid;
  _$jscoverage['common/utils/ctlSerializor.js'][14]++;
  serObj.ctx = _.omit(ctl.ctx, omit);
  _$jscoverage['common/utils/ctlSerializor.js'][15]++;
  serObj.ctx.models = {};
  _$jscoverage['common/utils/ctlSerializor.js'][16]++;
  serObj.ctx.collections = {};
  _$jscoverage['common/utils/ctlSerializor.js'][17]++;
  serObj.isBase = ctl.isBase;
  _$jscoverage['common/utils/ctlSerializor.js'][18]++;
  serObj.name = ctl.name;
  _$jscoverage['common/utils/ctlSerializor.js'][19]++;
  if ((ctl.currentView && ctl.currentView.options)) {
    _$jscoverage['common/utils/ctlSerializor.js'][20]++;
    viewRef = ctl.currentView.options.ref;
    _$jscoverage['common/utils/ctlSerializor.js'][22]++;
    serObj.currentView = {cid: ctl.currentView.cid, name: ctl.currentView.name, ref: ctl.currentView.ref, templatePath: ctl.currentView.templatePath, compiledTemplatePath: ctl.currentView.compiledTemplatePath, basePath: ctl.currentView.basePath, isBase: ctl.currentView.isBase, hasTemplate: ctl.currentView.hasTemplate};
    _$jscoverage['common/utils/ctlSerializor.js'][33]++;
    if (ctl.currentView._itemEmptyViewConstructors) {
      _$jscoverage['common/utils/ctlSerializor.js'][34]++;
      serObj.currentView._itemEmptyViewConstructors = _.map(ctl.currentView._itemEmptyViewConstructors, (function (val, key) {
  _$jscoverage['common/utils/ctlSerializor.js'][35]++;
  return key;
}));
      _$jscoverage['common/utils/ctlSerializor.js'][38]++;
      serObj.currentView._itemEmptyViewTemplates = _.map(ctl.currentView._itemEmptyViewTemplates, (function (val, key) {
  _$jscoverage['common/utils/ctlSerializor.js'][39]++;
  return ({name: key, path: val.path});
}));
    }
  }
  _$jscoverage['common/utils/ctlSerializor.js'][45]++;
  var serializedKids = {};
  _$jscoverage['common/utils/ctlSerializor.js'][46]++;
  _.each(ctl.children, (function (regionChildren, region) {
  _$jscoverage['common/utils/ctlSerializor.js'][47]++;
  var comps = [];
  _$jscoverage['common/utils/ctlSerializor.js'][48]++;
  _.each(regionChildren, (function (child) {
  _$jscoverage['common/utils/ctlSerializor.js'][49]++;
  comps.push(child.toJSON());
}));
  _$jscoverage['common/utils/ctlSerializor.js'][51]++;
  serializedKids[region] = comps;
}));
  _$jscoverage['common/utils/ctlSerializor.js'][53]++;
  serObj.children = serializedKids;
  _$jscoverage['common/utils/ctlSerializor.js'][56]++;
  Model._serialize(ctl.ctx.models, serObj.ctx.models);
  _$jscoverage['common/utils/ctlSerializor.js'][57]++;
  Model._serialize(ctl.ctx.collections, serObj.ctx.collections);
  _$jscoverage['common/utils/ctlSerializor.js'][59]++;
  _.each(ctl.ctx.collections, (function (value, key, list) {
  _$jscoverage['common/utils/ctlSerializor.js'][60]++;
  serObj.ctx.collections[key] = value._getGlobalId();
}));
  _$jscoverage['common/utils/ctlSerializor.js'][63]++;
  return serObj;
}), deserialize: (function (ctl, options) {
})});
}));