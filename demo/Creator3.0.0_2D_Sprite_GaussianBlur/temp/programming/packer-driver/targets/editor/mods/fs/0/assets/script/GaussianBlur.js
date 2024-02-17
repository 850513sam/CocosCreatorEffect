System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Slider, Label, dynamicAtlasManager, find, RenderComponent, Vec2, _dec, _class, _temp, _crd, ccclass, property, GaussionBlur;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("GaussionBlur", GaussionBlur = (_dec = ccclass('GaussionBlur'), _dec(_class = (_temp = class GaussionBlur extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_gsFactor", 500);
        }

        // 调整高斯模糊系数 (建议 50 ~ 5000)
        onLoad() {
          dynamicAtlasManager.enabled = false;
          this._blurSlider = find("Canvas/Content/Controller/BlurSlider/Slider").getComponent(Slider);
          this._blurSliderLabel = find("Canvas/Content/Controller/BlurSlider/ValueLabel").getComponent(Label);
          this._examplesParentNode = find("Canvas/Content/ScrollView/Examples");
        }

        onEnable() {
          this._blurSlider.node.on("slide", this._onSliderChanged, this);
        }

        onDisable() {
          this._blurSlider.node.off("slide", this._onSliderChanged, this);
        }

        start() {
          this._onSliderChanged();
        }

        _onSliderChanged() {
          this._blurSliderLabel.string = `${this._blurSlider.progress.toFixed(2)}`; // 更新材质

          this._updateRenderComponentMaterial({});
        }
        /**
         * 更新渲染组件的材质
         *
         * 1. 获取材质
         * 2. 给材质的 unitform 变量赋值
         * 3. 重新将材质赋值回去
         */


        _updateRenderComponentMaterial(param) {
          this._examplesParentNode.children.forEach(childNode => {
            childNode.getComponents(RenderComponent).forEach(renderComponent => {
              let material = renderComponent.getMaterial(0); // let _w = 1000 - 990 * this._blurSlider.progress;
              // let _h = 1000 - 990 * this._blurSlider.progress;

              let _w = this._gsFactor - (this._gsFactor - 30) * this._blurSlider.progress;

              let _h = this._gsFactor - (this._gsFactor - 30) * this._blurSlider.progress;

              material.setProperty('textureSize', new Vec2(_w, _h));
              console.log("w : " + _w);
              console.log("h : " + _h);
              renderComponent.setMaterial(material, 0);
            });
          });
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GaussianBlur.js.map