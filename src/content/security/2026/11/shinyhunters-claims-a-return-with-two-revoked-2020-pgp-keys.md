---
title: ShinyHunters claims a return with two revoked 2020 PGP keys
date: 2026-11-24T16:45:47.470Z
format: news
summary: According to BleepingComputer, ShinyHunters launched a new Tor leak
  site on November 23 and signed its return messages with two PGP keys that were
  revoked in March 2026.
description: The extortion group's new leak site reuses two revoked 2020 PGP
  keys to authenticate a new key, per BleepingComputer.
tags:
  - ransomware
  - data-breach
impact: medium
action: review
status: current
briefing:
  changed: According to BleepingComputer, ShinyHunters launched a new Tor data
    leak site on November 23 and signed its return messages with two historical
    PGP keys from 2020 that were revoked in March 2026.
  why: The report says the reused 2020 keys have circulated among numerous people
    and do not prove with certainty that the group has returned or that
    imposters have not revived the brand.
  action: Match any message attributed to the group against the published key
    fingerprints, and treat a match as attribution evidence rather than
    confirmation of identity.
sources:
  - title: "BleepingComputer: ShinyHunters claims to return after FBI arrests, uses
      old PGP keys as proof"
    url: https://www.bleepingcomputer.com/news/security/shinyhunters-resurfaces-after-fbi-arrests-uses-old-pgp-keys-as-proof/
---

ShinyHunters, an extortion group, launched a new Tor (The Onion Router, an anonymizing network) data leak site on November 23 announcing its return, according to BleepingComputer. The site carries two verification messages signed with historical ShinyHunters PGP (Pretty Good Privacy, the signing scheme used here) keys dating back to 2020.

According to BleepingComputer, both messages were signed with known keys associated with the group: the RaidForums key 1FC4D0B1DEE914BB05B57FABF1F1B98A51C989B3 and the Empire Market key 828537C15F43F135A8317153CD16A1660CC7CE51. Both were revoked in March 2026, when the group announced a replacement key, F4953411767DE71BEDCDABCB76F4E26F7A20978A. The November 23 announcement instead uses the two revoked 2020 keys to authenticate a new key, 27DA9D5B183247CADFC322880ABC63E30F73822E.

According to BleepingComputer, the 2020 keys have circulated among numerous people and do not prove with certainty that the group has returned or that imposters have not revived the brand. The outlet had previously verified a message from ShinyHunters on August 26, 2025, using the 1FC4D0B1DEE914BB05B57FABF1F1B98A51C989B3 key.

The return claim comes alongside arrests reported by BleepingComputer. Dutch police confirmed the arrest of a 24-year-old Amsterdam man suspected of involvement with ShinyHunters. According to the report, an alleged member known as Rey or Saif was detained in Jordan and is cooperating with law enforcement, and Canadian cybersecurity executive Edward Dubrovsky was arrested in Pennsylvania in an extortion investigation reportedly linked to the group.

According to BleepingComputer, the group also claimed to have breached FBI (Federal Bureau of Investigation) systems in September using an Oracle PeopleSoft vulnerability. The new operators say they will communicate exclusively through the Exploit hacking forum account and the new Tor site.

## Why it matters

The reported return rests on key material that predates it and was revoked earlier in the year. The fingerprints are the part of the claim a defender can check, and even they come with the report's warning that the old keys have circulated widely.

## What to do

Match any message attributed to ShinyHunters against the fingerprints above, and record the result as attribution evidence rather than confirmation of identity. Check the revocation history: both 2020 keys were revoked in March 2026, and the November 23 announcement did not use the March replacement key. Treat the claimed FBI breach and the arrest reports as reported, not confirmed.

<!-- cspell:words Dubrovsky -->
