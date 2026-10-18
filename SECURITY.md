# Security and Privacy

This repository is public by design. Treat all committed content and all browser-delivered assets as public information.

## Pre-merge checklist

- [ ] No passwords, API tokens, cookies, private keys, or real `.env` files.
- [ ] No private home address, personal documents, or third-party personal data.
- [ ] No confidential information from employers, customers, or internal projects.
- [ ] Permission to publish images and personal information belonging to other people.
- [ ] External links opening new tabs use `rel="noopener noreferrer"`.
- [ ] Dependencies and CI permissions are reviewed.
- [ ] Both English and Portuguese translations are updated where relevant.
- [ ] All public statements and project descriptions have been reviewed by the owner.

## Secrets and incident response

Configure secrets only in the hosting platform. Variables prefixed with `NEXT_PUBLIC_` are potentially exposed to browsers. Removing a secret in a later commit does not erase Git history; revoke or rotate exposed credentials immediately.

## Reporting

Use GitHub's private vulnerability reporting channel if enabled. Avoid disclosing sensitive findings in public issues.

## Before launch

Enable available secret scanning, push protection, dependency alerts, and main-branch protections. Search indexing stays disabled until content is reviewed.
