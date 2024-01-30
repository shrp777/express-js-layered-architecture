# Express.js layered architecture

- Preuve de concept : séparation router - action - service
- API réalisée avec Express.js

## Installation des dépendances NPM

```SH
npm i
```

## Tests

### Récupération des pizzas

```SH
curl localhost:3000/pizzas
```

Résultat attendu :

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

__Alexandre Leroux__  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
