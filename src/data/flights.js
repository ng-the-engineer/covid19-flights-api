const records = [
  {
    "airline": "BA",
    "flight_number": "323",
    "origin": "Paris",
    "destination": "London",
    "arrival_date": "03/03/2020",
    "case_number": "106",
    "seat_number": ""
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "04/03/2020",
    "case_number": "106",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "838",
    "origin": "Hong Kong",
    "destination": "Vancouver",
    "arrival_date": "06/03/2020",
    "case_number": "157 and 158",
    "seat_number": ""
  },
  {
    "airline": "TK",
    "flight_number": "695",
    "origin": "Cairo",
    "destination": "Istanbul",
    "arrival_date": "07/03/2020",
    "case_number": "119-121- 123-127 and 129",
    "seat_number": ""
  },
  {
    "airline": "TK",
    "flight_number": "70",
    "origin": "Istanbul",
    "destination": "Hong Kong",
    "arrival_date": "07/03/2020",
    "case_number": "119-121- 123-127 and 129",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "320",
    "origin": "Madrid",
    "destination": "Hong Kong",
    "arrival_date": "08/03/2020",
    "case_number": "notified by Health Commission of Guangdong Province and Case 122",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "930",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "08/03/2020",
    "case_number": "132",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "08/03/2020",
    "case_number": "134",
    "seat_number": ""
  },
  {
    "airline": "HV",
    "flight_number": "5760",
    "origin": "Morocco",
    "destination": "Amsterdam",
    "arrival_date": "08/03/2020",
    "case_number": "137 and 142",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "857",
    "origin": "Seattle",
    "destination": "Hong Kong",
    "arrival_date": "09/03/2020",
    "case_number": "notified by the National Health Commission",
    "seat_number": ""
  },
  {
    "airline": "KA",
    "flight_number": "900",
    "origin": "Hong Kong",
    "destination": "Beijing",
    "arrival_date": "09/03/2020",
    "case_number": "notified by the National Health Commission",
    "seat_number": ""
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "09/03/2020",
    "case_number": "137 and 142",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "260",
    "origin": "Paris",
    "destination": "Hong Kong",
    "arrival_date": "10/03/2020",
    "case_number": "notified by Health Commission of Guangdong Province",
    "seat_number": ""
  },
  {
    "airline": "NH",
    "flight_number": "811",
    "origin": "Tokyo",
    "destination": "Hong Kong",
    "arrival_date": "10/03/2020",
    "case_number": "136 and a case confirmed in Japan",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "10/03/2020",
    "case_number": "notified by the health authority of Singapore",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "759",
    "origin": "Hong Kong",
    "destination": "Singapore",
    "arrival_date": "10/03/2020",
    "case_number": "notified by the health authority of Singapore",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "171",
    "origin": "Hong Kong",
    "destination": "Perth",
    "arrival_date": "10/03/2020",
    "case_number": "notified by the health authority of Australia",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "811",
    "origin": "Boston",
    "destination": "Hong Kong",
    "arrival_date": "10/03/2020",
    "case_number": "147- 148 and 167",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "10/03/2020",
    "case_number": "151",
    "seat_number": ""
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "11/03/2020",
    "case_number": "notified by the Health Commission of Guangdong province",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "142",
    "origin": "Madrid",
    "destination": "Dubai",
    "arrival_date": "11/03/2020",
    "case_number": "139",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "11/03/2020",
    "case_number": "139",
    "seat_number": ""
  },
  {
    "airline": "BA",
    "flight_number": "31",
    "origin": "London",
    "destination": "Hong Kong ",
    "arrival_date": "11/03/2020",
    "case_number": "141",
    "seat_number": ""
  },
  {
    "airline": "JL",
    "flight_number": "2504",
    "origin": "Hokkaido",
    "destination": "Osaka",
    "arrival_date": "11/03/2020",
    "case_number": "143 and 153",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "561",
    "origin": "Osaka",
    "destination": "Hong Kong",
    "arrival_date": "11/03/2020",
    "case_number": "143 and 153",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "320",
    "origin": "Madrid",
    "destination": "Hong Kong",
    "arrival_date": "11/03/2020",
    "case_number": "161",
    "seat_number": ""
  },
  {
    "airline": "LX",
    "flight_number": "138",
    "origin": "Zurich",
    "destination": "Hong Kong",
    "arrival_date": "11/03/2020",
    "case_number": "168",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "902",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "13/03/2020",
    "case_number": "notified by the Health Commission of Guangdong province",
    "seat_number": ""
  },
  {
    "airline": "LH",
    "flight_number": "119",
    "origin": "Munich",
    "destination": "Frankfurt",
    "arrival_date": "12/03/2020",
    "case_number": "144",
    "seat_number": ""
  },
  {
    "airline": "LH",
    "flight_number": "796",
    "origin": "Frankfurt",
    "destination": "Hong Kong",
    "arrival_date": "13/03/2020",
    "case_number": "144 and case notified by the Health Commission of Guangdong province",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "260",
    "origin": "Paris",
    "destination": "Hong Kong",
    "arrival_date": "13/03/2020",
    "case_number": "145- 146 and 159",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "13/03/2020",
    "case_number": "notified by the Health Bureau of Macao Special Administrative Region",
    "seat_number": ""
  },
  {
    "airline": "BA",
    "flight_number": "953",
    "origin": "Munich",
    "destination": "London",
    "arrival_date": "13/03/2020",
    "case_number": "154",
    "seat_number": ""
  },
  {
    "airline": "MS",
    "flight_number": "960",
    "origin": "Cairo",
    "destination": "Bangkok ",
    "arrival_date": "14/03/2020",
    "case_number": "Case 152",
    "seat_number": ""
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "14/03/2020",
    "case_number": "154",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "382",
    "origin": "Zurich",
    "destination": "Hong Kong",
    "arrival_date": "14/03/2020",
    "case_number": "notified by the Health Commission of Guangdong province",
    "seat_number": ""
  },
  {
    "airline": "KA",
    "flight_number": "5930",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "14/03/2020",
    "case_number": "notified by the Health Commission of Guangdong province",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "857",
    "origin": "Seattle",
    "destination": "Hong Kong",
    "arrival_date": "14/03/2020",
    "case_number": "notified by the Health Commission of Guangdong province",
    "seat_number": ""
  },
  {
    "airline": "BA",
    "flight_number": "733",
    "origin": "Geneva",
    "destination": "London",
    "arrival_date": "14/03/2020",
    "case_number": "160",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "270",
    "origin": "Netherlands",
    "destination": "Hong Kong ",
    "arrival_date": "15/03/2020",
    "case_number": "150",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "837",
    "origin": "Vancouver",
    "destination": "Hong Kong",
    "arrival_date": "15/03/2020",
    "case_number": "157 and 158",
    "seat_number": ""
  },
  {
    "airline": "BA",
    "flight_number": "33",
    "origin": "London",
    "destination": "Kuala Lumpur ",
    "arrival_date": "15/03/2020",
    "case_number": "160 and 164",
    "seat_number": ""
  },
  {
    "airline": "MH",
    "flight_number": "78",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "15/03/2020",
    "case_number": "160",
    "seat_number": ""
  },
  {
    "airline": "QR",
    "flight_number": "160",
    "origin": "Copenhagen",
    "destination": "Doha",
    "arrival_date": "15/03/2020",
    "case_number": "165",
    "seat_number": ""
  },
  {
    "airline": "LH",
    "flight_number": "796",
    "origin": "Frankfurt",
    "destination": "Hong Kong",
    "arrival_date": "15/03/2020",
    "case_number": "notified by the Health Commission of Guangdong province",
    "seat_number": ""
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "15/03/2020",
    "case_number": "notified by the Health Commission of Guangdong province",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "5734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "16/03/2020",
    "case_number": "164",
    "seat_number": ""
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "16/03/2020",
    "case_number": "165",
    "seat_number": ""
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "16/03/2020 ",
    "case_number": "166",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "19/03/2020",
    "case_number": "290",
    "seat_number": "48H"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "19/03/2020",
    "case_number": "292",
    "seat_number": "67G"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "19/03/2020",
    "case_number": "300",
    "seat_number": "44E"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "19/03/2020",
    "case_number": "324",
    "seat_number": "44F"
  },
  {
    "airline": "TG",
    "flight_number": "638",
    "origin": "Bangkok",
    "destination": "Hong Kong",
    "arrival_date": "19/03/2020",
    "case_number": "370",
    "seat_number": "35K"
  },
  {
    "airline": "SQ",
    "flight_number": "856",
    "origin": "Singapore",
    "destination": "Hong Kong",
    "arrival_date": "19/03/2020",
    "case_number": "409",
    "seat_number": "36D"
  },
  {
    "airline": "CX",
    "flight_number": "254",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "19/03/2020",
    "case_number": "454",
    "seat_number": "65C"
  },
  {
    "airline": "CX",
    "flight_number": "716",
    "origin": "Singapore",
    "destination": "Hong Kong",
    "arrival_date": "19/03/2020",
    "case_number": "492",
    "seat_number": "68K"
  },
  {
    "airline": "CX",
    "flight_number": "930",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "19/03/2020",
    "case_number": "Case notified by the Health Commission of Guangdong province",
    "seat_number": "71H"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "295",
    "seat_number": "50A"
  },
  {
    "airline": "CX",
    "flight_number": "216",
    "origin": "Manchester",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "296",
    "seat_number": "61B"
  },
  {
    "airline": "LH",
    "flight_number": "796",
    "origin": "Frankfurt",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "297",
    "seat_number": "4G"
  },
  {
    "airline": "AC",
    "flight_number": "7",
    "origin": "Vancouver",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "298",
    "seat_number": "30H"
  },
  {
    "airline": "LH",
    "flight_number": "796",
    "origin": "Frankfurt",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "299",
    "seat_number": "33H"
  },
  {
    "airline": "CX",
    "flight_number": "658",
    "origin": "Singapore",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "300",
    "seat_number": "40D"
  },
  {
    "airline": "BR",
    "flight_number": "869",
    "origin": "Taipei",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "301",
    "seat_number": "47D"
  },
  {
    "airline": "BR",
    "flight_number": "869",
    "origin": "Taipei",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "302",
    "seat_number": "47C"
  },
  {
    "airline": "CX",
    "flight_number": "746",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "303",
    "seat_number": "59A"
  },
  {
    "airline": "CX",
    "flight_number": "930",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "304",
    "seat_number": "57A"
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "305",
    "seat_number": "41H"
  },
  {
    "airline": "LH",
    "flight_number": "796",
    "origin": "Frankfurt",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "306",
    "seat_number": "40G"
  },
  {
    "airline": "AC",
    "flight_number": "7",
    "origin": "Vancouver",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "307",
    "seat_number": "25C"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "308",
    "seat_number": "36E"
  },
  {
    "airline": "HX",
    "flight_number": "780",
    "origin": "Bangkok",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "309",
    "seat_number": "56K"
  },
  {
    "airline": "CX",
    "flight_number": "254",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "20/03/2020",
    "case_number": "310",
    "seat_number": "70C"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/03/2020",
    "case_number": "311",
    "seat_number": "68J"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "21/03/2020",
    "case_number": "312",
    "seat_number": "21F"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "21/03/2020",
    "case_number": "313",
    "seat_number": "21E"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "21/03/2020",
    "case_number": "314",
    "seat_number": "21D"
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/03/2020",
    "case_number": "315",
    "seat_number": "74E"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/03/2020",
    "case_number": "316",
    "seat_number": "9A"
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/03/2020",
    "case_number": "317",
    "seat_number": "32K"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/03/2020",
    "case_number": "318",
    "seat_number": "33A"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "21/03/2020",
    "case_number": "319",
    "seat_number": "45E"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "21/03/2020",
    "case_number": "320",
    "seat_number": "45F"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/03/2020",
    "case_number": "321",
    "seat_number": "43J"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/03/2020",
    "case_number": "322",
    "seat_number": "71D"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "323",
    "seat_number": "71D"
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "324",
    "seat_number": "17D"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "325",
    "seat_number": "76D"
  },
  {
    "airline": "CX",
    "flight_number": "216",
    "origin": "Manchester",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "326",
    "seat_number": "61H"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "327",
    "seat_number": "70G"
  },
  {
    "airline": "TG",
    "flight_number": "638",
    "origin": "Bangkok",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "328",
    "seat_number": "63K"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "329",
    "seat_number": "66F"
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "330",
    "seat_number": "59A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "331",
    "seat_number": "63A"
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "332",
    "seat_number": "49K"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "333",
    "seat_number": "33F"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "334",
    "seat_number": "33E"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "335",
    "seat_number": "63K"
  },
  {
    "airline": "CX",
    "flight_number": "288",
    "origin": "Frankfurt",
    "destination": "Hong Kong",
    "arrival_date": "22/03/2020",
    "case_number": "336",
    "seat_number": "32K"
  },
  {
    "airline": "CX",
    "flight_number": "260",
    "origin": "Paris",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "337",
    "seat_number": "43A"
  },
  {
    "airline": "CX",
    "flight_number": "748",
    "origin": "Johannesburg",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "338",
    "seat_number": "32B"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "339",
    "seat_number": "25H"
  },
  {
    "airline": "CX",
    "flight_number": "156",
    "origin": "Brisbane",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "340",
    "seat_number": "20K"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "341",
    "seat_number": "29C"
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "342",
    "seat_number": "37H"
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "343",
    "seat_number": "30B"
  },
  {
    "airline": "LX",
    "flight_number": "138",
    "origin": "Zurich",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "344",
    "seat_number": "30K"
  },
  {
    "airline": "LX",
    "flight_number": "138",
    "origin": "Zurich",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "345",
    "seat_number": "26K"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "346",
    "seat_number": "24K"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "347",
    "seat_number": "47H"
  },
  {
    "airline": "CX",
    "flight_number": "260",
    "origin": "Paris",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "348",
    "seat_number": "64K"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "349",
    "seat_number": "49A"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "350",
    "seat_number": "6A"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "23/03/2020",
    "case_number": "351",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "352",
    "seat_number": "68F"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "353",
    "seat_number": "63K"
  },
  {
    "airline": "CX",
    "flight_number": "104",
    "origin": "Melbourne",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "354",
    "seat_number": "Row75/76"
  },
  {
    "airline": "CX",
    "flight_number": "104",
    "origin": "Melbourne",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "355",
    "seat_number": "Row75/76"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "356",
    "seat_number": "32A"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "357",
    "seat_number": "87D"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "358",
    "seat_number": "Row 70"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "359",
    "seat_number": "60G"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "360",
    "seat_number": "39H"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "361",
    "seat_number": "3F"
  },
  {
    "airline": "CX",
    "flight_number": "716",
    "origin": "Singapore",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "362",
    "seat_number": "43E"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "363",
    "seat_number": ""
  },
  {
    "airline": "NH",
    "flight_number": "1929",
    "origin": "Tokyo",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "364",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "365",
    "seat_number": "49B"
  },
  {
    "airline": "CX",
    "flight_number": "716",
    "origin": "Singapore",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "366",
    "seat_number": ""
  },
  {
    "airline": "SQ",
    "flight_number": "860",
    "origin": "Shanghai",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "367",
    "seat_number": "22A"
  },
  {
    "airline": "CX",
    "flight_number": "893",
    "origin": "San Francisco",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "368",
    "seat_number": "41H"
  },
  {
    "airline": "CX",
    "flight_number": "930",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "369",
    "seat_number": "41A"
  },
  {
    "airline": "CX",
    "flight_number": "893",
    "origin": "San Francisco",
    "destination": "Hong Kong",
    "arrival_date": "24/03/2020",
    "case_number": "370",
    "seat_number": "30E"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "371",
    "seat_number": "38D"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "372",
    "seat_number": "33A"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "373",
    "seat_number": "40A"
  },
  {
    "airline": "CX",
    "flight_number": "930",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "374",
    "seat_number": "48H"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "375",
    "seat_number": "67E"
  },
  {
    "airline": "LX",
    "flight_number": "138",
    "origin": "Zurich",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "376",
    "seat_number": "42G"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "377",
    "seat_number": "43K"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "378",
    "seat_number": "11A"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "379",
    "seat_number": "6J"
  },
  {
    "airline": "LX",
    "flight_number": "138",
    "origin": "Zurich",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "380",
    "seat_number": "25G"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "381",
    "seat_number": "39A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "382",
    "seat_number": "34A"
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "383",
    "seat_number": "16J"
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "384",
    "seat_number": "17J"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "385",
    "seat_number": "20D"
  },
  {
    "airline": "CX",
    "flight_number": " 238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "386",
    "seat_number": "33C"
  },
  {
    "airline": "LX",
    "flight_number": "138",
    "origin": "Zurich",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "387",
    "seat_number": "12F"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "388",
    "seat_number": "39H"
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "389",
    "seat_number": "24B"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "390",
    "seat_number": "35J"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "391",
    "seat_number": "46G"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "392",
    "seat_number": "69H"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "393",
    "seat_number": "63H"
  },
  {
    "airline": "LX",
    "flight_number": "318",
    "origin": "Zurich",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "394",
    "seat_number": "39F"
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "395",
    "seat_number": "21E"
  },
  {
    "airline": "CX",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "396",
    "seat_number": "61D"
  },
  {
    "airline": "MH",
    "flight_number": "72",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "397",
    "seat_number": "23G"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "398",
    "seat_number": "12G"
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "399",
    "seat_number": "41A"
  },
  {
    "airline": "LX",
    "flight_number": "138",
    "origin": "Zurich",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "400",
    "seat_number": "31G"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "401",
    "seat_number": "69D"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "25/03/2020",
    "case_number": "402",
    "seat_number": "43C"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "403",
    "seat_number": "33D"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "404",
    "seat_number": "33F"
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "405",
    "seat_number": "64F"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "406",
    "seat_number": "59J"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "407",
    "seat_number": "1D"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "408",
    "seat_number": "59K"
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "409",
    "seat_number": "30F"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "410",
    "seat_number": "69H"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "411",
    "seat_number": "12K- 22K"
  },
  {
    "airline": "CX",
    "flight_number": "216",
    "origin": "Manchester",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "412",
    "seat_number": "62D"
  },
  {
    "airline": "CX",
    "flight_number": "873",
    "origin": "San Francisco",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "413",
    "seat_number": "19A"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "414",
    "seat_number": "74G"
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "415",
    "seat_number": "42C"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "416",
    "seat_number": "55C"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "417",
    "seat_number": "63E"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "418",
    "seat_number": "64G"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "419",
    "seat_number": "55A"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "420",
    "seat_number": "30K"
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "26/03/2020",
    "case_number": "421",
    "seat_number": "63K"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "422",
    "seat_number": "10B"
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "423",
    "seat_number": "67D"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "424",
    "seat_number": "22K"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "425",
    "seat_number": "28K"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "426",
    "seat_number": "Cabin crew"
  },
  {
    "airline": "CX",
    "flight_number": "250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "427",
    "seat_number": "59A"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "428",
    "seat_number": "10A"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "429",
    "seat_number": "24J- 24K"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "430",
    "seat_number": "40F"
  },
  {
    "airline": "CX",
    "flight_number": " 250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "431",
    "seat_number": "43E"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "432",
    "seat_number": "58K"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "433",
    "seat_number": "58J"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "434",
    "seat_number": "25K"
  },
  {
    "airline": "CX",
    "flight_number": "845",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "435",
    "seat_number": "59C"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "436",
    "seat_number": "60J"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "437",
    "seat_number": "2K"
  },
  {
    "airline": "CX",
    "flight_number": "865",
    "origin": "Vancouver",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "438",
    "seat_number": "19K"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "27/03/2020",
    "case_number": "439",
    "seat_number": "21G"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "440",
    "seat_number": "30A"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "441",
    "seat_number": "54B"
  },
  {
    "airline": "CX",
    "flight_number": "216",
    "origin": "Manchester",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "442",
    "seat_number": "59A"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "443",
    "seat_number": "62K"
  },
  {
    "airline": "CX",
    "flight_number": "784",
    "origin": "Bali",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "444",
    "seat_number": "15A"
  },
  {
    "airline": "CX",
    "flight_number": " 250",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "445",
    "seat_number": "20D"
  },
  {
    "airline": "CX",
    "flight_number": "216",
    "origin": "Manchester",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "446",
    "seat_number": "12D"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "447",
    "seat_number": "32C"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "448",
    "seat_number": "65K"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "449",
    "seat_number": "58C"
  },
  {
    "airline": "CX",
    "flight_number": "857",
    "origin": "Seattle",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "450",
    "seat_number": "44G"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "451",
    "seat_number": "6A"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "452",
    "seat_number": "71G"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "453",
    "seat_number": "71K"
  },
  {
    "airline": "BA",
    "flight_number": " 27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "454",
    "seat_number": "73K"
  },
  {
    "airline": "BA",
    "flight_number": " 27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "455",
    "seat_number": "72J or 72K"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "456",
    "seat_number": "53F"
  },
  {
    "airline": "BA",
    "flight_number": " 27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/03/2020",
    "case_number": "457",
    "seat_number": "26G"
  },
  {
    "airline": "GA",
    "flight_number": "876",
    "origin": "Jakarta",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "458",
    "seat_number": "43C"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "459",
    "seat_number": "52K"
  },
  {
    "airline": "CX",
    "flight_number": "260",
    "origin": "Paris",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "460",
    "seat_number": "19D"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "461",
    "seat_number": "46J"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "462",
    "seat_number": "39G"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "463",
    "seat_number": "65A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "464",
    "seat_number": "69A"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "465",
    "seat_number": "39G"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "466",
    "seat_number": "66D"
  },
  {
    "airline": "CX",
    "flight_number": "260",
    "origin": "France",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "467",
    "seat_number": "19G"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "468",
    "seat_number": "63G"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "469",
    "seat_number": "15B"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "470",
    "seat_number": "40A"
  },
  {
    "airline": "CX",
    "flight_number": "260",
    "origin": "France",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "471",
    "seat_number": "62K"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "472",
    "seat_number": "Economy class (Cabin crew)"
  },
  {
    "airline": "CX",
    "flight_number": "238",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "29/03/2020",
    "case_number": "473",
    "seat_number": "G61"
  },
  {
    "airline": "CX",
    "flight_number": "831",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "30/03/2020",
    "case_number": "474",
    "seat_number": "62C"
  },
  {
    "airline": "CX",
    "flight_number": "811",
    "origin": "Boston",
    "destination": "Hong Kong",
    "arrival_date": "30/03/2020",
    "case_number": "475",
    "seat_number": "11D"
  },
  {
    "airline": "CX",
    "flight_number": "851",
    "origin": "San Francisco",
    "destination": "Hong Kong",
    "arrival_date": "30/03/2020",
    "case_number": "476",
    "seat_number": "44J"
  },
  {
    "airline": "CX",
    "flight_number": "831",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "30/03/2020",
    "case_number": "477",
    "seat_number": "11K"
  },
  {
    "airline": "CX",
    "flight_number": "831",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "30/03/2020",
    "case_number": "478",
    "seat_number": "39G"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "30/03/2020",
    "case_number": "479",
    "seat_number": "50D"
  },
  {
    "airline": "CX",
    "flight_number": "256",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "30/03/2020",
    "case_number": "480",
    "seat_number": "32D"
  },
  {
    "airline": "CX",
    "flight_number": "831",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "30/03/2020",
    "case_number": "481",
    "seat_number": "62G"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "30/03/2020",
    "case_number": "482",
    "seat_number": "33H"
  },
  {
    "airline": "GA",
    "flight_number": "876",
    "origin": "Jakarta",
    "destination": "Hong Kong",
    "arrival_date": "31/03/2020",
    "case_number": "483",
    "seat_number": "32H"
  },
  {
    "airline": "CX",
    "flight_number": "216",
    "origin": "Manchester",
    "destination": "Hong Kong",
    "arrival_date": "31/03/2020",
    "case_number": "484",
    "seat_number": "70K"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "31/03/2020",
    "case_number": "485",
    "seat_number": "62J"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "31/03/2020",
    "case_number": "486",
    "seat_number": "62H"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "31/03/2020",
    "case_number": "487",
    "seat_number": "43A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "31/03/2020",
    "case_number": "488",
    "seat_number": "19A"
  },
  {
    "airline": "CX",
    "flight_number": "216",
    "origin": "Manchester",
    "destination": "Hong Kong",
    "arrival_date": "31/03/2020",
    "case_number": "489",
    "seat_number": "44A"
  },
  {
    "airline": "BA",
    "flight_number": " 27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "01/04/2020",
    "case_number": "490",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "491",
    "seat_number": "1K"
  },
  {
    "airline": "CX",
    "flight_number": "216",
    "origin": "Manchester",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "492",
    "seat_number": "32D"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "493",
    "seat_number": "62H"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "494",
    "seat_number": "25C"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "495",
    "seat_number": "41K"
  },
  {
    "airline": "CX",
    "flight_number": "521",
    "origin": "Tokyo",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "496",
    "seat_number": "46D"
  },
  {
    "airline": "CX",
    "flight_number": "521",
    "origin": "Tokyo",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "497",
    "seat_number": "39D- 40D"
  },
  {
    "airline": "CX",
    "flight_number": "841",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "498",
    "seat_number": "32D"
  },
  {
    "airline": "CX",
    "flight_number": "260",
    "origin": "Paris",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "499",
    "seat_number": "62J"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "500",
    "seat_number": "41J"
  },
  {
    "airline": "CX",
    "flight_number": "260",
    "origin": "Paris",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "501",
    "seat_number": "11G"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "502",
    "seat_number": "46D"
  },
  {
    "airline": "CX",
    "flight_number": "841",
    "origin": "New York",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "503",
    "seat_number": "A2"
  },
  {
    "airline": "CX",
    "flight_number": "260",
    "origin": "Paris",
    "destination": "Hong Kong",
    "arrival_date": "04/04/2020",
    "case_number": "504",
    "seat_number": "63K"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "05/04/2020",
    "case_number": "505",
    "seat_number": "39A"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "05/04/2020",
    "case_number": "506",
    "seat_number": "39B"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "05/04/2020",
    "case_number": "507",
    "seat_number": "37J"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "05/04/2020",
    "case_number": "508",
    "seat_number": "43H"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "05/04/2020",
    "case_number": "509",
    "seat_number": "43J"
  },
  {
    "airline": "JL",
    "flight_number": "29",
    "origin": "Tokyo",
    "destination": "Hong Kong",
    "arrival_date": "05/04/2020",
    "case_number": "510",
    "seat_number": ""
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "05/04/2020",
    "case_number": "511",
    "seat_number": "24K"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "05/04/2020",
    "case_number": "512",
    "seat_number": "61H"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "05/04/2020",
    "case_number": "513",
    "seat_number": "33F"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "05/04/2020",
    "case_number": "514",
    "seat_number": "65K"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "06/04/2020",
    "case_number": "515",
    "seat_number": "44A"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "06/04/2020",
    "case_number": "516",
    "seat_number": "68H"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "06/04/2020",
    "case_number": "517",
    "seat_number": "60D"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "06/04/2020",
    "case_number": "518",
    "seat_number": "48C"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "06/04/2020",
    "case_number": "519",
    "seat_number": "22F"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "07/04/2020",
    "case_number": "520",
    "seat_number": "68K"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "07/04/2020",
    "case_number": "521",
    "seat_number": "60A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "07/04/2020",
    "case_number": "522",
    "seat_number": "16G/D"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "08/04/2020",
    "case_number": "523",
    "seat_number": "64A"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "08/04/2020",
    "case_number": "524",
    "seat_number": "42A"
  },
  {
    "airline": "CX",
    "flight_number": "865",
    "origin": "Vancouver",
    "destination": "Hong Kong",
    "arrival_date": "08/04/2020",
    "case_number": "525",
    "seat_number": "Row 70/71"
  },
  {
    "airline": "CX",
    "flight_number": "865",
    "origin": "Vancouver",
    "destination": "Hong Kong",
    "arrival_date": "08/04/2020",
    "case_number": "526",
    "seat_number": "16A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "08/04/2020",
    "case_number": "527",
    "seat_number": "67D"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "08/04/2020",
    "case_number": "528",
    "seat_number": "32A"
  },
  {
    "airline": "GA",
    "flight_number": "876",
    "origin": "Jakarta",
    "destination": "Hong Kong",
    "arrival_date": "08/04/2020",
    "case_number": "529",
    "seat_number": "6K"
  },
  {
    "airline": "GA",
    "flight_number": "876",
    "origin": "Jakarta",
    "destination": "Hong Kong",
    "arrival_date": "08/04/2020",
    "case_number": "530",
    "seat_number": "6H"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "09/04/2020",
    "case_number": "531",
    "seat_number": "64B"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "09/04/2020",
    "case_number": "532",
    "seat_number": "26K"
  },
  {
    "airline": "CX",
    "flight_number": "521",
    "origin": "Tokyo",
    "destination": "Hong Kong",
    "arrival_date": "09/04/2020",
    "case_number": "533",
    "seat_number": "11K"
  },
  {
    "airline": "CX",
    "flight_number": "521",
    "origin": "Tokyo",
    "destination": "Hong Kong",
    "arrival_date": "09/04/2020",
    "case_number": "534",
    "seat_number": "19A"
  },
  {
    "airline": "CX",
    "flight_number": "521",
    "origin": "Tokyo",
    "destination": "Hong Kong",
    "arrival_date": "09/04/2020",
    "case_number": "535",
    "seat_number": "65D"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "10/04/2020",
    "case_number": "536",
    "seat_number": "60H"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "10/04/2020",
    "case_number": "537",
    "seat_number": "15K"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "10/04/2020",
    "case_number": "538",
    "seat_number": "21A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "10/04/2020",
    "case_number": "539",
    "seat_number": "60J"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "12/04/2020",
    "case_number": "540",
    "seat_number": "59G"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "12/04/2020",
    "case_number": "541",
    "seat_number": "55G"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "13/04/2020",
    "case_number": "542",
    "seat_number": "44D"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "13/04/2020",
    "case_number": "543",
    "seat_number": "30A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "14/04/2020",
    "case_number": "544",
    "seat_number": "48D"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "14/04/2020",
    "case_number": "545",
    "seat_number": "61A"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "14/04/2020",
    "case_number": "546",
    "seat_number": "3A"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "16/04/2020",
    "case_number": "547",
    "seat_number": "7K"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "16/04/2020",
    "case_number": "548",
    "seat_number": "64D"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "16/04/2020",
    "case_number": "549",
    "seat_number": "46H"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "17/04/2020",
    "case_number": "550",
    "seat_number": "63D"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "20/04/2020",
    "case_number": "551",
    "seat_number": "22D"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "20/04/2020",
    "case_number": "552",
    "seat_number": "20G"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "20/04/2020",
    "case_number": "553",
    "seat_number": "58J"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "20/04/2020",
    "case_number": "554",
    "seat_number": "47A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/04/2020",
    "case_number": "555",
    "seat_number": "17A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/04/2020",
    "case_number": "556",
    "seat_number": "63D"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/04/2020",
    "case_number": "557",
    "seat_number": "48A"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "21/04/2020",
    "case_number": "558",
    "seat_number": "17H"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "24/04/2020",
    "case_number": "559",
    "seat_number": "65G"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/04/2020",
    "case_number": "560",
    "seat_number": "48D"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "04/05/2020",
    "case_number": "561",
    "seat_number": "48H"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "06/05/2020",
    "case_number": "562",
    "seat_number": "42K"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "06/05/2020",
    "case_number": "563",
    "seat_number": "35F"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "06/05/2020",
    "case_number": "564",
    "seat_number": "28H"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "06/05/2020",
    "case_number": "565",
    "seat_number": "33E"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "09/05/2020",
    "case_number": "566",
    "seat_number": "17H"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "09/05/2020",
    "case_number": "567",
    "seat_number": "2J"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "09/05/2020",
    "case_number": "568",
    "seat_number": "34F"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "10/05/2020",
    "case_number": "569",
    "seat_number": "62G"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "10/05/2020",
    "case_number": "570",
    "seat_number": "32F"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "20/04/2020",
    "case_number": "571",
    "seat_number": "22D"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "20/04/2020",
    "case_number": "572",
    "seat_number": "20G"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "20/04/2020",
    "case_number": "573",
    "seat_number": "58J"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "20/04/2020",
    "case_number": "574",
    "seat_number": "47A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/04/2020",
    "case_number": "575",
    "seat_number": "17A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/04/2020",
    "case_number": "576",
    "seat_number": "63D"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/04/2020",
    "case_number": "577",
    "seat_number": "48A"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "21/04/2020",
    "case_number": "578",
    "seat_number": "17H"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "20/04/2020",
    "case_number": "579",
    "seat_number": "22D"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "20/04/2020",
    "case_number": "580",
    "seat_number": "20G"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "20/04/2020",
    "case_number": "581",
    "seat_number": "58J"
  },
  {
    "airline": "VS",
    "flight_number": "206",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "20/04/2020",
    "case_number": "582",
    "seat_number": "47A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/04/2020",
    "case_number": "583",
    "seat_number": "17A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/04/2020",
    "case_number": "584",
    "seat_number": "63D"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "21/04/2020",
    "case_number": "585",
    "seat_number": "48A"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "21/04/2020",
    "case_number": "586",
    "seat_number": "17H"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "24/04/2020",
    "case_number": "587",
    "seat_number": "65G"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "28/04/2020",
    "case_number": "588",
    "seat_number": "48D"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "04/05/2020",
    "case_number": "589",
    "seat_number": "48H"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "06/05/2020",
    "case_number": "590",
    "seat_number": "42K"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "06/05/2020",
    "case_number": "591",
    "seat_number": "35F"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "06/05/2020",
    "case_number": "592",
    "seat_number": "28H"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "06/05/2020",
    "case_number": "593",
    "seat_number": "33E"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "09/05/2020",
    "case_number": "594",
    "seat_number": "17H"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "09/05/2020",
    "case_number": "595",
    "seat_number": "2J"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "09/05/2020",
    "case_number": "596",
    "seat_number": "34F"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "10/05/2020",
    "case_number": "597",
    "seat_number": "62G"
  },
  {
    "airline": "BA",
    "flight_number": "27",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "10/05/2020",
    "case_number": "598",
    "seat_number": "32F"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "16/05/2020",
    "case_number": "599",
    "seat_number": "26G"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "16/05/2020",
    "case_number": "600",
    "seat_number": "26D"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "16/05/2020",
    "case_number": "601",
    "seat_number": "26A"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "17/05/2020",
    "case_number": "602",
    "seat_number": "73G"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "20/05/2020",
    "case_number": "603",
    "seat_number": "16K"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "20/05/2020",
    "case_number": "604",
    "seat_number": "21A"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "20/05/2020",
    "case_number": "605",
    "seat_number": "21K"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "20/05/2020",
    "case_number": "606",
    "seat_number": "17H"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "20/05/2020",
    "case_number": "607",
    "seat_number": "17C"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "20/05/2020",
    "case_number": "608",
    "seat_number": "16A"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "20/05/2020",
    "case_number": "609",
    "seat_number": "37K"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "22/05/2020",
    "case_number": "610",
    "seat_number": "41D"
  },
  {
    "airline": "CX",
    "flight_number": "521",
    "origin": "Tokyo",
    "destination": "Hong Kong",
    "arrival_date": "26/05/2020",
    "case_number": "611",
    "seat_number": "44G"
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "27/05/2020",
    "case_number": "612",
    "seat_number": "23D"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "613",
    "seat_number": "18J"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "614",
    "seat_number": "21D"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "615",
    "seat_number": "21E"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "616",
    "seat_number": "21B"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "617",
    "seat_number": "21C"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "618",
    "seat_number": "21A"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "619",
    "seat_number": "42B"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "620",
    "seat_number": "42H"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "621",
    "seat_number": "32H"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "622",
    "seat_number": "32D"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "623",
    "seat_number": "24A"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "624",
    "seat_number": "19C"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "625",
    "seat_number": "27K"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "626",
    "seat_number": "17D"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "627",
    "seat_number": "17F"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "28/05/2020",
    "case_number": "628",
    "seat_number": "32D"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "03/06/2020",
    "case_number": "629",
    "seat_number": "Row 48"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "03/06/2020",
    "case_number": "630",
    "seat_number": "48C"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "03/06/2020",
    "case_number": "631",
    "seat_number": "47C"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "03/06/2020",
    "case_number": "632",
    "seat_number": "44H"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "03/06/2020",
    "case_number": "633",
    "seat_number": "46D"
  },
  {
    "airline": "AC",
    "flight_number": "7",
    "origin": "Vancouver",
    "destination": "Hong Kong",
    "arrival_date": "04/06/2020",
    "case_number": "634",
    "seat_number": "33D"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "05/06/2020",
    "case_number": "635",
    "seat_number": "48D"
  },
  {
    "airline": "BA",
    "flight_number": "31",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "05/06/2020",
    "case_number": "636",
    "seat_number": "29D"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "06/06/2020",
    "case_number": "637",
    "seat_number": "43E"
  },
  {
    "airline": "GA",
    "flight_number": "876",
    "origin": "Jakarta",
    "destination": "Hong Kong",
    "arrival_date": "14/6/2020",
    "case_number": "638",
    "seat_number": "37D"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "16/6/2020",
    "case_number": "639",
    "seat_number": "42G"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "16/6/2020",
    "case_number": "640",
    "seat_number": "33H"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "16/6/2020",
    "case_number": "641",
    "seat_number": "41C"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "16/6/2020",
    "case_number": "642",
    "seat_number": "41A"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "16/6/2020",
    "case_number": "643",
    "seat_number": "20K"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "16/6/2020",
    "case_number": "644",
    "seat_number": "36D"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "16/6/2020",
    "case_number": "645",
    "seat_number": "31E"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "16/6/2020",
    "case_number": "646",
    "seat_number": "63A"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "16/6/2020",
    "case_number": "647",
    "seat_number": "45D"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "16/6/2020",
    "case_number": "648",
    "seat_number": "43F"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "16/6/2020",
    "case_number": "649",
    "seat_number": "43C"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "16/6/2020",
    "case_number": "650",
    "seat_number": "43D"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "19/6/2020",
    "case_number": "651",
    "seat_number": "47B- Row 48"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "652",
    "seat_number": "37K"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "653",
    "seat_number": "30B"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "654",
    "seat_number": "20H"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "655",
    "seat_number": "44D"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "656",
    "seat_number": "40K"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "657",
    "seat_number": "44G"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "658",
    "seat_number": "Row 40"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "659",
    "seat_number": "36G- 44E"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "660",
    "seat_number": "25E"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "661",
    "seat_number": "28K"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "662",
    "seat_number": "29F"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "663",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "664",
    "seat_number": "30K"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "665",
    "seat_number": "Row 40"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "666",
    "seat_number": "34A"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "667",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "668",
    "seat_number": "20J/K"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "669",
    "seat_number": "26A"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "670",
    "seat_number": "36J"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "671",
    "seat_number": "36K"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "672",
    "seat_number": "33I"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "673",
    "seat_number": "Row 30"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "674",
    "seat_number": "18H"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "675",
    "seat_number": "36H"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "676",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "677",
    "seat_number": "Row 40"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "20/6/2020",
    "case_number": "678",
    "seat_number": "Row 40"
  },
  {
    "airline": "CX",
    "flight_number": "798",
    "origin": "Jakarta",
    "destination": "Hong Kong",
    "arrival_date": "21/6/2020",
    "case_number": "679",
    "seat_number": "72D"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "21/6/2020",
    "case_number": "680",
    "seat_number": "29E"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "21/6/2020",
    "case_number": "681",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "21/6/2020",
    "case_number": "682",
    "seat_number": "39H"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "21/6/2020",
    "case_number": "683",
    "seat_number": "69G"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "684",
    "seat_number": "72D"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "685",
    "seat_number": "29H"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "686",
    "seat_number": "27F"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "687",
    "seat_number": "27J"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "688",
    "seat_number": "27K"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "689",
    "seat_number": "21H"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "690",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "691",
    "seat_number": "26A"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "692",
    "seat_number": "20H"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "693",
    "seat_number": "29B"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "694",
    "seat_number": "27H"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "695",
    "seat_number": "47G"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "696",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "697",
    "seat_number": "34C"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "698",
    "seat_number": "24K"
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "23/06/2020",
    "case_number": "699",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/06/2020",
    "case_number": "700",
    "seat_number": "34C"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "24/06/2020",
    "case_number": "701",
    "seat_number": "45K"
  },
  {
    "airline": "TK",
    "flight_number": "70",
    "origin": "Istanbul",
    "destination": "Hong Kong",
    "arrival_date": "25/06/2020",
    "case_number": "702",
    "seat_number": "32A"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "25/06/2020",
    "case_number": "703",
    "seat_number": "42A"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "26/06/2020",
    "case_number": "704",
    "seat_number": "71C"
  },
  {
    "airline": "AI",
    "flight_number": "1314",
    "origin": "Delhi and Kolkata",
    "destination": "Hong Kong",
    "arrival_date": "27/06/2020",
    "case_number": "705",
    "seat_number": "18A"
  },
  {
    "airline": "AI",
    "flight_number": "1314",
    "origin": "Delhi and Kolkata",
    "destination": "Hong Kong",
    "arrival_date": "27/06/2020",
    "case_number": "706",
    "seat_number": "10C"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "28/06/2020",
    "case_number": "707",
    "seat_number": "46G"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "28/06/2020",
    "case_number": "708",
    "seat_number": "57H"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "28/06/2020",
    "case_number": "709",
    "seat_number": "60C"
  },
  {
    "airline": "OZ",
    "flight_number": "721",
    "origin": "Seoul",
    "destination": "Hong Kong",
    "arrival_date": "30/06/2020",
    "case_number": "710",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "30/06/2020",
    "case_number": "711",
    "seat_number": "Row 25"
  },
  {
    "airline": "ET",
    "flight_number": "5611",
    "origin": "Mumbai",
    "destination": "Hong Kong",
    "arrival_date": "30/06/2020",
    "case_number": "712",
    "seat_number": "Row 34"
  },
  {
    "airline": "GA",
    "flight_number": "876",
    "origin": "Jakarta",
    "destination": "Hong Kong",
    "arrival_date": "01/07/2020",
    "case_number": "713",
    "seat_number": "51D"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "01/07/2020",
    "case_number": "714",
    "seat_number": ""
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "01/07/2020",
    "case_number": "715",
    "seat_number": "32A"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "01/07/2020",
    "case_number": "716",
    "seat_number": "43E"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "01/07/2020",
    "case_number": "717",
    "seat_number": "42K"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "01/07/2020",
    "case_number": "718",
    "seat_number": "42H"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "01/07/2020",
    "case_number": "719",
    "seat_number": "41D"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "01/07/2020",
    "case_number": "720",
    "seat_number": "35H"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "01/07/2020",
    "case_number": "721",
    "seat_number": "32C"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "01/07/2020",
    "case_number": "722",
    "seat_number": "40A"
  },
  {
    "airline": "TK",
    "flight_number": "70",
    "origin": "Istanbul",
    "destination": "Hong Kong",
    "arrival_date": "02/07/2020",
    "case_number": "723",
    "seat_number": "11A"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "02/07/2020",
    "case_number": "724",
    "seat_number": "52G"
  },
  {
    "airline": "BA",
    "flight_number": "31",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "02/07/2020",
    "case_number": "725",
    "seat_number": "32F"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "03/07/2020",
    "case_number": "726",
    "seat_number": "32K"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "03/07/2020",
    "case_number": "727",
    "seat_number": "27E"
  },
  {
    "airline": "BR",
    "flight_number": "871",
    "origin": "Taipei",
    "destination": "Hong Kong",
    "arrival_date": "03/07/2020",
    "case_number": "728",
    "seat_number": "57H"
  },
  {
    "airline": "AC",
    "flight_number": "7",
    "origin": "Vancouver",
    "destination": "Hong Kong",
    "arrival_date": "03/07/2020",
    "case_number": "729",
    "seat_number": "39K"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "03/07/2020",
    "case_number": "730",
    "seat_number": "26J"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "03/07/2020",
    "case_number": "731",
    "seat_number": "25D"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "03/07/2020",
    "case_number": "732",
    "seat_number": "32A"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "03/07/2020",
    "case_number": "733",
    "seat_number": "17C"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "03/07/2020",
    "case_number": "734",
    "seat_number": "19D"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "04/07/2020",
    "case_number": "735",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "04/07/2020",
    "case_number": "736",
    "seat_number": "24D"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "04/07/2020",
    "case_number": "737",
    "seat_number": "28D"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "04/07/2020",
    "case_number": "738",
    "seat_number": "25D"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "04/07/2020",
    "case_number": "739",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "04/07/2020",
    "case_number": "740",
    "seat_number": "24B"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "04/07/2020",
    "case_number": "741",
    "seat_number": "31C"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "04/07/2020",
    "case_number": "742",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "04/07/2020",
    "case_number": "743",
    "seat_number": ""
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "04/07/2020",
    "case_number": "744",
    "seat_number": ""
  },
  {
    "airline": "AI",
    "flight_number": "310",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "05/07/2020",
    "case_number": "745",
    "seat_number": "38E"
  },
  {
    "airline": "AI",
    "flight_number": "310",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "05/07/2020",
    "case_number": "746",
    "seat_number": "37F"
  },
  {
    "airline": "AI",
    "flight_number": "310",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "05/07/2020",
    "case_number": "747",
    "seat_number": "32D"
  },
  {
    "airline": "AI",
    "flight_number": "310",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "05/07/2020",
    "case_number": "748",
    "seat_number": "37C"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "05/07/2020",
    "case_number": "749",
    "seat_number": "28E"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "05/07/2020",
    "case_number": "750",
    "seat_number": "38H"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "05/07/2020",
    "case_number": "751",
    "seat_number": "33K"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "05/07/2020",
    "case_number": "752",
    "seat_number": "26G"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "05/07/2020",
    "case_number": "753",
    "seat_number": ""
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "05/07/2020",
    "case_number": "754",
    "seat_number": "54D"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "05/07/2020",
    "case_number": "755",
    "seat_number": "64G"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "06/07/2020",
    "case_number": "756",
    "seat_number": "40A"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "08/07/2020",
    "case_number": "757",
    "seat_number": "61C"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "08/07/2020",
    "case_number": "758",
    "seat_number": ""
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "08/07/2020",
    "case_number": "759",
    "seat_number": ""
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "08/07/2020",
    "case_number": "760",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "08/07/2020",
    "case_number": "761",
    "seat_number": "63E"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "09/07/2020",
    "case_number": "762",
    "seat_number": "61C"
  },
  {
    "airline": "AF",
    "flight_number": "188",
    "origin": "Paris",
    "destination": "Hong Kong",
    "arrival_date": "09/07/2020",
    "case_number": "763",
    "seat_number": "39J"
  },
  {
    "airline": "LH",
    "flight_number": "796",
    "origin": "Frankfurt",
    "destination": "Hong Kong",
    "arrival_date": "09/07/2020",
    "case_number": "764",
    "seat_number": ""
  },
  {
    "airline": "TK",
    "flight_number": "70",
    "origin": "Istanbul",
    "destination": "Hong Kong",
    "arrival_date": "09/07/2020",
    "case_number": "765",
    "seat_number": ""
  },
  {
    "airline": "AZ",
    "flight_number": "G628",
    "origin": "Baku",
    "destination": "Hong Kong",
    "arrival_date": "09/07/2020",
    "case_number": "766",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "903",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "09/07/2020",
    "case_number": "767",
    "seat_number": "33A"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "10/07/2020",
    "case_number": "768",
    "seat_number": ""
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "10/07/2020",
    "case_number": "769",
    "seat_number": "52F"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "10/07/2020",
    "case_number": "770",
    "seat_number": "58E"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "10/07/2020",
    "case_number": "771",
    "seat_number": ""
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "10/07/2020",
    "case_number": "772",
    "seat_number": ""
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "10/07/2020",
    "case_number": "773",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "10/07/2020",
    "case_number": "774",
    "seat_number": "75D"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "10/07/2020",
    "case_number": "775",
    "seat_number": "59K"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "10/07/2020",
    "case_number": "776",
    "seat_number": "63J"
  },
  {
    "airline": "EK",
    "flight_number": "380",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "10/07/2020",
    "case_number": "777",
    "seat_number": ""
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "10/07/2020",
    "case_number": "778",
    "seat_number": "50A"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "11/07/2020",
    "case_number": "779",
    "seat_number": "62C"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "11/07/2020",
    "case_number": "780",
    "seat_number": "48D"
  },
  {
    "airline": "EK",
    "flight_number": "382",
    "origin": "Dubai",
    "destination": "Hong Kong",
    "arrival_date": "11/07/2020",
    "case_number": "781",
    "seat_number": "33C"
  },
  {
    "airline": "QR",
    "flight_number": "858",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "11/07/2020",
    "case_number": "782",
    "seat_number": ""
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "12/07/2020",
    "case_number": "783",
    "seat_number": ""
  },
  {
    "airline": "6E",
    "flight_number": "8603",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "12/07/2020",
    "case_number": "784",
    "seat_number": ""
  },
  {
    "airline": "GA",
    "flight_number": "876",
    "origin": "Jakarta",
    "destination": "Hong Kong",
    "arrival_date": "12/07/2020",
    "case_number": "785",
    "seat_number": "Row 29"
  },
  {
    "airline": "AY",
    "flight_number": "99",
    "origin": "Helsinki",
    "destination": "Hong Kong",
    "arrival_date": "12/07/2020",
    "case_number": "786",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "12/07/2020",
    "case_number": "787",
    "seat_number": "67G"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "12/07/2020",
    "case_number": "788",
    "seat_number": "65A"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "12/07/2020",
    "case_number": "789",
    "seat_number": "42K"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "12/07/2020",
    "case_number": "790",
    "seat_number": "43G"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "12/07/2020",
    "case_number": "791",
    "seat_number": "40G"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "12/07/2020",
    "case_number": "792",
    "seat_number": "48F"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "12/07/2020",
    "case_number": "793",
    "seat_number": "36D"
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "13/07/2020",
    "case_number": "794",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "13/07/2020",
    "case_number": "795",
    "seat_number": "61K"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "13/07/2020",
    "case_number": "796",
    "seat_number": "48G"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "13/07/2020",
    "case_number": "797",
    "seat_number": "66B"
  },
  {
    "airline": "RL",
    "flight_number": "9946",
    "origin": "Mumbai",
    "destination": "Hong Kong",
    "arrival_date": "13/07/2020",
    "case_number": "798",
    "seat_number": ""
  },
  {
    "airline": "BR",
    "flight_number": "871",
    "origin": "Taipei",
    "destination": "Hong Kong",
    "arrival_date": "13/07/2020",
    "case_number": "799",
    "seat_number": "54G"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "13/07/2020",
    "case_number": "800",
    "seat_number": "42A"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "14/07/2020",
    "case_number": "801",
    "seat_number": "50K"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "14/07/2020",
    "case_number": "802",
    "seat_number": ""
  },
  {
    "airline": "GA",
    "flight_number": "876",
    "origin": "Jakarta",
    "destination": "Hong Kong",
    "arrival_date": "14/07/2020",
    "case_number": "803",
    "seat_number": "46A"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "15/07/2020",
    "case_number": "804",
    "seat_number": "20K"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "15/07/2020",
    "case_number": "805",
    "seat_number": "73G"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "15/07/2020",
    "case_number": "806",
    "seat_number": "5A"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "15/07/2020",
    "case_number": "807",
    "seat_number": "35K"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "15/07/2020",
    "case_number": "808",
    "seat_number": "49F"
  },
  {
    "airline": "ET",
    "flight_number": "3728",
    "origin": "Addis Ababa",
    "destination": "Hong Kong",
    "arrival_date": "16/07/2020",
    "case_number": "809",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "16/07/2020",
    "case_number": "810",
    "seat_number": "48K"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "811",
    "seat_number": "65J"
  },
  {
    "airline": "NH",
    "flight_number": "1929",
    "origin": "Tokyo",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "812",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "813",
    "seat_number": "43C"
  },
  {
    "airline": "NH",
    "flight_number": "1929",
    "origin": "Tokyo",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "814",
    "seat_number": "21F"
  },
  {
    "airline": "BR",
    "flight_number": "871",
    "origin": "Taipei",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "815",
    "seat_number": ""
  },
  {
    "airline": "BR",
    "flight_number": "871",
    "origin": "Taipei",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "816",
    "seat_number": ""
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "817",
    "seat_number": "38K"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "818",
    "seat_number": ""
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "819",
    "seat_number": "32A"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "820",
    "seat_number": ""
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "821",
    "seat_number": "55A"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "822",
    "seat_number": ""
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "823",
    "seat_number": "39D"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "824",
    "seat_number": ""
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "17/07/2020",
    "case_number": "825",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "18/07/2020",
    "case_number": "826",
    "seat_number": "40J"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "18/07/2020",
    "case_number": "827",
    "seat_number": "39D"
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "18/07/2020",
    "case_number": "828",
    "seat_number": ""
  },
  {
    "airline": "TK",
    "flight_number": "70",
    "origin": "Istanbul",
    "destination": "Hong Kong",
    "arrival_date": "18/07/2020",
    "case_number": "829",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "18/07/2020",
    "case_number": "830",
    "seat_number": "20A"
  },
  {
    "airline": "ET",
    "flight_number": "3618",
    "origin": "Seoul",
    "destination": "Hong Kong",
    "arrival_date": "18/07/2020",
    "case_number": "831",
    "seat_number": ""
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "19/07/2020",
    "case_number": "832",
    "seat_number": "20J"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "19/07/2020",
    "case_number": "833",
    "seat_number": "72H"
  },
  {
    "airline": "CX",
    "flight_number": "883",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "20/07/2020",
    "case_number": "834",
    "seat_number": "67H"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "20/07/2020",
    "case_number": "835",
    "seat_number": "40E"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "21/07/2020",
    "case_number": "836",
    "seat_number": "55E"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "21/07/2020",
    "case_number": "837",
    "seat_number": "58E"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "21/07/2020",
    "case_number": "838",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "23/07/2020",
    "case_number": "839",
    "seat_number": ""
  },
  {
    "airline": "6E",
    "flight_number": "8603",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "23/07/2020",
    "case_number": "840",
    "seat_number": "9C"
  },
  {
    "airline": "6E",
    "flight_number": "8603",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "23/07/2020",
    "case_number": "841",
    "seat_number": "28F"
  },
  {
    "airline": "LX",
    "flight_number": "138",
    "origin": "Zurich",
    "destination": "Hong Kong",
    "arrival_date": "23/07/2020",
    "case_number": "842",
    "seat_number": "31D"
  },
  {
    "airline": "6E",
    "flight_number": "8603",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "23/07/2020",
    "case_number": "843",
    "seat_number": "2A"
  },
  {
    "airline": "6E",
    "flight_number": "8603",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "23/07/2020",
    "case_number": "844",
    "seat_number": "27A"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "845",
    "seat_number": "63G"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "846",
    "seat_number": "23A"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "847",
    "seat_number": "40D"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "848",
    "seat_number": "26K"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "849",
    "seat_number": "47C"
  },
  {
    "airline": "BA",
    "flight_number": "31",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "850",
    "seat_number": "31C"
  },
  {
    "airline": "BG",
    "flight_number": "78",
    "origin": "Dhaka",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "851",
    "seat_number": "33A"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "852",
    "seat_number": "24K"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "853",
    "seat_number": "38H"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "854",
    "seat_number": "55D"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "855",
    "seat_number": "35A"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "856",
    "seat_number": "60F"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "857",
    "seat_number": "57K"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "858",
    "seat_number": "53D"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "859",
    "seat_number": "17A"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "860",
    "seat_number": "16D"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "861",
    "seat_number": "16G"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "862",
    "seat_number": "49G"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "863",
    "seat_number": "65G"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "864",
    "seat_number": "43C"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "865",
    "seat_number": "17A"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "866",
    "seat_number": "16G"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "867",
    "seat_number": "56K"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "868",
    "seat_number": "36H"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "24/07/2020",
    "case_number": "869",
    "seat_number": "74D"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "25/07/2020",
    "case_number": "870",
    "seat_number": "65C"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "26/07/2020",
    "case_number": "871",
    "seat_number": "27K"
  },
  {
    "airline": "RU",
    "flight_number": "645",
    "origin": "Moscow",
    "destination": "Hong Kong",
    "arrival_date": "26/07/2020",
    "case_number": "872",
    "seat_number": "Cabin crew"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "26/07/2020",
    "case_number": "873",
    "seat_number": "62K"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "26/07/2020",
    "case_number": "874",
    "seat_number": "65C"
  },
  {
    "airline": "ET",
    "flight_number": "H3716",
    "origin": "Addis Ababa",
    "destination": "Hong Kong",
    "arrival_date": "26/07/2020",
    "case_number": "875",
    "seat_number": "Cabin crew"
  },
  {
    "airline": "CX",
    "flight_number": "798",
    "origin": "Jakarta",
    "destination": "Hong Kong",
    "arrival_date": "26/07/2020",
    "case_number": "876",
    "seat_number": "18K"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "26/07/2020",
    "case_number": "877",
    "seat_number": "31J"
  },
  {
    "airline": "AC",
    "flight_number": "7",
    "origin": "Vancouver",
    "destination": "Hong Kong",
    "arrival_date": "27/07/2020",
    "case_number": "878",
    "seat_number": "25K"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "27/07/2020",
    "case_number": "879",
    "seat_number": "23H"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "27/07/2020",
    "case_number": "880",
    "seat_number": "62G"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "27/07/2020",
    "case_number": "881",
    "seat_number": "69K"
  },
  {
    "airline": "ET",
    "flight_number": "644",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "28/07/2020",
    "case_number": "882",
    "seat_number": "Cabin crew"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "29/07/2020",
    "case_number": "883",
    "seat_number": "40D"
  },
  {
    "airline": "KL",
    "flight_number": "887",
    "origin": "Amsterdam",
    "destination": "Hong Kong",
    "arrival_date": "29/07/2020",
    "case_number": "884",
    "seat_number": "10C"
  },
  {
    "airline": "CX",
    "flight_number": "252",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "31/07/2020",
    "case_number": "885",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "31/07/2020",
    "case_number": "886",
    "seat_number": "74G"
  },
  {
    "airline": "CX",
    "flight_number": "798",
    "origin": "Jakarta",
    "destination": "Hong Kong",
    "arrival_date": "01/08/2020",
    "case_number": "887",
    "seat_number": "Cabin crew"
  },
  {
    "airline": "BA",
    "flight_number": "31",
    "origin": "London",
    "destination": "Hong Kong",
    "arrival_date": "02/08/2020",
    "case_number": "888",
    "seat_number": "37C"
  },
  {
    "airline": "ET",
    "flight_number": "645",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "02/08/2020",
    "case_number": "889",
    "seat_number": "Cabin crew"
  },
  {
    "airline": "AI",
    "flight_number": "310",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "04/08/2020",
    "case_number": "890",
    "seat_number": "20F"
  },
  {
    "airline": "AI",
    "flight_number": "310",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "04/08/2020",
    "case_number": "891",
    "seat_number": "23C"
  },
  {
    "airline": "AI",
    "flight_number": "310",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "04/08/2020",
    "case_number": "892",
    "seat_number": "22C"
  },
  {
    "airline": "ET",
    "flight_number": "608",
    "origin": "Bangkok",
    "destination": "Hong Kong",
    "arrival_date": "07/08/2020",
    "case_number": "4014",
    "seat_number": "C1"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "07/08/2020",
    "case_number": "4025",
    "seat_number": "69D"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "07/08/2020",
    "case_number": "4556",
    "seat_number": "72A"
  },
  {
    "airline": "QR",
    "flight_number": "818",
    "origin": "Doha",
    "destination": "Hong Kong",
    "arrival_date": "10/08/2020",
    "case_number": "4182",
    "seat_number": "37G"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "10/08/2020",
    "case_number": "4274",
    "seat_number": "42A"
  },
  {
    "airline": "AI",
    "flight_number": "310",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "11/08/2020",
    "case_number": "4254",
    "seat_number": "13C"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "12/08/2020",
    "case_number": "4360",
    "seat_number": "15H"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "13/08/2020",
    "case_number": "4362",
    "seat_number": "64A"
  },
  {
    "airline": "HX",
    "flight_number": "782",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "13/08/2020",
    "case_number": "4363",
    "seat_number": ""
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "13/08/2020",
    "case_number": "4364",
    "seat_number": "55B"
  },
  {
    "airline": "PR",
    "flight_number": "300",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4408",
    "seat_number": "31A"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4464",
    "seat_number": "30H"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4465",
    "seat_number": "22B"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4466",
    "seat_number": "33J"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4483",
    "seat_number": "17F"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4484",
    "seat_number": "17H"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4485",
    "seat_number": "31E"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4486",
    "seat_number": "36E"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4487",
    "seat_number": "31D"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4506",
    "seat_number": "32B"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4507",
    "seat_number": "36B"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4508",
    "seat_number": "15B"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4578",
    "seat_number": "17G"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4579",
    "seat_number": "21A"
  },
  {
    "airline": "AI",
    "flight_number": "314",
    "origin": "New Delhi",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "4594",
    "seat_number": "30G"
  },
  {
    "airline": "CX",
    "flight_number": "881",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "14/08/2020",
    "case_number": "",
    "seat_number": "19G"
  },
  {
    "airline": "GA",
    "flight_number": "876",
    "origin": "Jakarta",
    "destination": "Hong Kong",
    "arrival_date": "15/08/2020",
    "case_number": "4488",
    "seat_number": ""
  },
  {
    "airline": "AY",
    "flight_number": "101",
    "origin": "Helsinki",
    "destination": "Hong Kong",
    "arrival_date": "15/08/2020",
    "case_number": "4489",
    "seat_number": "Unknown"
  },
  {
    "airline": "CX",
    "flight_number": "906",
    "origin": "Manila",
    "destination": "Hong Kong",
    "arrival_date": "15/08/2020",
    "case_number": "4490",
    "seat_number": "65A"
  },
  {
    "airline": "TK",
    "flight_number": "070",
    "origin": "Istanbul",
    "destination": "Hong Kong",
    "arrival_date": "15/08/2020",
    "case_number": "4509",
    "seat_number": "40A"
  },
  {
    "airline": "AC",
    "flight_number": "007",
    "origin": "Vancouver",
    "destination": "Hong Kong",
    "arrival_date": "19/08/2020",
    "case_number": "4612",
    "seat_number": "24G"
  },
  {
    "airline": "KA",
    "flight_number": "734",
    "origin": "Kuala Lumpur",
    "destination": "Hong Kong",
    "arrival_date": "19/08/2020",
    "case_number": "4620",
    "seat_number": "67K"
  },
  {
    "airline": "CX",
    "flight_number": "883",
    "origin": "Los Angeles",
    "destination": "Hong Kong",
    "arrival_date": "20/08/2020",
    "case_number": "4611",
    "seat_number": "43C"
  }
]

export default records