# Reproduction of [issue 230](https://github.com/Akryum/vue-virtual-scroller/issues/230)

## Instalation
```
npm install
```

## Execution
```
npm run serve
Browser http://localhost:8080/
```

## Reproduction
1. Click the **View 1** button
2. Scroll down a bit the virtual table from view 1
3. Click the **View 2** button
4. Scroll down a bit the virtual table from view 2
5. Click the **View 1** button

I tested on google chrome, and after those 5 steps I can see the issue ocurring almost 100% of the time.
