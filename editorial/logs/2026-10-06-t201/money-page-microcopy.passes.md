# /deep-translate on the changed microcopy of the wordpress-agency-china simulation

Three strings changed per locale: the font tag in the Shanghai mock view,
the label of the two Google Fonts rows, and the two summary lines. Run FR,
then ES, then DE, one pass at a time.

## FR
- pass 1: tag "· pas de réponse"; label "Pas de réponse"; summary "7 requêtes sur 8 échouent · page inutilisable en Chine" / "7 requêtes sur 8 échouent · vos visiteurs sont déjà partis".
- pass 2: "Pas de réponse" -> "Sans réponse" (interface register, shorter, as French network tools label a timeout); "échouent" -> "en échec" (status labels in French UI are nominal, not verbal).
- pass 3: kept. Final: "· sans réponse", "Sans réponse", "7 requêtes sur 8 en échec · ...". Step 3 complete.

## ES
- pass 1: tag "· no responde"; label "No responde"; summary "7 de 8 peticiones fallan · ...".
- pass 2: "No responde" -> "Sin respuesta" (status label, nominal); "fallan" -> "fallidas" (agrees with the nominal style of the line and its pair "bloqueadas" before it).
- pass 3: kept. Final: "· sin respuesta", "Sin respuesta", "7 de 8 peticiones fallidas · ...". Step 3 complete.

## DE
- pass 1: tag "· antwortet nicht"; label "Antwortet nicht"; summary "7 von 8 Anfragen scheitern · ...".
- pass 2: "Antwortet nicht" -> "Keine Antwort" (status label); "scheitern" -> "fehlgeschlagen" (the participle is what German browser tools print for a failed request).
- pass 3: kept. Final: "· keine Antwort", "Keine Antwort", "7 von 8 Anfragen fehlgeschlagen · ...". Step 3 complete.

The ajax.googleapis.com row's label reuses each locale's existing word for
blocked (Blocked, Bloqué, Bloqueado, Blockiert): no new string.
