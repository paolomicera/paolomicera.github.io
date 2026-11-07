# Sito accademico di Paolo Micera

Sito statico (HTML + CSS, nessuna compilazione) nello stile di al-folio, pensato per GitHub Pages.

## Struttura

```
index.html            About (home)
research/index.html   Paper con bottoni Abstract / PDF
teaching/index.html   Insegnamento
contact/index.html    Indirizzi e mail
assets/css/style.css  Stile (colore principale in --accent, in cima al file)
assets/js/main.js     Menu mobile, abstract a scomparsa, tema chiaro/scuro
assets/img/           prof_pic.jpg  → sostituisci con la tua foto
assets/pdf/           Micera_CV.pdf e i PDF dei paper
.nojekyll             Dice a GitHub di servire i file così come sono
```

## Pubblicazione su GitHub Pages

1. Crea un account GitHub, se non ce l'hai.
2. Crea un nuovo repository **pubblico** chiamato esattamente `TUOUSERNAME.github.io`.
3. Carica tutti i file di questa cartella (anche `.nojekyll`): *Add file → Upload files*, trascina il contenuto, *Commit changes*.
4. Vai in *Settings → Pages*. In *Source* scegli *Deploy from a branch*, branch `main`, cartella `/ (root)`, *Save*.
5. Dopo un paio di minuti il sito è online su `https://TUOUSERNAME.github.io`.

Ogni modifica successiva (anche fatta direttamente dal browser con l'icona della matita su GitHub) va online da sola in circa un minuto.

## Dominio personalizzato (facoltativo)

Se compri un dominio (es. `paolomicera.com`), in *Settings → Pages → Custom domain* inseriscilo e, presso il registrar, aggiungi un record CNAME `www` → `TUOUSERNAME.github.io` e i record A indicati nella documentazione di GitHub Pages. Spunta *Enforce HTTPS*.

## Cose da completare

- [ ] Foto in `assets/img/prof_pic.jpg`
- [ ] Link di X, LinkedIn e Bluesky e pagine dei supervisor in `index.html`
- [x] `Micera_CV.pdf` in `assets/pdf/`
- [ ] PDF dei paper in `assets/pdf/` (poi togli il commento al bottone PDF in `research/index.html`)
- [x] Abstract (presi dal CV)
- [x] Corsi in `teaching/index.html`

## Aggiungere un paper

In `research/index.html` copia un blocco `<li class="paper"> … </li>` e modifica titolo, coautori, abstract e link.

## Immagini in alto (Schiele)

Ogni pagina ha il suo quadro di Egon Schiele (pubblico dominio):

- Home: *Mountain Torrent* (1918), `assets/img/banner-torrent.jpg`
- Research: *Four Trees* (1917), `assets/img/banner-trees.jpg`
- Teaching: *Houses on the River (The Old Town)* (1914), `assets/img/banner-houses.jpg`
- Contact: *Harbour of Trieste* (1907), `assets/img/banner-trieste.jpg`

In ogni pagina il blocco `<div class="banner">` subito dopo il menu indica l'immagine (`src`) e quale parte mostrare (`object-position: center 58%`, dove 0% è il bordo alto del quadro e 100% quello basso). Il credito è nel footer della stessa pagina. Se un'immagine non si carica, la striscia sparisce.

## Icone

Le icone (X, LinkedIn, Bluesky, tema) sono incluse nel sito in `assets/vendor/fontawesome` (Font Awesome Free 6.7.2), quindi non serve nessun servizio esterno.
