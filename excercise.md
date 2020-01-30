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

## Excercise 04

1. Neuen Stream erzeugen vom Output Value

2. Mit jedem Event liste nach Übereinstimmungen filtern

3. Gefilterte Liste anzeigen

HINT:

- `map`
- `switchMap`

## Excercise 05

1. Zeige einen Button in der `BooksListComponent` an

```html
<button (click)="onRefresh()">REFRESH</button>
```

2. jedes mal wenn dieser Button geklickt wird, wird ein HTTP Request abgesetzt und die gecachte Bücherliste aktualisiert
3. Füge Fehlerbehandlung hinzu, wo sinnvoll!

HINT: `catchError`

## Excercise 06

1. @ngrx/store zum Projekt hinzufügen

```sh
npm install @ngrx/store --save
ng add @ngrx/store
ng add @ngrx/schematics
```

2. Den State an sich initialisieren (Anfangszustand)

3. Einen Action und einen Reducer um Liste im Store zu speichern!

HINT:

- https://ngrx.io/guide/store/install
- https://ngrx.io/guide/store/actions
- https://ngrx.io/guide/store/reducers

## Excercise 07

1. Löse das Service with a Subject Pattern durch eine NgRx Facade ab
   1. Dispatche die richtigen Actions an den notwendigen Stellen
   2. Implementiere ein `store.select` anstatt des Subjects
