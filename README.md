# PrimeStarterProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Depencency

`npm install primeng --save` <br>
`npm install primeicons --save` <br>
`npm install primeflex --save` <br>

## …or push an existing repository from the command line

`git remote add origin https://github.com/saroj8455/prime-starter-project.git` <br>
`git branch -M master` <br>
`git push -u origin master` <br>

## common css rule for responsive design

```css
/* You can add global styles to this file, and also import other style files */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

:root {
  /* either --dark-mode or --no-dark-mode */
  --color-scheme: var(--dark-mode);

  /* --font-family: system-ui; */
  --font-family: "Poppins", sans-serif;

  --fs-300: clamp(0.94rem, calc(0.92rem + 0.08vw), 0.98rem);
  --fs-400: clamp(1.13rem, calc(1.06rem + 0.33vw), 1.31rem);
  --fs-500: clamp(1.35rem, calc(1.21rem + 0.69vw), 1.75rem);
  --fs-600: clamp(1.62rem, calc(1.37rem + 1.24vw), 2.33rem);
  --fs-700: clamp(1.94rem, calc(1.54rem + 2.03vw), 3.11rem);
  --fs-800: clamp(2.33rem, calc(1.7rem + 3.15vw), 4.14rem);
  --fs-900: clamp(2.8rem, calc(1.85rem + 4.74vw), 5.52rem);

  --clr-primary-300: hsl(219, 76%, 55%);
  --clr-primary-400: hsl(219, 76%, 40%);
  --clr-primary-500: hsl(219, 76%, 25%);
  --clr-secondary-300: hsl(269, 75%, 55%);
  --clr-secondary-400: hsl(269, 75%, 40%);
  --clr-secondary-500: hsl(269, 75%, 25%);
  --clr-accent-300: hsl(358, 72%, 65%);
  --clr-accent-400: hsl(358, 72%, 50%);
  --clr-accent-500: hsl(358, 72%, 35%);

  /* settings */
  --no-dark-mode: light;
  --dark-mode: dark light;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  color-scheme: var(--color-scheme);
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  font-family: var(--font-family);
  font-size: var(--fs-300);
  line-height: 1.5;
  text-rendering: optimizeSpeed;
}

h1,
h2,
h3 {
  font-weight: var(--fw-700);
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a {
  color: green;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #555;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Uttility classes */
.container {
  width: min(85%, 100% - 2rem);
  margin-inline: auto;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

article {
  padding: 1rem 0;
}

p {
  font-size: var(--fs-400);
}

footer {
  /* position: absolute; */
  /* bottom: 0; */
  /* fix width  issue*/
  width: 100%;
  padding: 2rem 0;
}
```

## Prime Flex Configure Responsive Form Layout

```html
<div class="p-fluid grid py-4">
  <div class="field col-12 md:col-4">
    <span class="p-float-label">
      <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select Functions" optionLabel="name" inputId="float-label"></p-dropdown>
      <label for="float-label">Select Functions</label>
    </span>
  </div>
  <div class="field col-12 md:col-4">
    <span class="p-float-label">
      <p-multiSelect inputId="float-label" [options]="cities" [(ngModel)]="selectedCities" optionLabel="name"></p-multiSelect>
      <label for="float-label">Select Variables</label>
    </span>
  </div>
</div>
```

### Mobile number validation https://www.aspsnippets.com/Articles/3741/Indian-Mobile-Number-validation-using-Regular-Expressions-in-AngularJS/

### product image gallery with details in flex

```html
<div class="p-3 flex gap-2 justify-content-center align-items-center">
  <div class="small__image flex flex-column gap-4">
    <img [src]="image" (click)="changeSourceImage(image)" alt="" srcset="" *ngFor="let image of images" />
  </div>
  <div class="large__image flex-none">
    <img [src]="thumbnail" alt="" srcset="" />
  </div>
</div>
```

### responsive width

`https://web.dev/articles/min-max-clamp`
