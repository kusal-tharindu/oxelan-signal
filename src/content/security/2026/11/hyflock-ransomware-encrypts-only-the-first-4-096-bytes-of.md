---
title: HYFLOCK ransomware encrypts only the first 4,096 bytes of larger files
date: 2026-11-06T16:45:23.628Z
format: news
summary: Researchers traced four HYFLOCK generations from April to October 2026
  and found the October 17 build encrypted only the first 4,096 bytes of larger
  files.
description: The October 17 HYFLOCK build encrypted only the first 4,096 bytes
  of larger files, and researchers recovered Office components without a key.
tags:
  - malware
impact: high
action: review
status: current
affects:
  - HYFLOCK ransomware builds from April through October 2026
briefing:
  changed: Researchers traced four HYFLOCK ransomware generations from April
    through October 2026, and the October 17 build encrypted only the first
    4,096 bytes of larger files.
  why: Some file content may remain accessible after encryption, but the cited
    research did not restore complete files or produce a general decryptor.
  action: Review the October 17 build’s observed behavior, including
    scheduled-task creation, network-share access, and attempts to interfere
    with system recovery.
sources:
  - title: HYFLOCK Ransomware Evolution and Encryption Weaknesses
    url: https://blog.checkpoint.com/security/hyflock-ransomware-evolves-with-new-builds-and-encryption-weaknesses/
  - title: HYFLOCK Ransomware Evolution and Encryption Weaknesses
    url: https://blog.checkpoint.com/security/hyflock-ransomware-evolves-with-new-builds-and-encryption-weaknesses/amp/
  - title: "Cyber Security News: HYFLOCK Ransomware Encrypts Only First 4KB of
      Larger Files, Leaves Parts of Victims' Files Accessible"
    url: https://cybersecuritynews.com/hyflock-ransomware/
---

HYFLOCK ransomware has moved through four generations traced from April through October 2026. It first appeared in underground forums in March 2026, advertising a Ransomware-as-a-Service (RaaS) platform. Public extortion followed months of recruitment, with eight victim claims appearing on HYFLOCK’s leak site on October 13.

Researchers found that the October 17 build encrypted only the first 4,096 bytes of larger files, leaving additional content accessible beyond that initial section. The same build ran as a standalone Rust encryptor and staged a copy of itself under a directory resembling a legitimate software update component. During controlled analysis, it produced 500 ransomware-extension renames and 17 validated encrypted files.

According to Cyber Security News, that partial-encryption pattern held for fourteen larger files, while three smaller files were encrypted across their complete original lengths. The report also said each validated October 17 output kept its original-length body and added a 556-byte trailer containing encryption metadata and a wrapped key.

## Why it matters

Partial encryption changes the recovery question: some file content may remain readable, but the cited research did not restore complete files or develop a general method for decrypting HYFLOCK. Researchers recovered 73 CRC-valid (cyclic redundancy check) internal components from seven encrypted Office files, including worksheet and shared-string data, without obtaining an encryption key. An earlier October build had a processing defect that could permanently discard portions of a file, potentially preventing complete recovery even with the correct key.

## What to do

The cited research did not restore complete files or develop a general decryptor for HYFLOCK, so do not treat partial readability as a full recovery. The cited sources do not publish fixed versions or a general decryptor for HYFLOCK. Review the October 17 build’s observed behavior: it registered a scheduled task, accessed network-share resources, and attempted to interfere with system recovery. Successful domain-wide propagation was not observed, and Group Policy spreading was disabled in the recovered configuration. Reliable execution after remote desktop sessions end and use of vulnerable drivers to disable security tools remain unverified.

<!-- cspell:words HYFLOCK decryptor HYFLOCK’s -->
