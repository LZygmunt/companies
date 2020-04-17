# ASSETS

This folder should contains files like images, videos, audio files, global stylesheet with variables, mixins, etc. 
In this project this folder contain `@mixin` with breakpoints used in app. 

### Mediaqueries Mixin

#### Implementation

```SCSS
@mixin breakpoints( $point ) {        # Name of mixin
  @if $point == medium {              # Name of breakpoints which use to link breakpoints values
    @media (max-width: 1200px) {      # Breakpoints value associated with name
      @content;
    }
  } @else if $point == small {        # Name of breakpoints which use to link breakpoints values
    @media (max-width: 568px) {       # Breakpoints value associated with name
      @content;
    }
  }
}
```
I implement `@mixin` <b>breakpoints</b> with parameter `$point`. This parameter should be a string value and take
one of this value `"small"` for styles screen smaller or equal to <b>568px</b> and `"medium"` for styles screen smaller or equal to <b>1200px</b>.
The bigger screen than <b>1200px</b> is styled writing code without this mixin.

#### How To Use?

First you have to import in file that you want to use it by the relative path to the file in `assets/scss/` as shown below.

```BASH
...
├── src
│   ├── assets
│   │   └── scss
│   │       └── _mediaqueries.scss             <- 2. I want this import.
...
│   ├── containers
│   │   ├── app
│   │   │   ├── App.js
│   │   │   └── scss
│   │   │       └── App.scss                   <- 1. I'm here.
...
```
```SCSS
@import "../../../assets/scss/mediaqueries";   # CORRECT IMPORT
@import "./assets/scss/mediaqueries";          # WRONG IMPORT
@import "mediaqueries";                        # WRONG IMPORT
```

Now you could use mixin like this:

```SCSS
@include breakpoints( "medium" ) {
  #app {
    ...
    ### some SCSS ###
    ...
  }
}
```
