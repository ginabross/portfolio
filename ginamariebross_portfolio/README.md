# Portfolio Gina Marie Bross

Statische Seite ohne Build-Schritt: `index.html` plus Ordner `images/`.

## 1. Auf GitHub ablegen

1. Kostenloses Konto auf github.com anlegen.
2. Oben rechts auf **+ → New repository**. Name z. B. `portfolio`. Public oder Private ist beides möglich. **Create repository**.
3. Auf der Seite des neuen Repositories **uploading an existing file** wählen.
4. Den **Inhalt** dieses Ordners hineinziehen (`index.html` und den Ordner `images`), nicht die ZIP-Datei selbst.
5. Unten **Commit changes** klicken.

## 2. Mit Cloudflare Pages verbinden

Ein bestehendes Pages-Projekt, das per Direct Upload erstellt wurde, lässt sich nicht nachträglich mit Git verbinden. Lege deshalb ein neues Projekt an:

1. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**. Die Menünamen können leicht abweichen.
2. GitHub-Konto verknüpfen und das Repository `portfolio` auswählen.
3. Framework preset: **None**. Build command: leer lassen. Build output directory: leer lassen (oder `/`).
4. **Save and Deploy**.
5. Domain umziehen: Im alten Projekt unter **Custom domains** `ginamariebross.com` entfernen, im neuen Projekt unter **Custom domains** hinzufügen. Danach kann das alte Projekt gelöscht werden.

## 3. Später ändern

- **Fotos hinzufügen:** Im Repository in den Ordner `images` gehen, **Add file → Upload files**, Fotos hineinziehen, **Commit changes**.
- **Texte ändern:** `index.html` öffnen, Stift-Symbol anklicken, Text ändern, **Commit changes**.
- Nach etwa einer Minute ist die Änderung online.

## 4. Neues Projekt hinzufügen

In `index.html` einen ganzen Block von `<article class="project row">` bis `</article>` kopieren, direkt darunter einfügen und Titel, Jahr, Text und Bilddateinamen anpassen.

- `<figure class="wide">`: Bild geht über die volle Breite.
- `<figure>`: Bild nimmt die halbe Breite ein. Zwei davon stehen nebeneinander.
- Auf dem Handy stehen alle Bilder untereinander.

## 5. Foto-Tipps

- Format JPG, längste Kante etwa 2000 px, Dateigröße möglichst unter 500 KB.
- Dateinamen in Kleinbuchstaben, ohne Leerzeichen und Umlaute, z. B. `projekt-4-01.jpg`.
- `width` und `height` im `<img>`-Tag können auf die Pixelmaße deines Fotos gesetzt werden. Das ist optional.
- Die grauen Platzhalterbilder in `images/` einfach durch deine Fotos mit denselben Dateinamen ersetzen oder die Namen in `index.html` anpassen.
