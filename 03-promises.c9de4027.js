!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire3a97;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequire3a97=r);var u=r("iU1Pc"),i={form:document.querySelector("form"),button:document.querySelector("button"),firstStep:document.querySelector("[name = delay]"),step:document.querySelector("[name = step]"),amount:document.querySelector("[name = amount]")};function a(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}i.button.addEventListener("click",(function(t){t.preventDefault();for(var n=Number(i.firstStep.value),o=Number(i.step.value),r=Number(i.amount.value),c=n,l=1;l<=r;l+=1)a(l,c).then((function(t){var n=t.position,o=t.delay;return e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;return e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),c+=o}))}();
//# sourceMappingURL=03-promises.c9de4027.js.map
