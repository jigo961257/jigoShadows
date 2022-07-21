# what is this?

    this help's to given a shadows to every divs and images together in single page at time. show it's good to use this small fetures.

# Installation

`npm i jigoshadows --save`

So...

```
import { jigoShadows } from "jigoShadows";

jigoShadows({
    appliedFor: "div",
    shadow_way: "soft",
    padding: false,
});
```

## options

jigoShadows supports 3 options,

* *shadow_way* - _hard | soft_ (defaults to soft)
* *padding* - _boolean_ (defaults to false)
* *appliedFor* - _div | image_ (*required)