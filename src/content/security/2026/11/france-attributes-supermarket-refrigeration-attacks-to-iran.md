---
title: France attributes supermarket refrigeration attacks to Iran's IRGC unit
date: 2026-11-12T01:57:01.978Z
format: news
summary: France attributed the October cyberattacks on refrigeration controls at
  more than 700 retail sites to an IRGC unit, and the attacks caused fires and
  spoiled food.
description: France attributed October attacks on supermarket refrigeration
  controls at more than 700 sites to an IRGC unit; CERT-FR issued hardening
  advice.
tags:
  - incident-response
  - authentication
impact: high
action: review
status: current
affects:
  - Danfoss AK-SM and AK-SC series
  - Copeland xweb
  - Dixell xweb
briefing:
  changed: France attributed the October cyberattacks on refrigeration controls at
    more than 700 retail sites to Shahid Kaveh, an IRGC unit; the attacks caused
    fires and spoiled food.
  why: Attackers changed defrost settings on compromised controllers, and CERT-FR
    identified the affected Danfoss, Copeland and Dixell controllers in the
    campaign.
  action: Remove affected refrigeration controllers from internet exposure,
    restore access through a VPN or protected network, and for Danfoss devices
    update firmware, set the security level to Strict, and change default
    passwords.
sources:
  - title: Declaration of attribution to Iran of cyber attacks against France
    url: https://au.diplomatie.gouv.fr/en/declaration-attribution-iran-cyber-attacks-against-france
  - title: "The Hacker News: France Blames Iran for Sabotage Attack on Refrigeration
      Controllers at About 700 Retail Sites"
    url: https://thehackernews.com/2026/11/france-blames-iran-for-sabotage-attack.html
  - title: "BleepingComputer: France blames Iranian hackers for supermarket attacks
      that sparked fires"
    url: https://www.bleepingcomputer.com/news/security/france-blames-iranian-hackers-for-supermarket-attacks-that-sparked-fires/
---

France attributed the October cyberattacks on supermarket refrigeration controls to Shahid Kaveh, an offensive cyber unit affiliated with Iran's Islamic Revolutionary Guard Corps (IRGC). The campaign targeted refrigeration system controls at more than 700 retail sites in France overnight on October 11-12. France described the campaign as unprecedented in its scale and level of aggressiveness and the first offensive cyber campaign carried out purely for sabotage on French soil. According to BleepingComputer, attackers compromised Danfoss refrigeration controllers and remotely changed defrost settings to high temperatures.

## What is affected

According to The Hacker News, CERT-FR identified compromised remote refrigeration controllers across four product families: Danfoss AK-SM and AK-SC series, Copeland xweb, and Dixell xweb. BleepingComputer reported that affected organizations included Casino, Leclerc, Coopérative U, Metro, Carrefour and Intermarché, along with smaller butcher shops, a slaughterhouse and cooperative food-processing facilities. The report said French investigators linked the same campaign to attacks against Schneider Electric industrial equipment at small hydroelectric installations, with moderate effects. The report said France's attribution covered only the October attacks, not the later November wave against refrigeration systems in other European countries.

## Why it matters

The attacks caused fires and spoiled foodstuffs estimated to be worth tens of millions of euros. France will summon Iran's ambassador to condemn the attacks and will propose further European Union sanctions against Iranian entities and individuals involved in the cyberattack.

## What to do

The Hacker News report said CERT-FR advised removing internet exposure from affected refrigeration controllers and from any unit reachable at a public IP address, restoring access only through a secure VPN or protected network. For Danfoss devices, the same report said CERT-FR recommended updating firmware, setting the security level to Strict, and ensuring default passwords have been changed.

<!-- cspell:words IRGC Danfoss xweb Dixell Shahid Kaveh Leclerc Coopérative Intermarché -->
