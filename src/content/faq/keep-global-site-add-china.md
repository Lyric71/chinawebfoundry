---
question: "Can we keep our global site and just add a China version?"
order: 6
category: "technical"
---

That's what most clients end up doing actually. You keep one instance on your current host for global traffic and we build a China-optimised copy on mainland servers. Geo-detection and DNS routing send Chinese visitors to the local version, everyone else goes to your global site, nothing changes for them. No need to uproot your whole infrastructure. The two instances can share a CMS backend or be completely separate, it depends on how much your China content differs from the global version. We've done it both ways, there's pros and cons to each that we can walk through.
