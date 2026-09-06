# Generate Banner

Global Thymer plugin that generates AI banners for any page or collection —
write a prompt, pick a style and a model, generate up to four candidates, crop,
apply. Seventy-two built-in styles across Image, Pattern, Texture and Artists,
plus auto-banners for new pages in any collection you choose.

Plugins are made with 🤍 for the Thymer community. Free to use, fork, and hack on for <a href="LICENSE" target="_blank" rel="noopener noreferrer">non-commercial use</a>.

Plug-ins take effort, hours, and credits to build. If you find them helpful for you and your workflows, a star ⭐ on the repo, a <a href="https://buymeacoffee.com/akaready" target="_blank" rel="noopener noreferrer">coffee</a> ☕, and a link back to <a href="https://akaready.com" target="_blank" rel="noopener noreferrer">@akaready</a> 🔗 all go a long way. Optional of course, but always appreciated.

Enjoy! 🙏

<p align="left">
  <a href="https://buymeacoffee.com/akaready" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="40" alt="Buy me a coffee">
  </a>
</p>

&nbsp;

## 📦 Install

**Recommended:** Use the [Thymer Plugins Manager](https://github.com/ahpatel/thymer-plugins-manager) and install via [this repo's URL](https://github.com/akaready/thymer-generate-banner) for automatic updates.

**Manual:** copy <a href="plugin.js" target="_blank" rel="noopener noreferrer"><code>plugin.js</code></a> and <a href="plugin.json" target="_blank" rel="noopener noreferrer"><code>plugin.json</code></a> from this repo into Thymer's plugin editor.

&nbsp;

## 🛠️ Setup

1. Create an <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer">OpenRouter API key</a>. One key covers every image model and the page-summary model.
2. Open **Plugin: Generate Banner** from the command palette and paste it under **OpenRouter**. The key is stored in this workspace's encrypted plugin config and mirrored on this device — it is never published with the plugin.

Image generation is billed by OpenRouter per image. The model picker shows a speed meter, a `$` cost meter and the live per-image price; after a successful run the billed cost appears under the preview slots.

&nbsp;

## ✨ What It Does

- **Generate Banner** (command palette) opens a two-column dialog on the current page or collection: prompt on the left, styles on the right.
- Pre-fills the prompt from the open page using a small summary model (default: Gemini 2.5 Flash). Set the summary model to **Off** to skip the chat call and use the page title alone.
- Generates 1–4 candidates per click into a film strip. Click one to preview it large, drag the crop frame, then **Apply to Page**.
- **72 built-in styles in four groups**, 18 each, every one with a native 21:9 preview:
  - **Image** — Cinematic, Editorial, Painterly, Ukiyo-e, Neon noir, Blueprint, Pixel, Charcoal… Restyle *your* subject; the chips all show the same kettle so you see the treatment change, not the subject.
  - **Pattern** — Terrazzo, Seigaiha, Ikat, Kilim, Gingham, Damask, Topographic, Arabesque… Seamless edge-to-edge repeats, no focal object.
  - **Texture** — Concrete, Handmade paper, Parchment, Slate, Brushed metal, Frosted glass, Leather, Velvet, Wood grain… Material surfaces, not scenes containing them.
  - **Artists** — Van Gogh, Monet, Klimt, Kandinsky, Mondrian, af Klint, Hokusai, Vermeer, Turner, Bosch, Cézanne, Beardsley… Borrow the technique and palette; the prompt explicitly forbids swapping your subject for the artist's famous work.
- **Custom presets.** Save your own prompt suffix from the dialog, or edit any built-in's prompt in place — per-style overrides, resettable to the default.
- **Reference image.** Drop an image onto the Upload Reference chip to send it as visual guidance to models that accept one.
- **Library tab.** Every generation is kept as a workspace image until you remove it. Preview, re-apply, or clear all; a toggle discards them automatically when the dialog closes if you prefer.
- **Auto tab.** Turn on auto-banners per collection: every new page gets a banner from its title plus the style you pick, with an optional reference image. Rules apply to the whole workspace. The banner waits until the page actually has a title — it never generates for "Untitled".
- The Auto column shows the selected style's full prompt in place and lets you edit it, reset it, or create a new custom style without leaving the panel.

&nbsp;

## ⚙️ How It Works

- All generation goes through OpenRouter's images API with your key, straight from the browser. If the browser blocks the request (CORS / network) the plugin says so in a toast rather than failing silently.
- A style is a **prompt suffix** appended after your prompt. Image and Artist styles share a lead that keeps the subject, forbids polyptychs, split panels and lettering — at 21:9 the models otherwise love to compose triptychs — and only then applies the treatment. Pattern and Texture styles are self-contained edge-to-edge descriptions.
- The 72 previews are generated by a committed script (`scripts/gen-style-thumbs.mjs`) from the exact same prompts the styles use, then encoded to 256×110 WebP and inlined — about 390 KB for the whole catalogue.
- Settings follow the shared fleet model: a device follows the synced baseline until you edit here, at which point edits go device-local; the scope pill in the header shows which, and **Apply to all devices** pushes them up. Auto-banner rules are workspace-wide and always pushed.
- Edits made while the settings panel is open are staged live and committed once when the panel closes — Thymer reloads a plugin on every config save, so this is what keeps the panel from redrawing under you mid-edit.

&nbsp;

## 📝 Important Implementation Notes

- **The subject is the point.** Every Image and Artist preview is the same silver stovetop kettle on purpose. If you regenerate previews, keep that constant or the grid stops being comparable.
- **Regenerating previews:** `OPENROUTER_API_KEY=… node scripts/gen-style-thumbs.mjs --group texture,artist` (or `--only <id>`, `--force` to redo everything). It enforces a 500 KB total budget and prints a per-preview size table.
- **Adding a built-in style:** each group must hold exactly 18 — the catalogue throws at load otherwise, so a half-added group cannot reach a workspace. Keep IDs stable; users' overrides and auto-rules key on them.
- Never push `plugin.json` over a live install to update it: a config push replaces `custom` wholesale, which holds the API key slot and the auto-rules. Version metadata self-syncs on load.

&nbsp;

## 📊 Anonymous Usage Counter

This plugin pings a <a href="https://www.goatcounter.com/" target="_blank" rel="noopener noreferrer">privacy-respecting counter</a> on first install and once per day of active use. It exists so I can see which plugins are worth continuing to invest in — both "did anyone install it" and "is anyone still using it after a week." Combined with the coffee donations, this is what tells me whether to keep building. It tracks the plugin slug only, no other telemetry or user data, and you can see exactly what I see on the <a href="https://thymer-plugins.goatcounter.com" target="_blank" rel="noopener noreferrer">public dashboard</a>.

**Opt out:** Do Not Track, or `localStorage.setItem('tps-telemetry-opt-out','1')` in the console.
