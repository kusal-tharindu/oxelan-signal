---
title: Elecbrakes Bluetooth flaws let nearby attackers control trailer brakes
date: 2026-11-24T11:42:06.133Z
format: news
summary: CISA's advisory covers three Elecbrakes controller flaws, including two
  with a CVSS score of 9.6; fixed firmware exists for the EB2 and VM1 but not
  for the ELBC2000.
description: CISA advisory ICSA-26-323-02 covers three Elecbrakes Bluetooth
  flaws. EB2 and VM1 firmware fixes are out; the discontinued ELBC2000 has none.
tags:
  - cve
  - authentication
impact: critical
action: review
status: current
affects:
  - Elecbrakes EB2 firmware <=3.0.4.2.0
  - Elecbrakes VM1 firmware <1.3.4.2.1
  - Elecbrakes ELBC2000 (all versions)
briefing:
  changed: CISA published advisory ICSA-26-323-02 on 2026-11-19 for three
    Elecbrakes trailer brake controller vulnerabilities, two of them rated
    critical at CVSS 9.6.
  why: An attacker within Bluetooth range could engage or release a trailer's
    brakes; EB2 and VM1 firmware fixes exist, while the discontinued ELBC2000
    has none.
  action: Install EB2 firmware 3.0.4.4.3 or later, or VM1 firmware 1.3.4.2.1 or
    later, through the Elecbrakes app; the ELBC2000 has no fix and the vendor is
    determining how to address it.
sources:
  - title: "NVD: CVE-2026-125273"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-125273
  - title: Elecbrakes EB2, VM1, ELBC2000 | CISA
    url: https://www.cisa.gov/news-events/ics-advisories/icsa-26-323-02
  - title: "Brake Check: Hijacking Trailer Brakes Over Bluetooth | Element Digital"
    url: https://elementdigital.com.au/blog/brake-check-trailer-brakes-over-bluetooth/
  - title: "SecurityWeek: Elecbrakes Bluetooth Vulnerabilities Expose Trailers to
      Forced Braking"
    url: https://www.securityweek.com/elecbrakes-bluetooth-vulnerabilities-expose-trailers-to-forced-braking/
---

CISA published advisory ICSA-26-323-02 on 2026-11-19 covering three vulnerabilities in Elecbrakes trailer brake controllers. CVE-2026-96805 and CVE-2026-125273 each carry a CVSS v3.1 base score of 9.6 and a Critical rating; CVE-2026-124281 is rated 6.1, Medium.

## What the flaws allow

CVE-2026-96805 is an unauthenticated command injection that lets an in-range BLE (Bluetooth Low Energy) device write to the control interface and influence braking with no authentication or pairing. It is classified as CWE-306, Missing Authentication for Critical Function. CVE-2026-125273 is a missing replay and command-integrity protection flaw: commands lack sequence numbers, nonces or session tokens, so captured commands can be replayed, and the last command persists across sessions. It is classified as CWE-294, Authentication Bypass by Capture-replay.

CVE-2026-124281 is an unprotected firmware-update channel that may allow unauthorized firmware modification, classified as CWE-749, Exposed Dangerous Method or Function. According to SecurityWeek, an unauthenticated attacker within Bluetooth range, up to 100 meters, can use a laptop or phone to engage or release a trailer's brakes or adjust braking force without any interaction from the victim. CISA says successful exploitation could allow an attacker to gain control of a trailer's brakes, modify the firmware, disable the brake lights or disable other critical safety features. CISA reports no known public exploitation specifically targeting these vulnerabilities.

## Which controllers are affected

EB2 controllers running firmware up to and including 3.0.4.2.0 and VM1 controllers before 1.3.4.2.1 are affected, and all versions of the discontinued ELBC2000 are affected. According to SecurityWeek, the affected brake controllers are mainly used in Australia and New Zealand. Elecbrakes says it is not aware of any reported incidents of damage or injury caused by these vulnerabilities.

## What to do

The fixed versions are EB2 firmware 3.0.4.4.3 or later and VM1 firmware 1.3.4.2.1 or later, which Elecbrakes released for all three CVEs. Users should open the Elecbrakes app and install the firmware update. According to SecurityWeek, once the firmware patches are installed, an attacker can no longer access the brake controllers remotely without an initial pairing that requires physical access to the device and cannot be performed over Bluetooth. No fix is available for the discontinued ELBC2000; the vendor is determining how to address the vulnerabilities for that controller.

<!-- cspell:words Elecbrakes ELBC ICSA -->
