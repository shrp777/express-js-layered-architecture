# Express.js Layered Architecture

- Preuve de concept : séparation **serveur / application / router / action / service**
- API réalisée avec Express.js

Arborescence :

```TREE
├── actions/
│   ├── GetPizzasAction.js
├── node_modules/
├── routes/
│   ├── pizzasRouter.js
├── services/
│   ├── PizzaService.js
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
├── README.md
├── server.js
```

## Installation des dépendances NPM

`npm install`

## Démarrage du serveur

`npm run dev`

ou `npm run dev:windows`

## Tests

### Récupération des pizzas

```SH
curl localhost:3000/pizzas
```

Résultat attendu :

```TEXT
HTTP/1.1 200 OK
```

```JSON
[{"name":"Margherita","price":7},{"name":"Quattro Stagioni","price":12}]
```

### Method Not Allowed (405)

```SH
curl -i -X POST localhost:3000/pizzas
```

- Résultat attendu :

```TEXT
HTTP/1.1 405 Method Not Allowed
```

### Not Found (404)

```SH
curl -i localhost:3000/test
```

- Résultat attendu :

```TEXT
HTTP/1.1 404 Not Found
```

--

!["Logotype Shrp"](https://shrp.dev/images/shrp.png)

**Alexandre Leroux**  
*Enseignant / Formateur*  
*Développeur logiciel web & mobile*

Nancy (Grand Est, France)

<https://shrp.dev>
