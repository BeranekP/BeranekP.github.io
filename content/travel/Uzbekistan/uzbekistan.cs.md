+++
title = "Uzbekistán"
date = 2026-07-31
draft = false
summary = "Planning of the trip to Uzbekistan 2026"
mermaid = true
defaultContentLanguage = "cs"

[cover]
image = "images/mtorrazzina-uzbekistan-4911018_1920.jpg"
relative = false


+++


## Itinerář
[Přehledná mapa >](https://umap.openstreetmap.fr/cs-cz/map/uzbekistan-2026_1402273#7/41.594905/62.105713)

{{< iframe src="https://umap.openstreetmap.fr/cs-cz/map/uzbekistan-2026_1402273" height="600" >}}

### Diagram
*Diagram je klikací, po kliknutí přesměruje na příslušnou kapitolu itineráře*

```mermaid
%%{init: {
  'theme': 'dark',
  'themeVariables': {
    'taskTextDarkColor': '#111111',
    'taskTextLightColor': '#ffffff',
    'taskTextOutsideColor': '#ffffff'
  },
  'gantt': {
    'leftPadding': 180,
    'topAxis': false,
    'barHeight': 20,
    'barGap': 4
  }
}}%%
gantt
    title Uzbekistán 2026
    dateFormat YYYY-MM-DD HH:mm
    axisFormat %e.%m|%H
    tickInterval 12hour

    section 1. Praha → Taškent
        letiště :a1, 2026-09-23 07:15, 2h
        let :a11, 2026-09-23 09:15, 2026-09-23 22:30
        2 noci :done, a12 ,2026-09-23 22:30, 2026-09-25 18:00

        click a1 href "#flight1"
        click a11 href "#flight1"
        click a12 href "#accTAS1"
        
    section 2. Nukus → Taškent
        letiště :a21, 2026-09-25 18:00, 2h
        let Nukus : a22, 2026-09-25 20:00, 2026-09-25 21:40
        1 noc :done, a23, 2026-09-25 21:40, 2026-09-26 09:00
		
		click a21 href "#flight2"
        click a22 href "#flight2"
        click a23 href "#accNuk"

    section 3. Výlet Aral
        2 dny, Aral sea tour :crit, a31, 2026-09-26 09:00, 2026-09-27 19:00
        1 noc :done, a32, 2026-09-27 19:00, 2026-09-28 09:00
		click a31 href "#aral"
        click a32 href "#aral"

    section 4. Chiva
        Fortress tour :crit, a41, 2026-09-28 09:00, 2026-09-28 20:00
        2 noci :done, a42, 2026-09-28 20:00, 2026-09-30 07:15
		
		click a41 href "#fortress"
        click a42 href "#accChiva"

    section 5. Buchara
        vlak do Buchary :a51, 2026-09-30 07:15, 2026-09-30 10:37
        2 noci :done, a52, 2026-09-30 10:37, 2026-10-02 15:09
		
		click a51 href "#train1"
        click a52 href "#accBuch"

    section 6. Samarkand
        vlak do Samarkandu :a61, 2026-10-02 15:09, 2026-10-02 16:46
        3 noci :done, a62, 2026-10-02 16:46, 2026-10-05 17:40
        výlet 7 lakes :crit, a63, 2026-10-03 07:00, 2026-10-03 18:00
		
		click a61 href "#train2"
        click a62 href "#accSam"
		click a63 href "#lakes"

    section 7. Taškent & Odlet
        vlak do Taškentu :a71, 2026-10-05 17:40, 2026-10-05 20:12
        2 noci :done, a72, 2026-10-05 20:12, 2026-10-07 07:20
        letiště :a73, 2026-10-07 07:20, 2026-10-07 09:20
        let domů :a74, 2026-10-07 09:20, 2026-10-07 12:30
		
		click a71 href "#train3"
        click a72 href "#accTAS2"
		click a73 href "#flight3"
		click a74 href "#flight3"

```

{{< boxify done >}}
### 23.9.2026 - Praha → Taškent
#### Let {#flight1}
Praha, Terminál 1

- 23.9.2026, Turkish Airlines
```mermaid
flowchart LR
    PRG["PRG<br/>09:15"] e1@-->|TK1768| IST["IST<br/>Arr 13:00<br/>Dep 15:55"]
    IST e2@-->|TK362| TAS["TAS<br/>22:30"]

    e1@{ animation: fast }
    e2@{ animation: fast }
```
- zavazadla: 
  - 1 checkované zavazadlo: 23 kg, D+Š+V < 158 cm
  - 1 kabinové zavazadlo: 8 kg, D+Š+V < 118 cm
  - 1 personal item: 4 kg (40 x 30 x 15cm)

---
#### 23.-25.9.2026 - Ubytování {#accTAS1}
**Jahongir B&B Tashkent**
*Almasar District, Farobiy Kurgontepa 94, 100049 Taškent, Uzbekistán*, [mapa](https://maps.app.goo.gl/ALArVXtxcUFCTAte9)

{{< /boxify >}}

{{< boxify done >}}
### 25.9.2026 - Taškent → Nukus
#### Let {#flight2}
Taškent, Terminál 3 (*opačná strana letiště*) [mapa](https://maps.app.goo.gl/ztmrq2Sqq9W5GgNHA)
- 25.9.2026, Uzbekistan Airways
```mermaid
flowchart LR
    TAS["TAS 20:00"] e1@-->|HY17| NCU["NCU 21:40"]

    e1@{ animation: fast }
```
*Passengers are required to present all checked baggage and hand baggage for processing at the check-in counter.*
- zavazadla: 
  - 1 checkované zavazadlo: 23 kg, D+Š+V < 158 cm
  - 1 kabinové zavazadlo: 8 kg, D+Š+V < 115 cm, (55 x 35 x 25cm)
  - 1 personal item: 5 kg, D+Š+V < 92 cm
  
Zajištěna doprava z letiště v rámci ubytování.

---
#### 25.-26.9.2026 - Ubytování {#accNuk}
**Danexan Apa**, *Ulice Kok ozek 30/1, Nukus, Uzbekistán*, [mapa](https://maps.app.goo.gl/V6C6xD3pQvwRXW1d9)
{{< /boxify >}}

{{< boxify done >}}
### 26.-27.9.2026 -  Výlet Aral {#aral}
Zajištěno v rámci ubytování v Danexan Apa. Zbytné věci můžeme nechat na ubytování v Nukusu. Odjezd ráno z hotelu, příjezd druhý den večer na hotel.
- V ceně (190 USD/osoba):
	- Comfortable vehicle with air conditioning
	- Driver-guide knowledgeable about history and the area
	- Transfer and drop-off at your hotel
	- Local guide for city walking tours
	- Full board or specific meals as per program
	- All museum and park entrance fees
	- Power bank for charging mobile devices
	- Short edited travel video (vlog)
	- Overnight stay in a traditional yurt camp by the Aral Sea
	- Wet wipes and trash bags provided
	- [Beshbarmak](https://folkways.today/beshbarmak/) Experience
	- Drinking water provided
- **Itinerář**:  Nukus → Muynak → Dinner → Ustyurt Plateau → Kurgancha Kala → Aral Sea → Muynak( Ship cemetery) → Camel Farm Experience → Mizdakhan → Gaur Kala → Nukus
---
#### 27.-28.9.2026 - Ubytování {#accNuk}
**Danexan Apa**, *Ulice Kok ozek 30/1, Nukus, Uzbekistán*, [mapa](https://maps.app.goo.gl/V6C6xD3pQvwRXW1d9)
{{< /boxify >}}

{{< boxify done >}}
### 28.-30.9. 2026 - Chiva
#### Ancient Fortresses tour {#fortress}
- Cena 60 USD/osoba
	- Driver-guide knowledgeable about history and the area
	- Comfortable vehicle with air conditioning
	- Drinking water provided
	- Power bank for charging mobile devices
	- Short edited travel video (vlog)
	- Transfer and drop-off at your hotel
	- Full board or specific meals as per program
	- All museum and park entrance fees
- odjezd ráno z hotelu Danexan
- příjezd večer do hotelu RIZALI v Chivě
- Itinerář:  Nukus - Chilpyk – Amu Darya Fish Lunch - Kyzyl Qala – Toprak Qala – Badai Tugai Nature Reserve - Khiva
---
#### 28.-30.9.2026 - Ubytování {#accChiva}
**RIZALI Family guest house**, *Мехнат Гули 11, 220900 Chiva, Uzbekistán*, [mapa](https://maps.app.goo.gl/5XxprqrByaDixv8u9)
{{< /boxify >}}

{{< boxify >}}
### 30.9-2.10.2026 - Buchara {#train1}
- přesun vlakem [Jaloliddin Manguberdi](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/20220911_Cheongnyangni_Station_KTX-Eum_504.jpg/1920px-20220911_Cheongnyangni_Station_KTX-Eum_504.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail)
```mermaid
flowchart LR
    Chiva["Chiva 7:15"] e1@-->|751M| Buchara["Buchara 10:37"]

    e1@{ animation: fast }
```
---
#### 30.9-2.10.2026 - Ubytování {#accBuch}
cca 12 km od nádraží, přesun taxíkem

**Ikat Terrace**, *Mekhtar Anbar Street 71, 200101 Buchara, Uzbekistán*, [mapa](https://maps.app.goo.gl/fu1GVwV2KfASZbPX6)
{{< /boxify >}}

{{< boxify done >}}
### 2.-5.10.2026 - Samarkand {#train2}
- přesun vlakem [Afrosiyob](https://upload.wikimedia.org/wikipedia/commons/8/8b/Talgo_250_Afrosiyob_05-06%2C_Bukhara_station.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled), jízdenky zajištěny  
```mermaid
flowchart LR
    Buchara["Buchara 15:09"] e1@-->|769Ф| Samarkand["Samarkand	16:46"]

    e1@{ animation: fast }
```

---
#### 3.10.2026 - Výlet na 7 jezer {#lakes}
- odjezd/příjezd k hotelu
- cena 60 USD/osoba
- zajištěno přes https://www.centraliatours.com/en
- itinerář:
	- odjezd cca 7:00 minivanem Hyundai Grand Starex
	- přechod hranice s Tádžikistánem
	- oběd okolo poledne u 3. jezera
	- procházka 30-40 min k 7. jezeru
	- návrat večer

---
#### 2.-5.10.2026 - Ubytování {#accSam}
**SAMARKAND AMIRA**, *Ali qushchi Street 43, 140101 Samarkand, Uzbekistán*, [mapa](https://maps.app.goo.gl/3BhPnrwpWXWYdJuL6)
{{< /boxify >}}


{{< boxify done>}}
### 5.-7.10.2026 - Taškent {#train3}
- přesun vlakem [Afrosiyob](https://upload.wikimedia.org/wikipedia/commons/8/8b/Talgo_250_Afrosiyob_05-06%2C_Bukhara_station.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled)
- jízdenky po velkém boji zajištěny
```mermaid
flowchart LR
    Samarkand["Samarkand 17:40"] e1@-->|767Ф| Taškent["Taškent	20:12"]

    e1@{ animation: fast }
```
---
#### 5.-7.10.2026 - Ubytování {#accTAS2}
**Art inn hotel**, *13 Zarbog' ko'chasi, 100031 Taškent, Uzbekistán*, [mapa](https://maps.app.goo.gl/Q6pWa61Agsrfh6EN7)
{{< /boxify >}}


{{< boxify done >}}
### 7.10.2026 - Taškent → Praha {#flight3}
Taškent, Terminál 2

- 7.10.2026, Turkish Airlines
```mermaid
flowchart LR
    TAS["TAS<br/>02:30"] e1@-->|TK371| IST["IST<br/>Arr 05:45<br/>Dep 06:45"]
    IST e2@-->|TK1767| PRG["PRG<br/>08:20"]

    e1@{ animation: fast }
    e2@{ animation: fast }
```
- máme hodinu na přestup, což je hraniční, přesun bude svižný
{{< /boxify >}}

{{< boxify done >}}
### Poznámky
- výběr z bankomatů vždy zpoplatněn alespoň 1,5 %
- na taxíky použijeme aplikaci Yandex Go
- eSIM na letišti, operátor Ucell, [mapa pokrytí](https://ucell.uz/en/coverage_map), [měření](https://www.nperf.com/en/map/UZ/-/208152.Ucell-Mobile/signal?ll=39.402244340292775&lg=66.25343860869943&zoom=7)
- vlaky https://eticket.railway.uz/
- doporučené telegramové kanály: 
    - https://t.me/uzrailpassuz
    - https://t.me/railwayexpress_uz
    - https://t.me/uzrailways_uz
    - https://t.me/uzbektourismofficial

{{< /boxify >}}

{{< boxify done >}}
### Náklady na osobu
- letenka *PRG-IST-TAS* a zpět: 13 381 Kč :white_check_mark:
  - doplatek 469 Kč
- letenka *TAS-NCU*: 1454 Kč :white_check_mark:
- vlak *Buchara 1 → Samarkand*: 395 Kč :white_check_mark:
- vlak *Samarkand → Taškent*: 634 Kč :white_check_mark:

{{< /boxify >}}
