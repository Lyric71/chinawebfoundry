---
question: "How does the database migration work, technically?"
order: 16
category: "technical"
---

Export with WP-CLI or direct MySQL dump. Serialisation-safe search-and-replace for URL changes. Transfer to the Chinese server over SSH/SCP. Post-import integrity verification on every table. Big databases get synced incrementally to keep downtime short.

The encoding part is where people get bitten. You need UTF-8mb4 and need to verify it's actually set correctly, not just assume it carried over. If encoding goes wrong, Chinese characters break everywhere and fixing it retroactively is miserable. We test this multiple times before cutover.
