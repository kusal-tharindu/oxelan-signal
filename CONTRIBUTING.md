# Contributing

This is primarily a personal publication, but corrections and reproducible bug reports are
welcome.

## Before opening a pull request

```bash
npm ci
npm run format:check
npm run ci
```

`npm run ci` runs type checking, unit tests, content validation, image policy, the production
build, internal link checking and artifact verification. Pull requests run the same command.

## Content changes

- Read `docs/content-guide.md` in the documentation repository.
- The folder decides the section. Do not add a `section` field.
- News needs a source. Claims that can be checked should link to primary material.
- Images are local, under 200 KB, and need alt text.
- Corrections get an `updated` date and a line in `updates`.
- A superseded post points at its replacement.

## Code changes

- Keep the build deterministic. No network calls at build time except optional assets.
- Pin dependencies and GitHub Actions.
- Prefer small, dependency-free enhancements.
- Add a unit test for a pure helper, and run the full build for a template change.

## Security

See [SECURITY.md](./SECURITY.md).
