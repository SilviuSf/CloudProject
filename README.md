# Covid19 Information and Moral Wellbeing

## Introducere
Covid19 Information and Moral Wellbeing este aplicatia proiectata pentru seminarul de Cloud Computing. Acest document descrie problema abordata si subliniaza principalele metode utilizate in crearea aplicatiei.

## Descriere problema
Incepand cu sfarsitul anului 2019, omenirea s-a confruntat (si inca se confrunta) cu un virus nou descoperit, care pune in pericol vieti omenesti si care pune sub semnul intrebarii ceea ce oamenii cunosteau drept "normalitate". 
Pentru protectia lor, in multe parti ale lumii, oamenii s-au vazut nevoiti sa isi schimbe complet stilul de viata si sa se auto-izoleze. Acest lucru cantareste greu, pentru unii dintre noi, iar sanatatea mentala a oamenilor este serios afectata.(1) Oamenii au inceput sa experimenteze sentimente de singuratate, teama sau anxietate, iar nivelul de stres a crescut simtitor.  
Cred ca unul dintre cei mai importanti pasi ce trebuie luati in considerare, de fiecare dintre noi, in combaterea sentimentelor ce ne dauneaza, este constientizarea a ceea ce simtim, urmat de incercarea imbunatatirii starii generale, dac este cazul.
Astfel, aplicatia construita are 3 parti: informare, constientizare, relaxare.

## Descriere API
Pentru informare, am folosit covid19api(2). Acest API pune la dispozitia utilizatorilor informatii real-time legat de situatia mondiala in ceea ce priveste raspandirea noului Coronavirus. API-ul ofera date privitor la numarul de noi infectati (in ultimele 24 de ore), numarul de noi morti si cel de noi vindecati, urmat de totalurile pentru infectati, decedati si vindecati, pentru fiecare tara, apoi data la care s-a adus ultimul update.
Pentru constientizarea sentimentelor, am utilizat sentim-api(3). Acesta este un API care analizeaza textul introdus de utilizator. Rezultatul obtinut incadreaza starea generala a celui care a introdus textul intr-una din urmatoarele categorii: positive, neutral sau negative.
Pentru partea de destindere, am utilizat chucknorris.io(4). Acest API ii permite utilizatorului sa acceseze o gluma cu Chuck Norris, la intamplare. 

Puse unul dupa altul, cele 3 API-uri construiesc un mediu ce permite utilizatorilor sa stea informati in legatura cu situatia mondiala in ceea ce priveste noul Coronavirus, sa isi exprime sentimentele si sa isi descrie starea, apoi sa se relaxeze, citind cateva glume. 

## Flux de date

### Covid19 API
GET / https://api.covid19api.com/summary

Response: 
```
    {
  "Global": {
    "NewConfirmed": 107108,
    "TotalConfirmed": 5700779,
    "NewDeaths": 7496,
    "TotalDeaths": 379549,
    "NewRecovered": 39651,
    "TotalRecovered": 1495209
  },
  "Countries": [
    {
      "Country": "Afghanistan",
      "CountryCode": "AF",
      "Slug": "afghanistan",
      "NewConfirmed": 276,
      "TotalConfirmed": 4963,
      "NewDeaths": 5,
      "TotalDeaths": 127,
      "NewRecovered": 52,
      "TotalRecovered": 610,
      "Date": "2020-05-13T10:29:14Z"
    }, etc.
```

### Sentiment Analysis API

GET / https://sentim-api.herokuapp.com/api/v1/

Request:
```
headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
    }
body: {
        text : [userInput]
    }
```

Response: 
```
{
    "result" : {
        "polarity" : [value],
        "type" : [value]  --> either negative, neutral or positive 
    },
    "sentences" : {
        {
            "sentence" : "[first_sentence]",
            "sentiment" : {
                "polarity" : [value],
                "type" : [value]
            }
        },
        etc.
    }
}
```
Acest API returneaza si analiza pe fiecare propozitie introdusa, dar, pentru scopul acestui proiect, s-a luat in considerare doar resultatul "overall".

### Chuck Norris API

GET / https://api.chucknorris.io/jokes/random

Response:
```
{
    "categories" : [value],
    "created_at" : [value],
    "icon_url" : [value],
    "id": [value],
    "updated_at" : [value],
    "url" : [value],
    "value" : [actual_joke]
}
```

## Capturi

### Pagina initiala

https://user-images.githubusercontent.com/40847757/81804837-7904b600-9522-11ea-89eb-864f34ae419e.png

### Rezultatul call-ului Covid-19 API

https://user-images.githubusercontent.com/40847757/81805123-fc260c00-9522-11ea-8ae8-384bb6195de9.png

### Rezultatul call-ului Sentiment Analysis API

https://user-images.githubusercontent.com/40847757/81805133-fe886600-9522-11ea-9690-6d0c08b2045b.png

### Rezultatul call-ului Chuck Norris API

https://user-images.githubusercontent.com/40847757/81805140-021bed00-9523-11ea-9f5c-8588e68a281a.png

## Referinte
(1)http://www.euro.who.int/en/health-topics/health-emergencies/coronavirus-covid-19/novel-coronavirus-2019-ncov-technical-guidance-OLD/coronavirus-disease-covid-19-outbreak-technical-guidance-europe-OLD/mental-health-and-covid-19

(2)https://covid19api.com/

(3)https://sentim-api.herokuapp.com/

(4)https://api.chucknorris.io/