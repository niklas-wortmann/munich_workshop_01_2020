# 29.01.2020 Munich

## Excercise 01

0. Bookmonkey API starten

```sh
bookmonkey-api
```

1. Neue Angular Anwednung bootstrappen

```sh
ng new ...
```

2. Ein Angular Service implementieren, dass die Booksmonkey API anspricht und in einem BehaviorSubject speichert.

HINT:
GET http://localhost:4730/books

## Excercise 02

1.  Erzeuge eine neue Komponente `BooksListComponent`

```sh
ng generate component books-list
```

2.  Render die Liste an Büchern in der Komponente

## Excercise 03

1. Generiere eine neue Komponente: SearchComponent

2. Implementiere ein FormControl

```ts
test = new FormControl();
```

3. Nimm das `valueChanges` observable entgegen und verwende den
   `@Output` decorator um jede Wertänderung an die ParentComponent zu propagieren

```ts
this.test.valueChanges.subscribe(...)
```
