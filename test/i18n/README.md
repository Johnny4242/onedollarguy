# i18n — Překlady pro One Dollar Guy

Tato složka obsahuje překlady stránky. **`cs.json` je zdroj pravdy** (výchozí jazyk) — pokud chybí jakýkoli klíč v jiném jazyce, použije se český. Pokud náhodou selže i cs.json, aplikace spadne na nouzové defaulty zapečené v `js/app.js` (konstanta `FALLBACK`) — stránka se nerozbije, ale bude anglicky a bez obsahu.

## Struktura souboru

Každý jazyk = jeden JSON soubor. Název souboru je ISO kód jazyka (dvě písmena), případně `kód-REGION.json` pro regionální varianty. Soubor má čtyři hlavní části:

- **`_meta`** — metadata o jazyce (nepřekládá se, jen se doplní)
- **`payment`** — měna, přednastavené částky **a platební brány pro tuto zemi**
- **`ui`** — všechny texty viditelné na stránce
- **`terms`** — pole odstavců s podmínkami
- **`faq`** — pole otázek a odpovědí

Detailní popis všech klíčů s komentáři najdeš v `_template.json`.

## Jak přidat nový jazyk / novou zemi

1. Zkopíruj `_template.json` na `xx.json`, kde `xx` je ISO kód (např. `de.json`, `fr.json`).
2. Vyplň `_meta` (kód, název, vlajka, regiony).
3. Nastav `payment` — měnu, 3 rozumné částky **a seznam platebních bran dostupných v dané zemi**.
4. Přelož všechny texty v `ui`, `terms` a `faq` podle vzoru v `cs.json`.
5. Smaž řádky začínající `_comment` — to jsou jen nápovědy.
6. Zkontroluj JSON validátorem (např. `python3 -c "import json; json.load(open('xx.json'))"`).
7. Nic víc v kódu měnit nemusíš — aplikace si nový soubor automaticky najde, když uživatel klikne na vlajku. (V `index.html` ale doplň odpovídající tlačítko `<button class="lb" onclick="go('xx')">…</button>`, pokud pro daný jazyk ještě není.)

## Platební brány podle země

Na rozdíl od předchozí verze, kde bylo všech 8 bran napevno v HTML, teď se brány **generují z JSONu**. Pole `payment.methods` je pole objektů:

```json
"methods": [
  { "id": "card",     "icon": "💳", "name": "Karta" },
  { "id": "applepay", "icon": "",   "name": "Apple Pay" },
  { "id": "gpay",     "icon": "G",  "name": "Google Pay" },
  { "id": "paypal",   "icon": "🅿",  "name": "PayPal" },
  { "id": "transfer", "icon": "🏦", "name": "Převod" },
  { "id": "qr",       "icon": "▦",  "name": "QR platba" },
  { "id": "crypto",   "icon": "₿",  "name": "Crypto" }
]
```

- `id` — identifikátor (stačí libovolný string; doporučené: `card`, `applepay`, `gpay`, `paypal`, `transfer`, `qr`, `crypto`).
- `icon` — text nebo emoji zobrazené jako ikona.
- `name` — popisek vedle ikony. **U brand bran (PayPal, Apple Pay, Google Pay) dej stejný text ve všech jazycích** — značka se nepřekládá. U obecných názvů (Karta/Card, Převod/Transfer) přelož.

Pro různé země můžeš zvolit různou sadu — např. v CZ nedává smysl nabízet PayPal, v US zase QR platbu. Každý JSON si diktuje svou sadu.

## Regionální varianty

Jeden jazykový kód může zahrnovat více zemí se **stejnou** měnou i texty (např. `es.json` pro ES/MX/AR/CL/CO). Ale pozor — často budou potřeba regionální varianty, protože se liší **platební brány**:

- **`de.json`** zatím pokrývá DE/AT/CH. Pokud CH potřebuje CHF místo EUR, vytvoř samostatně `de-CH.json`.
- **`fr.json`** pokrývá FR; pokud BE preferuje jiné brány, vytvoř `fr-BE.json`.
- **`es-ES.json` vs `es-LATAM.json`** — pokud se liší brány nebo slovník.
- **`pt-PT.json` vs `pt-BR.json`** — odlišná ortografie, slovník i brány (PIX v Brazílii).
- **`zh-CN.json`** (WeChat Pay, Alipay), **`zh-TW.json`** a **`zh-HK.json`** (jiné brány).

Pojmenovávej soubory podle ISO 639-1 (jazyk) + ISO 3166-1 alpha-2 (země), oddělené pomlčkou: `zh-CN.json`, `pt-BR.json`.

## Co se NEPŘEKLÁDÁ (zůstává napevno)

- **`"ONE DOLLAR GUY"`** — značka, zůstává všude anglicky (napevno v HTML).
- **`"FAQ"`** — nadpis sekce, všude stejný (napevno v HTML).
- **`"#PER ASPERA AD ASTRA"`** — latinské motto (napevno v HTML).
- **`"Choose your language"`** — na jazykové obrazovce schválně zůstává anglicky (napevno v HTML).
- **Názvy sociálních sítí** (X, Instagram, Facebook, WhatsApp) — nepřekládají se.
- **Názvy platebních bran** (PayPal, Apple Pay, Google Pay, Crypto, …) — zadej stejný `name` napříč jazyky.
- **E-mailové adresy, URL, doména `onedollarguy.com`**.

## Co se PŘEKLÁDÁ (včetně drobností)

- Tlačítka v horní liště: `nav_lang` (jazyk), `nav_share` (sdílet).
- Tooltipy: `share_title`, `close_title`.
- Popup motta: `astra_q`, `astra_a` (překlad „přes překážky ke hvězdám").
- Kontaktní tlačítko a text popupu: `kontakt_btn`, `kontakt_msg`.
- Text, který se sdílí po úspěšném daru: `share_tweet` (obsahuje `{url}`).
- Patička: `ft_privacy`, `ft_soon` (u Instagramu), `tmt` (Terms/Podmínky).
- Obecné názvy plateb: `"Karta"/"Card"`, `"Převod"/"Transfer"`.
- Celý obsah podmínek (`terms[]`).
- Všechny FAQ otázky a odpovědi (`faq[]`).

## HTML v překladech

Některé klíče povolují HTML — většinou `<b>` a `<br>`. Vždy zachovej HTML strukturu z `cs.json`:

- `legal` **musí** obsahovat `<span class="tl" onclick="openT(event)">…</span>` — je to klikací odkaz na podmínky.
- `tag` obvykle obsahuje `<br><span class="tagline-opt">…</span>`.
- `sub`, `ap1`, `ap4` obsahují `<b>`.
- `astra_a` obvykle obsahuje `<br>` uprostřed.

## Placeholdery

- `{p}` v klíči `pct` — nahradí se procentuálním podílem lidstva.
- `{a}` v klíči `btn` — nahradí se částkou s měnou.
- `{url}` v klíči `share_tweet` — nahradí se URL stránky.

Nehraj si s pořadím placeholderů, vždy musí zůstat `{p}`, `{a}`, `{url}`.

## Rychlá validace

```bash
python3 -c "import json; json.load(open('xx.json')); print('OK')"
```

Nebo přes Node:

```bash
node -e "JSON.parse(require('fs').readFileSync('xx.json')); console.log('OK')"
```

## Co když se cs.json nenačte?

Dřív to byl problém (stránka zobrazila prázdné texty). Teď:

1. Loader v `app.js` automaticky **jednou zopakuje** pokus (po 400 ms).
2. Pokud selže i retry, aplikace spadne na **nouzové defaulty** zapečené přímo v JS (konstanta `FALLBACK`) — stránka bude fungovat, jen v angličtině a s chudším obsahem.
3. Všechny volání DOMu používají bezpečné settery (`setText`, `setHtml`), takže neexistující klíče neshodí stránku.

Pokud přesto na cs.json narážíš, zkontroluj:

- Že server správně servíruje JSON s `Content-Type: application/json` (ne `text/html`).
- Že soubor **je validní JSON** — jedna přebytečná čárka a fetch se zlomí.
- V konzoli prohlížeče hledej `[i18n] load cs.json attempt X failed` — ukáže to přesný důvod.
