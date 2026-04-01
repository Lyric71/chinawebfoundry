---
question: "What does the Great Firewall do to WordPress at the code level?"
order: 25
category: "technical"
---

DNS poisoning, IP blacklisting, URL keyword filtering, SNI inspection, and deep packet inspection. For WordPress: any `wp_enqueue_script` or `wp_enqueue_style` loading from googleapis.com, gstatic.com, or gravatar.com will hang. Not error out - hang. The browser waits and your whole page render stalls.

YouTube or Google Maps embeds leave holes in the layout. AJAX calls to blocked APIs fail silently, so forms or checkout just stop working with no error message. During migration we trace every external call in theme files, plugin code, and wp_options, replacing everything with China-friendly alternatives or self-hosting it.
