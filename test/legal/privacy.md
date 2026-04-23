# ODG — Privacy Policy / Zásady ochrany osobních údajů

**Version:** 1.0 / **Verze:** 1.0
**Effective date / Účinné od:** [DOPLŇ DATUM SPUŠTĚNÍ]
**Last updated / Poslední aktualizace:** [DOPLŇ DATUM]

---

> ⚠️ **UPOZORNĚNÍ PRO JANA PISKA**: Před publikováním:
> 1. Nech projít advokátem nebo DPO konzultantem specializovaným na GDPR.
> 2. Doplň reálnou doménu a email.
> 3. Ověř kompletní seznam zpracovatelů (Stripe, Cloudflare, GitHub, Resend atd.).
> 4. Přidej cookie banner + seznam cookies na web.

---

# 🇬🇧 ENGLISH VERSION

## 1. Introduction

This Privacy Policy describes how Jan Pisk (the "Data Controller" or "we") processes
personal data of users and contributors of the ODG — One Dollar Guy platform
("Platform", available at onedollarguy.com).

This Policy complies with:
- **Regulation (EU) 2016/679** — General Data Protection Regulation ("GDPR")
- **Act No. 110/2019 Coll.**, on the Processing of Personal Data (Czech Republic)
- **Applicable EU member state data protection laws**

## 2. Identity of the Data Controller

**Data Controller:**
- Name: Jan Pisk
- Address: Křížkovského 334/10, 674 01 Třebíč, Czech Republic
- Email: honzapisk@gmail.com

A Data Protection Officer (DPO) has **not been appointed**, as the scale and nature
of processing does not require it under Article 37 GDPR.

## 3. Data We Collect and Purposes of Processing

### 3.1. Direct contributions via payment processor

When you make a contribution, our payment processor **Stripe** collects and shares
with us:

| Data | Purpose | Legal basis (GDPR Art. 6) | Retention |
|---|---|---|---|
| First name, last name | Certificate generation | (b) Performance of contract | 10 years (tax records) |
| Email address | Certificate delivery | (b) Performance of contract | 10 years |
| Country (from card BIN) | Statistics, AML compliance | (c) Legal obligation | 10 years |
| Amount, currency, timestamp | Record-keeping, tax records | (c) Legal obligation | 10 years |
| Last 4 digits of payment card | Fraud prevention | (f) Legitimate interest | 10 years |
| Payment method type | Analytics | (f) Legitimate interest | 10 years |

**We do NOT receive:** full card numbers, CVV codes, card expiration dates, or
bank account information. These are handled exclusively by Stripe under PCI-DSS
compliance.

### 3.2. Website interaction

| Data | Purpose | Legal basis | Retention |
|---|---|---|---|
| IP address | Security, fraud prevention | (f) Legitimate interest | 30 days |
| Browser type, device | Compatibility | (f) Legitimate interest | 30 days |
| Selected language | UX personalization | (f) Legitimate interest | Stored in browser only |

### 3.3. Crypto contributions (self-custody)

When you contribute via cryptocurrency to one of our addresses:

| Data | Purpose | Legal basis | Retention |
|---|---|---|---|
| Public wallet address | Transaction verification | (c) Legal obligation | 10 years |
| Transaction hash | Record-keeping | (c) Legal obligation | 10 years |
| Amount in cryptocurrency | Record-keeping, tax records | (c) Legal obligation | 10 years |

We cannot link blockchain addresses to a real identity unless you voluntarily provide
it (e.g., by email).

### 3.4. Email correspondence

If you contact us, we process your email address and message content on the basis of
our legitimate interest (Art. 6(1)(f) GDPR) to respond to inquiries. Retained for up
to 2 years.

## 4. Recipients of Your Data (Processors)

We share data with the following categories of processors:

### 4.1. Payment Processor — Stripe
- **Entity:** Stripe Payments Europe, Ltd.
- **Location:** Ireland (EU), with infrastructure in the United States
- **Purpose:** Processing contributions
- **Legal safeguards:** EU-US Data Privacy Framework (Decision (EU) 2023/1795) and
  Standard Contractual Clauses (Decision (EU) 2021/914)
- **Their Privacy Policy:** https://stripe.com/privacy

### 4.2. Email Service — [TBD: Resend, Postmark, or similar]
- **Purpose:** Sending Certificate emails
- **Location:** EU/USA
- **Legal safeguards:** SCC

### 4.3. Hosting — GitHub Pages (Microsoft Corporation)
- **Purpose:** Website hosting
- **Location:** USA (with EU datacenters)
- **Legal safeguards:** EU-US Data Privacy Framework

### 4.4. Backend — Cloudflare Workers
- **Purpose:** Payment webhook processing
- **Location:** Global CDN, EU routing for EU visitors
- **Legal safeguards:** EU-US Data Privacy Framework

### 4.5. Tax authorities
- **Entity:** Financial Administration of the Czech Republic (Finanční správa ČR)
- **Purpose:** Compliance with tax law
- **Legal basis:** Art. 6(1)(c) GDPR (legal obligation)

### 4.6. Bank
- **Entity:** [YOUR BANK]
- **Purpose:** Receiving funds
- **Legal basis:** Art. 6(1)(b) GDPR

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
| Erasure ("right to be forgotten") | Art. 17 | Email us; note: tax records must be retained 10 years |
| Restriction of processing | Art. 18 | Email us |
| Data portability | Art. 20 | Email us; we provide machine-readable JSON |
| Object to processing | Art. 21 | Email us |
| Withdraw consent (for consent-based processing) | Art. 7(3) | Email us |
| Lodge a complaint with a supervisory authority | Art. 77 | See section 10 |

We will respond within **30 days** of receiving your request (extendable by
2 months for complex requests, with notification).

## 7. Cookie Policy

### 7.1. Cookies on onedollarguy.com
Our website **does not use any tracking or analytics cookies**. We use only the
following browser storage mechanisms, which are not classified as cookies requiring
consent under Article 5(3) of the ePrivacy Directive:

| Storage | Purpose | Retention |
|---|---|---|
| `localStorage: lang_pref` | Remember language preference | Until cleared by user |

No consent banner is displayed because no tracking takes place on our website.

### 7.2. Third-party services (when you interact with them)
When you click "Donate" and proceed to our payment processor, you leave our website
and enter **checkout.stripe.com**. Stripe operates on its own domain with its own
privacy policy and cookie practices. Those cookies are not set by us and are
governed by Stripe's policies, not this document.

### 7.3. If analytics is added in the future
If we introduce website analytics (e.g., Plausible Analytics, a privacy-friendly,
cookie-less alternative), we will update this Policy accordingly. If we ever add
cookie-based analytics, we will first implement a consent banner compliant with
Article 6(1)(a) GDPR.

## 8. Security

We implement technical and organizational measures consistent with Art. 32 GDPR:
- HTTPS/TLS encryption for all data in transit
- Access to personal data limited to the Data Controller
- Regular security updates of infrastructure
- API keys and secrets stored encrypted (Cloudflare Workers secrets)
- Public repository data is pseudonymized (session IDs hashed, no emails or names)

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

- **Úřad pro ochranu osobních údajů (Office for Personal Data Protection)**
- Address: Pplk. Sochora 27, 170 00 Praha 7, Czech Republic
- Website: www.uoou.cz
- Phone: +420 234 665 111

## 11. Children's Privacy

The Platform is not intended for children under the age of 18. We do not knowingly
collect data from minors. If you believe a minor has used the Platform, please
contact us at honzapisk@gmail.com and we will delete the associated data.

## 12. Changes to This Policy

We may update this Privacy Policy. The effective date will be updated at the top of
the document. Material changes will be announced on the Platform.

## 13. Contact

For any data protection inquiries or to exercise your rights:
- Email: honzapisk@gmail.com
- Postal address: Jan Pisk, Křížkovského 334/10, 674 01 Třebíč, Czech Republic

---

# 🇨🇿 ČESKÁ VERZE

## 1. Úvod

Tyto Zásady ochrany osobních údajů popisují, jakým způsobem Jan Pisk ("správce
údajů" nebo "my") zpracovává osobní údaje uživatelů a přispěvatelů platformy
ODG — One Dollar Guy ("Platforma", dostupná na [DOMÉNA]).

Tyto Zásady jsou v souladu s:
- **Nařízením (EU) 2016/679** — obecné nařízení o ochraně osobních údajů ("GDPR")
- **Zákonem č. 110/2019 Sb.**, o zpracování osobních údajů
- **Platnými právními předpisy členských států EU o ochraně osobních údajů**

## 2. Totožnost správce údajů

**Správce údajů:**
- Jméno: Jan Pisk
- Adresa: Křížkovského 334/10, 674 01 Třebíč, Česká republika
- E-mail: honzapisk@gmail.com

Pověřenec pro ochranu osobních údajů (DPO) **nebyl jmenován**, jelikož rozsah
a povaha zpracování to nevyžaduje podle čl. 37 GDPR.

## 3. Jaké údaje zpracováváme a za jakým účelem

### 3.1. Příspěvky přes poskytovatele platebních služeb

Když poskytnete příspěvek, náš poskytovatel platebních služeb **Stripe** sbírá
a sdílí s námi:

| Údaj | Účel | Právní základ (čl. 6 GDPR) | Doba uchování |
|---|---|---|---|
| Jméno, příjmení | Generování certifikátu | b) plnění smlouvy | 10 let (daňová evidence) |
| E-mailová adresa | Doručení certifikátu | b) plnění smlouvy | 10 let |
| Země (dle BIN karty) | Statistika, AML | c) právní povinnost | 10 let |
| Částka, měna, čas | Evidence, daňová evidence | c) právní povinnost | 10 let |
| Poslední 4 číslice karty | Prevence podvodů | f) oprávněný zájem | 10 let |
| Typ platební metody | Analytika | f) oprávněný zájem | 10 let |

**Neobdržíme:** celé číslo karty, CVV kód, datum platnosti karty, ani údaje o
bankovním účtu. Tyto jsou zpracovávány výhradně Stripe v souladu s PCI-DSS.

### 3.2. Interakce s webem

| Údaj | Účel | Právní základ | Doba uchování |
|---|---|---|---|
| IP adresa | Bezpečnost, prevence podvodů | f) oprávněný zájem | 30 dnů |
| Typ prohlížeče, zařízení | Kompatibilita | f) oprávněný zájem | 30 dnů |
| Zvolený jazyk | Personalizace UX | f) oprávněný zájem | pouze v prohlížeči uživatele |

### 3.3. Krypto příspěvky (self-custody)

Pokud přispějete v kryptoměně:

| Údaj | Účel | Právní základ | Doba uchování |
|---|---|---|---|
| Veřejná adresa peněženky | Ověření transakce | c) právní povinnost | 10 let |
| Hash transakce | Evidence | c) právní povinnost | 10 let |
| Částka v kryptoměně | Evidence, daňová povinnost | c) právní povinnost | 10 let |

Blockchainové adresy nedokážeme propojit se skutečnou identitou, pokud ji
dobrovolně neposkytnete (např. e-mailem).

### 3.4. E-mailová korespondence

Pokud nás kontaktujete, zpracováváme vaši e-mailovou adresu a obsah zprávy na
základě našeho oprávněného zájmu (čl. 6 odst. 1 písm. f) GDPR) odpovědět na dotaz.
Uchováváme až 2 roky.

## 4. Příjemci vašich údajů (zpracovatelé)

Údaje sdílíme s následujícími kategoriemi zpracovatelů:

### 4.1. Poskytovatel platebních služeb — Stripe
- **Subjekt:** Stripe Payments Europe, Ltd.
- **Umístění:** Irsko (EU), s infrastrukturou v USA
- **Účel:** Zpracování příspěvků
- **Právní záruky:** EU-US Data Privacy Framework (rozhodnutí (EU) 2023/1795) a
  Standardní smluvní doložky (rozhodnutí (EU) 2021/914)
- **Jejich zásady:** https://stripe.com/privacy

### 4.2. E-mailová služba — [TBD]
- **Účel:** Odesílání e-mailů s certifikátem
- **Umístění:** EU/USA
- **Právní záruky:** SCC

### 4.3. Hosting — GitHub Pages (Microsoft Corporation)
- **Účel:** Hostování webu
- **Umístění:** USA (s EU datacentry)
- **Právní záruky:** EU-US Data Privacy Framework

### 4.4. Backend — Cloudflare Workers
- **Účel:** Zpracování platebních webhooků
- **Umístění:** Globální CDN, routing EU pro EU návštěvníky
- **Právní záruky:** EU-US Data Privacy Framework

### 4.5. Správce daně
- **Subjekt:** Finanční správa České republiky
- **Účel:** Plnění daňových povinností
- **Právní základ:** čl. 6 odst. 1 písm. c) GDPR (právní povinnost)

### 4.6. Banka
- **Subjekt:** [VAŠE BANKA]
- **Účel:** Přijímání plateb
- **Právní základ:** čl. 6 odst. 1 písm. b) GDPR

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
| Výmaz ("právo být zapomenut") | čl. 17 | E-mail; pozn.: daňová evidence musí být uchovávána 10 let |
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
Když kliknete na "Donate" a přejdete k poskytovateli platebních služeb, opouštíte
náš web a vstupujete na **checkout.stripe.com**. Stripe funguje na své vlastní
doméně s vlastními zásadami ochrany osobních údajů a používání cookies. Tyto
cookies nejsou nastaveny námi a řídí se zásadami Stripe, nikoli tímto dokumentem.

### 7.3. Pokud bude v budoucnu přidána analytika
Pokud zavedeme webovou analytiku (např. Plausible Analytics — alternativu
přátelskou k soukromí bez cookies), odpovídajícím způsobem aktualizujeme tyto
Zásady. Pokud někdy přidáme analytiku založenou na cookies, nejdříve implementujeme
cookie banner v souladu s čl. 6 odst. 1 písm. a) GDPR.

## 8. Bezpečnost

Uplatňujeme technická a organizační opatření v souladu s čl. 32 GDPR:
- Šifrování HTTPS/TLS pro veškerá data při přenosu
- Přístup k osobním údajům omezen pouze na správce údajů
- Pravidelné bezpečnostní aktualizace infrastruktury
- API klíče a tajemství uloženy šifrovaně (Cloudflare Workers secrets)
- Data ve veřejném repozitáři jsou pseudonymizovaná (ID sezení hašováno, žádné
  e-maily ani jména)

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

## 11. Ochrana dětí

Platforma není určena dětem mladším 18 let. Vědomě neshromažďujeme údaje od
nezletilých. Pokud se domníváte, že nezletilý Platformu použil, kontaktujte nás
na honzapisk@gmail.com a související údaje smažeme.

## 12. Změny Zásad

Tyto Zásady můžeme aktualizovat. Datum účinnosti bude aktualizováno v záhlaví
dokumentu. Podstatné změny budou oznámeny na Platformě.

## 13. Kontakt

V otázkách týkajících se ochrany osobních údajů nebo pro uplatnění vašich práv:
- E-mail: honzapisk@gmail.com
- Poštovní adresa: Jan Pisk, Křížkovského 334/10, 674 01 Třebíč, Česká republika

---

**End of document / Konec dokumentu**
