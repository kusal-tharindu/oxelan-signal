---
title: Okta tracks O-UNC-053 as Inception denies ShinyHunters ties
date: 2026-11-25T14:53:50.577Z
format: news
summary: Okta tracks O-UNC-053, active since March 2026, as targets appear on an
  INCEPTION leak site that denies ShinyHunters ties; the cluster uses vishing.
description: Okta tracks O-UNC-053, active since March 2026, as targets appear
  on an INCEPTION leak site that denies ShinyHunters ties.
tags:
  - phishing
  - data-breach
  - authentication
impact: high
action: review
status: current
briefing:
  changed: Okta Threat Intelligence tracks O-UNC-053, active since March 2026, and
    says targets began appearing on a new INCEPTION leak site in November 2026;
    Inception denied ties to ShinyHunters.
  why: The cluster uses vishing and a phishing kit that cannot bypass
    phishing-resistant authentication, and Okta cannot yet say whether the
    cluster operates the leak site or partners with another extortion actor.
  action: Enroll users in strong authenticators such as Okta FastPass, passkeys or
    smart cards and enforce phishing resistance in policy.
sources:
  - title: Former ShinyHunters-affiliated cluster O-UNC-053 moves to new INCEPTION
      leak site | Threat Intelligence
    url: https://www.okta.com/blog/threat-intelligence/former_shinyhunters_cluster_moves_to_new_inception_site/
  - title: "SecurityWeek: ShinyHunters Claims Comeback, New Inception Group Rejects
      Alleged Ties"
    url: https://www.securityweek.com/shinyhunters-claims-comeback-new-inception-group-rejects-alleged-ties/
---

Okta Threat Intelligence is tracking a threat cluster it calls O-UNC-053, which has been active since March 2026. Okta says organizations targeted by the cluster began appearing on a new data leak site (DLS) branded as INCEPTION in November 2026 instead of the ShinyHunters DLS; researchers observed the new DLS on November 16, 2026. According to SecurityWeek, someone claiming to represent ShinyHunters announced the group’s alleged return in a message posted on the Exploit cybercrime forum. The report said the possibility that the comeback message is the work of impostors cannot be ruled out.

Okta says O-UNC-053 uses voice phishing (vishing), with callers often impersonating support staff and pressing targets to reset passwords and approve multi-factor authentication (MFA). Okta’s report says the phishing kit cannot bypass phishing-resistant authentication such as Okta FastPass and FIDO2/WebAuthn (Fast Identity Online 2 and Web Authentication) passkeys. Okta observed names of targeted entities appear on the ShinyHunters DLS between 1 and 28 days after the phishing infrastructure was registered. After the arrests of Pepijn van der Stap on September 15, 2026, and Saif al-Din Khader (Rey) on September 29, 2026, both allegedly affiliated with the ShinyHunters brand, the ShinyHunters DLS went down, and no O-UNC-053 targets were observed on any DLS throughout October and early November 2026.

Okta assesses that O-UNC-053 infrastructure was registered between 6 and 19 days before targets were named on the INCEPTION DLS. Okta says it cannot currently make a high-confidence assessment as to whether O-UNC-053 is operating the DLS itself or partnering with another extortion actor. The report said Inception denied having any connection to ShinyHunters. The report said the Inception leak site lists several major United States companies, including AMD, PepsiCo, Lucid Motors, Henry Schein, and Cigna Healthcare, and that the data’s authenticity has not been independently verified.

The report said ReversingLabs identified 21 confirmed phishing domains and another 41 associated with the campaign with high confidence. The report said the domains suggest the cybercriminals may have also targeted Anthropic, Amazon, Adobe, Nintendo, Netflix, OpenAI, and Tesla, but there is no indication that any of them were successfully compromised.

## What to do

Okta recommends enrolling users in strong authenticators such as Okta FastPass, passkeys or smart cards. It also recommends enforcing phishing resistance in policy.

<!-- cspell:words cybercrime Pepijn Stap Khader cybercriminals -->
