var express = require('express');
var router = express.Router();

/* GET users listing. */

var users = [
  {
    "_id": "564bab57e14a8bde47f06044",
    "index": 0,
    "guid": "f89763dc-0333-4bf4-acc1-c6bd0252f1ac",
    "isActive": true,
    "balance": "$2,766.01",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "green",
    "name": "Nelson Wilkins",
    "gender": "male",
    "company": "ZENSURE",
    "email": "nelsonwilkins@zensure.com",
    "phone": "+1 (896) 409-3769",
    "address": "109 Hausman Street, Bloomington, Kentucky, 4758",
    "about": "Ex aliqua eu pariatur mollit reprehenderit labore ut ea enim aliqua. Deserunt pariatur in in eiusmod quis do sint pariatur dolore amet pariatur. Lorem velit et do adipisicing nostrud magna in adipisicing enim sint.\r\n",
    "registered": "2014-12-02T06:45:08 +08:00",
    "latitude": -25.051884,
    "longitude": 9.680784,
    "tags": [
      "reprehenderit",
      "eu",
      "proident",
      "ullamco",
      "ullamco",
      "esse",
      "do"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Cash Winters"
      },
      {
        "id": 1,
        "name": "Mcdowell Fleming"
      },
      {
        "id": 2,
        "name": "Neva Grant"
      }
    ],
    "greeting": "Hello, Nelson Wilkins! You have 10 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "564bab573e82341b9d8648aa",
    "index": 1,
    "guid": "01c3dfef-734a-4ef6-847f-3c95a2982f1b",
    "isActive": true,
    "balance": "$3,769.40",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "blue",
    "name": "Simone Trujillo",
    "gender": "female",
    "company": "IDETICA",
    "email": "simonetrujillo@idetica.com",
    "phone": "+1 (860) 515-3821",
    "address": "866 Thatford Avenue, Kieler, Utah, 8711",
    "about": "Proident occaecat sint quis id. Commodo duis ut amet minim sit sint. Non nulla fugiat Lorem consequat.\r\n",
    "registered": "2014-04-25T09:27:19 +07:00",
    "latitude": -78.076029,
    "longitude": -63.249989,
    "tags": [
      "aliquip",
      "elit",
      "do",
      "aute",
      "nisi",
      "cupidatat",
      "sint"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Elliott Vaughn"
      },
      {
        "id": 1,
        "name": "Toni Beard"
      },
      {
        "id": 2,
        "name": "Selma Stevens"
      }
    ],
    "greeting": "Hello, Simone Trujillo! You have 6 unread messages.",
    "favoriteFruit": "apple"
  }];

router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
