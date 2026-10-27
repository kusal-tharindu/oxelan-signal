# Security policy

## Reporting

Do not open a public issue for a vulnerability. Email **hello@oxelan.com** with:

- the affected URL or repository path;
- what you observed;
- the smallest reproduction you can share;
- whether the issue is already public.

You will get an acknowledgement as soon as possible. Please allow time for a fix
before publishing details. Do not test against production in a way that could
disrupt service, access other users' data or expose secrets.

There is no bug-bounty programme and no guarantee of payment.

## Scope

Oxelan Signal is a static site. The highest-impact issues are:

- Cross-site scripting through content or generated pages.
- A published post that includes a real secret or private data.
- A compromised dependency or generated artefact.
- A broken security header, CSP bypass or feed injection.
- Broken authentication if comments or analytics are enabled.

Content and code are proprietary; see [LICENSE](./LICENSE) and
[LICENSE-CONTENT](./LICENSE-CONTENT). Security reports do not grant a licence to
the repository.

## Privacy

See [PRIVACY.md](./PRIVACY.md).
