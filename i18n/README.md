# i18n — Překlady pro One Dollar Guy

Tato složka obsahuje překlady stránky. **`cs.json` je zdroj pravdy** (výchozí jazyk) — pokud chybí jakýkoli klíč v jiném jazyce, použije se český.

## Struktura souboru

Každý jazyk = jeden JSON soubor. Název souboru je ISO kód jazyka (dvě písmena), případně `kód-REGION.json` pro regionální varianty. Soubor má tři hlavní části:

- **`_meta`** — metadata o jazyce (nepřekládá se, jen se doplní)
- **`payment`** — měna a přednastavené částky
- **`ui`** — všechny texty viditelné na stránce
- **`faq`** — pole otázek a odpovědí

Detailní popis všech klíčů s komentáři najdeš v `_template.json`.

## Jak přidat nový jazyk

1. Zkopíruj `_template.json` na `xx.json`, kde `xx` je ISO kód (např. `de.json`, `fr.json`).
2. Vyplň `_meta` (kód, název, vlajka, regiony).
3. Nastav `payment` — správnou měnu a 3 rozumné přednastavené částky.
4. Přelož všechny texty v `ui` a `faq` podle vzoru v `cs.json`.
5. Smaž řádky začínající `_comment` — to jsou jen nápovědy.
6. Zkontroluj JSON validátorem (např. `python3 -c "import json; json.load(open('xx.json'))"`).
7. Nic víc v kódu měnit nemusíš — aplikace si nový soubor automaticky najde, když uživatel klikne na vlajku.

## Regionální varianty

Jeden jazykový kód může zahrnovat více zemí s **stejnou** měnou i texty (např. `es.json` pro ES/MX/AR/CL/CO). Ale pozor:

- **`de.json`** zatím pokrývá DE/AT/CH. Pokud CH potřebuje CHF místo EUR, vytvoř samostatně `de-CH.json`.
- **`fr.json`** pokrývá FR; pokud bude BE chtít EUR s jinou frází, vytvoř `fr-BE.json`.
- **`nl.json`** pokrývá NL; pro BE flámsky viz `nl-BE.json`.
- **`es-ES.json` vs `es-LATAM.json`** — pokud se liší slovník.
- **`pt-PT.json` vs `pt-BR.json`** — odlišná ortografie a slovník.
- **`ar-Gulf.json` vs `ar-Standard.json`** — MSA vs zálivové dialekty.
- **`zh-CN.json`** (zjednodušené), **`zh-TW.json`** a **`zh-HK.json`** (tradiční).

Pojmenovávej soubory podle ISO 639-1 (jazyk) + ISO 3166-1 alpha-2 (země), oddělené pomlčkou: `zh-CN.json`, `pt-BR.json`.

## Co NEpřekládat

- `"ONE DOLLAR GUY"` — značka, zůstává všude anglicky.
- `"Choose your language"` — na jazykové obrazovce schválně zůstává anglicky.
- `"#PER ASPERA AD ASTRA"` — latinské motto.
- Názvy sociálních sítí (X, Instagram, Facebook, WhatsApp).
- E-mailové adresy, URL, doména `onedollarguy.com`.

## Co přeložit (i když vypadá jako citát)

- `"přes překážky ke hvězdám"` — překlad latinského motta v řeči toho jazyka.
- Celý text kontaktního popupu.
- Texty v podmínkách (terms modal).

## HTML v překladech

Některé klíče povolují HTML — většinou `<b>` a `<br>`. Vždy zachovej HTML strukturu z `cs.json`:

- `legal` **musí** obsahovat `<span class="tl" onclick="openT(event)">…</span>` — je to klikací odkaz na podmínky.
- `tag` obvykle obsahuje `<br><span class="tagline-opt">…</span>`.
- `sub`, `ap1`, `ap4` obsahují `<b>`.

## Placeholders

- `{p}` v klíči `pct` — nahradí se procentuálním podílem lidstva.
- `{a}` v klíči `btn` — nahradí se částkou s měnou.

Nehraj si s pořadím placeholderů, vždy musí zůstat `{p}` a `{a}`.

## Rychlá validace

```bash
python3 -c "import json; json.load(open('xx.json')); print('OK')"
```

Nebo přes Node:

```bash
node -e "JSON.parse(require('fs').readFileSync('xx.json')); console.log('OK')"
```
