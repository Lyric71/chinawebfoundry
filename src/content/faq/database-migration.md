---
question: "How does the database migration work, technically?"
order: 16
category: "technical"
---

Export with WP-CLI or a direct MySQL dump. Search-and-replace for URL changes, has to be serialisation-safe obviously, we use interconnect/it's Search Replace DB or WP-CLI's search-replace. Transfer to the Chinese server goes over SSH/SCP. Post-import we verify integrity on every table. Big databases we sync incrementally so the downtime stays short.

The encoding part is where people get bitten. You need UTF-8mb4 and you need to verify it's actually set correctly, not just assume it carried over. If encoding goes wrong during migration, Chinese characters break everywhere and fixing it retroactively is genuinely miserable work. We test this multiple times before the cutover. It's not the glamorous part of a migration but it's the part that will ruin your week if you skip it.
