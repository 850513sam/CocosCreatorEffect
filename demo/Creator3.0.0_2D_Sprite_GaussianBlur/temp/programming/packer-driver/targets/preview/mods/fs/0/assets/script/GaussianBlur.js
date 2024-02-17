System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Slider, Label, dynamicAtlasManager, find, RenderComponent, Vec2, _dec, _class, _temp, _crd, ccclass, property, GaussionBlur;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Slider = _cc.Slider;
      Label = _cc.Label;
      dynamicAtlasManager = _cc.dynamicAtlasManager;
      find = _cc.find;
      RenderComponent = _cc.RenderComponent;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21870LTLa1GordqBnTuF0gV", "GaussianBlur", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GaussionBlur", GaussionBlur = (_dec = ccclass('GaussionBlur'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GaussionBlur, _Component);

        function GaussionBlur() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_gsFactor", 500);

          return _this;
        }

        var _proto = GaussionBlur.prototype;

        // 调整高斯模糊系数 (建议 50 ~ 5000)
        _proto.onLoad = function onLoad() {
          dynamicAtlasManager.enabled = false;
          this._blurSlider = find("Canvas/Content/Controller/BlurSlider/Slider").getComponent(Slider);
          this._blurSliderLabel = find("Canvas/Content/Controller/BlurSlider/ValueLabel").getComponent(Label);
          this._examplesParentNode = find("Canvas/Content/ScrollView/Examples");
        };

        _proto.onEnable = function onEnable() {
          this._blurSlider.node.on("slide", this._onSliderChanged, this);
        };

        _proto.onDisable = function onDisable() {
          this._blurSlider.node.off("slide", this._onSliderChanged, this);
        };

        _proto.start = function start() {
          this._onSliderChanged();
        };

        _proto._onSliderChanged = function _onSliderChanged() {
          this._blurSliderLabel.string = "" + this._blurSlider.progress.toFixed(2); // 更新材质

          this._updateRenderComponentMaterial({});
        }
        /**
         * 更新渲染组件的材质
         *
         * 1. 获取材质
         * 2. 给材质的 unitform 变量赋值
         * 3. 重新将材质赋值回去
         */
        ;

        _proto._updateRenderComponentMaterial = function _updateRenderComponentMaterial(param) {
          var _this2 = this;

          this._examplesParentNode.children.forEach(function (childNode) {
            childNode.getComponents(RenderComponent).forEach(function (renderComponent) {
              var material = renderComponent.getMaterial(0); // let _w = 1000 - 990 * this._blurSlider.progress;
              // let _h = 1000 - 990 * this._blurSlider.progress;

              var _w = _this2._gsFactor - (_this2._gsFactor - 30) * _this2._blurSlider.progress;

              var _h = _this2._gsFactor - (_this2._gsFactor - 30) * _this2._blurSlider.progress;

              material.setProperty('textureSize', new Vec2(_w, _h));
              console.log("w : " + _w);
              console.log("h : " + _h);
              renderComponent.setMaterial(material, 0);
            });
          });
        };

        return GaussionBlur;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GaussianBlur.js.map