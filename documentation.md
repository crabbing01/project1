
# PROJECT NAME

---

Name: Ryan Dietz

Date: 4/3/19

Project Topic: MLB Players

URL: 

---


### 1. Data Format and Storage

Data point fields:
- `Field 1`: Position       `Type: String`
- `Field 2`: All-Star       `Type: String`
- `Field 3`: Contract       `Type: Number`
- `Field 4`: Batting Average       `Type: Number`
- `Field 5`: Teams Played For       `Type: [String]`

Schema: 
```javascript
{
    position: String,
    all_star: String,
    contract: Number, 
    batting_average: Number,
    teams_played_for: [String]
}
```

### 2. Add New Data

HTML form route: `/addPlayer`

POST endpoint route: `/api/addPlayer`

Example Node.js POST request to endpoint: 
```javascript
var request = require("request");

var options = { 
    method: 'POST',
    url: 'http://localhost:3000/api/...',
    headers: { 
        'content-type': 'application/x-www-form-urlencoded' 
    },
    form: { 
       name: 'Manny Machado',
       position: 'SS/3B',
       contract: 300000000,
       batting_average: 0.282,
       teams_played_for: ["Baltimore Orioles", "Los Angeles Dodgers", "San Diego Padres"]
    } 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

### 3. View Data

GET endpoint route: `/api/allPlayers`

### 4. Search Data

Search Field: name

### 5. Navigation Pages

Navigation Filters
1. List of All the Player's Names -> ` /api/all `
2. Pitchers With a Decen Batting Average -> ` /api/pitchers  `
3. List of All Stars -> `  /api/allstar  `
4. Players with Large Contracts -> `  /api/longterm  `
5. PLayers who play 3B -> `  /api/third  `

