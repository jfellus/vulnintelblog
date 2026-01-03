An [example blog](https://jfellus.github.io/vulnintelblog) about 3 random high-severity vulns from December 2025
* vulns have been selected for their high CVSS
* public exploits are available on github
* they have been duely disclosed and patched by the vendors
* they affect widely used software/appliances
* they are publicly exploitable from the Internet, requiring fairly low attacker skills

A dedicated reproduction lab is provided for each vuln in the [labs](labs/) folder.
Each lab contains:
* a vulnerable setup (docker compose or QEMU VM)
* a `probe.py` script to check for vulnerability without exploitation
* a `poc.py` exploit script to demonstrate exploitation on the vulnerable setup
* a patched setup to verify non-vulnerability after patching
* a *non-destructive* Nuclei template to scan for the vuln on public-facing targets

[go to blog](https://jfellus.github.io/vulnintelblog)
