# Website copy and translations

- `en.json` is the English source catalog.
- `et.json` contains Estonian copy. Keep the same keys in both files.
- Keys are the original English text so copy can be translated in place without changing the page components.
- The `t()` helper falls back to the English source text if a locale entry is missing.
- The header language control saves the selected locale in the browser.

When adding or changing visible copy, add its English key and each locale value to these JSON files, then render it through `useI18n().t()` (or the `t` function passed to a child component).
