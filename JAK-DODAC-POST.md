# Jak dodać nowy post

Wszystko robisz w przeglądarce, na stronie
https://github.com/agata-data/agata-data.github.io

## 1. Wrzuć obrazek

1. Otwórz folder `images`, a potem `posts`.
2. Kliknij **Add file → Upload files** i przeciągnij obrazek. Najlepszy jest poziomy zrzut ekranu w formacie `.png` albo `.jpg`.
3. Nazwa pliku bez spacji i polskich liter, np. `sql-sales.png`.
4. Kliknij **Commit changes**.

## 2. Dodaj post

1. Otwórz folder `_posts`.
2. Kliknij **Add file → Create new file**.
3. Nazwa pliku musi zaczynać się od daty: `RRRR-MM-DD-krotki-tytul.md`, np. `2026-11-02-sql-sales.md`. Bez spacji i polskich liter.
4. Skopiuj zawartość pliku `szablon-posta.md` i wklej ją do nowego pliku.
5. Podmień tytuł, opis, nazwę obrazka i treść.
   - Jeśli projekt nie ma repozytorium na GitHubie, usuń cały blok `links:`.
6. Kliknij **Commit changes**.

Po około minucie post pojawi się na stronie https://agata-data.github.io

## Duży, wyróżniony post na górze

Na górze strony jest post, który ma w nagłówku linijkę `featured: true`.
Żeby wyróżnić nowy post, dopisz mu tę linijkę i usuń ją z poprzedniego.
Jeśli żaden post jej nie ma, na górze jest najnowszy.

## Coś nie działa?

Najczęstszy błąd to brak trzech kresek `---` na początku albo na końcu nagłówka posta.
Możesz też napisać do Claude: „dodaj post o …”.
