# ODG — Privacy Policy / Zásady ochrany osobních údajů

**Version:** 2.0 / **Verze:** 2.0
**Effective date / Účinné od:** [DOPLŇ DATUM SPUŠTĚNÍ]
**Last updated / Poslední aktualizace:** [DOPLŇ DATUM]

---

> ⚠️ **UPOZORNĚNÍ PRO JANA PISKA**: Před publikováním:
> 1. Nech projít advokátem nebo DPO konzultantem specializovaným na GDPR.
> 2. Vlož datum účinnosti.
> 3. Doplň IČO (aktuálně placeholder "XXXXXXXX").
> 4. Doplň název banky v sekci 4.7, pokud je relevantní.
> 5. Cookie banner na web není třeba, pokud nenasazuješ analytiku.

---

# 🇬🇧 ENGLISH VERSION

## 1. Introduction

This Privacy Policy describes how Jan Pisk (the "Data Controller" or "we")
processes personal data of users and contributors of the ODG — One Dollar Guy
platform ("Platform", available at onedollarguy.com).

This Policy complies with:
- **Regulation (EU) 2016/679** — General Data Protection Regulation ("GDPR")
- **Act No. 110/2019 Coll.**, on the Processing of Personal Data (Czech Republic)
- **Applicable EU member state data protection laws**

The Platform is a personal social experiment through which the Operator receives
voluntary gifts from individuals worldwide. **No products or services are sold**;
personal data is processed only to the extent strictly necessary to process gifts,
comply with legal obligations, and operate the Platform securely.

## 2. Identity of the Data Controller

**Data Controller:**
- Name: Jan Pisk
- Address: Křížkovského 334/10, 674 01 Třebíč, Czech Republic
- Business ID (IČO): **XXXXXXXX**
- Email: honzapisk@gmail.com

A Data Protection Officer (DPO) has **not been appointed**, as the scale and
nature of processing does not require it under Article 37 GDPR.

## 3. Data We Collect and Purposes of Processing

### 3.1. Gift transactions via payment processors

When you make a gift, our payment processors collect and share with us (the
exact set of data depends on which processor you choose):

| Data | Purpose | Legal basis (GDPR Art. 6) | Retention |
|---|---|---|---|
| Amount, currency, timestamp | Record-keeping, tax records, AML | (c) Legal obligation | 10 years |
| Country (from card BIN or account country) | Statistics, AML compliance | (c) Legal obligation | 10 years |
| Last 4 digits of payment card (where applicable) | Fraud prevention | (f) Legitimate interest | 10 years |
| Payment method type | Analytics, fraud prevention | (f) Legitimate interest | 10 years |
| Email address (only if voluntarily provided) | Payment receipt, support inquiries | (f) Legitimate interest | 2 years |
| Transaction ID from processor | Record-keeping, reconciliation | (c) Legal obligation | 10 years |

**We do NOT receive:** full card numbers, CVV codes, card expiration dates,
bank account credentials, or cryptocurrency private keys. These are handled
exclusively by our payment providers under PCI-DSS and other applicable standards.

**We do NOT require** first name, last name, postal address, or any other
identifying information for the gift to be made. Some payment processors may
collect this information for their own AML purposes, but they do not
systematically share it with us.

### 3.2. Website interaction

| Data | Purpose | Legal basis | Retention |
|---|---|---|---|
| IP address | Security, fraud prevention | (f) Legitimate interest | 30 days |
| Browser type, device | Compatibility | (f) Legitimate interest | 30 days |
| Selected language | UX personalization | (f) Legitimate interest | Stored in visitor's browser only |

### 3.3. Cryptocurrency contributions (self-custody)

When you contribute via cryptocurrency to one of our addresses:

| Data | Purpose | Legal basis | Retention |
|---|---|---|---|
| Public wallet address (sender) | Transaction verification | (c) Legal obligation | 10 years |
| Transaction hash | Record-keeping | (c) Legal obligation | 10 years |
| Amount in cryptocurrency | Record-keeping, tax records | (c) Legal obligation | 10 years |

We cannot link blockchain addresses to a real identity unless you voluntarily
provide it (e.g., by email).

### 3.4. Email correspondence

If you contact us, we process your email address and message content on the
basis of our legitimate interest (Art. 6(1)(f) GDPR) to respond to inquiries.
Retained for up to 2 years.

### 3.5. AML / large gifts

For gifts reaching AML-sensitive thresholds (typically €10,000 single or
aggregate over 12 months), we or our payment providers may be obliged to
collect additional data (proof of identity, source of funds). Legal basis:
Art. 6(1)(c) GDPR (legal obligation under Act No. 253/2008 Coll. and
Directive (EU) 2015/849). Retention: 10 years from the end of the business
relationship or the transaction.

## 4. Recipients of Your Data (Processors)

We share data with the following categories of processors:

### 4.1. Payment Processor — Stripe
- **Entity:** Stripe Payments Europe, Ltd.
- **Location:** Ireland (EU), with infrastructure in the United States
- **Purpose:** Processing gifts
- **Legal safeguards:** EU-US Data Privacy Framework (Decision (EU) 2023/1795) and
  Standard Contractual Clauses (Decision (EU) 2021/914)
- **Their Privacy Policy:** https://stripe.com/privacy

### 4.2. Payment Processor — Mollie
- **Entity:** Mollie B.V.
- **Location:** The Netherlands (EU)
- **Purpose:** Processing gifts
- **Legal safeguards:** EU-based, GDPR directly applicable
- **Their Privacy Policy:** https://www.mollie.com/privacy

### 4.3. Payment Processor — PayPal
- **Entity:** PayPal (Europe) S.à r.l. et Cie, S.C.A.
- **Location:** Luxembourg (EU), with global infrastructure
- **Purpose:** Processing gifts
- **Legal safeguards:** EU-based; transfers outside EU via SCC and DPF
- **Their Privacy Policy:** https://www.paypal.com/privacy

### 4.4. Hosting — GitHub Pages (Microsoft Corporation)
- **Purpose:** Website hosting
- **Location:** USA (with EU datacenters)
- **Legal safeguards:** EU-US Data Privacy Framework

### 4.5. Backend — Cloudflare Workers
- **Purpose:** Payment webhook processing, rate limiting
- **Location:** Global CDN, EU routing for EU visitors
- **Legal safeguards:** EU-US Data Privacy Framework

### 4.6. Email delivery — [DOPLŇ, např. Resend / Postmark / MailerLite]
- **Purpose:** Sending payment receipts and responding to inquiries
- **Location:** EU / USA
- **Legal safeguards:** SCC / DPF
- **Note:** Currently under evaluation; will be updated before launch.

### 4.7. Bank
- **Entity:** The Operator's Czech bank (name withheld for security; available
  on request)
- **Purpose:** Receiving and holding funds
- **Legal basis:** Performance of contract (Art. 6(1)(b)) and legal obligation
  (Art. 6(1)(c))

### 4.8. Tax authorities
- **Entity:** Financial Administration of the Czech Republic (Finanční správa ČR)
- **Purpose:** Compliance with Czech tax law
- **Legal basis:** Art. 6(1)(c) GDPR (legal obligation)

## 5. International Data Transfers

Some of our processors are located outside the European Economic Area (EEA).
Transfers to such third countries are conducted under:

- **EU-US Data Privacy Framework** (Commission Decision (EU) 2023/1795 of 10 July 2023)
  for US-based recipients
- **Standard Contractual Clauses** (Commission Decision (EU) 2021/914 of 4 June 2021)
  where DPF does not apply
- Supplementary technical and organizational measures (encryption in transit and at rest)

## 6. Your Rights Under GDPR

You have the following rights regarding your personal data:

| Right | Article GDPR | How to exercise |
|---|---|---|
| Access your data | Art. 15 | Email us; we respond within 30 days |
| Rectification | Art. 16 | Email us with correct data |
| Erasure ("right to be forgotten") | Art. 17 | Email us; note: tax/AML records must be retained 10 years |
| Restriction of processing | Art. 18 | Email us |
| Data portability | Art. 20 | Email us; we provide machine-readable JSON |
| Object to processing | Art. 21 | Email us |
| Withdraw consent (for consent-based processing) | Art. 7(3) | Email us |
| Lodge a complaint with a supervisory authority | Art. 77 | See section 10 |

We will respond within **30 days** of receiving your request (extendable by
2 months for complex requests, with notification).

## 7. Cookie Policy

### 7.1. Cookies on onedollarguy.com
Our website **does not use any tracking or analytics cookies**. We use only
the following browser storage mechanisms, which are not classified as cookies
requiring consent under Article 5(3) of the ePrivacy Directive:

| Storage | Purpose | Retention |
|---|---|---|
| `localStorage: lang_pref` | Remember language preference | Until cleared by user |

No consent banner is displayed because no tracking takes place on our website.

### 7.2. Third-party services (when you interact with them)
When you click a payment button and proceed to a payment provider, you leave our
website and enter the provider's domain (e.g., **checkout.stripe.com**,
**mollie.com**, **paypal.com**). Each provider operates on its own domain
with its own privacy policy and cookie practices. Those cookies are not set
by us and are governed by the provider's policies, not this document.

### 7.3. If analytics is added in the future
If we introduce website analytics (e.g., Plausible Analytics, a privacy-friendly,
cookie-less alternative), we will update this Policy accordingly. If we ever
add cookie-based analytics, we will first implement a consent banner compliant
with Article 6(1)(a) GDPR.

## 8. Security

We implement technical and organizational measures consistent with Art. 32 GDPR:
- HTTPS/TLS encryption for all data in transit
- Access to personal data limited to the Data Controller
- Regular security updates of infrastructure
- API keys and secrets stored encrypted (Cloudflare Workers secrets)
- Cryptocurrency private keys stored in hardware wallets, not online
- Public repository data (if any) is pseudonymized (session IDs hashed, no emails
  or names)

## 9. Data Retention

| Data category | Retention period | Legal basis |
|---|---|---|
| Tax-related records | 10 years | § 32 Act No. 563/1991 Coll. (Accounting Act), § 79 Tax Code |
| AML-related records | 10 years | § 16 Act No. 253/2008 Coll. (AML Act) |
| Email correspondence | 2 years | Legitimate interest |
| IP logs | 30 days | Security, fraud prevention |

After retention period expires, data is either deleted or anonymized.

## 10. Right to Complaint

You have the right to lodge a complaint with the supervisory authority of your
country of habitual residence. The competent authority for the Czech Republic is:

- **Úřad pro ochranu osobních údajů** (Czech Data Protection Authority)
- Address: Pplk. Sochora 27, 170 00 Praha 7, Czech Republic
- Web: www.uoou.cz
- Phone: +420 234 665 111

Contributors resident in other EU Member States may also lodge a complaint with
their national supervisory authority (e.g., BfDI in Germany, CNIL in France,
AEPD in Spain, Garante in Italy, AP in the Netherlands).

## 11. Protection of Minors

The Platform is not intended for persons under 18 years of age. We do not
knowingly collect data from minors. If you believe a minor has used the
Platform, please contact us at honzapisk@gmail.com and we will delete the
related data.

## 12. Changes to This Policy

We may update this Policy. The effective date will be updated in the header.
Material changes will be notified on the Platform.

## 13. Contact

For questions regarding personal data protection or to exercise your rights:
- **Email:** honzapisk@gmail.com
- **Postal address:** Jan Pisk, Křížkovského 334/10, 674 01 Třebíč, Czech Republic
- **IČO:** XXXXXXXX

---

# 🇨🇿 ČESKÁ VERZE

## 1. Úvod

Tyto Zásady ochrany osobních údajů popisují, jak Jan Pisk ("Správce údajů"
nebo "my") zpracovává osobní údaje uživatelů a přispěvatelů platformy ODG —
One Dollar Guy ("Platforma", dostupná na onedollarguy.com).

Tyto Zásady jsou v souladu s:
- **Nařízením (EU) 2016/679** — obecné nařízení o ochraně osobních údajů ("GDPR")
- **Zákonem č. 110/2019 Sb.**, o zpracování osobních údajů
- **Platnými právními předpisy členských států EU o ochraně osobních údajů**

Platforma je osobní společenský experiment, jehož prostřednictvím Provozovatel
přijímá dobrovolné dary od jednotlivců z celého světa. **Neprodává se žádné
zboží ani služby**; osobní údaje jsou zpracovávány pouze v rozsahu nezbytně
nutném pro zpracování darů, splnění zákonných povinností a bezpečný provoz
Platformy.

## 2. Totožnost správce údajů

**Správce údajů:**
- Jméno: Jan Pisk
- Adresa: Křížkovského 334/10, 674 01 Třebíč, Česká republika
- IČO: **XXXXXXXX**
- E-mail: honzapisk@gmail.com

Pověřenec pro ochranu osobních údajů (DPO) **nebyl jmenován**, jelikož rozsah
a povaha zpracování to nevyžaduje podle čl. 37 GDPR.

## 3. Jaké údaje zpracováváme a za jakým účelem

### 3.1. Transakce darů přes poskytovatele platebních služeb

Když poskytnete dar, naši poskytovatelé platebních služeb sbírají a sdílejí
s námi (přesný rozsah údajů závisí na zvoleném poskytovateli):

| Údaj | Účel | Právní základ (čl. 6 GDPR) | Doba uchování |
|---|---|---|---|
| Částka, měna, čas | Evidence, daňová evidence, AML | c) právní povinnost | 10 let |
| Země (dle BIN karty nebo země účtu) | Statistika, AML | c) právní povinnost | 10 let |
| Poslední 4 číslice karty (je-li relevantní) | Prevence podvodů | f) oprávněný zájem | 10 let |
| Typ platební metody | Analytika, prevence podvodů | f) oprávněný zájem | 10 let |
| E-mailová adresa (pouze pokud je dobrovolně poskytnuta) | Potvrzení platby, odpovědi na dotazy | f) oprávněný zájem | 2 roky |
| ID transakce od poskytovatele | Evidence, párování | c) právní povinnost | 10 let |

**Neobdržíme:** celá čísla karet, CVV kódy, data platnosti karet, přístupové
údaje k bankovním účtům ani soukromé klíče ke kryptoměnám. Tyto údaje jsou
zpracovávány výhradně našimi poskytovateli platebních služeb v souladu s PCI-DSS
a dalšími platnými standardy.

**Nevyžadujeme** jméno, příjmení, poštovní adresu ani jiné identifikační údaje
pro poskytnutí daru. Někteří poskytovatelé platebních služeb mohou tyto údaje
shromažďovat pro vlastní AML účely, ale systematicky je s námi nesdílí.

### 3.2. Interakce s webem

| Údaj | Účel | Právní základ | Doba uchování |
|---|---|---|---|
| IP adresa | Bezpečnost, prevence podvodů | f) oprávněný zájem | 30 dnů |
| Typ prohlížeče, zařízení | Kompatibilita | f) oprávněný zájem | 30 dnů |
| Zvolený jazyk | Personalizace UX | f) oprávněný zájem | pouze v prohlížeči uživatele |

### 3.3. Příspěvky v kryptoměnách (self-custody)

Pokud přispějete v kryptoměně na jednu z našich adres:

| Údaj | Účel | Právní základ | Doba uchování |
|---|---|---|---|
| Veřejná adresa peněženky (odesílatele) | Ověření transakce | c) právní povinnost | 10 let |
| Hash transakce | Evidence | c) právní povinnost | 10 let |
| Částka v kryptoměně | Evidence, daňová povinnost | c) právní povinnost | 10 let |

Blockchainové adresy nedokážeme propojit se skutečnou identitou, pokud ji
dobrovolně neposkytnete (např. e-mailem).

### 3.4. E-mailová korespondence

Pokud nás kontaktujete, zpracováváme vaši e-mailovou adresu a obsah zprávy na
základě našeho oprávněného zájmu (čl. 6 odst. 1 písm. f) GDPR) odpovědět na dotaz.
Uchováváme až 2 roky.

### 3.5. AML / velké dary

U darů dosahujících AML-citlivé úrovně (obvykle 10 000 € jednorázově nebo v
součtu za 12 měsíců) můžeme my nebo naši poskytovatelé platebních služeb být
povinni shromáždit dodatečné údaje (doklad totožnosti, doklad o zdroji
prostředků). Právní základ: čl. 6 odst. 1 písm. c) GDPR (právní povinnost podle
zákona č. 253/2008 Sb. a směrnice (EU) 2015/849). Doba uchování: 10 let od
ukončení obchodního vztahu nebo transakce.

## 4. Příjemci vašich údajů (zpracovatelé)

Údaje sdílíme s následujícími kategoriemi zpracovatelů:

### 4.1. Poskytovatel platebních služeb — Stripe
- **Subjekt:** Stripe Payments Europe, Ltd.
- **Umístění:** Irsko (EU), s infrastrukturou v USA
- **Účel:** Zpracování darů
- **Právní záruky:** EU-US Data Privacy Framework (rozhodnutí (EU) 2023/1795) a
  Standardní smluvní doložky (rozhodnutí (EU) 2021/914)
- **Jejich zásady:** https://stripe.com/privacy

### 4.2. Poskytovatel platebních služeb — Mollie
- **Subjekt:** Mollie B.V.
- **Umístění:** Nizozemsko (EU)
- **Účel:** Zpracování darů
- **Právní záruky:** EU subjekt, GDPR se aplikuje přímo
- **Jejich zásady:** https://www.mollie.com/privacy

### 4.3. Poskytovatel platebních služeb — PayPal
- **Subjekt:** PayPal (Europe) S.à r.l. et Cie, S.C.A.
- **Umístění:** Lucembursko (EU), s globální infrastrukturou
- **Účel:** Zpracování darů
- **Právní záruky:** EU subjekt; přenosy mimo EU přes SCC a DPF
- **Jejich zásady:** https://www.paypal.com/privacy

### 4.4. Hosting — GitHub Pages (Microsoft Corporation)
- **Účel:** Hostování webu
- **Umístění:** USA (s EU datacentry)
- **Právní záruky:** EU-US Data Privacy Framework

### 4.5. Backend — Cloudflare Workers
- **Účel:** Zpracování platebních webhooků, rate limiting
- **Umístění:** Globální CDN, routing EU pro EU návštěvníky
- **Právní záruky:** EU-US Data Privacy Framework

### 4.6. E-mailová služba — [DOPLŇ, např. Resend / Postmark / MailerLite]
- **Účel:** Odesílání potvrzení plateb a odpovědí na dotazy
- **Umístění:** EU / USA
- **Právní záruky:** SCC / DPF
- **Poznámka:** Aktuálně ve výběru; bude doplněno před spuštěním.

### 4.7. Banka
- **Subjekt:** Česká banka Provozovatele (název uchováván z bezpečnostních důvodů;
  dostupný na vyžádání)
- **Účel:** Přijímání a držení prostředků
- **Právní základ:** Plnění smlouvy (čl. 6 odst. 1 písm. b)) a právní povinnost
  (čl. 6 odst. 1 písm. c))

### 4.8. Správce daně
- **Subjekt:** Finanční správa České republiky
- **Účel:** Plnění daňových povinností
- **Právní základ:** čl. 6 odst. 1 písm. c) GDPR (právní povinnost)

## 5. Mezinárodní předávání údajů

Někteří naši zpracovatelé se nachází mimo Evropský hospodářský prostor (EHP).
Předávání do třetích zemí probíhá na základě:

- **EU-US Data Privacy Framework** (rozhodnutí Komise (EU) 2023/1795 ze dne
  10. července 2023) pro příjemce v USA
- **Standardní smluvní doložky** (rozhodnutí Komise (EU) 2021/914 ze dne
  4. června 2021), kde se DPF neuplatní
- Doplňkových technických a organizačních opatření (šifrování při přenosu
  i při uložení)

## 6. Vaše práva podle GDPR

Máte tato práva ohledně svých osobních údajů:

| Právo | Článek GDPR | Jak uplatnit |
|---|---|---|
| Přístup k údajům | čl. 15 | E-mail; odpovíme do 30 dnů |
| Oprava | čl. 16 | E-mail se správnými údaji |
| Výmaz ("právo být zapomenut") | čl. 17 | E-mail; pozn.: daňová/AML evidence musí být uchovávána 10 let |
| Omezení zpracování | čl. 18 | E-mail |
| Přenositelnost údajů | čl. 20 | E-mail; poskytneme strojově čitelný JSON |
| Námitka proti zpracování | čl. 21 | E-mail |
| Odvolat souhlas (u zpracování založeného na souhlasu) | čl. 7 odst. 3 | E-mail |
| Podat stížnost u dozorového úřadu | čl. 77 | Viz část 10 |

Odpovíme do **30 dnů** od přijetí žádosti (s možností prodloužení o 2 měsíce
u složitých žádostí, s oznámením).

## 7. Zásady cookies

### 7.1. Cookies na onedollarguy.com
Náš web **nepoužívá žádné tracking ani analytické cookies**. Používáme pouze
následující mechanismy úložiště prohlížeče, které nejsou cookies vyžadujícími
souhlas podle čl. 5 odst. 3 směrnice ePrivacy:

| Úložiště | Účel | Doba |
|---|---|---|
| `localStorage: lang_pref` | Zapamatování jazykové preference | Do vymazání uživatelem |

Cookie banner se nezobrazuje, protože na našem webu neprobíhá žádný tracking.

### 7.2. Služby třetích stran (při interakci s nimi)
Když kliknete na platební tlačítko a přejdete k poskytovateli platebních služeb,
opouštíte náš web a vstupujete na doménu poskytovatele (např.
**checkout.stripe.com**, **mollie.com**, **paypal.com**). Každý poskytovatel
funguje na své vlastní doméně s vlastními zásadami ochrany osobních údajů a
používání cookies. Tyto cookies nejsou nastaveny námi a řídí se zásadami daného
poskytovatele, nikoli tímto dokumentem.

### 7.3. Pokud bude v budoucnu přidána analytika
Pokud zavedeme webovou analytiku (např. Plausible Analytics — alternativu
přátelskou k soukromí bez cookies), odpovídajícím způsobem aktualizujeme tyto
Zásady. Pokud někdy přidáme analytiku založenou na cookies, nejdříve
implementujeme cookie banner v souladu s čl. 6 odst. 1 písm. a) GDPR.

## 8. Bezpečnost

Uplatňujeme technická a organizační opatření v souladu s čl. 32 GDPR:
- Šifrování HTTPS/TLS pro veškerá data při přenosu
- Přístup k osobním údajům omezen pouze na správce údajů
- Pravidelné bezpečnostní aktualizace infrastruktury
- API klíče a tajemství uloženy šifrovaně (Cloudflare Workers secrets)
- Soukromé klíče ke kryptoměnám uloženy v hardwarových peněženkách, ne online
- Data ve veřejném repozitáři (pokud nějaká) jsou pseudonymizovaná (ID sezení
  hašováno, žádné e-maily ani jména)

## 9. Doba uchování údajů

| Kategorie údajů | Doba uchování | Právní základ |
|---|---|---|
| Daňové záznamy | 10 let | § 32 zákona č. 563/1991 Sb. (o účetnictví), § 79 daňového řádu |
| AML záznamy | 10 let | § 16 zákona č. 253/2008 Sb. (AML zákon) |
| E-mailová korespondence | 2 roky | Oprávněný zájem |
| IP záznamy | 30 dnů | Bezpečnost, prevence podvodů |

Po uplynutí doby uchování jsou údaje buď smazány, nebo anonymizovány.

## 10. Právo podat stížnost

Máte právo podat stížnost u dozorového úřadu vaší země obvyklého pobytu.
Příslušným úřadem pro Českou republiku je:

- **Úřad pro ochranu osobních údajů**
- Adresa: Pplk. Sochora 27, 170 00 Praha 7, Česká republika
- Web: www.uoou.cz
- Telefon: +420 234 665 111

Přispěvatelé s pobytem v jiných členských státech EU mohou podat stížnost také
u svého národního dozorového úřadu (např. BfDI v Německu, CNIL ve Francii,
AEPD ve Španělsku, Garante v Itálii, AP v Nizozemsku).

## 11. Ochrana dětí

Platforma není určena dětem mladším 18 let. Vědomě neshromažďujeme údaje od
nezletilých. Pokud se domníváte, že nezletilý Platformu použil, kontaktujte nás
na honzapisk@gmail.com a související údaje smažeme.

## 12. Změny Zásad

Tyto Zásady můžeme aktualizovat. Datum účinnosti bude aktualizováno v záhlaví
dokumentu. Podstatné změny budou oznámeny na Platformě.

## 13. Kontakt

V otázkách týkajících se ochrany osobních údajů nebo pro uplatnění vašich práv:
- **E-mail:** honzapisk@gmail.com
- **Poštovní adresa:** Jan Pisk, Křížkovského 334/10, 674 01 Třebíč, Česká republika
- **IČO:** XXXXXXXX

---

**End of document / Konec dokumentu**
