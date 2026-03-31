---
question: "What does the Great Firewall do to WordPress at the code level?"
order: 25
category: "technical"
---

Under the hood it's DNS poisoning, IP blacklisting, URL keyword filtering, SNI inspection, and deep packet inspection. For WordPress what that looks like in practice: any `wp_enqueue_script` or `wp_enqueue_style` that loads from a blocked domain, googleapis.com, gstatic.com, gravatar.com, those kind of things, will hang. Not error out. Hang. The browser just waits, and waits, and your whole page render stalls.

YouTube or Google Maps embeds leave literal holes in the layout where the iframe was supposed to load. AJAX calls to blocked APIs fail silently, so your contact form or search bar or checkout just... doesn't work, and there's no error message telling you why.

During migration we trace every single external call. Theme files, plugin code, wp_options table, all of it. Everything either gets replaced with a China-friendly alternative or self-hosted. It's tedious work but if you skip even one dependency it can break things in ways that are really hard to diagnose later.
