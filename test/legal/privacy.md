# ODG — Privacy Policy / Zásady ochrany osobních údajů

**Version:** 3.0 / **Verze:** 3.0
**Effective date / Účinné od:** [DOPLŇ DATUM SPUŠTĚNÍ]
**Last updated / Poslední aktualizace:** [DOPLŇ DATUM]

---

> ⚠️ **UPOZORNĚNÍ PRO JANA PISKA**: Před publikováním:
> 1. Nech projít advokátem nebo DPO konzultantem specializovaným na GDPR.
> 2. Vlož datum účinnosti.
> 3. Doplň IČO (aktuálně placeholder "XXXXXXXX").
> 4. Doplň název banky v sekci 4.7, pokud je relevantní.
> 5. Doplň zvolenou e-mailovou službu v sekci 4.6.
> 6. Cookie banner na web není třeba, pokud nenasazuješ analytiku.
>
> **Změny ve verzi 3.0:**
> - Adresa Správce údajů aktualizována na Subákova 34/8, 674 01 Třebíč
> - Kontaktní email změněn na info@onedollarguy.com
> - Mollie odstraněna ze seznamu zpracovatelů (používá se pouze Stripe)
> - Self-custody krypto adresy nahrazeny službou NOWPayments OÜ (Estonsko, EU)
> - Hosting GitHub Pages změněn na Cloudflare Pages
> - Backend Cloudflare Workers + databáze Cloudflare D1 + R2 storage

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
- Address: Subákova 34/8, 674 01 Třebíč, Czech Republic
- Business ID (IČO): **XXXXXXXX**
- Email: info@onedollarguy.com

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
| Hashed IP address (SHA-256, salted) | Security, fraud prevention, ToS acceptance proof | (f) Legitimate interest | Hashed at collection; retained 10 years for transaction records |
| ToS version accepted + timestamp | Chargeback defense, contractual record | (f) Legitimate interest, (c) Legal obligation | 10 years |

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
| IP address (hashed) | Security, fraud prevention | (f) Legitimate interest | See section 3.1 |
| Country code (CF-IPCountry) | Localization, sanctions screening | (f) Legitimate interest, (c) Legal obligation | Per-session only |
| Browser type, device | Compatibility | (f) Legitimate interest | 30 days in logs |
| Selected language | UX personalization | (f) Legitimate interest | Stored in visitor's browser only |

### 3.3. Cryptocurrency contributions (via NOWPayments)

When you contribute via cryptocurrency, the transaction is processed by our
cryptocurrency payment provider NOWPayments OÜ (Estonia). The data we receive
from NOWPayments includes:

| Data | Purpose | Legal basis | Retention |
|---|---|---|---|
| Public wallet address (sender) | Transaction verification | (c) Legal obligation | 10 years |
| Transaction hash | Record-keeping | (c) Legal obligation | 10 years |
| Cryptocurrency type and amount | Record-keeping, tax records | (c) Legal obligation | 10 years |
| Fiat equivalent (USD/EUR) | Tax records | (c) Legal obligation | 10 years |

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
- **Purpose:** Processing card, Apple Pay, Google Pay, and Click to Pay payments
- **Legal safeguards:** EU-US Data Privacy Framework (Decision (EU) 2023/1795) and
  Standard Contractual Clauses (Decision (EU) 2021/914)
- **Their Privacy Policy:** https://stripe.com/privacy

### 4.2. Payment Processor — PayPal
- **Entity:** PayPal (Europe) S.à r.l. et Cie, S.C.A.
- **Location:** Luxembourg (EU), with global infrastructure
- **Purpose:** Processing PayPal account payments
- **Legal safeguards:** EU-based; transfers outside EU via SCC and DPF
- **Their Privacy Policy:** https://www.paypal.com/privacy

### 4.3. Cryptocurrency Processor — NOWPayments
- **Entity:** NOWPayments OÜ
- **Location:** Estonia (EU)
- **Purpose:** Processing cryptocurrency contributions
- **Legal safeguards:** EU-based, GDPR directly applicable; registered as a
  virtual currency service provider in Estonia
- **Their Privacy Policy:** https://nowpayments.io/privacy-policy

### 4.4. Hosting and Infrastructure — Cloudflare
- **Entity:** Cloudflare, Inc. (Cloudflare Pages, Workers, D1, R2)
- **Purpose:** Website hosting (Pages), backend logic (Workers),
  donation database (D1), encrypted backups (R2), DNS, DDoS protection,
  geographic IP detection
- **Location:** Global CDN with EU routing for EU visitors; data at rest
  in EU regions where configured
- **Legal safeguards:** EU-US Data Privacy Framework; Cloudflare Data
  Processing Addendum (DPA) signed with Standard Contractual Clauses
- **Their Privacy Policy:** https://www.cloudflare.com/privacypolicy/

### 4.5. Email delivery — [DOPLŇ, např. Resend / Postmark / MailChannels]
- **Purpose:** Sending payment receipts, AML notifications, and responding to inquiries
- **Location:** EU / USA
- **Legal safeguards:** SCC / DPF
- **Note:** Currently under evaluation; will be updated before launch.

### 4.6. Bank
- **Entity:** The Operator's Czech bank (name withheld for security; available
  on request)
- **Purpose:** Receiving and holding funds
- **Legal basis:** Performance of contract (Art. 6(1)(b)) and legal obligation
  (Art. 6(1)(c))

### 4.7. Currency conversion service
- **Entity:** Wise Europe SA / Wise Payments Limited (where applicable)
- **Location:** Belgium / United Kingdom
- **Purpose:** Multi-currency receiving accounts and FX conversion
- **Legal safeguards:** EU/UK GDPR-compliant; UK adequacy decision
- **Note:** Wise receives fund-transfer metadata only, not contributor PII.

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

**Contact for GDPR requests:** info@onedollarguy.com

## 7. Cookie Policy

### 7.1. Cookies on onedollarguy.com
Our website does **not use any tracking or analytics cookies**. We use only
the following browser storage mechanisms, which are not cookies requiring
consent under Art. 5(3) of the ePrivacy Directive:

| Storage | Purpose | Duration |
|---|---|---|
| `localStorage: lang_pref` | Remember language preference | Until user clears |
| `localStorage: country_override` | Remember manual country selection | Until user clears |

A cookie banner is not displayed because no tracking takes place on our website.

### 7.2. Third-party services (when interacting with them)
When you click a payment button and proceed to a payment provider, you leave
our website and enter the provider's domain (e.g.,
**checkout.stripe.com**, **paypal.com**, **nowpayments.io**). Each provider
operates on its own domain with its own privacy and cookie policies. These
cookies are not set by us and are governed by the respective provider's
policies, not this document.

### 7.3. If analytics is added in the future
If we introduce web analytics (e.g., Plausible Analytics — a privacy-friendly
alternative without cookies), we will update this Policy accordingly. If we
ever add cookie-based analytics, we will first implement a cookie banner
compliant with Art. 6(1)(a) GDPR.

## 8. Security

We apply technical and organizational measures in accordance with Art. 32 GDPR:
- HTTPS/TLS encryption for all data in transit
- Access to personal data restricted to the Data Controller only
- Regular infrastructure security updates
- API keys and secrets stored encrypted (Cloudflare Workers secrets)
- Cryptocurrency private keys stored in hardware wallets, not online
- IP addresses are hashed (SHA-256 with secret salt) before storage; raw IPs are not retained
- Sanctioned-country traffic blocked at Cloudflare edge (Russia, Belarus, Iran, North Korea, Syria)
- Webhook signatures verified for all payment providers (Stripe, PayPal, NOWPayments)

## 9. Data Retention

| Data category | Retention period | Legal basis |
|---|---|---|
| Tax records | 10 years | § 32 Act No. 563/1991 (Accounting Act), § 79 Tax Procedure Code |
| AML records | 10 years | § 16 Act No. 253/2008 (AML Act) |
| Email correspondence | 2 years | Legitimate interest |
| Hashed IP records (in transaction logs) | 10 years (with the transaction) | Legal obligation, fraud prevention |
| Webhook logs | 1 year | Legitimate interest, audit trail |

After the retention period, data is either deleted or anonymized.

## 10. Right to Lodge a Complaint

You have the right to lodge a complaint with the supervisory authority in your
country of habitual residence. The competent authority for the Czech Republic is:

- **Office for Personal Data Protection (Úřad pro ochranu osobních údajů)**
- Address: Pplk. Sochora 27, 170 00 Praha 7, Czech Republic
- Web: www.uoou.cz
- Phone: +420 234 665 111

Contributors residing in other EU Member States may also file a complaint with
their national supervisory authority (e.g., BfDI in Germany, CNIL in France,
AEPD in Spain, Garante in Italy, AP in the Netherlands).

## 11. Children's Protection

The Platform is not intended for children under 18. We do not knowingly collect
data from minors. If you believe a minor has used the Platform, please contact
us at info@onedollarguy.com and we will delete the related data.

## 12. Changes to This Policy

We may update this Policy. The effective date will be updated in the document
header. Material changes will be notified on the Platform.

## 13. Contact

For questions regarding personal data protection or to exercise your rights:
- **Email:** info@onedollarguy.com
- **Postal address:** Jan Pisk, Subákova 34/8, 674 01 Třebíč, Czech Republic
- **IČO:** XXXXXXXX

---

# 🇨🇿 ČESKÁ VERZE

## 1. Úvod

Tyto Zásady ochrany osobních údajů popisují, jak Jan Pisk ("Správce údajů" nebo
"my") zpracovává osobní údaje uživatelů a přispěvatelů platformy ODG —
One Dollar Guy ("Platforma", dostupná na onedollarguy.com).

Tyto Zásady jsou v souladu s:
- **Nařízením (EU) 2016/679** — Obecným nařízením o ochraně osobních údajů ("GDPR")
- **Zákonem č. 110/2019 Sb.**, o zpracování osobních údajů (Česká republika)
- **Použitelnými předpisy o ochraně osobních údajů členských států EU**

Platforma je osobní společenský experiment, jehož prostřednictvím Provozovatel
přijímá dobrovolné dary od jednotlivců z celého světa. **Žádné zboží ani služby
nejsou prodávány**; osobní údaje jsou zpracovávány pouze v rozsahu nezbytně
nutném pro zpracování darů, plnění právních povinností a bezpečný provoz Platformy.

## 2. Totožnost Správce údajů

**Správce údajů:**
- Jméno: Jan Pisk
- Adresa: Subákova 34/8, 674 01 Třebíč, Česká republika
- IČO: **XXXXXXXX**
- E-mail: info@onedollarguy.com

Pověřenec pro ochranu osobních údajů (DPO) **nebyl jmenován**, protože rozsah
a povaha zpracování to nevyžaduje podle čl. 37 GDPR.

## 3. Údaje, které shromažďujeme, a účely zpracování

### 3.1. Transakce darů přes poskytovatele platebních služeb

Když poskytnete dar, naši poskytovatelé platebních služeb shromažďují a sdílejí
s námi (přesný soubor údajů závisí na vámi zvoleném poskytovateli):

| Údaj | Účel | Právní základ (čl. 6 GDPR) | Doba uchování |
|---|---|---|---|
| Částka, měna, časové razítko | Evidence, daňové záznamy, AML | c) právní povinnost | 10 let |
| Země (z karty BIN nebo z účtu) | Statistiky, AML | c) právní povinnost | 10 let |
| Posledních 4 číslic karty (kde aplikovatelné) | Prevence podvodů | f) oprávněný zájem | 10 let |
| Typ platební metody | Analytika, prevence podvodů | f) oprávněný zájem | 10 let |
| E-mailová adresa (pouze pokud dobrovolně poskytnete) | Potvrzení platby, dotazy | f) oprávněný zájem | 2 roky |
| ID transakce od poskytovatele | Evidence, sesouhlasení | c) právní povinnost | 10 let |
| Hashovaná IP adresa (SHA-256, solená) | Bezpečnost, prevence podvodů, důkaz souhlasu s ToS | f) oprávněný zájem | Hashováno při sběru; uchováváno 10 let s transakcí |
| Verze ToS + časové razítko souhlasu | Obrana před chargebacky, smluvní záznam | f) oprávněný zájem, c) právní povinnost | 10 let |

**Nezískáváme:** plná čísla karet, CVV kódy, data expirace karet, přístupové
údaje k bankovním účtům ani soukromé klíče ke kryptoměnám. Tyto údaje jsou
zpracovávány výhradně našimi poskytovateli plateb v souladu s PCI-DSS a dalšími
použitelnými standardy.

**Nevyžadujeme** křestní jméno, příjmení, poštovní adresu ani jiné identifikační
údaje k poskytnutí daru. Někteří poskytovatelé platebních služeb mohou tyto
údaje shromažďovat pro vlastní AML účely, ale systematicky je s námi nesdílí.

### 3.2. Interakce s webem

| Údaj | Účel | Právní základ | Doba uchování |
|---|---|---|---|
| IP adresa (hashovaná) | Bezpečnost, prevence podvodů | f) oprávněný zájem | Viz část 3.1 |
| Kód země (CF-IPCountry) | Lokalizace, kontrola sankcí | f) oprávněný zájem, c) právní povinnost | Pouze pro session |
| Typ prohlížeče, zařízení | Kompatibilita | f) oprávněný zájem | 30 dnů v logech |
| Zvolený jazyk | Personalizace UX | f) oprávněný zájem | Pouze v prohlížeči návštěvníka |

### 3.3. Příspěvky v kryptoměnách (přes NOWPayments)

Pokud poskytnete příspěvek v kryptoměně, transakce je zpracována naším
poskytovatelem služeb pro kryptoměny NOWPayments OÜ (Estonsko). Údaje, které
od NOWPayments dostáváme:

| Údaj | Účel | Právní základ | Doba uchování |
|---|---|---|---|
| Veřejná adresa peněženky (odesílatele) | Ověření transakce | c) právní povinnost | 10 let |
| Hash transakce | Evidence | c) právní povinnost | 10 let |
| Typ a částka kryptoměny | Evidence, daňová povinnost | c) právní povinnost | 10 let |
| Fiat ekvivalent (USD/EUR) | Daňová evidence | c) právní povinnost | 10 let |

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
- **Účel:** Zpracování plateb kartou, Apple Pay, Google Pay a Click to Pay
- **Právní záruky:** EU-US Data Privacy Framework (rozhodnutí (EU) 2023/1795) a
  Standardní smluvní doložky (rozhodnutí (EU) 2021/914)
- **Jejich zásady:** https://stripe.com/privacy

### 4.2. Poskytovatel platebních služeb — PayPal
- **Subjekt:** PayPal (Europe) S.à r.l. et Cie, S.C.A.
- **Umístění:** Lucembursko (EU), s globální infrastrukturou
- **Účel:** Zpracování plateb přes PayPal účet
- **Právní záruky:** EU subjekt; přenosy mimo EU přes SCC a DPF
- **Jejich zásady:** https://www.paypal.com/privacy

### 4.3. Zpracovatel kryptoměnových plateb — NOWPayments
- **Subjekt:** NOWPayments OÜ
- **Umístění:** Estonsko (EU)
- **Účel:** Zpracování příspěvků v kryptoměnách
- **Právní záruky:** EU subjekt, GDPR se aplikuje přímo; registrovaný jako
  poskytovatel služeb spojených s virtuálními měnami v Estonsku
- **Jejich zásady:** https://nowpayments.io/privacy-policy

### 4.4. Hosting a infrastruktura — Cloudflare
- **Subjekt:** Cloudflare, Inc. (Cloudflare Pages, Workers, D1, R2)
- **Účel:** Hosting webu (Pages), backendová logika (Workers),
  databáze darů (D1), šifrované zálohy (R2), DNS, ochrana proti DDoS,
  geografická detekce IP
- **Umístění:** Globální CDN s routingem EU pro evropské návštěvníky;
  data v klidu v EU regionech, kde je to nakonfigurováno
- **Právní záruky:** EU-US Data Privacy Framework; Cloudflare Data Processing
  Addendum (DPA) podepsaný se Standardními smluvními doložkami
- **Jejich zásady:** https://www.cloudflare.com/privacypolicy/

### 4.5. E-mailová služba — [DOPLŇ, např. Resend / Postmark / MailChannels]
- **Účel:** Odesílání potvrzení plateb, AML notifikací a odpovědí na dotazy
- **Umístění:** EU / USA
- **Právní záruky:** SCC / DPF
- **Poznámka:** Aktuálně ve výběru; bude doplněno před spuštěním.

### 4.6. Banka
- **Subjekt:** Česká banka Provozovatele (název uchováván z bezpečnostních důvodů;
  dostupný na vyžádání)
- **Účel:** Přijímání a držení prostředků
- **Právní základ:** Plnění smlouvy (čl. 6 odst. 1 písm. b)) a právní povinnost
  (čl. 6 odst. 1 písm. c))

### 4.7. Služba pro směnu měn
- **Subjekt:** Wise Europe SA / Wise Payments Limited (kde aplikovatelné)
- **Umístění:** Belgie / Spojené království
- **Účel:** Multi-currency účty a směna měn
- **Právní záruky:** Soulad s EU/UK GDPR; rozhodnutí o přiměřenosti pro UK
- **Poznámka:** Wise dostává pouze metadata o převodu prostředků, nikoli osobní
  údaje přispěvatelů.

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

**Kontakt pro GDPR žádosti:** info@onedollarguy.com

## 7. Zásady cookies

### 7.1. Cookies na onedollarguy.com
Náš web **nepoužívá žádné tracking ani analytické cookies**. Používáme pouze
následující mechanismy úložiště prohlížeče, které nejsou cookies vyžadujícími
souhlas podle čl. 5 odst. 3 směrnice ePrivacy:

| Úložiště | Účel | Doba |
|---|---|---|
| `localStorage: lang_pref` | Zapamatování jazykové preference | Do vymazání uživatelem |
| `localStorage: country_override` | Zapamatování ručně zvolené země | Do vymazání uživatelem |

Cookie banner se nezobrazuje, protože na našem webu neprobíhá žádný tracking.

### 7.2. Služby třetích stran (při interakci s nimi)
Když kliknete na platební tlačítko a přejdete k poskytovateli platebních služeb,
opouštíte náš web a vstupujete na doménu poskytovatele (např.
**checkout.stripe.com**, **paypal.com**, **nowpayments.io**). Každý poskytovatel
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
- IP adresy jsou hashovány (SHA-256 se solí) před uložením; surové IP nejsou uchovávány
- Provoz ze sankcionovaných zemí blokován na úrovni Cloudflare edge
  (Rusko, Bělorusko, Írán, Severní Korea, Sýrie)
- Webhookové podpisy ověřovány pro všechny poskytovatele plateb (Stripe, PayPal, NOWPayments)

## 9. Doba uchování údajů

| Kategorie údajů | Doba uchování | Právní základ |
|---|---|---|
| Daňové záznamy | 10 let | § 32 zákona č. 563/1991 Sb. (o účetnictví), § 79 daňového řádu |
| AML záznamy | 10 let | § 16 zákona č. 253/2008 Sb. (AML zákon) |
| E-mailová korespondence | 2 roky | Oprávněný zájem |
| Hashované IP záznamy (v transakční evidenci) | 10 let (s transakcí) | Právní povinnost, prevence podvodů |
| Webhookové logy | 1 rok | Oprávněný zájem, audit trail |

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
na info@onedollarguy.com a související údaje smažeme.

## 12. Změny Zásad

Tyto Zásady můžeme aktualizovat. Datum účinnosti bude aktualizováno v záhlaví
dokumentu. Podstatné změny budou oznámeny na Platformě.

## 13. Kontakt

V otázkách týkajících se ochrany osobních údajů nebo pro uplatnění vašich práv:
- **E-mail:** info@onedollarguy.com
- **Poštovní adresa:** Jan Pisk, Subákova 34/8, 674 01 Třebíč, Česká republika
- **IČO:** XXXXXXXX

---

**End of document / Konec dokumentu**
