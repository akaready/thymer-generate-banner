"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = `/*
 * Thymer Plugin Settings UI \u2014 Design Tokens
 *
 * Canonical CSS custom properties for the plugin settings panel system.
 * Plugins consume this verbatim; component CSS reads from these vars.
 *
 * See shared/settings-ui/DESIGN.md for rationale.
 *
 * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).
 * Fallbacks use color-mix(currentColor) so panels work when a token is absent.
 *
 * SCOPE IS DOUBLED ON PURPOSE (.tps-panel.tps-panel, specificity 0,2,0).
 * Every plugin bundles its own copy of this file and injects it into the same
 * document, all declaring the same global .tps-panel class. At equal specificity
 * the last stylesheet injected wins for EVERY panel in the app, so one plugin
 * running an outdated bundle silently redefines these tokens for all the others.
 * That shipped: pre-1f753f6 builds set --tps-accent from --accent-color, a var
 * Thymer never defines, which collapsed the accent to currentColor (white text)
 * across every installed plugin's panel. Doubling the class lets a current copy
 * outrank any stale plain-.tps-panel copy regardless of injection order.
 * Do not "simplify" this back to a single class.
 */

.tps-panel.tps-panel {
  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-text:           var(--text-default,   currentColor);
  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));
  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));
  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));

  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-bg-input:       var(--input-bg-color,
                        color-mix(in srgb, currentColor 6%, transparent));
  --tps-bg-hover:       var(--hover-subtle,
                        var(--sidebar-bg-hover,
                        color-mix(in srgb, currentColor 8%, transparent)));
  --tps-bg-active:      var(--active-bg-color,
                        color-mix(in srgb, currentColor 12%, transparent));

  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-divider:        var(--divider-color,
                        var(--thin-divider-color,
                        color-mix(in srgb, currentColor 14%, transparent)));
  --tps-border:         var(--input-border-color,
                        var(--divider-color,
                        color-mix(in srgb, currentColor 22%, transparent)));
  --tps-border-strong:  var(--titlebar-border-color,
                        var(--selection-border,
                        color-mix(in srgb, currentColor 32%, transparent)));

  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Fallback is a real color, never currentColor: an accent that degrades into
     the text color fails invisibly. Deliberately the brand mark, not the theme's
     --color-primary-500 \u2014 that one is a muted slate on themes like
     basalt-bedrock, which would make checked rows harder to read, not easier. */
  --tps-accent:         var(--logo-color, #04d1ab);
  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);
  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));

  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-danger:         var(--enum-red-fg, #ef4444);
  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);
  --tps-warning:        var(--text-warning,
                        var(--enum-yellow-fg, #f59e0b));
  --tps-success:        var(--enum-green-fg, #10b981);
  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);

  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));

  /* Panel chrome */
  --tps-panel-bg:       var(--panel-bg-color, transparent);
  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);

  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Font is INHERITED from Thymer's panel chrome (see components.css). */

  --tps-fs-title:       18px;
  --tps-fs-lede:        13px;
  --tps-fs-section:     11px;
  --tps-fs-hint:        12px;
  --tps-fs-label:       13px;
  --tps-fs-desc:        12px;
  --tps-fs-body:        13px;
  --tps-fs-value:       12px;
  --tps-fs-button:      12px;
  --tps-fs-list-header: 10px;

  --tps-lh-tight:       1;
  --tps-lh-snug:        1.2;
  --tps-lh-base:        1.4;
  --tps-lh-loose:       1.5;

  --tps-fw-regular:     400;
  --tps-fw-medium:      500;
  --tps-fw-semibold:    600;
  --tps-fw-bold:        700;

  --tps-ls-section:     0.06em;
  --tps-ls-list:        0.08em;
  --tps-ls-title:       0;

  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-space-1:        4px;
  --tps-space-2:        8px;
  --tps-space-3:        12px;
  --tps-space-4:        16px;
  --tps-space-5:        24px;
  --tps-space-6:        32px;
  --tps-space-7:        48px;

  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-radius-sm:      4px;
  --tps-radius-md:      6px;
  --tps-radius-lg:      8px;
  --tps-radius-pill:    999px;
  --tps-radius-circle:  50%;

  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);
  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --tps-dur-fast:       80ms;
  --tps-dur-base:       160ms;

  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);

  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-control-h-sm:   28px;
  --tps-control-h-md:   32px;
  --tps-input-w:        64px;
  --tps-num-step-w:     28px;
  --tps-swatch-size:    22px;
  --tps-thumb-size:     16px;
  --tps-track-h:        6px;

  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);
  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .tps-panel.tps-panel {
    --tps-dur-fast:     1ms;
    --tps-dur-base:     1ms;
  }
}
`;

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-panel .tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

/* Scoped .tps-panel on purpose: every plugin injects its own copy of this
   file, and older copies baseline-align this row (plus translateY icon
   shims). Higher specificity here makes the newest layout win the cascade
   war regardless of plugin load order. */
.tps-panel .tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-panel .tps-plugin-header-icon,
.tps-panel .tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  margin-right: var(--tps-space-1, 4px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Header controls: scope pill + bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Settings-scope cluster. Resting: one dim "All devices" pill. Diverged:
   pill lights amber (full-perimeter border + tint \u2014 never a single-edge
   accent) and the \u2191 push / \u21BA discard icon buttons appear beside it. Amber
   rides Thymer's orange enum tokens so it tracks the theme. */
.tps-scope {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.tps-scope-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 22px;
  padding: 0 8px;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: 999px;
  font-size: 10.5px;
  line-height: 1;
  white-space: nowrap;
  color: var(--tps-text-muted);
  background: transparent;
  user-select: none;
}

.tps-scope-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--tps-text-muted);
  opacity: 0.55;
}

/* "This device" is a normal, saved state (per-device settings), NOT a warning \u2014
   so it wears the calm brand accent, not an alarming amber. Full-perimeter
   border, never a single-edge accent. */
.tps-scope-pill[data-diverged="true"] {
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 45%, transparent);
  background: var(--tps-accent-soft);
}

.tps-scope-pill[data-diverged="true"] .tps-scope-dot {
  background: var(--tps-accent);
  opacity: 1;
}

.tps-scope-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid var(--tps-border, rgba(127, 127, 127, 0.16));
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Inline-SVG icons: a viewBox-centered vector in a block box has no font
   metrics \u2014 no baseline, no ascent/descent ink drift. The 14px vector in the
   22px button gives an exact 4px inset on every side. */
.tps-panel .tps-scope-svg {
  display: flex;
  width: 14px;
  height: 14px;
  flex: 0 0 auto;
}

.tps-panel .tps-scope-svg svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Optical correction for the (still webfont) bug glyph: near-zero descent
   rides the ink ~1px high of any line-box centering. */
.tps-panel .tps-plugin-header-bug .ti::before {
  display: inline-block;
  transform: translateY(1px);
}

.tps-scope-btn:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-scope-btn:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-scope-btn--push:hover {
  color: var(--enum-green-fg, #3fa653);
  border-color: var(--enum-green-border, rgba(63, 166, 83, 0.45));
  background: var(--enum-green-bg, rgba(63, 166, 83, 0.12));
}

/* Armed state must beat the generic :hover recolor (same specificity, order-
   dependent) \u2014 scope it up so the icon reddens with the box, hovered or not. */
.tps-panel .tps-scope-btn--discard[data-armed="true"],
.tps-panel .tps-scope-btn--discard[data-armed="true"]:hover {
  color: var(--enum-red-fg, #d64545);
  border-color: var(--enum-red-border, rgba(214, 69, 69, 0.5));
  background: var(--enum-red-bg, rgba(214, 69, 69, 0.12));
}

.tps-scope-btn[disabled] {
  opacity: 0.5;
  cursor: default;
}

/* \u2500\u2500 Header controls: bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Last flex item of the attr row; margin-left:auto pins the group to the
   right edge, align-self:center opts out of the row's baseline alignment. */
.tps-plugin-header-controls {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-2, 8px);
  margin-left: auto;
  padding-left: var(--tps-space-3, 12px);
}

/* In-row placement (right of the version link). */
.tps-panel .tps-plugin-header-attr > .tps-plugin-header-bug {
  margin-left: var(--tps-space-2, 8px);
}

.tps-plugin-header-bug {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Undo the attr row's generic .ti treatment (translateY + margin) inside the button. */
.tps-panel .tps-plugin-header-bug .ti {
  width: 14px;
  height: 14px;
  font-size: 14px;
  transform: none;
  margin: 0;
}

.tps-plugin-header-bug:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-plugin-header-bug:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  width: 30px;
  height: 16px;
  padding: 0;
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-pill, 999px);
  background: var(--tps-bg-input);
  cursor: pointer;
  transition: background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch-knob {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 12px;
  height: 12px;
  border-radius: var(--tps-radius-circle, 50%);
  background: var(--tps-text-muted);
  transition: transform var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch[aria-checked="true"] {
  background: var(--tps-accent);
  border-color: var(--tps-accent);
}

.tps-switch[aria-checked="true"] .tps-switch-knob {
  transform: translateX(14px);
  background: var(--tps-on-accent, #fff);
}

.tps-switch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch[data-busy],
.tps-switch:disabled {
  opacity: 0.55;
  pointer-events: none;
}

/* Off-state "safe mode": dim the body, keep it interactive \u2014 edits stage in the
   plugin's local drafts and apply on re-enable. Keyed off the pill's aria state
   so the optimistic flip dims instantly and heal re-renders stay correct with
   no JS. The header (pill, bug button, off-note) stays full opacity \u2014 exclude
   any direct child containing it (collection-icons wraps the header in a row
   element, so exclude by content, not class). */
.tps-panel:has(.tps-plugin-header .tps-switch[aria-checked="false"]) > :not(:has(.tps-plugin-header)) {
  opacity: 0.65;
  transition: opacity var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

/* Rendered whenever the header has a kill switch; shown only while it's off. */
.tps-plugin-header-off-note {
  display: none;
  margin: var(--tps-space-2, 8px) 0 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-plugin-header:has(.tps-switch[aria-checked="false"]) .tps-plugin-header-off-note {
  display: block;
}

/* \u2500\u2500 Feedback dialog (panel-scoped modal) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* The overlay positions against the .tps-panel root (the scroll container). */
.tps-panel {
  position: relative;
}

.tps-feedback-overlay {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-4);
  background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 55%, transparent);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

@supports not ((backdrop-filter: blur(6px)) or (-webkit-backdrop-filter: blur(6px))) {
  .tps-feedback-overlay {
    background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 90%, transparent);
  }
}

/* Flex column with a growing description field: the card stretches to the
   available panel height (capped) and the textarea absorbs the difference,
   so the card itself never needs a scrollbar. */
.tps-feedback-card {
  display: flex;
  flex-direction: column;
  width: min(440px, 100%);
  height: min(760px, 100%);
  overflow: auto;
  background: var(--panel-bg-color, light-dark(#ffffff, #17171b));
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-lg);
  padding: var(--tps-space-4);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

/* Rows keep their natural height \u2014 when content doesn't fit (e.g. the system
   report drawer opens in a short panel) the CARD scrolls; rows must never be
   squeezed into overlapping each other. Only the description field flexes. */
.tps-feedback-card > * {
  flex: 0 0 auto;
}

.tps-feedback-card > .tps-feedback-field--grow {
  flex: 1 1 auto;
}

.tps-feedback-field--grow {
  display: flex;
  flex-direction: column;
}

.tps-feedback-field--grow .tps-feedback-textarea {
  flex: 1 1 auto;
  min-height: 72px;
}

.tps-feedback-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 var(--tps-space-2);
}

.tps-feedback-title {
  margin: 0;
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  color: var(--tps-text);
}

.tps-feedback-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  font-size: 14px;
}

.tps-feedback-close:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-feedback-close:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-feedback-hint {
  margin: 0 0 var(--tps-space-3);
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-feedback-field {
  display: block;
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-label {
  display: block;
  margin: 0 0 var(--tps-space-1);
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text);
}

.tps-feedback-input,
.tps-feedback-textarea {
  width: 100%;
  padding: var(--tps-space-1, 4px) var(--tps-space-2, 8px);
  font-family: inherit;
  font-size: var(--tps-fs-body, 13px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-sm, 4px);
}

.tps-feedback-textarea {
  resize: vertical;
  min-height: 72px;
}

.tps-feedback-input:focus,
.tps-feedback-textarea:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--tps-accent) 60%, transparent);
}

.tps-feedback-input[aria-invalid="true"],
.tps-feedback-textarea[aria-invalid="true"] {
  border-color: var(--tps-danger);
}

.tps-feedback-details {
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-summary {
  font-size: var(--tps-fs-hint, 12px);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-feedback-summary:hover {
  color: var(--tps-text);
}

.tps-feedback-report {
  margin: var(--tps-space-2) 0 0;
  padding: var(--tps-space-2);
  max-height: 140px;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--tps-text-muted);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm, 4px);
}

/* Themed thin scrollbars \u2014 the card (short panels) and the report pre both scroll. */
.tps-feedback-card,
.tps-feedback-report {
  scrollbar-width: thin;
  scrollbar-color: var(--tps-border, rgba(127, 127, 127, 0.25)) transparent;
}

.tps-feedback-card::-webkit-scrollbar,
.tps-feedback-report::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.tps-feedback-card::-webkit-scrollbar-track,
.tps-feedback-report::-webkit-scrollbar-track {
  background: transparent;
}

.tps-feedback-card::-webkit-scrollbar-thumb,
.tps-feedback-report::-webkit-scrollbar-thumb {
  background: var(--tps-border, rgba(127, 127, 127, 0.25));
  border-radius: 999px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.tps-feedback-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--tps-space-2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/feedback.js
  var MAX_URL_LENGTH = 7600;
  function el(tag, props, ...children) {
    const node = document.createElement(tag);
    const dom = (
      /** @type {any} */
      node
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class") node.className = v;
        else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            node.setAttribute(k, v);
          }
        } else node.setAttribute(k, v === true ? "" : String(v));
      }
    }
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false) continue;
      node.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }
  __name(el, "el");
  function versionFromConf(conf) {
    if (!conf || typeof conf !== "object") return "";
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = conf.custom;
    if (custom && typeof custom === "object") {
      const v = (
        /** @type {Record<string, unknown>} */
        custom.pluginVersion
      );
      if (typeof v === "string") return v;
    }
    return "";
  }
  __name(versionFromConf, "versionFromConf");
  async function collectSystemReport({ pluginName = "", pluginVersion = "", disabled = false, data } = {}) {
    const ua = navigator.userAgent || "";
    const lines = [];
    lines.push(`Plugin: ${pluginName} v${pluginVersion}${disabled ? " (kill switch: OFF)" : ""}`);
    lines.push(`App: ${/electron/i.test(ua) ? "Thymer desktop app (Electron)" : "Thymer web"}${location && location.host ? ` \xB7 ${location.host}` : ""}`);
    lines.push(`UA: ${ua}`);
    lines.push(`Platform: ${navigator.platform || "?"} \xB7 lang ${navigator.language || "?"} \xB7 tz ${Intl.DateTimeFormat().resolvedOptions().timeZone || "?"}`);
    const dpr = Math.round((window.devicePixelRatio || 1) * 100) / 100;
    lines.push(`Screen (css px): ${screen.width}x${screen.height} @${dpr}x (\u2248${Math.round(screen.width * dpr)}x${Math.round(screen.height * dpr)} device px) \xB7 viewport ${window.innerWidth}x${window.innerHeight}`);
    try {
      const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const themeClasses = Array.from(document.body.classList).filter((c) => /theme/i.test(c)).join(" ");
      lines.push(`Appearance: ${dark ? "dark" : "light"}${reducedMotion ? " \xB7 reduced-motion" : ""}${themeClasses ? ` \xB7 body: ${themeClasses}` : ""}`);
    } catch {
    }
    try {
      const bits = [];
      if (navigator.hardwareConcurrency) bits.push(`${navigator.hardwareConcurrency} cores`);
      const devMem = (
        /** @type {any} */
        navigator.deviceMemory
      );
      if (devMem) bits.push(devMem >= 8 ? `RAM \u22658GB (API cap)` : `~${devMem}GB RAM`);
      const heap = (
        /** @type {any} */
        performance.memory
      );
      if (heap && heap.usedJSHeapSize) bits.push(`JS heap ${Math.round(heap.usedJSHeapSize / 1048576)}MB of ${Math.round(heap.jsHeapSizeLimit / 1048576)}MB limit`);
      bits.push(navigator.onLine === false ? "OFFLINE" : "online");
      if (typeof performance.now === "function") bits.push(`session up ${Math.round(performance.now() / 6e4)}m`);
      lines.push(`System: ${bits.join(" \xB7 ")}`);
    } catch {
    }
    try {
      if (navigator.storage && typeof navigator.storage.estimate === "function") {
        const est = await navigator.storage.estimate();
        if (est && est.usage != null) {
          lines.push(`Storage: ${Math.round((est.usage || 0) / 1048576)}MB used${est.quota ? ` of ${Math.round(est.quota / 1048576)}MB quota` : ""}`);
        }
      }
    } catch {
    }
    try {
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const plugins = await data.getAllGlobalPlugins();
        const listed = plugins.slice(0, 25).map((p) => {
          let name = "";
          let ver = "";
          try {
            name = p.getName?.() || "";
          } catch {
          }
          try {
            ver = versionFromConf(p.getConfiguration?.());
          } catch {
          }
          return ver ? `${name} v${ver}` : name;
        }).filter(Boolean);
        if (listed.length) {
          lines.push(`Global plugins, all installed (${plugins.length}): ${listed.join(", ")}${plugins.length > 25 ? ", \u2026" : ""}`);
        }
      }
      if (data && typeof /** @type {any} */
      data.getAllCollections === "function") {
        const collections = await /** @type {any} */
        data.getAllCollections();
        if (Array.isArray(collections)) lines.push(`Collection-level plugins: ${collections.length} (names withheld)`);
      }
    } catch {
    }
    return lines.join("\n");
  }
  __name(collectSystemReport, "collectSystemReport");
  function buildIssueUrl({ repository, description, discord, email, report }) {
    const repo = repository.replace(/\/+$/, "");
    const firstLine = description.split("\n")[0].trim();
    const title = `[bug] ${firstLine.length > 60 ? `${firstLine.slice(0, 57)}...` : firstLine}`;
    const bodyFor = /* @__PURE__ */ __name((desc2) => {
      const parts = [`**Describe the bug**

${desc2}`];
      if (discord || email) {
        const contact = [];
        if (discord) contact.push(`- Discord: ${discord}`);
        if (email) contact.push(`- Email: ${email}`);
        parts.push(`**Contact**

${contact.join("\n")}`);
      }
      parts.push(`**System report**

\`\`\`
${report}
\`\`\``);
      parts.push("_Screenshots: paste or drag images directly into this text box._");
      return parts.join("\n\n");
    }, "bodyFor");
    const urlFor = /* @__PURE__ */ __name((desc2) => `${repo}/issues/new?${new URLSearchParams({ title, body: bodyFor(desc2) })}`, "urlFor");
    let desc = description;
    let url = urlFor(desc);
    while (url.length > MAX_URL_LENGTH && desc.length > 200) {
      desc = `${desc.slice(0, Math.max(200, desc.length - 500)).trimEnd()}

[description truncated \u2014 URL length limit]`;
      url = urlFor(desc);
    }
    return url;
  }
  __name(buildIssueUrl, "buildIssueUrl");
  function openFeedbackDialog({ host, opener, pluginName = "", pluginVersion = "", repository = "", disabled = false, data } = {}) {
    const panelHost = host || /** @type {HTMLElement | null} */
    (opener ? opener.closest(".tps-panel") : null);
    if (!panelHost || !repository) return;
    if (panelHost.querySelector(".tps-feedback-overlay")) return;
    const reportPromise = collectSystemReport({ pluginName, pluginVersion, disabled, data });
    const discordInput = el("input", { class: "tps-feedback-input", type: "text", placeholder: "e.g. akaready", autocomplete: "off", spellcheck: "false" });
    const emailInput = el("input", { class: "tps-feedback-input", type: "email", placeholder: "e.g. you@example.com", autocomplete: "off", spellcheck: "false" });
    const descInput = el("textarea", { class: "tps-feedback-textarea", rows: "5", placeholder: "What happened? What did you expect instead?" });
    const reportPre = el("pre", { class: "tps-feedback-report" }, "Collecting\u2026");
    reportPromise.then((text) => {
      reportPre.textContent = text;
    }).catch(() => {
      reportPre.textContent = "Report unavailable.";
    });
    const fieldRow = /* @__PURE__ */ __name((label, field, extraClass) => el(
      "label",
      { class: `tps-feedback-field${extraClass ? ` ${extraClass}` : ""}` },
      el("span", { class: "tps-feedback-label" }, label),
      field
    ), "fieldRow");
    const prevOverflow = panelHost.style.overflow;
    const close = /* @__PURE__ */ __name(() => {
      overlay.remove();
      panelHost.style.overflow = prevOverflow;
      try {
        opener?.focus();
      } catch {
      }
    }, "close");
    const submit = /* @__PURE__ */ __name(async () => {
      const description = descInput.value.trim();
      if (!description) {
        descInput.setAttribute("aria-invalid", "true");
        descInput.focus();
        return;
      }
      let report = "";
      try {
        report = await reportPromise;
      } catch {
      }
      const url = buildIssueUrl({
        repository,
        description,
        discord: discordInput.value.trim(),
        email: emailInput.value.trim(),
        report
      });
      window.open(url, "_blank", "noopener");
      close();
    }, "submit");
    const card = el(
      "div",
      { class: "tps-feedback-card", role: "dialog", "aria-modal": "true", "aria-label": `Report a bug in ${pluginName}` },
      el(
        "div",
        { class: "tps-feedback-head" },
        el("h2", { class: "tps-feedback-title" }, "Report a bug"),
        el(
          "button",
          { type: "button", class: "tps-feedback-close", "aria-label": "Close", onClick: close },
          el("i", { class: "ti ti-x", "aria-hidden": "true" })
        )
      ),
      // Fixed short copy — no variable repo name, so each line stays on one line.
      el(
        "p",
        { class: "tps-feedback-hint" },
        "Opens a prefilled GitHub issue on the repo.",
        el("br"),
        "Please add relevant screenshots to the GitHub issue."
      ),
      fieldRow("Discord username (optional)", discordInput),
      fieldRow("Email (optional)", emailInput),
      fieldRow("What happened?", descInput, "tps-feedback-field--grow"),
      el(
        "details",
        { class: "tps-feedback-details" },
        el("summary", { class: "tps-feedback-summary" }, "System report (included with the issue)"),
        reportPre
      ),
      el(
        "div",
        { class: "tps-feedback-actions" },
        el("button", { type: "button", class: "tps-button tps-button--ghost", onClick: close }, "Cancel"),
        el("button", { type: "button", class: "tps-button tps-button--primary", onClick: submit }, "Open GitHub issue")
      )
    );
    const overlay = el("div", { class: "tps-feedback-overlay" }, card);
    overlay.addEventListener("mousedown", (e) => {
      if (e.target === overlay) close();
    });
    overlay.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    });
    descInput.addEventListener("input", () => descInput.removeAttribute("aria-invalid"));
    panelHost.style.overflow = "hidden";
    overlay.style.top = `${panelHost.scrollTop}px`;
    overlay.style.height = `${panelHost.clientHeight}px`;
    panelHost.appendChild(overlay);
    descInput.focus();
  }
  __name(openFeedbackDialog, "openFeedbackDialog");

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el2 = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el2
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el2.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el2.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el2.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el2.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el2.setAttribute(k, v);
          }
        } else {
          el2.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el2, children);
    return el2;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function panel({ pluginClass } = {}, children = []) {
    const cls = ["tps-panel", pluginClass].filter(Boolean).join(" ");
    const root = h("div", { class: cls }, ...children);
    restoreSectionState(root, pluginClass || "");
    return root;
  }
  __name(panel, "panel");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready",
    killSwitch = null,
    feedback = null,
    scope = null
  }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const fb = feedback ? {
      pluginName: (feedback === true ? "" : feedback.pluginName) || heading,
      pluginVersion: (feedback === true ? "" : feedback.pluginVersion) || version,
      repository: (feedback === true ? "" : feedback.repository) || repository,
      disabled: (feedback === true ? void 0 : feedback.disabled) ?? (killSwitch ? !killSwitch.on : false),
      data: feedback === true ? void 0 : feedback.data
    } : null;
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null,
        // Bug report sits with the attribution links (right of the version);
        // the far-right corner is reserved for state toggles (scope pill,
        // kill switch).
        fb ? renderFeedbackButton(fb) : null,
        killSwitch || scope ? h(
          "span",
          { class: "tps-plugin-header-controls" },
          scope ? scopeCluster(scope) : null,
          killSwitch ? renderKillSwitch(killSwitch) : null
        ) : null
      ),
      // Always rendered with a kill switch; CSS shows it only while the pill is
      // off, so it appears instantly on the optimistic flip with no re-render.
      killSwitch ? h(
        "p",
        { class: "tps-plugin-header-off-note" },
        "Plugin is off \u2014 settings stay editable and your changes apply when you switch it back on."
      ) : null
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  var SCOPE_SVG_NS = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
  function scopeSvgIcon(paths) {
    const wrap = h("span", { class: "tps-scope-svg", "aria-hidden": "true" });
    wrap.innerHTML = `${SCOPE_SVG_NS}${paths}</svg>`;
    return wrap;
  }
  __name(scopeSvgIcon, "scopeSvgIcon");
  function scopeCluster(scope) {
    const pill = h(
      "span",
      {
        class: "tps-scope-pill tooltip",
        "data-diverged": String(!!scope.diverged),
        "data-tooltip": scope.diverged ? "Custom settings for this device, saved automatically. Your other devices are unaffected." : "Using your shared defaults \u2014 the same on all your devices. Edits here apply to this device only.",
        "data-tooltip-dir": "top"
      },
      h("span", { class: "tps-scope-dot", "aria-hidden": "true" }),
      scope.diverged ? "This device" : "All devices"
    );
    if (!scope.diverged) {
      return h("span", { class: "tps-scope" }, pill);
    }
    const push = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--push tooltip",
      "data-tooltip": "Copy these settings to all my devices",
      "data-tooltip-dir": "top",
      "aria-label": "Copy these settings to all my devices",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.disabled) return;
        btn.disabled = true;
        try {
          scope.onPush();
        } catch {
          btn.disabled = false;
        }
      }, "onClick")
    }, scopeSvgIcon('<path d="M12 5v14"/><path d="M18 11l-6-6"/><path d="M6 11l6-6"/>'));
    let disarmTimer = 0;
    const discard = h("button", {
      type: "button",
      class: "tps-scope-btn tps-scope-btn--discard tooltip",
      "data-tooltip": "Reset this device to your shared defaults",
      "data-tooltip-dir": "top",
      "aria-label": "Reset this device to your shared defaults",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLButtonElement} */
          e.currentTarget
        );
        if (btn.getAttribute("data-armed") !== "true") {
          btn.setAttribute("data-armed", "true");
          btn.setAttribute("data-tooltip", "Tap again to reset this device");
          clearTimeout(disarmTimer);
          disarmTimer = window.setTimeout(() => {
            btn.removeAttribute("data-armed");
            btn.setAttribute("data-tooltip", "Reset this device to your shared defaults");
          }, 3e3);
          return;
        }
        clearTimeout(disarmTimer);
        try {
          scope.onDiscard();
        } catch {
        }
      }, "onClick")
    }, scopeSvgIcon('<path d="M9 14L5 10l4-4"/><path d="M5 10h11a4 4 0 1 1 0 8h-1"/>'));
    return h("span", { class: "tps-scope" }, pill, push, discard);
  }
  __name(scopeCluster, "scopeCluster");
  function renderFeedbackButton(fb) {
    return h("button", {
      type: "button",
      class: "tps-plugin-header-bug",
      title: "Report a bug",
      "aria-label": "Report a bug",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLElement} */
          e.currentTarget
        );
        openFeedbackDialog({
          host: (
            /** @type {HTMLElement | null} */
            btn.closest(".tps-panel")
          ),
          opener: btn,
          ...fb
        });
      }, "onClick")
    }, h("i", { class: "ti ti-bug", "aria-hidden": "true" }));
  }
  __name(renderFeedbackButton, "renderFeedbackButton");
  function renderKillSwitch(killSwitch) {
    const sw = h("button", {
      type: "button",
      class: "tps-switch",
      role: "switch",
      "aria-checked": String(!!killSwitch.on),
      "aria-label": killSwitch.label || "Plugin enabled",
      title: killSwitch.on ? "Plugin enabled \u2014 click to disable all of its effects" : "Plugin disabled \u2014 click to re-enable"
    }, h("span", { class: "tps-switch-knob" }));
    const unlock = /* @__PURE__ */ __name(() => {
      sw.removeAttribute("data-busy");
      sw.disabled = false;
    }, "unlock");
    sw.addEventListener("click", () => {
      if (sw.disabled) return;
      const nextOn = sw.getAttribute("aria-checked") !== "true";
      sw.setAttribute("aria-checked", String(nextOn));
      sw.setAttribute("data-busy", "");
      sw.disabled = true;
      setTimeout(unlock, 700);
      try {
        killSwitch.onToggle(nextOn);
      } catch {
        unlock();
        sw.setAttribute("aria-checked", String(!nextOn));
      }
    });
    return sw;
  }
  __name(renderKillSwitch, "renderKillSwitch");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function pluginHeaderFromConfig(conf, { version, helper, helperOpen, helperDefaultOpen, onHelperToggle, killSwitch, feedback, scope } = {}) {
    const resolvedHelper = helper ?? conf.instructions;
    return pluginHeader({
      title: conf.name || "",
      lede: conf.description,
      helper: resolvedHelper,
      helperOpen,
      helperDefaultOpen,
      onHelperToggle,
      icon: conf.icon,
      version: version ?? conf.version,
      author: conf.author,
      homepage: conf.homepage,
      repository: conf.repository,
      coffee: conf.coffee,
      killSwitch,
      feedback,
      scope
    });
  }
  __name(pluginHeaderFromConfig, "pluginHeaderFromConfig");
  var SECTION_STATE = (() => {
    const g = (
      /** @type {Record<string, any>} */
      /** @type {unknown} */
      globalThis
    );
    if (!g.__tpsSectionState) g.__tpsSectionState = /* @__PURE__ */ new Map();
    return (
      /** @type {Map<string, boolean>} */
      g.__tpsSectionState
    );
  })();
  function sectionStateKey(el2, key) {
    const scope = (
      /** @type {HTMLElement} */
      el2.dataset.sectionScope || ""
    );
    return scope + "::" + key;
  }
  __name(sectionStateKey, "sectionStateKey");
  function restoreSectionState(root, scope) {
    const nodes = root.querySelectorAll(".tps-section--collapsible[data-section-key]");
    for (const node of nodes) {
      const el2 = (
        /** @type {HTMLElement} */
        node
      );
      el2.dataset.sectionScope = scope;
      const key = el2.dataset.sectionKey || "";
      const remembered = SECTION_STATE.get(sectionStateKey(el2, key));
      if (remembered === void 0) continue;
      const apply = (
        /** @type {any} */
        el2._tpsSetOpen
      );
      if (typeof apply === "function") apply(remembered, true);
    }
  }
  __name(restoreSectionState, "restoreSectionState");
  function section({ label, hint, collapsible, defaultOpen = true, open, onToggle, persistKey, summary, body = [] }) {
    const bodyChildren = Array.isArray(body) ? body : [body];
    const bodyEl = h("div", { class: "tps-section-body" }, ...bodyChildren);
    if (!collapsible) {
      return h(
        "section",
        { class: "tps-section" },
        h("div", { class: "tps-section-label" }, label),
        hint ? h("p", { class: "tps-section-hint" }, hint) : null,
        bodyEl
      );
    }
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const sectionEl = h("section", {
      class: "tps-section tps-section--collapsible",
      // `open` is the controlled form — a caller driving it owns the state, so
      // that case opts out of the remembered-state machinery entirely.
      dataset: open == null ? { open: String(initialOpen), sectionKey: persistKey || label } : { open: String(initialOpen) }
    });
    const chev = h("span", { class: "tps-section-chev", "aria-hidden": "true" }, "\u25B8");
    const labelEl = h("span", { class: "tps-section-label" }, label);
    const summaryEl = h("span", { class: "tps-section-summary" });
    const paintSummary = /* @__PURE__ */ __name((isOpen) => {
      summaryEl.replaceChildren();
      if (isOpen || summary == null) return;
      const content = typeof summary === "function" ? summary() : summary;
      if (content == null || content === "") return;
      if (typeof content === "string") summaryEl.textContent = content;
      else summaryEl.appendChild(content);
    }, "paintSummary");
    const setOpen = /* @__PURE__ */ __name((nextOpen, restoring) => {
      sectionEl.dataset.open = String(nextOpen);
      header.setAttribute("aria-expanded", String(nextOpen));
      paintSummary(nextOpen);
      if (!restoring && sectionEl.dataset.sectionKey != null) {
        SECTION_STATE.set(sectionStateKey(sectionEl, sectionEl.dataset.sectionKey), nextOpen);
      }
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    sectionEl._tpsSetOpen = setOpen;
    const header = h("button", {
      type: "button",
      class: "tps-section-header",
      "aria-expanded": String(initialOpen),
      onClick: /* @__PURE__ */ __name(() => setOpen(sectionEl.dataset.open !== "true"), "onClick")
    }, chev, labelEl, summaryEl);
    paintSummary(initialOpen);
    sectionEl.appendChild(header);
    if (hint) sectionEl.appendChild(h("p", { class: "tps-section-hint" }, hint));
    sectionEl.appendChild(bodyEl);
    return sectionEl;
  }
  __name(section, "section");
  function optionRow({ type = "checkbox", name, value, label, desc, checked, onChange }) {
    const input = h("input", {
      type,
      name,
      value,
      checked: !!checked,
      onChange: onChange ? (e) => onChange(e) : null
    });
    const labelEl = h("span", { class: "tps-opt-label" }, label);
    const descEl = desc ? h("span", { class: "tps-opt-desc" }, desc) : null;
    return h("label", { class: "tps-opt" }, input, labelEl, descEl);
  }
  __name(optionRow, "optionRow");
  function button({ label, variant = "ghost", size = "sm", onClick, disabled }) {
    const cls = ["tps-button", `tps-button--${variant}`];
    if (size === "md") cls.push("tps-button--md");
    return h("button", {
      type: "button",
      class: cls.join(" "),
      disabled: !!disabled,
      onClick
    }, label);
  }
  __name(button, "button");

  // ../../shared/telemetry/ping.js
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter?.count?.({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");

  // ../../shared/plugin-version.js
  var CONFIG_WRITE_QUEUES_KEY = "__tpsPluginConfigWriteQueues";
  function configWriteIdentity(plugin) {
    let workspace = "default";
    try {
      workspace = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let guid = "";
    try {
      guid = plugin.getGuid?.() || plugin.collection?.getGuid?.() || "";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `${workspace}/${guid || name}`;
  }
  __name(configWriteIdentity, "configWriteIdentity");
  function queuePluginConfigWrite(plugin, task) {
    let queues;
    try {
      const root = (
        /** @type {any} */
        globalThis
      );
      if (!(root[CONFIG_WRITE_QUEUES_KEY] instanceof Map)) root[CONFIG_WRITE_QUEUES_KEY] = /* @__PURE__ */ new Map();
      queues = root[CONFIG_WRITE_QUEUES_KEY];
    } catch {
      return Promise.resolve().then(task);
    }
    const key = configWriteIdentity(plugin);
    const prior = queues.get(key) || Promise.resolve();
    const result = prior.then(task, task);
    const tail = result.then(() => void 0, () => void 0);
    queues.set(key, tail);
    void tail.then(() => {
      if (queues.get(key) === tail) queues.delete(key);
    });
    return result;
  }
  __name(queuePluginConfigWrite, "queuePluginConfigWrite");
  function readPluginVersion(conf, fallback = "0.0.1") {
    if (!conf || typeof conf !== "object") return fallback;
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = (
      /** @type {Record<string, unknown> | undefined} */
      conf.custom
    );
    if (custom && typeof custom === "object" && typeof custom.pluginVersion === "string" && custom.pluginVersion) {
      return custom.pluginVersion;
    }
    return fallback;
  }
  __name(readPluginVersion, "readPluginVersion");
  function configWithPluginVersion(conf, customPatch, pluginVersion) {
    const base = conf && typeof conf === "object" ? conf : {};
    const custom = base.custom && typeof base.custom === "object" ? base.custom : {};
    return {
      ...base,
      version: pluginVersion,
      custom: {
        ...custom,
        ...customPatch,
        pluginVersion
      }
    };
  }
  __name(configWithPluginVersion, "configWithPluginVersion");
  async function resolveConfigApi(plugin) {
    if (!plugin) return null;
    if (typeof plugin.saveConfiguration === "function") return plugin;
    try {
      const data = plugin.data;
      const guid = typeof plugin.getGuid === "function" && plugin.getGuid() || plugin.collection && typeof plugin.collection.getGuid === "function" && plugin.collection.getGuid() || null;
      if (guid && data && typeof data.getPluginByGuid === "function") {
        const byGuid = data.getPluginByGuid(guid);
        if (byGuid && typeof byGuid.saveConfiguration === "function") return byGuid;
      }
      if (guid && data && typeof data.getAllCollections === "function") {
        const all = await data.getAllCollections();
        const found = (all || []).find((c) => c && typeof c.getGuid === "function" && c.getGuid() === guid);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const all = await data.getAllGlobalPlugins();
        const name = plugin.getConfiguration?.()?.name;
        const found = all.find((p) => p && typeof p.getGuid === "function" && p.getGuid() === guid) || (name ? all.find((p) => p && typeof p.getName === "function" && p.getName() === name) : null);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
    } catch {
    }
    return null;
  }
  __name(resolveConfigApi, "resolveConfigApi");
  async function syncPluginVersionOnLoad(plugin, pluginVersion, customPatch = {}) {
    return queuePluginConfigWrite(plugin, () => syncPluginVersionOnLoadNow(plugin, pluginVersion, customPatch));
  }
  __name(syncPluginVersionOnLoad, "syncPluginVersionOnLoad");
  async function syncPluginVersionOnLoadNow(plugin, pluginVersion, customPatch = {}) {
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    const custom = conf.custom && typeof conf.custom === "object" ? { .../** @type {Record<string, unknown>} */
    conf.custom, ...customPatch } : { ...customPatch };
    if (readPluginVersion(conf, "") === pluginVersion) return;
    try {
      let ws = "default";
      try {
        ws = plugin.getWorkspaceGuid?.() || "default";
      } catch {
      }
      const guardKey = `tps-version-synced/${ws}/${conf.name}`;
      if (sessionStorage.getItem(guardKey) === pluginVersion) return;
      sessionStorage.setItem(guardKey, pluginVersion);
    } catch {
    }
    try {
      await api.saveConfiguration(configWithPluginVersion(conf, custom, pluginVersion));
    } catch {
    }
  }
  __name(syncPluginVersionOnLoadNow, "syncPluginVersionOnLoadNow");
  async function healPluginIdentity(plugin, identity) {
    return queuePluginConfigWrite(plugin, () => healPluginIdentityNow(plugin, identity));
  }
  __name(healPluginIdentity, "healPluginIdentity");
  async function healPluginIdentityNow(plugin, identity) {
    if (!identity || typeof identity.name !== "string" || !identity.name.trim()) return;
    const STUB_NAMES = ["New Global Plugin", "New Collection", "My Global Plugin"];
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (conf.ver === void 0 && conf.custom === void 0) return;
    const hasStubName = typeof conf.name !== "string" || !conf.name.trim() || STUB_NAMES.includes(conf.name.trim());
    const missingRepo = identity.sourceRepo && conf.__source_repo === void 0;
    if (!hasStubName && !missingRepo) return;
    try {
      let ws = "default";
      try {
        ws = plugin.getWorkspaceGuid?.() || "default";
      } catch {
      }
      const guardKey = `tps-identity-healed/${ws}/${identity.name}`;
      if (sessionStorage.getItem(guardKey) === "1") return;
      sessionStorage.setItem(guardKey, "1");
    } catch {
    }
    const next = { ...conf };
    if (hasStubName) {
      next.name = identity.name;
      if (identity.icon) next.icon = identity.icon;
      if (identity.description) next.description = identity.description;
    }
    if (missingRepo) {
      next.__source_repo = identity.sourceRepo;
      if (conf.__source_files === void 0 && identity.sourceFiles) {
        next.__source_files = { ...identity.sourceFiles };
      }
    }
    try {
      await api.saveConfiguration(next);
    } catch {
    }
  }
  __name(healPluginIdentityNow, "healPluginIdentityNow");

  // ../../shared/plugin-kill-switch.js
  var MARKER_SYNC_HORIZON_MS = 9e4;
  function isPluginDisabled(conf) {
    if (!conf || typeof conf !== "object") return false;
    const custom = conf.custom;
    return !!(custom && typeof custom === "object" && /** @type {Record<string, unknown>} */
    custom.pluginDisabled === true);
  }
  __name(isPluginDisabled, "isPluginDisabled");
  function markerKey(plugin) {
    let ws = "default";
    try {
      ws = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `tps-kill-switch/${ws}/${name}`;
  }
  __name(markerKey, "markerKey");
  function writeKillSwitchMarker(plugin, disabled) {
    try {
      localStorage.setItem(markerKey(plugin), JSON.stringify({ disabled, ts: Date.now() }));
    } catch {
    }
  }
  __name(writeKillSwitchMarker, "writeKillSwitchMarker");
  function clearKillSwitchMarker(plugin) {
    try {
      localStorage.removeItem(markerKey(plugin));
    } catch {
    }
  }
  __name(clearKillSwitchMarker, "clearKillSwitchMarker");
  function readKillSwitch(plugin) {
    let conf = {};
    try {
      conf = plugin.getConfiguration?.() || {};
    } catch {
    }
    const confDisabled = isPluginDisabled(conf);
    try {
      const raw = localStorage.getItem(markerKey(plugin));
      if (raw) {
        const marker = JSON.parse(raw);
        if (marker && typeof marker.disabled === "boolean") {
          if (marker.disabled === confDisabled) {
            clearKillSwitchMarker(plugin);
            return confDisabled;
          }
          if (Date.now() - (Number(marker.ts) || 0) < MARKER_SYNC_HORIZON_MS) {
            return marker.disabled;
          }
          clearKillSwitchMarker(plugin);
        }
      }
    } catch {
    }
    return confDisabled;
  }
  __name(readKillSwitch, "readKillSwitch");
  async function setPluginDisabled(plugin, disabled, pluginVersion, customPatch = {}) {
    return queuePluginConfigWrite(plugin, () => setPluginDisabledNow(plugin, disabled, pluginVersion, customPatch));
  }
  __name(setPluginDisabled, "setPluginDisabled");
  async function setPluginDisabledNow(plugin, disabled, pluginVersion, customPatch) {
    const api = await resolveConfigApi(plugin);
    if (!api) return false;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return false;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return false;
    const custom = conf.custom && typeof conf.custom === "object" ? (
      /** @type {Record<string, unknown>} */
      conf.custom
    ) : {};
    const resolvedPatch = typeof customPatch === "function" ? customPatch(custom) : customPatch;
    const patch = resolvedPatch && typeof resolvedPatch === "object" ? resolvedPatch : {};
    if (!Object.keys(patch).length && readKillSwitch(plugin) === disabled && isPluginDisabled(conf) === disabled) return true;
    writeKillSwitchMarker(plugin, disabled);
    try {
      const result = await api.saveConfiguration(configWithPluginVersion(conf, { ...patch, pluginDisabled: disabled }, pluginVersion));
      if (result === false) throw new Error("Thymer rejected the config save.");
      return true;
    } catch {
      clearKillSwitchMarker(plugin);
      return false;
    }
  }
  __name(setPluginDisabledNow, "setPluginDisabledNow");

  // ../../shared/plugin-settings.js
  function createSettingsStore(plugin, {
    slug,
    key = "settings",
    version,
    normalize = /* @__PURE__ */ __name((raw) => raw && typeof raw === "object" ? raw : {}, "normalize"),
    scopeKey = null,
    readSynced = null,
    pickSynced = null
  }) {
    const readBag = readSynced || ((custom) => custom?.[key]);
    const pickSyncedSubset = pickSynced || ((s) => s);
    let current = {};
    let dirty = false;
    let editRevision = 0;
    let localUnavailable = false;
    let restoredFromMirror = false;
    let writeChain = Promise.resolve();
    let flushTimer = null;
    let settleTimer = null;
    const fnv1a = /* @__PURE__ */ __name((s) => {
      let h2 = 2166136261;
      for (let i = 0; i < s.length; i++) {
        h2 ^= s.charCodeAt(i);
        h2 = Math.imul(h2, 16777619);
      }
      return (h2 >>> 0).toString(36);
    }, "fnv1a");
    const deviceIdentityParts = /* @__PURE__ */ __name(() => {
      try {
        const n = (
          /** @type {any} */
          typeof navigator !== "undefined" ? navigator : {}
        );
        const ua = String(n.userAgent || "");
        const isApp = /electron/i.test(ua);
        const os = /android/i.test(ua) ? "android" : /iphone|ipad|ios/i.test(ua) ? "ios" : /linux/i.test(ua) ? "linux" : /mac|darwin/i.test(ua) ? "mac" : /win/i.test(ua) ? "win" : "x";
        return { n, ua, isApp, os };
      } catch {
        return { n: {}, ua: "", isApp: false, os: "x" };
      }
    }, "deviceIdentityParts");
    const identity = deviceIdentityParts();
    const legacyDeviceKey = `${identity.isApp ? "app" : "web"}-${identity.os}-${fnv1a(`${identity.ua}|${identity.n.platform || ""}|${identity.n.language || ""}`)}`;
    const stableFingerprint = `${identity.isApp ? "app" : "web"}-${identity.os}-${fnv1a(`${String(identity.ua).replace(/\d+(?:[._]\d+)*/g, "#")}|${identity.n.platform || ""}|${identity.n.language || ""}`)}`;
    const persistentDeviceKey = /* @__PURE__ */ __name(() => {
      const storageKey = "tps-settings-device-id";
      try {
        const existing = localStorage.getItem(storageKey);
        if (existing && /^device-[a-z0-9-]+$/i.test(existing)) return existing;
        let id = "";
        try {
          id = `device-${crypto.randomUUID()}`;
        } catch {
        }
        if (!id) id = `device-${fnv1a(`${Date.now()}|${Math.random()}|${stableFingerprint}`)}`;
        localStorage.setItem(storageKey, id);
        if (localStorage.getItem(storageKey) === id) return id;
      } catch {
      }
      return stableFingerprint;
    }, "persistentDeviceKey");
    const deviceKey = persistentDeviceKey();
    const asMap = /* @__PURE__ */ __name((bag) => {
      if (bag && typeof bag === "object" && bag.byDevice && typeof bag.byDevice === "object") {
        return {
          shared: bag.shared,
          byDevice: { ...bag.byDevice },
          aliases: bag.aliases && typeof bag.aliases === "object" ? { ...bag.aliases } : {}
        };
      }
      if (bag && typeof bag === "object" && Object.keys(bag).length) {
        return { shared: bag, byDevice: {}, aliases: {} };
      }
      return { shared: void 0, byDevice: {}, aliases: {} };
    }, "asMap");
    const readCustom = /* @__PURE__ */ __name(() => {
      try {
        const conf = plugin.getConfiguration?.();
        const custom = conf && conf.custom;
        return custom && typeof custom === "object" ? (
          /** @type {Record<string, unknown>} */
          custom
        ) : {};
      } catch {
        return {};
      }
    }, "readCustom");
    const resolveDeviceSlotKey = /* @__PURE__ */ __name((m) => {
      if (Object.prototype.hasOwnProperty.call(m.byDevice, deviceKey)) return deviceKey;
      const aliased = m.aliases[stableFingerprint];
      if (aliased && Object.prototype.hasOwnProperty.call(m.byDevice, aliased)) return aliased;
      if (Object.prototype.hasOwnProperty.call(m.byDevice, stableFingerprint)) return stableFingerprint;
      if (Object.prototype.hasOwnProperty.call(m.byDevice, legacyDeviceKey)) return legacyDeviceKey;
      return null;
    }, "resolveDeviceSlotKey");
    const readSyncedDevice = /* @__PURE__ */ __name((custom) => {
      const m = asMap(readBag(custom));
      const slotKey = resolveDeviceSlotKey(m);
      if (slotKey) return m.byDevice[slotKey];
      return m.shared ?? null;
    }, "readSyncedDevice");
    const prune = /* @__PURE__ */ __name((m) => {
      const out = { byDevice: m.byDevice };
      if (m.shared !== void 0) out.shared = m.shared;
      if (Object.keys(m.aliases).length) out.aliases = m.aliases;
      return out;
    }, "prune");
    const buildDevicePatch = /* @__PURE__ */ __name((custom, subset) => {
      const m = asMap(readBag(custom));
      m.byDevice[deviceKey] = subset;
      m.aliases[stableFingerprint] = deviceKey;
      return { [key]: prune(m) };
    }, "buildDevicePatch");
    const buildAllPatch = /* @__PURE__ */ __name((custom, subset) => {
      const m = asMap(readBag(custom));
      m.shared = subset;
      for (const k of Object.keys(m.byDevice)) m.byDevice[k] = subset;
      m.byDevice[deviceKey] = subset;
      m.aliases[stableFingerprint] = deviceKey;
      return { [key]: prune(m) };
    }, "buildAllPatch");
    const buildResetPatch = /* @__PURE__ */ __name((custom) => {
      const m = asMap(readBag(custom));
      const resolved = resolveDeviceSlotKey(m);
      if (resolved) delete m.byDevice[resolved];
      delete m.byDevice[deviceKey];
      delete m.byDevice[stableFingerprint];
      delete m.byDevice[legacyDeviceKey];
      delete m.aliases[stableFingerprint];
      return { [key]: prune(m) };
    }, "buildResetPatch");
    const normalizedStringify = /* @__PURE__ */ __name((raw) => JSON.stringify(normalize(raw)), "normalizedStringify");
    const workspaceGuid = /* @__PURE__ */ __name(() => {
      try {
        return String(plugin.getWorkspaceGuid?.() || "") || "default";
      } catch {
        return "default";
      }
    }, "workspaceGuid");
    const scope = /* @__PURE__ */ __name(() => {
      if (!scopeKey) return "";
      try {
        return `/${String(scopeKey() || "scope")}`;
      } catch {
        return "/scope";
      }
    }, "scope");
    const cacheKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/${deviceKey}/cache`, "cacheKey");
    const legacyCacheKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/${legacyDeviceKey}/cache`, "legacyCacheKey");
    const readCache = /* @__PURE__ */ __name(() => {
      try {
        const raw = localStorage.getItem(cacheKey()) ?? localStorage.getItem(legacyCacheKey());
        if (raw === null) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch {
        return null;
      }
    }, "readCache");
    const writeCache = /* @__PURE__ */ __name((value) => {
      try {
        const keyName = cacheKey();
        localStorage.setItem(keyName, value);
        if (localStorage.getItem(keyName) !== value) throw new Error("localStorage read-back mismatch");
        localUnavailable = false;
        return true;
      } catch {
        localUnavailable = true;
        return false;
      }
    }, "writeCache");
    const clearCache = /* @__PURE__ */ __name(() => {
      try {
        localStorage.removeItem(cacheKey());
        localStorage.removeItem(legacyCacheKey());
      } catch {
      }
    }, "clearCache");
    const mirrorKey = /* @__PURE__ */ __name(() => `${slug}/${workspaceGuid()}${scope()}/mirror`, "mirrorKey");
    const readMirror = /* @__PURE__ */ __name(() => {
      try {
        const raw = localStorage.getItem(mirrorKey());
        if (raw === null) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : null;
      } catch {
        return null;
      }
    }, "readMirror");
    const writeMirror = /* @__PURE__ */ __name((bag) => {
      try {
        const m = asMap(bag);
        if (m.shared === void 0 && !Object.keys(m.byDevice).length) return;
        localStorage.setItem(mirrorKey(), JSON.stringify(prune(m)));
      } catch {
      }
    }, "writeMirror");
    const recoveryFlagKey = /* @__PURE__ */ __name(() => `tps-settings-recovered/${slug}/${workspaceGuid()}${scope()}`, "recoveryFlagKey");
    const recoveryAttempted = /* @__PURE__ */ __name(() => {
      try {
        return sessionStorage.getItem(recoveryFlagKey()) === "1";
      } catch {
        return false;
      }
    }, "recoveryAttempted");
    const markRecoveryAttempted = /* @__PURE__ */ __name(() => {
      try {
        sessionStorage.setItem(recoveryFlagKey(), "1");
      } catch {
      }
    }, "markRecoveryAttempted");
    const bagIsAbsent = /* @__PURE__ */ __name((custom) => {
      const bag = readBag(custom);
      if (!bag || typeof bag !== "object") return true;
      const m = asMap(bag);
      return m.shared === void 0 && !Object.keys(m.byDevice).length;
    }, "bagIsAbsent");
    const saveCustomNow = /* @__PURE__ */ __name(async (buildPatch) => {
      try {
        const api = await resolveConfigApi(plugin);
        if (!api || typeof api.saveConfiguration !== "function") return false;
        let conf = {};
        try {
          conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
        } catch {
          return false;
        }
        if (typeof conf.name !== "string" || !conf.name.trim()) return false;
        const custom = conf.custom && typeof conf.custom === "object" ? conf.custom : {};
        const patch = buildPatch(custom);
        const patchKeys = Object.keys(patch);
        if (!patchKeys.length) return true;
        const converged = patchKeys.every((patchKey) => patchKey === key ? bagConverged(custom[key], patch[key]) : JSON.stringify(custom[patchKey]) === JSON.stringify(patch[patchKey]));
        if (converged) {
          if (patch[key] !== void 0) writeMirror(patch[key]);
          return true;
        }
        const result = await api.saveConfiguration(configWithPluginVersion(conf, patch, version));
        if (result === false) return false;
        if (patch[key] !== void 0) writeMirror(patch[key]);
        return true;
      } catch {
        return false;
      }
    }, "saveCustomNow");
    const saveCustom = /* @__PURE__ */ __name((buildPatch) => {
      const run = /* @__PURE__ */ __name(() => queuePluginConfigWrite(plugin, () => saveCustomNow(buildPatch)), "run");
      const result = writeChain.then(run, run);
      writeChain = result.then(() => void 0, () => void 0);
      return result;
    }, "saveCustom");
    const bagConverged = /* @__PURE__ */ __name((a, b) => {
      const ma = asMap(a);
      const mb = asMap(b);
      if (normalizedStringify(ma.shared || {}) !== normalizedStringify(mb.shared || {})) return false;
      const keys = /* @__PURE__ */ new Set([...Object.keys(ma.byDevice), ...Object.keys(mb.byDevice)]);
      for (const k of keys) {
        if (normalizedStringify(ma.byDevice[k] || {}) !== normalizedStringify(mb.byDevice[k] || {})) return false;
      }
      if (JSON.stringify(Object.entries(ma.aliases).sort()) !== JSON.stringify(Object.entries(mb.aliases).sort())) return false;
      return true;
    }, "bagConverged");
    const FLUSH_DELAY_MS = 4e3;
    const cancelFlush = /* @__PURE__ */ __name(() => {
      if (flushTimer) {
        clearTimeout(flushTimer);
        flushTimer = null;
      }
    }, "cancelFlush");
    const flushDevice = /* @__PURE__ */ __name(async () => {
      cancelFlush();
      if (!dirty) return true;
      const revision = editRevision;
      const subset = pickSyncedSubset(normalize(current));
      const ok = await saveCustom((custom) => buildDevicePatch(custom, subset));
      if (ok && editRevision === revision) {
        dirty = false;
        clearCache();
      } else if (dirty) scheduleFlush();
      return ok;
    }, "flushDevice");
    const scheduleFlush = /* @__PURE__ */ __name(() => {
      cancelFlush();
      flushTimer = setTimeout(() => {
        flushTimer = null;
        void flushDevice();
      }, FLUSH_DELAY_MS);
    }, "scheduleFlush");
    const store = {
      /**
       * Read this device's settings from the synced config. A localStorage cache
       * that differs (an edit not yet flushed before a crash/reload) wins and is
       * re-flushed. Read-only w.r.t. the synced config.
       */
      load() {
        if (dirty) return { settings: current, diverged: this.isDiverged() };
        let custom = readCustom();
        if (bagIsAbsent(custom)) {
          const mirrored = readMirror();
          if (mirrored && !recoveryAttempted()) {
            markRecoveryAttempted();
            restoredFromMirror = true;
            void saveCustomNow(() => ({ [key]: prune(asMap(mirrored)) }));
            custom = { ...custom, [key]: prune(asMap(mirrored)) };
          }
        }
        const synced = normalize(readSyncedDevice(custom) || {});
        const cached = readCache();
        if (cached && normalizedStringify(cached) !== JSON.stringify(synced)) {
          current = normalize(cached);
          dirty = true;
          scheduleFlush();
        } else {
          current = synced;
          dirty = false;
          writeMirror(readBag(custom));
          if (cached) clearCache();
          const resolved = resolveDeviceSlotKey(asMap(readBag(custom)));
          if (resolved && resolved !== deviceKey) {
            dirty = true;
            editRevision += 1;
            if (writeCache(JSON.stringify(current))) scheduleFlush();
            else void flushDevice();
          }
        }
        return { settings: current, diverged: this.isDiverged() };
      },
      get() {
        return current;
      },
      /** This device's settings differ from the shared baseline (informational). */
      isDiverged() {
        const shared = asMap(readBag(readCustom())).shared;
        return normalizedStringify(shared || {}) !== JSON.stringify(normalize(current));
      },
      /** True when the immediate recovery journal could not be verified. */
      isLocalUnavailable() {
        return localUnavailable;
      },
      /**
       * True when this load found the synced settings gone and rebuilt them from
       * the durable local mirror. Worth surfacing to the user — a silent recovery
       * hides that something wiped their config, and they should know to check
       * whatever did it.
       */
      wasRestoredFromMirror() {
        return restoredFromMirror;
      },
      /**
       * Lossless migration/recovery entry point. The normalized value is journaled
       * through the store's real cache key and retried to synced config; callers
       * never need to know or recreate that private key.
       */
      recover(raw) {
        const next = normalize(raw);
        const synced = normalize(readSyncedDevice(readCustom()) || {});
        if (JSON.stringify(next) === JSON.stringify(synced)) return false;
        current = next;
        dirty = true;
        editRevision += 1;
        if (writeCache(JSON.stringify(current))) scheduleFlush();
        else void flushDevice();
        return true;
      },
      /** Force this device's pending settings into its durable synced slot. */
      flush() {
        return flushDevice();
      },
      /**
       * Apply an edit to THIS device: update memory, cache locally for instant UI,
       * and schedule a durable flush to this device's synced slot. Never touches
       * another device's slot or the shared baseline.
       */
      update(patch) {
        current = normalize({ ...current, ...patch });
        dirty = true;
        editRevision += 1;
        if (writeCache(JSON.stringify(current))) scheduleFlush();
        else void flushDevice();
        return { settings: current, diverged: this.isDiverged() };
      },
      /**
       * "Copy these settings to all my devices": write the current settings to the
       * shared baseline AND every existing device slot, in ONE saveConfiguration.
       * (This is the header pill's ↑ action.)
       */
      async pushToAll() {
        cancelFlush();
        const revision = editRevision;
        const subset = pickSyncedSubset(normalize(current));
        const ok = await saveCustom((custom) => buildAllPatch(custom, subset));
        if (ok && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * "Reset this device": drop this device's slot so it re-inherits the shared
       * baseline (or defaults). (The header pill's ↺ action.) Returns the settings
       * this device now shows.
       */
      discardLocal() {
        cancelFlush();
        const shared = asMap(readBag(readCustom())).shared;
        current = normalize(shared || {});
        dirty = true;
        editRevision += 1;
        const revision = editRevision;
        writeCache(JSON.stringify(current));
        void saveCustom((custom) => buildResetPatch(custom)).then((ok) => {
          if (ok && editRevision === revision) {
            dirty = false;
            clearCache();
          } else if (dirty) scheduleFlush();
        });
        return current;
      },
      /**
       * Persist sibling custom data and this device's pending settings in one
       * serialized save. Data-owning plugins use this instead of manually
       * snapshotting the settings bag from a potentially stale config instance.
       */
      async saveCustomPatch(extraPatch = {}) {
        cancelFlush();
        const revision = editRevision;
        const hadDirty = dirty;
        const subset = hadDirty ? pickSyncedSubset(normalize(current)) : null;
        const ok = await saveCustom((custom) => ({
          ...typeof extraPatch === "function" ? extraPatch(custom) : extraPatch,
          ...hadDirty ? buildDevicePatch(custom, subset) : {}
        }));
        if (ok && hadDirty && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * The canonical settings-aware kill switch. Pending device settings and any
       * sibling data patch land atomically with pluginDisabled, and recovery is
       * cleared only after Thymer confirms the save.
       */
      async setDisabled(disabled, extraPatch = {}) {
        cancelFlush();
        const revision = editRevision;
        const hadDirty = dirty;
        const subset = hadDirty ? pickSyncedSubset(normalize(current)) : null;
        const run = /* @__PURE__ */ __name(() => setPluginDisabled(plugin, disabled, version, (custom) => ({
          ...extraPatch,
          ...hadDirty ? buildDevicePatch(custom, subset) : {}
        })), "run");
        const okPromise = writeChain.then(run, run);
        writeChain = okPromise.then(() => void 0, () => void 0);
        const ok = await okPromise;
        if (ok && hadDirty && editRevision === revision) {
          dirty = false;
          clearCache();
        } else if (dirty) scheduleFlush();
        return ok;
      },
      /**
       * Post-push pill settle. A successful push saves the config, which reloads
       * the plugin; the fresh instance can render its scope pill from a config
       * snapshot the save hasn't reached yet, and the follow-up config event is
       * filtered as local (attachLifecycle, by design) — so nothing repaints and
       * the pill sits on "This device" even though the push landed. Re-read the
       * synced config on a short interval until it converges: when the adopted
       * settings changed, `onAdopt(settings)` fires (apply + full panel render);
       * otherwise `refreshPill()` fires (pill-only repaint). A genuine local
       * edit still wins — load() carries it through the crash cache. No-ops
       * instantly when already settled. Call from the push success callback AND
       * the post-reload panel heal; returns a cancel fn for onUnload.
       */
      settleAfterPush({ onAdopt = void 0, refreshPill = void 0, tries = 8, intervalMs = 500 } = {}) {
        if (settleTimer) {
          clearTimeout(settleTimer);
          settleTimer = null;
        }
        const tick = /* @__PURE__ */ __name((left) => {
          const before = JSON.stringify(current);
          const next = this.load().settings;
          if (JSON.stringify(next) !== before) onAdopt?.(next);
          else refreshPill?.();
          if (left <= 0 || !this.isDiverged()) return;
          settleTimer = setTimeout(() => {
            settleTimer = null;
            tick(left - 1);
          }, intervalMs);
        }, "tick");
        tick(tries);
        return () => {
          if (settleTimer) {
            clearTimeout(settleTimer);
            settleTimer = null;
          }
        };
      },
      /**
       * Live-follow: when another device does "apply to all" (or edits propagate),
       * `global-plugin.updated` (or, for CollectionPlugins, the collection event the
       * adopter also wires) fires; re-read this device's synced settings and, if
       * they changed, hand them to the plugin's central apply. Also registers the
       * boundary flush (hidden / pagehide) so a just-made edit isn't stranded in the
       * localStorage cache. Returns a detach function for onUnload.
       */
      attachLifecycle({ onRemoteChange } = {}) {
        const handlerIds = [];
        const onHide = /* @__PURE__ */ __name(() => {
          if (document.visibilityState === "hidden") void flushDevice();
        }, "onHide");
        const onPageHide = /* @__PURE__ */ __name(() => {
          void flushDevice();
        }, "onPageHide");
        try {
          document.addEventListener("visibilitychange", onHide);
          window.addEventListener("pagehide", onPageHide);
        } catch {
        }
        try {
          const id = plugin.events?.on?.("global-plugin.updated", (event) => {
            try {
              if (dirty) return;
              if (event?.source?.isLocal) return;
              const guid = plugin.getGuid?.();
              const eventGuid = event?.pluginGuid || event?.guid || event?.rootId || null;
              if (eventGuid && guid && eventGuid !== guid) return;
              const next = normalize(readSyncedDevice(readCustom()) || {});
              if (JSON.stringify(next) === JSON.stringify(current)) return;
              current = next;
              onRemoteChange?.(current);
            } catch {
            }
          });
          if (id) handlerIds.push(id);
        } catch {
        }
        return () => {
          cancelFlush();
          if (settleTimer) {
            clearTimeout(settleTimer);
            settleTimer = null;
          }
          try {
            document.removeEventListener("visibilitychange", onHide);
            window.removeEventListener("pagehide", onPageHide);
          } catch {
          }
          for (const id of handlerIds) {
            try {
              plugin.events?.off?.(id);
            } catch {
            }
          }
        };
      }
    };
    return store;
  }
  __name(createSettingsStore, "createSettingsStore");

  // settings.js
  var PLUGIN_SLUG = "generate-banner";
  var PLUGIN_NAME = "Generate Banner";
  var PLUGIN_VERSION = "1.0.1";
  var ROOT_CLASS = "plg-generate-banner";
  var PANEL_TYPE = "generate-banner-settings";
  var OVERLAY_CLASS = "plg-generate-banner-overlay";
  var DEFAULT_IMAGE_MODEL = "google/gemini-3.1-flash-lite-image";
  var DEFAULT_SUMMARY_MODEL = "google/gemini-2.5-flash";
  var SUMMARY_OFF = "off";
  var APPLY_TARGETS = Object.freeze(["auto", "page", "collection"]);
  var GENERATE_COUNTS = Object.freeze(["1", "2", "3", "4"]);
  var FLAG = Object.freeze(["0", "1"]);
  var LIBRARY_CAP = 40;
  var DEFAULT_ASPECT = "21:9";
  var DEFAULT_RESOLUTION = "1K";
  var DEFAULT_STYLE_COL_FRAC = "0.48";
  var ASPECT_OPTIONS = Object.freeze(
    /** @type {AspectOption[]} */
    [
      { id: "21:9", name: "21:9 ultrawide" },
      { id: "16:9", name: "16:9 widescreen" },
      { id: "2:1", name: "2:1" },
      { id: "4:1", name: "4:1 banner" },
      { id: "3:2", name: "3:2" },
      { id: "4:3", name: "4:3" },
      { id: "1:1", name: "1:1 square" },
      { id: "3:4", name: "3:4" },
      { id: "9:16", name: "9:16 portrait" }
    ]
  );
  var RESOLUTION_OPTIONS = Object.freeze(["1K", "2K", "4K"]);
  var CURATED_SUMMARY_MODELS = Object.freeze(
    /** @type {SummaryModel[]} */
    [
      { id: SUMMARY_OFF, name: "Off \u2014 page title only", label: "Free" },
      { id: "openrouter/free", name: "OpenRouter Free", label: "Free" },
      { id: "google/gemma-4-31b-it:free", name: "Gemma 4 31B", label: "Free" },
      { id: "nvidia/nemotron-3.5-lightning:free", name: "Nemotron 3.5 Lightning", label: "Free" },
      { id: "google/gemini-2.5-flash-lite", name: "Gemini 2.5 Flash Lite", label: "$0.10/M" },
      { id: "google/gemini-3.1-flash-lite", name: "Gemini 3.1 Flash Lite", label: "$0.25/M" },
      { id: "google/gemini-2.5-flash", name: "Gemini 2.5 Flash", label: "$0.30/M" }
    ]
  );
  function isSummaryOff(id) {
    return String(id || "").trim() === SUMMARY_OFF;
  }
  __name(isSummaryOff, "isSummaryOff");
  function summaryOptionLabel(id) {
    const found = CURATED_SUMMARY_MODELS.find((m) => m.id === id);
    if (!found) return id;
    return `${found.name}  \xB7  ${found.label}`;
  }
  __name(summaryOptionLabel, "summaryOptionLabel");
  var CURATED_MODELS = Object.freeze(
    /** @type {CuratedModel[]} */
    [
      { id: "google/gemini-3.1-flash-lite-image", name: "Nano Banana 2 Lite" },
      { id: "google/gemini-3.1-flash-image", name: "Gemini 3.1 Flash Image" },
      { id: "google/gemini-3-pro-image", name: "Gemini 3 Pro Image" },
      { id: "bytedance-seed/seedream-4.5", name: "Seedream 4.5" },
      { id: "bytedance-seed/seedream-5-0-lite", name: "Seedream 5.0 Lite" },
      { id: "black-forest-labs/flux.2-pro", name: "FLUX.2 Pro" },
      { id: "openai/gpt-image-2", name: "GPT Image 2" },
      { id: "x-ai/grok-imagine-image-quality", name: "Grok Imagine Quality" }
    ]
  );
  var CURATED_IDS = Object.freeze(CURATED_MODELS.map((m) => m.id));
  var FALLBACK_PRICES = Object.freeze({
    "google/gemini-3.1-flash-lite-image": { perImage: 0.04, estimated: true },
    "google/gemini-3.1-flash-image": { perImage: 0.08, estimated: true },
    "google/gemini-3-pro-image": { perImage: 0.15, estimated: true },
    "bytedance-seed/seedream-4.5": { perImage: 0.04, estimated: false },
    "bytedance-seed/seedream-5-0-lite": { perImage: 0.035, estimated: false },
    "black-forest-labs/flux.2-pro": { perImage: 0.03, estimated: true },
    "openai/gpt-image-2": { perImage: 0.04, estimated: true },
    "x-ai/grok-imagine-image-quality": { perImage: 0.05, estimated: false }
  });
  var MODEL_SPEED = Object.freeze({
    "google/gemini-3.1-flash-lite-image": 3,
    "google/gemini-3.1-flash-image": 3,
    "google/gemini-3-pro-image": 1,
    "bytedance-seed/seedream-4.5": 2,
    "bytedance-seed/seedream-5-0-lite": 3,
    "black-forest-labs/flux.2-pro": 2,
    "openai/gpt-image-2": 2,
    "x-ai/grok-imagine-image-quality": 2
  });
  function speedPips(id) {
    return MODEL_SPEED[id] || 2;
  }
  __name(speedPips, "speedPips");
  function costPips(perImage) {
    const n = Number(perImage);
    if (!Number.isFinite(n) || n >= 900) return 2;
    if (n <= 0.04) return 1;
    if (n <= 0.08) return 2;
    return 3;
  }
  __name(costPips, "costPips");
  var DEFAULTS = Object.freeze(
    /** @type {BannerSettings} */
    {
      apiKey: "",
      summaryModel: DEFAULT_SUMMARY_MODEL,
      lastModel: DEFAULT_IMAGE_MODEL,
      applyTarget: "auto",
      generateCount: "4",
      lastAspect: DEFAULT_ASPECT,
      lastResolution: DEFAULT_RESOLUTION,
      favoriteIds: "",
      customStylesJson: "[]",
      styleOverridesJson: "{}",
      styleThumbsJson: "{}",
      libraryJson: "[]",
      cropOnApply: "1",
      clearGalleryOnClose: "0",
      styleColFrac: DEFAULT_STYLE_COL_FRAC,
      autoBannerJson: "{}"
    }
  );
  function str(raw) {
    return typeof raw === "string" ? raw : "";
  }
  __name(str, "str");
  function normalizeSettings(raw) {
    const src = raw && typeof raw === "object" ? (
      /** @type {Record<string, any>} */
      raw
    ) : {};
    const apply = str(src.applyTarget).trim();
    const last = str(src.lastModel).trim();
    const summary = str(src.summaryModel).trim();
    const count = str(src.generateCount).trim();
    const aspect = str(src.lastAspect).trim();
    const resolution = str(src.lastResolution).trim();
    const crop = str(src.cropOnApply).trim();
    const clearGal = str(src.clearGalleryOnClose).trim();
    return {
      apiKey: str(src.apiKey),
      summaryModel: summary || DEFAULT_SUMMARY_MODEL,
      lastModel: last || DEFAULT_IMAGE_MODEL,
      applyTarget: (
        /** @type {'auto'|'page'|'collection'} */
        APPLY_TARGETS.includes(
          /** @type {any} */
          apply
        ) ? apply : "auto"
      ),
      generateCount: GENERATE_COUNTS.includes(
        /** @type {any} */
        count
      ) ? count : "4",
      lastAspect: ASPECT_OPTIONS.some((a) => a.id === aspect) ? aspect : DEFAULT_ASPECT,
      lastResolution: RESOLUTION_OPTIONS.includes(
        /** @type {any} */
        resolution
      ) ? resolution : DEFAULT_RESOLUTION,
      favoriteIds: serializeFavoriteIds(parseFavoriteIds(src.favoriteIds)),
      customStylesJson: serializeCustomStyles(parseCustomStyles(src.customStylesJson)),
      styleOverridesJson: serializeStyleOverrides(parseStyleOverrides(src.styleOverridesJson)),
      styleThumbsJson: serializeStyleThumbs(parseStyleThumbs(src.styleThumbsJson)),
      libraryJson: serializeLibrary(parseLibrary(src.libraryJson)),
      cropOnApply: FLAG.includes(
        /** @type {any} */
        crop
      ) ? crop : "1",
      clearGalleryOnClose: FLAG.includes(
        /** @type {any} */
        clearGal
      ) ? clearGal : "0",
      styleColFrac: normalizeStyleColFrac(src.styleColFrac),
      autoBannerJson: serializeAutoBannerMap(parseAutoBannerMap(src.autoBannerJson))
    };
  }
  __name(normalizeSettings, "normalizeSettings");
  function normalizeStyleColFrac(raw) {
    const text = str(raw).trim();
    const n = Number(text);
    const floor = Number(DEFAULT_STYLE_COL_FRAC) || 0.48;
    if (!Number.isFinite(n) || n < floor) return DEFAULT_STYLE_COL_FRAC;
    return String(Math.round(Math.min(0.5, n) * 1e3) / 1e3);
  }
  __name(normalizeStyleColFrac, "normalizeStyleColFrac");
  function parseFavoriteIds(raw) {
    const text = Array.isArray(raw) ? raw.join(",") : str(raw);
    const seen = /* @__PURE__ */ new Set();
    const out = [];
    for (const part of text.split(",")) {
      const id = part.trim();
      if (!id || seen.has(id)) continue;
      seen.add(id);
      out.push(id);
    }
    return out;
  }
  __name(parseFavoriteIds, "parseFavoriteIds");
  function serializeFavoriteIds(ids) {
    return parseFavoriteIds(ids.join(",")).join(",");
  }
  __name(serializeFavoriteIds, "serializeFavoriteIds");
  function parseCustomStyles(raw) {
    let data = raw;
    if (typeof data === "string") {
      const text = data.trim();
      if (!text) return [];
      try {
        data = JSON.parse(text);
      } catch {
        return [];
      }
    }
    if (!Array.isArray(data)) return [];
    const out = [];
    const seen = /* @__PURE__ */ new Set();
    for (const item of data) {
      if (!item || typeof item !== "object") continue;
      const rec = (
        /** @type {Record<string, unknown>} */
        item
      );
      const id = str(rec.id).trim();
      const name = str(rec.name).trim();
      const snippet = str(rec.snippet);
      if (!id || !name || seen.has(id)) continue;
      seen.add(id);
      out.push({ id, name, snippet });
      if (out.length >= 24) break;
    }
    return out;
  }
  __name(parseCustomStyles, "parseCustomStyles");
  function serializeCustomStyles(styles) {
    return JSON.stringify(parseCustomStyles(styles));
  }
  __name(serializeCustomStyles, "serializeCustomStyles");
  function parseStyleOverrides(raw) {
    let data = raw;
    if (typeof data === "string") {
      const text = data.trim();
      if (!text) return {};
      try {
        data = JSON.parse(text);
      } catch {
        return {};
      }
    }
    if (!data || typeof data !== "object" || Array.isArray(data)) return {};
    const out = {};
    for (const [id, snippet] of Object.entries(
      /** @type {Record<string, unknown>} */
      data
    )) {
      const key = String(id || "").trim();
      if (!key) continue;
      out[key] = typeof snippet === "string" ? snippet : "";
      if (Object.keys(out).length >= 48) break;
    }
    return out;
  }
  __name(parseStyleOverrides, "parseStyleOverrides");
  function serializeStyleOverrides(map) {
    return JSON.stringify(parseStyleOverrides(map));
  }
  __name(serializeStyleOverrides, "serializeStyleOverrides");
  function parseStyleThumbs(raw) {
    let data = raw;
    if (typeof data === "string") {
      const text = data.trim();
      if (!text) return {};
      try {
        data = JSON.parse(text);
      } catch {
        return {};
      }
    }
    if (!data || typeof data !== "object" || Array.isArray(data)) return {};
    const out = {};
    for (const [id, value] of Object.entries(
      /** @type {Record<string, unknown>} */
      data
    )) {
      const key = String(id || "").trim();
      if (!key || typeof value !== "string" || !value) continue;
      out[key] = value;
      if (Object.keys(out).length >= 48) break;
    }
    return out;
  }
  __name(parseStyleThumbs, "parseStyleThumbs");
  function serializeStyleThumbs(map) {
    return JSON.stringify(parseStyleThumbs(map));
  }
  __name(serializeStyleThumbs, "serializeStyleThumbs");
  var AUTO_BANNER_RECIPES = Object.freeze(["title-style"]);
  var AUTO_BANNER_CAP = 64;
  function emptyAutoBannerEntry() {
    return { on: "0", recipe: "title-style", styleId: "none", referenceBlobGuid: "" };
  }
  __name(emptyAutoBannerEntry, "emptyAutoBannerEntry");
  function parseAutoBannerMap(raw) {
    let data = raw;
    if (typeof data === "string") {
      const text = data.trim();
      if (!text) return {};
      try {
        data = JSON.parse(text);
      } catch {
        return {};
      }
    }
    if (!data || typeof data !== "object" || Array.isArray(data)) return {};
    const out = {};
    for (const [id, value] of Object.entries(
      /** @type {Record<string, unknown>} */
      data
    )) {
      const key = String(id || "").trim();
      if (!key || !value || typeof value !== "object" || Array.isArray(value)) continue;
      const rec = (
        /** @type {Record<string, unknown>} */
        value
      );
      const on = str(rec.on).trim() === "1" ? "1" : "0";
      const recipe = AUTO_BANNER_RECIPES.includes(
        /** @type {any} */
        str(rec.recipe).trim()
      ) ? (
        /** @type {'title-style'} */
        str(rec.recipe).trim()
      ) : "title-style";
      const styleId = str(rec.styleId).trim() || "none";
      const referenceBlobGuid = str(rec.referenceBlobGuid).trim();
      out[key] = { on, recipe, styleId, referenceBlobGuid };
      if (Object.keys(out).length >= AUTO_BANNER_CAP) break;
    }
    return out;
  }
  __name(parseAutoBannerMap, "parseAutoBannerMap");
  function serializeAutoBannerMap(map) {
    const parsed = parseAutoBannerMap(map);
    const ordered = {};
    for (const key of Object.keys(parsed).sort()) ordered[key] = parsed[key];
    return JSON.stringify(ordered);
  }
  __name(serializeAutoBannerMap, "serializeAutoBannerMap");
  function getAutoBannerForCollection(map, collectionGuid) {
    const guid = String(collectionGuid || "").trim();
    const parsed = parseAutoBannerMap(map);
    if (!guid || !parsed[guid]) return emptyAutoBannerEntry();
    return { ...emptyAutoBannerEntry(), ...parsed[guid] };
  }
  __name(getAutoBannerForCollection, "getAutoBannerForCollection");
  function patchAutoBannerEntry(map, collectionGuid, patch) {
    const guid = String(collectionGuid || "").trim();
    const parsed = parseAutoBannerMap(map);
    if (!guid) return parsed;
    parsed[guid] = {
      ...emptyAutoBannerEntry(),
      ...parsed[guid],
      ...patch && typeof patch === "object" ? patch : {}
    };
    return parseAutoBannerMap(parsed);
  }
  __name(patchAutoBannerEntry, "patchAutoBannerEntry");
  function parseLibrary(raw) {
    let data = raw;
    if (typeof data === "string") {
      const text = data.trim();
      if (!text) return [];
      try {
        data = JSON.parse(text);
      } catch {
        return [];
      }
    }
    if (!Array.isArray(data)) return [];
    const out = [];
    const seen = /* @__PURE__ */ new Set();
    for (const item of data) {
      if (!item || typeof item !== "object") continue;
      const rec = (
        /** @type {Record<string, unknown>} */
        item
      );
      const guid = str(rec.guid).trim();
      if (!guid || seen.has(guid)) continue;
      seen.add(guid);
      const created = Number(rec.createdAt);
      const cost = rec.cost == null ? null : Number(rec.cost);
      out.push({
        guid,
        name: str(rec.name).trim(),
        prompt: str(rec.prompt),
        styleId: str(rec.styleId),
        styleName: str(rec.styleName),
        model: str(rec.model),
        modelName: str(rec.modelName),
        cost: cost == null || !Number.isFinite(cost) ? null : cost,
        sourceTitle: str(rec.sourceTitle),
        sourceGuid: str(rec.sourceGuid),
        sourceKind: rec.sourceKind === "collection" ? "collection" : "page",
        createdAt: Number.isFinite(created) && created > 0 ? created : 0
      });
    }
    return out.slice(-LIBRARY_CAP);
  }
  __name(parseLibrary, "parseLibrary");
  function serializeLibrary(items) {
    return JSON.stringify(parseLibrary(items));
  }
  __name(serializeLibrary, "serializeLibrary");
  function modelDisplayName(id) {
    const found = CURATED_MODELS.find((m) => m.id === id);
    return found ? found.name : id;
  }
  __name(modelDisplayName, "modelDisplayName");

  // thumbs.js
  var STYLE_THUMBS = {
    "analog": "data:image/webp;base64,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",
    "arabesque": "data:image/webp;base64,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",
    "art-nouveau": "data:image/webp;base64,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",
    "artist-af-klint": "data:image/webp;base64,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",
    "artist-beardsley": "data:image/webp;base64,UklGRsIMAABXRUJQVlA4ILYMAADQNACdASoAAW4APpVGnEqlo6Khp7e6WLASiWlu3V8/hwDH+D/7B23d7fjp9lZ9eN/qO1Efln3R/a/3rz570fkvqEex/9rvGNqfQC9qvr//R8QzUa8B+wB+qv/D9ev+D4GHmvsCfzX/Af+T/E+vd/5f57zp/R//s/yHwFfz/+1f9v1x/YJ+3H//91r9lP/oXyhC01KN6HvTp0QIezfNCBaw5KclPb5pouMtOczWw0yB0SLRDmV3pMjWZdKvew4uZfwqRb2W6l4ndJZwB2vvMILKFDH8/Q+xDa/A6eCwON+Q/pjxvtfkCfyBLHN/DXVSEL55XR0XJxkH0CjO7znCxHgeDxO8FBv4Yrn2ZL36jvgzZksnDOZtv5AWBHJBYz04PbIi2TtHWGS4w6glxqpTiahj89KIl9D/i++Ma4YZtVcEyzBm6KJZAfAdwPxpSBPdZbuQy4P54pxQp7sUNF8m2I+PGF3S/E3LY5Mq0OClkqgRkW1OPEh6otkk3zQfVoESKqLYdkpJUVKgJcFS36ps0ecHMOP6ffKgQbe5QFJ+/zEG/DxIFpoY9NIC3vC8+LQAAAD++nFbACT005vNAJzr5XaE3l+Kk30ByF7gUzXiXfEaMPnUg/6sCm2kEsY+E8/Sl5ZoE09f1DeC74BBRJHSuU5PL+qtpz50/Jx1XEvScvqVs8d4dtHvvzTmlo2k68VUzNooHFl5X4Z7rUK+ymiPZkJsLvNDKbT9yfGLCXchnyCB1MwOu7PcOnkOKx6yrzglSkojSWDMDP+wyPnulX1WRTOhZlbykNZfsCTnLKAfoS7DkCiPmztM1HwWfGbEojy5JsMfPm4Tw3YdNrL/KAfjiMARmZK2+O9qKrJ55p4jQEg/pOjFTsyY+TjRBKNYvPEvFwsjV6P40gSBntJGGhMT/ITLX2fR40BoNaRglFpjy6GmCgrNFOA5pkKZpRfdVXnJgCtFl0CelXTFjAA7o3EHOlbH0HtYFkoxPJOTG59/2vKjx335Hb69SqLdHcc58egi37fu7mBb9kGvV9ycuEMkT64bhn73waqPAHSt0AYcktNGhSvgn9x+QkkoidbYi4kfoPb/azOcInr/ZhCej2hxLc7BK1Dw5VMrEUkUYgTv5xzNfn14n+HuoCKJ3qVX2W5lQx54ybEbZq1E+pZwy2I0bYJjBXxLgJGIgtJm8SAFe3X+beiymzJWyLyxNt6zJRT+Nd1+VU9NvYId+0csMzGaJdAK4V5pNVGns1bqJV5R1O9mzobnrFtbvSzvmqHozAN/YzTfAxIntqm/z5JT4WkI1ZR0FZYQxQO7FZQABnahdS3Qj5hia7GCb+WrDpoqJLcO2RBnW4sujRQLTxYE1FU43raWoR9PvpYxR8ENs/9OxmkMdTt4wQPNUWNktno22iWw0ry9AHgGBANxdXFqbIiIVxdfNKc6n+hIHpKimoEIdkWxXpHvKMZcomZnUqKxQEcTjJkgCeWpL6URNA4uLbGE1s/7DmuWjlvXIawGI120yuF6IJVbLUEbU8nFEQFLxH5RymvDNCY5mK9kQm+c26Kf5RuO9PhNf9k82Bg8lC830FeOtn2lyKB97/16TqK8mSWg8+nJ+o8ZuDR3O6/17t/O7NzqSsUVozug1wsG5Q8b3ytWp+lf9FyJvHE94b7/87d3HpL5NsNEH5wEpAlUb0GMefoI0XToRVEyVkxxHQbK8sH+JN4OYqt/aqbiNp2aYLTAV/YspLWKxvfiulicg1oMp9DL91xRuckjTt2Hrw7gOmvOuMBVRJZ2BDxz79IsEb12FwcMKOE+uezPf/mVSPdNz3HPaK7Bew7Y5XTs5z2HR/otx/tE1AoUhtqq1cRGvGdGPA3D+FPv+2IAFLKrzwNvGUUGYzDHz5hCygSxox1PZg5yb3FEUPjEvXKvkn95RvJ0qK097z9qR6TlXBqIolUjE8k2lNTBt4AAfAcFugyERiSS2P1suseIgibGghNwmlWM3ORGBeT0ukWJuiih/yGPzqWjnSnKlNeAUJRrBWI9Svz+VoU5U2KxTNinsMc1l9cLt0J9tgo/IRlXgHrpCumW18iCt+cwi9yX/szOvlVtvv8tk6Xewie4r3GuYxlfOCVQyUvR5+rjkZOJbvzKtIkXj7tfliM5th+5ngHX+xN5oVZ+Xm5MFa69b6uc/ArzexK7zNKaNRHNdnb62DTHqjaM2yjj4xE716oKrO6lUsHC2JBdKA50DFV6oCD49nFqszy5dclso2yUT6nlmN+uBjbGPVVbhS99eYKLkZkaACnQ0+XiaefQLYksnklO0OI3yV3q0T9U42YqkVqBa+FC/9VZsvLmTPqx3iaXNL9vDzR1p+s+SqlMZAPZz/2rdl6FG6myC+n8HUMKHvVWlO84bLpf7SmWP+49zvFhyj9LIGQwmRsigesojU5n3xHcLhrxgO+/S7Vwy4K/zeOwItRFqELKZe+rdNXbrymZIUBkaR7pVSGWacnoS291dQKzDhEykQhvQkbUe2UF7hsghtqnACkBv0XyxYSMyFrd4q/IEKFLMTAHJjbbK0kJh3dwDzcI6+/JghdGVb1DSGuOuw3HW6gd3jYZqbKR/BAcW7W7+0nUupiFmdJXBo6oEk/RCv39RMjxAoFUG/bgDb8K2WpoIp4F3q3NfC7cffYKwL5OTTfn0mSZ+GN8ZwII5Z+53pjBC2Qk676UxfibIz9HMlO15xb37/rTg5efj8r8y/OjdoCke268bMY8FfrgyXiJINHIyIl53TdHsCG2TtBykLtE05MLHzTQx2T5zezxTEPh0kNE9L0A870jjdxZbHyQvnqHQWaQP3jjCduDEXNR+EwTewZsAlqJ9aLcCU1ZULllMaA4FTwgavJQlehdJYMtExFkeG/cvQLaCrGxI0ZuYyh4ZVrxkp9tZteR3CVCInTukpAjIQnivVtdnzVr2zShJQJMNcdcImPCJuNifLvuubfKdPzrEBIqQWTQR0AVXBv52jKRJZYPTTFWVMKXzRV6n/KU/03WDrotJ71ZIhPhZLFk7ndRIPgq/7r3KLUtV9pHH3/OhwUXnIaFkdVI5JJXlJwsbPJef/v+khZjNJHkQR8l4t6pE6TWvYYTSxXEpnjhLnoSET/0BffsZg9DoMvD2FRWF8BhG0unSBri0YeqwV6QZ4QhV5+yR/Mz7WLJQzaa8SQFWrirv1uyXpkdh96dKOJ/W+GFratpjL0NQjoH715LYoWasesGtCcvNSklMyqPiwU14haANhNj26cDXirzBbhrDZqyf/xhx1SuG/hQ7qloyuzZuRj+IYmgy1AWE5BcG7pX7A/Pwrk5hjG7DWQVU82RyiqhpnsbOe4J68HKcebg1bSxRdBVs7F7h+r3nyGKoroKr6zk1Bo51e5mGvER3O5Q4j1yKQ63DiqrhxNg0qyZvAxs8olnspsYxVC5bMJ4rWWi0pYQC3BooVIENkx7QYhr6YgBeCEyoTawcK1jYvaDg87ihaXFPH8kIFOgzcaou6DXLDzB8gCjQCfvnsg3CU6kKo0sbE7zw9o7/3gWBFIQrj/bwrXYojzeHLb5bQoGZbMRNR96ltJTSfFu+1ytrH6JL4IGEVvS2QjvR/YWZUHLnmK7bN8ihXzhB1zaM6qO7cKSo8FFdcXlI4KihKCF0g6Tywlr4zKn2aQbMUAce3JmAwQ1YKMBin5haLPqg37mQ7+mVCOlyH/aXw9WohGjVDeOImrL+Xj1v2AR8DImADYnSDO2x1yIAbmsslvS7NLMbkMELLKfXYzlA0mP0ldmENQGxauknPqLpXSSmD6hgF9PcJJfJywPeSZkE3PoxDQJIFliBxuXawjFEW8ErfUf0oHgYkT2TwJVRntKxwBpKi5iUvMMFsBPm+2JvLY4oxaZNfhD8CPudcN8AOjq2c6+v9PWSli/TybXBio4eZvJ1TEuLISPWr4GCEpIvwDtbDnlcBsw49dzi6gR9j7WIjnSfoO8HdO2o28E4y3gOnvfOWGZeESWJVEEJFVJtjfEuyGN/Rlfj+wSVBbmdlEbS7MApheVkgn+LFyVlYP0H3aYvzLDSYyTK/AU4Dsy36tphuI80wt7Deu34dDPgciCNKNnFY2i5qdecvXJ6UP2vhO0DR/PxrauthHDkcN1cOjWgaXgvRcwMHk0BDWlycvuOsWV+qCzlhJrADFGrPrw13oSAzlWUhRO3KCLFKr2tFVXd62Pp+AOAIFzKET4Pf9QaMksq4LgpgMn3MFshU5Oz3waUBzii7F3caN4N7SpZga4HRvGBuzCNwvgf/GlxpwDlOlwDxR3yd5R8JdON9UH6njs3aduD9Na5bbjWePIJL2nKPgcm4jN9eltn0gkgNCAAA==",
    "artist-bosch": "data:image/webp;base64,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",
    "artist-botticelli": "data:image/webp;base64,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",
    "artist-cezanne": "data:image/webp;base64,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",
    "artist-degas": "data:image/webp;base64,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",
    "artist-hiroshige": "data:image/webp;base64,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",
    "artist-hokusai": "data:image/webp;base64,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",
    "artist-kandinsky": "data:image/webp;base64,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",
    "artist-klimt": "data:image/webp;base64,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",
    "artist-mondrian": "data:image/webp;base64,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",
    "artist-monet": "data:image/webp;base64,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",
    "artist-morris": "data:image/webp;base64,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",
    "artist-rembrandt": "data:image/webp;base64,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",
    "artist-rousseau": "data:image/webp;base64,UklGRtAYAABXRUJQVlA4IMQYAAAwVQCdASoAAW4APok2lEglIyIptFpeaTARCWIDsBwh1szv8Azk+zdCvsY+d8q2C70g/6fpv+kfnu/Rx/lN9s6Lf1j/8Van/Cj8v4I/of3TwV8L/aXqKW8/7bvX/aPEIdb2heCf+Z5mfxPqAcD7637BH6e9ZX/k8n/7lvyVpd2vN3+mK7+pfKIT9Ww6x/xqRj0YGFDshKiV4YLW03SRfltRcqbdRB4g3/yZmHgSuk7dKeY44tmYVbct/qk2Uzqnw2jrjWyD6pV5hLhaJGEHFKBz3o0e1RF1bu6xyMhicQvJBqTynEhLjtlhSpCB+lpWvsblQHbY/P7JaA4VcUEq6s4TvFNTLRYuDnztTSBpwjCHD9LYGFwvp7fcZDyk7+vf93uqxHxZI7sm+b4cIStQGn3NfboFtDqG43B8u+fA6r1BrhzQ0X/FBJw5KysLeWekAjhlusr3V7994uFs11ZQuEQEIVEybzqPvQxjjKEtysd0afYMWEsqyx/vmOuk/KUmifGStqhwSQXoyCL+ZHNUi0GfWdvlLX2vFi2Jg0Rf0F3fs0RipY8q5WRa7DW7r5QEKMYWqgBSRByySrBiYLqGWd3eTSNrW0BSc6M8BwUM/bmtPV2fPzdFR6ess0XnBY8hsdQMoB9Zxz6OXDKWYN1R9mmkHIparlyqS/Xl/nomCfAKFEzNKsb6xUrjnbn91qR48igB9HpyB1iMaoGTGWNjca8stQMo4IK7rFhMgtdp+m5chgAWNK2haxykZHeeg4fxILSj/EiHD1PVfpOwSdjqh/ngi/DDc8L3JeRPSXtUi2dq89y++Tz9oFXo+eJ/pev9+6efVRqdBVk0luZV/ccWY75snd8tXHsffNdJtTLCwEjhYSucPe3QACltcmHuK5V7GFYH2MsjuG1EU0gUlSwhT8qquAAA/vrmZjZWyZ2GjUP6PQTiCcQL6Wcn7r2dZn8WqDcN9HePk/PEzGISTD/+qfcKo8HpToT+W66TRUScCtEKQW6QX7qkgCdmpDUFl62gAggi5By5fmcUsISv+eSQTQQ/mHcevbVPH5idqVnHwF8tVw2Bku4aPNvmVJbSBDVHLnDNAG9fG2h3TBcn3G1PB5wMcMQzopZ5nUhxshvYu46g0imfm0a/LJL+GUlSHJc6UVGrXMPb9n24jlwmg7qTeBkzLyG+slYWG43yPo18m0eITMBdrVvWi++tAgqJcAKW0G1EkNqB0uYs6nXifgini5BAuxQKYVnzwUDLdFRVBgVZxI7HtBWSS/JFTFAL7qw4EWFMoS7f1dcJjuJXs+XcIZe50LmO2ud/yNFsXbXj1z/FPcEEUAtMXBQCTPcK3X1ajvmQY6g+st7PJTTOx3t3n47JbG2lkN6yJaZ6jn17E7AIUpiIzjs59onHNzMeok0V5ihq3GHqh+lYFrTDgnwAaJbYTHGBaYqI/eg4ylDMI/FYX2t+atAOiXADPLpSmHTTmUX8hdJpTGAxR5nQM1NMWNHB1K0YvDCWqviwdbb4Ly8GAQ7hmNGCVJ1bwrcwqN+mrDnJlUFRkUfD2vjaYhEbt/PADoHSN1AGmP2Ok+9aR/ZjmU0rC/gf9s6STdvAm90LFclyc2qz/UvAmm2n/mi6FJ9OimSsvovCsPDcu9FHtNpDTew/SJL01zVRzLJx1dAH6J0plNQVg3apvAIHBYVP2LN/coyWdIjP+cvZH8HIBe8oGGNQwlWGdYnYL8tNDgLAxb76FeVXVDZpZj0lHmyEnQBmiKQ7Na0C1lr4MoV5NNLYNtuQG510Misa+bp1KqaZxZK7zQSUWQ7xgZu+GYpTzSbyz3ZfZp4gGAzg6Bf4nJku4xDNwUOgT/Um6p1QkRDolxXzyFUX36zHjBuKy/6s9SkeMfIa1os9HCi02+4LaJfhpp9Fuo1FbixCrSuQyu8dcEGbMLkdjYwe4kPfwTXcXefVXLDcDm/+tVdbY7HEMdmKtcVFxWKQxR1Tl7Jbj5N29SvZONXG2YkD6JFTRRvWaIpGPQapFed0GmZ//0Og/wSaLlH2G0SuAy7iQtyPy+j5h5IKv4rvXcbmF1H8f8tFjcdVJhtXATTQPLCi3lfv9Y/CudWhedE7LYZvtQ0OAmg5XSh/GwJDCH90eOulf7wsC2ozahuy9R5e1+3Jug1XHMc0m/70PzlChnU2kdHJIdFdsppg4MJl9uIDoa8X/W3k93Do9vVEX4zf6PSDEmW2+irZs6n3RnheHzW2GC4EujgO26oDxSFw6CFx3bTheSU52vM9/LVNgLOz66M2bKXT7H31hcJ7UzX64tlT11GU2MPxnEWa9QdfFiV4oe6DnT1y/jinRIcqo0G3ATI54PP7K+EYcTrG5qzjF3VI/6n1JpqO+1p+4Rsk/XZHPOaxajlqMFD1O1oMKMQh84KZXhFG+799Z/Is7h+wRj71iJC6Xu844Ur/9EORt9dEePircA9e7csSVrP4/r3J9Tz006BCeVSAhvVuWoaiVMskqB/G41rxgiuefVvCpF8V/gQ3OJFICXvQwXjpDMUdrNQyN5zlksIPuEisJsVjc2QrLlQPv+Cz4kuRWXEhvo0lA7Req91M3hvPQABcH5p76boYyxLAfyuF91F9buE4/lIfYAVLdDjupM5g4vaOLxdQq61Avfd7c6L0fMJGB2M6LrRw1SysOttTW4OkEOmhFYOCpbwNF+/Do5892/cqYZnr+KVB+ieGmwVnWHDfR8mu5uf1pUx0S5+Mj/8rQ8lAqah1lcg+6QN0DsXeA2i4fzv/TtpWGLHuB9xLrYnKF2uH4F9DYdIiT0AM9EN7PiTxznOzKImCn6Ud9D4hpltlVjOHH7S3XmQA5N7vN24Gnl5BE3Xp1dq8sAQTQTo2pOYzKdje2PdbMvc+6OAguAVghe/V+rFhwn1xASkudOdODziDwjSo7xZqEo4Mm2AX9VNeeWDZzSFE+zJJus8WVLEiS+T9TREEOgwpCw/BEw/zTenzkBYQ2ttTPdEfXpVEtLITXpDsHkzikgkUZThJuP4cSkfcFOUuMQ4B+dYTm+Ii0iD7mQKV7F8EzpvBFaUvjBRNYqqla7n2tKCAtuhmSICOWEcsjQPB1dLFc69YE1pKHILOOc89TeED+TZ4gCyGvYFRz+VBG2jI675BgQoX0kFoksoj7XMp4RIqwhhiyjk4X6rl4pM4Z8oWRXCfgLPHPRJlcFYiGl8kBfRFZod3T+h3IiJUf1LxODlc02bAdPT47Gsnd1f5K8xEz/5JY6sD50tokCyYg/uUO7echDHyfITzm7q3UYipEZuhet631bbq0CGMZSiIqY709OUcTZnPbIhZX5JeMkUuzHGU1YT/fp6ecq4KEiXzuz8+1XFkrP4LElh0ucR+jo9CcpzeYvMppSPRZt/UccITa3hoPmjIkMoiVq17NNGcstc3RYG1QGrNFFCIWzf/TvmI63fi84oqiEYgpp1Y+x2Il/uEvlvv027TtPljsxf+eFvWU1VynHA/zZiLZTeYq3Ue8HDl+BTXdHxmh0dsXs10J3or3hc6KzgolvmixW5nUUHocQ2mfziQq6YtIMsDUfLoGjcnQcAgPA03kBFaw5YE8pmnXovt2jIu9sLVwy5MbKnPofLAjrVvqG6ghHF1+bXk0SArOyc007HGauMkTcYtdPk9hMY2WkWruYDEkwiUXa1on32yIS7+nTHNF43A5fjexRQGnMtkn8A9UBvGEaVp7Bw/SbPOntZ7J1wGA/ZsdY6s53o/LVJQVwTYXX34WgNKE7HvCkb9cIXnkIrw6jI5nQW9PbCbw4A/go9bxEKBYvZyhx9m/0eZXKRnJ0fch/kDB57ujUoXB1BRhttM7eNJ90SiX/h6rvVZLxahBN7qxX0An3nXNhYilxOlWdCqeAR2J4CTldc7dOfC0xE8L9WCE/9foIlV1km0ahKgmkhxJfOyFaABkIfnphbTQYyCu3GhW8YIYjA47hJUuCfUTQi9NUS3/hTTQE3SldB1NDs96kShSY2zK7/JSSYc6Bfvk4mQfOjv3A19oxt8oRLlRCXEUsLuHA3m/dTaKPgjoTwm1UnUTTsgF44oI1sdGFJTtH9ZoI2cJd3tGz2sZanxRalsBTu9Bpc5c86/Pq0QrHUYQPZcMkSgyVKxt7NNU+RDxJ9Nl24zwtQr7HoAlBi7DEX6TedjJSanKqfg42KmJy17vr7Rg+xeIkVN2OLVr3/CeZQIo4KAr66e38HN0ZjO3W2+eMAozF30L9Jm0GzpxI3SG9Vpuv0NjN6ngBaipT6v70AEPKlTBAWZmynUamZvJgrxFrq+wf4l5jnQd8Djk8Z93iXu+ZWxuPVU1DpMhndxD1DvuPDWuvB6wm8c1bsQM4hPQKizD+VJmeam/vFwTqPozgT2rx8smGbHQzm4D73RwRz1s3VbGj+hvSiJqNmKlZZVG8BxJj8rD8Hz+6gu34MOMMLDJuyUSkEPpIDFOEUrw/vGrhqF4HDzmQInMBIrWNpSLoB4ckmtwNj+dFMg3+McZMf6LCJJxbKmFLYbhmdJUuQ/gFYJXWwgQcVF7rGv6n7DvaMENf1qbKb6nacnFkuy7RQxLv1Kuf1m3TYAePaP+9iJf/xn1b6ZWsRvt9oYmk36Gl7jJtIANZCbpWJfhWGxabHGesFcP0khJ8e51vkhcbcsRfgAHsM+B+YD22ZBcR6fxml8F0avc9ym8BJWPG3YCIsvmfSTVq72snd7E7YVWVuKRljuHJV8W6W1vnfTBv2JsEpU3nkbdXEmgS6Hx9kL8EnR5wNEyqh4tkZbPm40LJPMayNgpythynaMzonyUZcXnALc8sRIRNeWAnmsVkt4ot/vm3TitfB0sH/UAgOkS28/kUTn22ZJECXmeAA4JT1UGpAWzYOtW93srXg4Fr9LgoRaW0mC+WacJz2TLcHKe7cQoiuq6rJj3efDGxjQE8ygBD0/gzO40/rdBRpFaCGQ/+blPKs3W/yAfeX2FJwpRqYH9IUq2I15m7BHuw+LNOFcHd3XroRWOCQwSiSMN7hwhO0aGTTGumSmQ82NlB1caywh4lwbkOmTqPjOxdg4rjI6aJ+LkLNrMe4/nJ6YKCyL+KPZ/xmQaLVxieYDT1S94WFZdNmS+vorkor2H2AX4hMGdVvH2evGT07/r0s8cH2VqGPZ40gMp6ks9ryXux3iJ8QxZmIQ6rCU4ID5iGgEfHK0VMkkdjjc6SefMSxVNPCb7sT4nL/Whbb9UVWJJE/q2HXBG6qPPI7TCMyoa/5Xh+mtbiysgZRSwKTWqabI5vwsp7ep8TXHkjY9OVp/u9/TdYjEK01EMawba2T0xpC8OpdeXzek+5Q/f+eBlm6Qu0kh0TV4jnIv06uv+t6R6f4WF6whvh1L523+Olvx1hOsHirhQtexGm8CrJBIu67VFGJE6F2AYabbIN+1NlX7nppxGVl0lmCQYwlC2Tgm/FMuUFIhDe9Zp2ffxM3lV41blBwqGEd6Ap6zKM4lfTc6me828dvZAQP3YqCjSP7E7d6skWySmLq2WEa+a/r8dE7Hhu+C1W451/gqwmyj3R2SDzsOsYoIJ3cS2QcsXiOSj4lwrueIz2vIGBCAkcRiXCiLJPbMysnOoeeorquLHZbhs+N9fh9EaEGWBvk406P/QF3PiJdDYkfNy5hhnISUhK3yffC9PhqR1tXV1twOHt+oe46rx2YkO1uNHooL1w5w8jIreiW5zyuzu3Gbx3Vvpk65WPUYnfmUZKkHG5jF1qzandPTPm3HvRzI+DjTxavmIYdIXdHY5eSxjO9mUDxlEyEUFsX+aSL9Te3XgZbOZhTKD875K6lJEOGNZlMTMh+c5d8xGXC1fVY2O99SjCdZNZObHlXfVmAnfJ+Eu+qv4TMmtwt8z2CQD12LhtV1Mt0OBnho22HHdk1OX7KbdXu31Use3BbaSINfSSamu5yLq8uSs5UeSrZ1wQfLWat8R8knVEY7ahtvdwIPMoPHvqLaBYyEU1g69i4BuItsLwihLa8xWFLX9cxxNVDATFbeHHbzs5SLUcSZdTecXnbp6gn9XTrciVcpcllZyNdBcv2q8yHz2ZiThixXpPrV9z0IswBQnzLnyVip0B4Uiz/d8OIDWr51Ie4hFgtshx/ANtF53O7xkz/gsnbgCTf8NVSLxx1EMa0/o+i1VE0PHMW7Bzip9yHxTN8/6Sc1bTnWuiN6GBkrx2X3StSIdxj7P6DBUj0lj3J/TkPVAaZVKzJ8VPI1POyX+U5W+WCej/63zjL67bIgo2XJwqAD1KcnUsYnH9zjI97eFgraFJAUc1W/g6M+RYCLpLGaejN/UPPZYNXUD2P54fEQ45pKixgzRVxVI3L6ZQGJHfvHgFwrNwULkEXfcZ11k+zQWV0TxbvcM+wFM3iWeQiQExhqhGLDX3NTMSyHrNEEzlAt6Ppe0smKpaOPKWHCWvQpBx1UfG7JiPv7WcQywZlife9jQW/gxHP/BKLZTODSduve/a3w2zTVe1fcJCSyOVV9iDaBe/wyjS6+uewG0JvOklaFUCjHXFPyXMoLYWwu7xCB/0ioR295Mnr7IlKhjA0ODBPrWrvwya+95VKbaiftKCvGhvw1klelMsTIkbf18sqpRs8wNajQWJGPpvN0sDzBCN567QaM6VM4/u8MiMjypQhhZMLjzr+CSs4q2T4xQ9Ii63aNxFpp+lbX3zcpb8DK5qkhCECdW4SRKf0J6Kt97CVHZdj9YuPwzzYOx/Vq2/hSKCJajFFPAKOX3uQkVI2TdzPrbDNeijwCvh3ayqcbYKzfNM0TbgL/DE9KaCOSnK2PWhN9QNtAZhL0xtISzhZldSk8EyGWBsITf73faojl6XRHMHpYrPoHkl9Fl6T2csQe1q7KOdCoE9c1f1HBIr73UIFGH7x2xwdUmdBj3sWVdxa1mrcSoe6JTtbGsenjVTwUvyesiPBjSnV+b59eVmOsrTu98zew9IDNOwAtfckibavi3QL9QgY6MSFEugi533jOtIC+JpMoj6NIteNXLwybfUZXliNfHRIMxJezNvC1UBncBbMKl4Wmz5a4pr2m3uCNGZoQ3jSjQYKU5zOiCy6X+KHd3OalvvOtSpR70tGJ2VjPNCSKS3CBmK4czJ9bJJFRl0UrRMj1q2clpNXl7A6PC6SHDPv27PEh190rO2QMkfXkk67HVaN/HKiWTewqFrUM8OFb0DD0K4MRaqXxzfbmrXMQ3d32M5MHd4moJblgsDrqYIPVSSs9QOOn7bPWTOfh7fOhSL7RFf3X8Xj2FXp5tl6UedpPw2PKz3HB6QFGvhRnuitjYKxjj4+gmNFIP/aSsJ4Vqij1PtXSu6W+EWz4UcUXlXXNwGe+z/0l4aEvAlvarpqjRtcWI/yTN528bVQSbzyUQxjmA2kdtIfepAjHdkoyoGhofjWy3Gpq3RgOkF3rcYOPBzw3iFWf9ugqX+zmpcufGBD0YAlhZcBatU1MiO9Iu70dp0/kD6QAoq0zar5XK0ujQRQFnf5al8uF5cAVZVG9hzOXqS4rIqVNxRRkX3fXFxHHiS0fQCyXr5CTvhgj7u2Ln32ABE+wLNlMtNZ8FiIvRxkiLPkMt4AgLa618o02kwmMEAMHhZ3ZE0G5bcFrm7hg0RxPZbKMjXxRd6Hp8K8KVQ8bABD/OHSaYCX3e9htnPP995i+yjPQ4PKpTcrq8uKxnbjScytCYBD3fxYlC391tOemiXkVvLP9orrbwniQ5mzQTp4CjA7blYetT4YJRvCDN+JI9+unxTVrbEvhs8nmUyrCrFNnnSUf2YXkcknj2XFuteH/znfmkA+WKuLFG5JR/B0rF0pRlzsVy5vN1/69ZNcDkUA7EJ/mx1Q/wHtr94c8SRCEn+gm3ht4/Kak5ckVAD2pt+9BntyCd1eZhfEkZ6htq4H3QzwBbfRmXW/2ko0KnQjOkXDGxmnflXwCLuh3D8JHUplzqEjzx+d0vYbUJoAaNjtzrutElQoJR/vnNBJ9jWrvYI6xt6RBG9KfDzWOb3CND4hgHgW+vcp5Np/qUb3x0XjQocgOKSzRt371JkztXw6pNC5wf2fcxjspRsj52pAARuZluBual/G6SMPL+9lfrmAcbqrA2WGgbWcY3sW38hKrXQeCTE1IgfmLkiMr32nMkwz6ZzvicJmNZJuI095L66LADHgAH2B7StiZiXAacMOtezwOwRKq5Kp7DXk/mRVVW/3xwRYsQB9NqXTX6axDOnRCldEhXncXvAFusSZUvdEFwWs3QSyqY4ceKOBdASWzJkvgDHU88/zHuHojoNP5sSRQK7qizLigwQ6DB3frq9rwcbtxQ8iGAUFdZhkpu4XVGPFRHA9K+wGPUFSWGXaHegkQgyS4xDHgxJ/XmU+0pbuvNkbB0WFW5FRG6iKwCLWM+LWPHZ2wAAc6/3MGj07GVmrDK4MQSz1Z9uq4TTjj2iAhcz+uT+d+KaaHe/2yY1GzeKL+C3BXHE7cUKcG807ZIAAA",
    "artist-turner": "data:image/webp;base64,UklGRooQAABXRUJQVlA4IH4QAACQVACdASoAAW4APpVCm0qlo6Ihp7OcaLASiUAWjcU69+wfjkjL5N85/f3fr4HqCwoN638EnlfjE6hxSLktsLg7cb6A7JjAkaMSD0fotXzhrC45gQdNhErYmzDiHfMqKToM5WgRCcVPR19X0fK6dPGnp0Gp2AH9V9Gw9miYjAzlLJEK0W83sncfvJy+KgJxRXHZ96ulaP3CEfsm61MjoaX1HcmkOr7TJomkEoO7TjxanG1mcfcX0qL365eEPN/rxU/K2X/ggebHuADFlOEIJTxeSSYIlNYLL4/8Z1fzljmwerwJ8bVP9kbSzXV/lEs9rXTsDlQ4mrxkqabgxLVEObE7LbtHiCKjr/pF10JqV5SPIy9EhHrZpzybnSwT+CZHFXjbKQfYTFV3kjnBecKX27j2DLT8+JjDfclj3lt5ZVPtX/ZJwIK6/MnFueD4pxqos3dQ7NU8QKcW05rp16YJTP0pIE8hL6Q9bIedryStz/v9zVnHOdm2qaU91b+k3wUbjQaiwKWKE6dzONsUUEAMnxtvHgdsWr6iIYlX2qWNNYMO1iU/UHG/axiPeeJzGkuLqzPxCcuZXJ/JkxkRl8OqAes6VF04bxgGcgNCoZ2zEVaLRhSgXbKEQ23AjZhmbWoIINOORhUNYIVCsWKMvi5iH2grLxNn357jvw4n7QaSPUL+GP2pdh7GilupY04DfZkGueaVthNEX8/36w8zA6MWiJMYTxRfXYlMAG22UVC6DP4xGPBwX8Fpic5SAvhZo0+9YcE4g1ZXKNIdeoNGDzur7KO2YB2nVtc/XOPftOmqzfyuWvNJhaLNEq0CUXUfh3aRa8yaI9EjVXayNrlocqRoWjey86puB3ahuh/BDOMLvw+p6EOZbnQOWCdWUlIdMV5vYWU7eIHGsRbIbJwV97wAAP7p0cA1T1u6lydfNh188gOEyNNtKykZYpxKeGRjgAHW3v2zqHRe7a/PihYr0OM/lT4pW0JVHKJFZiDn6lYyr5SLJJhVXIpM7MviOSxwpwlzw11XBf7UDrBWtgZ4vM+aoAwyhi1AmvV4Bh/fS7nl64QPkW+DnTWMBMRyspIwbb04gzCQVcq/CGOAls8ZbdnBDrIgwAFoh/n2dx+9kp90A+BmG89L6Uz1lp9SRGO7rIneiMWDddsXmdGZooJmHiIMWu4pK1ZoP2nEQDejPSxvYFYam1wBmd4GoXLzPSp4+Q0hSw/mysRCzHYoaSWnGJ3g5YbNwKfL310jL7ku3rDbkNSnGfgwgKTVE9FbI3gKEGzlvXvfHKEXnZ1ACkL73uNiJyMbQkPnnpt9QdydhJbyRFaGS+tF1kZJn+zWrAR3EVaEd8CiMPlqsKHZS1ILgrLe/B30/4pBr4dW7xJWP73ckZAz456lvCpyFWuq0JeSoITPPx3itFaDpxKj9LmHGzrj0A2nb9Qy9c+4hPDnLU05JOexpqYvRkSlGJiU8bIwB1Je+0CYSq/8e0/1m5L3h/8iiaW7C5lbslLbHOSklGXitq4GZRhyptqcNzX6FKxEXaTmTwH66qUgUcFiapJkKuFuhBv+i5BMpWsry2wTJA1aLkiyRCmdH4n8SiyYGj9xhhPPTq6ZmoOAHJeuOkHOUIFEW9wVd/sx8+ht+wwOhvwaisvPZ2bhH4zO4ohJ7eZvLA+e04FPSS1Uq8Sw+Vr3AvpmvXGutQr9Or3/BWKqcAPWnsGN0Y5d8l2v/clmnAMGU35GtcWeqKw9CVkV3vmlsC1Jn3uq4IlxRKB4QOPQA8GdPnrkt8Pjx1/d5n8LHFG5+IQt6+EAHa/irngQhERNALcyGJ1C440FV+XX1Tq2P3+hg45R2gz6VaOOSXOB3gl8FtkCjZIJbvbCck8HgWzUgYddVz3ILlIELMD/YxTvdwpcWvb0vxSpSVgVgfLVS3c2TWqcrZ8RmOG9PreXBb7m25nFrloBl9B7LAtoS/gP7AIdCwlsuliRtOqSSPQDvbK1QHuI/xtXuclqRPdwrD75Efi+7kyrxUtE64+Kcyu6mzz192dFVb8nlFn5oVDRrMrFoGwmt4RNoC7q7LgmcJO6fNFnGMxebZRQaCGxnL077FFPK3Rk6SBodN8bm3OesoFA7NUf2Efhv/gU2w2WPkP7zrzzhs8YVe131ri2BSbCpQZ7R5qsCWJc1xi9KjMjZ1wuOpAVzZi79xDMsH24J1nBk5LLSCksF87OwCIZ2jnV4GyHHHk4RDy01/0AJ7380Ti2kepOzMz+ftpB2G32YrAgu23YY7ss38UQBOik4v8qOAuRTRxiJr7VgX2crjCreMGuqGpLtreKxMzB+FhBBcnlk3TAbYKXUvMsJTWRJZu3HC1RXXurbqUzWP7kACVUOwxu+vsCvPS/2N7tCPyZh6eBUnkxBdqwAw//OphJEYP9M0ws7tJy/MhMxYWyQoXQJwP7SrVCegG2yh6pi0EZ7EXUKiXb5LH0uYs0WE2Mi9lVVZ/tYNuhCgPJWf/veUM1mgfToZqKQCFHN3NEl+bzSwRfZ+u4+loaeWQaaZXX8VVaJyC1GfojEY4q0bbVRBMcLW5XQDmPUVeucSzejLgzcGk5pVpydeZ2+joN+13z0aoFDVpHZ1z33dGJc8OJEfC54nZ51p+JX8asXJQTO078yE5FVui/OCagyPu9+jHTlUsgWgStEmJdjQqOfA4syCc+bUvYSFm4rLUeXExLbu145jUiGhOmx+p8M5ZdOt3FA55N30deoxkzFaBZf5hGPZMDidG9t2ACpBLgxcYkEG0kGN3OZW3IgVUDP3ev9cZwJ12dQrq/qbWvep+4mgQTdqyENmiisdEfTQ/dh761z5uypetEMTAI7XuMGUf/E/sOKou3aYHrZcSRj1YL3VtEeIyTB0bnnDlG8SLqj3CCB7Ed5rATZIUujIxZtQmtUI5RYJUgIvA3qeA8GbBUUNkh6feATdC74uBaMPGiJLyl1impsa3v5f2EQLiv43vVQqyNYXTFNvqFMkCpobKpKkgnKJqu8R0gN0eLvLVXYwItROdQV5JGo0r1KmeblsxuiiZCZCKEdsbUT9bmpfqiqL1MhdkJBJksywam3z62hgbvhfCRdSg3uhM+sQPBw528VvC9Q3ipk4e9rf8WCOhvzfnaM5B2HSCBQEo8k2GFgZgHEzLyT+c5mvj/Xs+SjKKfbjq7Ovcw0MnLL7NaQm7abNwvCNvTBdyPDJ69vwFYNe/SE9lbj8NGqE6Jyu0E2RAyez2yeo9/Hz6L+1dTVIQ8+S0xxenwuoRKVpTN3TFeMPuQRECAjGeQH+JCQGv2cfxB8krz4gRLaOWR740HKhKT7x7f0HzKJChy5zCY9H9IIZJlnQk/geAnWsf/EBq7fAX2Kapr5YIECs0PyHeiwg1lpjTZ4v1/iLfNU9NRY67QWh3N1ejwFdHVs0scaZtcto6mu9y7SJLF1cN9b08QlU4/LRj/Tj4GGUe24sfKUCzAPWrhVDeHRfhQd+qjC3q7RTW3vHSTepwln/xWwHRPH0Z6B4fW6rht9SjMqo8boWD74SgrtSR9tsRlOW1TU1woqmCqct+u056G2O5zvbSsvr10ZAj4UtTEDbAQprykIUJ0Pu6+Wihmo3PnicDXH5iqF/05UPsZ3+9uMNRKpoCYHVjpces0ltUXoXR9Q32LFJqzVq3yC4g4Dpq1zkrjmOs9jGSoijnEJQR8ZGKMIE9nHIpHBESJ5RoURrYp07aTsZr++a2H1lHkVkNDGgnUaoDR9DsB8VA88SqXIg/puVpU+m2dVwpoUYB4zOi6vwbYmnk1xxMfaZ2M9MGtpcbhRev5ofFHqGkqa8pgyyo7noY6X259X2PIpV1KjAVZlWoKBRuJUUpQovPtrYfkNHMyY8B2KcjtF26mFzGnoxKujRZoZT1o47eYMLLgGS0P7rlAOSvxsQ9TY33d9zf0afoOJs7yj7nwfWqGglP0xA6q5QD0zPc6tSOyIDzhrXX2ih1ShOXmt2+V6B7K3sdGKOwZFHE9uMzGJ8xVPwR6oeyWUs8d9bDqmlQagVz4kWSwEEniDnce7yhPoD2VZSNxTPDL90IIsEz0nSJHA2H/DcXrs0QyDFlgnr/xCSgPVv3mT0b5QVHL8SxKm6Kt+fOnHf/uCs3smzRqpmZxf/ys/2QW+sIJR9+vuV71QEGfa6LZe+Ydq/C120HQDMTRVWP0Uwhrxwe0hwknTDpnEVw6il7JP8mFchd3zX4eH6gapcyIpcvpZvWPf3XF6RreB93eLPO/nMkIg8mazLnxCF9SaLsno3xCPtkHnTf9M7PnithpoxHLsYG94t4405mCkXfuwnS3HbaC8aqqlm6YnzOwI2LbiKFjqopUv7o1Z1oruIa+E3imyZuJZxReDfj9qUCAhorSuxsSq+RzzE81blM9hVjoqOzOdN6ygrFTpMrM6mpwKAV4gA36ibmaMYgfdtvMosogBdVlAidvaXWqsCNZKVR8XtSFrzY+9dvuZxBTqxzK8ksjrYlW8eMOILap/2T/gmVWiwlehO6DLxAVgDH1qN6BR7aS5gTheXx8crg4Kp21Os5qoTOTBUkpVFidyornpoTmDXqPp7iLcav7pagMtq2LZ4z3sdW6kKj67M/0Dqe0xHAO7VGVOgwHZhxMECOAJOgpcQTnMVef3SwAfyYcYptGEJMeh701uw8KvtxfdikfdbegU2K0iWWzhgE9YCnR42L2bDjwb67lEmYQYgWFG6Yj4pVgC/AzmsnW7xWm14dGJHZG0bfoSPGO4lHL86QrapW4GLuwbTEe521gJmISjjv4sNyG7Kw42jRDk4F0Bd3T8XzG5zosaiyvRY14IorvLyu8DxqEc1GGWDb3DnM9DUn54a9p3tKZHnQ4eubRIKSx4Pk4AkfzkvLHJC3vuwVbbQCMtO/p/P1oZkQY2XyzmdADoT8AUO5qGVDcRPYl/4HcpVRJiJKKdD6UR+Wdsqt1H1j3Edv42Fx2nlmPiy5Ao6HDhik8lX9od11JxBzOKv08NidANoPg26slcjAqqCEZHJMPx8puo67oLV934IObfnUCuuSdhlivbWNb8cio7O8wHquNDmzpxZCetSalJC1wufsPlT26K8P4O/SIMRwpeOsabELQUDjSHMQx/t8ntNgbXITIw5JvW0cNS3kcy27sS/fjfGn3NwAzMzvTWmQIroeNgmQXf0+7dkVydWGtcJB7Qs9lZcOZVNZGt9ZQ8JY0YHg06EPZk6lzbgtN6959yd9uvMY8ZYxKXqnhq3RaOr3JFM7NVn97rZuvwXNMUj4sN6FKZuCt7AbPWuzBzgtQTnmqU44nNL2TSWt15TPyhDiiCwSIwfM6Wn8ItlYs6Esv0rhYZc+MkkyxXenODE53JvE7h5WOvknikkyMCt1EwllLrHbTi9CJjNuiVc3M8G6Bx8kAUSJ7KSp6E5fa0fEA04gQYWZ5Uj3s45BzgrAfsF/z05n4VQ81XF6UyOMBOzCunHxUzq1o9ipMqXXfy+CTkDXr5Nu/hTzrRKBb+YsN4QIuYv4Hasjj5kmusG2DpRCxKjFVi+rVvdO2IIVo67xpKoHJnp7YujCgw49KE4cU9z/AyH7CK2o69Yw9o/NVKFWTfdNEDNQSmKn9LV7/rkfugSzl2DTnnESG2JHHHEWhZoyJ1YAA",
    "artist-van-gogh": "data:image/webp;base64,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",
    "artist-vermeer": "data:image/webp;base64,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",
    "basketweave": "data:image/webp;base64,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",
    "blueprint": "data:image/webp;base64,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",
    "botanical": "data:image/webp;base64,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",
    "charcoal": "data:image/webp;base64,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",
    "checker": "data:image/webp;base64,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",
    "cinematic": "data:image/webp;base64,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",
    "clay": "data:image/webp;base64,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",
    "damask": "data:image/webp;base64,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",
    "editorial": "data:image/webp;base64,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",
    "gingham": "data:image/webp;base64,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",
    "graphic-poster": "data:image/webp;base64,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",
    "halftone": "data:image/webp;base64,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",
    "herringbone": "data:image/webp;base64,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",
    "ikat": "data:image/webp;base64,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",
    "impressionist": "data:image/webp;base64,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",
    "isometric": "data:image/webp;base64,UklGRuwDAABXRUJQVlA4IOADAABQGgCdASoAAW4APpVKoEwlpCalI3K5WNASiWlu3V/kqS+15fjCDSfNECgMSPOvpFQ/Pd4McI2DWTabT+vXAzQ5IHlGli1pnzjYdG0wNYBpv48fC6eL8kOXpj/7bWzSK7AyIi011DGC5VlchwBPJ/qYJbzEm/BSeOMDa66smoJYvPcPB09EKJ9lUdGNpdj2Fklr0WgLexjbCOZYFRWNlePnslBTG+V7gteAfgedd4lineYrhEINNRqcKVEMAKh5iBDQjdtQQAJoqXUwEnejBtiDmr0ZXhJQz+oX5AAA/vbR0kWkvRGA7JGACWP7zzU9s5hkb5o7RiqKSsjMdnEg/752WPu3Bqn4rqqkr+7BbjgRg8adLhXCoTyU3hUN1Nu8A45P18l5ZUoCGZWKSo26iuJYycyt+EG6WtQjo7Z4XTcFxrkJS3cLv9pYzAm+usL0h/GJ9n5Ycn7ttc51TSfwhUEb1rCgTahrUk0yi8/SEVSR43JjjQP3bml0JcnpbL4Q6fOeakeFjx4z8sVkPhLVF/5HckqtJg17vd+B2Tly5vrbv7Tx6ALo7eUYqY8+0E+vXprvXioYjN5WT/oYKFXJjvDCpajudpG/MeFBhGmdiafVM1b7Feu1eefVMJENTEIE2wzJ5dx+QNyn7UFzocAoRlF4UA23BxCGJr1sr0xoqTsNszsfjsXmjp+EfTboenu5Svzu55CxLU6v0eG9YAHuS9QxU6jM97ulLKpeOt8b3I6gd+4PHXlGtDG5RjA0UwqT4dwsFpOSHUoNHcTDamvnff3LFn1qVX+5Omj926lknXwey5FVg3VMuYxTSid+iXRAa9VxR1f8fvqHZpyEuLQnEiKp89lr45A7bcETuc0dfLSJFkX8BPrJNP4bQyEMkRu94q0RyFSPB1bPi50PEaAPBFP9YpN8nxO2rBmaBpCB2PgmnX8mDTvJC+QcGkZIUXVP0mtCFgDGEatZ1XhCbSjDep+jXPNQnNXELKNET0Y6elsrO22AH3a0T2FXGgdBKpJqNGa8rR4N3lSnZMoAqAeMDM98c/F+I+xDl14RTA2NZhSv8C24nClDNpXZht+KRZrGPYOsDz5S9qs6NFFOlo0Pbcb4oHx3NlKbDU1m3H34tnFNKso75bXDUXEwqSFmJrjeygnYBrs2vvYhnGa1I0XeW9j7DAaa1QKp4mAaz5X3Mjz9ujLMIgaabKPwAqbSVk1Ngn2IRCqKz9weScwc8bNl6K6wku57xBlvJP6q/berPzybkErkJ0GUpDToJoK6WIKpr2jnJGuCoBmrH2heK30wXJt2hAmdg/pUTdv+SVvAqTwAAA==",
    "kilim": "data:image/webp;base64,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",
    "linen": "data:image/webp;base64,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",
    "marble": "data:image/webp;base64,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",
    "memphis": "data:image/webp;base64,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",
    "neon-noir": "data:image/webp;base64,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",
    "none": "data:image/webp;base64,UklGRvgFAABXRUJQVlA4IOwFAADwIgCdASoAAW4APpVInkylpCKoIlIKiQASiWlu3dX9JOB/Ia5DUqseAeZY2c5GCZqsYGq+XZIULZkkgUjUXRaexu9HuA9SPjCk+tjY5eZk7Oy5Xk3awQXe2kryBbVj7/juA5e7Y2l9KPjP8ngtsBwBWJ+Y0mF07/RK6kFkxPujvr6bVfwMK4l7EfW1bUDMVi0EzAEEYCxGIAAiiRO0r4PjZsOiwJRqPR/0q8gVtagtVjrehiqa/BIydpFb4WtiI3z0DqFRIZh2qta4g54gED42u1tpZ9IMgs4nCb08KDe7+dqT6e5bcq+PiwXtiDsItoCeEQQ4pAy324UaTXsIgmfapANCZ42sraKesCeELgNGPd6Ko/vdnVXjis/FJmIypAAA/ujB7+7aT8jx4Hi/i8weixeeMFtQ6Y+XMpwAddo2eNcCfiHFwNRsWoeaHb02eLwWwBwmQeP80olDyR/F6BkkOD3XTBJqd0OQkkmpWOvn316gEmYV/MAD5d7+qRQ0Wbwrej2prenb8JW21o+jKhLg1E2vCTV+O9ZUUpzj8NNO6TST6N6eRJ7g+bj/vF5Hzi8mKD0c9sWuROYTo12gA1iJLFLhW7kK99/9jywBE/0gSyMgXmfsSVJk5FKDTZwbg+PPKL0fH2n+EQ+K070n5CwuU7Bjlrfp4xdB5jc1kG7Lw7VelxajmOzJLKXtVG9nfi7ax5zgfQNNtds21boekF/9FdtOWyTiXaH4GL1p1V3YJYPE82zxB2I6I9FGH17etnQEp1JsVgaoTu7Po7fH0u6UoM79IMt18t/P3GOKr5/4uZATIBDjY0uws8UA2f+OQ+9fYYqAk/GQ7RxYnoSM/ekhc/Gm7NIpZRcttlvtj/330ITBS5d+HuurpI3rYq9nbm59LT9543/nTb31IduMaoAoTv8nT9O/wulMnhT+NzWDbKh9T5Nzduqhjn7HO9SxSyTwqyM5qv/+uXuOKjQ+K+UXDbdXEAG4sQD4Cp9D2P0G/zKOhbtXLCUEEl9WvALT60kCTAhOSFiJPaX2yhiExr4rnVZLLSXjGzpxr5ee2ZCv1LRd9bC5ETJ94BI05m+W8ZOj7bEKpM9qRQpZO8n8ZvCJhUh+hvl7f8eYY4dOkRIYNsNnzumDzRBvoyOfdvedyKec3/vh+8IGCH8BzJNh/cTvsphfrxJPX7cznscbKPvD9b9YiNjFlRQfXCOKVG3I1sKTjwQH4jnTNOsygYPQr3Dcxck+WFT4nvCA342prj/c8NOmH2Pt8LIQgVaTd3EYpeLrk5rabyFDgmmtfaAPx2vIdnh8FSaDuU4sYjvu2u41S6kEmRjmNdYki9k4CdGLLVMqqhICgGGW1C9RDib3Vs+IT8xFVGZhf8hr4QPnbmeT+mQSUIE1xKltnl1QbmfPxz94iwnR1R8zIdX3zH/52BiUSXxt3u3FOw0F4vYP2GumGu1n7bH99u7F4jRoll2eHBZVfExB3r5GNo4tv/pwZQtvEMkfu0/Qoltgga0+OZCpmEHjQ0oZWsytapVwFx3rio2bPSooyU44fcnmctFL2NExoMxVwKqSnhdlyars2cxmQs2q6nl679mxc98o2361XZiQL9bJo+BgzrNCmW44YUNM20N/4IPYQxz2M7pTv4vimcYGf3gpTpvEWdkZRNsGae/dUNW9OPPBgKRo16UJrByYVIt6+5daumksTbkS8XQxLLeqB0DgLjo/x02hvLPegIYU6uSEjfLwzhShd8ySwDDR0GIahUGl4s7svQZoV87STr/iPRPKcGfXqc0iM299jqqPqi4Le5Gfn9GcsJgKSGkc3u3nQQ0sLKrCDqKIjiW8/RjNlT2WCSnyZkOGyUou/VGInJAxXsxL6//v5lxT2KBUdVx9tvvvRBAFY2a8Y6vAlAxxEMGXDXAXheLC7e7pNntaoicjEyQaG3Reki9orhBftBaC5guRB3h7Vd+PPpqDXZMCj5Dm9+aKqfRu0rrLdCOX2ZYSuijqCvaX7w3Szj7aDgsDue3nH9WWoAAA",
    "painterly": "data:image/webp;base64,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",
    "pixel": "data:image/webp;base64,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",
    "polka-dot": "data:image/webp;base64,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",
    "risograph": "data:image/webp;base64,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",
    "seigaiha": "data:image/webp;base64,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",
    "shibori": "data:image/webp;base64,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",
    "stained-glass": "data:image/webp;base64,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",
    "terrazzo": "data:image/webp;base64,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",
    "texture-brushed-metal": "data:image/webp;base64,UklGRtQFAABXRUJQVlA4IMgFAAAQJwCdASoAAW4APpVCnUyloyKiIzLqsLASiWlkD+TYP+2/ev8plnvfP+u38ir8ZC6gXwxQygQGh2ALXcKfPGU27KvHP3DP/3PKcNvj/WtvNd/lAJTSDnNay5Xwn/WLa1hxeU1QXecMJuYQWqDuZEjZSa4mslQ+9svTZ1mdYj6CQvq+Opx25YyleZ0u7KMYYIIgQCNYWEtxEOoYo3VjUaKOrzeIwYY0Vq6NRCofLwFNME8gReRuRfEr7WHE3ieoWuEPKO8Q6z2luqp+IcoQPVmlx94PO0OLx+VuG9AvDlbrTuSQTI655yvY2iexCOLeKiYzJIbpvjs0ldZfdpg1y8ALCY4q7gzzQeOk3F0L9yknGVu7Xf9j/NpjWfE5sYx1fGpj6Cw12sbM3oICJGTp3VzxHEYn0xrLkHJmj8dHbWLFxgAA/u9HIvpWTHaI7OdC9mq3ihFSjed1R71sDy86KAiRbq5OU5i7oOidn9zIjUGm70kzlYavUGRkCPBqQijLEJjS8qpGM4yMW1f7sZMit9qgdnkG0ZhpEag+icJ0NMg2OVngsBJeHv3nvJM/sYps7EeGElmcSWW0bQqu1l/mQaThcQBn/lzX3a1FmxgtqG6GCqWh1yGWlNis/CqDZfz+kcQjLrWeh6QqTKDX53OH04GS1po7iuccTpafD6jq+aLnH5o6QVA8YBJoS+ipt6xqnf6IqxDsOF7b0zmPuO2CzNu6kF/NN9ghZBJxvqWbcGz5ADHfdLJevRomtN8/1QfzLgwweSJ05Tb9ybRjLxJpbGFqdqd6FiePbcgEel2bURW0QS+F6eUGyY/52llEFn+3gcvx5uyQ7yEW7cZRZ99THVaFIAjHte5JBtsK157zKBlCs7KfKxu78YDKjvKu9kH6C2fxO8HQvP4dmqvnKJ8tHHq3u3ljaSRxok4GFAHdp14QLS7w52o6mRET3VzJbWkm3egGnT0TjcLoEXbLNZ/x/FN8Ti5064gXzm6k/aQ4ZLB3G7dH/ljAfERZitmTIEec1qe1R+ISHPiBZGR9ailbGa8ib2VplLSDvA5Vcw4QEH1XPUIbTF+SpREAIZLAmP4SgmtW87EiwpzBn4tMF2XYY/FKXwZ5qZGk0snNMrp4avZoSna7URldcGMKrXquzSYZkGPa8vjsOaFnzrBCnS16t+mm/uqvCM8OjuiIdaca9imVWxm/Nq1CCyorkp22vhpaSIlQQWKd1NsozMX3TH9+X4M2smDrZxCMFmRLgC4q+sTuSFWsmRmGabQT2LPRS9vI1X6MYx6fvm2loWhWW5LIehq4MTNoj6IuLQDgmDj90VixtEJrQIRa8dCiNvYeuJyRIdVMSjrP8/fYBnsv63+phvmaBkyINOZcXojQmyXh3sf0yXNb15zlUxoWDF36fv58dxDY/GKO3IiTv+BpJXa/ZWhYyESBg49UFDqIUZJ4QaVhq1uV49ZLhyRI7d8s8q6rGhQZBvlugtPDP1zUHiHW7cmXeYFJl1GdW8+BbwWNhDEAJwa/phpxJpDqAbm9B8IxaK54ffv/g9MU2SH6p2DSeTg0T7TP5CDww8p4u0v5aS7sIW1wB6RYXOWQhwF24+fVFZUpzFctTGYbPYUAveDvMx1L9129Xhpi1axGaTRm9gbV8ObqgQbRX3a2R7b2t+kNt5rcUqqoFYFYL2klygPswzYJoRixV0RCWdzhFRyJal9u38QD5A77wqOYYp1O36KcIbCOTa8oqIGmMW9D0ST0qLSMFy+SD9Xt6uBKdCtMimtsj3S9n1m2d7QHL9mI9d9ZW8nyrqJ0iAXnNAxHBcpnQd9GTlnlBGyNWlEcvrnaemajyT1KeiN5dnPh6F4OXVr+NkAAUsa4pe5rB0O5euDWpWp57Q6TNOoz839sMFz27DGYql1wexF71Oprq0YpBsTkq5DKf2P03lbwWLQitU3I6eY/GDbdY/TDZovMKJuKkv86UVP/OTDnqIAA",
    "texture-canvas": "data:image/webp;base64,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",
    "texture-ceramic-glaze": "data:image/webp;base64,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",
    "texture-concrete": "data:image/webp;base64,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",
    "texture-cork": "data:image/webp;base64,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",
    "texture-denim": "data:image/webp;base64,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",
    "texture-frosted-glass": "data:image/webp;base64,UklGRuwAAABXRUJQVlA4IOAAAACwDACdASoAAW4APpVKnU2lpCYjIEjgwBKJaW7dX8or4AWGv1OXvqcvfNvQZn1TMurWCHGzAoWul5t48Vu8QzlW1jrTVGcSMi0XSgIukoII1a4N71wb01g3jp3BRHpwRNkL1xN2MsSSOeKyUcM4AAD+8QgXWg4m5+g+Llk1svM97RaqNbgr1I0vKaz8lIThHdeVlPn9+Slht7a0T0rlIkOpeQQNRoIHRIP6ivSnxqm++mm/gXRS+QiPr71Cv+W2Hc7P7+jIKyXbrGsgCdb/pzx2osMrCpsS4QjcCVogGAAAAA==",
    "texture-handmade-paper": "data:image/webp;base64,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",
    "texture-kraft-paper": "data:image/webp;base64,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",
    "texture-leather": "data:image/webp;base64,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",
    "texture-parchment": "data:image/webp;base64,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",
    "texture-plaster": "data:image/webp;base64,UklGRngFAABXRUJQVlA4IGwFAABQLQCdASoAAW4APpVGm0qlo6IhplRsQLASiWlotnx0E3YQ8yB1v1F0m/eaXtsP98GSyEUz9kIOcCo1cj2vW3OzYasaDrtdz8Pzoj0F6shjWX6US7DV2DlgofYBNW9xaI68sTlYkIuTq9qVqNZFKWjr/qi+fHYuioHH+tV+l0hE0tFmCSuFvwItgADb/f8PC263U4JCQjC+rl4zFgFqDNcLSavldFauGrxB2YbCjaUw2rzwSvCl5wY58eqtIXatzge+NXvSnggSyx5IwPpxwoaG5mlW4EJ7p9VHBeS7G1x0SMXuREpbc2rtORYdpdELkJQKYWSmn1CkaSCHw30nA5ukmt05B8PT6uPDS8OnYyh1oOyLlLJkWw9isq3ajEWZuxHKnEwTtlvdb3p4ofwSgnZjOr8AV/YLXmwmqpOu2by3EaEH87B8FLt/p5Oqs8O+EvgA8Gme0zhMB/hUt/JEmy4X9Tx+WQVpLYzKvYVUlbueLF34gACNZsqfh8cIJE/pLpcg+0Xnapi91wQENSnktCbZauFbtEUVNTXpl6WUF5y6/VZmCiiw9ScWcbHGoPGyL2NNUc4pIKDAc8diYG6RTmI7CE/MuhMHW5Q6QeaVEUFNztXgOdSdCFC7x24/lR2vnHVaXEjSdiFtfCvE88TyhEvtcQye7rTNLhVfD2k1WxVWRUgfFbMuh8dtBanO375NmtUqBQCclXPtpYCWAt92WKY7nS/3ml1DvRpgpc5ZlXwdelrIh9ZTyb7erE55WXVxAdtbgB0x3w3GK9q/SAQrFPa/w720+md9uf7YpPprHP8jvp0lHkgMQbLzgeoiTM9ZhMSDmu3V4UeHOyqeL1eP+/0eT8pZ4ps8GMAmCRGlOZwK7ZJgJwuigjHVs5sq69/vzRRJjXabq0MUtTSzkqs7hAuoojJc/UvcT7VcMBayaRpgprz8MZoPfDQMkiNF61vJ9AOzpqRtbr1bWCMFz2ROqjtbxNyj5Gxe1pu9KOZtmQYWx/a6uOjL9nC61uqT1yskxPwb4KMHj1t836iP7Za2p5yFBWouZgr9RWXiHhcJElludb8nhwLnmoVQRu+9A0EC/xUVg8Z+wL0n+BKOuz9d3QBj7qNEdUo6R/s47d4wie4f4KzodG6vJ1lXXd/LMxdlXPrZ2fZz7jZuOPw3i93hKwUTWW2bGU3c1RlNeIeTxmboYLEaZAtOBCvUmX/lJoDGpPBucqSfsLbdS62QjbBgO4nq0WNNqbN/pQyandOLKlbYRB2+m2fmgEnYfEk4am0iiA6oLpd6bBpxg3qMaCAU9IhkQNmmxp+zIBMAhI2wQeuIGvVw+GTKDpf8kGUhLuxCE357qfkeS82xAkGUWYkjk8moZGrKKqyADtnj70iSikJblw8QtNh+CaJKfwtmUHEVLwMELJvY1744OjwgzDVVD4QMBHUZ7cnzJkhfQZ1YNj5EcqUysjIlqj6evZ1TaOkU88i5tuhSNjoSnjHqljgf7SdlkYMi8kJcohyjLZtiTp18HAufU+QkEAPezJHLg50kq+BUi8tIb9LRNoICogl1cNiiXmFNxMC9No9lGKjfSfjkwmFWHmYuP/fB7pXse0U29qhJR1gH46piXrvjSciDYCL9GcDQqdCwdSJzfd+siDkgVL7qK5QYBvtHhy40Iqsq72S3IGqH98sDja9kCH2e2bReQi15iIsM6YgwgZczJ+hq49mi1w584M7jdYbTgzkNfcz+4v4PatjNEt3SLpV9O6L1aYaeQ66aidtPmk+FclebXVObjwlpQmalh5h6+vNo4RPSILBsgw4PlxhrWgrzdARbsCPOx8+R58/24EAmYpCyLR5rYZCJFWKRWEAAAA==",
    "texture-rusted-metal": "data:image/webp;base64,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",
    "texture-sandstone": "data:image/webp;base64,UklGRtATAABXRUJQVlA4IMQTAABwVwCdASoAAW4APpVAmUklo6IhLJgMGLASiWdXumH0EaeH3u6j//Dv3Q76p+995v6r7+f997e9uf6TwG/xX+Zz1dj/7hxBb7xwjhv4S/3f/26bvAs/rdEv/8eYr+H/+nrBBrVvNIARiZ6BLnr+6t9PSoL3F+NFjsn70eoHbt1+lC8wfiEqVYw1VHL6vuoz5RAOA1alNbt/tr+I1iPLPnqkAzwFGIR4afUga11xXVeTMGkL3CdK/Dl2VVEFRiWRF3BV5wDISlUK21yX8VgmHVeBoEIPc39XvIB6PyufdmgDEM27SQejJbB6vGBZPxUD7ewO0wmhAI+4otwb+/6u3YNw+MI+/n3hRg8YLA5GKNI0tWkCm5S9zUWECQhrpCLR5QoI6FFa2PHuoXtmG6I7bjcP7srdkJtE5LWv6wPAwZ6uSwBpwTpJc3s1qYuY7sQ84v3728jqC8azNSAlqrO5IKRSKEWZ2McBjjqpMgiYYkh8xFJbphrFN1ZTy/iBr6Tx3P2NPzcLV0m+fLUHki3wtOhcUtVqMcK2kDGDDyK90taasExF7Q+AG4MO9KnAXLMnjXCUkxMzQiYyBviFiLsRYZxRUQY3CRW/mXWc5t6OhbcmAwVTrPPKzsrr60/vQbSd5xvVnBbgBPFtElryjMfstnj2Pf9PKjDIcwQ2YcJ2erUsQps9a228dgmH0LTUm1PUQEQjJlHny2hfURvaIk7xh1yJlMVa4BRW5rfjQUcshf34ZcH1w9o+9Iimu3qu8V33Z0G0b7nJtS4jwgwo0bnsYmzoOQl7Vza0iV6yI/Nq+iASZe9ENXQDZOtkIVxf5gjdsi/KwGg1WASX/uz27D382nm5HPIj9UZxE4ikdvpI5AfhL/wZuKX2HW5/U31i6XG5bkh2QBbUEMjVeWjITWYBAA5UjpWcTl9XQpe6z+wFKI081zyOZAAA/uo+HK9z50P/4RNDaUl6tMl1U650UF6WLH2JGZfm+0v+hXfV5MZB/F2/W4FrA7/TaxNPtj0JXru4oiU8DSqIMgYBzKL3tnGIC5/DpjxUyZl3CaCc8WpopvDGxoNL3Y1jMUe2ULeBSR/SJX+6JRrxIJ9uuUqxpOb5osXIB31cJy0BYGTUDNbrOcfAnH9B/V086l47xneNkVgLHfb+M7lo2LLY+pFRyDbsVqSopuMxMrHldipjlf2iPayfczTFTjHtmEYZF2fezEW+/+RNi/udspeK3SW35Z4AJuZ2kmum4u+dXE7QWw70Fzvd860v+qrgFutyVNLbIFKL8A6/+2rGlhqAECrFqcNe54u7nfqy655lv0K492fsrIKUL5jeJkHcRNA1+5RoEsVA+ZS+KJVMgJ+jcdmUdgg//kLIAjxYBHnO1NN1Wwhbk106ZjJ7bme82+g8tD6IydbPvEyXknn0rTNB9+Kl4E33z+048dFnKLg9KpbT4ml+KDCrLZsbErGQPM7rWUej5DozFR3JGFaaJoR1WbXpOIy1v4T+4IMOcNWXecKHCl9rvcwh3SkXzloFBC7jn8GdSb8ojyC9vyakYjLQdVsLiA+X+Xz8/x+bBSCsIUJV6mwJfHJIVWpFTp1uuT3Aoaifj6iNQ89CwpHbuHJJ64YNndU8ZVWuD7gNVvxfl0C8pbIYbOMoxxExVd1FrHS0n/7oRV3ol/ZMMrCn8iFAnWxoetyEBi/4Sb6DRA0EoSkdZJEF8QmVBXoIlZ/5C74obvOeXoA/6bFIVeD/c9Ilwu/avtS7xpmbyLZQPiCMpqLfunsL36nuSaXlWXHr74d7ClyRt52oeNPS3B6gmloy4ZMZlYl4pnQ1MJGD+BQqLEp8Y/cUqHLKjzsqM2tCKE0FtdSviVFrKuEMOb5GDY5p2Prd+zY7G6e/lJbusnUxA3b64YPRqL9PA+iqFuA5DbLVSXW0dBiXKVujymypVnsDvek85Tb7wwwfvt2D7WE+8ItJHsPADpUWLUcmuXA+18YLm5GWPfRJJjYIB+ox/KQn2FYdT0/0d3D+BndfYSXOO586TF6hpQUSCLe0mp/fth4bM/yAETGgbZGM7RT4YulIqIOPNDUfyYzgGr0UKBDi9Gbvjdf611yQ+PO8hdOTUPMzrYRgOljYvKcN9q7dK+T0/ph7z9RInHeNsqabvIIa1JdLXuPM4DRRKX/PB3ggLRn8/2gnh9Ji9l5jjgOnT+kyE/xd2/ib6m+pFmNaAJPVr29rlmM6wWx+SRDk7u07SeBFbeNSxPc8bWYuqjw8cAVi4Z/xMaddODH7XQ/Hk2VujJRPo6UecW5RHjHG22DB95DzLbrsL7N2kQPio+V695+L2QqewU6v7gtaLAxQ81Av9+puzwq+09WIOrzbjy6FGcjYMDggvFsr6pec+h4pbnJWod0KOYUJFLk74F1Fd0mr+0u0HptbaPhascDX5TB5suVfQEf0+Cyxgz53nZO+NaQDRKHwDL3clpVf00H6hNzoHTJLlQVNGxqoUNL3rQrEzgJVOJQDZzUXkDw3XnPRaMyC55emolth1J3nK3jgK7Rqr6FXPNvNx3jAQ/9zTXCYdmmBQm2RmKkjb2F6Z/uqaagDtOHh21cG1SLj/LQeErwujMLREHOdSdBqq+O3BBEFAfqRZKA0PaoScTZvvKYW/6FJTWZZ+rBd2AQjLf44pJKj6ugW5442JTXMAtc1D2KwXu5VvyGYpZgEIbntSq1iNcWMJ60+mE/OlrhrAKgP8v0BGXiLcgki8xw91EblCjlcf5USrW5lqt/HZ+95OCP0btwo3rVbNTYxvFuFb6iR99Ne7Wf3nYKyt60Ksm+y4L1dmczhOnaFarvjnoAHOCHzn3H0c3/q0JJjn5v2T6FAHVh+8r4GRXPp+j9pCLu1wBR8yfonqQAphVl9BpsYqnfuR3l7v4LygpqOopeKm4SKIzueDUlNnJ8GaAKItf/E4Ot5KWkR2z5UWSMTacau9VFF3DBXlRvnjI8uxe3ahwQBBIAqtEE7MDl9ArNS40IQpnWYyFs5Gdnsvoye4JW/E6DxBhQEdhL0VCCH0YRM5eiXEOfOw4NIywcM6RYRvvfuJk6kbVB7oMG0+OJNfQEtVYAWZZ+R/OyEEiBrgAV2qE97kJ647sjYK8Ph0LseuSAgbW6vRsISe4bW8LKwM7ZLoOX5Y1L1ryrEWjtQM8Vgg8ftDrUqvcua0dcPeZD4F4vkwV8UzmR0vSyv+UOp25bK97emUezwuLqe0KSLH97uY4A4AX/4Q5JRjUIPAacsupchvRQiUAbk8jDeT2KpHDA8RlCY2mCgRh4l8sGb9/JhovIYTRGETkq098zY+xYKgl0G34w3K7zhm80ZDsSSjpG4xmsy267gtjvS78ijtbQHBUXHbWE34zGxMLCfq1ABvCw1FThIfG6pLQJA90RQFWEZlEkPnCnESaixcnbhfz/bqlKnChyh752CCed5Be+wsRbJZsM7ol/oPbc6BCkDKBhh3o0zi8+D1ctoWwgs6JgP7Aq2jaGPwLhOqpboYoHWnrMD+Q0x3YIkr8hiVduPEEkD8YR/QrbY3iY8PIuj7BgF9uHiIIIk3WlNiNsSrXPdIL+sdGQ930rkRBYdlit25vErWAww2JcRybcsuZ2qsXbrlANXdi2rEn5LiUlE50t26q050cayBEHTD9KzSTTQNKeuBPOYoSTCxgd6O7PK6zZ2jYTF43jYaoUrS2DZBXfR+PkhVj39r4xcUkzAl2yW6tQV57yHVo59RKeJtlw9OiuqW8mxgb0eTGZP5NaHAaydj/SX7rfcWI5MdieEbZ9vQpJ1OanCPFekH0oEOvY1pqqZqQ2P8VLnVc+BbHMeHP/u7PffUiBkmUg2qyKNpXJodrnDMcoNGMCzAhMewatV15m4h3rYgOhKqMMfSWUMU6SNXyVcsdObETipLZygwEY/xYnNkDY9cbFdbHF6Ctm0NFXuBs4gcc7BCOQlaW/MgO6msfzPgO1q3Qdf5nMuViUB5jdzLGjlUaU3/R9SRPMQZhFIwhgdD+W/ipziRRguWQ2gNA7bO0KvO2jbIrY+kJHiKZ2gLRxk7nhxqbeH0bO4vsDJmNzkh1ujdOmTwzdChIYHgW2W9HgwL5Xl9EhVo2WJE3s9EKtP1/A8Rl2pYCMFbPyMU6/lYqxNVZbJxGgCgM/MGuOGGxo9s1gktz2lkc8OJj1ORWeLKJe4qLFPq2zqfO+MxcC6R2Y5KZ1vTRf5Ud8S1bq2luVwiciTItIYE3cA/YxeDVSih8EXMpoJJbziLbjne1smt32K73MdQkVeYa3sVY4JIX1HIJUUvnL/ZZmwGzwZ25qHL8YFYGfcDP/kvP+l/TOiQ+xa76jHzAG2zhAWn6ufsxSZwG7WZMALCLSG4QuYBSOeoUWE8aousXyu76tNj6QMAGcxAXZK86t7fiZ3LK1z/mc3Q9LJkf78O21yg2MWhXYzyE5YF9tbEmvZfNGiJREezeDe53IHQDRGloi3S7zEzhCBCKauCSD5VfcY/X00EQwrg/eOnbj2rCeBdMrddEDFBiUz6Gq3DKbNuPiPexvSYavDIcvOqMvHQfhRPxps4cOcmCgnP68sr3jkUjxtQLz2SQa2YGtzxOHCy0A5nmRUO9SF9aEr6rL/c/bJfkU6W3l4zAhfeyWl+HqvK4vRN8bvV0YooxBUfGCa91HmVwZ/zLIdvibg9wgGAmM1Djs8YDDr3Gvu3KxlEblRR1n+xweKYMK0hi71XT7WDOCT7LdDUWKY9uSJXHA8Bavtj2zdR+8lCYhVf9nJjK95+tymE0THqpJV6aUkskVR4pzZUGqsRShTaztmfT8W0YFNSJFMvCNq6UwxWgPZLrFY14BPnXHhiEAgx9FFsWTjCKC4t5GO/zWhZbrUKw6eLRkQRs1oe6yNIKp+ghYfryUr/QzYzETn5dq7s4fgNnwEERSnN6iakvfEuvt5l3C1AAO8L1tKpbohS+ozM64toDOkWY88HqbdzU8zu6SuXph3LPBADahifoCciPfzIYujGJBN+sfz2gEsVASAnlDhF+QCWy/usz0w5qbapP/KiHFCCgIMuuuI+KueUEmhppaFlkO2FwNpbK6dxCuNOo12On0l5crBK+HnoyyfKZL+U83dj87QATfc8RrVaCOadVJH5ppvHsLJ7Hws6Lzc85af/Gq4UkrAsv10pKliER2cOrS3+CCbXNnp+Arl1Yg4qxU27frIsfuIBQXXcvq2qkajAMxnTigHY2YJrk7Cv7UXh9AzPCDt8z1v4ZpNcyIgoKUFxp3mdJ6namR4OwCCm4UltlkmQQRejIvsNF9dOP6Ay/laxeCxCrUuzNAsGDnieDAUQTg2Drbfcks5rAO72hA2UlyPX6NECg0XH2BO4ArDL8VOPIRrWzh6iSgUWmTZ6B+jTG6hsvoeiG6lUYCBmKPodKIItSdIuRGFklOzuPA6bRqGc26VX9mZOGwIk/Xm3T2bnWyCRVZ4nWSMJptcDZyDwMoUtkRpNXlDb0/5x7I+K5jSzeEHYXhSkP6Y0L7+L9OeAVqqEvoWKx87Pc9bCW2UGHU0E/u6wJWT9Xjk/T851uys621ppGVDIRJeeqmmYeTskfUUTVynYePOnzx/SOaCNyi9ktrz2PIMN5A8YII4aGWYC4Qj3GeTQozq9x0a6i+Ph3l//t58P1aGGfODhIz3QMqY3vlPjNx/EPdwRfHgPvY+bExJBvvFX+JTiLVTN08umR9SAsuDHCQSabPeB3eUQbSHIDd/wv3OeQSfnBSetVlf3Nj9Qx7V9zNyrTq4nkS+1+GFV38itlLHfqgxG02hg12euBo4FC8OMaMIDwKc/AuTwfa2Bp+sqyTt4EWMUeI8MN7w5VF2vWZQrf2KlCu+kCMZuyHyn43bRAmQW6DbHsjbf0mNz1h4C3ieM7Dew4MsyNF6/u7NVhRYgRrFb9hfdij9GUWaTAX5TMPJLpelrGgJGwvs2vs5sD81K4AnWOEFMwH9IDHb0Iy2v6KSq/7seoJrF9TQKuqQooWoWH7A7AcctzdgFqiUBPO+RiFiIonZ+JS5nMF7EtF46tuB4PAWQTIh0SMlxshudjNzKSHCA40JsQpELcGR8o78yYgRRKxBYwvUFoKIaT6UQEBAXhwP8ST57GXM0EhDouDaMFJjeDTbkjawe0/EzAchZIspHbsYthaAaY69tbbpo6tdNAbKHeVN1rHPSA1SoEJFLQJn3Hg++UtbqOYK9mY4Z5vXqY8OyS9RFvc2GsGur0F7HhsoE2YrHIsM+NElsDvjQQrOrUsBK7vo98dOhKhgxqAgFdahl49dY0CSoV9WgCEAPI1q0tigXjLK/+PYx+ywx/qnBcORmDHkQ0+XdldkgXOwtUNL3Ok4NS/Jb+cB+suxqLgJjOq9noJTm4FnqC3z92UvWeb3BioEvjGWXxBU2soEx53BHo0PjXcYHy/8+Esk6b0DBpzo90NHp9rK02AA/7AJO7NoAfNJPLAIfHCC2yI9H7mbiKyMALapW8edRVC6Y2w3PUrCmwdQcHiy/Mz8hwlA4F2qs51NgPmgI4yUS7ZmXIuFCqkhDac2C+zpwGTlv6U0YeuojcM8PhPgXgFfzObcSaCojfKlxXVu3J55UKYCMDO6wZMJr/FuAhi8dRjTp4K4d6F0WQOwjskCBwKOT5l6GuP2QA7kzspNDaq+k5p3Rl1zdjH3LnJelAm4JrqtEZUE3jglMwkyfUbQNGKhHOITdSf28H7yb8V0yuGTk/qrCdwozr98IfNhXnhp/uUHUoHX9mc5SHqAayz4AA==",
    "texture-slate": "data:image/webp;base64,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",
    "texture-stucco": "data:image/webp;base64,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",
    "texture-velvet": "data:image/webp;base64,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",
    "texture-wood-grain": "data:image/webp;base64,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",
    "topographic": "data:image/webp;base64,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",
    "ukiyo-e": "data:image/webp;base64,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",
    "watercolor": "data:image/webp;base64,UklGRuIEAABXRUJQVlA4INYEAADwIgCdASoAAW4APpVKoEulpKMipJMJwLASiWdu3V8QqRZsx419aHCY5mZYmL7X04FIex+67i0Z0/pNTv+G4iJHxRqpSi+Zx2zyxZ+wdkhng7jXHmzEKqv9qyjPN5BWLFxzX8B07YydXkGXiUplTeAFr2AuCaJeSGDA4o/NqWa9tiFCEGF+TkdHhEnSKG155OqrrPl1L/0aXKmnXIg3g0/lMDOOFrxpoqmfHWpX1UDdQ08vHS5Gea0w6wm5wVJgCjP/bRic9gRkLPciWbApjC4dtwjSrSVteWNUuziX31+Fo6Qcxls+IoNcW90VFsirMDIyGdaXbdD/3NinQGBdnx6nhnzjESDqXs3DhX3vrua+C1KVY1yy4tGQSEf+EQGm8AAA/vkq4Hohg7jMSXpOATa7Zs/UwGf1D+sWDJZXPtIaZ8a0XFgw0AyADOaDp5uZNt+rnUVweARd0WTetlZv26EeTK8s1IbzOZAZQq25NM94yeEnMmf8hsO06DNXym8XuS1jH3ZDa6U9fgq7D122tpmLkAEnvuL6ESLX9eLr482nGFw8UjW6Lr7Ti0mPSvF0WGDNphDVhJqFHDBwH4XRmCwVYDDF1Dpd9UnAHQXij2VrGQlnNNJPYwUwKSRE6n03+NyJkKj+3w6BlFcIPBkejYM6lxZphO96fK3VtVNtbIwxNXv91t8zG8UNK8IYRmposikNjhvCH7mT4PotBQddhrAx89pM72WM8RvmBcofusML50byRwfcm4jdeRceHUEcm7R9xPLUqdbnD73w1x9bxnAWpRvJDz9Ht7PDKkWYT4FLuX2eBVhah5TR84xfV6Rc5wncqil68mF4AkjNwuULCpWm1N2riRC9PHIhcDshpDINX9oibHNpsrGUvOx4Ms22cR0k6a9v6ituIHwVafhv/IYuU+Fjkjy9Xk69/0sA8zREmiwXChhcadEtPGJb+xN1NFFKJn5JzSyl2QBqRNe0zuGlTlQuF0y9jL0O5ciYKS0IDAoYaXcSx0tDGXiTZt41D7pWKPrF9HFxZ2TWvGO0oEwABFIVTLxFB/ilfT+5htkooAqsfBd0xIZKuCD6YcGzrLd0iC7kLCH9zQc1F/Kd2zyATV+BYRgmay1y5ptjaS9e2N3kcIs4eFevyLdRnOmPnzy+yyoIMqqh+WHFvYg94xq7wiX8FAJLTwHcZX5t5KkkkS/X1TOWmwzPLYO1ZUedNUjqJQub4AHCLCzw+lUJF4ntwKNFxnDOdnb6bmfG59u8Yk7IBlPKMjlMjmAO8Ee3s6MPTpu0Pi70JgxK29+BFDAJcRSsR+rk1IYBCnV06J1DGhixLTxXT3BjBI4G9q2sFIJFt6l1+1Rq5D2cYz0g/YkWkpdXH2WxLW9RB7H5hY31sRXh/frBqd1FZEFcpZE4HbsjUJKzQ6ckC1fY5UBwnCrz28OygLsz4IqTwcI4hV+FfSANUy1B1WvPniQ5wsq21jqmyyZnhbELKKMBwCpx69DL03/R39gFuMNBLT/1SjCEgs0JZ4NKp/kGW1Zo0S7+4LAGlmZ9DZLEAozHqlU+DJIVhwPviz2DBbxllVDQQ2zrj3ZEoYZv5ON8hqL8qiipV9qKqF2UYtzAfwZUUaSFQ4aJHRL5p500TlMRyzd3YLB92HOARrAAAA=="
  };

  // styles.js
  var STYLE_GROUPS = Object.freeze([
    { id: "image", name: "Image" },
    { id: "pattern", name: "Pattern" },
    { id: "texture", name: "Texture" },
    { id: "artist", name: "Artists" }
  ]);
  var SURFACE_GROUPS = Object.freeze(["pattern", "texture"]);
  function isSurfaceGroup(style) {
    return SURFACE_GROUPS.includes(String(style?.group || "image"));
  }
  __name(isSurfaceGroup, "isSurfaceGroup");
  var KETTLE_SUBJECT = "A single polished silver stovetop kettle, centered, studio product photo.";
  function thumbPromptFor(style, snippet) {
    const text = String(snippet || "").trim();
    if (isSurfaceGroup(style)) {
      return text || "EDGE-TO-EDGE seamless repeating texture. Abstract field only \u2014 no objects, no kettle, no focal subject.";
    }
    return `${KETTLE_SUBJECT} ${text || "Photorealistic, no extra styling."}`.trim();
  }
  __name(thumbPromptFor, "thumbPromptFor");
  var SUBJECT_TREATMENT = "Render the subject described above in this visual treatment. Keep the same subject, composition intent, and content. Do not replace the subject with a different scene or a generic demo object. Compose ONE single continuous image filling the entire frame edge to edge: exactly one instance of the subject, shown once. No repetition or side-by-side variants, no diptych, triptych, polyptych, grid, panel, or split-screen layout, no dividing lines, seams, borders, mats, or frame edges anywhere in the image, and no text, lettering, captions, titles, labels, watermarks, or logos of any kind.";
  function imageSnippet(styleLang) {
    return `${SUBJECT_TREATMENT} ${styleLang}`;
  }
  __name(imageSnippet, "imageSnippet");
  function patternSnippet(description) {
    return `EDGE-TO-EDGE seamless repeating pattern. ${description} Tileable, even repeat \u2014 no focal object, no product, no room, no landscape, no text, no kettle, no perspective.`;
  }
  __name(patternSnippet, "patternSnippet");
  function textureSnippet(description) {
    return `EDGE-TO-EDGE material surface texture. ${description} Flat, even banner coverage, filling the whole frame \u2014 no object, no product, no room, no landscape, no text, no perspective scene, no focal subject, no kettle.`;
  }
  __name(textureSnippet, "textureSnippet");
  function artistSnippet(artist, traits) {
    return `${SUBJECT_TREATMENT} Render it in the visual treatment associated with ${artist}: ${traits} Borrow only the technique, palette, and mark-making \u2014 do not substitute one of that artist's famous motifs, works, or subjects for what the user described. Produce the artwork itself, filling the entire frame edge to edge: never a photograph of a framed canvas, a gallery wall, or a painting hanging in a room.`;
  }
  __name(artistSnippet, "artistSnippet");
  var BUILTIN_STYLES = Object.freeze(
    /** @type {BannerStyle[]} */
    [
      {
        id: "none",
        name: "None",
        group: "image",
        snippet: "",
        thumb: STYLE_THUMBS["none"]
      },
      {
        id: "cinematic",
        name: "Cinematic",
        group: "image",
        snippet: imageSnippet("Cinematic widescreen still of that subject: anamorphic bokeh, dramatic keyed lighting, subtle film grain, rich contrast, letterboxed like a film frame."),
        thumb: STYLE_THUMBS["cinematic"]
      },
      {
        id: "editorial",
        name: "Editorial",
        group: "image",
        snippet: imageSnippet("Editorial magazine banner treatment of that subject: refined negative space, natural window light, high-end print finish, understated palette."),
        thumb: STYLE_THUMBS["editorial"]
      },
      {
        id: "painterly",
        name: "Painterly",
        group: "image",
        snippet: imageSnippet("Painterly oil-on-canvas treatment of that subject: visible brush strokes, layered pigments, warm gallery lighting, like a studio oil sketch."),
        thumb: STYLE_THUMBS["painterly"]
      },
      {
        id: "impressionist",
        name: "Impression",
        group: "image",
        snippet: imageSnippet("Impressionist oil painting of that subject in the manner of Monet: broken color, shimmering light, loose dabs, no hard outlines. Do not replace the subject with water lilies or a generic landscape."),
        thumb: STYLE_THUMBS["impressionist"]
      },
      {
        id: "ukiyo-e",
        name: "Ukiyo-e",
        group: "image",
        snippet: imageSnippet("Treat the subject as a Japanese ukiyo-e woodblock print of THAT subject: flat color, fine linework, Prussian-blue and mineral pigments, in the manner of Hokusai. The subject remains what the user described \u2014 do not invent waves, Mount Fuji, or a different scene."),
        thumb: STYLE_THUMBS["ukiyo-e"]
      },
      {
        id: "art-nouveau",
        name: "Nouveau",
        group: "image",
        snippet: imageSnippet("Treat the subject as an Art Nouveau decorative panel of THAT subject in the manner of Alphonse Mucha: sinuous floral framing, gold ornaments, muted jewel tones. Keep the subject; do not replace it with a generic Mucha maiden or ornament-only panel."),
        thumb: STYLE_THUMBS["art-nouveau"]
      },
      {
        id: "watercolor",
        name: "Watercolor",
        group: "image",
        snippet: imageSnippet("Soft watercolor wash of that subject: pigment blooms, paper tooth, airy highlights, gentle edges."),
        thumb: STYLE_THUMBS["watercolor"]
      },
      {
        id: "analog",
        name: "Analog",
        group: "image",
        snippet: imageSnippet("Analog 35mm photograph of that subject on Kodak Portra: warm highlights, soft grain, gentle halation, slightly lifted blacks, photographic not digital-clean."),
        thumb: STYLE_THUMBS["analog"]
      },
      {
        id: "neon-noir",
        name: "Neon noir",
        group: "image",
        snippet: imageSnippet("Neon noir night treatment of that subject: magenta and cyan rim light, wet reflections, cinematic rain, deep blacks. Keep the same subject \u2014 do not replace it with a generic rainy street or city alley."),
        thumb: STYLE_THUMBS["neon-noir"]
      },
      {
        id: "isometric",
        name: "Isometric",
        group: "image",
        snippet: imageSnippet("Clean isometric illustration of that subject: soft studio lighting, precise geometry, contemporary product-diagram feel. The subject remains what the user described \u2014 do not invent a different object or a generic isometric room."),
        thumb: STYLE_THUMBS["isometric"]
      },
      {
        id: "graphic-poster",
        name: "Poster",
        group: "image",
        snippet: imageSnippet("Bold graphic poster treatment of that subject: flat shapes, limited high-contrast palette, strong geometry, screen-print texture. Keep the same subject; do not replace it with generic poster typography or a different icon."),
        thumb: STYLE_THUMBS["graphic-poster"]
      },
      {
        id: "blueprint",
        name: "Blueprint",
        group: "image",
        snippet: imageSnippet("Treat the subject as a cyan-on-navy technical blueprint drawing of THAT subject: white construction lines, dimension ticks, tracing-paper grid. The subject remains what the user described \u2014 do not invent a different scene or object."),
        thumb: STYLE_THUMBS["blueprint"]
      },
      {
        id: "stained-glass",
        name: "Glass",
        group: "image",
        snippet: imageSnippet("Treat the subject as a stained-glass window depicting THAT subject: thick black leading, jewel-tone glass panes, cathedral light shining through. Do not replace the subject with a generic church window or religious scene."),
        thumb: STYLE_THUMBS["stained-glass"]
      },
      {
        id: "clay",
        name: "Clay",
        group: "image",
        snippet: imageSnippet("Plasticine clay stop-motion still of that subject: fingerprints in the clay, matte colored clay material, studio stop-motion lighting. The subject remains what the user described \u2014 do not invent a different clay character or set."),
        thumb: STYLE_THUMBS["clay"]
      },
      {
        id: "risograph",
        name: "Risograph",
        group: "image",
        snippet: imageSnippet("Risograph print of that subject: two-color soy ink overlap, fluorescent pink and teal, grainy misregistration, photocopy texture."),
        thumb: STYLE_THUMBS["risograph"]
      },
      {
        id: "pixel",
        name: "Pixel",
        group: "image",
        snippet: imageSnippet("16-bit pixel art of that subject: chunky pixels, limited 16-color palette, no anti-aliasing, SNES still. Keep the same subject; do not replace it with a generic game sprite or dungeon."),
        thumb: STYLE_THUMBS["pixel"]
      },
      {
        id: "charcoal",
        name: "Charcoal",
        group: "image",
        snippet: imageSnippet("Charcoal drawing of that subject on textured paper: compressed charcoal, smudged shadows, white-chalk highlights, raw paper grain."),
        thumb: STYLE_THUMBS["charcoal"]
      },
      {
        id: "terrazzo",
        name: "Terrazzo",
        group: "pattern",
        snippet: "EDGE-TO-EDGE seamless repeating terrazzo texture. Irregular marble chips in cream, terracotta, sage, and charcoal on a pale ground. Abstract tileable pattern only \u2014 no objects, no products, no kettle, no furniture, no landscape, no focal subject, no perspective.",
        thumb: STYLE_THUMBS["terrazzo"]
      },
      {
        id: "seigaiha",
        name: "Seigaiha",
        group: "pattern",
        snippet: "EDGE-TO-EDGE seamless Japanese seigaiha wave pattern: concentric overlapping arcs in indigo and pale blue, even textile-scale repeat. Abstract pattern only \u2014 no objects, no boats, no Mount Fuji, no kettle, no focal subject.",
        thumb: STYLE_THUMBS["seigaiha"]
      },
      {
        id: "linen",
        name: "Linen",
        group: "pattern",
        snippet: "EDGE-TO-EDGE seamless linen weave texture, crossed warp and weft, oatmeal and flax, subtle slubs. Abstract textile only \u2014 no objects, no garments, no kettle, no focal subject.",
        thumb: STYLE_THUMBS["linen"]
      },
      {
        id: "marble",
        name: "Marble",
        group: "pattern",
        snippet: "EDGE-TO-EDGE seamless polished marble slab texture, soft gray-green veins on white calcite. Abstract stone field only \u2014 no objects, no architecture, no kettle, no perspective, no focal subject.",
        thumb: STYLE_THUMBS["marble"]
      },
      {
        id: "ikat",
        name: "Ikat",
        group: "pattern",
        snippet: "EDGE-TO-EDGE seamless ikat textile: blurred diamond and chevron resist-dye in indigo, rust, and cream. Abstract weave repeat only \u2014 no objects, no kettle, no garments, no focal subject.",
        thumb: STYLE_THUMBS["ikat"]
      },
      {
        id: "halftone",
        name: "Halftone",
        group: "pattern",
        snippet: "EDGE-TO-EDGE seamless print halftone: evenly spaced round ink dots in an offset grid on cream newsprint, slight misregistration, even field. Abstract texture only \u2014 no portraits, no objects, no kettle, no focal subject.",
        thumb: STYLE_THUMBS["halftone"]
      },
      {
        id: "kilim",
        name: "Kilim",
        group: "pattern",
        snippet: "EDGE-TO-EDGE seamless Anatolian kilim geometry: stepped diamonds and zigzags in madder red, indigo, and saffron. Flatweave textile repeat only \u2014 no objects, no rugs as products, no kettle, no perspective, no focal subject.",
        thumb: STYLE_THUMBS["kilim"]
      },
      {
        id: "memphis",
        name: "Memphis",
        group: "pattern",
        snippet: "EDGE-TO-EDGE seamless 1980s Memphis pattern: squiggles, triangles, and dots in hot pink, teal, and mustard on cream. Abstract wrapping-paper scatter only \u2014 no objects, no furniture, no kettle, no focal subject.",
        thumb: STYLE_THUMBS["memphis"]
      },
      {
        id: "herringbone",
        name: "Herringbone",
        group: "pattern",
        snippet: "EDGE-TO-EDGE seamless herringbone parquet: tight V-shaped wood strips in warm oak, even repeat. Abstract wood texture only \u2014 no furniture, no rooms, no kettle, no perspective, no focal subject.",
        thumb: STYLE_THUMBS["herringbone"]
      },
      {
        id: "shibori",
        name: "Shibori",
        group: "pattern",
        snippet: "EDGE-TO-EDGE seamless Japanese shibori indigo: soft tied-resist rings and ripples in deep indigo and white. Abstract textile only \u2014 no garments, no objects, no kettle, no focal subject.",
        thumb: STYLE_THUMBS["shibori"]
      },
      {
        id: "gingham",
        name: "Gingham",
        group: "pattern",
        snippet: patternSnippet("Classic gingham check: even woven bands of red and white crossing at right angles, the overlap reading a deeper shade, crisp cotton weave at picnic-cloth scale."),
        thumb: STYLE_THUMBS["gingham"]
      },
      {
        id: "checker",
        name: "Checker",
        group: "pattern",
        snippet: patternSnippet("Hard-edged checkerboard of alternating warm cream and charcoal squares, perfectly square grid, flat graphic color, no shading or gradient."),
        thumb: STYLE_THUMBS["checker"]
      },
      {
        id: "basketweave",
        name: "Basketweave",
        group: "pattern",
        snippet: patternSnippet("Basketweave: flat rattan strips interlacing over and under in a tight square plait, natural straw and honey tones, subtle fibre grain across every strip."),
        thumb: STYLE_THUMBS["basketweave"]
      },
      {
        id: "damask",
        name: "Damask",
        group: "pattern",
        snippet: patternSnippet("Formal damask: symmetrical acanthus and pomegranate scrollwork in tonal ivory on soft sage, subtle satin sheen where the motif catches light, wallpaper-scale mirrored repeat."),
        thumb: STYLE_THUMBS["damask"]
      },
      {
        id: "topographic",
        name: "Topographic",
        group: "pattern",
        snippet: patternSnippet("Topographic contour lines: fine concentric elevation rings nesting and branching across the whole field, thin ink strokes on warm paper, survey-map linework with no labels or numbers."),
        thumb: STYLE_THUMBS["topographic"]
      },
      {
        id: "polka-dot",
        name: "Polka dot",
        group: "pattern",
        snippet: patternSnippet("Evenly spaced polka dots: uniform circles in soft black on warm cream, staggered offset rows, flat graphic color, retro textile scale."),
        thumb: STYLE_THUMBS["polka-dot"]
      },
      {
        id: "arabesque",
        name: "Arabesque",
        group: "pattern",
        snippet: patternSnippet("Islamic arabesque tilework: interlacing eight-point stars and tessellating geometric strapwork in turquoise, cobalt, and white with fine gold outlines, precise mathematical repeat."),
        thumb: STYLE_THUMBS["arabesque"]
      },
      {
        id: "botanical",
        name: "Botanical",
        group: "pattern",
        snippet: patternSnippet("Botanical repeat: pressed ferns, eucalyptus sprigs, and small five-petal blooms scattered in an even all-over layout, muted sage and dusty rose on bone, fine engraved linework."),
        thumb: STYLE_THUMBS["botanical"]
      },
      {
        id: "texture-concrete",
        name: "Concrete",
        group: "texture",
        snippet: textureSnippet("Poured concrete: fine exposed aggregate, scattered pinholes, faint trowel sweeps and form-tie shadows, cool neutral gray, flat even light."),
        thumb: STYLE_THUMBS["texture-concrete"]
      },
      {
        id: "texture-handmade-paper",
        name: "Handmade paper",
        group: "texture",
        snippet: textureSnippet("Handmade cotton-rag paper: cloudy pulp variation, embedded fibre flecks, soft deckle tooth, warm off-white, raking light catching the surface relief."),
        thumb: STYLE_THUMBS["texture-handmade-paper"]
      },
      {
        id: "texture-kraft-paper",
        name: "Kraft paper",
        group: "texture",
        snippet: textureSnippet("Kraft paper: coarse unbleached wood pulp, visible brown fibre specks, faint machine grain running one direction, warm tan, matte and slightly rough."),
        thumb: STYLE_THUMBS["texture-kraft-paper"]
      },
      {
        id: "texture-parchment",
        name: "Parchment",
        group: "texture",
        snippet: textureSnippet("Aged parchment: uneven tanning, faint follicle stippling, soft amber staining and gentle cockling, translucent thin patches, no writing or illustration of any kind."),
        thumb: STYLE_THUMBS["texture-parchment"]
      },
      {
        id: "texture-canvas",
        name: "Canvas",
        group: "texture",
        snippet: textureSnippet("Primed artist canvas: regular warp-and-weft tooth under thick white gesso, weave peaks catching light, occasional slub, bare unpainted ground."),
        thumb: STYLE_THUMBS["texture-canvas"]
      },
      {
        id: "texture-stucco",
        name: "Stucco",
        group: "texture",
        snippet: textureSnippet("Mediterranean stucco: hand-floated lime render with swirled trowel arcs, soft pitting, chalky warm white, gentle shadow in every recess."),
        thumb: STYLE_THUMBS["texture-stucco"]
      },
      {
        id: "texture-plaster",
        name: "Plaster",
        group: "texture",
        snippet: textureSnippet("Venetian polished plaster: burnished marble-dust surface with cloudy tonal drift, faint trowel facets, soft eggshell sheen, muted greige."),
        thumb: STYLE_THUMBS["texture-plaster"]
      },
      {
        id: "texture-sandstone",
        name: "Sandstone",
        group: "texture",
        snippet: textureSnippet("Cut sandstone: fine granular bedding bands in ochre and rose, subtle quarry saw marks, dry porous surface, warm desert tone."),
        thumb: STYLE_THUMBS["texture-sandstone"]
      },
      {
        id: "texture-slate",
        name: "Slate",
        group: "texture",
        snippet: textureSnippet("Riven slate: cleaved layered surface with sharp tonal facets in charcoal, graphite, and faint rust, natural fissure lines, low-sheen mineral finish."),
        thumb: STYLE_THUMBS["texture-slate"]
      },
      {
        id: "texture-brushed-metal",
        name: "Brushed metal",
        group: "texture",
        snippet: textureSnippet("Brushed aluminium: fine parallel abrasion lines running edge to edge, cool anisotropic sheen sweeping across the grain, faint milling variation, no reflections of any object."),
        thumb: STYLE_THUMBS["texture-brushed-metal"]
      },
      {
        id: "texture-rusted-metal",
        name: "Rusted metal",
        group: "texture",
        snippet: textureSnippet("Weathered corten steel: blooming orange and umber oxide, flaking scale, pitted craters and dark runoff staining, matte industrial patina."),
        thumb: STYLE_THUMBS["texture-rusted-metal"]
      },
      {
        id: "texture-frosted-glass",
        name: "Frosted glass",
        group: "texture",
        snippet: textureSnippet("Acid-etched frosted glass: uniform micro-abrasion, cool diffuse luminosity glowing evenly through the pane, faint milky bloom, nothing legible behind it."),
        thumb: STYLE_THUMBS["texture-frosted-glass"]
      },
      {
        id: "texture-cork",
        name: "Cork",
        group: "texture",
        snippet: textureSnippet("Pressed cork: densely packed granules in tan and umber, irregular cell voids and darker flecks, soft matte warmth."),
        thumb: STYLE_THUMBS["texture-cork"]
      },
      {
        id: "texture-leather",
        name: "Leather",
        group: "texture",
        snippet: textureSnippet("Full-grain leather: natural pebbled grain with fine wrinkle networks, gentle sheen on the raised cells, deep cognac brown, supple and worn."),
        thumb: STYLE_THUMBS["texture-leather"]
      },
      {
        id: "texture-denim",
        name: "Denim",
        group: "texture",
        snippet: textureSnippet("Indigo denim: tight diagonal twill wales, white weft peeking through the indigo warp, subtle slubs and faded abrasion, cotton fibre fuzz. No seams, stitching, rivets, or garment edges."),
        thumb: STYLE_THUMBS["texture-denim"]
      },
      {
        id: "texture-velvet",
        name: "Velvet",
        group: "texture",
        snippet: textureSnippet("Silk velvet: dense cut pile with directional nap, deep emerald shifting to lighter sheen where the pile lies over, soft crushed variation, luminous but no folds forming an object."),
        thumb: STYLE_THUMBS["texture-velvet"]
      },
      {
        id: "texture-wood-grain",
        name: "Wood grain",
        group: "texture",
        snippet: textureSnippet("Planed white oak: long straight grain lines with cathedral figure, scattered small knots, open pore texture, warm honey tone, satin finish."),
        thumb: STYLE_THUMBS["texture-wood-grain"]
      },
      {
        id: "texture-ceramic-glaze",
        name: "Ceramic glaze",
        group: "texture",
        snippet: textureSnippet("Reactive stoneware glaze: pooling celadon and teal breaking over a speckled clay body, fine crazing network, glossy runs and iron flecks, kiln-fired depth."),
        thumb: STYLE_THUMBS["texture-ceramic-glaze"]
      },
      {
        id: "artist-van-gogh",
        name: "Van Gogh",
        group: "artist",
        snippet: artistSnippet("Vincent van Gogh", "turbulent impasto laid on in thick directional strokes, rhythmic swirling contours that follow every form, saturated complementary color, luminous restless brushwork."),
        thumb: STYLE_THUMBS["artist-van-gogh"]
      },
      {
        id: "artist-monet",
        name: "Monet",
        group: "artist",
        snippet: artistSnippet("Claude Monet", "broken color in small loose dabs, dissolved outlines, shimmering atmospheric light, cool violet shadows against warm sunlit passages."),
        thumb: STYLE_THUMBS["artist-monet"]
      },
      {
        id: "artist-klimt",
        name: "Klimt",
        group: "artist",
        snippet: artistSnippet("Gustav Klimt", "gold-leaf ornament flattening the surface, mosaic spirals and concentric eyes, Byzantine patterning pressed against naturalistic passages, opulent bronze and jewel tones."),
        thumb: STYLE_THUMBS["artist-klimt"]
      },
      {
        id: "artist-kandinsky",
        name: "Kandinsky",
        group: "artist",
        snippet: artistSnippet("Wassily Kandinsky", "the form abstracted into floating geometry \u2014 circles, arcs, taut diagonals and staves \u2014 over a washed ground, primary color against black linework, musical rhythmic composition."),
        thumb: STYLE_THUMBS["artist-kandinsky"]
      },
      {
        id: "artist-mondrian",
        name: "Mondrian",
        group: "artist",
        snippet: artistSnippet("Piet Mondrian", "the form reduced to an orthogonal grid of heavy black rules with flat blocks of primary red, blue, and yellow on white, no modelling or shading whatsoever."),
        thumb: STYLE_THUMBS["artist-mondrian"]
      },
      {
        id: "artist-af-klint",
        name: "af Klint",
        group: "artist",
        snippet: artistSnippet("Hilma af Klint", "esoteric diagrammatic abstraction \u2014 nested circles, spirals, and pale botanical schematics in chalky pastel pink, blue, and yellow on a soft ground, thin ruled construction lines."),
        thumb: STYLE_THUMBS["artist-af-klint"]
      },
      {
        id: "artist-hokusai",
        name: "Hokusai",
        group: "artist",
        snippet: artistSnippet("Katsushika Hokusai", "ukiyo-e woodblock treatment with confident keyblock outlines, flat Prussian-blue and mineral pigment fields, gradated bokashi skies, visible wood texture."),
        thumb: STYLE_THUMBS["artist-hokusai"]
      },
      {
        id: "artist-hiroshige",
        name: "Hiroshige",
        group: "artist",
        snippet: artistSnippet("Utagawa Hiroshige", "serene woodblock composition with deep gradated bokashi bands, poetic atmospheric distance, restrained indigo and rose palette, delicate keyline work."),
        thumb: STYLE_THUMBS["artist-hiroshige"]
      },
      {
        id: "artist-rembrandt",
        name: "Rembrandt",
        group: "artist",
        snippet: artistSnippet("Rembrandt van Rijn", "dramatic chiaroscuro pulling the form out of deep warm shadow, single raking light source, earth-toned glazes over impasto highlights, aged varnish depth."),
        thumb: STYLE_THUMBS["artist-rembrandt"]
      },
      {
        id: "artist-vermeer",
        name: "Vermeer",
        group: "artist",
        snippet: artistSnippet("Johannes Vermeer", "calm north-window light falling from the left, pointill\xE9 highlights beading on every surface, ultramarine and lead-tin yellow, meticulous smooth finish and quiet stillness."),
        thumb: STYLE_THUMBS["artist-vermeer"]
      },
      {
        id: "artist-turner",
        name: "Turner",
        group: "artist",
        snippet: artistSnippet("J. M. W. Turner", "form dissolving into luminous atmosphere, scumbled veils of gold and white light, storm-swept washes, sublime glare consuming the edges."),
        thumb: STYLE_THUMBS["artist-turner"]
      },
      {
        id: "artist-bosch",
        name: "Bosch",
        group: "artist",
        snippet: artistSnippet("Hieronymus Bosch", "early Netherlandish panel painting with fine miniature detail, thin bright tempera-like glazes, strange fastidious linework, pale luminous ground."),
        thumb: STYLE_THUMBS["artist-bosch"]
      },
      {
        id: "artist-botticelli",
        name: "Botticelli",
        group: "artist",
        snippet: artistSnippet("Sandro Botticelli", "early Renaissance tempera on panel, flowing contour lines describing every edge, delicate linear grace, soft pale flesh and mineral color, gold-touched detail."),
        thumb: STYLE_THUMBS["artist-botticelli"]
      },
      {
        id: "artist-cezanne",
        name: "C\xE9zanne",
        group: "artist",
        snippet: artistSnippet("Paul C\xE9zanne", "constructive planar brushstrokes building volume as faceted patches, shifted multiple viewpoints, muted ochre, slate blue, and viridian, visible bare canvas at the edges."),
        thumb: STYLE_THUMBS["artist-cezanne"]
      },
      {
        id: "artist-degas",
        name: "Degas",
        group: "artist",
        snippet: artistSnippet("Edgar Degas", "pastel on toned paper with hatched layered strokes, daring off-centre cropped composition, artificial footlight glow, chalky bloom over warm ground."),
        thumb: STYLE_THUMBS["artist-degas"]
      },
      {
        id: "artist-morris",
        name: "Morris",
        group: "artist",
        snippet: artistSnippet("William Morris", "Arts and Crafts treatment with flattened stylised foliage curling around the form, dense interlacing tendrils, block-printed matte color in olive, madder, and indigo."),
        thumb: STYLE_THUMBS["artist-morris"]
      },
      {
        id: "artist-beardsley",
        name: "Beardsley",
        group: "artist",
        snippet: artistSnippet("Aubrey Beardsley", "stark black ink on white with no halftone, sinuous decorative contour, vast flat black masses against fine stippled ornament, art-nouveau elegance."),
        thumb: STYLE_THUMBS["artist-beardsley"]
      },
      {
        id: "artist-rousseau",
        name: "Rousseau",
        group: "artist",
        snippet: artistSnippet("Henri Rousseau", "naive post-impressionist flatness, every leaf and edge outlined with deliberate clarity, layered banded greens, dreamlike stillness and even frontal light."),
        thumb: STYLE_THUMBS["artist-rousseau"]
      }
    ]
  );
  var PRESETS_PER_GROUP = 18;
  for (const group of STYLE_GROUPS) {
    const count = BUILTIN_STYLES.filter((style) => style.group === group.id).length;
    if (count !== PRESETS_PER_GROUP) {
      throw new Error(`Style group "${group.name}" must contain ${PRESETS_PER_GROUP} presets; found ${count}.`);
    }
  }
  {
    const seen = /* @__PURE__ */ new Set();
    for (const style of BUILTIN_STYLES) {
      if (seen.has(style.id)) throw new Error(`Duplicate built-in style id: ${style.id}`);
      seen.add(style.id);
    }
  }
  var DIALOG_CSS = `
.${OVERLAY_CLASS} {
	position: fixed;
	inset: 0;
	z-index: 100000;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px;
	overflow: auto;
	background: color-mix(in srgb, #0b0b0c 46%, transparent);
	color: var(--text-default, inherit);
	font: inherit;
	box-sizing: border-box;
	scrollbar-width: thin;
	scrollbar-color: color-mix(in srgb, var(--logo-color, currentColor) 50%, transparent) color-mix(in srgb, currentColor 10%, transparent);
}
.${OVERLAY_CLASS} *,
.${OVERLAY_CLASS} *::before,
.${OVERLAY_CLASS} *::after { box-sizing: border-box; }
.${OVERLAY_CLASS} [hidden] { display: none !important; }
.${OVERLAY_CLASS} *,
.${OVERLAY_CLASS} {
	scrollbar-width: thin;
	scrollbar-color: color-mix(in srgb, var(--logo-color, currentColor) 50%, transparent) color-mix(in srgb, currentColor 10%, transparent);
}
.${OVERLAY_CLASS} ::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}
.${OVERLAY_CLASS} ::-webkit-scrollbar-track {
	background: color-mix(in srgb, currentColor 8%, transparent);
	border-radius: 999px;
}
.${OVERLAY_CLASS} ::-webkit-scrollbar-thumb {
	background: color-mix(in srgb, var(--logo-color, currentColor) 45%, currentColor);
	border-radius: 999px;
	border: 2px solid transparent;
	background-clip: padding-box;
}
.${OVERLAY_CLASS} ::-webkit-scrollbar-thumb:hover {
	background: color-mix(in srgb, var(--logo-color, currentColor) 70%, currentColor);
	background-clip: padding-box;
	border: 2px solid transparent;
}
.${ROOT_CLASS}-slot {
	position: relative;
	flex: 0 0 auto;
	width: min(1440px, calc(100vw - 32px));
	height: clamp(620px, calc(100vh - 32px), 900px);
	min-width: 0;
	min-height: 0;
}
.${ROOT_CLASS}-dialog {
	--chosen: 21 / 9;
	--chosen-frac: 2.333;
	position: relative;
	width: 100%;
	height: 100%;
	min-width: 0;
	min-height: 0;
	max-width: 100%;
	max-height: 100%;
	resize: none;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 16px 16px 14px;
	background: var(--panel-bg-color, #161618);
	color: var(--text-default, inherit);
	border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
	border-radius: 14px;
	box-shadow: 0 24px 64px color-mix(in srgb, #000 42%, transparent);
	box-sizing: border-box;
}
.${ROOT_CLASS}-head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
}
.${ROOT_CLASS}-title {
	margin: 0;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: -0.01em;
	color: var(--text-default, inherit);
}
.${ROOT_CLASS}-close {
	flex: 0 0 auto;
	width: 28px;
	height: 28px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	border: 0;
	border-radius: 8px;
	background: transparent;
	color: var(--text-muted, inherit);
	cursor: pointer;
	font-size: 18px;
	line-height: 1;
}
.${ROOT_CLASS}-close:hover {
	background: color-mix(in srgb, var(--text-default, currentColor) 8%, transparent);
	color: var(--text-default, inherit);
}
.${ROOT_CLASS}-body {
	display: grid;
	grid-template-columns: minmax(0, 1fr) clamp(286px, 25vw, 330px);
	grid-template-rows: minmax(0, 1fr);
	gap: 14px;
	align-items: stretch;
	min-height: 0;
	flex: 1 1 0;
}
.${ROOT_CLASS}-col {
	display: flex;
	flex-direction: column;
	gap: 8px;
	min-width: 0;
	min-height: 0;
	height: 100%;
	padding-bottom: 0;
}
.${ROOT_CLASS}-col-preview {
	overflow: hidden;
	justify-content: flex-start;
	padding-right: 0;
}
.${ROOT_CLASS}-col-styles {
	overflow: hidden;
	padding-left: 0;
	padding-right: 2px;
}
.${ROOT_CLASS}-hero-stack {
	flex: 0 0 auto;
	min-height: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	gap: 7px;
}
.${ROOT_CLASS}-hero-wrap {
	flex: 0 0 auto;
	min-height: auto;
	display: block;
	overflow: hidden;
}
.${ROOT_CLASS}-hero {
	position: relative;
	aspect-ratio: 21 / 9;
	width: 100%;
	height: auto;
	max-width: 100%;
	flex: 0 0 auto;
	overflow: hidden;
	border-radius: 10px;
	border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
	background: var(--input-bg-color, color-mix(in srgb, currentColor 6%, transparent));
	user-select: none;
	-webkit-user-select: none;
}
.${ROOT_CLASS}-hero:not(.is-filled) {
	border-style: dashed;
}
.${ROOT_CLASS}-hero.is-filled { cursor: grab; touch-action: none; }
.${ROOT_CLASS}-hero.is-panning { cursor: grabbing; }
.${ROOT_CLASS}-hero img {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: none;
	pointer-events: none;
	user-select: none;
	-webkit-user-select: none;
}
.${ROOT_CLASS}-hero.is-filled img { display: block; }
.${ROOT_CLASS}-hero-arrow {
	display: none;
	position: absolute;
	top: 50%;
	z-index: 3;
	width: 28px;
	height: 28px;
	padding: 0;
	align-items: center;
	justify-content: center;
	border: 1px solid color-mix(in srgb, currentColor 18%, transparent);
	border-radius: 999px;
	background: color-mix(in srgb, var(--panel-bg-color, #111) 72%, transparent);
	color: var(--text-default, inherit);
	font-size: 18px;
	line-height: 1;
	cursor: pointer;
	transform: translateY(-50%);
	user-select: none;
}
.${ROOT_CLASS}-hero-arrow:hover {
	background: color-mix(in srgb, var(--panel-bg-color, #111) 88%, transparent);
	border-color: color-mix(in srgb, var(--logo-color, currentColor) 45%, transparent);
}
.${ROOT_CLASS}-hero-prev { left: 8px; }
.${ROOT_CLASS}-hero-next { right: 8px; }
.${ROOT_CLASS}-hero.is-filled.is-multi .${ROOT_CLASS}-hero-arrow { display: inline-flex; }
.${ROOT_CLASS}-hero-delete,
.${ROOT_CLASS}-hero-delete-confirm button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 28px;
	height: 28px;
	padding: 0;
	border: 1px solid color-mix(in srgb, currentColor 20%, transparent);
	border-radius: 7px;
	background: color-mix(in srgb, var(--panel-bg-color, #111) 82%, transparent);
	color: var(--text-default, inherit);
	cursor: pointer;
}
.${ROOT_CLASS}-hero-delete {
	position: absolute;
	right: 8px;
	bottom: 8px;
	z-index: 4;
}
.${ROOT_CLASS}-hero-delete:hover,
.${ROOT_CLASS}-hero-delete-confirm button:hover {
	background: color-mix(in srgb, var(--panel-bg-color, #111) 96%, transparent);
	border-color: color-mix(in srgb, var(--logo-color, currentColor) 55%, transparent);
}
.${ROOT_CLASS}-hero-delete:disabled {
	opacity: 0.45;
	cursor: not-allowed;
}
.${ROOT_CLASS}-hero-delete-confirm {
	position: absolute;
	right: 8px;
	bottom: 8px;
	z-index: 4;
	display: flex;
	gap: 5px;
}
.${ROOT_CLASS}-hero-delete-confirm .${ROOT_CLASS}-hero-delete-yes {
	color: var(--enum-green-fg, #10b981);
	border-color: color-mix(in srgb, var(--enum-green-fg, #10b981) 50%, transparent);
}
.${ROOT_CLASS}-hero-empty {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px;
	text-align: center;
	font-size: 13px;
	color: var(--text-muted, inherit);
	pointer-events: none;
	user-select: none;
}
.${ROOT_CLASS}-hero.is-filled .${ROOT_CLASS}-hero-empty { display: none; }
.${ROOT_CLASS}-hero-busy {
	display: none;
	position: absolute;
	inset: 0;
	align-items: center;
	justify-content: center;
	background: color-mix(in srgb, var(--panel-bg-color, #000) 42%, transparent);
	z-index: 2;
	pointer-events: none;
}
.${ROOT_CLASS}-hero.is-busy .${ROOT_CLASS}-hero-busy { display: flex; }
.${ROOT_CLASS}-hero-busy::after {
	content: '';
	width: 22px;
	height: 22px;
	border: 2px solid color-mix(in srgb, currentColor 18%, transparent);
	border-top-color: var(--enum-green-fg, #10b981);
	border-radius: 999px;
	animation: plg-generate-banner-spin 0.7s linear infinite;
}
.${ROOT_CLASS}-film {
	display: flex;
	gap: 6px;
	overflow-x: auto;
	overflow-y: hidden;
	flex: 0 0 auto;
	min-height: 56px;
	padding-bottom: 2px;
	scroll-padding-inline: 2px;
	overscroll-behavior-x: contain;
}
.${ROOT_CLASS}-film-empty {
	font-size: 12px;
	color: var(--text-muted, inherit);
	padding: 8px 2px;
}
.${ROOT_CLASS}-film-thumb {
	flex: 0 0 auto;
	height: 56px;
	aspect-ratio: var(--chosen, 21 / 9);
	padding: 0;
	border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
	border-radius: 8px;
	overflow: hidden;
	background: var(--input-bg-color, color-mix(in srgb, currentColor 6%, transparent));
	cursor: grab;
	user-select: none;
	-webkit-user-select: none;
}
.${ROOT_CLASS}-film-thumb img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	pointer-events: none;
	user-select: none;
}
.${ROOT_CLASS}-film-thumb.is-on {
	border-color: var(--logo-color, currentColor);
	box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--logo-color, currentColor) 72%, transparent);
}
.${ROOT_CLASS}-film-thumb.is-applied {
	border-color: var(--enum-yellow-fg, #fbbf24);
	box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--enum-yellow-fg, #fbbf24) 82%, transparent);
}
.${ROOT_CLASS}-film-thumb:focus-visible {
	outline: none;
	border-color: var(--logo-color, currentColor);
	box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--logo-color, currentColor) 82%, transparent);
}
.${ROOT_CLASS}-film-thumb.is-applied.is-on,
.${ROOT_CLASS}-film-thumb.is-applied:focus-visible {
	border-color: var(--logo-color, currentColor);
	box-shadow:
		inset 0 0 0 2px color-mix(in srgb, var(--logo-color, currentColor) 82%, transparent),
		inset 0 0 0 4px color-mix(in srgb, var(--enum-yellow-fg, #fbbf24) 88%, transparent);
}
.${ROOT_CLASS}-film-thumb.is-empty {
	border-style: dashed;
	background: transparent;
	cursor: default;
	pointer-events: none;
	box-shadow: none;
}
.${ROOT_CLASS}-film-thumb.is-dragging {
	opacity: 0.42;
	cursor: grabbing;
}
.${ROOT_CLASS}-film-thumb.is-drop-before {
	border-color: var(--logo-color, currentColor);
	box-shadow: -4px 0 0 var(--logo-color, currentColor);
}
.${ROOT_CLASS}-film-thumb.is-drop-after {
	border-color: var(--logo-color, currentColor);
	box-shadow: 4px 0 0 var(--logo-color, currentColor);
}
.${ROOT_CLASS}-film-thumb.is-busy {
	position: relative;
	cursor: default;
	pointer-events: none;
}
.${ROOT_CLASS}-film-thumb.is-busy::after {
	content: '';
	position: absolute;
	inset: 0;
	margin: auto;
	width: 16px;
	height: 16px;
	border: 2px solid color-mix(in srgb, currentColor 18%, transparent);
	border-top-color: var(--enum-green-fg, #10b981);
	border-radius: 999px;
	animation: plg-generate-banner-spin 0.7s linear infinite;
}
@keyframes plg-generate-banner-spin {
	to { transform: rotate(360deg); }
}
.${ROOT_CLASS}-prompt-block {
	flex: 1 1 0;
	display: flex;
	flex-direction: column;
	gap: 8px;
	min-width: 0;
	min-height: 0;
}
.${ROOT_CLASS}-prompt-block > .${ROOT_CLASS}-field:first-child {
	flex: 1 1 0;
	min-height: 0;
}
.${ROOT_CLASS}-prompt-actions {
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	gap: 8px;
	margin-top: 0;
	flex: 0 0 36px;
	min-height: 36px;
	height: 36px;
}
.${ROOT_CLASS}-prompt-actions .${ROOT_CLASS}-generate,
.${ROOT_CLASS}-prompt-actions .${ROOT_CLASS}-billed {
	margin-left: 0;
}
.${ROOT_CLASS}-prompt-actions .${ROOT_CLASS}-apply-btn {
	margin-left: auto;
}
.${ROOT_CLASS}-gen-label {
	flex: 0 0 auto;
	font-size: 11px;
	font-weight: 500;
	color: color-mix(in srgb, var(--text-muted, currentColor) 82%, transparent);
	user-select: none;
}
.${ROOT_CLASS}-ref-drop {
	display: flex;
	align-items: center;
	gap: 8px;
	width: 100%;
	min-height: 40px;
	padding: 5px 8px;
	border: 1px dashed var(--input-border-color, color-mix(in srgb, currentColor 22%, transparent));
	border-radius: 10px;
	background: transparent;
}
.${ROOT_CLASS}-ref-drop.is-drop {
	border-color: var(--logo-color, currentColor);
	background: color-mix(in srgb, var(--logo-color, currentColor) 8%, transparent);
}
.${ROOT_CLASS}-ref-chips {
	display: flex;
	align-items: center;
	gap: 8px;
	flex: 1 1 auto;
	min-width: 0;
}
.${ROOT_CLASS}-ref-chip {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	height: 28px;
	max-width: 260px;
	padding: 0 4px 0 2px;
	border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
	border-radius: 8px;
	background: var(--input-bg-color, color-mix(in srgb, currentColor 6%, transparent));
}
.${ROOT_CLASS}-ref-chip img {
	width: 22px;
	height: 22px;
	object-fit: cover;
	border-radius: 5px;
	flex: 0 0 auto;
	pointer-events: none;
}
.${ROOT_CLASS}-ref-name {
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 12px;
	color: var(--text-muted, inherit);
}
.${ROOT_CLASS}-ref-x {
	flex: 0 0 auto;
	width: 18px;
	height: 18px;
	padding: 0;
	border: 0;
	border-radius: 6px;
	background: transparent;
	color: var(--text-muted, inherit);
	font-size: 14px;
	line-height: 1;
	cursor: pointer;
}
.${ROOT_CLASS}-ref-x:hover {
	background: color-mix(in srgb, var(--text-default, currentColor) 8%, transparent);
	color: var(--text-default, inherit);
}
.${ROOT_CLASS}-hero.is-drop {
	border-style: solid;
	border-color: var(--logo-color, currentColor);
	box-shadow: 0 0 0 3px color-mix(in srgb, var(--logo-color, currentColor) 22%, transparent);
}
.${ROOT_CLASS}-meter {
	display: inline-flex;
	align-items: flex-end;
	gap: 2px;
	flex: 0 0 auto;
	color: var(--text-muted, inherit);
}
.${ROOT_CLASS}-meter-speed i {
	display: block;
	width: 3px;
	border-radius: 1px;
	background: currentColor;
	opacity: 0.22;
}
.${ROOT_CLASS}-meter-speed i:nth-child(1) { height: 6px; }
.${ROOT_CLASS}-meter-speed i:nth-child(2) { height: 9px; }
.${ROOT_CLASS}-meter-speed i:nth-child(3) { height: 12px; }
.${ROOT_CLASS}-meter-speed i.is-on {
	opacity: 1;
	background: var(--enum-green-fg, #10b981);
}
.${ROOT_CLASS}-meter-cost {
	align-items: center;
	gap: 1px;
}
.${ROOT_CLASS}-meter-cost i {
	font-style: normal;
	font-size: 10px;
	font-weight: 700;
	line-height: 1;
	opacity: 0.22;
	font-variant-numeric: tabular-nums;
}
.${ROOT_CLASS}-meter-cost i.is-on { opacity: 1; color: var(--text-default, inherit); }
.${ROOT_CLASS}-option-meta {
	display: flex;
	align-items: center;
	gap: 8px;
	flex: 0 0 auto;
}
.${ROOT_CLASS}-billed {
	min-height: 0;
	font-size: 12px;
	color: color-mix(in srgb, var(--text-muted, currentColor) 80%, transparent);
}
.${ROOT_CLASS}-hint {
	min-height: 0;
	font-size: 12px;
	color: color-mix(in srgb, var(--text-muted, currentColor) 80%, transparent);
}
.${ROOT_CLASS}-hint:empty { display: none; }
.${ROOT_CLASS}-error {
	min-height: 0;
	font-size: 12px;
	color: var(--enum-red-fg, #ef4444);
}
.${ROOT_CLASS}-error:empty { display: none; }
.${ROOT_CLASS}-prompt {
	width: 100%;
	flex: 1 1 0;
	min-height: 88px;
	max-height: none;
	height: auto;
	resize: none;
	padding: 8px 10px;
	font: inherit;
	font-size: 13px;
	line-height: 1.4;
	color: var(--text-default, inherit);
	background: var(--input-bg-color, color-mix(in srgb, currentColor 6%, transparent));
	border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
	border-radius: 10px;
	outline: none;
}
.${ROOT_CLASS}-prompt:focus {
	border-color: var(--logo-color, currentColor);
	box-shadow: 0 0 0 3px color-mix(in srgb, var(--logo-color, currentColor) 22%, transparent);
}
.${ROOT_CLASS}-prompt::placeholder { color: var(--text-muted, inherit); }
.${ROOT_CLASS}-style-tabs {
	display: flex;
	flex: 0 0 auto;
	gap: 4px;
}
.${ROOT_CLASS}-style-tab {
	min-height: 28px;
	padding: 0 10px;
	font: inherit;
	font-size: 12px;
	font-weight: 500;
	color: color-mix(in srgb, var(--text-muted, currentColor) 82%, transparent);
	background: transparent;
	border: 1px solid transparent;
	border-radius: 8px;
	cursor: pointer;
}
.${ROOT_CLASS}-style-tab.is-on {
	color: color-mix(in srgb, var(--text-muted, currentColor) 96%, transparent);
	background: color-mix(in srgb, var(--text-default, currentColor) 8%, transparent);
	border-color: var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
}
.${ROOT_CLASS}-styles {
	display: flex;
	flex-direction: column;
	gap: 4px;
	flex: 1 1 auto;
	min-height: 0;
	overflow-x: hidden;
	overflow-y: auto;
	padding: 2px 4px 0 2px;
	overscroll-behavior-y: contain;
}
/* Shared fade-scroller treatment (preset grid + suffix box).
   Both hide their scrollbar so their width never shifts \u2014 the built-in grid is
   exactly 3 x 6, and a one- or two-pixel overflow used to flip the bar on and off
   and shove the whole rail sideways. A soft edge fade stands in for the bar, shown
   only when there is genuinely something to scroll so the hint never lies. The fade
   is a mask, so it costs no layout and cannot reserve a gutter. */
.${OVERLAY_CLASS} .${ROOT_CLASS}-fadescroll { scrollbar-width: none; }
.${OVERLAY_CLASS} .${ROOT_CLASS}-fadescroll::-webkit-scrollbar { width: 0; height: 0; }
.${ROOT_CLASS}-fadescroll.is-fade-b {
	-webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - 28px), transparent 100%);
	mask-image: linear-gradient(to bottom, #000 calc(100% - 28px), transparent 100%);
}
.${ROOT_CLASS}-fadescroll.is-fade-t {
	-webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 28px);
	mask-image: linear-gradient(to bottom, transparent 0, #000 28px);
}
.${ROOT_CLASS}-fadescroll.is-fade-t.is-fade-b {
	-webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 28px, #000 calc(100% - 28px), transparent 100%);
	mask-image: linear-gradient(to bottom, transparent 0, #000 28px, #000 calc(100% - 28px), transparent 100%);
}
/* The suffix box is shorter than the grid, so it needs a shallower fade or the
   text is legible nowhere. */
.${ROOT_CLASS}-suffix.is-fade-b {
	-webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - 16px), transparent 100%);
	mask-image: linear-gradient(to bottom, #000 calc(100% - 16px), transparent 100%);
}
.${ROOT_CLASS}-suffix.is-fade-t {
	-webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 16px);
	mask-image: linear-gradient(to bottom, transparent 0, #000 16px);
}
.${ROOT_CLASS}-suffix.is-fade-t.is-fade-b {
	-webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%);
	mask-image: linear-gradient(to bottom, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%);
}
.${ROOT_CLASS}-style-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	grid-auto-rows: max-content;
	gap: 4px;
	align-content: start;
	align-items: start;
	min-width: 0;
}
.${ROOT_CLASS}-style-customs {
	flex: 0 0 auto;
	max-height: none;
	min-height: 0;
	overflow: visible;
	padding: 3px;
	margin: -1px -3px 0;
}
.${ROOT_CLASS}-style-tray {
	display: flex;
	flex: 0 0 auto;
	flex-direction: column;
	gap: 4px;
	min-width: 0;
	min-height: 0;
	background: var(--panel-bg-color, #161618);
}
.${ROOT_CLASS}-style-actions {
	display: none;
	grid-template-columns: 1fr 1fr;
	gap: 4px;
	flex: 0 0 auto;
	align-items: stretch;
	min-height: 0;
}
.${ROOT_CLASS}-style-actions.is-on { display: grid; }
.${ROOT_CLASS}-style-action {
	appearance: none;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4px;
	min-height: 50px;
	min-width: 0;
	padding: 5px 8px;
	border: 1px dashed var(--input-border-color, color-mix(in srgb, currentColor 22%, transparent));
	border-radius: 10px;
	background: var(--input-bg-color, transparent);
	color: var(--text-muted, inherit);
	cursor: pointer;
	overflow: hidden;
	font: inherit;
	box-sizing: border-box;
}
.${ROOT_CLASS}-style-action:hover {
	border-color: color-mix(in srgb, var(--logo-color, currentColor) 55%, transparent);
	color: var(--text-default, inherit);
}
.${ROOT_CLASS}-style-action.is-on {
	border-style: solid;
	border-color: var(--logo-color, currentColor);
	box-shadow: 0 0 0 2px color-mix(in srgb, var(--logo-color, currentColor) 28%, transparent);
	color: var(--text-default, inherit);
}
.${ROOT_CLASS}-style-action.is-filled {
	border-style: solid;
	padding: 5px 8px;
	align-items: center;
	justify-content: center;
	gap: 4px;
}
.${ROOT_CLASS}-style-action.is-drop {
	border-color: var(--logo-color, currentColor);
	background: color-mix(in srgb, var(--logo-color, currentColor) 8%, transparent);
}
.${ROOT_CLASS}-style-action-label {
	flex: 0 0 auto;
	font-size: 12px;
	font-weight: 500;
	line-height: 1.2;
	text-align: center;
	white-space: nowrap;
}
.${ROOT_CLASS}-style-action.is-filled .${ROOT_CLASS}-style-action-label {
	height: auto;
	line-height: 1.2;
	padding: 0;
	text-align: center;
}
.${ROOT_CLASS}-style-action.is-filled .${ROOT_CLASS}-chip-media {
	width: 38px;
	height: 22px;
	aspect-ratio: 21 / 9;
	flex: 0 0 auto;
	border-radius: 4px;
}
/* Webfont glyph variant of the chip icon: width/height mean nothing to a font
   glyph, so it is sized by font-size to match the 22px svg box beside it. */
.${ROOT_CLASS}-style-action .${ROOT_CLASS}-chip-action-glyph {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	line-height: 1;
}
.${ROOT_CLASS}-style-action .${ROOT_CLASS}-chip-action-icon,
.${ROOT_CLASS}-style-action svg.${ROOT_CLASS}-chip-action-icon {
	width: 22px;
	height: 22px;
	flex: 0 0 auto;
}
.${ROOT_CLASS}-chip {
	--gb-chip-bar: 18px;
	appearance: none;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	font: inherit;
	width: auto;
	min-width: 0;
	flex: 0 0 auto;
	padding: 0;
	border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
	border-radius: 10px;
	background: var(--input-bg-color, transparent);
	color: var(--text-default, inherit);
	cursor: pointer;
	overflow: hidden;
	height: auto;
	box-sizing: border-box;
}
.${ROOT_CLASS}-chip:hover { border-color: color-mix(in srgb, var(--logo-color, currentColor) 55%, transparent); }
.${ROOT_CLASS}-chip.is-on {
	border-color: var(--logo-color, currentColor);
	box-shadow: 0 0 0 2px color-mix(in srgb, var(--logo-color, currentColor) 28%, transparent);
}
.${ROOT_CLASS}-chip-media {
	position: relative;
	aspect-ratio: 21 / 9;
	width: 100%;
	height: auto;
	flex: 0 0 auto;
	overflow: hidden;
}
.${ROOT_CLASS}-chip-thumb,
.${ROOT_CLASS}-chip-swatch,
.${ROOT_CLASS}-chip-ph {
	height: 100%;
	width: 100%;
	display: block;
	object-fit: cover;
	object-position: center;
	pointer-events: none;
}
.${ROOT_CLASS}-chip-bar {
	display: flex;
	align-items: center;
	gap: 2px;
	height: var(--gb-chip-bar);
	flex: 0 0 var(--gb-chip-bar);
	padding: 0 4px 0 6px;
	min-width: 0;
}
.${ROOT_CLASS}-chip-label {
	flex: 1 1 auto;
	min-width: 0;
	padding: 0;
	font-size: 10px;
	line-height: var(--gb-chip-bar);
	height: var(--gb-chip-bar);
	text-align: left;
	color: var(--text-muted, inherit);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.${ROOT_CLASS}-chip.is-on .${ROOT_CLASS}-chip-label { color: var(--text-default, inherit); }
/* Preset with no preview yet (mid-regeneration): a neutral field, so the chip
   reads as pending rather than as a broken image. */
.${ROOT_CLASS}-chip-swatch {
	background: var(--bg-hover, rgba(127, 127, 127, 0.06));
}
.${ROOT_CLASS}-chip.is-custom .${ROOT_CLASS}-chip-swatch {
	background: linear-gradient(135deg, #6d28d9 0%, #db2777 100%);
}
.${ROOT_CLASS}-chip.is-add,
.${ROOT_CLASS}-chip.is-upload:not(.is-filled) {
	border-style: dashed;
}
.${ROOT_CLASS}-chip.is-upload.is-filled { border-style: solid; }
.${ROOT_CLASS}-chip.is-upload.is-drop {
	border-color: var(--logo-color, currentColor);
	background: color-mix(in srgb, var(--logo-color, currentColor) 8%, transparent);
}
.${ROOT_CLASS}-chip-action {
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4px;
	min-height: 0;
	padding: 6px 4px;
	color: var(--text-muted, inherit);
}
.${ROOT_CLASS}-chip-action .${ROOT_CLASS}-chip-label {
	flex: 0 0 auto;
	height: auto;
	line-height: 1.2;
	text-align: center;
	width: 100%;
}
.${ROOT_CLASS}-chip-action-icon {
	flex: 0 0 auto;
	display: block;
	opacity: 0.82;
}
.${ROOT_CLASS}-chip-edit {
	position: static;
	flex: 0 0 auto;
	z-index: 1;
	width: 18px;
	height: 18px;
	padding: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: 0;
	border-radius: 5px;
	background: transparent;
	color: var(--text-default, inherit);
	cursor: pointer;
	opacity: 0;
	pointer-events: none;
}
.${ROOT_CLASS}-chip:hover .${ROOT_CLASS}-chip-edit,
.${ROOT_CLASS}-chip.is-on .${ROOT_CLASS}-chip-edit,
.${ROOT_CLASS}-chip.is-editing .${ROOT_CLASS}-chip-edit {
	opacity: 1;
	pointer-events: auto;
}
.${ROOT_CLASS}-chip-edit:hover {
	background: color-mix(in srgb, var(--panel-bg-color, #111) 92%, transparent);
}
.${ROOT_CLASS}-chip-x {
	position: absolute;
	top: 2px;
	right: 2px;
	z-index: 2;
	width: 16px;
	height: 16px;
	border: 0;
	border-radius: 999px;
	background: color-mix(in srgb, var(--panel-bg-color, #111) 80%, transparent);
	color: var(--text-default, inherit);
	font-size: 11px;
	line-height: 1;
	cursor: pointer;
	display: none;
}
.${ROOT_CLASS}-chip.is-custom:hover .${ROOT_CLASS}-chip-x,
.${ROOT_CLASS}-chip.is-upload.is-filled .${ROOT_CLASS}-chip-x,
.${ROOT_CLASS}-style-action.is-filled .${ROOT_CLASS}-chip-x { display: block; }
/* The selected preset's name heads the suffix section. It used to borrow the
   tiny muted field-label caption and sit 4px under the action buttons, where it
   read as a stray word rather than a title. Give it real weight and breathing room
   above so the tray reads: actions, then "this style", then its prompt. */
.${ROOT_CLASS}-style-name {
	margin: 12px 0 2px;
	padding: 0 2px;
	font-size: 13px;
	font-weight: 600;
	line-height: 1.3;
	letter-spacing: 0.01em;
	color: var(--text-default, inherit);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.${ROOT_CLASS}-custom-form {
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding: 0;
	border: 0;
	border-radius: 0;
	background: transparent;
	flex: 0 1 auto;
	margin-top: 0;
	min-height: 0;
	justify-content: flex-start;
}
.${ROOT_CLASS}-custom-name.is-slot-off { display: none; }
.${ROOT_CLASS}-custom-form input {
	width: 100%;
	font: inherit;
	font-size: 13px;
	line-height: 1.4;
	color: var(--text-default, inherit);
	background: var(--panel-bg-color, transparent);
	border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
	border-radius: 8px;
	padding: 8px 10px;
	outline: none;
}
.${OVERLAY_CLASS} .${ROOT_CLASS}-suffix {
	display: block;
	width: 100%;
	flex: 0 0 auto;
	height: auto;
	min-height: 52px;
	margin: 0;
	padding: 4px 8px;
	resize: none;
	overflow-x: hidden;
	overflow-y: hidden;
	font: inherit;
	font-size: 12px;
	line-height: 1.25;
	letter-spacing: 0;
	color: var(--text-default, inherit);
	background: transparent;
	border: 1px solid transparent;
	border-radius: 8px;
	outline: none;
	appearance: none;
	-webkit-appearance: none;
	box-shadow: none;
}
.${OVERLAY_CLASS} .${ROOT_CLASS}-suffix[readonly] {
	color: var(--text-muted, inherit);
	cursor: default;
	background: transparent;
	border-color: transparent;
	box-shadow: none;
	padding-left: 8px;
	padding-right: 8px;
}
.${OVERLAY_CLASS} .${ROOT_CLASS}-suffix:not([readonly]),
.${OVERLAY_CLASS} .${ROOT_CLASS}-suffix.is-editing {
	color: var(--text-default, inherit);
	background: var(--input-bg-color, color-mix(in srgb, currentColor 6%, transparent));
	border-color: var(--logo-color, currentColor);
	padding: 4px 8px;
}
.${OVERLAY_CLASS} .${ROOT_CLASS}-suffix:not([readonly]):focus {
	border-color: var(--logo-color, currentColor);
	box-shadow: 0 0 0 3px color-mix(in srgb, var(--logo-color, currentColor) 22%, transparent);
}
.${OVERLAY_CLASS} .${ROOT_CLASS}-suffix::placeholder { color: var(--text-muted, inherit); }
.${ROOT_CLASS}-custom-actions {
	display: flex;
	gap: 6px;
	justify-content: flex-end;
	align-items: center;
	flex-wrap: nowrap;
	flex: 0 0 28px;
	min-height: 28px;
	height: 28px;
	margin-top: 0;
}
.${ROOT_CLASS}-custom-actions .${ROOT_CLASS}-ghost,
.${ROOT_CLASS}-custom-actions .${ROOT_CLASS}-generate {
	white-space: nowrap;
	flex: 0 0 auto;
	min-height: 28px;
	height: 28px;
	padding: 0 10px;
}
.${ROOT_CLASS}-custom-actions .is-slot-off {
	display: none;
}
.${ROOT_CLASS}-meta {
	display: grid;
	grid-template-columns: minmax(0, 1.8fr) minmax(88px, 0.7fr);
	gap: 8px;
	align-items: end;
	padding-top: 0;
}
.${ROOT_CLASS}-field {
	display: flex;
	flex-direction: column;
	gap: 4px;
	min-width: 0;
}
.${ROOT_CLASS}-field-label {
	font-size: 11px;
	font-weight: 500;
	color: color-mix(in srgb, var(--text-muted, currentColor) 82%, transparent);
}
.${ROOT_CLASS}-count-btns {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	flex: 0 0 auto;
}
.${ROOT_CLASS}-count-btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	min-width: 44px;
	height: 36px;
	min-height: 36px;
	padding: 0 12px;
	font: inherit;
	font-size: 12px;
	font-weight: 500;
	color: var(--text-muted, inherit);
	background: transparent;
	border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
	border-radius: 8px;
	cursor: pointer;
}
.${ROOT_CLASS}-count-btn:hover {
	color: var(--text-default, inherit);
	background: color-mix(in srgb, var(--text-default, currentColor) 6%, transparent);
}
.${ROOT_CLASS}-count-btn:disabled { opacity: 0.45; cursor: default; }
.${ROOT_CLASS}-count-btn:disabled:hover { background: transparent; }
.${ROOT_CLASS}-gen-icon {
	flex: 0 0 auto;
	display: block;
}
.${ROOT_CLASS}-model {
	position: relative;
}
.${ROOT_CLASS}-model-btn {
	width: 100%;
	display: flex;
	align-items: center;
	gap: 8px;
	height: 32px;
	min-height: 32px;
	padding: 0 10px;
	border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
	border-radius: 8px;
	background: var(--input-bg-color, transparent);
	color: var(--text-default, inherit);
	font: inherit;
	font-size: 12px;
	cursor: pointer;
	text-align: left;
}
.${ROOT_CLASS}-model-btn:hover,
.${ROOT_CLASS}-model-btn[aria-expanded="true"] {
	border-color: var(--logo-color, currentColor);
}
.${ROOT_CLASS}-model-name {
	flex: 1 1 auto;
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.${ROOT_CLASS}-model-btn .${ROOT_CLASS}-caret { flex: 0 0 auto; }
.${ROOT_CLASS}-model-cost {
	flex: 0 0 auto;
	color: var(--text-muted, inherit);
	font-variant-numeric: tabular-nums;
	font-size: 12px;
	white-space: nowrap;
}
.${ROOT_CLASS}-caret { color: var(--text-muted, inherit); font-size: 11px; }
.${ROOT_CLASS}-menu {
	display: none;
	position: absolute;
	left: 0;
	right: 0;
	top: calc(100% + 4px);
	z-index: 5;
	max-height: 240px;
	overflow: auto;
	padding: 4px;
	border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
	border-radius: 10px;
	background: var(--panel-bg-color, #161618);
	box-shadow: 0 12px 32px color-mix(in srgb, #000 28%, transparent);
}
.${ROOT_CLASS}-menu.is-floating {
	position: fixed;
	left: 0;
	right: auto;
	top: 0;
	z-index: 100002;
	max-height: min(360px, 50vh);
}
.${ROOT_CLASS}-menu.is-open { display: block; }
.${ROOT_CLASS}-menu-model {
	min-width: 480px;
	max-width: min(520px, calc(100vw - 16px));
}
.${ROOT_CLASS}-option {
	display: flex;
	align-items: center;
	gap: 8px;
	width: 100%;
	padding: 8px 8px;
	border: 0;
	border-radius: 8px;
	background: transparent;
	color: var(--text-default, inherit);
	font: inherit;
	font-size: 13px;
	cursor: pointer;
	text-align: left;
}
.${ROOT_CLASS}-option:hover,
.${ROOT_CLASS}-option.is-active { background: color-mix(in srgb, var(--text-default, currentColor) 8%, transparent); }
.${ROOT_CLASS}-menu-model .${ROOT_CLASS}-option {
	display: grid;
	grid-template-columns: 30px minmax(0, 1fr) 22px 24px 72px;
	grid-template-rows: 32px;
	align-items: center;
	column-gap: 8px;
	height: 36px;
	padding: 0 8px;
	white-space: nowrap;
}
.${ROOT_CLASS}-star {
	flex: 0 0 auto;
	width: 30px;
	height: 30px;
	padding: 0;
	border: 0;
	border-radius: 6px;
	background: transparent;
	color: var(--text-muted, inherit);
	cursor: pointer;
	font-size: 18px;
	line-height: 1;
}
.${ROOT_CLASS}-star.is-on { color: var(--logo-color, #fbbf24); }
.${ROOT_CLASS}-menu-model .${ROOT_CLASS}-option-name {
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.${ROOT_CLASS}-menu-model .${ROOT_CLASS}-option-meta {
	display: contents;
}
.${ROOT_CLASS}-option-cost {
	width: 72px;
	color: var(--text-muted, inherit);
	font-size: 12px;
	font-variant-numeric: tabular-nums;
	text-align: right;
	white-space: nowrap;
}
.${ROOT_CLASS}-menu-model .${ROOT_CLASS}-meter {
	justify-self: center;
}
.${ROOT_CLASS}-pick { position: relative; width: 100%; }
.${ROOT_CLASS}-pick-btn {
	width: 100%;
	display: flex;
	align-items: center;
	gap: 8px;
	height: 32px;
	padding: 0 10px;
	border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
	border-radius: 8px;
	background: var(--input-bg-color, transparent);
	color: var(--text-default, inherit);
	font: inherit;
	font-size: 12px;
	cursor: pointer;
	text-align: left;
}
.${ROOT_CLASS}-pick-btn:hover,
.${ROOT_CLASS}-pick-btn[aria-expanded="true"] {
	border-color: var(--logo-color, currentColor);
}
.${ROOT_CLASS}-pick-label {
	flex: 1 1 auto;
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.${ROOT_CLASS}-apply-btn {
	flex: 0 1 auto;
	white-space: nowrap;
	min-height: 36px;
	height: 36px;
}
.${ROOT_CLASS}-ref-drop .${ROOT_CLASS}-ghost { flex: 0 0 auto; }
.${ROOT_CLASS}-ghost {
	min-height: 32px;
	padding: 0 12px;
	font: inherit;
	font-size: 12px;
	font-weight: 500;
	color: var(--text-default, inherit);
	background: transparent;
	border: 1px solid var(--input-border-color, color-mix(in srgb, currentColor 16%, transparent));
	border-radius: 8px;
	cursor: pointer;
}
.${ROOT_CLASS}-ghost:hover { background: color-mix(in srgb, var(--text-default, currentColor) 6%, transparent); }
.${ROOT_CLASS}-ghost:disabled { opacity: 0.45; cursor: default; }
.${ROOT_CLASS}-generate {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	min-height: 32px;
	padding: 0 14px;
	font: inherit;
	font-size: 12px;
	font-weight: 500;
	color: var(--enum-green-fg, #10b981);
	background: color-mix(in srgb, var(--enum-green-fg, #10b981) 12%, transparent);
	border: 1px solid color-mix(in srgb, var(--enum-green-fg, #10b981) 45%, transparent);
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 80ms ease, border-color 80ms ease;
}
.${ROOT_CLASS}-generate:hover {
	background: color-mix(in srgb, var(--enum-green-fg, #10b981) 20%, transparent);
	border-color: color-mix(in srgb, var(--enum-green-fg, #10b981) 70%, transparent);
}
.${ROOT_CLASS}-generate:focus-visible {
	outline: 2px solid var(--enum-green-fg, #10b981);
	outline-offset: 2px;
}
.${ROOT_CLASS}-generate:disabled { opacity: 0.55; cursor: default; }
@media (max-width: 760px) {
	.${OVERLAY_CLASS} {
		align-items: flex-start;
	}
	.${ROOT_CLASS}-slot {
		width: calc(100vw - 24px);
		height: auto;
		min-height: 0;
	}
	.${ROOT_CLASS}-dialog {
		height: auto;
		max-height: none;
		min-height: 0;
	}
	.${ROOT_CLASS}-body {
		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: auto auto;
		overflow: visible;
	}
	.${ROOT_CLASS}-col-preview {
		height: auto;
		overflow: visible;
	}
	.${ROOT_CLASS}-col-styles {
		height: min(680px, calc(100vh - 32px));
		min-height: 520px;
	}
	.${ROOT_CLASS}-prompt-block {
		flex: 0 0 auto;
	}
	.${ROOT_CLASS}-prompt {
		height: 112px;
		flex: 0 0 auto;
	}
}
`;
  var PANEL_LOCAL_CSS = `
.${ROOT_CLASS}-panel .gb-field,
.${ROOT_CLASS}-panel .gb-field-row {
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding: 6px 0;
}
/* Heading hierarchy inside a section, top to bottom:
   tps-section-label (shared, uppercase muted)  \u2192  gb-field-label (sub-heading)
   \u2192  gb-field-desc (helper). Sub-headings are semibold so they read as headings
   and not as another line of copy. */
.${ROOT_CLASS}-panel .gb-field-label {
	font-size: var(--tps-fs-label, 13px);
	font-weight: var(--tps-fw-semibold, 600);
	line-height: 1.3;
	color: var(--tps-text, inherit);
}
.${ROOT_CLASS}-panel .gb-field-hint,
.${ROOT_CLASS}-panel .gb-field-desc {
	font-size: var(--tps-fs-hint, 12px);
	color: var(--tps-text-muted, inherit);
	line-height: 1.45;
}
.${ROOT_CLASS}-panel .gb-input,
.${ROOT_CLASS}-panel .gb-select {
	width: 100%;
	height: var(--tps-control-h-md, 32px);
	padding: 0 10px;
	font: inherit;
	font-size: var(--tps-fs-button, 12px);
	color: var(--tps-text, inherit);
	background: var(--tps-bg-input, var(--input-bg-color, transparent));
	border: 1px solid var(--tps-divider, var(--input-border-color, transparent));
	border-radius: var(--tps-radius-sm, 4px);
}
.${ROOT_CLASS}-panel .gb-input:focus,
.${ROOT_CLASS}-panel .gb-select:focus {
	outline: none;
	border-color: var(--tps-accent, var(--logo-color, currentColor));
}
.${ROOT_CLASS}-panel .gb-link {
	color: inherit;
	text-decoration: underline;
	text-underline-offset: 2px;
}
.${ROOT_CLASS}-panel .gb-auto {
	display: flex;
	flex-direction: column;
	gap: 12px;
	min-width: 0;
}
.${ROOT_CLASS}-panel .gb-auto-toolbar {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 8px;
}
.${ROOT_CLASS}-panel .gb-auto-search {
	flex: 1 1 160px;
	min-width: 0;
}
.${ROOT_CLASS}-panel .gb-auto-split {
	display: grid;
	grid-template-columns: minmax(160px, 0.9fr) minmax(0, 1.4fr);
	gap: 16px;
	min-width: 0;
	align-items: start;
}
.${ROOT_CLASS}-panel .gb-auto-list {
	display: flex;
	flex-direction: column;
	gap: 2px;
	min-width: 0;
	max-height: 420px;
	overflow: auto;
	padding: 2px;
	border: 1px solid var(--tps-divider, transparent);
	border-radius: var(--tps-radius-md, 6px);
}
.${ROOT_CLASS}-panel .gb-auto-row {
	display: flex;
	align-items: center;
	gap: 8px;
	width: 100%;
	min-height: 32px;
	padding: 6px 8px;
	border: 0;
	border-radius: var(--tps-radius-sm, 4px);
	background: transparent;
	color: inherit;
	font: inherit;
	text-align: left;
	cursor: pointer;
}
.${ROOT_CLASS}-panel .gb-auto-row:hover {
	background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
}
.${ROOT_CLASS}-panel .gb-auto-row.is-on {
	background: var(--tps-bg-active, color-mix(in srgb, currentColor 10%, transparent));
	font-weight: var(--tps-fw-semibold, 600);
}
.${ROOT_CLASS}-panel .gb-auto-row-icon {
	flex: 0 0 auto;
	opacity: 0.72;
}
.${ROOT_CLASS}-panel .gb-auto-row-name {
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.${ROOT_CLASS}-panel .gb-auto-row-flag {
	flex: 0 0 auto;
	margin-left: auto;
	font-size: 11px;
	color: var(--tps-text-muted, inherit);
}
.${ROOT_CLASS}-panel .gb-auto-detail {
	display: flex;
	flex-direction: column;
	gap: 10px;
	min-width: 0;
}
/* The selected collection heads its own column, one step above the
   sub-headings beneath it. */
.${ROOT_CLASS}-panel .gb-auto-detail-title {
	font-size: var(--tps-fs-title, 15px);
	font-weight: var(--tps-fw-semibold, 600);
	line-height: 1.3;
	color: var(--tps-text, inherit);
	padding-bottom: 6px;
	border-bottom: 1px solid var(--tps-divider, transparent);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.${ROOT_CLASS}-panel .gb-auto-empty {
	padding: 20px 8px;
	font-size: var(--tps-fs-hint, 12px);
	line-height: 1.5;
	color: var(--tps-text-muted, inherit);
}
.${ROOT_CLASS}-panel .gb-auto-styles {
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	gap: 8px;
}
.${ROOT_CLASS}-panel .gb-auto-chip {
	appearance: none;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	padding: 0;
	border: 1px solid var(--tps-divider, transparent);
	border-radius: var(--tps-radius-sm, 4px);
	background: var(--tps-bg-input, transparent);
	color: inherit;
	font: inherit;
	cursor: pointer;
	overflow: hidden;
	min-width: 0;
}
.${ROOT_CLASS}-panel .gb-auto-chip:hover {
	border-color: var(--tps-accent, var(--logo-color, currentColor));
}
.${ROOT_CLASS}-panel .gb-auto-chip.is-on {
	border-color: var(--tps-accent, var(--logo-color, currentColor));
	box-shadow: 0 0 0 2px color-mix(in srgb, var(--tps-accent, currentColor) 22%, transparent);
}
.${ROOT_CLASS}-panel .gb-auto-chip-media {
	aspect-ratio: 21 / 9;
	width: 100%;
	overflow: hidden;
	background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
}
.${ROOT_CLASS}-panel .gb-auto-chip-media img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.${ROOT_CLASS}-panel .gb-auto-chip-label {
	padding: 4px 6px;
	font-size: 11px;
	line-height: 1.2;
	color: var(--tps-text-muted, inherit);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: left;
}
.${ROOT_CLASS}-panel .gb-auto-chip.is-on .gb-auto-chip-label {
	color: var(--tps-text, inherit);
}
.${ROOT_CLASS}-panel .gb-auto-editor {
	gap: 6px;
}
/* Grows with its text (Chromium field-sizing; Safari keeps the rows attribute),
   capped so a long artist prompt scrolls inside itself rather than stretching
   the column. No horizontal bar, no resize grip \u2014 the height is the content's. */
.${ROOT_CLASS}-panel .gb-auto-prompt {
	height: auto;
	min-height: 96px;
	max-height: 240px;
	field-sizing: content;
	padding: 8px 10px;
	font-size: var(--tps-fs-hint, 12px);
	line-height: 1.45;
	resize: none;
	overflow-x: hidden;
	overflow-y: auto;
	white-space: pre-wrap;
	overflow-wrap: anywhere;
}
.${ROOT_CLASS}-panel .gb-auto-prompt[readonly] {
	color: var(--tps-text-muted, inherit);
	cursor: default;
}
.${ROOT_CLASS}-panel .gb-auto-prompt-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	padding-top: 2px;
}
/* Themed thin scrollbars for the two scrollers in the Auto column \u2014 same recipe
   the shared feedback card uses, so nothing here shows a stock OS bar. */
.${ROOT_CLASS}-panel .gb-auto-prompt,
.${ROOT_CLASS}-panel .gb-auto-list {
	scrollbar-width: thin;
	scrollbar-color: var(--tps-border, rgba(127, 127, 127, 0.25)) transparent;
}
.${ROOT_CLASS}-panel .gb-auto-prompt::-webkit-scrollbar,
.${ROOT_CLASS}-panel .gb-auto-list::-webkit-scrollbar {
	width: 8px;
	height: 0;
}
.${ROOT_CLASS}-panel .gb-auto-prompt::-webkit-scrollbar-track,
.${ROOT_CLASS}-panel .gb-auto-list::-webkit-scrollbar-track {
	background: transparent;
}
.${ROOT_CLASS}-panel .gb-auto-prompt::-webkit-scrollbar-thumb,
.${ROOT_CLASS}-panel .gb-auto-list::-webkit-scrollbar-thumb {
	background: var(--tps-border, rgba(127, 127, 127, 0.25));
	border-radius: 999px;
	border: 2px solid transparent;
	background-clip: padding-box;
}
/* Ghost buttons ship with a --tps-divider border, faint enough to read as loose
   text next to a form. In this panel they get a real edge and a fill so Upload,
   Edit, Refresh, Remove and friends look like the controls they are. */
.tps-panel.${ROOT_CLASS}-panel .tps-button--ghost {
	background: var(--tps-bg-input, var(--input-bg-color, transparent));
	border-color: var(--tps-border, var(--input-border-color, rgba(127, 127, 127, 0.25)));
}
.tps-panel.${ROOT_CLASS}-panel .tps-button--ghost:hover {
	background: var(--tps-bg-hover, rgba(127, 127, 127, 0.08));
	border-color: var(--tps-border-strong, var(--tps-border, currentColor));
}
.${ROOT_CLASS}-panel .gb-auto-actions {
	gap: 8px;
	margin-top: 2px;
}
@media (max-width: 520px) {
	.${ROOT_CLASS}-panel .gb-auto-split {
		grid-template-columns: minmax(0, 1fr);
	}
	.${ROOT_CLASS}-panel .gb-auto-list {
		max-height: 220px;
	}
}
`;

  // style-resolve.js
  function resolveStyleSnippet(style, overridesJson) {
    const id = style && style.id != null ? String(style.id) : "";
    const overrides = parseStyleOverrides(overridesJson);
    if (id && Object.prototype.hasOwnProperty.call(overrides, id)) return overrides[id];
    return style && style.snippet ? String(style.snippet) : "";
  }
  __name(resolveStyleSnippet, "resolveStyleSnippet");
  function listBannerStyles(customStylesJson) {
    const custom = parseCustomStyles(customStylesJson).map((s) => ({ ...s, group: "image" }));
    return [...BUILTIN_STYLES, ...custom];
  }
  __name(listBannerStyles, "listBannerStyles");
  function resolveBannerStyle(styleId, settings) {
    const id = String(styleId || "").trim() || "none";
    const styles = listBannerStyles(settings?.customStylesJson);
    const style = styles.find((s) => s.id === id) || BUILTIN_STYLES[0];
    return { ...style, snippet: resolveStyleSnippet(style, settings?.styleOverridesJson) };
  }
  __name(resolveBannerStyle, "resolveBannerStyle");
  function buildTitleStylePrompt(title, style) {
    const subject = String(title || "").trim() || "Untitled";
    const snippet = String(style?.snippet || "").trim();
    return snippet ? `${subject}

${snippet}` : subject;
  }
  __name(buildTitleStylePrompt, "buildTitleStylePrompt");

  // openrouter.js
  var OPENROUTER_BASE = "https://openrouter.ai/api/v1";
  var CATALOG_TTL_MS = 60 * 60 * 1e3;
  var TOKENS_PER_1K = 1290;
  var MP_PER_1K = 1;
  function openRouterHeaders(apiKey) {
    const headers = {
      "Content-Type": "application/json",
      "HTTP-Referer": "https://akaready.com",
      "X-OpenRouter-Title": "Generate Banner"
    };
    if (apiKey) headers.Authorization = `Bearer ${apiKey}`;
    return headers;
  }
  __name(openRouterHeaders, "openRouterHeaders");
  function isCorsFailure(err) {
    const msg = String(
      /** @type {any} */
      err?.message || err || ""
    );
    return /failed to fetch|networkerror|load failed|cors/i.test(msg);
  }
  __name(isCorsFailure, "isCorsFailure");
  var CORS_MESSAGE = "OpenRouter blocked this browser request (CORS or network). The plugin calls OpenRouter directly from Thymer \u2014 a browser extension, privacy filter, or missing CORS allowance can cause this. Check the key in Plugin: Generate Banner, or try the Thymer desktop app.";
  function formatUsd(n, decimals) {
    if (!Number.isFinite(n)) return "";
    const places = decimals != null ? decimals : Math.abs(n) >= 0.01 && Math.abs(n * 100 - Math.round(n * 100)) < 1e-9 ? 2 : 3;
    let s = n.toFixed(places);
    s = s.replace(/0+$/, "").replace(/\.$/, "");
    if (!s.includes(".")) s += ".00";
    else if (s.split(".")[1].length === 1 && places >= 2) s += "0";
    return `$${s}`;
  }
  __name(formatUsd, "formatUsd");
  function priceLabel(perImage, opts = {}) {
    const n = Math.max(1, Number(opts.count) || 1);
    if (!Number.isFinite(perImage) || perImage >= 900) return opts.estimated ? "est." : "";
    const prefix = opts.estimated ? "est. " : "";
    if (n > 1) return `${prefix}${formatUsd(perImage * n)} for ${n}`;
    return `${prefix}${formatUsd(perImage)} / image`;
  }
  __name(priceLabel, "priceLabel");
  function priceFromPricingLines(lines) {
    const list = Array.isArray(lines) ? lines : [];
    const output = list.filter((l) => !l || !l.billable || l.billable === "output_image");
    const pool = output.length ? output : list;
    const pick = pool.find((l) => String(l?.variant || "").toLowerCase() === "1k") || pool[0];
    if (!pick || typeof pick !== "object") return null;
    const unit = String(pick.unit || "").toLowerCase();
    const cost = Number(pick.cost_usd);
    if (!Number.isFinite(cost)) return null;
    if (unit === "image") {
      return { label: priceLabel(cost, { estimated: false }), sortKey: cost, estimated: false, perImage: cost };
    }
    if (unit === "megapixel" || unit === "mp") {
      const per = cost * MP_PER_1K;
      return { label: priceLabel(per, { estimated: true }), sortKey: per, estimated: true, perImage: per };
    }
    if (unit === "token") {
      const per = cost * TOKENS_PER_1K;
      return { label: priceLabel(per, { estimated: true }), sortKey: per, estimated: true, perImage: per };
    }
    return { label: priceLabel(cost, { estimated: true }), sortKey: cost, estimated: true, perImage: cost };
  }
  __name(priceFromPricingLines, "priceFromPricingLines");
  function priceFromEndpointPayload(payload) {
    const endpoints = Array.isArray(payload?.endpoints) ? payload.endpoints : Array.isArray(payload?.data?.endpoints) ? payload.data.endpoints : [];
    let best = null;
    for (const ep of endpoints) {
      const priced = priceFromPricingLines(ep?.pricing);
      if (!priced) continue;
      if (!best || priced.sortKey < best.sortKey) best = priced;
    }
    return best;
  }
  __name(priceFromEndpointPayload, "priceFromEndpointPayload");
  function fallbackModel(id) {
    const curated = CURATED_MODELS.find((m) => m.id === id);
    const fb = FALLBACK_PRICES[id] || { perImage: 999, estimated: true };
    const per = Number(fb.perImage) || 999;
    return {
      id,
      name: curated ? curated.name : id,
      perImage: per,
      sortKey: per,
      estimated: fb.estimated !== false,
      fromFallback: true,
      label: priceLabel(per, { estimated: true })
    };
  }
  __name(fallbackModel, "fallbackModel");
  function fallbackCatalog() {
    return CURATED_MODELS.map((m) => fallbackModel(m.id));
  }
  __name(fallbackCatalog, "fallbackCatalog");
  function catalogStorageKey(workspaceGuid) {
    return `${PLUGIN_SLUG}/${workspaceGuid || "default"}/or-image-catalog`;
  }
  __name(catalogStorageKey, "catalogStorageKey");
  function readCachedCatalog(workspaceGuid) {
    try {
      const raw = localStorage.getItem(catalogStorageKey(workspaceGuid));
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return null;
      if (typeof parsed.ts !== "number" || Date.now() - parsed.ts > CATALOG_TTL_MS) return null;
      if (!Array.isArray(parsed.models) || !parsed.models.length) return null;
      return parsed.models.map((m) => ({
        id: String(m.id || ""),
        name: String(m.name || m.id || ""),
        perImage: Number(m.perImage != null ? m.perImage : m.sortKey) || 999,
        sortKey: Number(m.sortKey) || 999,
        estimated: !!m.estimated,
        fromFallback: !!m.fromFallback,
        label: String(m.label || "")
      })).filter((m) => m.id);
    } catch {
      return null;
    }
  }
  __name(readCachedCatalog, "readCachedCatalog");
  function writeCachedCatalog(workspaceGuid, models) {
    try {
      localStorage.setItem(catalogStorageKey(workspaceGuid), JSON.stringify({ ts: Date.now(), models }));
    } catch {
    }
  }
  __name(writeCachedCatalog, "writeCachedCatalog");
  function sortModels(models, favoriteIds) {
    const fav = parseFavoriteIds(favoriteIds);
    const favSet = new Set(fav);
    const curatedIndex = new Map(CURATED_MODELS.map((m, i) => [m.id, i]));
    return models.slice().sort((a, b) => {
      const af = favSet.has(a.id);
      const bf = favSet.has(b.id);
      if (af && bf) return fav.indexOf(a.id) - fav.indexOf(b.id);
      if (af) return -1;
      if (bf) return 1;
      if (a.sortKey !== b.sortKey) return a.sortKey - b.sortKey;
      return (curatedIndex.get(a.id) ?? 99) - (curatedIndex.get(b.id) ?? 99);
    });
  }
  __name(sortModels, "sortModels");
  async function fetchWithTimeout(url, init, timeoutMs) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      return await fetch(url, { ...init, signal: ctrl.signal });
    } finally {
      clearTimeout(timer);
    }
  }
  __name(fetchWithTimeout, "fetchWithTimeout");
  function errorFromBody(body, status) {
    const msg = body?.error?.message || body?.message || body?.error || "";
    if (status === 401) return "OpenRouter rejected the API key. Add a valid key in Plugin: Generate Banner.";
    if (status === 402) return "OpenRouter reports insufficient credits for this request.";
    if (status === 429) return "OpenRouter rate-limited this request. Try again in a moment.";
    return String(msg || `OpenRouter request failed (${status})`);
  }
  __name(errorFromBody, "errorFromBody");
  async function loadCatalog(apiKey, workspaceGuid) {
    const cached = readCachedCatalog(workspaceGuid);
    if (cached && cached.length) return { models: cached, fromCache: true, fromFallback: cached.every((m) => m.fromFallback) };
    const fallback = fallbackCatalog();
    if (!apiKey) return { models: fallback, fromCache: false, fromFallback: true };
    try {
      const modelsRes = await fetchWithTimeout(`${OPENROUTER_BASE}/images/models`, {
        method: "GET",
        headers: openRouterHeaders(apiKey)
      }, 2e4);
      if (!modelsRes.ok) {
        return { models: fallback, fromCache: false, fromFallback: true, error: errorFromBody(await readJsonSafe(modelsRes), modelsRes.status) };
      }
      const modelsJson = await modelsRes.json();
      const listed = Array.isArray(modelsJson?.data) ? modelsJson.data : [];
      const nameById = new Map(listed.map((m) => [String(m.id || ""), String(m.name || "")]));
      const priced = await Promise.all(CURATED_MODELS.map(async (curated) => {
        try {
          const epRes = await fetchWithTimeout(`${OPENROUTER_BASE}/images/models/${curated.id}/endpoints`, {
            method: "GET",
            headers: openRouterHeaders(apiKey)
          }, 2e4);
          if (!epRes.ok) return fallbackModel(curated.id);
          const epJson = await epRes.json();
          const live = priceFromEndpointPayload(epJson);
          if (!live) return fallbackModel(curated.id);
          return {
            id: curated.id,
            name: curated.name || nameById.get(curated.id) || curated.id,
            label: live.label,
            sortKey: live.sortKey,
            perImage: live.perImage != null ? live.perImage : live.sortKey,
            estimated: live.estimated,
            fromFallback: false
          };
        } catch {
          return fallbackModel(curated.id);
        }
      }));
      writeCachedCatalog(workspaceGuid, priced);
      return { models: priced, fromCache: false, fromFallback: priced.every((m) => m.fromFallback) };
    } catch (err) {
      if (isCorsFailure(err)) {
        return { models: fallback, fromCache: false, fromFallback: true, error: CORS_MESSAGE };
      }
      return { models: fallback, fromCache: false, fromFallback: true, error: String(
        /** @type {any} */
        err?.message || err
      ) };
    }
  }
  __name(loadCatalog, "loadCatalog");
  async function readJsonSafe(res) {
    try {
      return await res.json();
    } catch {
      return null;
    }
  }
  __name(readJsonSafe, "readJsonSafe");
  async function generateImages({ apiKey, model, prompt, n = 1, aspectRatio, resolution, referenceDataUrl, onImage }) {
    const count = Math.max(1, Math.min(4, Number(n) || 1));
    const args = { apiKey, model, prompt, aspectRatio, resolution, referenceDataUrl };
    if (count === 1) {
      const batch = await requestImages({ ...args, n: 1 });
      if (batch[0]) onImage?.(batch[0], 0);
      return batch;
    }
    const results = Array.from({ length: count }, () => null);
    const errors = Array.from({ length: count }, () => null);
    await Promise.all(Array.from({ length: count }, async (_, i) => {
      try {
        const [img] = await requestImages({ ...args, n: 1 });
        results[i] = img;
        onImage?.(img || null, i);
      } catch (err) {
        errors[i] = err;
        onImage?.(null, i);
      }
    }));
    const ok = results.filter(Boolean);
    if (!ok.length) {
      const first = errors.find(Boolean);
      throw first instanceof Error ? first : new Error(String(first || "OpenRouter returned no image data."));
    }
    return (
      /** @type {{ file: File, mediaType: string, cost: number | null, b64: string }[]} */
      ok
    );
  }
  __name(generateImages, "generateImages");
  function inputReference(dataUrl) {
    return { type: "image_url", image_url: { url: dataUrl } };
  }
  __name(inputReference, "inputReference");
  async function requestImages({ apiKey, model, prompt, n = 1, aspectRatio, resolution, referenceDataUrl }) {
    if (!apiKey) throw new Error("Add an OpenRouter API key in Plugin: Generate Banner.");
    if (!String(prompt || "").trim()) throw new Error("Write a prompt first.");
    const count = Math.max(1, Math.min(4, Number(n) || 1));
    const ref = typeof referenceDataUrl === "string" && referenceDataUrl.startsWith("data:image/") ? referenceDataUrl : "";
    const payload = { model, prompt: String(prompt) };
    if (aspectRatio) payload.aspect_ratio = aspectRatio;
    if (resolution) payload.resolution = resolution;
    if (count > 1) payload.n = count;
    if (ref) payload.input_references = [inputReference(ref)];
    try {
      return await postImages(apiKey, payload);
    } catch (err) {
      const msg = String(
        /** @type {any} */
        err?.message || err || ""
      );
      if (payload.input_references && /400|unsupported|input_references|reference|image/i.test(msg)) {
        const { input_references: _drop, ...withoutRef } = payload;
        try {
          return await postImages(apiKey, withoutRef);
        } catch (err2) {
          const msg2 = String(
            /** @type {any} */
            err2?.message || err2 || ""
          );
          if ((aspectRatio || resolution) && /400|unsupported|aspect_ratio|resolution|parameter/i.test(msg2)) {
            return await postImages(apiKey, { model, prompt: String(prompt) });
          }
          throw err2;
        }
      }
      if ((aspectRatio || resolution) && /400|unsupported|aspect_ratio|resolution|parameter/i.test(msg)) {
        const fallback = { model, prompt: String(prompt) };
        if (ref) fallback.input_references = [inputReference(ref)];
        return await postImages(apiKey, fallback);
      }
      throw err;
    }
  }
  __name(requestImages, "requestImages");
  async function postImages(apiKey, payload) {
    let res;
    try {
      res = await fetchWithTimeout(`${OPENROUTER_BASE}/images`, {
        method: "POST",
        headers: openRouterHeaders(apiKey),
        body: JSON.stringify(payload)
      }, 12e4);
    } catch (err) {
      if (isCorsFailure(err)) throw new Error(CORS_MESSAGE);
      throw err;
    }
    const body = await readJsonSafe(res);
    if (!res.ok) throw new Error(errorFromBody(body, res.status));
    const items = Array.isArray(body?.data) ? body.data : [];
    if (!items.length) throw new Error("OpenRouter returned no image data.");
    const totalCost = readUsageCost(body);
    const costEach = items.length && totalCost != null ? totalCost / items.length : totalCost;
    const out = [];
    for (const item of items) {
      let b64 = String(item?.b64_json || item?.b64Json || "");
      const mediaType = String(item?.media_type || item?.mediaType || "image/png").split(";")[0] || "image/png";
      if (b64.startsWith("data:")) {
        const comma = b64.indexOf(",");
        if (comma >= 0) b64 = b64.slice(comma + 1);
      }
      if (!b64 && item?.url) {
        const fetched = await fetchRemoteImage(item.url);
        out.push({ file: fetched.file, mediaType: fetched.mediaType, cost: costEach, b64: "" });
        continue;
      }
      if (!b64) continue;
      const file = b64ToFile(b64, mediaType, `banner-${Date.now()}-${out.length}.${extForType(mediaType)}`);
      out.push({ file, mediaType, cost: costEach, b64 });
    }
    if (!out.length) throw new Error("OpenRouter returned an image without b64_json.");
    return out;
  }
  __name(postImages, "postImages");
  function readUsageCost(body) {
    const n = Number(body?.usage?.cost);
    return Number.isFinite(n) ? n : null;
  }
  __name(readUsageCost, "readUsageCost");
  async function fetchRemoteImage(url) {
    let res;
    try {
      res = await fetch(url);
    } catch (err) {
      if (isCorsFailure(err)) throw new Error(CORS_MESSAGE);
      throw err;
    }
    if (!res.ok) throw new Error(`Could not download the generated image (${res.status}).`);
    const type = (res.headers.get("content-type") || "image/png").split(";")[0];
    const blob = await res.blob();
    const file = new File([blob], `banner-${Date.now()}.${extForType(type)}`, { type });
    return { file, mediaType: type };
  }
  __name(fetchRemoteImage, "fetchRemoteImage");
  function b64ToFile(b64, mediaType, filename) {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return new File([bytes], filename, { type: mediaType || "image/png" });
  }
  __name(b64ToFile, "b64ToFile");
  function extForType(mediaType) {
    if (mediaType.includes("jpeg") || mediaType.includes("jpg")) return "jpg";
    if (mediaType.includes("webp")) return "webp";
    if (mediaType.includes("gif")) return "gif";
    return "png";
  }
  __name(extForType, "extForType");
  async function summarizePage({ apiKey, model, title, body }) {
    if (!apiKey) throw new Error("missing key");
    const content = [
      "Write a concise 1\u20132 sentence image prompt for a wide page banner.",
      "Capture the theme of the page. No quotes, no preamble, no markdown.",
      title ? `Title: ${title}` : "",
      body ? `Content:
${body}` : ""
    ].filter(Boolean).join("\n\n");
    let res;
    try {
      res = await fetchWithTimeout(`${OPENROUTER_BASE}/chat/completions`, {
        method: "POST",
        headers: openRouterHeaders(apiKey),
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content }],
          max_tokens: 180,
          temperature: 0.4
        })
      }, 2e4);
    } catch (err) {
      if (isCorsFailure(err)) throw new Error(CORS_MESSAGE);
      throw err;
    }
    const json = await readJsonSafe(res);
    if (!res.ok) throw new Error(errorFromBody(json, res.status));
    const text = String(json?.choices?.[0]?.message?.content || "").trim().replace(/^["']|["']$/g, "");
    if (!text) throw new Error("empty summary");
    return text;
  }
  __name(summarizePage, "summarizePage");

  // dialog.js
  var overlayEl = null;
  var detachKey = null;
  var detachDoc = null;
  var detachResize = null;
  function isBannerDialogOpen() {
    return !!(overlayEl && overlayEl.isConnected);
  }
  __name(isBannerDialogOpen, "isBannerDialogOpen");
  function closeBannerDialog() {
    const onClose = overlayEl && overlayEl._onClose;
    if (overlayEl) overlayEl._onClose = null;
    try {
      onClose?.();
    } catch {
    }
    if (detachKey) {
      window.removeEventListener("keydown", detachKey, true);
      detachKey = null;
    }
    if (detachDoc) {
      document.removeEventListener("mousedown", detachDoc, true);
      detachDoc = null;
    }
    try {
      detachResize?.();
    } catch {
    }
    detachResize = null;
    try {
      overlayEl?.remove();
    } catch {
    }
    overlayEl = null;
  }
  __name(closeBannerDialog, "closeBannerDialog");
  async function openBannerDialog(host) {
    closeBannerDialog();
    const settings = host.getSettings();
    const ctx = await host.getPageContext();
    const panelApi = host.ui.getActivePanel?.();
    let selectedModel = settings.lastModel || fallbackCatalog()[0].id;
    let selectedStyleId = "none";
    let hasRecord = false;
    let hasCollection = false;
    try {
      hasRecord = !!(ctx?.record || panelApi?.getActiveRecord?.());
    } catch {
    }
    try {
      hasCollection = !!(ctx?.collection || panelApi?.getActiveCollection?.());
    } catch {
    }
    let styleGroup = !hasRecord && hasCollection ? "pattern" : "image";
    let editingStyleId = null;
    let generateCount = GENERATE_COUNTS.includes(
      /** @type {any} */
      settings.generateCount
    ) ? settings.generateCount : "4";
    const aspectId = ASPECT_OPTIONS[0]?.id || DEFAULT_ASPECT;
    let resolution = settings.lastResolution;
    let promptDirty = false;
    let busy = false;
    let thumbBusy = false;
    let thumbOfferStyleId = null;
    let pending = 0;
    let catalog = fallbackCatalog();
    let deleteArmed = false;
    let dragIndex = -1;
    let dragInsert = -1;
    let suppressFilmClick = false;
    let candidates = Array.isArray(host.getGallery?.()) ? [...host.getGallery()] : [];
    let heroIndex = candidates.length ? candidates.length - 1 : -1;
    const thumbOverrides = {};
    const billedEl = h("div", { class: `${ROOT_CLASS}-billed` });
    const hintEl = h("div", { class: `${ROOT_CLASS}-hint` });
    const errorEl = h("div", { class: `${ROOT_CLASS}-error`, role: "status" });
    const filmEl = h("div", { class: `${ROOT_CLASS}-film`, "aria-label": "Generated banners" });
    const bucketLabel = h("div", { class: `${ROOT_CLASS}-style-name` }, "Style");
    const textarea = (
      /** @type {HTMLTextAreaElement} */
      h("textarea", {
        class: `${ROOT_CLASS}-prompt`,
        placeholder: "Describe the banner you want\u2026",
        rows: 4,
        spellcheck: "true"
      })
    );
    const seed = ctx.title ? `Banner for ${ctx.title}` : "";
    textarea.value = seed;
    textarea.addEventListener("input", () => {
      promptDirty = true;
    });
    const styleTabs = h("div", { class: `${ROOT_CLASS}-style-tabs` });
    const stylesRow = h("div", { class: `${ROOT_CLASS}-styles` });
    const styleActions = h("div", { class: `${ROOT_CLASS}-style-actions` });
    const customForm = h("div", { class: `${ROOT_CLASS}-custom-form` });
    const customName = (
      /** @type {HTMLInputElement} */
      h("input", {
        type: "text",
        class: `${ROOT_CLASS}-custom-name is-slot-off`,
        placeholder: "Style name",
        maxlength: "40"
      })
    );
    const customSnippet = (
      /** @type {HTMLTextAreaElement} */
      h("textarea", {
        class: `${ROOT_CLASS}-suffix`,
        placeholder: "Nothing extra will be appended.",
        rows: 3,
        spellcheck: "true",
        readOnly: true
      })
    );
    const SUFFIX_MIN_H = 64;
    const SUFFIX_GAP = 10;
    let sizingSuffix = false;
    function resizeStyleSnippet() {
      if (sizingSuffix) return;
      sizingSuffix = true;
      try {
        const scrollTop = customSnippet.scrollTop;
        customSnippet.style.height = "auto";
        customSnippet.style.overflowY = "hidden";
        const natural = customSnippet.scrollHeight;
        customSnippet.style.height = `${SUFFIX_MIN_H}px`;
        const room = stylesRow.clientHeight;
        const cs = getComputedStyle(stylesRow);
        let wants = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
        const gap = parseFloat(cs.rowGap) || 0;
        for (const child of stylesRow.children) wants += child.offsetHeight;
        wants += Math.max(0, stylesRow.children.length - 1) * gap;
        const free = Math.max(0, room - wants - SUFFIX_GAP);
        const height = Math.max(SUFFIX_MIN_H, Math.min(natural, SUFFIX_MIN_H + free));
        customSnippet.style.height = `${height}px`;
        const clipped = natural > height + 1;
        customSnippet.style.overflowY = clipped ? "auto" : "hidden";
        if (clipped) customSnippet.scrollTop = scrollTop;
        refreshFades();
      } finally {
        sizingSuffix = false;
      }
    }
    __name(resizeStyleSnippet, "resizeStyleSnippet");
    customSnippet.addEventListener("input", resizeStyleSnippet);
    function updateFade(el2) {
      const max = el2.scrollHeight - el2.clientHeight;
      const scrollable = max > 1;
      el2.classList.toggle("is-fade-t", scrollable && el2.scrollTop > 1);
      el2.classList.toggle("is-fade-b", scrollable && el2.scrollTop < max - 1);
    }
    __name(updateFade, "updateFade");
    function refreshFades() {
      updateFade(stylesRow);
      updateFade(customSnippet);
    }
    __name(refreshFades, "refreshFades");
    for (const el2 of [stylesRow, customSnippet]) {
      el2.classList.add(`${ROOT_CLASS}-fadescroll`);
      el2.addEventListener("scroll", () => updateFade(el2), { passive: true });
    }
    const customSaveBtn = h("button", { type: "button", class: `${ROOT_CLASS}-generate is-slot-off`, onClick: /* @__PURE__ */ __name(() => saveStyleEditor(), "onClick") }, "Save");
    const customResetBtn = h("button", { type: "button", class: `${ROOT_CLASS}-ghost is-slot-off`, onClick: /* @__PURE__ */ __name(() => resetStyleSnippet(), "onClick") }, "Reset");
    const editBtn = h("button", { type: "button", class: `${ROOT_CLASS}-ghost`, onClick: /* @__PURE__ */ __name(() => setStyleEditor(selectedStyleId || "none"), "onClick") }, "Edit");
    const doneBtn = h("button", { type: "button", class: `${ROOT_CLASS}-ghost is-slot-off`, onClick: /* @__PURE__ */ __name(() => setStyleEditor(null), "onClick") }, "Done");
    const regenThumbBtn = (
      /** @type {HTMLButtonElement} */
      h("button", {
        type: "button",
        class: `${ROOT_CLASS}-generate is-slot-off`,
        onClick: /* @__PURE__ */ __name(() => {
          if (thumbOfferStyleId) void regenThumb(thumbOfferStyleId);
        }, "onClick")
      }, "Regenerate")
    );
    const skipThumbBtn = (
      /** @type {HTMLButtonElement} */
      h("button", {
        type: "button",
        class: `${ROOT_CLASS}-ghost is-slot-off`,
        onClick: /* @__PURE__ */ __name(() => dismissThumbOffer(), "onClick")
      }, "Skip")
    );
    customName.disabled = true;
    const customActions = h(
      "div",
      { class: `${ROOT_CLASS}-custom-actions` },
      editBtn,
      doneBtn,
      customResetBtn,
      customSaveBtn,
      regenThumbBtn,
      skipThumbBtn
    );
    customForm.append(
      bucketLabel,
      customName,
      customSnippet
    );
    const heroImg = (
      /** @type {HTMLImageElement} */
      h("img", {
        alt: "Selected banner",
        draggable: "false"
      })
    );
    const heroEmpty = h("div", { class: `${ROOT_CLASS}-hero-empty` }, "Generate a banner to preview it here");
    const heroBusy = h("div", { class: `${ROOT_CLASS}-hero-busy`, "aria-hidden": "true" });
    const heroPrev = (
      /** @type {HTMLButtonElement} */
      h("button", {
        type: "button",
        class: `${ROOT_CLASS}-hero-arrow ${ROOT_CLASS}-hero-prev`,
        "aria-label": "Previous banner",
        onClick: /* @__PURE__ */ __name(() => cycleHero(-1), "onClick")
      }, "\u2039")
    );
    const heroNext = (
      /** @type {HTMLButtonElement} */
      h("button", {
        type: "button",
        class: `${ROOT_CLASS}-hero-arrow ${ROOT_CLASS}-hero-next`,
        "aria-label": "Next banner",
        onClick: /* @__PURE__ */ __name(() => cycleHero(1), "onClick")
      }, "\u203A")
    );
    const heroDelete = (
      /** @type {HTMLButtonElement} */
      h("button", {
        type: "button",
        class: `${ROOT_CLASS}-hero-delete`,
        "aria-label": "Delete selected generation",
        title: "Delete selected generation",
        onClick: /* @__PURE__ */ __name((e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!heroItem()) return;
          deleteArmed = true;
          renderHero();
        }, "onClick")
      }, trashIcon())
    );
    const heroDeleteConfirm = h(
      "div",
      {
        class: `${ROOT_CLASS}-hero-delete-confirm`,
        role: "group",
        "aria-label": "Confirm deletion"
      },
      h("button", {
        type: "button",
        class: `${ROOT_CLASS}-hero-delete-yes`,
        "aria-label": "Confirm delete generation",
        title: "Delete generation",
        onClick: /* @__PURE__ */ __name((e) => {
          e.preventDefault();
          e.stopPropagation();
          void deleteSelectedGeneration();
        }, "onClick")
      }, checkIcon()),
      h("button", {
        type: "button",
        class: `${ROOT_CLASS}-hero-delete-no`,
        "aria-label": "Cancel delete generation",
        title: "Cancel",
        onClick: /* @__PURE__ */ __name((e) => {
          e.preventDefault();
          e.stopPropagation();
          deleteArmed = false;
          renderHero();
        }, "onClick")
      }, xIcon())
    );
    const hero = h(
      "div",
      { class: `${ROOT_CLASS}-hero` },
      heroImg,
      heroEmpty,
      heroBusy,
      heroPrev,
      heroNext,
      heroDelete,
      heroDeleteConfirm
    );
    const heroWrap = h("div", { class: `${ROOT_CLASS}-hero-wrap` }, hero);
    const heroStack = h("div", { class: `${ROOT_CLASS}-hero-stack` }, heroWrap, filmEl);
    const floatingMenus = [];
    function closeFloating(except) {
      for (const menu of floatingMenus) {
        if (menu === except) continue;
        menu.classList.remove("is-open");
        if (menu._btn) menu._btn.setAttribute("aria-expanded", "false");
      }
    }
    __name(closeFloating, "closeFloating");
    function positionFloating(btn, menu, minWidth, opts) {
      const rect = btn.getBoundingClientRect();
      const width = Math.max(rect.width, minWidth || 0);
      const spaceAbove = rect.top - 12;
      const spaceBelow = window.innerHeight - rect.bottom - 12;
      const preferUp = opts?.preferUp !== false && (spaceAbove >= 120 || spaceAbove >= spaceBelow);
      const maxH = Math.min(360, preferUp ? Math.max(140, spaceAbove) : Math.max(120, spaceBelow));
      menu.style.width = `${width}px`;
      menu.style.maxHeight = `${maxH}px`;
      let left = rect.left;
      if (left + width > window.innerWidth - 8) left = Math.max(8, window.innerWidth - width - 8);
      menu.style.left = `${left}px`;
      if (preferUp) {
        menu.style.top = "auto";
        menu.style.bottom = `${window.innerHeight - rect.top + 4}px`;
      } else {
        menu.style.top = `${rect.bottom + 4}px`;
        menu.style.bottom = "auto";
      }
    }
    __name(positionFloating, "positionFloating");
    function makePicker({ ariaLabel, getValue, getLabel, options, onChange, minWidth }) {
      const btn = (
        /** @type {HTMLButtonElement} */
        h("button", {
          type: "button",
          class: `${ROOT_CLASS}-pick-btn`,
          "aria-haspopup": "listbox",
          "aria-expanded": "false",
          "aria-label": ariaLabel
        })
      );
      const menu = (
        /** @type {FloatingMenuEl} */
        h("div", { class: `${ROOT_CLASS}-menu is-floating`, role: "listbox" })
      );
      menu._btn = btn;
      floatingMenus.push(menu);
      const wrap = h("div", { class: `${ROOT_CLASS}-pick` }, btn);
      function render() {
        btn.replaceChildren(
          h("span", { class: `${ROOT_CLASS}-pick-label` }, getLabel()),
          h("span", { class: `${ROOT_CLASS}-caret`, "aria-hidden": "true" }, "\u25BE")
        );
        const val = getValue();
        menu.replaceChildren();
        for (const opt of options()) {
          menu.appendChild(h("div", {
            class: `${ROOT_CLASS}-option${opt.id === val ? " is-active" : ""}`,
            role: "option",
            "aria-selected": String(opt.id === val),
            onClick: /* @__PURE__ */ __name(() => {
              onChange(opt.id);
              closeFloating();
              render();
            }, "onClick")
          }, opt.name));
        }
      }
      __name(render, "render");
      btn.addEventListener("click", () => {
        const open = !menu.classList.contains("is-open");
        closeFloating(open ? menu : null);
        menu.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", String(open));
        if (open) {
          render();
          positionFloating(btn, menu, minWidth || 0);
        }
      });
      render();
      return { wrap, menu, render };
    }
    __name(makePicker, "makePicker");
    const resolutionPick = makePicker({
      ariaLabel: "Resolution",
      getValue: /* @__PURE__ */ __name(() => resolution, "getValue"),
      getLabel: /* @__PURE__ */ __name(() => resolution, "getLabel"),
      options: /* @__PURE__ */ __name(() => RESOLUTION_OPTIONS.map((id) => ({ id, name: id })), "options"),
      onChange: /* @__PURE__ */ __name((id) => {
        resolution = id;
        host.updateSettings({ lastResolution: resolution });
      }, "onChange")
    });
    const modelBtn = (
      /** @type {HTMLButtonElement} */
      h("button", {
        type: "button",
        class: `${ROOT_CLASS}-model-btn`,
        "aria-haspopup": "listbox",
        "aria-expanded": "false"
      })
    );
    const modelMenu = (
      /** @type {FloatingMenuEl} */
      h("div", { class: `${ROOT_CLASS}-menu is-floating ${ROOT_CLASS}-menu-model`, role: "listbox" })
    );
    modelMenu._btn = modelBtn;
    floatingMenus.push(modelMenu);
    const modelWrap = h("div", { class: `${ROOT_CLASS}-model` }, modelBtn);
    let refFile = null;
    let refUrl = "";
    let appliedBanner = null;
    let appliedCandidate = null;
    let heroSource = "generated";
    let heroPanX = 50;
    let heroPanY = 50;
    let lastHeroUrl = "";
    const refFileInput = (
      /** @type {HTMLInputElement} */
      h("input", {
        type: "file",
        accept: "image/png,image/jpeg,image/jpg,image/webp,image/gif",
        hidden: true,
        "aria-hidden": "true"
      })
    );
    const countGroup = h("div", { class: `${ROOT_CLASS}-count-btns`, role: "group", "aria-label": "Generate count" });
    const countBtns = GENERATE_COUNTS.map((id) => {
      const btn = (
        /** @type {HTMLButtonElement} */
        h("button", {
          type: "button",
          class: `${ROOT_CLASS}-count-btn`,
          "aria-label": `Generate ${id} image${id === "1" ? "" : "s"}`,
          onClick: /* @__PURE__ */ __name(() => {
            void onGenerate(id);
          }, "onClick")
        }, pictureIcon(), id)
      );
      return btn;
    });
    countGroup.append(...countBtns);
    const applyBtn = (
      /** @type {HTMLButtonElement} */
      h("button", {
        type: "button",
        class: `${ROOT_CLASS}-generate ${ROOT_CLASS}-apply-btn`,
        hidden: true,
        onClick: /* @__PURE__ */ __name(() => {
          void onApply(hasRecord ? "page" : "collection");
        }, "onClick")
      }, hasRecord ? "Apply to Page" : "Apply to Collection Default")
    );
    const promptActions = h(
      "div",
      { class: `${ROOT_CLASS}-prompt-actions` },
      h("span", { class: `${ROOT_CLASS}-gen-label` }, "Generate"),
      countGroup,
      billedEl,
      applyBtn
    );
    const previewCol = h(
      "div",
      { class: `${ROOT_CLASS}-col ${ROOT_CLASS}-col-preview` },
      heroStack,
      h(
        "div",
        { class: `${ROOT_CLASS}-prompt-block` },
        h(
          "div",
          { class: `${ROOT_CLASS}-field` },
          h("div", { class: `${ROOT_CLASS}-field-label` }, "Prompt"),
          textarea,
          hintEl
        ),
        h(
          "div",
          { class: `${ROOT_CLASS}-meta` },
          h(
            "div",
            { class: `${ROOT_CLASS}-field` },
            h("div", { class: `${ROOT_CLASS}-field-label` }, "Model"),
            modelWrap
          ),
          h(
            "div",
            { class: `${ROOT_CLASS}-field` },
            h("div", { class: `${ROOT_CLASS}-field-label` }, "Resolution"),
            resolutionPick.wrap
          )
        ),
        errorEl
      ),
      promptActions
    );
    const stylesCol = h(
      "div",
      { class: `${ROOT_CLASS}-col ${ROOT_CLASS}-col-styles` },
      styleTabs,
      stylesRow,
      h(
        "div",
        { class: `${ROOT_CLASS}-style-tray` },
        styleActions,
        customForm,
        customActions
      )
    );
    const bodyEl = h("div", { class: `${ROOT_CLASS}-body` }, previewCol, stylesCol);
    const dialog = h(
      "div",
      {
        class: `${ROOT_CLASS}-dialog`,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": `${ROOT_CLASS}-title`
      },
      h(
        "div",
        { class: `${ROOT_CLASS}-head` },
        h("h2", { class: `${ROOT_CLASS}-title`, id: `${ROOT_CLASS}-title` }, "Generate Banner"),
        h("button", { type: "button", class: `${ROOT_CLASS}-close`, "aria-label": "Close", onClick: /* @__PURE__ */ __name(() => closeBannerDialog(), "onClick") }, "\xD7")
      ),
      bodyEl
    );
    const slotEl = h("div", { class: `${ROOT_CLASS}-slot` }, dialog);
    overlayEl = /** @type {HTMLElement & { _onClose?: (() => void) | null }} */
    h("div", { class: OVERLAY_CLASS }, slotEl, modelMenu, resolutionPick.menu, refFileInput);
    overlayEl._onClose = () => {
      clearReference(true);
      clearAppliedBanner();
      host.commitSettings?.();
    };
    overlayEl.addEventListener("mousedown", (e) => {
      if (e.target === overlayEl) closeBannerDialog();
    });
    document.body.appendChild(overlayEl);
    detachKey = /* @__PURE__ */ __name((e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        if (isTypingTarget(e.target) || floatingMenus.some((m) => m.classList.contains("is-open"))) return;
        if (candidates.length < 2) return;
        e.preventDefault();
        cycleHero(e.key === "ArrowLeft" ? -1 : 1);
        return;
      }
      if (e.key !== "Escape") return;
      e.preventDefault();
      e.stopPropagation();
      if (floatingMenus.some((m) => m.classList.contains("is-open"))) {
        closeFloating();
        return;
      }
      if (thumbOfferStyleId) {
        dismissThumbOffer();
        return;
      }
      if (editingStyleId) {
        setStyleEditor(null);
        return;
      }
      closeBannerDialog();
    }, "detachKey");
    window.addEventListener("keydown", detachKey, true);
    modelBtn.addEventListener("click", () => setMenuOpen(!modelMenu.classList.contains("is-open")));
    detachDoc = /* @__PURE__ */ __name((e) => {
      if (!overlayEl || !overlayEl.isConnected) return;
      const t = (
        /** @type {Node} */
        e.target
      );
      if (floatingMenus.some((m) => m.contains(t) || m._btn && m._btn.contains(t))) return;
      closeFloating();
    }, "detachDoc");
    document.addEventListener("mousedown", detachDoc, true);
    const styleFadeObserver = typeof ResizeObserver === "function" ? new ResizeObserver(() => resizeStyleSnippet()) : null;
    styleFadeObserver?.observe(stylesRow);
    const onWinResize = /* @__PURE__ */ __name(() => {
      resizeStyleSnippet();
      refreshFades();
      if (modelMenu.classList.contains("is-open")) positionMenu();
      for (const menu of floatingMenus) {
        if (menu === modelMenu || !menu.classList.contains("is-open") || !menu._btn) continue;
        positionFloating(menu._btn, menu);
      }
    }, "onWinResize");
    window.addEventListener("resize", onWinResize);
    detachResize = /* @__PURE__ */ __name(() => {
      window.removeEventListener("resize", onWinResize);
      styleFadeObserver?.disconnect();
    }, "detachResize");
    function persistGallery() {
      host.setGallery?.(candidates);
    }
    __name(persistGallery, "persistGallery");
    function applyAspectVars() {
      const [a, b] = String(aspectId || "21:9").split(":").map(Number);
      const w = a || 21;
      const ht = b || 9;
      dialog.style.setProperty("--chosen", `${w} / ${ht}`);
      dialog.style.setProperty("--chosen-frac", String(w / ht));
    }
    __name(applyAspectVars, "applyAspectVars");
    function nextCount() {
      return Math.max(1, Math.min(4, Number(generateCount) || 1));
    }
    __name(nextCount, "nextCount");
    function applyLabel() {
      return hasRecord ? "Apply to Page" : "Apply to Collection Default";
    }
    __name(applyLabel, "applyLabel");
    function renderCountBtns() {
      countBtns.forEach((btn) => {
        btn.disabled = busy;
      });
    }
    __name(renderCountBtns, "renderCountBtns");
    function isImageFile(file) {
      if (!file || typeof file.type !== "string") return false;
      return /^(image\/(png|jpeg|jpg|webp|gif))$/i.test(file.type);
    }
    __name(isImageFile, "isImageFile");
    function pickImageFile(transfer) {
      if (!transfer) return null;
      const files = transfer.files ? Array.from(transfer.files) : [];
      return files.find((f) => isImageFile(f)) || null;
    }
    __name(pickImageFile, "pickImageFile");
    function hasImageFile(transfer) {
      if (!transfer) return false;
      if (transfer.files && Array.from(transfer.files).some((f) => isImageFile(f))) return true;
      const types = transfer.types ? Array.from(transfer.types) : [];
      return types.includes("Files");
    }
    __name(hasImageFile, "hasImageFile");
    function setReference(file) {
      if (!isImageFile(file)) {
        host.toast("Use a PNG, JPEG, WebP, or GIF");
        return;
      }
      if (file.size > 12 * 1024 * 1024) {
        host.toast("Reference image is too large", "Use a file under 12 MB.");
        return;
      }
      clearReference(true);
      refFile = file;
      refUrl = URL.createObjectURL(file);
      renderStyles();
    }
    __name(setReference, "setReference");
    function clearReference(skipRender) {
      if (refUrl) {
        try {
          URL.revokeObjectURL(refUrl);
        } catch {
        }
      }
      refUrl = "";
      refFile = null;
      refFileInput.value = "";
      if (!skipRender) renderStyles();
    }
    __name(clearReference, "clearReference");
    function clearAppliedBanner() {
      if (appliedBanner?.revoke && appliedBanner.url) {
        try {
          URL.revokeObjectURL(appliedBanner.url);
        } catch {
        }
      }
      appliedBanner = null;
      appliedCandidate = null;
      if (heroSource === "applied") heroSource = "generated";
    }
    __name(clearAppliedBanner, "clearAppliedBanner");
    function bindDropTarget(el2) {
      el2.addEventListener("dragover", (e) => {
        if (!hasImageFile(e.dataTransfer)) return;
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = "copy";
        el2.classList.add("is-drop");
      });
      el2.addEventListener("dragleave", (e) => {
        const next = (
          /** @type {Node | null} */
          e.relatedTarget
        );
        if (next && el2.contains(next)) return;
        el2.classList.remove("is-drop");
      });
      el2.addEventListener("drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
        el2.classList.remove("is-drop");
        const file = pickImageFile(e.dataTransfer);
        if (file) setReference(file);
      });
    }
    __name(bindDropTarget, "bindDropTarget");
    function heroItem() {
      if (heroSource === "applied") return appliedBanner;
      return heroIndex >= 0 ? candidates[heroIndex] : null;
    }
    __name(heroItem, "heroItem");
    function heroIsApplied() {
      const item = heroItem();
      return !!item && (heroSource === "applied" || item === appliedCandidate);
    }
    __name(heroIsApplied, "heroIsApplied");
    function isTypingTarget(target) {
      const el2 = (
        /** @type {HTMLElement | null} */
        target instanceof HTMLElement ? target : null
      );
      if (!el2) return false;
      const tag = el2.tagName;
      if (tag === "TEXTAREA" || tag === "INPUT" || tag === "SELECT") return true;
      return !!el2.isContentEditable;
    }
    __name(isTypingTarget, "isTypingTarget");
    function applyHeroPan() {
      heroImg.style.objectPosition = `${heroPanX}% ${heroPanY}%`;
    }
    __name(applyHeroPan, "applyHeroPan");
    function bindHeroPan(el2) {
      let drag = null;
      const onControl = /* @__PURE__ */ __name((t) => {
        const node = (
          /** @type {Element | null} */
          t instanceof Element ? t : null
        );
        return !!node?.closest("button");
      }, "onControl");
      el2.addEventListener("pointerdown", (e) => {
        if (e.button !== 0 || !el2.classList.contains("is-filled") || onControl(e.target)) return;
        e.preventDefault();
        el2.setPointerCapture(e.pointerId);
        drag = { id: e.pointerId, x: e.clientX, y: e.clientY, ox: heroPanX, oy: heroPanY };
        el2.classList.add("is-panning");
      });
      el2.addEventListener("pointermove", (e) => {
        if (!drag || e.pointerId !== drag.id) return;
        const rect = el2.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        heroPanX = Math.max(0, Math.min(100, drag.ox - (e.clientX - drag.x) / rect.width * 100));
        heroPanY = Math.max(0, Math.min(100, drag.oy - (e.clientY - drag.y) / rect.height * 100));
        applyHeroPan();
      });
      const endPan = /* @__PURE__ */ __name((e) => {
        if (!drag || e.pointerId !== drag.id) return;
        try {
          el2.releasePointerCapture(e.pointerId);
        } catch {
        }
        drag = null;
        el2.classList.remove("is-panning");
      }, "endPan");
      el2.addEventListener("pointerup", endPan);
      el2.addEventListener("pointercancel", endPan);
    }
    __name(bindHeroPan, "bindHeroPan");
    function cycleHero(delta) {
      if (candidates.length < 2) return;
      const n = candidates.length;
      deleteArmed = false;
      heroSource = "generated";
      heroIndex = ((heroIndex < 0 ? 0 : heroIndex) + delta + n) % n;
      renderHero();
      renderFilm();
    }
    __name(cycleHero, "cycleHero");
    function builtinIds() {
      return new Set(BUILTIN_STYLES.map((s) => s.id));
    }
    __name(builtinIds, "builtinIds");
    function styleSnippet(style) {
      return resolveStyleSnippet(style, host.getSettings().styleOverridesJson);
    }
    __name(styleSnippet, "styleSnippet");
    function setActionSlot(btn, on) {
      btn.classList.toggle("is-slot-off", !on);
      btn.tabIndex = on ? 0 : -1;
      btn.setAttribute("aria-hidden", String(!on));
    }
    __name(setActionSlot, "setActionSlot");
    function setStyleEditor(id) {
      thumbOfferStyleId = null;
      editingStyleId = id;
      customSnippet.classList.toggle("is-editing", !!id);
      if (!id) {
        renderStyleBucket();
        renderStyles();
        return;
      }
      if (id === "new") {
        customName.value = "";
        customName.disabled = false;
        customSnippet.value = "";
        customSnippet.scrollTop = 0;
        renderStyleBucket();
        renderStyles();
        customName.focus({ preventScroll: true });
        return;
      }
      const style = currentStyles().find((s) => s.id === id);
      if (!style) {
        editingStyleId = null;
        renderStyleBucket();
        renderStyles();
        return;
      }
      const keepScroll = customSnippet.scrollTop;
      customName.value = style.name;
      customName.disabled = builtinIds().has(style.id);
      customSnippet.value = styleSnippet(style);
      renderStyleBucket();
      renderStyles();
      customSnippet.focus({ preventScroll: true });
      try {
        customSnippet.setSelectionRange(0, 0);
      } catch {
      }
      customSnippet.scrollTop = keepScroll;
    }
    __name(setStyleEditor, "setStyleEditor");
    function resetStyleSnippet() {
      if (!editingStyleId || editingStyleId === "new") return;
      const overrides = parseStyleOverrides(host.getSettings().styleOverridesJson);
      delete overrides[editingStyleId];
      host.updateSettings({ styleOverridesJson: serializeStyleOverrides(overrides) });
      const style = currentStyles().find((s) => s.id === editingStyleId);
      customSnippet.value = style?.snippet || "";
      renderStyleBucket();
    }
    __name(resetStyleSnippet, "resetStyleSnippet");
    function currentStyles() {
      const custom = parseCustomStyles(host.getSettings().customStylesJson).map((s) => ({ ...s, group: "image" }));
      return [...BUILTIN_STYLES, ...custom];
    }
    __name(currentStyles, "currentStyles");
    function selectedStyle() {
      const style = currentStyles().find((s) => s.id === selectedStyleId) || BUILTIN_STYLES[0];
      return { ...style, snippet: styleSnippet(style) };
    }
    __name(selectedStyle, "selectedStyle");
    function styleThumbSrc(style) {
      if (thumbOverrides[style.id]) return thumbOverrides[style.id];
      try {
        const fromHost = host.getStyleThumb?.(style.id);
        if (fromHost) return fromHost;
      } catch {
      }
      return style.thumb || "";
    }
    __name(styleThumbSrc, "styleThumbSrc");
    function renderStyleBucket() {
      const editing = !!editingStyleId;
      const offeringThumb = !!thumbOfferStyleId && !editing;
      const isNew = editingStyleId === "new";
      const editingStyle = !editing || isNew ? null : currentStyles().find((s) => s.id === editingStyleId);
      const selected = selectedStyle();
      const isBuiltin = !!(editingStyle && builtinIds().has(editingStyle.id));
      const isCustom = editing && !isNew && !isBuiltin;
      customName.classList.toggle("is-slot-off", !(isNew || isCustom));
      customName.disabled = !(isNew || isCustom);
      customSnippet.readOnly = !editing;
      customSnippet.classList.toggle("is-readonly", !editing);
      setActionSlot(editBtn, !editing && !offeringThumb);
      setActionSlot(doneBtn, editing);
      setActionSlot(customSaveBtn, editing);
      setActionSlot(customResetBtn, editing && isBuiltin);
      setActionSlot(regenThumbBtn, offeringThumb);
      setActionSlot(skipThumbBtn, offeringThumb);
      regenThumbBtn.disabled = thumbBusy;
      skipThumbBtn.disabled = thumbBusy;
      if (offeringThumb) {
        const offered = currentStyles().find((s) => s.id === thumbOfferStyleId);
        bucketLabel.textContent = offered?.name || selected.name || "Style";
        customSnippet.value = thumbBusy ? "Generating preview thumbnail\u2026" : "Regenerate the preview thumbnail for this style?";
        customSnippet.scrollTop = 0;
        resizeStyleSnippet();
        return;
      }
      if (!editing) {
        bucketLabel.textContent = selected.name || "Style";
        customSnippet.value = selected.snippet || "";
        customSnippet.scrollTop = 0;
        resizeStyleSnippet();
        return;
      }
      if (isNew) {
        bucketLabel.textContent = "New style";
        customSaveBtn.textContent = "Save";
        resizeStyleSnippet();
        return;
      }
      bucketLabel.textContent = editingStyle?.name || selected.name || "Style";
      customSaveBtn.textContent = "Save";
      resizeStyleSnippet();
    }
    __name(renderStyleBucket, "renderStyleBucket");
    function renderStyleTabs() {
      styleTabs.replaceChildren();
      for (const group of STYLE_GROUPS) {
        styleTabs.appendChild(h("button", {
          type: "button",
          class: `${ROOT_CLASS}-style-tab${styleGroup === group.id ? " is-on" : ""}`,
          onClick: /* @__PURE__ */ __name(() => {
            styleGroup = group.id;
            renderStyleTabs();
            renderStyles();
          }, "onClick")
        }, group.name));
      }
    }
    __name(renderStyleTabs, "renderStyleTabs");
    function renderStyles() {
      const styles = currentStyles();
      const builtins = builtinIds();
      stylesRow.replaceChildren();
      const builtinGrid = h("div", { class: `${ROOT_CLASS}-style-grid ${ROOT_CLASS}-style-builtins` });
      const customGrid = h("div", { class: `${ROOT_CLASS}-style-grid ${ROOT_CLASS}-style-custom-grid` });
      const visible = styles.filter((s) => (s.group || "image") === styleGroup || s.id === "none" && styleGroup === "image");
      for (const style of visible) {
        const isCustom = !builtins.has(style.id);
        const selectStyle = /* @__PURE__ */ __name(() => {
          selectedStyleId = style.id;
          if (editingStyleId) setStyleEditor(null);
          else {
            thumbOfferStyleId = null;
            renderStyles();
            renderStyleBucket();
          }
        }, "selectStyle");
        const editStyle = /* @__PURE__ */ __name((e) => {
          e.preventDefault();
          e.stopPropagation();
          selectedStyleId = style.id;
          setStyleEditor(style.id);
        }, "editStyle");
        const src = styleThumbSrc(style);
        const swatch = src ? h("img", { class: `${ROOT_CLASS}-chip-thumb`, src, alt: "", draggable: "false" }) : h("span", { class: `${ROOT_CLASS}-chip-swatch` });
        const media = h("div", { class: `${ROOT_CLASS}-chip-media` }, swatch);
        const chip = h(
          "div",
          {
            class: `${ROOT_CLASS}-chip${style.id === selectedStyleId ? " is-on" : ""}${isCustom ? " is-custom" : ""}${editingStyleId === style.id ? " is-editing" : ""}`,
            title: style.name,
            role: "button",
            tabindex: "0",
            onClick: selectStyle,
            onKeyDown: /* @__PURE__ */ __name((e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                selectStyle();
              }
            }, "onKeyDown")
          },
          media,
          h(
            "div",
            { class: `${ROOT_CLASS}-chip-bar` },
            h("span", { class: `${ROOT_CLASS}-chip-label` }, style.name),
            h("button", {
              type: "button",
              class: `${ROOT_CLASS}-chip-edit`,
              "aria-label": `Edit ${style.name}`,
              onClick: editStyle
            }, pencilIcon())
          )
        );
        if (isCustom) {
          media.appendChild(h("button", {
            type: "button",
            class: `${ROOT_CLASS}-chip-x`,
            "aria-label": `Remove ${style.name}`,
            onClick: /* @__PURE__ */ __name((e) => {
              e.preventDefault();
              e.stopPropagation();
              const next = parseCustomStyles(host.getSettings().customStylesJson).filter((s) => s.id !== style.id);
              host.updateSettings({ customStylesJson: serializeCustomStyles(next) });
              if (selectedStyleId === style.id) selectedStyleId = "none";
              if (editingStyleId === style.id) setStyleEditor(null);
              else {
                renderStyles();
                renderStyleBucket();
              }
            }, "onClick")
          }, "\xD7"));
        }
        (isCustom ? customGrid : builtinGrid).appendChild(chip);
      }
      stylesRow.appendChild(builtinGrid);
      if (customGrid.childElementCount) {
        stylesRow.appendChild(h("div", {
          class: `${ROOT_CLASS}-style-customs`,
          "aria-label": "Custom presets"
        }, customGrid));
      }
      styleActions.classList.add("is-on");
      const addChip = h(
        "div",
        {
          class: `${ROOT_CLASS}-style-action${editingStyleId === "new" ? " is-on" : ""}`,
          role: "button",
          tabindex: "0",
          title: "Custom Preset",
          onClick: /* @__PURE__ */ __name(() => {
            if (editingStyleId === "new") setStyleEditor(null);
            else setStyleEditor("new");
          }, "onClick"),
          onKeyDown: /* @__PURE__ */ __name((e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (editingStyleId === "new") setStyleEditor(null);
              else setStyleEditor("new");
            }
          }, "onKeyDown")
        },
        brushIcon(),
        h("span", { class: `${ROOT_CLASS}-style-action-label` }, "Custom Preset")
      );
      const hasRef = !!(refFile && refUrl);
      const uploadChip = h(
        "div",
        {
          class: `${ROOT_CLASS}-style-action${hasRef ? " is-filled" : ""}`,
          role: "button",
          tabindex: "0",
          title: hasRef ? "Reference image" : "Upload Reference",
          "aria-label": hasRef ? "Reference image" : "Upload Reference",
          onClick: /* @__PURE__ */ __name(() => {
            if (!hasRef) refFileInput.click();
          }, "onClick"),
          onKeyDown: /* @__PURE__ */ __name((e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (!hasRef) refFileInput.click();
            }
          }, "onKeyDown")
        },
        hasRef ? h(
          "div",
          { class: `${ROOT_CLASS}-chip-media` },
          h("img", { class: `${ROOT_CLASS}-chip-thumb`, src: refUrl, alt: "", draggable: "false" }),
          h("button", {
            type: "button",
            class: `${ROOT_CLASS}-chip-x`,
            "aria-label": "Remove reference",
            onClick: /* @__PURE__ */ __name((e) => {
              e.preventDefault();
              e.stopPropagation();
              clearReference();
            }, "onClick")
          }, "\xD7")
        ) : uploadRefIcon(),
        h("span", { class: `${ROOT_CLASS}-style-action-label` }, "Upload Reference")
      );
      bindDropTarget(uploadChip);
      styleActions.replaceChildren(addChip, uploadChip);
      resizeStyleSnippet();
    }
    __name(renderStyles, "renderStyles");
    function offerThumbRegen(styleId) {
      editingStyleId = null;
      thumbOfferStyleId = styleId;
      renderStyleBucket();
    }
    __name(offerThumbRegen, "offerThumbRegen");
    function dismissThumbOffer() {
      thumbOfferStyleId = null;
      renderStyleBucket();
    }
    __name(dismissThumbOffer, "dismissThumbOffer");
    async function regenThumb(styleId) {
      if (thumbBusy) return;
      const key = String(host.getSettings().apiKey || "").trim();
      if (!key) {
        dismissThumbOffer();
        host.toast("OpenRouter API key required", "Add a key in Plugin: Generate Banner to regenerate thumbs.");
        return;
      }
      const style = currentStyles().find((s) => s.id === styleId);
      const snippet = styleSnippet(style || { id: styleId, snippet: "" }).trim();
      const prompt = thumbPromptFor(style || { group: "image" }, snippet);
      thumbBusy = true;
      thumbOfferStyleId = styleId;
      renderStyleBucket();
      try {
        const results = await generateImages({
          apiKey: key,
          model: selectedModel,
          prompt,
          n: 1,
          aspectRatio: "1:1",
          resolution: "1K"
        });
        const file = results[0]?.file;
        if (!file) throw new Error("No image returned.");
        const url = URL.createObjectURL(file);
        thumbOverrides[styleId] = url;
        try {
          await host.saveStyleThumb?.(styleId, file);
        } catch {
        }
        if (!host.saveStyleThumb) {
          host.toast("Preview thumb updated", "This session only \u2014 host.saveStyleThumb is not available to persist it.");
        } else {
          host.toast("Preview thumb updated");
        }
        thumbOfferStyleId = null;
        renderStyleBucket();
        renderStyles();
      } catch (err) {
        const msg = String(
          /** @type {any} */
          err?.message || err || "Could not regenerate thumb"
        );
        thumbOfferStyleId = null;
        host.toast("Could not regenerate thumb", msg);
      } finally {
        thumbBusy = false;
        renderStyleBucket();
      }
    }
    __name(regenThumb, "regenThumb");
    function saveStyleEditor() {
      const name = customName.value.trim();
      const snippet = customSnippet.value;
      if (editingStyleId === "new") {
        if (!name || !snippet.trim()) {
          host.toast("Name and snippet required", "Give the custom style a name and a prompt suffix.");
          return;
        }
        const next2 = parseCustomStyles(host.getSettings().customStylesJson);
        const id = `c-${Date.now().toString(36)}`;
        next2.push({ id, name, snippet: snippet.trim() });
        host.updateSettings({ customStylesJson: serializeCustomStyles(next2) });
        selectedStyleId = id;
        styleGroup = "image";
        setStyleEditor(null);
        renderStyleTabs();
        offerThumbRegen(id);
        return;
      }
      if (!editingStyleId) return;
      if (builtinIds().has(editingStyleId)) {
        const overrides = parseStyleOverrides(host.getSettings().styleOverridesJson);
        const original = BUILTIN_STYLES.find((s) => s.id === editingStyleId);
        if (snippet === (original?.snippet || "")) delete overrides[editingStyleId];
        else overrides[editingStyleId] = snippet;
        host.updateSettings({ styleOverridesJson: serializeStyleOverrides(overrides) });
        host.toast("Style prompt saved");
        const savedId2 = editingStyleId;
        setStyleEditor(null);
        offerThumbRegen(savedId2);
        return;
      }
      if (!name) {
        host.toast("Name required");
        return;
      }
      const next = parseCustomStyles(host.getSettings().customStylesJson).map((s) => s.id === editingStyleId ? { ...s, name, snippet } : s);
      host.updateSettings({ customStylesJson: serializeCustomStyles(next) });
      host.toast("Style prompt saved");
      const savedId = editingStyleId;
      setStyleEditor(null);
      offerThumbRegen(savedId);
    }
    __name(saveStyleEditor, "saveStyleEditor");
    function currentModel() {
      return sortModels(catalog, host.getSettings().favoriteIds).find((m) => m.id === selectedModel) || catalog[0];
    }
    __name(currentModel, "currentModel");
    function meter(kind, n) {
      const on = Math.max(1, Math.min(3, Number(n) || 2));
      const title = kind === "speed" ? on === 3 ? "Faster" : on === 1 ? "Slower" : "Medium speed" : on === 1 ? "Cheaper" : on === 3 ? "More expensive" : "Mid price";
      return h("span", {
        class: `${ROOT_CLASS}-meter ${ROOT_CLASS}-meter-${kind}`,
        title,
        "aria-label": title
      }, ...[1, 2, 3].map((i) => h("i", {
        class: i <= on ? "is-on" : "",
        "aria-hidden": "true"
      }, kind === "cost" ? "$" : "")));
    }
    __name(meter, "meter");
    function modelPriceText(model) {
      const per = Number(model?.perImage);
      if (Number.isFinite(per) && per < 900) {
        let decimals = 3;
        while (decimals < 6 && Math.abs(Number(per.toFixed(decimals)) - per) > Math.max(Number.EPSILON, Math.abs(per) * 1e-9)) decimals += 1;
        return `$${per.toFixed(decimals)}`;
      }
      return String(model?.label || "").replace(/\best\.?\s*/gi, "").replace(/\s*\/\s*image\b/gi, "").trim();
    }
    __name(modelPriceText, "modelPriceText");
    function modelPriceA11y(model) {
      const price = modelPriceText(model);
      if (!price) return "";
      return `${model?.estimated ? "Estimated " : ""}cost per image: ${price}`;
    }
    __name(modelPriceA11y, "modelPriceA11y");
    function renderModelBtn() {
      const model = currentModel();
      if (!model) return;
      modelBtn.replaceChildren(
        h("span", { class: `${ROOT_CLASS}-model-name` }, model.name || modelDisplayName(model.id)),
        h("span", {
          class: `${ROOT_CLASS}-model-cost`,
          title: modelPriceA11y(model),
          "aria-label": modelPriceA11y(model)
        }, modelPriceText(model)),
        h("span", { class: `${ROOT_CLASS}-caret`, "aria-hidden": "true" }, "\u25BE")
      );
    }
    __name(renderModelBtn, "renderModelBtn");
    function renderModelMenu() {
      const fav = new Set(parseFavoriteIds(host.getSettings().favoriteIds));
      const rows = sortModels(catalog, host.getSettings().favoriteIds);
      modelMenu.replaceChildren();
      for (const model of rows) {
        const option = h("div", {
          class: `${ROOT_CLASS}-option${model.id === selectedModel ? " is-active" : ""}`,
          role: "option",
          "aria-selected": String(model.id === selectedModel)
        });
        const star = h("button", {
          type: "button",
          class: `${ROOT_CLASS}-star${fav.has(model.id) ? " is-on" : ""}`,
          "aria-label": fav.has(model.id) ? `Unfavorite ${model.name}` : `Favorite ${model.name}`,
          onClick: /* @__PURE__ */ __name((e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(model.id);
          }, "onClick")
        }, fav.has(model.id) ? "\u2605" : "\u2606");
        option.append(
          star,
          h("span", { class: `${ROOT_CLASS}-option-name` }, model.name || modelDisplayName(model.id)),
          h(
            "span",
            { class: `${ROOT_CLASS}-option-meta` },
            meter("speed", speedPips(model.id)),
            meter("cost", costPips(model.perImage)),
            h("span", {
              class: `${ROOT_CLASS}-option-cost`,
              title: modelPriceA11y(model),
              "aria-label": modelPriceA11y(model)
            }, modelPriceText(model))
          )
        );
        option.addEventListener("click", () => {
          selectedModel = model.id;
          host.updateSettings({ lastModel: model.id });
          setMenuOpen(false);
          renderModelBtn();
          renderModelMenu();
        });
        modelMenu.appendChild(option);
      }
    }
    __name(renderModelMenu, "renderModelMenu");
    function toggleFavorite(id) {
      const ids = parseFavoriteIds(host.getSettings().favoriteIds);
      const i = ids.indexOf(id);
      if (i >= 0) ids.splice(i, 1);
      else ids.push(id);
      host.updateSettings({ favoriteIds: serializeFavoriteIds(ids) });
      renderModelBtn();
      renderModelMenu();
    }
    __name(toggleFavorite, "toggleFavorite");
    function setMenuOpen(open) {
      closeFloating(open ? modelMenu : null);
      modelMenu.classList.toggle("is-open", open);
      modelBtn.setAttribute("aria-expanded", String(open));
      if (open) positionMenu();
    }
    __name(setMenuOpen, "setMenuOpen");
    function positionMenu() {
      positionFloating(modelBtn, modelMenu, 480, { preferUp: true });
    }
    __name(positionMenu, "positionMenu");
    function updateBilled() {
      const item = heroItem();
      const cost = item && "cost" in item ? item.cost : null;
      billedEl.textContent = cost != null ? `Billed ${formatUsd(cost)}` : "";
    }
    __name(updateBilled, "updateBilled");
    function updateApplyEnabled() {
      const item = heroItem();
      const hasHero = !!(item && item.file);
      applyBtn.hidden = !hasHero;
      applyBtn.disabled = !hasHero || busy;
      if (!busy) applyBtn.textContent = applyLabel();
    }
    __name(updateApplyEnabled, "updateApplyEnabled");
    function renderHero() {
      const item = heroItem();
      const multi = candidates.length > 1;
      const nextSrc = item?.url || "";
      if (!item) deleteArmed = false;
      if (nextSrc !== lastHeroUrl) {
        lastHeroUrl = nextSrc;
        heroPanX = 50;
        heroPanY = 50;
      }
      hero.classList.toggle("is-filled", !!item);
      hero.classList.toggle("is-busy", busy && pending > 0);
      hero.classList.toggle("is-multi", multi);
      heroPrev.hidden = !multi;
      heroNext.hidden = !multi;
      heroDelete.hidden = !item || deleteArmed;
      heroDelete.disabled = false;
      const deleteTitle = heroIsApplied() ? "Remove from picker and history; the page banner stays unchanged" : "Delete selected generation";
      heroDelete.title = deleteTitle;
      heroDelete.setAttribute("aria-label", deleteTitle);
      heroDeleteConfirm.hidden = !item || !deleteArmed;
      if (item) heroImg.src = item.url;
      else heroImg.removeAttribute("src");
      applyHeroPan();
      updateBilled();
      updateApplyEnabled();
    }
    __name(renderHero, "renderHero");
    function filmSlotTarget() {
      return Math.max(4, nextCount(), candidates.length + pending);
    }
    __name(filmSlotTarget, "filmSlotTarget");
    function emptyFilmSlot(label) {
      return h("div", {
        class: `${ROOT_CLASS}-film-thumb is-empty`,
        "aria-label": label
      });
    }
    __name(emptyFilmSlot, "emptyFilmSlot");
    function clearFilmDropState(clearDragging = false) {
      dragInsert = -1;
      for (const el2 of filmEl.querySelectorAll(`.${ROOT_CLASS}-film-thumb`)) {
        el2.classList.remove("is-drop-before", "is-drop-after");
        if (clearDragging) el2.classList.remove("is-dragging");
      }
    }
    __name(clearFilmDropState, "clearFilmDropState");
    function persistCandidateOrder() {
      persistGallery();
      void Promise.resolve(host.reorderGenerations?.(candidates)).catch(() => {
        host.toast("Could not save generation order");
      });
    }
    __name(persistCandidateOrder, "persistCandidateOrder");
    function moveCandidate(from, to) {
      if (from < 0 || from >= candidates.length || to < 0 || to >= candidates.length || from === to) return;
      const selected = heroSource === "generated" ? candidates[heroIndex] : null;
      const [moved] = candidates.splice(from, 1);
      candidates.splice(to, 0, moved);
      if (selected) heroIndex = candidates.indexOf(selected);
      persistCandidateOrder();
      renderHero();
      renderFilm();
    }
    __name(moveCandidate, "moveCandidate");
    function dropCandidate(from, insertion) {
      if (from < 0 || from >= candidates.length) return;
      let to = Math.max(0, Math.min(candidates.length, insertion));
      if (to > from) to -= 1;
      moveCandidate(from, to);
    }
    __name(dropCandidate, "dropCandidate");
    async function deleteSelectedGeneration() {
      if (heroSource === "applied") {
        deleteArmed = false;
        clearAppliedBanner();
        heroSource = "generated";
        heroIndex = candidates.length ? candidates.length - 1 : -1;
        renderHero();
        renderFilm();
        return;
      }
      if (heroIndex < 0 || heroIndex >= candidates.length) return;
      const index = heroIndex;
      const [removed] = candidates.splice(index, 1);
      const removedAppliedLibraryItem = removed === appliedCandidate;
      deleteArmed = false;
      heroSource = "generated";
      heroIndex = candidates.length ? Math.min(index, candidates.length - 1) : -1;
      if (removedAppliedLibraryItem) clearAppliedBanner();
      persistGallery();
      renderHero();
      renderFilm();
      try {
        await host.deleteGeneration?.(removed);
      } catch {
        host.toast("Could not remove saved generation", "The image was removed from this dialog, but its saved library entry may remain.");
      }
    }
    __name(deleteSelectedGeneration, "deleteSelectedGeneration");
    async function findAppliedCandidate(preview) {
      const guid = String(preview?.guid || "").trim();
      if (guid) {
        const byGuid = candidates.find((item) => String(item?.guid || "").trim() === guid);
        if (byGuid) return byGuid;
      }
      const appliedFile = preview?.file;
      if (!appliedFile) return null;
      const possible = candidates.filter((item) => item?.file && (item.file === appliedFile || item.file.size === appliedFile.size));
      const exact = possible.find((item) => item.file === appliedFile);
      if (exact) return exact;
      if (!possible.length) return null;
      const appliedHash = await fileSha256(appliedFile);
      if (!appliedHash) return null;
      for (const item of possible) {
        if (await fileSha256(item.file) === appliedHash) return item;
      }
      return null;
    }
    __name(findAppliedCandidate, "findAppliedCandidate");
    function renderFilm() {
      filmEl.replaceChildren();
      candidates.forEach((item, i) => {
        const on = heroSource === "generated" && i === heroIndex;
        const applied = item === appliedCandidate;
        const thumb = (
          /** @type {HTMLButtonElement} */
          h("button", {
            type: "button",
            class: `${ROOT_CLASS}-film-thumb${on ? " is-on" : ""}${applied ? " is-applied" : ""}`,
            title: applied ? "Currently applied. Removing it from history leaves the page banner unchanged." : "",
            "aria-label": `${applied ? "Currently applied banner. " : ""}Banner ${i + 1}. Drag to reorder; press Shift and an arrow key to move.`,
            "aria-pressed": String(on),
            draggable: "true",
            onClick: /* @__PURE__ */ __name(() => {
              if (suppressFilmClick) return;
              deleteArmed = false;
              heroSource = "generated";
              heroIndex = i;
              renderHero();
              renderFilm();
            }, "onClick"),
            onKeyDown: /* @__PURE__ */ __name((e) => {
              if (!e.shiftKey || e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
              e.preventDefault();
              e.stopPropagation();
              moveCandidate(i, i + (e.key === "ArrowLeft" ? -1 : 1));
            }, "onKeyDown")
          }, h("img", { src: item.url, alt: "", draggable: "false" }))
        );
        thumb.addEventListener("dragstart", (e) => {
          dragIndex = i;
          suppressFilmClick = true;
          thumb.classList.add("is-dragging");
          if (e.dataTransfer) {
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setData("text/plain", String(i));
          }
        });
        thumb.addEventListener("dragover", (e) => {
          if (dragIndex < 0) return;
          e.preventDefault();
          if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
          clearFilmDropState();
          const before = e.clientX < thumb.getBoundingClientRect().left + thumb.getBoundingClientRect().width / 2;
          dragInsert = before ? i : i + 1;
          thumb.classList.add(before ? "is-drop-before" : "is-drop-after");
        });
        thumb.addEventListener("drop", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const from = dragIndex;
          const insertion = dragInsert < 0 ? i : dragInsert;
          dragIndex = -1;
          clearFilmDropState(true);
          dropCandidate(from, insertion);
          setTimeout(() => {
            suppressFilmClick = false;
          }, 0);
        });
        thumb.addEventListener("dragend", () => {
          dragIndex = -1;
          clearFilmDropState(true);
          setTimeout(() => {
            suppressFilmClick = false;
          }, 0);
        });
        filmEl.appendChild(thumb);
      });
      let proxyCount = 0;
      if (appliedBanner?.url && !appliedCandidate) {
        proxyCount = 1;
        const on = heroSource === "applied";
        const appliedThumb = h("button", {
          type: "button",
          class: `${ROOT_CLASS}-film-thumb is-applied${on ? " is-on" : ""}`,
          title: "Currently applied. Removing it from the picker leaves the page banner unchanged.",
          "aria-label": "Currently applied banner. Removing it from the picker leaves the page banner unchanged.",
          "aria-pressed": String(on),
          onClick: /* @__PURE__ */ __name(() => {
            if (suppressFilmClick) return;
            deleteArmed = false;
            heroSource = "applied";
            renderHero();
            renderFilm();
          }, "onClick")
        }, h("img", { src: appliedBanner.url, alt: "", draggable: "false" }));
        filmEl.appendChild(appliedThumb);
      }
      for (let i = 0; i < pending; i++) {
        filmEl.appendChild(h("div", {
          class: `${ROOT_CLASS}-film-thumb is-busy`,
          "aria-hidden": "true"
        }));
      }
      const extras = Math.max(0, filmSlotTarget() - candidates.length - pending - proxyCount);
      for (let i = 0; i < extras; i++) {
        filmEl.appendChild(emptyFilmSlot("Empty banner slot"));
      }
    }
    __name(renderFilm, "renderFilm");
    function setBusy(next, label) {
      busy = next;
      renderCountBtns();
      if (busy && label) applyBtn.textContent = label;
      else applyBtn.textContent = applyLabel();
      updateApplyEnabled();
      renderHero();
    }
    __name(setBusy, "setBusy");
    function setError(text) {
      errorEl.textContent = text || "";
    }
    __name(setError, "setError");
    async function onGenerate(countId) {
      if (busy) return;
      if (countId && GENERATE_COUNTS.includes(
        /** @type {any} */
        countId
      )) {
        generateCount = countId;
        renderCountBtns();
      }
      heroSource = "generated";
      const prompt = textarea.value.trim();
      if (!prompt) {
        host.toast("Write a prompt first");
        textarea.focus();
        return;
      }
      const key = String(host.getSettings().apiKey || "").trim();
      if (!key) {
        host.toast("OpenRouter API key required", "Open Plugin: Generate Banner and paste a key from openrouter.ai/keys.");
        return;
      }
      const style = selectedStyle();
      let fullPrompt = style.snippet ? `${prompt}

${style.snippet}` : prompt;
      let referenceDataUrl = "";
      if (refFile) {
        fullPrompt = `${fullPrompt}

A reference image was provided; use it as visual guidance for subject, composition, and style.`;
        referenceDataUrl = await fileToDataUrl(refFile);
      }
      const n = nextCount();
      host.updateSettings({ lastModel: selectedModel, lastAspect: aspectId, lastResolution: resolution, generateCount });
      pending = n;
      setBusy(true);
      setError("");
      renderFilm();
      try {
        const results = await generateImages({
          apiKey: key,
          model: selectedModel,
          prompt: fullPrompt,
          n,
          aspectRatio: aspectId,
          resolution,
          referenceDataUrl,
          onImage: /* @__PURE__ */ __name((img) => {
            if (!isBannerDialogOpen()) return;
            pending = Math.max(0, pending - 1);
            if (img) {
              const url = URL.createObjectURL(img.file);
              const item = {
                file: img.file,
                url,
                cost: img.cost,
                prompt,
                styleId: style.id,
                styleName: style.name,
                model: selectedModel,
                modelName: modelDisplayName(selectedModel),
                sourceTitle: ctx.sourceTitle || "",
                sourceGuid: ctx.sourceGuid || "",
                sourceKind: ctx.sourceKind === "collection" ? "collection" : "page",
                createdAt: Date.now()
              };
              candidates.push(item);
              heroSource = "generated";
              heroIndex = candidates.length - 1;
              persistGallery();
              void host.stashGeneration?.(item);
            }
            renderHero();
            renderFilm();
          }, "onImage")
        });
        if (!results.length) throw new Error("No image returned.");
      } catch (err) {
        const msg = String(
          /** @type {any} */
          err?.message || err || "Generation failed"
        );
        setError(msg);
        host.toast("Could not generate banner", msg);
      } finally {
        pending = 0;
        setBusy(false);
        if (isBannerDialogOpen()) {
          renderHero();
          renderFilm();
        }
      }
    }
    __name(onGenerate, "onGenerate");
    async function onApply(target) {
      const current = heroItem();
      if (!current?.file || busy) return;
      host.updateSettings({ applyTarget: target });
      setBusy(true, "Applying\u2026");
      try {
        const ok = await host.applyBanner(current.file, target);
        if (ok) closeBannerDialog();
      } catch (err) {
        const msg = String(
          /** @type {any} */
          err?.message || err || "Could not apply banner"
        );
        setError(msg);
        host.toast("Could not apply banner", msg);
      } finally {
        setBusy(false);
        if (isBannerDialogOpen()) renderHero();
      }
    }
    __name(onApply, "onApply");
    bindDropTarget(hero);
    bindHeroPan(hero);
    refFileInput.addEventListener("change", () => {
      const file = refFileInput.files && refFileInput.files[0];
      refFileInput.value = "";
      if (file) setReference(file);
    });
    applyAspectVars();
    renderStyleTabs();
    renderStyles();
    renderStyleBucket();
    renderCountBtns();
    renderModelBtn();
    renderModelMenu();
    renderHero();
    renderFilm();
    textarea.focus();
    void (async () => {
      let preview = null;
      try {
        preview = await host.getAppliedBanner?.();
        if (!preview?.url) return;
        const matched = await findAppliedCandidate(preview);
        if (!isBannerDialogOpen()) {
          if (preview.revoke) {
            try {
              URL.revokeObjectURL(preview.url);
            } catch {
            }
          }
          return;
        }
        appliedBanner = preview;
        appliedCandidate = matched;
        renderFilm();
      } catch {
      }
    })();
    try {
      textarea.select();
    } catch {
    }
    void (async () => {
      const key = String(host.getSettings().apiKey || "").trim();
      const loaded = await loadCatalog(key, host.workspaceGuid());
      if (!isBannerDialogOpen()) return;
      catalog = loaded.models.length ? loaded.models : fallbackCatalog();
      if (!catalog.some((m) => m.id === selectedModel) && catalog[0]) selectedModel = catalog[0].id;
      renderModelBtn();
      renderModelMenu();
      if (loaded.error && loaded.fromFallback && loaded.error === CORS_MESSAGE) {
        setError(loaded.error);
      }
    })();
    const summaryModel = String(host.getSettings().summaryModel || "");
    if (isSummaryOff(summaryModel)) {
      hintEl.textContent = "Summary is off \u2014 using the page title.";
    } else if (String(settings.apiKey || "").trim() && (ctx.title || ctx.body)) {
      hintEl.textContent = "Summarizing page\u2026";
      void (async () => {
        try {
          const summary = await summarizePage({
            apiKey: String(settings.apiKey).trim(),
            model: String(host.getSettings().summaryModel || ""),
            title: ctx.title,
            body: ctx.body
          });
          if (!isBannerDialogOpen() || promptDirty) return;
          if (summary) textarea.value = summary;
          hintEl.textContent = "";
        } catch {
          if (!isBannerDialogOpen() || promptDirty) return;
          if (ctx.title && !textarea.value.trim()) textarea.value = ctx.title;
          hintEl.textContent = "";
        }
      })();
    }
  }
  __name(openBannerDialog, "openBannerDialog");
  function trashIcon() {
    return actionIcon("M3.2 4.5h9.6M6 4.5V3.2h4v1.3m-5.8 0 .65 8.3h6.3l.65-8.3M6.8 6.5v4.2M9.2 6.5v4.2");
  }
  __name(trashIcon, "trashIcon");
  function checkIcon() {
    return actionIcon("m3.2 8.2 2.8 2.7 6.8-6.5");
  }
  __name(checkIcon, "checkIcon");
  function xIcon() {
    return actionIcon("m4 4 8 8m0-8-8 8");
  }
  __name(xIcon, "xIcon");
  function actionIcon(d) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("width", "15");
    svg.setAttribute("height", "15");
    svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "1.45");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.append(path);
    return svg;
  }
  __name(actionIcon, "actionIcon");
  function pencilIcon() {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("width", "12");
    svg.setAttribute("height", "12");
    svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", "M11.55 2.45a1.4 1.4 0 0 1 1.98 1.98L5.4 12.56 2.2 13.3l.74-3.2 8.61-7.65z");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "1.3");
    path.setAttribute("stroke-linejoin", "round");
    svg.append(path);
    return svg;
  }
  __name(pencilIcon, "pencilIcon");
  function brushIcon() {
    return h("span", {
      class: `ti ti-brush ${ROOT_CLASS}-chip-action-icon ${ROOT_CLASS}-chip-action-glyph`,
      "aria-hidden": "true"
    });
  }
  __name(brushIcon, "brushIcon");
  function uploadRefIcon() {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("width", "18");
    svg.setAttribute("height", "18");
    svg.setAttribute("aria-hidden", "true");
    svg.classList.add(`${ROOT_CLASS}-chip-action-icon`);
    const frame = document.createElementNS(ns, "rect");
    frame.setAttribute("x", "1.5");
    frame.setAttribute("y", "3");
    frame.setAttribute("width", "13");
    frame.setAttribute("height", "10");
    frame.setAttribute("rx", "1.5");
    frame.setAttribute("fill", "none");
    frame.setAttribute("stroke", "currentColor");
    frame.setAttribute("stroke-width", "1.25");
    const hills = document.createElementNS(ns, "path");
    hills.setAttribute("d", "M1.5 11.5 5 8l2.5 2.5 3-3.5 4 4");
    hills.setAttribute("fill", "none");
    hills.setAttribute("stroke", "currentColor");
    hills.setAttribute("stroke-width", "1.25");
    hills.setAttribute("stroke-linejoin", "round");
    const sun = document.createElementNS(ns, "circle");
    sun.setAttribute("cx", "11");
    sun.setAttribute("cy", "6");
    sun.setAttribute("r", "1.1");
    sun.setAttribute("fill", "currentColor");
    svg.append(frame, hills, sun);
    return svg;
  }
  __name(uploadRefIcon, "uploadRefIcon");
  function pictureIcon() {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("width", "15");
    svg.setAttribute("height", "15");
    svg.setAttribute("aria-hidden", "true");
    svg.classList.add(`${ROOT_CLASS}-gen-icon`);
    const frame = document.createElementNS(ns, "rect");
    frame.setAttribute("x", "1.5");
    frame.setAttribute("y", "3");
    frame.setAttribute("width", "13");
    frame.setAttribute("height", "10");
    frame.setAttribute("rx", "1.5");
    frame.setAttribute("fill", "none");
    frame.setAttribute("stroke", "currentColor");
    frame.setAttribute("stroke-width", "1.25");
    const hills = document.createElementNS(ns, "path");
    hills.setAttribute("d", "M1.5 11.5 5 8l2.5 2.5 3-3.5 4 4");
    hills.setAttribute("fill", "none");
    hills.setAttribute("stroke", "currentColor");
    hills.setAttribute("stroke-width", "1.25");
    hills.setAttribute("stroke-linejoin", "round");
    const sun = document.createElementNS(ns, "circle");
    sun.setAttribute("cx", "11");
    sun.setAttribute("cy", "6");
    sun.setAttribute("r", "1.1");
    sun.setAttribute("fill", "currentColor");
    svg.append(frame, hills, sun);
    return svg;
  }
  __name(pictureIcon, "pictureIcon");
  function fileToDataUrl(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        resolve(typeof result === "string" && result.startsWith("data:image/") ? result : "");
      };
      reader.onerror = () => resolve("");
      reader.readAsDataURL(file);
    });
  }
  __name(fileToDataUrl, "fileToDataUrl");
  async function fileSha256(file) {
    try {
      const subtle = globalThis.crypto?.subtle;
      if (!subtle || !file || typeof file.arrayBuffer !== "function") return "";
      const hash = await subtle.digest("SHA-256", await file.arrayBuffer());
      return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, "0")).join("");
    } catch {
      return "";
    }
  }
  __name(fileSha256, "fileSha256");

  // plugin.js
  var AUTO_TITLE_WAIT_MS = 2 * 60 * 1e3;
  var AUTO_TITLE_POLL_MS = 1e3;
  var LIBRARY_PANEL_CSS = `
/* Collection-apply overlay (not dialog CSS). */
.${ROOT_CLASS}-ask {
	position: fixed;
	inset: 0;
	z-index: 10050;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px;
	background: color-mix(in srgb, var(--tps-bg, #111) 45%, transparent);
}
.${ROOT_CLASS}-ask-card {
	display: flex;
	flex-direction: column;
	gap: 10px;
	max-width: 420px;
	padding: 16px;
	background: var(--tps-bg, var(--panel-bg-color, #1c1c1c));
	color: var(--tps-text, inherit);
	border: 1px solid var(--tps-divider, transparent);
	border-radius: var(--tps-radius-lg, 8px);
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
}
.${ROOT_CLASS}-ask-title {
	font-size: var(--tps-fs-label, 13px);
	font-weight: var(--tps-fw-medium, 600);
}
.${ROOT_CLASS}-ask-msg {
	margin: 0;
	font-size: var(--tps-fs-hint, 12px);
	line-height: 1.45;
	color: var(--tps-text-muted, inherit);
}
.${ROOT_CLASS}-ask-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

/* \u2500\u2500 Settings panel chrome (Settings + Library) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Meetings (recall-ai) tab strip: full-width filled track, wrap, gap
   under the row. Extra padding so section copy cannot sit flush under
   the active tab or clip at the host\u2019s right edge. */
.tps-panel.${ROOT_CLASS}-panel {
	position: relative;
	min-width: 0;
	max-width: 100%;
	overflow-x: hidden;
	padding: 12px 20px 40px;
	box-sizing: border-box;
}
.tps-panel.${ROOT_CLASS}-panel .tps-plugin-header {
	margin-bottom: var(--tps-space-4, 16px);
}
.tps-panel.${ROOT_CLASS}-panel .tps-section,
.tps-panel.${ROOT_CLASS}-panel .tps-section-hint,
.tps-panel.${ROOT_CLASS}-panel .tps-section-label,
.tps-panel.${ROOT_CLASS}-panel .tps-section-body,
.tps-panel.${ROOT_CLASS}-panel .gb-field-row,
.tps-panel.${ROOT_CLASS}-panel .gb-field-desc,
.tps-panel.${ROOT_CLASS}-panel .gb-field-label {
	min-width: 0;
	max-width: 100%;
	overflow-wrap: anywhere;
	word-break: break-word;
	white-space: normal;
}
.tps-panel.${ROOT_CLASS}-panel .tps-tabs {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	gap: 4px;
	margin: 4px 0 24px;
	padding: 4px;
	background: var(--tps-bg-hover, var(--hover-subtle, rgba(127, 127, 127, 0.06)));
	border: 1px solid var(--tps-divider, var(--divider-color, rgba(127, 127, 127, 0.12)));
	border-radius: var(--tps-radius-md, 6px);
	box-sizing: border-box;
}
.tps-panel.${ROOT_CLASS}-panel .tps-tab {
	flex: 1 1 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	min-height: 32px;
	height: auto;
	padding: 7px 12px;
}
.tps-panel.${ROOT_CLASS}-panel .tps-tab[aria-pressed="true"],
.tps-panel.${ROOT_CLASS}-panel .tps-tab[aria-selected="true"] {
	background: var(--tps-bg-input, var(--input-bg-color, var(--panel-bg-color, #1c1c1c)));
	color: var(--tps-text, inherit);
	border-color: var(--tps-border, var(--tps-divider, transparent));
	font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel.${ROOT_CLASS}-panel .gb-tab-badge {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 18px;
	height: 18px;
	padding: 0 6px;
	font-size: 11px;
	font-weight: var(--tps-fw-semibold, 600);
	font-variant-numeric: tabular-nums;
	line-height: 1;
	border-radius: var(--tps-radius-pill, 999px);
	background: var(--tps-bg-active, color-mix(in srgb, currentColor 12%, transparent));
	color: var(--tps-text-muted, inherit);
}
.tps-panel.${ROOT_CLASS}-panel .tps-tab[aria-pressed="true"] .gb-tab-badge {
	background: var(--tps-bg-hover, color-mix(in srgb, currentColor 8%, transparent));
	color: var(--tps-text, inherit);
}

/* \u2500\u2500 Library cards \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.${ROOT_CLASS}-panel .gb-lib-confirm,
.${ROOT_CLASS}-panel .gb-lib-preview-card {
	display: flex;
	flex-direction: column;
	gap: 10px;
	max-width: 420px;
	padding: 16px;
	background: var(--tps-bg, var(--panel-bg-color, #1c1c1c));
	color: var(--tps-text, inherit);
	border: 1px solid var(--tps-divider, transparent);
	border-radius: var(--tps-radius-lg, 8px);
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
}
.${ROOT_CLASS}-panel .gb-lib-confirm-title {
	font-size: var(--tps-fs-label, 13px);
	font-weight: var(--tps-fw-medium, 600);
}
/* The keep/clear toggle heads the Library tab, then the Clear-all toolbar sits
   directly on the generations list it acts on. Room above and below the toggle
   so it reads as its own row, not as a caption jammed under the section hint. */
.${ROOT_CLASS}-panel .gb-lib-keep {
	padding: 4px 0 10px;
	margin-bottom: 4px;
	border-bottom: 1px solid var(--tps-divider, transparent);
}
.${ROOT_CLASS}-panel .gb-lib-confirm-actions,
.${ROOT_CLASS}-panel .gb-lib-toolbar {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}
.${ROOT_CLASS}-panel .gb-lib-confirm--inline {
	max-width: none;
	margin-top: 8px;
	box-shadow: none;
	padding: 12px;
}
.${ROOT_CLASS}-panel .gb-lib-empty {
	display: flex;
	flex-direction: column;
	gap: 8px;
	padding: 28px 8px 16px;
}
.${ROOT_CLASS}-panel .gb-lib-empty-title {
	font-size: var(--tps-fs-label, 13px);
	font-weight: var(--tps-fw-medium, 600);
	color: var(--tps-text, inherit);
}
.${ROOT_CLASS}-panel .gb-lib-empty-copy {
	margin: 0;
	font-size: var(--tps-fs-hint, 12px);
	line-height: 1.5;
	color: var(--tps-text-muted, inherit);
	overflow-wrap: anywhere;
}
.${ROOT_CLASS}-panel .gb-lib-list {
	display: flex;
	flex-direction: column;
	gap: 14px;
	margin-top: 12px;
}
.${ROOT_CLASS}-panel .gb-lib-item {
	display: flex;
	gap: 14px;
	align-items: flex-start;
	padding: 14px;
	border: 1px solid var(--tps-divider, transparent);
	border-radius: var(--tps-radius-md, 6px);
	background: var(--tps-bg-hover, color-mix(in srgb, currentColor 6%, transparent));
	min-width: 0;
}
.${ROOT_CLASS}-panel .gb-lib-thumb {
	flex: 0 0 148px;
	width: 148px;
	height: 56px;
	padding: 0;
	overflow: hidden;
	border: 1px solid var(--tps-divider, transparent);
	border-radius: var(--tps-radius-sm, 4px);
	background: var(--tps-bg-input, transparent);
	cursor: pointer;
}
.${ROOT_CLASS}-panel .gb-lib-thumb img,
.${ROOT_CLASS}-panel .gb-lib-preview-card img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.${ROOT_CLASS}-panel .gb-lib-meta {
	min-width: 0;
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	gap: 6px;
}
.${ROOT_CLASS}-panel .gb-lib-prompt {
	font-size: var(--tps-fs-label, 13px);
	line-height: 1.45;
	overflow-wrap: anywhere;
}
.${ROOT_CLASS}-panel .gb-lib-kv {
	display: flex;
	flex-wrap: wrap;
	gap: 4px 6px;
	font-size: var(--tps-fs-hint, 12px);
	line-height: 1.4;
	color: var(--tps-text-muted, inherit);
	overflow-wrap: anywhere;
}
.${ROOT_CLASS}-panel .gb-lib-k {
	flex: 0 0 auto;
	font-weight: var(--tps-fw-medium, 500);
	color: var(--tps-text-faint, var(--tps-text-muted, inherit));
}
.${ROOT_CLASS}-panel .gb-lib-v {
	min-width: 0;
	overflow-wrap: anywhere;
}
.${ROOT_CLASS}-panel .gb-lib-preview {
	position: absolute;
	inset: 0;
	z-index: 4;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px;
	background: color-mix(in srgb, var(--tps-bg, #111) 55%, transparent);
}
.${ROOT_CLASS}-panel .gb-lib-preview-card {
	max-width: min(520px, 100%);
	width: 100%;
}
.${ROOT_CLASS}-panel .gb-lib-preview-card img {
	height: auto;
	max-height: 220px;
	object-fit: contain;
	background: var(--tps-bg-input, transparent);
	border-radius: var(--tps-radius-sm, 4px);
}
@media (max-width: 420px) {
	.${ROOT_CLASS}-panel .gb-lib-item {
		flex-direction: column;
	}
	.${ROOT_CLASS}-panel .gb-lib-thumb {
		flex: 0 0 auto;
		width: 100%;
		height: auto;
		aspect-ratio: 21 / 9;
	}
}
`;
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    /** @type {ReturnType<typeof normalizeSettings>} */
    _settings = normalizeSettings(null);
    /** @type {ReturnType<typeof createSettingsStore>} */
    _settingsStore = (
      /** @type {any} */
      null
    );
    /** @type {(() => void) | null} */
    _detachSettingsLifecycle = null;
    /** @type {(() => void) | null} */
    _cancelPillSettle = null;
    /** @type {HTMLElement | null} */
    _panelEl = null;
    /** @type {any} */
    _cmdGenerate = null;
    /** @type {any} */
    _cmdSettings = null;
    /** @type {string[]} */
    _handlerIds = [];
    _disabled = false;
    /** @type {GalleryItem[]} */
    _gallery = [];
    /** @type {Record<string, any>} */
    _pendingSettings = {};
    /** @type {null | { mode: 'new' } | { mode: 'edit', id: string }} */
    _autoEditor = null;
    _autoRulesDirty = false;
    _dialogOpen = false;
    /** @type {'settings'|'library'|'auto'} */
    _panelTab = readPanelTab();
    /** @type {any[]} */
    _collections = [];
    /** @type {ReturnType<typeof setTimeout> | null} */
    _collectionsRetryTimer = null;
    _collectionSearch = "";
    /** @type {string | null} */
    _autoSelectedGuid = null;
    /** @type {Set<string>} */
    _autoInFlight = /* @__PURE__ */ new Set();
    _autoKeyToastAt = 0;
    /** @type {Record<string, string>} */
    _autoRefUrls = {};
    _libraryClearConfirm = false;
    /** @type {string | null} */
    _libraryDeleteKey = null;
    /** @type {GalleryItem | null} */
    _libraryPreview = null;
    /** @type {{ sourceTitle: string, sourceGuid: string, sourceKind: 'page'|'collection' } | null} */
    _lastSource = null;
    /** @type {Record<string, string>} */
    _styleThumbUrls = {};
    /** @type {Promise<void> | null} */
    _styleThumbsReady = null;
    /** @type {Promise<void> | null} */
    _libraryReady = null;
    /** @type {Promise<void>} */
    _libraryWriteChain = Promise.resolve();
    onLoad() {
      pingInstall(PLUGIN_SLUG);
      pingActive(PLUGIN_SLUG);
      void syncPluginVersionOnLoad(this, PLUGIN_VERSION);
      void healPluginIdentity(this, {
        name: PLUGIN_NAME,
        icon: "brush",
        description: "Generate AI banners for any page or collection from OpenRouter image models.",
        sourceRepo: "https://github.com/akaready/thymer-generate-banner",
        sourceFiles: { branch: "main", json: "plugin.json", js: "plugin.js" }
      });
      this._disabled = readKillSwitch(this);
      this._handlerIds = [];
      this._panelEl = null;
      this._settingsStore = createSettingsStore(this, {
        slug: PLUGIN_SLUG,
        key: "options",
        version: PLUGIN_VERSION,
        normalize: normalizeSettings
      });
      this._settings = normalizeSettings(this._settingsStore.load().settings);
      this._hydrateApiKey();
      this._hydrateDialogPrefs();
      this._adoptLegacyStyleThumbs();
      this._styleThumbsReady = this._hydrateStyleThumbBlobs();
      this._libraryReady = this._hydrateLibraryBlobs().then(() => {
        this._renderPanel();
      });
      this.ui.injectCSS(PANEL_CSS);
      this.ui.injectCSS(PANEL_LOCAL_CSS);
      this.ui.injectCSS(DIALOG_CSS);
      this.ui.injectCSS(LIBRARY_PANEL_CSS);
      this._cmdGenerate = this.ui.addCommandPaletteCommand({
        label: "Generate Banner",
        icon: "brush",
        onSelected: /* @__PURE__ */ __name(() => {
          void this._openDialog();
        }, "onSelected")
      });
      this._cmdSettings = this.ui.addCommandPaletteCommand({
        label: `Plugin: ${PLUGIN_NAME}`,
        icon: "brush",
        onSelected: /* @__PURE__ */ __name(() => this._openPanel(), "onSelected")
      });
      this.ui.registerCustomPanelType(PANEL_TYPE, (pluginPanel) => {
        try {
          pluginPanel.setTitle(`${PLUGIN_NAME} Settings`);
        } catch {
        }
        const root = pluginPanel.getElement();
        if (!root) return;
        this._panelEl = root;
        this._renderPanel();
      });
      this._detachSettingsLifecycle = this._settingsStore.attachLifecycle({
        onRemoteChange: /* @__PURE__ */ __name((settings) => {
          this._settings = normalizeSettings(settings);
          this._writeDialogPrefs();
          this._renderPanel();
        }, "onRemoteChange")
      });
      this._registerAutoBannerEvents();
      try {
        this._autoSelectedGuid = sessionStorage.getItem(`${PLUGIN_SLUG}/auto-selected`) || null;
      } catch {
      }
      this._loadCollections();
      try {
        const staleRoot = document.querySelector(`.${ROOT_CLASS}-panel`);
        if (staleRoot && staleRoot.parentElement) {
          this._panelEl = /** @type {HTMLElement} */
          staleRoot.parentElement;
          this._renderPanel();
          this._refreshScopePillUntilSettled();
        }
      } catch {
      }
      try {
        if (!isBannerDialogOpen()) {
          document.querySelectorAll(`.${OVERLAY_CLASS}`).forEach((el2) => el2.remove());
        }
      } catch {
      }
    }
    onUnload() {
      try {
        this._detachSettingsLifecycle?.();
      } catch {
      }
      this._detachSettingsLifecycle = null;
      this._cancelPillSettle?.();
      this._cancelPillSettle = null;
      if (this._collectionsRetryTimer) {
        clearTimeout(this._collectionsRetryTimer);
        this._collectionsRetryTimer = null;
      }
      this._revokeAutoRefUrls();
      this._autoInFlight = /* @__PURE__ */ new Set();
      try {
        closeBannerDialog();
      } catch {
      }
      this._revokeGallery();
      this._revokeStyleThumbs();
      for (const id of this._handlerIds || []) this.events.off(id);
      this._handlerIds = [];
      if (this._cmdGenerate) {
        this._cmdGenerate.remove();
        this._cmdGenerate = null;
      }
      if (this._cmdSettings) {
        this._cmdSettings.remove();
        this._cmdSettings = null;
      }
      this._panelEl = null;
      if (!this._dialogOpen && (Object.keys(this._pendingSettings).length || this._autoRulesDirty)) this._commitPendingSettings();
    }
    /** @param {{ persist?: boolean }} [opts] */
    _revokeGallery(opts) {
      for (const item of this._gallery) {
        try {
          URL.revokeObjectURL(item.url);
        } catch {
        }
      }
      this._gallery = [];
      this._libraryPreview = null;
      this._libraryClearConfirm = false;
      this._libraryDeleteKey = null;
      if (opts?.persist) this._writeLibraryJson([]);
    }
    /** @param {any} raw @returns {GalleryItem} */
    _normalizeGalleryItem(raw) {
      const src = this._lastSource;
      const kind = raw?.sourceKind === "collection" || raw?.sourceKind === "page" ? raw.sourceKind : src?.sourceKind || "page";
      const created = Number(raw?.createdAt);
      return {
        guid: raw?.guid != null ? String(raw.guid) : "",
        name: raw?.name != null ? String(raw.name) : raw?.file?.name || "",
        file: raw?.file || null,
        url: typeof raw?.url === "string" ? raw.url : "",
        cost: raw?.cost == null || !Number.isFinite(Number(raw.cost)) ? null : Number(raw.cost),
        prompt: raw?.prompt != null ? String(raw.prompt) : "",
        styleId: raw?.styleId != null ? String(raw.styleId) : "",
        styleName: raw?.styleName != null ? String(raw.styleName) : "",
        model: raw?.model != null ? String(raw.model) : "",
        modelName: raw?.modelName != null ? String(raw.modelName) : "",
        sourceTitle: raw?.sourceTitle != null ? String(raw.sourceTitle) : String(src?.sourceTitle || ""),
        sourceGuid: raw?.sourceGuid != null ? String(raw.sourceGuid) : String(src?.sourceGuid || ""),
        sourceKind: kind,
        createdAt: Number.isFinite(created) && created > 0 ? created : Date.now()
      };
    }
    /** @param {any[]} items */
    _setGallery(items) {
      this._gallery = Array.isArray(items) ? items.map((item) => this._normalizeGalleryItem(item)) : [];
    }
    /** @returns {GalleryItem[]} */
    getLibraryEntries() {
      return this._gallery.slice();
    }
    _styleThumbsKey() {
      let ws = "";
      try {
        ws = this.getWorkspaceGuid() || "";
      } catch {
      }
      return `${PLUGIN_SLUG}/${ws || "default"}/style-thumbs`;
    }
    /** Pull 0.1.5 localStorage data-URIs into the scalar map once. */
    _adoptLegacyStyleThumbs() {
      try {
        const raw = localStorage.getItem(this._styleThumbsKey());
        if (!raw) return;
        const legacy = parseStyleThumbs(raw);
        if (!Object.keys(legacy).length) return;
        const map = { ...parseStyleThumbs(this._settings.styleThumbsJson), ...legacy };
        this._settings = normalizeSettings({ ...this._settings, styleThumbsJson: serializeStyleThumbs(map) });
        this._writeDialogPrefs();
        try {
          localStorage.removeItem(this._styleThumbsKey());
        } catch {
        }
      } catch {
      }
    }
    _revokeStyleThumbs() {
      for (const url of Object.values(this._styleThumbUrls)) {
        try {
          URL.revokeObjectURL(url);
        } catch {
        }
      }
      this._styleThumbUrls = {};
    }
    /** Resolve blob-GUID thumbs into object URLs so getStyleThumb stays sync. */
    async _hydrateStyleThumbBlobs() {
      const map = parseStyleThumbs(this._settings.styleThumbsJson);
      await Promise.all(Object.entries(map).map(async ([id, value]) => {
        if (!id || !value || value.startsWith("data:") || this._styleThumbUrls[id]) return;
        try {
          const blob = await this.data.getBlobFromPropertyFileValue({
            name: `${id}.png`,
            error: null,
            guid: value,
            imgData: null,
            imgUrl: null,
            imgClass: null
          });
          const buf = blob ? await blob.download() : null;
          if (!buf) return;
          const type = (
            /** @type {PluginBlob} */
            blob.contentType || "image/png"
          );
          this._styleThumbUrls[id] = URL.createObjectURL(new Blob([buf], { type }));
        } catch {
        }
      }));
    }
    /**
     * Persist a regenerated style-chip thumb. Prefer a workspace blob GUID in
     * the scalar `styleThumbsJson` map; fall back to a data URI if upload fails.
     * @param {string} styleId
     * @param {File} file
     */
    async saveStyleThumb(styleId, file) {
      const id = String(styleId || "").trim();
      if (!id || !file) return;
      try {
        if (this._styleThumbUrls[id]) URL.revokeObjectURL(this._styleThumbUrls[id]);
      } catch {
      }
      this._styleThumbUrls[id] = URL.createObjectURL(file);
      let stored = "";
      try {
        const blob = await this.data.uploadBlob(file);
        if (blob && blob.guid) stored = String(blob.guid);
      } catch {
      }
      if (!stored) stored = await fileToDataUrl2(file);
      if (!stored) return;
      const map = parseStyleThumbs(this._settings.styleThumbsJson);
      map[id] = stored;
      const json = serializeStyleThumbs(map);
      if (this._dialogOpen) this._patchSettingsLive({ styleThumbsJson: json });
      else this._updateSettings({ styleThumbsJson: json });
    }
    /** Resolve persisted library blobs into in-memory thumbs. */
    async _hydrateLibraryBlobs() {
      const entries = parseLibrary(this._settings.libraryJson);
      if (!entries.length) return;
      const order = new Map(entries.map((entry, index) => [entry.guid, index]));
      const have = new Set(this._gallery.map((g) => g.guid).filter(Boolean));
      const added = [];
      await Promise.all(entries.map(async (entry) => {
        if (!entry.guid || have.has(entry.guid)) return;
        try {
          const blob = await this.data.getBlobFromPropertyFileValue({
            name: entry.name || "banner.png",
            error: null,
            guid: entry.guid,
            imgData: null,
            imgUrl: null,
            imgClass: null
          });
          const buf = blob ? await blob.download() : null;
          if (!buf) return;
          const type = (
            /** @type {PluginBlob} */
            blob.contentType || "image/png"
          );
          const file = new File([buf], entry.name || `banner-${entry.guid}.png`, { type });
          const url = URL.createObjectURL(file);
          added.push(this._normalizeGalleryItem({ ...entry, file, url }));
        } catch {
        }
      }));
      if (!added.length) return;
      added.sort((a, b) => (order.get(String(a.guid || "")) ?? 0) - (order.get(String(b.guid || "")) ?? 0));
      this._gallery = [...this._gallery, ...added].sort((a, b) => {
        const ai = order.get(String(a.guid || ""));
        const bi = order.get(String(b.guid || ""));
        if (ai != null && bi != null) return ai - bi;
        if (ai != null) return -1;
        if (bi != null) return 1;
        return (a.createdAt || 0) - (b.createdAt || 0);
      });
    }
    /** @param {import('./settings.js').LibraryEntry[]} entries */
    _writeLibraryJson(entries) {
      const json = serializeLibrary(entries.slice(-LIBRARY_CAP));
      if (this._dialogOpen) this._patchSettingsLive({ libraryJson: json });
      else this._updateSettings({ libraryJson: json });
    }
    /**
     * Upload the image immediately; write guid metadata to dialog-prefs / pending
     * patch. Does not flush the settings store while the generate dialog is open.
     * @param {any} item
     */
    _stashGeneration(item) {
      this._libraryWriteChain = this._libraryWriteChain.then(() => this._stashGenerationNow(item)).catch(() => {
      });
      return this._libraryWriteChain;
    }
    /** @param {any} item */
    async _stashGenerationNow(item) {
      const normalized = this._normalizeGalleryItem(item);
      let guid = String(item?.guid || normalized.guid || "").trim();
      const name = String(item?.name || normalized.name || normalized.file?.name || `banner-${Date.now()}.png`);
      if (!guid && normalized.file) {
        try {
          const blob = await this.data.uploadBlob(normalized.file);
          if (blob && blob.guid) guid = String(blob.guid);
        } catch {
        }
      }
      if (!guid) return;
      if (item && typeof item === "object") {
        item.guid = guid;
        item.name = name;
      }
      const live = this._gallery.find((candidate) => candidate === item || !!normalized.url && candidate.url === normalized.url || !!normalized.createdAt && candidate.createdAt === normalized.createdAt);
      if (live) {
        live.guid = guid;
        live.name = name;
      }
      const entries = parseLibrary(this._settings.libraryJson).filter((e) => e.guid !== guid);
      entries.push({
        guid,
        name,
        prompt: normalized.prompt,
        styleId: normalized.styleId,
        styleName: normalized.styleName,
        model: normalized.model,
        modelName: normalized.modelName,
        cost: normalized.cost,
        sourceTitle: normalized.sourceTitle,
        sourceGuid: normalized.sourceGuid,
        sourceKind: normalized.sourceKind,
        createdAt: normalized.createdAt
      });
      this._writeLibraryJson(entries.slice(-LIBRARY_CAP));
    }
    /**
     * Queue deletion behind any in-flight blob upload so a just-generated item
     * cannot be re-added to libraryJson after the user removes it.
     * @param {GalleryItem} item
     */
    _deleteGeneration(item) {
      this._libraryWriteChain = this._libraryWriteChain.then(() => {
        const guid = String(item?.guid || "").trim();
        const createdAt = Number(item?.createdAt) || 0;
        const next = parseLibrary(this._settings.libraryJson).filter((entry) => {
          if (guid) return entry.guid !== guid;
          return !createdAt || entry.createdAt !== createdAt;
        });
        this._writeLibraryJson(next);
        if (item?.url) {
          try {
            URL.revokeObjectURL(item.url);
          } catch {
          }
        }
        if (this._libraryPreview === item) this._libraryPreview = null;
        this._libraryDeleteKey = null;
        this._renderPanel();
      });
      return this._libraryWriteChain;
    }
    /**
     * Persist filmstrip order after all pending uploads have assigned GUIDs.
     * Unmatched metadata is retained at the end rather than being discarded.
     * @param {GalleryItem[]} items
     */
    _reorderGenerations(items) {
      const orderedItems = Array.isArray(items) ? items.slice() : [];
      this._libraryWriteChain = this._libraryWriteChain.then(() => {
        const entries = parseLibrary(this._settings.libraryJson);
        const byGuid = new Map(entries.map((entry) => [entry.guid, entry]));
        const seen = /* @__PURE__ */ new Set();
        const ordered = [];
        for (const item of orderedItems) {
          const guid = String(item?.guid || "").trim();
          const entry = guid ? byGuid.get(guid) : null;
          if (!entry || seen.has(guid)) continue;
          seen.add(guid);
          ordered.push(entry);
        }
        for (const entry of entries) {
          if (!seen.has(entry.guid)) ordered.push(entry);
        }
        this._setGallery(orderedItems);
        this._writeLibraryJson(ordered);
        this._renderPanel();
      });
      return this._libraryWriteChain;
    }
    /** @param {string} styleId @returns {string | null} */
    getStyleThumb(styleId) {
      const id = String(styleId || "").trim();
      if (!id) return null;
      if (this._styleThumbUrls[id]) return this._styleThumbUrls[id];
      const map = parseStyleThumbs(this._settings.styleThumbsJson);
      const value = map[id];
      if (value && value.startsWith("data:")) return value;
      return null;
    }
    /** @param {string} title @param {string} [message] @param {number} [time] */
    _toast(title, message = "", time = 4e3) {
      try {
        this.ui.addToaster({
          title: title || PLUGIN_NAME,
          message,
          dismissible: true,
          autoDestroyTime: time
        });
      } catch {
      }
    }
    _apiKeyStorageKey() {
      let ws = "";
      try {
        ws = this.getWorkspaceGuid() || "";
      } catch {
      }
      return `${PLUGIN_SLUG}/${ws || "default"}/api-key`;
    }
    _readLocalApiKey() {
      try {
        return String(localStorage.getItem(this._apiKeyStorageKey()) || "");
      } catch {
        return "";
      }
    }
    /** @param {string} value */
    _writeLocalApiKey(value) {
      try {
        const key = this._apiKeyStorageKey();
        if (!value) localStorage.removeItem(key);
        else localStorage.setItem(key, value);
      } catch {
      }
    }
    _dialogPrefsKey() {
      let ws = "";
      try {
        ws = this.getWorkspaceGuid() || "";
      } catch {
      }
      return `${PLUGIN_SLUG}/${ws || "default"}/dialog-prefs`;
    }
    _writeDialogPrefs() {
      try {
        const { apiKey: _apiKey, ...rest } = this._settings;
        localStorage.setItem(this._dialogPrefsKey(), JSON.stringify(rest));
      } catch {
      }
    }
    _hydrateDialogPrefs() {
      try {
        const raw = localStorage.getItem(this._dialogPrefsKey());
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") return;
        this._settings = normalizeSettings({ ...this._settings, ...parsed, apiKey: this._settings.apiKey });
      } catch {
      }
    }
    /**
     * API keys must survive a plugin reload that happens before the 4s settings
     * flush. Mirror locally immediately. Do not recover() into the store here —
     * that schedules saveConfiguration and reloads the plugin.
     */
    _hydrateApiKey() {
      const local = this._readLocalApiKey();
      if (this._settings.apiKey) {
        this._writeLocalApiKey(this._settings.apiKey);
        return;
      }
      if (!local) return;
      this._settings = normalizeSettings({ ...this._settings, apiKey: local });
    }
    /** @param {string} value */
    _commitApiKey(value) {
      const next = String(value || "").trim();
      this._writeLocalApiKey(next);
      this._settings = normalizeSettings({ ...this._settings, apiKey: next });
      this._writeDialogPrefs();
      if (this._dialogOpen) {
        this._pendingSettings = { ...this._pendingSettings, apiKey: next };
        this._refreshScopePill();
        return;
      }
      this._settings = normalizeSettings(this._settingsStore.update(this._settings).settings);
      this._refreshScopePill();
      void this._settingsStore.flush();
    }
    /**
     * Apply everything journaled while the dialog or the settings panel was open.
     * Called on either surface's close — the one moment a plugin reload cannot
     * orphan an open editor.
     */
    _commitPendingSettings() {
      this._dialogOpen = false;
      const patch = { ...this._pendingSettings };
      this._pendingSettings = {};
      if (this._settings.clearGalleryOnClose === "1" || patch.clearGalleryOnClose === "1") {
        this._revokeGallery();
        patch.libraryJson = "[]";
      }
      if (typeof patch.apiKey === "string") this._writeLocalApiKey(patch.apiKey);
      this._settings = normalizeSettings({ ...this._settings, ...patch });
      this._writeDialogPrefs();
      if (Object.keys(patch).length) {
        this._settings = normalizeSettings(this._settingsStore.update(this._settings).settings);
      }
      if (this._autoRulesDirty) {
        this._autoRulesDirty = false;
        void this._settingsStore.pushToAll().then((ok) => {
          if (!ok) {
            this._toast(PLUGIN_NAME, "Could not save auto-banner rules to all devices.");
            return;
          }
          this._refreshScopePillUntilSettled();
        });
      }
      this._renderPanel();
    }
    /** True while our settings panel is mounted — edits must not reload the plugin. */
    _panelIsOpen() {
      return !!(this._panelEl && this._panelEl.isConnected);
    }
    /** The panel went away (Close button or Thymer's own ×): flush what it staged. */
    _onPanelClosed() {
      if (this._panelIsOpen()) return;
      this._panelEl = null;
      this._autoEditor = null;
      if (this._dialogOpen) return;
      if (Object.keys(this._pendingSettings).length || this._autoRulesDirty) this._commitPendingSettings();
    }
    /** @param {Record<string, any>} patch */
    _updateSettings(patch) {
      this._settings = normalizeSettings({ ...this._settings, ...patch });
      this._writeDialogPrefs();
      this._settings = normalizeSettings(this._settingsStore.update(this._settings).settings);
      this._refreshScopePill();
    }
    /**
     * Memory-only while the generate dialog is open — a flush reloads the plugin.
     * @param {Record<string, any>} patch
     */
    _patchSettingsLive(patch) {
      this._settings = normalizeSettings({ ...this._settings, ...patch });
      this._pendingSettings = { ...this._pendingSettings, ...patch };
      this._writeDialogPrefs();
    }
    _scopeArgs() {
      return {
        diverged: this._settingsStore.isDiverged(),
        localUnavailable: !!this._settingsStore.isLocalUnavailable(),
        onPush: /* @__PURE__ */ __name(() => {
          this._settingsStore.update(this._settings);
          void this._settingsStore.pushToAll().then((ok) => {
            if (!ok) {
              this._toast(PLUGIN_NAME, "Could not save to all devices.");
              return;
            }
            this._toast(PLUGIN_NAME, "Settings applied to all devices", 3e3);
            this._refreshScopePillUntilSettled();
          });
        }, "onPush"),
        onDiscard: /* @__PURE__ */ __name(() => {
          this._settings = normalizeSettings(this._settingsStore.discardLocal());
          this._writeDialogPrefs();
          this._renderPanel();
          this._toast(PLUGIN_NAME, "Reverted to synced settings", 3e3);
        }, "onDiscard")
      };
    }
    _refreshScopePill() {
      const el2 = this._panelEl?.querySelector?.(".tps-scope");
      if (el2) el2.replaceWith(scopeCluster(this._scopeArgs()));
    }
    _refreshScopePillUntilSettled() {
      this._cancelPillSettle?.();
      this._cancelPillSettle = this._settingsStore.settleAfterPush({
        onAdopt: /* @__PURE__ */ __name((settings) => {
          this._settings = normalizeSettings(settings);
          this._renderPanel();
        }, "onAdopt"),
        refreshPill: /* @__PURE__ */ __name(() => this._refreshScopePill(), "refreshPill")
      });
    }
    async _openPanel() {
      if (this._panelEl && document.contains(this._panelEl)) return;
      const active = this.ui.getActivePanel && this.ui.getActivePanel();
      if (active) {
        active.navigateToCustomType(PANEL_TYPE);
        return;
      }
      const next = await this.ui.createPanel();
      if (next) next.navigateToCustomType(PANEL_TYPE);
    }
    async _openDialog() {
      if (this._disabled) {
        this._toast(PLUGIN_NAME, "Generate Banner is turned off. Open Plugin: Generate Banner to enable it.");
        return;
      }
      const panel2 = this.ui.getActivePanel();
      const record = panel2?.getActiveRecord?.() || null;
      const collection = panel2?.getActiveCollection?.() || null;
      if (!record && !collection) {
        this._toast(PLUGIN_NAME, "Open a page or collection first.");
        return;
      }
      this._dialogOpen = true;
      this._pendingSettings = {};
      this._lastSource = captureSource(record, collection);
      try {
        await this._styleThumbsReady;
      } catch {
      }
      try {
        await this._libraryReady;
      } catch {
      }
      try {
        await this._hydrateLibraryBlobs();
      } catch {
      }
      await openBannerDialog({
        ui: this.ui,
        data: this.data,
        getSettings: /* @__PURE__ */ __name(() => this._settings, "getSettings"),
        updateSettings: /* @__PURE__ */ __name((patch) => this._patchSettingsLive(patch), "updateSettings"),
        commitSettings: /* @__PURE__ */ __name(() => this._commitPendingSettings(), "commitSettings"),
        toast: /* @__PURE__ */ __name((title, message) => this._toast(title, message || ""), "toast"),
        getPageContext: /* @__PURE__ */ __name(async () => {
          const { title, body } = await this._pageContext(record, collection);
          this._lastSource = captureSource(record, collection);
          return {
            record,
            collection,
            title,
            body,
            sourceTitle: this._lastSource.sourceTitle,
            sourceGuid: this._lastSource.sourceGuid,
            sourceKind: this._lastSource.sourceKind
          };
        }, "getPageContext"),
        applyBanner: /* @__PURE__ */ __name((file, target) => this._applyBanner(file, target, record, collection), "applyBanner"),
        workspaceGuid: /* @__PURE__ */ __name(() => {
          try {
            return this.getWorkspaceGuid() || "";
          } catch {
            return "";
          }
        }, "workspaceGuid"),
        getGallery: /* @__PURE__ */ __name(() => this._gallery, "getGallery"),
        setGallery: /* @__PURE__ */ __name((items) => this._setGallery(items), "setGallery"),
        clearGallery: /* @__PURE__ */ __name(() => this._revokeGallery(), "clearGallery"),
        getLibraryEntries: /* @__PURE__ */ __name(() => this.getLibraryEntries(), "getLibraryEntries"),
        saveStyleThumb: /* @__PURE__ */ __name((id, file) => this.saveStyleThumb(id, file), "saveStyleThumb"),
        getStyleThumb: /* @__PURE__ */ __name((id) => this.getStyleThumb(id), "getStyleThumb"),
        stashGeneration: /* @__PURE__ */ __name((item) => this._stashGeneration(item), "stashGeneration"),
        deleteGeneration: /* @__PURE__ */ __name((item) => this._deleteGeneration(item), "deleteGeneration"),
        reorderGenerations: /* @__PURE__ */ __name((items) => this._reorderGenerations(items), "reorderGenerations"),
        getAppliedBanner: /* @__PURE__ */ __name(() => this._getAppliedBanner(record, collection), "getAppliedBanner")
      });
    }
    /**
     * @param {any} record
     * @param {any} collection
     */
    async _pageContext(record, collection) {
      if (record) {
        const title2 = safeName(record);
        let body = "";
        try {
          const md = await record.getAsMarkdown?.({ experimental: true });
          if (md && typeof md.content === "string") body = md.content;
        } catch {
        }
        if (!body) body = await lineItemText(record);
        return { title: title2, body };
      }
      const title = collection?.getName?.() || "";
      let desc = "";
      try {
        desc = collection?.getConfiguration?.()?.description || "";
      } catch {
      }
      return { title, body: desc };
    }
    /**
     * Current page or collection banner, if the host exposes getBanner.
     * @param {any} record
     * @param {any} collection
     * @returns {Promise<{ url: string, file?: File | null, revoke?: boolean } | null>}
     */
    async _getAppliedBanner(record, collection) {
      const src = record || collection;
      if (!src) return null;
      let banner = null;
      try {
        banner = typeof src.getBanner === "function" ? await Promise.resolve(src.getBanner()) : null;
      } catch {
        banner = null;
      }
      return bannerToPreview(banner, this);
    }
    /**
     * @param {File} file
     * @param {'page' | 'collection'} target
     * @param {any} record
     * @param {any} collection
     */
    async _applyBanner(file, target, record, collection) {
      if (!file) {
        this._toast(PLUGIN_NAME, "No image to apply.");
        return false;
      }
      if (target === "page") {
        if (!record) {
          this._toast(PLUGIN_NAME, "No page is open.");
          return false;
        }
        const blob2 = await this.data.uploadBlob(file);
        if (!blob2) {
          this._toast(PLUGIN_NAME, "Thymer could not store the image.");
          return false;
        }
        if (!record.setBannerFromBlob(blob2)) {
          this._toast(PLUGIN_NAME, "Could not set the page banner.");
          return false;
        }
        this._toast(PLUGIN_NAME, "Banner set on this page.", 2500);
        return true;
      }
      if (!collection) {
        this._toast(PLUGIN_NAME, "No collection is open.");
        return false;
      }
      const mode = await this._askCollectionApplyMode();
      if (!mode) return false;
      const blob = await this.data.uploadBlob(file);
      if (!blob) {
        this._toast(PLUGIN_NAME, "Thymer could not store the image.");
        return false;
      }
      if (!collection.setBannerFromBlob(blob)) {
        this._toast(PLUGIN_NAME, "Could not set the collection banner.");
        return false;
      }
      if (mode !== "all") {
        this._toast(PLUGIN_NAME, "Collection default set. Pages that already have their own banner were left alone.", 3500);
        return true;
      }
      let records = [];
      try {
        const list = await collection.getAllRecords?.();
        records = Array.isArray(list) ? list : [];
      } catch {
        records = [];
      }
      let applied = 0;
      for (const rec of records) {
        if (!rec) continue;
        try {
          if (rec.setBannerFromBlob(blob)) applied += 1;
        } catch {
        }
      }
      this._toast(PLUGIN_NAME, `Collection default set. Replaced banners on ${applied} page${applied === 1 ? "" : "s"}.`, 3500);
      return true;
    }
    /**
     * Ask how to apply a collection default. Toaster is not enough — pages with
     * existing banners must not be overwritten silently.
     * @returns {Promise<'empty'|'all'|null>}
     */
    _askCollectionApplyMode() {
      return new Promise((resolve) => {
        let settled = false;
        const finish = /* @__PURE__ */ __name((value) => {
          if (settled) return;
          settled = true;
          window.removeEventListener("keydown", onKey, true);
          try {
            overlay.remove();
          } catch {
          }
          resolve(value);
        }, "finish");
        const onKey = /* @__PURE__ */ __name((e) => {
          if (e.key !== "Escape") return;
          e.preventDefault();
          e.stopPropagation();
          finish(null);
        }, "onKey");
        const overlay = h(
          "div",
          {
            class: `${ROOT_CLASS}-ask`,
            onMouseDown: /* @__PURE__ */ __name((e) => {
              if (e.target === overlay) finish(null);
            }, "onMouseDown")
          },
          h(
            "div",
            {
              class: `${ROOT_CLASS}-ask-card`,
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": `${ROOT_CLASS}-ask-title`
            },
            h("div", { class: `${ROOT_CLASS}-ask-title`, id: `${ROOT_CLASS}-ask-title` }, "Apply collection banner"),
            h(
              "p",
              { class: `${ROOT_CLASS}-ask-msg` },
              "Apply to all pages in this collection, or only pages without a banner / future new pages?"
            ),
            h(
              "div",
              { class: `${ROOT_CLASS}-ask-actions` },
              button({
                label: "Only empty / new pages",
                variant: "primary",
                size: "md",
                onClick: /* @__PURE__ */ __name(() => finish("empty"), "onClick")
              }),
              button({
                label: "Replace banners on all pages",
                variant: "ghost",
                size: "md",
                onClick: /* @__PURE__ */ __name(() => finish("all"), "onClick")
              }),
              button({
                label: "Cancel",
                variant: "ghost",
                size: "md",
                onClick: /* @__PURE__ */ __name(() => finish(null), "onClick")
              })
            )
          )
        );
        window.addEventListener("keydown", onKey, true);
        document.body.appendChild(overlay);
      });
    }
    _renderPanel() {
      if (!this._panelEl) return;
      let conf = {};
      try {
        conf = this.getConfiguration() || {};
      } catch {
        conf = {};
      }
      if (!this._panelTab) this._panelTab = readPanelTab();
      this._panelEl.replaceChildren(panel({ pluginClass: `${ROOT_CLASS}-panel` }, [
        pluginHeaderFromConfig(conf, {
          version: PLUGIN_VERSION,
          scope: this._scopeArgs(),
          killSwitch: {
            on: !this._disabled,
            onToggle: /* @__PURE__ */ __name((nextOn) => {
              void this._settingsStore.setDisabled(!nextOn);
            }, "onToggle")
          },
          feedback: { data: this.data }
        }),
        this._renderPanelTabs(),
        ...this._panelTab === "library" ? this._renderLibraryTab() : this._panelTab === "auto" ? this._renderAutoTab() : this._renderSettingsTab()
      ]));
    }
    /** @param {string} value */
    _setPanelTab(value) {
      this._panelTab = value === "library" ? "library" : value === "auto" ? "auto" : "settings";
      try {
        sessionStorage.setItem(PANEL_TAB_KEY, this._panelTab);
      } catch {
      }
      this._autoEditor = null;
      this._libraryClearConfirm = false;
      this._libraryDeleteKey = null;
      this._libraryPreview = null;
      if (this._panelTab === "auto") this._loadCollections();
      this._renderPanel();
    }
    _renderPanelTabs() {
      const count = this._gallery.length;
      return h(
        "div",
        { class: "tps-tabs", role: "tablist" },
        h("button", {
          type: "button",
          class: "tps-tab",
          role: "tab",
          "aria-pressed": String(this._panelTab === "settings"),
          onClick: /* @__PURE__ */ __name(() => this._setPanelTab("settings"), "onClick")
        }, "Settings"),
        h(
          "button",
          {
            type: "button",
            class: "tps-tab",
            role: "tab",
            "aria-pressed": String(this._panelTab === "library"),
            onClick: /* @__PURE__ */ __name(() => this._setPanelTab("library"), "onClick")
          },
          "Library",
          count ? h("span", { class: "gb-tab-badge" }, String(count)) : null
        ),
        h("button", {
          type: "button",
          class: "tps-tab",
          role: "tab",
          "aria-pressed": String(this._panelTab === "auto"),
          onClick: /* @__PURE__ */ __name(() => this._setPanelTab("auto"), "onClick")
        }, "Auto")
      );
    }
    _renderSettingsTab() {
      const keyInput = h("input", {
        class: "gb-input",
        type: "password",
        autocomplete: "off",
        placeholder: "sk-or-\u2026",
        value: this._settings.apiKey,
        "aria-label": "OpenRouter API key",
        onChange: /* @__PURE__ */ __name((e) => {
          const v = (
            /** @type {HTMLInputElement} */
            e.currentTarget.value.trim()
          );
          if (v === this._settings.apiKey) return;
          this._commitApiKey(v);
        }, "onChange"),
        onBlur: /* @__PURE__ */ __name((e) => {
          const v = (
            /** @type {HTMLInputElement} */
            e.currentTarget.value.trim()
          );
          if (v === this._settings.apiKey) return;
          this._commitApiKey(v);
        }, "onBlur")
      });
      const currentSummary = this._settings.summaryModel;
      const knownSummary = CURATED_SUMMARY_MODELS.some((m) => m.id === currentSummary);
      const summarySelect = h(
        "select",
        {
          class: "gb-input",
          "aria-label": "Summary model",
          onChange: /* @__PURE__ */ __name((e) => {
            const v = (
              /** @type {HTMLSelectElement} */
              e.currentTarget.value.trim()
            );
            this._commitPanelSetting({ summaryModel: v || DEFAULTS.summaryModel });
          }, "onChange")
        },
        ...CURATED_SUMMARY_MODELS.map((m) => h("option", {
          value: m.id,
          selected: currentSummary === m.id
        }, summaryOptionLabel(m.id))),
        knownSummary ? null : h("option", { value: currentSummary, selected: true }, currentSummary)
      );
      return [
        section({
          label: "OpenRouter",
          hint: "One key covers every image model and the page-summary model. Stored in this workspace\u2019s encrypted config \u2014 never published.",
          body: [
            h(
              "div",
              { class: "gb-field-row" },
              h("div", { class: "gb-field-label" }, "API key"),
              h(
                "div",
                { class: "gb-field-desc" },
                "Create one at ",
                h("a", {
                  class: "gb-link",
                  href: "https://openrouter.ai/keys",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, "openrouter.ai/keys"),
                " and paste it here."
              ),
              keyInput
            ),
            h(
              "div",
              { class: "gb-field-row" },
              h("div", { class: "gb-field-label" }, "Summary model"),
              h("div", { class: "gb-field-desc" }, "Pre-fills the prompt from the open page. Off uses the page title alone."),
              summarySelect
            )
          ]
        })
      ];
    }
    _renderLibraryTab() {
      const items = this._gallery;
      const preview = this._libraryPreview;
      const confirm = this._libraryClearConfirm ? h(
        "div",
        { class: "gb-lib-confirm", role: "alertdialog", "aria-label": "Clear library" },
        h("div", { class: "gb-lib-confirm-title" }, "Clear all generations?"),
        h("p", { class: "gb-field-desc" }, "This removes every stashed banner from this device\u2019s library. It does not change page banners already applied."),
        h(
          "div",
          { class: "gb-lib-confirm-actions" },
          button({
            label: "Clear all",
            variant: "danger",
            onClick: /* @__PURE__ */ __name(() => {
              this._revokeGallery({ persist: true });
              this._renderPanel();
            }, "onClick")
          }),
          button({
            label: "Keep them",
            variant: "ghost",
            onClick: /* @__PURE__ */ __name(() => {
              this._libraryClearConfirm = false;
              this._renderPanel();
            }, "onClick")
          })
        )
      ) : h(
        "div",
        { class: "gb-lib-toolbar" },
        button({
          label: "Clear all",
          variant: "ghost",
          disabled: !items.length,
          onClick: /* @__PURE__ */ __name(() => {
            if (!items.length) return;
            this._libraryClearConfirm = true;
            this._libraryDeleteKey = null;
            this._renderPanel();
          }, "onClick")
        })
      );
      const list = !items.length ? h(
        "div",
        { class: "gb-lib-empty" },
        h("div", { class: "gb-lib-empty-title" }, "No generations yet"),
        h(
          "p",
          { class: "gb-lib-empty-copy" },
          "Run Generate Banner from the command palette. Images stay here across relaunch until you remove them."
        )
      ) : h(
        "div",
        { class: "gb-lib-list" },
        ...items.map((item, i) => this._renderLibraryCard(item, i))
      );
      const overlay = preview ? h(
        "div",
        {
          class: "gb-lib-preview",
          onMouseDown: /* @__PURE__ */ __name((e) => {
            if (e.target === e.currentTarget) {
              this._libraryPreview = null;
              this._renderPanel();
            }
          }, "onMouseDown")
        },
        h(
          "div",
          { class: "gb-lib-preview-card", role: "dialog", "aria-modal": "true", "aria-label": "Generation preview" },
          preview.url ? h("img", { src: preview.url, alt: preview.prompt || "Generated banner" }) : null,
          h("div", { class: "gb-lib-prompt" }, preview.prompt || "Prompt was not stored for this generation."),
          ...libraryMetaRows(preview),
          button({
            label: "Close",
            variant: "ghost",
            onClick: /* @__PURE__ */ __name(() => {
              this._libraryPreview = null;
              this._renderPanel();
            }, "onClick")
          })
        )
      ) : null;
      const keepToggle = optionRow({
        type: "checkbox",
        name: "clearGalleryOnClose",
        label: "Clear generations when the dialog closes",
        desc: "Off keeps them here and in the film strip.",
        checked: this._settings.clearGalleryOnClose === "1",
        onChange: /* @__PURE__ */ __name((e) => {
          const on = (
            /** @type {HTMLInputElement} */
            e.currentTarget.checked
          );
          this._commitPanelSetting({ clearGalleryOnClose: on ? "1" : "0" });
        }, "onChange")
      });
      return [
        section({
          label: "Generations",
          hint: "Saved on this device. Remove one, or clear all.",
          body: [h("div", { class: "gb-lib-keep" }, keepToggle), confirm, list, overlay]
        })
      ];
    }
    /** @param {GalleryItem} item @param {number} i */
    _renderLibraryCard(item, i) {
      const key = libraryItemKey(item, i);
      const removing = this._libraryDeleteKey === key;
      return h(
        "div",
        { class: "gb-lib-item" },
        h("button", {
          type: "button",
          class: "gb-lib-thumb",
          "aria-label": `Preview generation ${i + 1}`,
          onClick: /* @__PURE__ */ __name(() => {
            this._libraryPreview = item;
            this._libraryClearConfirm = false;
            this._libraryDeleteKey = null;
            this._renderPanel();
          }, "onClick")
        }, item.url ? h("img", { src: item.url, alt: "" }) : h("span", { class: "gb-field-desc" }, "No preview")),
        h(
          "div",
          { class: "gb-lib-meta" },
          h("div", { class: "gb-lib-prompt" }, item.prompt || "Prompt was not stored for this generation."),
          ...libraryMetaRows(item),
          removing ? h(
            "div",
            { class: "gb-lib-confirm gb-lib-confirm--inline", role: "alertdialog", "aria-label": "Remove generation" },
            h("div", { class: "gb-lib-confirm-title" }, "Remove this generation?"),
            h(
              "div",
              { class: "gb-lib-confirm-actions" },
              button({
                label: "Remove",
                variant: "danger",
                onClick: /* @__PURE__ */ __name(() => {
                  this._removeGalleryItem(item);
                  this._renderPanel();
                }, "onClick")
              }),
              button({
                label: "Keep",
                variant: "ghost",
                onClick: /* @__PURE__ */ __name(() => {
                  this._libraryDeleteKey = null;
                  this._renderPanel();
                }, "onClick")
              })
            )
          ) : button({
            label: "Remove",
            variant: "ghost",
            onClick: /* @__PURE__ */ __name(() => {
              this._libraryDeleteKey = key;
              this._libraryClearConfirm = false;
              this._renderPanel();
            }, "onClick")
          })
        )
      );
    }
    /** @param {GalleryItem} item */
    _removeGalleryItem(item) {
      const idx = this._gallery.indexOf(item);
      if (idx < 0) return;
      try {
        URL.revokeObjectURL(item.url);
      } catch {
      }
      this._gallery.splice(idx, 1);
      if (this._libraryPreview === item) this._libraryPreview = null;
      this._libraryDeleteKey = null;
      const guid = String(item.guid || "").trim();
      if (guid) {
        const next = parseLibrary(this._settings.libraryJson).filter((e) => e.guid !== guid);
        this._writeLibraryJson(next);
      }
    }
    /** Persist from the settings panel — never while the generate dialog is open. */
    /** @param {Record<string, any>} patch */
    _commitPanelSetting(patch) {
      if (this._dialogOpen || this._panelIsOpen()) {
        this._patchSettingsLive(patch);
        return;
      }
      this._updateSettings(patch);
    }
    _registerAutoBannerEvents() {
      const on = this.events && this.events.on ? this.events.on.bind(this.events) : null;
      if (!on) return;
      this._handlerIds.push(on("record.created", (ev) => {
        this._onRecordCreated(ev);
      }));
      this._handlerIds.push(on(
        /** @type {any} */
        "panel.closed",
        () => {
          this._onPanelClosed();
        }
      ));
      this._handlerIds.push(on(
        /** @type {any} */
        "collection.created",
        () => this._loadCollections()
      ));
      this._handlerIds.push(on(
        /** @type {any} */
        "collection.updated",
        () => this._loadCollections()
      ));
      this._handlerIds.push(on(
        /** @type {any} */
        "reload",
        () => {
          this._autoInFlight = /* @__PURE__ */ new Set();
        }
      ));
    }
    /** @param {any} ev */
    _onRecordCreated(ev) {
      if (this._disabled) return;
      let collGuid = "";
      try {
        const coll = ev && typeof ev.getCollection === "function" ? ev.getCollection() : null;
        collGuid = coll && typeof coll.getGuid === "function" ? String(coll.getGuid() || "") : "";
      } catch {
      }
      const rec = ev && typeof ev.getRecord === "function" ? ev.getRecord() : null;
      if (!collGuid && rec) collGuid = recordCollectionGuid(rec);
      const recordGuid = rec && rec.guid ? String(rec.guid) : safeGuid(rec);
      if (!collGuid || !recordGuid) return;
      const entry = getAutoBannerForCollection(this._settings.autoBannerJson, collGuid);
      if (entry.on !== "1") return;
      void this._enqueueAutoBanner(recordGuid, collGuid, rec);
    }
    /**
     * @param {string} recordGuid
     * @param {string} collGuid
     * @param {any} rec
     */
    async _enqueueAutoBanner(recordGuid, collGuid, rec) {
      if (this._disabled) return;
      if (this._autoInFlight.has(recordGuid)) return;
      this._autoInFlight.add(recordGuid);
      try {
        await this._runAutoBanner(recordGuid, collGuid, rec);
      } catch {
      } finally {
        this._autoInFlight.delete(recordGuid);
      }
    }
    /**
     * Fire-and-forget page banner. Does not write settings or libraryJson.
     * @param {string} recordGuid
     * @param {string} collGuid
     * @param {any} rec
     */
    async _runAutoBanner(recordGuid, collGuid, rec) {
      if (this._disabled) return;
      const key = String(this._settings.apiKey || "").trim();
      if (!key) {
        this._toastAutoKeyMissing();
        return;
      }
      const entry = getAutoBannerForCollection(this._settings.autoBannerJson, collGuid);
      if (entry.on !== "1") return;
      let record = rec;
      try {
        const fresh = await this.data.getRecord?.(recordGuid);
        if (fresh) record = fresh;
      } catch {
      }
      if (!record) return;
      let title = safeName(record).trim();
      let stableFor = 0;
      let previous = title;
      const deadline = Date.now() + AUTO_TITLE_WAIT_MS;
      while (Date.now() < deadline) {
        if (title && stableFor >= 1) break;
        await sleep(AUTO_TITLE_POLL_MS);
        if (this._disabled) return;
        let again = null;
        try {
          again = await this.data.getRecord?.(recordGuid);
        } catch {
        }
        if (again) record = again;
        title = safeName(record).trim();
        stableFor = title && title === previous ? stableFor + 1 : 0;
        previous = title;
      }
      if (!title) return;
      const style = resolveBannerStyle(entry.styleId, this._settings);
      const prompt = buildTitleStylePrompt(title, style);
      let referenceDataUrl = "";
      if (entry.referenceBlobGuid) {
        referenceDataUrl = await this._blobGuidToDataUrl(entry.referenceBlobGuid);
      }
      const model = String(this._settings.lastModel || DEFAULT_IMAGE_MODEL).trim() || DEFAULT_IMAGE_MODEL;
      let file = null;
      try {
        const results = await generateImages({
          apiKey: key,
          model,
          prompt,
          n: 1,
          aspectRatio: DEFAULT_ASPECT,
          resolution: DEFAULT_RESOLUTION,
          referenceDataUrl
        });
        file = results[0]?.file || null;
      } catch (err) {
        const msg = String(
          /** @type {any} */
          err?.message || err || "Generation failed"
        );
        this._toast(PLUGIN_NAME, `Auto-banner failed: ${msg}`);
        return;
      }
      if (!file || this._disabled) return;
      let blob = null;
      try {
        blob = await this.data.uploadBlob(file);
      } catch {
        blob = null;
      }
      if (!blob) {
        this._toast(PLUGIN_NAME, "Auto-banner could not store the image.");
        return;
      }
      try {
        const latest = await this.data.getRecord?.(recordGuid);
        if (latest) record = latest;
      } catch {
      }
      if (this._disabled) return;
      try {
        if (!record.setBannerFromBlob(blob)) return;
      } catch {
      }
    }
    _toastAutoKeyMissing() {
      const now = Date.now();
      if (now - this._autoKeyToastAt < 10 * 60 * 1e3) return;
      this._autoKeyToastAt = now;
      this._toast(PLUGIN_NAME, "Auto-banner skipped \u2014 add an OpenRouter API key in Plugin: Generate Banner.");
    }
    /** @param {string} guid @returns {Promise<string>} */
    async _blobGuidToDataUrl(guid) {
      const id = String(guid || "").trim();
      if (!id) return "";
      try {
        const blob = await this.data.getBlobFromPropertyFileValue({
          name: "reference.png",
          error: null,
          guid: id,
          imgData: null,
          imgUrl: null,
          imgClass: null
        });
        const buf = blob ? await blob.download() : null;
        if (!buf) return "";
        const type = (
          /** @type {PluginBlob} */
          blob.contentType || "image/png"
        );
        return await fileToDataUrl2(new File([buf], "reference.png", { type }));
      } catch {
        return "";
      }
    }
    _revokeAutoRefUrls() {
      for (const url of Object.values(this._autoRefUrls)) {
        try {
          URL.revokeObjectURL(url);
        } catch {
        }
      }
      this._autoRefUrls = {};
    }
    /** @param {number} [attempt] */
    _loadCollections(attempt = 0) {
      if (this._collectionsRetryTimer) {
        clearTimeout(this._collectionsRetryTimer);
        this._collectionsRetryTimer = null;
      }
      const retry = /* @__PURE__ */ __name(() => {
        const delay = Math.min(3e3, 400 + attempt * 200);
        this._collectionsRetryTimer = setTimeout(() => this._loadCollections(attempt + 1), delay);
      }, "retry");
      this.data.getAllCollections().then((list) => {
        const arr = Array.isArray(list) ? list : [];
        if (!arr.length) {
          retry();
          return;
        }
        const prevKey = this._collections.map((c) => safeGuid(c)).join(",");
        const nextKey = arr.map((c) => safeGuid(c)).join(",");
        this._collections = arr;
        if (this._autoSelectedGuid && !arr.some((c) => safeGuid(c) === this._autoSelectedGuid)) {
          this._autoSelectedGuid = null;
        }
        if (this._panelEl && this._panelTab === "auto" && prevKey !== nextKey) this._renderPanel();
      }).catch(() => retry());
    }
    /** @returns {any[]} */
    _filteredCollections() {
      const query = this._collectionSearch.trim().toLowerCase();
      return this._collections.filter((collection) => {
        if (!query) return true;
        const name = typeof collection.getName === "function" ? collection.getName() : "";
        return String(name).toLowerCase().includes(query);
      });
    }
    /** @returns {any | null} */
    _selectedCollection() {
      if (!this._autoSelectedGuid) return null;
      return this._collections.find((c) => safeGuid(c) === this._autoSelectedGuid) || null;
    }
    /** @param {string} guid */
    _selectAutoCollection(guid) {
      this._autoSelectedGuid = String(guid || "").trim() || null;
      try {
        sessionStorage.setItem(`${PLUGIN_SLUG}/auto-selected`, this._autoSelectedGuid || "");
      } catch {
      }
      this._autoEditor = null;
      this._renderListRowsIntoPanel();
      this._renderAutoDetailIntoPanel();
    }
    /**
     * Auto-tab edits are workspace-wide. update + pushToAll; no settings write during gen.
     * @param {string} collGuid
     * @param {Partial<import('./settings.js').AutoBannerEntry>} patch
     */
    _commitAutoBannerPatch(collGuid, patch) {
      const guid = String(collGuid || "").trim();
      if (!guid) return;
      const next = patchAutoBannerEntry(this._settings.autoBannerJson, guid, patch);
      this._commitPanelSetting({ autoBannerJson: serializeAutoBannerMap(next) });
      this._autoRulesDirty = true;
      this._renderListRowsIntoPanel();
      this._renderAutoDetailIntoPanel();
    }
    _renderAutoTab() {
      const selected = this._selectedCollection();
      return [
        section({
          label: "Auto banners",
          hint: "Give new pages in a collection an AI banner from their title and a style. Rules apply to the whole workspace and use your OpenRouter key.",
          body: [this._renderAutoLayout(selected)]
        })
      ];
    }
    /** @param {any} selected */
    _renderAutoLayout(selected) {
      const search = h("input", {
        class: "gb-input gb-auto-search",
        type: "search",
        placeholder: "Search collections",
        value: this._collectionSearch,
        "aria-label": "Search collections",
        onInput: /* @__PURE__ */ __name((e) => {
          this._collectionSearch = /** @type {HTMLInputElement} */
          e.currentTarget.value;
          this._renderListRowsIntoPanel();
        }, "onInput")
      });
      return h(
        "div",
        { class: "gb-auto" },
        h(
          "div",
          { class: "gb-auto-toolbar" },
          search,
          button({
            label: "Refresh",
            variant: "ghost",
            onClick: /* @__PURE__ */ __name(() => this._loadCollections(), "onClick")
          })
        ),
        h(
          "div",
          { class: "gb-auto-split" },
          h(
            "div",
            { class: "gb-auto-list", role: "listbox", "aria-label": "Collections" },
            ...this._renderAutoListChildren()
          ),
          this._renderAutoDetail(selected)
        )
      );
    }
    _renderAutoListChildren() {
      const filtered = this._filteredCollections();
      if (!this._collections.length) {
        return [h("div", { class: "gb-auto-empty" }, "Loading collections\u2026")];
      }
      if (!filtered.length) {
        return [h("div", { class: "gb-auto-empty" }, "No matching collections.")];
      }
      return filtered.map((collection) => this._renderListRow(collection));
    }
    _renderListRowsIntoPanel() {
      const list = this._panelEl?.querySelector?.(".gb-auto-list");
      if (!list) return;
      list.replaceChildren(...this._renderAutoListChildren());
    }
    /** Selection only — no color picker. @param {any} collection */
    _renderListRow(collection) {
      const guid = safeGuid(collection);
      const name = typeof collection.getName === "function" ? String(collection.getName() || "") : "(unnamed)";
      const on = guid && guid === this._autoSelectedGuid;
      const entry = getAutoBannerForCollection(this._settings.autoBannerJson, guid);
      const iconClass = this._collectionIconClass(collection);
      return h(
        "button",
        {
          type: "button",
          class: `gb-auto-row${on ? " is-on" : ""}`,
          role: "option",
          "aria-selected": String(!!on),
          onClick: /* @__PURE__ */ __name(() => this._selectAutoCollection(guid), "onClick")
        },
        h("span", { class: `gb-auto-row-icon ti ${iconClass}`, "aria-hidden": "true" }),
        h("span", { class: "gb-auto-row-name" }, name || "(unnamed)"),
        entry.on === "1" ? h("span", { class: "gb-auto-row-flag" }, "On") : null
      );
    }
    /** @param {any} collection */
    _collectionIconClass(collection) {
      try {
        const cfg = collection.getConfiguration && collection.getConfiguration();
        const icon = cfg && typeof cfg.icon === "string" ? cfg.icon : "";
        if (icon) return icon.startsWith("ti-") ? icon : `ti-${icon}`;
      } catch {
      }
      return "ti-folder";
    }
    /** @param {any} selected */
    _renderAutoDetail(selected) {
      if (!selected) {
        return h(
          "div",
          { class: "gb-auto-detail" },
          h("div", { class: "gb-auto-empty" }, "Select a collection to configure auto-banners.")
        );
      }
      const guid = safeGuid(selected);
      const name = typeof selected.getName === "function" ? String(selected.getName() || "") : "Collection";
      const entry = getAutoBannerForCollection(this._settings.autoBannerJson, guid);
      const refUrl = entry.referenceBlobGuid ? this._autoRefUrls[entry.referenceBlobGuid] : "";
      if (entry.referenceBlobGuid && !refUrl) void this._hydrateAutoRefThumb(entry.referenceBlobGuid);
      const fileInput = h("input", {
        type: "file",
        accept: "image/png,image/jpeg,image/jpg,image/webp,image/gif",
        hidden: true,
        "aria-hidden": "true",
        onChange: /* @__PURE__ */ __name((e) => {
          const input = (
            /** @type {HTMLInputElement} */
            e.currentTarget
          );
          const file = input.files && input.files[0];
          input.value = "";
          if (file) void this._setAutoReference(guid, file);
        }, "onChange")
      });
      return h(
        "div",
        { class: "gb-auto-detail" },
        h("div", { class: "gb-auto-detail-title" }, name),
        optionRow({
          type: "checkbox",
          name: "autoBannerOn",
          label: "Auto-generate a banner for new pages",
          desc: "One 21:9 image at 1K from the page title and the style below. Waits until the page has a title.",
          checked: entry.on === "1",
          onChange: /* @__PURE__ */ __name((e) => {
            const on = (
              /** @type {HTMLInputElement} */
              e.currentTarget.checked ? "1" : "0"
            );
            this._commitAutoBannerPatch(guid, { on });
          }, "onChange")
        }),
        h(
          "div",
          { class: "gb-field-row" },
          h("div", { class: "gb-field-label" }, "Style"),
          h(
            "div",
            { class: "gb-auto-styles" },
            ...listBannerStyles(this._settings.customStylesJson).filter((s) => (s.group || "image") === "image" || s.id === "none").map((s) => this._renderAutoStyleChip(guid, s, entry.styleId))
          )
        ),
        this._renderAutoActionChips(guid, entry, refUrl, fileInput),
        this._renderAutoPromptEditor(guid, entry.styleId)
      );
    }
    /**
     * Custom Preset + Upload Reference, built from the same classes and markup as
     * the Generate dialog's tray so the two surfaces are visibly one control set.
     *
     * @param {string} guid
     * @param {{ referenceBlobGuid?: string }} entry
     * @param {string} refUrl
     * @param {HTMLElement} fileInput
     */
    _renderAutoActionChips(guid, entry, refUrl, fileInput) {
      const creating = !!(this._autoEditor && this._autoEditor.mode === "new");
      const toggleNew = /* @__PURE__ */ __name(() => {
        this._autoEditor = creating ? null : { mode: "new" };
        this._renderAutoDetailIntoPanel();
      }, "toggleNew");
      const addChip = h(
        "div",
        {
          class: `${ROOT_CLASS}-style-action${creating ? " is-on" : ""}`,
          role: "button",
          tabindex: "0",
          title: "Custom Preset",
          onClick: toggleNew,
          onKeyDown: /* @__PURE__ */ __name((e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleNew();
            }
          }, "onKeyDown")
        },
        brushIcon(),
        h("span", { class: `${ROOT_CLASS}-style-action-label` }, "Custom Preset")
      );
      const hasRef = !!(entry.referenceBlobGuid && refUrl);
      const pick = /* @__PURE__ */ __name(() => {
        if (!hasRef) fileInput.click();
      }, "pick");
      const uploadChip = h(
        "div",
        {
          class: `${ROOT_CLASS}-style-action${hasRef ? " is-filled" : ""}`,
          role: "button",
          tabindex: "0",
          title: hasRef ? "Reference image" : "Upload Reference",
          "aria-label": hasRef ? "Reference image" : "Upload Reference",
          onClick: pick,
          onKeyDown: /* @__PURE__ */ __name((e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              pick();
            }
          }, "onKeyDown")
        },
        hasRef ? h(
          "div",
          { class: `${ROOT_CLASS}-chip-media` },
          h("img", { class: `${ROOT_CLASS}-chip-thumb`, src: refUrl, alt: "", draggable: "false" }),
          h("button", {
            type: "button",
            class: `${ROOT_CLASS}-chip-x`,
            "aria-label": "Remove reference",
            onClick: /* @__PURE__ */ __name((e) => {
              e.preventDefault();
              e.stopPropagation();
              this._commitAutoBannerPatch(guid, { referenceBlobGuid: "" });
            }, "onClick")
          }, "\xD7")
        ) : uploadRefIcon(),
        h("span", { class: `${ROOT_CLASS}-style-action-label` }, "Upload Reference")
      );
      return h("div", { class: `${ROOT_CLASS}-style-actions is-on gb-auto-actions` }, addChip, uploadChip, fileInput);
    }
    /**
     * The prompt behind the selected style, readable in place and editable without
     * leaving the Auto tab. Uses exactly the same settings keys as the Generate
     * dialog's editor — built-ins get a per-style override, custom styles are
     * rewritten — so the two surfaces can never disagree about what a style says.
     *
     * @param {string} collGuid
     * @param {string} styleId
     */
    _renderAutoPromptEditor(collGuid, styleId) {
      const editor = this._autoEditor;
      const customs = parseCustomStyles(this._settings.customStylesJson);
      const builtin = BUILTIN_STYLES.find((s) => s.id === styleId);
      const custom = customs.find((s) => s.id === styleId);
      const overrides = parseStyleOverrides(this._settings.styleOverridesJson);
      const resolved = resolveBannerStyle(styleId, this._settings);
      const setEditor = /* @__PURE__ */ __name((next) => {
        this._autoEditor = next;
        this._renderAutoDetailIntoPanel();
      }, "setEditor");
      if (editor && editor.mode === "new") {
        const nameInput = (
          /** @type {HTMLInputElement} */
          h("input", {
            class: "gb-input",
            type: "text",
            placeholder: "Style name",
            maxlength: "40",
            "aria-label": "Custom style name"
          })
        );
        const textarea2 = (
          /** @type {HTMLTextAreaElement} */
          h("textarea", {
            class: "gb-input gb-auto-prompt",
            rows: 6,
            placeholder: "Prompt suffix appended after the page title\u2026",
            "aria-label": "Custom style prompt"
          })
        );
        return h(
          "div",
          { class: "gb-field-row gb-auto-editor" },
          h("div", { class: "gb-field-label" }, "New custom style"),
          nameInput,
          textarea2,
          h(
            "div",
            { class: "gb-auto-prompt-actions" },
            button({
              label: "Save",
              variant: "primary",
              onClick: /* @__PURE__ */ __name(() => {
                const name = nameInput.value.trim();
                const snippet = textarea2.value.trim();
                if (!name || !snippet) {
                  this._toast(PLUGIN_NAME, "Give the custom style a name and a prompt.");
                  return;
                }
                const id = `c-${Date.now().toString(36)}`;
                this._commitPanelSetting({ customStylesJson: serializeCustomStyles([...customs, { id, name, snippet }]) });
                this._autoEditor = null;
                this._commitAutoBannerPatch(collGuid, { styleId: id });
              }, "onClick")
            }),
            button({ label: "Cancel", variant: "ghost", onClick: /* @__PURE__ */ __name(() => setEditor(null), "onClick") })
          )
        );
      }
      if (editor && editor.mode === "edit" && editor.id === styleId && (builtin || custom)) {
        const nameInput = custom ? (
          /** @type {HTMLInputElement} */
          h("input", {
            class: "gb-input",
            type: "text",
            value: custom.name,
            maxlength: "40",
            "aria-label": "Custom style name"
          })
        ) : null;
        const textarea2 = (
          /** @type {HTMLTextAreaElement} */
          h("textarea", {
            class: "gb-input gb-auto-prompt",
            rows: 8,
            "aria-label": "Style prompt"
          })
        );
        textarea2.value = resolved.snippet || "";
        return h(
          "div",
          { class: "gb-field-row gb-auto-editor" },
          h("div", { class: "gb-field-label" }, custom ? "Edit custom style" : `Edit prompt \u2014 ${builtin?.name || styleId}`),
          nameInput,
          textarea2,
          h(
            "div",
            { class: "gb-auto-prompt-actions" },
            button({
              label: "Save",
              variant: "primary",
              onClick: /* @__PURE__ */ __name(() => {
                const snippet = textarea2.value;
                if (custom) {
                  const name = (nameInput?.value || "").trim();
                  if (!name) {
                    this._toast(PLUGIN_NAME, "Name required.");
                    return;
                  }
                  const next = customs.map((s) => s.id === styleId ? { ...s, name, snippet } : s);
                  this._commitPanelSetting({ customStylesJson: serializeCustomStyles(next) });
                } else {
                  if (snippet === (builtin?.snippet || "")) delete overrides[styleId];
                  else overrides[styleId] = snippet;
                  this._commitPanelSetting({ styleOverridesJson: serializeStyleOverrides(overrides) });
                }
                setEditor(null);
              }, "onClick")
            }),
            builtin && Object.prototype.hasOwnProperty.call(overrides, styleId) ? button({
              label: "Reset to default",
              variant: "ghost",
              onClick: /* @__PURE__ */ __name(() => {
                delete overrides[styleId];
                this._commitPanelSetting({ styleOverridesJson: serializeStyleOverrides(overrides) });
                setEditor(null);
              }, "onClick")
            }) : null,
            custom ? button({
              label: "Delete",
              variant: "danger",
              onClick: /* @__PURE__ */ __name(() => {
                this._commitPanelSetting({ customStylesJson: serializeCustomStyles(customs.filter((s) => s.id !== styleId)) });
                this._autoEditor = null;
                this._commitAutoBannerPatch(collGuid, { styleId: "none" });
              }, "onClick")
            }) : null,
            button({ label: "Cancel", variant: "ghost", onClick: /* @__PURE__ */ __name(() => setEditor(null), "onClick") })
          )
        );
      }
      const textarea = (
        /** @type {HTMLTextAreaElement} */
        h("textarea", {
          class: "gb-input gb-auto-prompt",
          rows: 5,
          readOnly: true,
          "aria-label": "Style prompt"
        })
      );
      textarea.value = resolved.snippet || "Nothing extra is appended \u2014 the page title is the whole prompt.";
      const overridden = !!builtin && Object.prototype.hasOwnProperty.call(overrides, styleId);
      return h(
        "div",
        { class: "gb-field-row gb-auto-editor" },
        h("div", { class: "gb-field-label" }, "Prompt"),
        h(
          "div",
          { class: "gb-field-desc" },
          `Appended after the page title for ${resolved.name || "this style"}.`,
          overridden ? " Edited from the default." : ""
        ),
        textarea,
        h(
          "div",
          { class: "gb-auto-prompt-actions" },
          styleId !== "none" ? button({ label: "Edit", variant: "ghost", onClick: /* @__PURE__ */ __name(() => setEditor({ mode: "edit", id: styleId }), "onClick") }) : null
        )
      );
    }
    /** Re-render only the Auto detail column — never the whole panel. */
    _renderAutoDetailIntoPanel() {
      const old = this._panelEl?.querySelector?.(".gb-auto-detail");
      if (!old) return;
      old.replaceWith(this._renderAutoDetail(this._selectedCollection()));
    }
    /**
     * @param {string} collGuid
     * @param {{ id: string, name: string, thumb?: string }} style
     * @param {string} selectedId
     */
    _renderAutoStyleChip(collGuid, style, selectedId) {
      const on = style.id === selectedId;
      const src = this.getStyleThumb(style.id) || style.thumb || "";
      return h(
        "button",
        {
          type: "button",
          class: `gb-auto-chip${on ? " is-on" : ""}`,
          title: style.name,
          onClick: /* @__PURE__ */ __name(() => this._commitAutoBannerPatch(collGuid, { styleId: style.id }), "onClick")
        },
        h(
          "div",
          { class: "gb-auto-chip-media" },
          src ? h("img", { src, alt: "", draggable: "false" }) : null
        ),
        h("span", { class: "gb-auto-chip-label" }, style.name)
      );
    }
    /** @param {string} guid */
    async _hydrateAutoRefThumb(guid) {
      const id = String(guid || "").trim();
      if (!id || this._autoRefUrls[id]) return;
      try {
        const blob = await this.data.getBlobFromPropertyFileValue({
          name: "reference.png",
          error: null,
          guid: id,
          imgData: null,
          imgUrl: null,
          imgClass: null
        });
        const buf = blob ? await blob.download() : null;
        if (!buf) return;
        const type = (
          /** @type {PluginBlob} */
          blob.contentType || "image/png"
        );
        this._autoRefUrls[id] = URL.createObjectURL(new Blob([buf], { type }));
        if (this._panelTab === "auto") this._renderAutoDetailIntoPanel();
      } catch {
      }
    }
    /**
     * @param {string} collGuid
     * @param {File} file
     */
    async _setAutoReference(collGuid, file) {
      if (!file || !/^image\/(png|jpeg|jpg|webp|gif)$/i.test(file.type)) {
        this._toast(PLUGIN_NAME, "Use a PNG, JPEG, WebP, or GIF.");
        return;
      }
      if (file.size > 12 * 1024 * 1024) {
        this._toast(PLUGIN_NAME, "Reference image is too large. Use a file under 12 MB.");
        return;
      }
      let stored = "";
      try {
        const blob = await this.data.uploadBlob(file);
        if (blob && blob.guid) stored = String(blob.guid);
      } catch {
      }
      if (!stored) {
        this._toast(PLUGIN_NAME, "Could not store the reference image.");
        return;
      }
      try {
        if (this._autoRefUrls[stored]) URL.revokeObjectURL(this._autoRefUrls[stored]);
      } catch {
      }
      this._autoRefUrls[stored] = URL.createObjectURL(file);
      this._commitAutoBannerPatch(collGuid, { referenceBlobGuid: stored });
    }
  };
  function safeName(record) {
    try {
      return String(record.getName?.() || "");
    } catch {
      return "";
    }
  }
  __name(safeName, "safeName");
  function safeGuid(obj) {
    try {
      if (obj && typeof obj.getGuid === "function") return String(obj.getGuid() || "");
      if (obj && obj.guid) return String(obj.guid);
    } catch {
    }
    return "";
  }
  __name(safeGuid, "safeGuid");
  function recordCollectionGuid(record) {
    if (!record) return "";
    try {
      const coll = typeof record.getCollection === "function" ? record.getCollection() : record.collection;
      if (coll && typeof coll.getGuid === "function") {
        const guid = coll.getGuid();
        if (guid) return String(guid);
      }
    } catch {
    }
    const raw = record.collection_guid || record.collectionGuid || "";
    return raw ? String(raw) : "";
  }
  __name(recordCollectionGuid, "recordCollectionGuid");
  var PANEL_TAB_KEY = `${PLUGIN_SLUG}/panel-tab`;
  function readPanelTab() {
    try {
      const v = sessionStorage.getItem(PANEL_TAB_KEY);
      if (v === "library" || v === "auto") return v;
    } catch {
    }
    return "settings";
  }
  __name(readPanelTab, "readPanelTab");
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  __name(sleep, "sleep");
  function captureSource(record, collection) {
    if (record) {
      return {
        sourceTitle: safeName(record),
        sourceGuid: safeGuid(record),
        sourceKind: "page"
      };
    }
    return {
      sourceTitle: collection?.getName?.() || "",
      sourceGuid: safeGuid(collection),
      sourceKind: "collection"
    };
  }
  __name(captureSource, "captureSource");
  function libraryItemKey(item, i) {
    return `${item.guid || item.createdAt}|${i}`;
  }
  __name(libraryItemKey, "libraryItemKey");
  function libraryKv(label, value) {
    if (!value) return null;
    return h(
      "div",
      { class: "gb-lib-kv" },
      h("span", { class: "gb-lib-k" }, label),
      h("span", { class: "gb-lib-v" }, value)
    );
  }
  __name(libraryKv, "libraryKv");
  function libraryMetaRows(item) {
    const style = String(item.styleName || item.styleId || "").trim();
    const model = String(item.modelName || (item.model ? modelDisplayName(item.model) : "") || "").trim();
    const cost = item.cost == null ? "" : `Billed ${formatUsd(item.cost)}`;
    return [
      libraryKv("Style", style || "None"),
      libraryKv("Model", model),
      libraryKv("Cost", cost),
      libraryKv("Source", librarySourceLine(item))
    ].filter(Boolean);
  }
  __name(libraryMetaRows, "libraryMetaRows");
  function librarySourceLine(item) {
    const kind = item.sourceKind === "collection" ? "Collection" : "Page";
    const title = String(item.sourceTitle || "").trim();
    const when = item.createdAt ? new Date(item.createdAt).toLocaleString() : "";
    const name = title || (item.sourceGuid ? item.sourceGuid.slice(0, 8) : "Unknown source");
    return [kind, name, when].filter(Boolean).join(" \xB7 ");
  }
  __name(librarySourceLine, "librarySourceLine");
  async function bannerToPreview(banner, plugin) {
    if (!banner) return null;
    if (typeof banner === "string") {
      const text = banner.trim();
      if (/^(data:image\/|blob:|https?:)/i.test(text)) return { url: text, file: null };
      return null;
    }
    if (typeof banner !== "object") return null;
    const rec = (
      /** @type {Record<string, any>} */
      banner
    );
    const direct = rec.imgUrl || rec.url || rec.src;
    const guid = rec.guid ? String(rec.guid) : "";
    if (typeof rec.download === "function") {
      try {
        const buf = await rec.download();
        if (buf) {
          const type = rec.contentType || "image/png";
          const file = new File([buf], rec.name || "applied-banner.png", { type });
          return { url: URL.createObjectURL(file), file, guid, revoke: true };
        }
      } catch {
      }
    }
    if (rec.guid && plugin?.data?.getBlobFromPropertyFileValue) {
      try {
        const blob = await plugin.data.getBlobFromPropertyFileValue({
          name: rec.name || "banner.png",
          error: null,
          guid: String(rec.guid),
          imgData: rec.imgData || null,
          imgUrl: typeof direct === "string" ? direct : null,
          imgClass: null
        });
        const buf = blob ? await blob.download() : null;
        if (buf) {
          const type = (
            /** @type {PluginBlob} */
            blob.contentType || "image/png"
          );
          const file = new File([buf], rec.name || "applied-banner.png", { type });
          return { url: URL.createObjectURL(file), file, guid, revoke: true };
        }
      } catch {
      }
    }
    if (typeof direct === "string" && direct) return { url: direct, file: null, guid };
    return null;
  }
  __name(bannerToPreview, "bannerToPreview");
  function fileToDataUrl2(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
      reader.onerror = () => resolve("");
      reader.readAsDataURL(file);
    });
  }
  __name(fileToDataUrl2, "fileToDataUrl");
  async function lineItemText(record) {
    try {
      const items = await record.getLineItems?.(false);
      if (!Array.isArray(items)) return "";
      const skip = /* @__PURE__ */ new Set(["image", "file", "empty", "br", "media"]);
      const parts = [];
      for (const item of items) {
        if (!item || skip.has(item.type)) continue;
        const segs = Array.isArray(item.segments) ? item.segments : [];
        const line = segs.map(segmentText).filter(Boolean).join("");
        if (line) parts.push(line);
        if (parts.join("\n").length > 3e3) break;
      }
      return parts.join("\n").slice(0, 3e3);
    } catch {
      return "";
    }
  }
  __name(lineItemText, "lineItemText");
  function segmentText(seg) {
    if (!seg) return "";
    const t = seg.text;
    if (typeof t === "string") return t;
    if (t && typeof t === "object") return t.title || t.link || "";
    return "";
  }
  __name(segmentText, "segmentText");
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;
