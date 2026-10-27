# Security policy

## Reporting

Do not open a public issue for a vulnerability. Email **hello@oxelan.com** with:

- the affected URL or repository path,
- what you observed,
- the smallest reproduction you can share,
- whether the issue is already public.

You will get an acknowledgement as soon as possible. Please allow time for a fix before
publishing details.

## Scope

This repository contains a static site. The highest-impact issues are:

- Cross-site scripting through content or generated pages.
- A published post that includes a real secret or private data.
- A compromised dependency or generated artifact.
- Broken authentication if comments or analytics are enabled.

The content itself is covered by `LICENSE-CONTENT`. The code is covered by `LICENSE`.
