# Aprint website

Static, dependency-free product site for GitHub Pages, with a straightforward light layout and translations in Brazilian Portuguese, English, and Spanish. The language follows the browser, falling back to English for unsupported languages. A manually selected language is saved locally and takes precedence on subsequent visits.

## Preview locally

Open `index.html` in a browser. The release API requires network access; if it is unavailable, the download button uses the last known release (`v1.2.0`).

## Publish with GitHub Pages

Publish this directory as the site root (or copy its contents to the root of a dedicated Pages repository), then enable Pages for the selected branch and folder in repository settings. The release lookup uses the public GitHub API and the downloads point to GitHub Releases. For visitors to download the installer, the Aprint repository and its release must be publicly accessible.

The product screenshots are stored in `assets/`. The folder path visible in the capture settings screenshot has been replaced with a generic example.

The site favicon and brand mark use the application icon from `assets/AppIcon.png`.
