---
title: AhsayCBS flaws are chained for unauthenticated remote code execution
date: 2026-11-10T16:47:36.689Z
format: news
summary: CISA added AhsayCBS authentication and command-injection flaws to its
  Known Exploited Vulnerabilities catalog, and the flaws are known to be
  actively exploited.
description: AhsayCBS flaws are in CISA's Known Exploited Vulnerabilities
  catalog; fixed versions are 9.15.2.70 and 10.3.4.45.
tags:
  - cve
  - incident-response
  - malware
impact: critical
action: patch-now
status: current
affects:
  - AhsayCBS <= 9.15.2.69
  - AhsayCBS 10.1.0 through 10.3.4.44
briefing:
  changed: CISA added CVE-2026-105133 and CVE-2026-105134, AhsayCBS authentication
    and command-injection flaws, to its Known Exploited Vulnerabilities catalog
    on 2026-10-14; the remediation due date is 2026-10-17.
  why: CVE-2026-105134 has a CVSS 3.1 base score of 10.0 and is known to be
    actively exploited; CVE-2026-105133 is also known to be actively exploited,
    and CVE-2026-105134 can be chained with CVE-2026-105133.
  action: Apply the AhsayCBS 9.15.2.70 hotfix for affected v7, v8, and v9
    versions, or the 10.3.4.45 hotfix for affected v10 versions; Ahsay says
    previous patches v9.15.2.59 and v10.3.4.0 did not fully address the flaws.
sources:
  - title: "(Update) Critical Security Alert: Immediate Action Required for
      CVE-2026-105133 and CVE-2026-105134 | Ahsay Backup"
    url: https://www.ahsay.com/en/company/announcements/patch-cve-105133-105134-update
  - title: "NVD: CVE-2026-105133"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-105133
  - title: "NVD: CVE-2026-105134"
    url: https://nvd.nist.gov/vuln/detail/CVE-2026-105134
  - title: "CISA: Known Exploited Vulnerabilities catalog"
    url: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
  - title: Known Exploited Vulnerabilities Catalog | CISA
    url: https://www.cisa.gov/known-exploited-vulnerabilities-catalog?field_cve=CVE-2026-105134
  - title: "The Hacker News: Attackers Exploit AhsayCBS Flaws to Deploy
      Sandbox-Evading Python Backdoor"
    url: https://thehackernews.com/2026/11/attackers-exploit-ahsaycbs-flaws-to.html
---

The AhsayCBS flaws are tracked as CVE (Common Vulnerabilities and Exposures) identifiers CVE-2026-105133 and CVE-2026-105134. CVE-2026-105133 is an improper authentication vulnerability in the API (application programming interface) component's checkSysPwd function, and CVE-2026-105134 is an OS (operating system) command injection vulnerability in the Replication Receiver component's /rps/api/json/UpdateReceivers.do endpoint. CVE-2026-105133 has a CVSS (Common Vulnerability Scoring System) 3.1 base score of 7.3 and is classified as CWE (Common Weakness Enumeration) CWE-287; CVE-2026-105134 has a CVSS 3.1 base score of 10.0 and is classified as CWE-77 and CWE-78.

## What is affected

AhsayCBS versions up to 9.15.2.69 are affected by CVE-2026-105133 and CVE-2026-105134. AhsayCBS 10.1.0 through 10.3.4.44 is also affected.

## Exploitation and KEV status

CISA added CVE-2026-105133 and CVE-2026-105134 to its Known Exploited Vulnerabilities (KEV) catalog on 2026-10-14. CVE-2026-105133 and CVE-2026-105134 are known to be actively exploited, and CVE-2026-105134 can be chained with CVE-2026-105133. According to The Hacker News, Huntress observed threat actors exploiting the AhsayCBS vulnerabilities to gain unauthenticated remote code execution and deploy webshells, and the attack exploited the flaws to deliver a Python-based implant. The report says the vulnerabilities are assessed to have been weaponized as zero-days and that patches were released by Ahsay Backup in mid-October 2026.

## Why it matters

The remediation due date for CVE-2026-105133 and CVE-2026-105134 is 2026-10-17. CISA requires applying mitigations in accordance with vendor instructions and CISA's Binding Operational Directive (BOD) 26-04 guidance.

## What to do

Apply AhsayCBS 9.15.2.70 for affected v7, v8, and v9 versions, or AhsayCBS 10.3.4.45 for affected v10 versions. Ahsay says its previous patches v9.15.2.59 and v10.3.4.0 did not fully address the flaws, so do not rely on them.

<!-- cspell:words Ahsay -->
