"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("localidades", [
            {
                nombre: "La Banda",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "La Loma",
                codigo_postal: "G4322",
                departamento_id: 5,
            },
            {
                nombre: "San Felipe",
                codigo_postal: "G4353",
                departamento_id: 17,
            },
            {
                nombre: "Las Dos A",
                codigo_postal: "G3736",
                departamento_id: 17,
            },
            {
                nombre: "Lote 115",
                codigo_postal: "G4353",
                departamento_id: 17,
            },
            {
                nombre: "Villa Petocha",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "El Simbolar",
                codigo_postal: "G3740",
                departamento_id: 17,
            },
            {
                nombre: "El Pertigo",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "Estacion Pampa Muyoj",
                codigo_postal: "G4730",
                departamento_id: 17,
            },
            {
                nombre: "Santa Justina",
                codigo_postal: "G3740",
                departamento_id: 17,
            },
            {
                nombre: "Tinajerayoj",
                codigo_postal: "G3740",
                departamento_id: 17,
            },
            {
                nombre: "Icaño",
                codigo_postal: "G4334",
                departamento_id: 4,
            },
            {
                nombre: "Yacasnioj",
                codigo_postal: "G4200",
                departamento_id: 4,
            },
            {
                nombre: "La Costa",
                codigo_postal: "G4200",
                departamento_id: 4,
            },
            {
                nombre: "Navicha",
                codigo_postal: "G4200",
                departamento_id: 4,
            },
            {
                nombre: "Colonia Dora",
                codigo_postal: "G4332",
                departamento_id: 4,
            },
            {
                nombre: "Colonia Isla",
                codigo_postal: "G4332",
                departamento_id: 4,
            },
            {
                nombre: "Mancapa",
                codigo_postal: "G4200",
                departamento_id: 4,
            },
            {
                nombre: "Colonia Libanesa",
                codigo_postal: "G4200",
                departamento_id: 4,
            },
            {
                nombre: "Colonia Alcira",
                codigo_postal: "G4332",
                departamento_id: 4,
            },
            {
                nombre: "Puente Negro",
                codigo_postal: "G4200",
                departamento_id: 4,
            },
            {
                nombre: "El Bracho",
                codigo_postal: "G4332",
                departamento_id: 4,
            },
            {
                nombre: "Taco Bajada",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "San Carlos",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Villa Nueva",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Vinal Pozo",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Ahi Veremos",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Algarrobal Viejo",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Babilonia",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "El Bordo",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "El Diablo",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "La Florida",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "La Fortuna",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Lomas Blancas",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Nuevo Simbolar",
                codigo_postal: "G4301",
                departamento_id: 19,
            },
            {
                nombre: "Pampa Suni",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Puesto Del Angel",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Santa Felisa",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Santo Domingo",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Villa Estela",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Tusca Bajada",
                codigo_postal: "G4301",
                departamento_id: 19,
            },
            {
                nombre: "Villa Union",
                codigo_postal: "G2357",
                departamento_id: 16,
            },
            {
                nombre: "El Albardon",
                codigo_postal: "G2357",
                departamento_id: 16,
            },
            {
                nombre: "Las Viboritas",
                codigo_postal: "G2357",
                departamento_id: 16,
            },
            {
                nombre: "Limache",
                codigo_postal: "G5255",
                departamento_id: 16,
            },
            {
                nombre: "Media Luna",
                codigo_postal: "G2357",
                departamento_id: 16,
            },
            {
                nombre: "Santiago Del Estero",
                codigo_postal: 4200,
                departamento_id: 7,
            },
            {
                nombre: "Monte Quemado",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "El Rosado",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Santa Rosa",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Maco",
                codigo_postal: "G4201",
                departamento_id: 7,
            },
            {
                nombre: "Los Cardozos",
                codigo_postal: "G4206",
                departamento_id: 7,
            },
            {
                nombre: "Loma Grande",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "La Puerta",
                codigo_postal: "G5251",
                departamento_id: 7,
            },
            {
                nombre: "La Candelaria",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Estacion Ingeniero Ezcurra",
                codigo_postal: "G4600",
                departamento_id: 7,
            },
            {
                nombre: "Huaico Hondo",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "El Puestito",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Churqui",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "El Barrial",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Antilo",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "El Socorro",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Estacion La Aloja",
                codigo_postal: "G4189",
                departamento_id: 19,
            },
            {
                nombre: "La Cañada",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "La Manga",
                codigo_postal: "G4301",
                departamento_id: 19,
            },
            {
                nombre: "La Mesada",
                codigo_postal: "G4187",
                departamento_id: 19,
            },
            {
                nombre: "Santa Maria De Las Chacras",
                codigo_postal: "G4339",
                departamento_id: 19,
            },
            {
                nombre: "Las Delicias",
                codigo_postal: "G4189",
                departamento_id: 19,
            },
            {
                nombre: "Las Lajas",
                codigo_postal: "G4189",
                departamento_id: 19,
            },
            {
                nombre: "Las Lomas",
                codigo_postal: "G4189",
                departamento_id: 19,
            },
            {
                nombre: "Los Cercos",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Pampa Pozo",
                codigo_postal: "G4119",
                departamento_id: 19,
            },
            {
                nombre: "Rapelli",
                codigo_postal: "G4189",
                departamento_id: 19,
            },
            {
                nombre: "Pozo Betbeder",
                codigo_postal: "G4200",
                departamento_id: 19,
            },
            {
                nombre: "San Javier",
                codigo_postal: "G4189",
                departamento_id: 19,
            },
            {
                nombre: "San Ramon",
                codigo_postal: 4197,
                departamento_id: 19,
            },
            {
                nombre: "San Roque",
                codigo_postal: "G4189",
                departamento_id: 19,
            },
            {
                nombre: "San Serafin",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Taco Punco",
                codigo_postal: "G4189",
                departamento_id: 19,
            },
            {
                nombre: "La Federacion",
                codigo_postal: "G2354",
                departamento_id: 22,
            },
            {
                nombre: "Selva",
                codigo_postal: "G2354",
                departamento_id: 22,
            },
            {
                nombre: "Estacion Taboada",
                codigo_postal: 4300,
                departamento_id: 25,
            },
            {
                nombre: "Palo Negro",
                codigo_postal: "G2354",
                departamento_id: 22,
            },
            {
                nombre: "Nueva Ceres",
                codigo_postal: "G2354",
                departamento_id: 22,
            },
            {
                nombre: "Los Porongos",
                codigo_postal: "G2341",
                departamento_id: 22,
            },
            {
                nombre: "La Victoria",
                codigo_postal: "G2354",
                departamento_id: 22,
            },
            {
                nombre: "Colonia La Victoria",
                codigo_postal: "G2354",
                departamento_id: 22,
            },
            {
                nombre: "La Romelia",
                codigo_postal: "G2354",
                departamento_id: 22,
            },
            {
                nombre: "La Huanaca",
                codigo_postal: "G2354",
                departamento_id: 22,
            },
            {
                nombre: "Lote 24",
                codigo_postal: "G2356",
                departamento_id: 16,
            },
            {
                nombre: "Colonia Santa Rosa",
                codigo_postal: "G2356",
                departamento_id: 1,
            },
            {
                nombre: "Malbran",
                codigo_postal: "G2354",
                departamento_id: 1,
            },
            {
                nombre: "La Providencia",
                codigo_postal: "G2354",
                departamento_id: 1,
            },
            {
                nombre: "El Tropezon",
                codigo_postal: "G2356",
                departamento_id: 1,
            },
            {
                nombre: "Colonia Libertad",
                codigo_postal: "G2357",
                departamento_id: 1,
            },
            {
                nombre: "Casares",
                codigo_postal: "G2354",
                departamento_id: 1,
            },
            {
                nombre: "Campo Contardi",
                codigo_postal: "G2356",
                departamento_id: 1,
            },
            {
                nombre: "Argentina",
                codigo_postal: "G2354",
                departamento_id: 1,
            },
            {
                nombre: "Dos Provincias",
                codigo_postal: "G2341",
                departamento_id: 22,
            },
            {
                nombre: "Colonia Mackinlay",
                codigo_postal: "G2347",
                departamento_id: 22,
            },
            {
                nombre: "Los Encantos",
                codigo_postal: "G2354",
                departamento_id: 22,
            },
            {
                nombre: "Colonia Alpina",
                codigo_postal: "G2341",
                departamento_id: 22,
            },
            {
                nombre: "Sachayoj",
                codigo_postal: "G3731",
                departamento_id: 2,
            },
            {
                nombre: "Campo Gallo",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Donadeu",
                codigo_postal: "G3741",
                departamento_id: 2,
            },
            {
                nombre: "Lotes 25 A 29",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "Lotes 33-37-40-42",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "Miel De Palo",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "Vinal Esquina",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "Villa Abregu",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "El Corralito",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "El Mojon",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "El Porvenir",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "El Remate",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "El Saladillo",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "El Sauce",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "La  Fragua",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "La Bolsa",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "La Ovejeria",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "La Reaccion",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Puesto Nuevo",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "El Cuadrado",
                codigo_postal: 3765,
                departamento_id: 14,
            },
            {
                nombre: "Kilometro 477",
                codigo_postal: "G3763",
                departamento_id: 14,
            },
            {
                nombre: "Lote 59",
                codigo_postal: "G4350",
                departamento_id: 14,
            },
            {
                nombre: "Lote 63",
                codigo_postal: 3763,
                departamento_id: 14,
            },
            {
                nombre: "San Pedro",
                codigo_postal: 3763,
                departamento_id: 14,
            },
            {
                nombre: "Tiun Punco",
                codigo_postal: "G4356",
                departamento_id: 14,
            },
            {
                nombre: "Lojlo",
                codigo_postal: "G4350",
                departamento_id: 14,
            },
            {
                nombre: "Monte Redondo",
                codigo_postal: "G4350",
                departamento_id: 14,
            },
            {
                nombre: "Pozo Grande",
                codigo_postal: "G4350",
                departamento_id: 14,
            },
            {
                nombre: "Roldan",
                codigo_postal: "G4350",
                departamento_id: 14,
            },
            {
                nombre: "Fernandez",
                codigo_postal: "G4322",
                departamento_id: 23,
            },
            {
                nombre: "Ingeniero Forres",
                codigo_postal: 4312,
                departamento_id: 23,
            },
            {
                nombre: "Campo Alegre",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "La Frontera",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Esteros",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Chañarito",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Campo La Flor/campo Las Flores",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Santos Lugares",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Milagros",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "La Paloma",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Pozo Muerto",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Ranchitos",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "San Antonio",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Santa Cruz",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Toro Pozo",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Villa Palmar",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Taco Pozo",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Tacanitas",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Sol De Mayo",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Jumial Grande",
                codigo_postal: "G3731",
                departamento_id: 2,
            },
            {
                nombre: "Huachana",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "El Aibal",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "El Aibal",
                codigo_postal: "G4301",
                departamento_id: 1,
            },
            {
                nombre: "El 20",
                codigo_postal: "G4356",
                departamento_id: 14,
            },
            {
                nombre: "Las Palmeras",
                codigo_postal: "G3752",
                departamento_id: 14,
            },
            {
                nombre: "Puente Bajada",
                codigo_postal: "G4356",
                departamento_id: 14,
            },
            {
                nombre: "Taruy",
                codigo_postal: "G4356",
                departamento_id: 14,
            },
            {
                nombre: "Tobas",
                codigo_postal: "G3752",
                departamento_id: 14,
            },
            {
                nombre: "Pozo Del Tigre",
                codigo_postal: "G3741",
                departamento_id: 14,
            },
            {
                nombre: "El Bajo",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Las Carpas",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Ingrata Norte",
                codigo_postal: "G3731",
                departamento_id: 2,
            },
            {
                nombre: "Coronel Manuel L. Rico",
                codigo_postal: "G3731",
                departamento_id: 2,
            },
            {
                nombre: "Anca Overa",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Esteco",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Maninioj",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "La Union",
                codigo_postal: "G3749",
                departamento_id: 2,
            },
            {
                nombre: "El Valle",
                codigo_postal: "G3749",
                departamento_id: 2,
            },
            {
                nombre: "El Simbol",
                codigo_postal: "G3749",
                departamento_id: 2,
            },
            {
                nombre: "Rio Muerto",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "El Corrido",
                codigo_postal: "G3749",
                departamento_id: 2,
            },
            {
                nombre: "El Majan",
                codigo_postal: "G3714",
                departamento_id: 2,
            },
            {
                nombre: "El Yunchancito",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Monte Rico",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "San Francisco",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Pozo Salado",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "El Fisco/lote48",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Estacion El Setenta/el 70",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Cuatro Esquinas",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Campo Bandera",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "El Fisco/lote 46",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Villa Salavina",
                codigo_postal: "G4319",
                departamento_id: 24,
            },
            {
                nombre: "Veron",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Vaca Human",
                codigo_postal: "G4319",
                departamento_id: 24,
            },
            {
                nombre: "Taco Totorayoj",
                codigo_postal: "G4319",
                departamento_id: 24,
            },
            {
                nombre: "Santa Lucia",
                codigo_postal: "G4319",
                departamento_id: 24,
            },
            {
                nombre: "Upianita",
                codigo_postal: "G4200",
                departamento_id: 27,
            },
            {
                nombre: "Tipiro",
                codigo_postal: "G4201",
                departamento_id: 7,
            },
            {
                nombre: "Tunas Punco",
                codigo_postal: "G4203",
                departamento_id: 7,
            },
            {
                nombre: "Vuelta De La Barranca",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Estacion Zanjon",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Los Positos",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Santo Domingo Del Cisneros",
                codigo_postal: "G4353",
                departamento_id: 17,
            },
            {
                nombre: "Patay",
                codigo_postal: "G3745",
                departamento_id: 17,
            },
            {
                nombre: "Tintina",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "Lilo Viejo",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "La Elsita",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "Santa Teresita",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "Obraje Maria Angelica",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "Hasse",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "Pampa Charquina",
                codigo_postal: "G3741",
                departamento_id: 17,
            },
            {
                nombre: "Alhuampa",
                codigo_postal: "G3741",
                departamento_id: 17,
            },
            {
                nombre: "Ottavia",
                codigo_postal: "G3741",
                departamento_id: 17,
            },
            {
                nombre: "Tres Mojones",
                codigo_postal: "G3736",
                departamento_id: 17,
            },
            {
                nombre: "Tierra Del Este",
                codigo_postal: "G3740",
                departamento_id: 17,
            },
            {
                nombre: "Roversi",
                codigo_postal: "G3736",
                departamento_id: 17,
            },
            {
                nombre: "La Nombrada",
                codigo_postal: "G3740",
                departamento_id: 17,
            },
            {
                nombre: "El Polear",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Colonia Pinto",
                codigo_postal: "",
                departamento_id: 25,
            },
            {
                nombre: "San Luis",
                codigo_postal: "G3740",
                departamento_id: 14,
            },
            {
                nombre: "Rincon Del Saladillo",
                codigo_postal: "G3741",
                departamento_id: 14,
            },
            {
                nombre: "Pozo Del Toba",
                codigo_postal: "G3741",
                departamento_id: 14,
            },
            {
                nombre: "Lote 28",
                codigo_postal: "G3736",
                departamento_id: 14,
            },
            {
                nombre: "Lote 110",
                codigo_postal: "G3740",
                departamento_id: 14,
            },
            {
                nombre: "Santa Maria",
                codigo_postal: "G3740",
                departamento_id: 14,
            },
            {
                nombre: "Lote 69",
                codigo_postal: "G3760",
                departamento_id: 14,
            },
            {
                nombre: "Bajo Hondo",
                codigo_postal: "G3740",
                departamento_id: 14,
            },
            {
                nombre: "Colonia Josefina",
                codigo_postal: "G3741",
                departamento_id: 14,
            },
            {
                nombre: "Lote 29 Chico",
                codigo_postal: 3741,
                departamento_id: 14,
            },
            {
                nombre: "Campo Del Cielo",
                codigo_postal: "G3740",
                departamento_id: 14,
            },
            {
                nombre: "El Desvio",
                codigo_postal: "G3752",
                departamento_id: 14,
            },
            {
                nombre: "Quimili",
                codigo_postal: "G3740",
                departamento_id: 17,
            },
            {
                nombre: "Charco Viejo",
                codigo_postal: "G4306",
                departamento_id: 21,
            },
            {
                nombre: "Gramilla Vieja",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Casilla Del Medio",
                codigo_postal: "G4306",
                departamento_id: 21,
            },
            {
                nombre: "Las Abras",
                codigo_postal: "G4306",
                departamento_id: 21,
            },
            {
                nombre: "Santa Feliza",
                codigo_postal: "G4036",
                departamento_id: 21,
            },
            {
                nombre: "Los Ralos",
                codigo_postal: "G4230",
                departamento_id: 8,
            },
            {
                nombre: "Pozo De La Puerta",
                codigo_postal: "G4230",
                departamento_id: 8,
            },
            {
                nombre: "Frias",
                codigo_postal: "G4230",
                departamento_id: 8,
            },
            {
                nombre: "25 De Mayo De Banegas",
                codigo_postal: "G4233",
                departamento_id: 8,
            },
            {
                nombre: "El Desmonte",
                codigo_postal: "G4230",
                departamento_id: 8,
            },
            {
                nombre: "El Quebracho",
                codigo_postal: "G4238",
                departamento_id: 8,
            },
            {
                nombre: "El Salvador",
                codigo_postal: "G4230",
                departamento_id: 8,
            },
            {
                nombre: "El Tacial/el Tasial",
                codigo_postal: "G4233",
                departamento_id: 8,
            },
            {
                nombre: "Choya",
                codigo_postal: "G4233",
                departamento_id: 8,
            },
            {
                nombre: "La Vuelta",
                codigo_postal: "G4233",
                departamento_id: 8,
            },
            {
                nombre: "San Juan",
                codigo_postal: "G4233",
                departamento_id: 8,
            },
            {
                nombre: "Viva Mercedes",
                codigo_postal: "G4203",
                departamento_id: 8,
            },
            {
                nombre: "Tala Pozo",
                codigo_postal: "G4328",
                departamento_id: 4,
            },
            {
                nombre: "Rincon De Esperanza",
                codigo_postal: "G2354",
                departamento_id: 4,
            },
            {
                nombre: "Paso Grande",
                codigo_postal: "G4328",
                departamento_id: 4,
            },
            {
                nombre: "Hurmanita Estancia",
                codigo_postal: "G4334",
                departamento_id: 4,
            },
            {
                nombre: "Herrera",
                codigo_postal: "G4328",
                departamento_id: 4,
            },
            {
                nombre: "Gramilla",
                codigo_postal: "G4328",
                departamento_id: 4,
            },
            {
                nombre: "Blanca Pozo",
                codigo_postal: "G4332",
                departamento_id: 4,
            },
            {
                nombre: "Villa Mailin",
                codigo_postal: "G4328",
                departamento_id: 4,
            },
            {
                nombre: "Totora",
                codigo_postal: "G4319",
                departamento_id: 4,
            },
            {
                nombre: "Toro Pan",
                codigo_postal: "G4328",
                departamento_id: 4,
            },
            {
                nombre: "Tala Atun",
                codigo_postal: "G4208",
                departamento_id: 4,
            },
            {
                nombre: "San Jose",
                codigo_postal: "G4328",
                departamento_id: 4,
            },
            {
                nombre: "Punta Pozo",
                codigo_postal: "G4326",
                departamento_id: 4,
            },
            {
                nombre: "El Molle",
                codigo_postal: "G4326",
                departamento_id: 4,
            },
            {
                nombre: "Novillo Pozo",
                codigo_postal: "G4328",
                departamento_id: 4,
            },
            {
                nombre: "Kilometro13",
                codigo_postal: "G4328",
                departamento_id: 4,
            },
            {
                nombre: "Caloj",
                codigo_postal: "G4326",
                departamento_id: 4,
            },
            {
                nombre: "Breayoj",
                codigo_postal: "G4328",
                departamento_id: 4,
            },
            {
                nombre: "La Reserva",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "La Nueva Donosa",
                codigo_postal: "G4221",
                departamento_id: 21,
            },
            {
                nombre: "La Donosa",
                codigo_postal: "G4221",
                departamento_id: 21,
            },
            {
                nombre: "Yutu Yaco",
                codigo_postal: "G4221",
                departamento_id: 21,
            },
            {
                nombre: "Las Termas De Rio Hondo",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Yuchan",
                codigo_postal: "G4351",
                departamento_id: 14,
            },
            {
                nombre: "El Colorado",
                codigo_postal: "G3741",
                departamento_id: 14,
            },
            {
                nombre: "Chañar Pozo",
                codigo_postal: "G4301",
                departamento_id: 8,
            },
            {
                nombre: "El Mojoncito/mojoncito",
                codigo_postal: "G4233",
                departamento_id: 8,
            },
            {
                nombre: "Kilometro 55",
                codigo_postal: "G4223",
                departamento_id: 8,
            },
            {
                nombre: "La Represa",
                codigo_postal: "G4230",
                departamento_id: 8,
            },
            {
                nombre: "Laprida",
                codigo_postal: "G4205",
                departamento_id: 8,
            },
            {
                nombre: "Puerta De Chavez",
                codigo_postal: "G4200",
                departamento_id: 8,
            },
            {
                nombre: "Pozo Del Simbol",
                codigo_postal: "G4200",
                departamento_id: 8,
            },
            {
                nombre: "Estacion La Punta",
                codigo_postal: "",
                departamento_id: 8,
            },
            {
                nombre: "San Rafael",
                codigo_postal: "G4203",
                departamento_id: 8,
            },
            {
                nombre: "Vinara",
                codigo_postal: 4223,
                departamento_id: 21,
            },
            {
                nombre: "Loma Del Medio",
                codigo_postal: "G4223",
                departamento_id: 21,
            },
            {
                nombre: "Cañada De Talapozo",
                codigo_postal: 4220,
                departamento_id: 21,
            },
            {
                nombre: "Las Cejas",
                codigo_postal: 4220,
                departamento_id: 21,
            },
            {
                nombre: "Palma Redonda",
                codigo_postal: "G4201",
                departamento_id: 21,
            },
            {
                nombre: "Nueva Libano",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Clodomira",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Mistol Pozo",
                codigo_postal: "G4319",
                departamento_id: 24,
            },
            {
                nombre: "Los Cerrillos",
                codigo_postal: "G4319",
                departamento_id: 24,
            },
            {
                nombre: "El Candelario",
                codigo_postal: "G4319",
                departamento_id: 24,
            },
            {
                nombre: "Chilca Juliana",
                codigo_postal: "G4319",
                departamento_id: 24,
            },
            {
                nombre: "Yacu Hurmana",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Varas Chuchuna",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "San Nicolas",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Rubia Paso",
                codigo_postal: "G4332",
                departamento_id: 24,
            },
            {
                nombre: "Pazo De Los Oscares",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Nueva Loma",
                codigo_postal: "G2356",
                departamento_id: 24,
            },
            {
                nombre: "Navarro",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Malota",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Los Telares",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Chira",
                codigo_postal: "",
                departamento_id: 24,
            },
            {
                nombre: "Anga",
                codigo_postal: "",
                departamento_id: 24,
            },
            {
                nombre: "La Centella",
                codigo_postal: "G2354",
                departamento_id: 24,
            },
            {
                nombre: "La Ramada",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Chañar Sinuchay",
                codigo_postal: "G2356",
                departamento_id: 24,
            },
            {
                nombre: "Carreta Paso",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Campos De Cejas",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Bordo Pampa",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "La Abrita",
                codigo_postal: "G4206",
                departamento_id: 27,
            },
            {
                nombre: "La Ramadita",
                codigo_postal: "G4208",
                departamento_id: 27,
            },
            {
                nombre: "Manogasta",
                codigo_postal: "G4206",
                departamento_id: 27,
            },
            {
                nombre: "Puesto Del Medio",
                codigo_postal: "G4206",
                departamento_id: 27,
            },
            {
                nombre: "San Andres",
                codigo_postal: "G4208",
                departamento_id: 27,
            },
            {
                nombre: "Simbol",
                codigo_postal: "G4206",
                departamento_id: 27,
            },
            {
                nombre: "Sumamao",
                codigo_postal: "G4201",
                departamento_id: 27,
            },
            {
                nombre: "Coro Pampa",
                codigo_postal: "G4206",
                departamento_id: 27,
            },
            {
                nombre: "Chañar Pujio",
                codigo_postal: "G4302",
                departamento_id: 27,
            },
            {
                nombre: "9 De Julio",
                codigo_postal: "G5255",
                departamento_id: 18,
            },
            {
                nombre: "Amoladeras",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Baez",
                codigo_postal: "G5255",
                departamento_id: 18,
            },
            {
                nombre: "Inti Huasi",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Cruz Del Norte",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "La Esperanza",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Pampa Grande",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Pozo Del Garabato",
                codigo_postal: "G5255",
                departamento_id: 18,
            },
            {
                nombre: "Puerta De Los Rios",
                codigo_postal: "G5249",
                departamento_id: 18,
            },
            {
                nombre: "Rumi Pozo",
                codigo_postal: "G5255",
                departamento_id: 18,
            },
            {
                nombre: "Sol De Julio",
                codigo_postal: "G5255",
                departamento_id: 18,
            },
            {
                nombre: "Tala Yacu",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Chacras",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Minguecho",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "El Arbol",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Cajon/el Cajon",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "El Cardonal",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "El Cerrito",
                codigo_postal: "G3714",
                departamento_id: 18,
            },
            {
                nombre: "El Espinillo",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "El Jume",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Ambargasta",
                codigo_postal: "G5251",
                departamento_id: 18,
            },
            {
                nombre: "La Chirquita",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "La Soledad",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Los Chañares",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Villa Ojo De Agua",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Piedra Blanca",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Caloj Pozo",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Consuelo",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Corral Quemado",
                codigo_postal: 4197,
                departamento_id: 9,
            },
            {
                nombre: "Cruz Bajada",
                codigo_postal: 4452,
                departamento_id: 9,
            },
            {
                nombre: "Dos Arboles",
                codigo_postal: "G4452",
                departamento_id: 9,
            },
            {
                nombre: "Ranchillos",
                codigo_postal: "G4200",
                departamento_id: 9,
            },
            {
                nombre: "Tacioj/tasioj",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Villa Matoque",
                codigo_postal: 4452,
                departamento_id: 9,
            },
            {
                nombre: "Tres Varones",
                codigo_postal: "G4301",
                departamento_id: 9,
            },
            {
                nombre: "Manga Bajada",
                codigo_postal: "G4301",
                departamento_id: 9,
            },
            {
                nombre: "Iskoy Pozo",
                codigo_postal: "G4197",
                departamento_id: 9,
            },
            {
                nombre: "El Ceibal",
                codigo_postal: 4301,
                departamento_id: 9,
            },
            {
                nombre: "Piruaj Bajo",
                codigo_postal: "G4301",
                departamento_id: 9,
            },
            {
                nombre: "Vinal Suni",
                codigo_postal: "G4301",
                departamento_id: 9,
            },
            {
                nombre: "Puestos Unidos",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Mailin",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Nueva Esperanza",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Paaj Pozo",
                codigo_postal: 4301,
                departamento_id: 9,
            },
            {
                nombre: "San Isidro",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "El Puesto",
                codigo_postal: "G4301",
                departamento_id: 9,
            },
            {
                nombre: "Cabeza Del Toro",
                codigo_postal: "G4301",
                departamento_id: 9,
            },
            {
                nombre: "Guayacan Pozo",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Belgica",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Desvio Km 1314",
                codigo_postal: "G3712",
                departamento_id: 9,
            },
            {
                nombre: "El Tunquelen",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Ifia",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Los Tigres",
                codigo_postal: "G3712",
                departamento_id: 9,
            },
            {
                nombre: "Puesto Cordoba",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Lote 40",
                codigo_postal: "G3712",
                departamento_id: 9,
            },
            {
                nombre: "Villa Atamisqui",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "Codo Viejo",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "Collera Huarcana",
                codigo_postal: "G4315",
                departamento_id: 3,
            },
            {
                nombre: "El Dorado",
                codigo_postal: "G4313",
                departamento_id: 3,
            },
            {
                nombre: "Estacion Atamisqui",
                codigo_postal: "G4313",
                departamento_id: 3,
            },
            {
                nombre: "Juanillo",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "Paloma",
                codigo_postal: "G4319",
                departamento_id: 3,
            },
            {
                nombre: "Medellin",
                codigo_postal: "G4313",
                departamento_id: 3,
            },
            {
                nombre: "Puerta Grande",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "Santa Isabel",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "Soconcho",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "Tasigasta",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "Tulum Tulum",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "Yacu Chiri",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "Ancocha",
                codigo_postal: "G4201",
                departamento_id: 3,
            },
            {
                nombre: "Brea Loma",
                codigo_postal: "G4201",
                departamento_id: 3,
            },
            {
                nombre: "Guanaco Sombriana",
                codigo_postal: "G4212",
                departamento_id: 3,
            },
            {
                nombre: "Lomitas",
                codigo_postal: "G4201",
                departamento_id: 3,
            },
            {
                nombre: "San Dionisio",
                codigo_postal: "G4201",
                departamento_id: 3,
            },
            {
                nombre: "Simbol Pozo",
                codigo_postal: "G4212",
                departamento_id: 3,
            },
            {
                nombre: "Brea Puñuna",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "El Sobrante De La Isla De Los Castillos",
                codigo_postal: "G4225",
                departamento_id: 21,
            },
            {
                nombre: "Amicha",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Bahoma",
                codigo_postal: "G4225",
                departamento_id: 21,
            },
            {
                nombre: "Chilca La Loma",
                codigo_postal: "G4201",
                departamento_id: 3,
            },
            {
                nombre: "Belgrano",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Buena Vista",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "El Cerro",
                codigo_postal: "G5251",
                departamento_id: 20,
            },
            {
                nombre: "El Mistol",
                codigo_postal: "G3752",
                departamento_id: 20,
            },
            {
                nombre: "El Talar",
                codigo_postal: "G4300",
                departamento_id: 20,
            },
            {
                nombre: "Gaucho De Guemes",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Horcos Tucucuna",
                codigo_postal: "G5251",
                departamento_id: 20,
            },
            {
                nombre: "La Blanquita",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "La Higuera",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Oratorio",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Pozo Del Monte",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Puerta Del Monte",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Rama Paso",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Ramirez De Velazco",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Rio Viejo",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Santa Ana",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Sumampa",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Villa Quebrachos",
                codigo_postal: "G5152",
                departamento_id: 20,
            },
            {
                nombre: "14 De Mayo",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Campo Del Cisne",
                codigo_postal: "G5255",
                departamento_id: 20,
            },
            {
                nombre: "Coronel Fernandez",
                codigo_postal: "G5255",
                departamento_id: 20,
            },
            {
                nombre: "Corral Del Rey",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "El Algarrobal",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "El Ayudante",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "El Espartal",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Bella Criolla",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "La Chicharra",
                codigo_postal: "G5255",
                departamento_id: 20,
            },
            {
                nombre: "La Trampa",
                codigo_postal: "G5255",
                departamento_id: 20,
            },
            {
                nombre: "Los Algarrobos",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Pozo Del Chañar",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Fuerte Viejo",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Sumampa Viejo",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Buen Lugar",
                codigo_postal: "G4184",
                departamento_id: 13,
            },
            {
                nombre: "Cashico",
                codigo_postal: "G4184",
                departamento_id: 13,
            },
            {
                nombre: "El Añil",
                codigo_postal: "G4184",
                departamento_id: 13,
            },
            {
                nombre: "Lote 43",
                codigo_postal: "G3712",
                departamento_id: 9,
            },
            {
                nombre: "Pampa De Los Guanacos",
                codigo_postal: "G3712",
                departamento_id: 9,
            },
            {
                nombre: "El Soler",
                codigo_postal: "G4302",
                departamento_id: 23,
            },
            {
                nombre: "La Rivera",
                codigo_postal: "G4308",
                departamento_id: 23,
            },
            {
                nombre: "Los Romanos",
                codigo_postal: "G4302",
                departamento_id: 23,
            },
            {
                nombre: "Villa Hipolita",
                codigo_postal: "G4308",
                departamento_id: 23,
            },
            {
                nombre: "Beltran",
                codigo_postal: "G4308",
                departamento_id: 23,
            },
            {
                nombre: "Colonia Jaime",
                codigo_postal: "G4200",
                departamento_id: 23,
            },
            {
                nombre: "La Bajada",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Sauce Bajada",
                codigo_postal: "G4200",
                departamento_id: 23,
            },
            {
                nombre: "Vilmer",
                codigo_postal: "G4302",
                departamento_id: 23,
            },
            {
                nombre: "Mili",
                codigo_postal: "G4312",
                departamento_id: 23,
            },
            {
                nombre: "Morcillo",
                codigo_postal: "G4312",
                departamento_id: 23,
            },
            {
                nombre: "Nueva Industria",
                codigo_postal: "G4312",
                departamento_id: 23,
            },
            {
                nombre: "Villa Robles",
                codigo_postal: "G4301",
                departamento_id: 23,
            },
            {
                nombre: "Colonia El Simbolar",
                codigo_postal: "G4354",
                departamento_id: 23,
            },
            {
                nombre: "Diaspa",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "San Pascual",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Suncho Pozo",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Tacoyoj",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Atoj Pozo",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Barrial Alto",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "El Msitol",
                codigo_postal: "G3752",
                departamento_id: 25,
            },
            {
                nombre: "Majada Sud",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Perchil Bajo",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Brea Pozo Viejo",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Shillpi",
                codigo_postal: "G4317",
                departamento_id: 25,
            },
            {
                nombre: "Tio Pozo",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Tres Jazmines",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Mirella",
                codigo_postal: "G4308",
                departamento_id: 23,
            },
            {
                nombre: "Higuera Chacra",
                codigo_postal: "G4308",
                departamento_id: 23,
            },
            {
                nombre: "Isca Yacu",
                codigo_postal: "G4184",
                departamento_id: 13,
            },
            {
                nombre: "Los Tunales",
                codigo_postal: 4184,
                departamento_id: 13,
            },
            {
                nombre: "Pozo Hondo",
                codigo_postal: "G4184",
                departamento_id: 13,
            },
            {
                nombre: "Suri Pozo",
                codigo_postal: "G4306",
                departamento_id: 13,
            },
            {
                nombre: "Tres Cruces",
                codigo_postal: "G4306",
                departamento_id: 13,
            },
            {
                nombre: "Bajo Alegre",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "El Bobadal",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "El Palomar",
                codigo_postal: "G4186",
                departamento_id: 13,
            },
            {
                nombre: "La Costosa",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "Los Santillan",
                codigo_postal: "G4186",
                departamento_id: 13,
            },
            {
                nombre: "San Cristobal",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "Tusca Pozo",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "El Cadillal",
                codigo_postal: "G4301",
                departamento_id: 13,
            },
            {
                nombre: "La Verde",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "Mistol Puesto",
                codigo_postal: "G4184",
                departamento_id: 13,
            },
            {
                nombre: "San Felix",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "San Gregorio",
                codigo_postal: "G4301",
                departamento_id: 13,
            },
            {
                nombre: "Cheej",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "El 25/km25",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "La Blanca",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Los Gallegos",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Simbolar",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "La Aurora",
                codigo_postal: "G4336",
                departamento_id: 5,
            },
            {
                nombre: "Palos Quemados",
                codigo_postal: "G4336",
                departamento_id: 5,
            },
            {
                nombre: "Cerrillos",
                codigo_postal: "G4336",
                departamento_id: 5,
            },
            {
                nombre: "Puesto De Los Marcos",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Huyamampa",
                codigo_postal: "G4336",
                departamento_id: 5,
            },
            {
                nombre: "Los Herreras",
                codigo_postal: "G4184",
                departamento_id: 5,
            },
            {
                nombre: "Las Chacras",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Siete Arboles",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Esquina Pozo",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Jumi Pozo",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Palmares",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Negra Muerta",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Pampa Mayo",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Bajo Grande",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Jumialito",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Simbol Cañada",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Mistolito",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Vaca Muerta",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Monte Bello",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Nueva Lujan",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Antaje",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "Guaype/guaipe",
                codigo_postal: "G4350",
                departamento_id: 26,
            },
            {
                nombre: "Oso Huanchina",
                codigo_postal: "G4302",
                departamento_id: 26,
            },
            {
                nombre: "Concepcion",
                codigo_postal: "G4302",
                departamento_id: 26,
            },
            {
                nombre: "Pampa Muyoj",
                codigo_postal: "G4200",
                departamento_id: 26,
            },
            {
                nombre: "San Marcos",
                codigo_postal: "G4324",
                departamento_id: 26,
            },
            {
                nombre: "Amiman",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Balbuena",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Kilometro 96",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Kilometro 88",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "La Cruz",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "La Isla",
                codigo_postal: "G5251",
                departamento_id: 18,
            },
            {
                nombre: "Las Mangas",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Lomitas Blancas",
                codigo_postal: "G5251",
                departamento_id: 18,
            },
            {
                nombre: "Oncan",
                codigo_postal: "G5251",
                departamento_id: 18,
            },
            {
                nombre: "Campo Verde",
                codigo_postal: "G4354",
                departamento_id: 10,
            },
            {
                nombre: "Cartavio",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "Colonia San Juan",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "El Cachi",
                codigo_postal: "G5251",
                departamento_id: 10,
            },
            {
                nombre: "El Crucero",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "Maderas",
                codigo_postal: "G4354",
                departamento_id: 10,
            },
            {
                nombre: "Pozo Cavado",
                codigo_postal: "G4354",
                departamento_id: 10,
            },
            {
                nombre: "Pueblo Nuevo",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "Tres Chañares",
                codigo_postal: "G4354",
                departamento_id: 10,
            },
            {
                nombre: "Villa Figueroa",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "Yacu Hichacuna",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "Averias",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "Campo Y Cielo",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "Cardon Esquina",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "Caspi Corral",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "Quebrachal/el Quebrachal",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "El Negrito",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "Jume Viejo/jumi Viejo",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "Tablada Del Boqueron",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "La Tapa",
                codigo_postal: "G4354",
                departamento_id: 10,
            },
            {
                nombre: "Lujan",
                codigo_postal: 4353,
                departamento_id: 10,
            },
            {
                nombre: "Quimilioj",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "San Pablo",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "San Vicente",
                codigo_postal: "G4309",
                departamento_id: 10,
            },
            {
                nombre: "Aguas Coloradas",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "Colonia Totorillas",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "El Tableado",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "Lote La Cañada",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "Pozo Castaño",
                codigo_postal: "G3745",
                departamento_id: 10,
            },
            {
                nombre: "San Jorge",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "Santa Catalina",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "Lezcanos",
                codigo_postal: "G4250",
                departamento_id: 21,
            },
            {
                nombre: "Los Ovejeros",
                codigo_postal: 4220,
                departamento_id: 21,
            },
            {
                nombre: "Aragones",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Galeano",
                codigo_postal: 4220,
                departamento_id: 21,
            },
            {
                nombre: "Los Miranda",
                codigo_postal: "G4201",
                departamento_id: 21,
            },
            {
                nombre: "Isla De Aragones",
                codigo_postal: "G4201",
                departamento_id: 21,
            },
            {
                nombre: "Cañada De Robles",
                codigo_postal: "G4304",
                departamento_id: 21,
            },
            {
                nombre: "Los Quebrachos",
                codigo_postal: "G4304",
                departamento_id: 21,
            },
            {
                nombre: "Abrita Grande",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Chaï¿½ar Pozo De Abajo",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Naranjito",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Seï¿½ora Pujio",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "El Alambrado",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "El Barrialito",
                codigo_postal: "G4354",
                departamento_id: 5,
            },
            {
                nombre: "Los Soria",
                codigo_postal: "G4201",
                departamento_id: 5,
            },
            {
                nombre: "Alto Pozo",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "Ardiles",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "Los Gallardo",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "La Tapera",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "Los Alderetes",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "El Ojo De Agua",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "La Quisca",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "Chaupi Pozo",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "Quita Punco",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "Los Diaz",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "Ampa",
                codigo_postal: "G4350",
                departamento_id: 26,
            },
            {
                nombre: "Azogasta",
                codigo_postal: "G4350",
                departamento_id: 26,
            },
            {
                nombre: "Colonia Siegel",
                codigo_postal: "G4356",
                departamento_id: 26,
            },
            {
                nombre: "Villa Rio Hondo",
                codigo_postal: "G4225",
                departamento_id: 21,
            },
            {
                nombre: "Dique Frontal",
                codigo_postal: "",
                departamento_id: 21,
            },
            {
                nombre: "Los Nuñez",
                codigo_postal: "G4201",
                departamento_id: 21,
            },
            {
                nombre: "Cañada De Acosta",
                codigo_postal: 4220,
                departamento_id: 21,
            },
            {
                nombre: "Tauqueyoj",
                codigo_postal: "G4223",
                departamento_id: 21,
            },
            {
                nombre: "Cañada Del Monte",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Loro Huasi",
                codigo_postal: 4220,
                departamento_id: 21,
            },
            {
                nombre: "Sotelos",
                codigo_postal: "G4304",
                departamento_id: 21,
            },
            {
                nombre: "Isla De Los Sotelos",
                codigo_postal: 4220,
                departamento_id: 21,
            },
            {
                nombre: "Puesto Del Retiro",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Lago Muyoj",
                codigo_postal: "G4334",
                departamento_id: 4,
            },
            {
                nombre: "Loreto",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Isla Verde",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Burra Huanuna",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Campo Amor",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "La Meleada",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Puesto De Beltran",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Pozo Verde",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Pozo Ciego",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Sauce",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Puesto De Suarez",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Santa Barbara",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Ayuncha",
                codigo_postal: 4208,
                departamento_id: 15,
            },
            {
                nombre: "Diente Del Arado",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "La Dormida",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Rio Pinto",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "San Geronimo",
                codigo_postal: 4208,
                departamento_id: 15,
            },
            {
                nombre: "Tacanas",
                codigo_postal: "G4317",
                departamento_id: 15,
            },
            {
                nombre: "Villa Vieja",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Tramo 16",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Tabla Redonda",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Colonia Argentina",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Tramo 26",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Pozo Dulce",
                codigo_postal: "G3062",
                departamento_id: 6,
            },
            {
                nombre: "Los Tableros",
                codigo_postal: "G3064",
                departamento_id: 6,
            },
            {
                nombre: "Las Dolores",
                codigo_postal: "G3064",
                departamento_id: 6,
            },
            {
                nombre: "La Carolina",
                codigo_postal: "G2354",
                departamento_id: 6,
            },
            {
                nombre: "Fortin Inca",
                codigo_postal: "G3062",
                departamento_id: 6,
            },
            {
                nombre: "Guardia Escolta",
                codigo_postal: "G3062",
                departamento_id: 6,
            },
            {
                nombre: "Cuatro Bocas",
                codigo_postal: "G3064",
                departamento_id: 6,
            },
            {
                nombre: "Colombia",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Urutau",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "San Ignacio",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Rincon Del Valle",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Buenos Aires",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Los Pozancones",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Los Pocitos",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Los Morteros",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Las Malvinas",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "La Salvacion",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "La Firmeza",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "El 60",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Añatuya",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "Vizcacheral/el Vizcaczeral",
                codigo_postal: "G4354",
                departamento_id: 12,
            },
            {
                nombre: "Lavalle",
                codigo_postal: "G4234",
                departamento_id: 12,
            },
            {
                nombre: "Moron",
                codigo_postal: "G4238",
                departamento_id: 12,
            },
            {
                nombre: "Puerta Chiquita",
                codigo_postal: "G4234",
                departamento_id: 12,
            },
            {
                nombre: "La Guanpacha",
                codigo_postal: "G4203",
                departamento_id: 12,
            },
            {
                nombre: "Doña Luisa",
                codigo_postal: "G4225",
                departamento_id: 12,
            },
            {
                nombre: "Las Juntas",
                codigo_postal: "G4238",
                departamento_id: 12,
            },
            {
                nombre: "Loma De Yeso",
                codigo_postal: "G4238",
                departamento_id: 12,
            },
            {
                nombre: "Tres Cerros",
                codigo_postal: "G4234",
                departamento_id: 12,
            },
            {
                nombre: "Villa Rosa",
                codigo_postal: "G4203",
                departamento_id: 12,
            },
            {
                nombre: "San Lorenzo",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "San Benito",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "San Antonio De Los Caceres",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Rodeo De Soria",
                codigo_postal: "G4203",
                departamento_id: 7,
            },
            {
                nombre: "Remes",
                codigo_postal: "G4203",
                departamento_id: 7,
            },
            {
                nombre: "Puestito De San Antonio",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Palma Pozo",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Campo Lagar",
                codigo_postal: "G3763",
                departamento_id: 11,
            },
            {
                nombre: "La Simona",
                codigo_postal: 3763,
                departamento_id: 11,
            },
            {
                nombre: "Los Juries",
                codigo_postal: "G3763",
                departamento_id: 11,
            },
            {
                nombre: "Tomas Young",
                codigo_postal: 3763,
                departamento_id: 11,
            },
            {
                nombre: "Santa Elena",
                codigo_postal: 4324,
                departamento_id: 11,
            },
            {
                nombre: "Obraje Mailin",
                codigo_postal: "G3763",
                departamento_id: 11,
            },
            {
                nombre: "Lotes 1 A 9",
                codigo_postal: 3763,
                departamento_id: 11,
            },
            {
                nombre: "Estancia La Rosilla",
                codigo_postal: 3064,
                departamento_id: 11,
            },
            {
                nombre: "Lote 15",
                codigo_postal: 3765,
                departamento_id: 11,
            },
            {
                nombre: "Pozo Herrera",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "Taco Atun",
                codigo_postal: 4328,
                departamento_id: 11,
            },
            {
                nombre: "Suncho Pozo Alto",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "El Malacara",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "Kilometro 454",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "Kilometro 515",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "Villa Carolina",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "La Paulina",
                codigo_postal: "G3766",
                departamento_id: 11,
            },
            {
                nombre: "La Piamontesa",
                codigo_postal: 4324,
                departamento_id: 11,
            },
            {
                nombre: "La Salamanca",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "San Enrique",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "San Martin",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "El Rosario",
                codigo_postal: "G4353",
                departamento_id: 17,
            },
            {
                nombre: "Mercedes",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "Amama",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "El Ojito",
                codigo_postal: "G4200",
                departamento_id: 19,
            },
            {
                nombre: "Agua Amarga",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Agua Azul",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Campo Grande",
                codigo_postal: "G4189",
                departamento_id: 19,
            },
            {
                nombre: "Chañar Bajada",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "El Cambiado",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "El Guapo",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Buen Paso",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "Villa Brana",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "Weisburd",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "El Fisco",
                codigo_postal: "G3740",
                departamento_id: 17,
            },
            {
                nombre: "Aerolito",
                codigo_postal: "G3741",
                departamento_id: 17,
            },
            {
                nombre: "Hernan Mejia Miraval",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "Puna",
                codigo_postal: "G3740",
                departamento_id: 17,
            },
            {
                nombre: "Punta Isla",
                codigo_postal: "G4334",
                departamento_id: 4,
            },
            {
                nombre: "Quebracho Coto",
                codigo_postal: "G4195",
                departamento_id: 19,
            },
            {
                nombre: "El Cuadro",
                codigo_postal: "G2357",
                departamento_id: 16,
            },
            {
                nombre: "Lomas De Zamora",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "La Estancita",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "El Dean",
                codigo_postal: "G4201",
                departamento_id: 7,
            },
            {
                nombre: "Pinto",
                codigo_postal: "G2356",
                departamento_id: 1,
            },
            {
                nombre: "Las Promesas",
                codigo_postal: "G2356",
                departamento_id: 1,
            },
            {
                nombre: "Lotes 46 A 48",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "Suncho Pozo Del Triunfo",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "El Quemado",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Pozo Nuevo",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "El Apeadero",
                codigo_postal: 3760,
                departamento_id: 14,
            },
            {
                nombre: "Suncho Corral",
                codigo_postal: "G4350",
                departamento_id: 14,
            },
            {
                nombre: "Chichillal",
                codigo_postal: "G4350",
                departamento_id: 14,
            },
            {
                nombre: "Callejon Bajada",
                codigo_postal: "G4356",
                departamento_id: 14,
            },
            {
                nombre: "Matara",
                codigo_postal: "G4356",
                departamento_id: 14,
            },
            {
                nombre: "Paaj Rodeo",
                codigo_postal: "G4200",
                departamento_id: 26,
            },
            {
                nombre: "Villa Matara",
                codigo_postal: "G4200",
                departamento_id: 26,
            },
            {
                nombre: "Conchayoj",
                codigo_postal: "G4200",
                departamento_id: 26,
            },
            {
                nombre: "Chilcan",
                codigo_postal: "G4200",
                departamento_id: 26,
            },
            {
                nombre: "La Estancia",
                codigo_postal: "G3752",
                departamento_id: 14,
            },
            {
                nombre: "Llajta Mauca",
                codigo_postal: "G4356",
                departamento_id: 14,
            },
            {
                nombre: "Melero",
                codigo_postal: "G4356",
                departamento_id: 14,
            },
            {
                nombre: "El Zanjon",
                codigo_postal: "G4206",
                departamento_id: 7,
            },
            {
                nombre: "Libertad",
                codigo_postal: "G3745",
                departamento_id: 17,
            },
            {
                nombre: "El Hoyo",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "Lote L 3",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "Quilumpa",
                codigo_postal: "G3745",
                departamento_id: 17,
            },
            {
                nombre: "Granadero Gatica",
                codigo_postal: "G3741",
                departamento_id: 17,
            },
            {
                nombre: "Arbol Blanco",
                codigo_postal: "G3731",
                departamento_id: 17,
            },
            {
                nombre: "Otumpa",
                codigo_postal: "G3741",
                departamento_id: 17,
            },
            {
                nombre: "Girardet",
                codigo_postal: "G3736",
                departamento_id: 17,
            },
            {
                nombre: "Cejolao",
                codigo_postal: "G3740",
                departamento_id: 17,
            },
            {
                nombre: "Lote 32 La Reserva",
                codigo_postal: "G3741",
                departamento_id: 14,
            },
            {
                nombre: "La Pampa",
                codigo_postal: "G3740",
                departamento_id: 14,
            },
            {
                nombre: "Pozuelos",
                codigo_postal: "G4306",
                departamento_id: 21,
            },
            {
                nombre: "Vilelas",
                codigo_postal: "G3752",
                departamento_id: 14,
            },
            {
                nombre: "Tapso",
                codigo_postal: "G4238",
                departamento_id: 8,
            },
            {
                nombre: "Villa La Punta",
                codigo_postal: "G4203",
                departamento_id: 8,
            },
            {
                nombre: "25 De Mayo Sur",
                codigo_postal: "G4234",
                departamento_id: 8,
            },
            {
                nombre: "Ancajan",
                codigo_postal: "G4233",
                departamento_id: 8,
            },
            {
                nombre: "Sobremonte",
                codigo_postal: "G4233",
                departamento_id: 8,
            },
            {
                nombre: "San Antonio De Copo",
                codigo_postal: "G4328",
                departamento_id: 4,
            },
            {
                nombre: "Real Sayana",
                codigo_postal: "G4334",
                departamento_id: 4,
            },
            {
                nombre: "Punta Corral",
                codigo_postal: "G4326",
                departamento_id: 4,
            },
            {
                nombre: "Percas",
                codigo_postal: "G4324",
                departamento_id: 4,
            },
            {
                nombre: "Lugones",
                codigo_postal: "G4326",
                departamento_id: 4,
            },
            {
                nombre: "Mansupa",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Colonia Tinco",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "El Rodeo/rodeo",
                codigo_postal: "G4203",
                departamento_id: 8,
            },
            {
                nombre: "Las Peñas",
                codigo_postal: "G4238",
                departamento_id: 8,
            },
            {
                nombre: "San Justo",
                codigo_postal: "G4203",
                departamento_id: 8,
            },
            {
                nombre: "Chañar Pozo Del Medio",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Cuyoj",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Colonia Maria Luisa",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Cañada Escobar",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "La Granja",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Sabagasta",
                codigo_postal: "G4328",
                departamento_id: 24,
            },
            {
                nombre: "Barrancas",
                codigo_postal: "G4319",
                departamento_id: 24,
            },
            {
                nombre: "Taco Isla",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Guerra",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Nueva Francia",
                codigo_postal: "G4206",
                departamento_id: 27,
            },
            {
                nombre: "Villa Silipica",
                codigo_postal: "G4206",
                departamento_id: 27,
            },
            {
                nombre: "Arraga",
                codigo_postal: "G4206",
                departamento_id: 27,
            },
            {
                nombre: "Kilometro 49",
                codigo_postal: "G5258",
                departamento_id: 18,
            },
            {
                nombre: "San Bernardo",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "El Cabure",
                codigo_postal: "G3712",
                departamento_id: 9,
            },
            {
                nombre: "Los Pirpintos",
                codigo_postal: "G3712",
                departamento_id: 9,
            },
            {
                nombre: "Boqueron",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "Los Peraltas",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "Los Tolozos",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "El Peral",
                codigo_postal: "G4201",
                departamento_id: 3,
            },
            {
                nombre: "Hoyos",
                codigo_postal: "G4201",
                departamento_id: 3,
            },
            {
                nombre: "Chañar Pocito",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Pozo Del Arbolito",
                codigo_postal: "G4225",
                departamento_id: 21,
            },
            {
                nombre: "El Pueblito",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Pozo Del Medio",
                codigo_postal: 3760,
                departamento_id: 11,
            },
            {
                nombre: "La Granada",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "El Bagual",
                codigo_postal: 4184,
                departamento_id: 13,
            },
            {
                nombre: "El Charco",
                codigo_postal: "G4306",
                departamento_id: 13,
            },
            {
                nombre: "El Churqui",
                codigo_postal: "G4184",
                departamento_id: 13,
            },
            {
                nombre: "El Pacara",
                codigo_postal: "G4306",
                departamento_id: 13,
            },
            {
                nombre: "Chilca",
                codigo_postal: "G4308",
                departamento_id: 23,
            },
            {
                nombre: "El Refugio",
                codigo_postal: "G4308",
                departamento_id: 23,
            },
            {
                nombre: "Los Pereyra",
                codigo_postal: "G4301",
                departamento_id: 23,
            },
            {
                nombre: "Buey Muerto",
                codigo_postal: "G4312",
                departamento_id: 23,
            },
            {
                nombre: "El Quebrachal",
                codigo_postal: "G4322",
                departamento_id: 23,
            },
            {
                nombre: "Loaj",
                codigo_postal: "G4322",
                departamento_id: 23,
            },
            {
                nombre: "Pozo Sumi",
                codigo_postal: "G4322",
                departamento_id: 23,
            },
            {
                nombre: "Barrancas Coloradas",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Brea Pozo",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Garciano",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Limton",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Colonia Hermelinda",
                codigo_postal: "",
                departamento_id: 1,
            },
            {
                nombre: "El Arenal",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "El Fisco De Fatima",
                codigo_postal: "G4184",
                departamento_id: 13,
            },
            {
                nombre: "El Rincon",
                codigo_postal: "G4184",
                departamento_id: 13,
            },
            {
                nombre: "La Guanaca",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "Ashpa Sinchi",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Puestito",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Estacion Robles",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Pozo Mosoj",
                codigo_postal: "G4200",
                departamento_id: 25,
            },
            {
                nombre: "Pampa Atun",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Abra Grande",
                codigo_postal: "G4336",
                departamento_id: 5,
            },
            {
                nombre: "El Favorito",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "El Aibe",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "La Falda",
                codigo_postal: "G4324",
                departamento_id: 26,
            },
            {
                nombre: "Totorilla",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Minerva",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "San Salvador",
                codigo_postal: "G4354",
                departamento_id: 10,
            },
            {
                nombre: "El Pirucho",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "Kilometro 21",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "Kilometro Cero",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "La Invernada Norte",
                codigo_postal: 4353,
                departamento_id: 10,
            },
            {
                nombre: "La Invernada Sud",
                codigo_postal: "G3501",
                departamento_id: 10,
            },
            {
                nombre: "Nueva Colonia",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "Machaguay Huanchina",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "Vaca Huañuna",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "Vinal Isla",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "Kilometro 40",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "Bandera Bajada",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "Desbastadero/el Desbastadero",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "La Barrosa",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "Punitayoj",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "Sotelillos",
                codigo_postal: "G4304",
                departamento_id: 21,
            },
            {
                nombre: "Villa Gimenez",
                codigo_postal: "G4201",
                departamento_id: 21,
            },
            {
                nombre: "Kuenti Tacko",
                codigo_postal: "G4201",
                departamento_id: 21,
            },
            {
                nombre: "La Aguada",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Chañar Pozo De Arriba",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Palmitas",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Colonia Gamara",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Los Angeles",
                codigo_postal: "G4315",
                departamento_id: 5,
            },
            {
                nombre: "Acosta",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "Los Quiroga",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Los Acosta",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Los Gomez",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "El Empachado",
                codigo_postal: "G4356",
                departamento_id: 26,
            },
            {
                nombre: "Garza",
                codigo_postal: "G4324",
                departamento_id: 26,
            },
            {
                nombre: "Barrialito",
                codigo_postal: "G4225",
                departamento_id: 21,
            },
            {
                nombre: "Chauchillas",
                codigo_postal: "G4201",
                departamento_id: 21,
            },
            {
                nombre: "El Sauzal",
                codigo_postal: "G4201",
                departamento_id: 21,
            },
            {
                nombre: "Villa San Martin",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Chuña Albordon",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Crucesitas",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Kilometro 83",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "La Resbalosa",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Yolo Huasi",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Puesto De Juanes",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Sauce Solo",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "La Revancha",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Punua",
                codigo_postal: 4208,
                departamento_id: 15,
            },
            {
                nombre: "Ventura Pampa",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Aspirante",
                codigo_postal: "G2354",
                departamento_id: 6,
            },
            {
                nombre: "Bandera",
                codigo_postal: "G3064",
                departamento_id: 6,
            },
            {
                nombre: "Itati",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "El Palmar",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "La Breita",
                codigo_postal: "G4238",
                departamento_id: 12,
            },
            {
                nombre: "Mistol Muyoj",
                codigo_postal: "G4225",
                departamento_id: 12,
            },
            {
                nombre: "Villa Guasayan",
                codigo_postal: "G4238",
                departamento_id: 12,
            },
            {
                nombre: "San Lorenzo De Los Sayagos",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Los Morales",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Maquito",
                codigo_postal: "G4206",
                departamento_id: 7,
            },
            {
                nombre: "Mal Paso",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "La Nena",
                codigo_postal: "G3765",
                departamento_id: 11,
            },
            {
                nombre: "Estacion Tacañitas",
                codigo_postal: 3766,
                departamento_id: 11,
            },
            {
                nombre: "Canal Melero",
                codigo_postal: 3760,
                departamento_id: 11,
            },
            {
                nombre: "La Magdalena",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "Las Tinajas",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "Muyuska",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "Tabianita",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "Santa Rita",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "Catamarca",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "Ledesma",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "Campo Toledo",
                codigo_postal: "G3064",
                departamento_id: 11,
            },
            {
                nombre: "Villa Mercedes",
                codigo_postal: "G4189",
                departamento_id: 19,
            },
            {
                nombre: "El Azul",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "El Laurel",
                codigo_postal: "G5258",
                departamento_id: 20,
            },
            {
                nombre: "Puente Del Saladillo",
                codigo_postal: "G4200",
                departamento_id: 24,
            },
            {
                nombre: "La Virtud",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Huiñaj Pozo",
                codigo_postal: "G4301",
                departamento_id: 9,
            },
            {
                nombre: "Estacion Las Gamas",
                codigo_postal: "G3765",
                departamento_id: 11,
            },
            {
                nombre: "Taquetuyo",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Sinchi Caña",
                codigo_postal: "G4200",
                departamento_id: 8,
            },
            {
                nombre: "San Miguel",
                codigo_postal: "G4230",
                departamento_id: 8,
            },
            {
                nombre: "El Huaico",
                codigo_postal: "G1111",
                departamento_id: 16,
            },
            {
                nombre: "La Brea",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "El Hoyon",
                codigo_postal: "",
                departamento_id: 3,
            },
            {
                nombre: "El Moradito",
                codigo_postal: "G4200",
                departamento_id: 2,
            },
            {
                nombre: "Saladillo",
                codigo_postal: "G4200",
                departamento_id: 2,
            },
            {
                nombre: "Contreras",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "San Jose Del Boqueron",
                codigo_postal: "G4301",
                departamento_id: 9,
            },
            {
                nombre: "Agustina Libarona",
                codigo_postal: 3741,
                departamento_id: 2,
            },
            {
                nombre: "Cerro Chico",
                codigo_postal: "G4200",
                departamento_id: 8,
            },
            {
                nombre: "Taquello",
                codigo_postal: "G4200",
                departamento_id: 21,
            },
            {
                nombre: "Rincon Grande",
                codigo_postal: "G4200",
                departamento_id: 13,
            },
            {
                nombre: "Taco  Pozo",
                codigo_postal: "G4200",
                departamento_id: 19,
            },
            {
                nombre: "Quebracho Esquina",
                codigo_postal: "G4200",
                departamento_id: 19,
            },
            {
                nombre: "Toro Human",
                codigo_postal: "",
                departamento_id: 19,
            },
            {
                nombre: "Palmita De Gerez",
                codigo_postal: "",
                departamento_id: 5,
            },
            {
                nombre: "Guaycuru",
                codigo_postal: "",
                departamento_id: 5,
            },
            {
                nombre: "Paso De Los Oscares",
                codigo_postal: "",
                departamento_id: 16,
            },
            {
                nombre: "Ardiles De La Costa",
                codigo_postal: "",
                departamento_id: 5,
            },
            {
                nombre: "Guampacha",
                codigo_postal: "",
                departamento_id: 12,
            },
            {
                nombre: "Monte Quemado",
                codigo_postal: "G3714",
                departamento_id: 19,
            },
            {
                nombre: "Santa Rosa",
                codigo_postal: "G3741",
                departamento_id: 2,
            },
            {
                nombre: "La Manga",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "La Fortuna",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "El Porvenir",
                codigo_postal: "G3747",
                departamento_id: 2,
            },
            {
                nombre: "Upianita",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Campo Alegre",
                codigo_postal: "G4328",
                departamento_id: 4,
            },
            {
                nombre: "La Paloma",
                codigo_postal: "G3736",
                departamento_id: 17,
            },
            {
                nombre: "El Saladillo",
                codigo_postal: "G3741",
                departamento_id: 14,
            },
            {
                nombre: "Sol De Mayo",
                codigo_postal: "G4203",
                departamento_id: 8,
            },
            {
                nombre: "Santa Cruz",
                codigo_postal: "G4301",
                departamento_id: 8,
            },
            {
                nombre: "Santo Domingo",
                codigo_postal: "G4326",
                departamento_id: 4,
            },
            {
                nombre: "Santa Rosa",
                codigo_postal: "G4334",
                departamento_id: 4,
            },
            {
                nombre: "San Roque",
                codigo_postal: "G4326",
                departamento_id: 4,
            },
            {
                nombre: "San Pedro",
                codigo_postal: "G4326",
                departamento_id: 4,
            },
            {
                nombre: "San Antonio",
                codigo_postal: "G4326",
                departamento_id: 4,
            },
            {
                nombre: "El Puestito",
                codigo_postal: "G4230",
                departamento_id: 8,
            },
            {
                nombre: "El Barrial",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Santa Rosa",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Lomas Blancas",
                codigo_postal: "G5253",
                departamento_id: 24,
            },
            {
                nombre: "El Simbolar",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "Pozo Grande",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "La Candelaria",
                codigo_postal: "G4452",
                departamento_id: 9,
            },
            {
                nombre: "Rumi Pozo",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Toro Pozo",
                codigo_postal: 4420,
                departamento_id: 9,
            },
            {
                nombre: "Santa Rosa",
                codigo_postal: "G4301",
                departamento_id: 9,
            },
            {
                nombre: "Las Lomas",
                codigo_postal: "G3712",
                departamento_id: 9,
            },
            {
                nombre: "Pozo Grande",
                codigo_postal: "G4320",
                departamento_id: 21,
            },
            {
                nombre: "La Soledad",
                codigo_postal: "G4225",
                departamento_id: 21,
            },
            {
                nombre: "San Carlos",
                codigo_postal: "G4225",
                departamento_id: 21,
            },
            {
                nombre: "El Desvio",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "El Albardon",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "San Carlos",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "San Francisco",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "San Juan",
                codigo_postal: "G5253",
                departamento_id: 20,
            },
            {
                nombre: "Taco Pozo",
                codigo_postal: "G5255",
                departamento_id: 20,
            },
            {
                nombre: "Los Ralos",
                codigo_postal: "G4184",
                departamento_id: 13,
            },
            {
                nombre: "San Jose",
                codigo_postal: "G4184",
                departamento_id: 13,
            },
            {
                nombre: "Bajo Hondo",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "La Fortuna",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "San Antonio",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "San Andres",
                codigo_postal: "G4187",
                departamento_id: 13,
            },
            {
                nombre: "La Verde",
                codigo_postal: "G4187",
                departamento_id: 25,
            },
            {
                nombre: "San Nicolas",
                codigo_postal: "G4321",
                departamento_id: 5,
            },
            {
                nombre: "San Isidro",
                codigo_postal: "G3714",
                departamento_id: 5,
            },
            {
                nombre: "Puesto Del Medio",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "Las Abras",
                codigo_postal: "G4338",
                departamento_id: 5,
            },
            {
                nombre: "San Juan",
                codigo_postal: "G4339",
                departamento_id: 5,
            },
            {
                nombre: "Quimili",
                codigo_postal: "G4322",
                departamento_id: 26,
            },
            {
                nombre: "Suri Pozo",
                codigo_postal: "G5250",
                departamento_id: 18,
            },
            {
                nombre: "Jumialito",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "La Candelaria",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "Pampa Muyoj",
                codigo_postal: "G4354",
                departamento_id: 10,
            },
            {
                nombre: "San Felix",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "Santo Domingo",
                codigo_postal: 4350,
                departamento_id: 10,
            },
            {
                nombre: "Tusca Pozo",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "El Albardon",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "La Esperanza",
                codigo_postal: "G4351",
                departamento_id: 10,
            },
            {
                nombre: "La Ramada",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "Nueva Esperanza",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "Colonia Alpina",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "San Jose",
                codigo_postal: 4353,
                departamento_id: 10,
            },
            {
                nombre: "Tala Pozo",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Puesto Nuevo",
                codigo_postal: "G4197",
                departamento_id: 21,
            },
            {
                nombre: "Chañar Pozo De Abajo",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Señora Pujio",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "San Ramon",
                codigo_postal: "G4302",
                departamento_id: 5,
            },
            {
                nombre: "San Pablo",
                codigo_postal: "G4220",
                departamento_id: 21,
            },
            {
                nombre: "Beltran",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "San Jose",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Santa Rosa",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Suri Pozo",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "San Felipe",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "San Carlos",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "San Jose",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "Santa Lucia",
                codigo_postal: "G3062",
                departamento_id: 6,
            },
            {
                nombre: "Ahi Veremos",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Vinal Pozo",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "San Jose",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "San Javier",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Santa Cruz",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Lujan",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "La Cañada",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Pampa Pozo",
                codigo_postal: "G4203",
                departamento_id: 12,
            },
            {
                nombre: "Pozo Cavado",
                codigo_postal: "G4238",
                departamento_id: 12,
            },
            {
                nombre: "Puesto Del Medio",
                codigo_postal: "G4238",
                departamento_id: 12,
            },
            {
                nombre: "Las Chacras",
                codigo_postal: "G4225",
                departamento_id: 12,
            },
            {
                nombre: "Puerta Grande",
                codigo_postal: "G4225",
                departamento_id: 12,
            },
            {
                nombre: "San Ramon",
                codigo_postal: "G4238",
                departamento_id: 12,
            },
            {
                nombre: "Santa Catalina",
                codigo_postal: "G4203",
                departamento_id: 12,
            },
            {
                nombre: "Santa Maria",
                codigo_postal: "G4206",
                departamento_id: 7,
            },
            {
                nombre: "San Jose",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Pozo Cavado",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Pampa Muyoj",
                codigo_postal: "G4201",
                departamento_id: 7,
            },
            {
                nombre: "Averias",
                codigo_postal: 3766,
                departamento_id: 11,
            },
            {
                nombre: "San Francisco",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "San Antonio",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "Suri Pozo",
                codigo_postal: "G4353",
                departamento_id: 17,
            },
            {
                nombre: "Nueva Esperanza",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "Santa Rosa",
                codigo_postal: "G3740",
                departamento_id: 17,
            },
            {
                nombre: "El Simbolar",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "San Antonio",
                codigo_postal: "G4350",
                departamento_id: 14,
            },
            {
                nombre: "Nueva Esperanza",
                codigo_postal: "G4301",
                departamento_id: 2,
            },
            {
                nombre: "Santo Domingo",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "Sol De Mayo",
                codigo_postal: "G4201",
                departamento_id: 7,
            },
            {
                nombre: "Lujan",
                codigo_postal: "G4332",
                departamento_id: 4,
            },
            {
                nombre: "San Pedro",
                codigo_postal: "G4200",
                departamento_id: 8,
            },
            {
                nombre: "Monte Redondo",
                codigo_postal: "G4200",
                departamento_id: 8,
            },
            {
                nombre: "Santa Elena",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "La Bajada",
                codigo_postal: "G4321",
                departamento_id: 24,
            },
            {
                nombre: "La Higuera",
                codigo_postal: "G4208",
                departamento_id: 27,
            },
            {
                nombre: "San Vicente",
                codigo_postal: "G4206",
                departamento_id: 27,
            },
            {
                nombre: "Huachana",
                codigo_postal: "G4206",
                departamento_id: 27,
            },
            {
                nombre: "Campo Alegre",
                codigo_postal: "G4206",
                departamento_id: 27,
            },
            {
                nombre: "San Gregorio",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "La Florida",
                codigo_postal: "G4308",
                departamento_id: 23,
            },
            {
                nombre: "Lomitas",
                codigo_postal: "G4322",
                departamento_id: 23,
            },
            {
                nombre: "Puesto Nuevo",
                codigo_postal: "G4322",
                departamento_id: 23,
            },
            {
                nombre: "San Ramon",
                codigo_postal: "G4322",
                departamento_id: 23,
            },
            {
                nombre: "San Jose",
                codigo_postal: "G4208",
                departamento_id: 25,
            },
            {
                nombre: "Percas",
                codigo_postal: "G4324",
                departamento_id: 25,
            },
            {
                nombre: "Villa Nueva",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "Santo Domingo",
                codigo_postal: "G4302",
                departamento_id: 23,
            },
            {
                nombre: "San Nicolas",
                codigo_postal: "G5253",
                departamento_id: 16,
            },
            {
                nombre: "Gramilla",
                codigo_postal: "G4304",
                departamento_id: 13,
            },
            {
                nombre: "Toro Pozo",
                codigo_postal: 4306,
                departamento_id: 13,
            },
            {
                nombre: "La Higuera",
                codigo_postal: "G4208",
                departamento_id: 25,
            },
            {
                nombre: "San Lorenzo",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "La Cañada",
                codigo_postal: "G4354",
                departamento_id: 10,
            },
            {
                nombre: "Jumial Grande",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "San Felipe",
                codigo_postal: "G4301",
                departamento_id: 10,
            },
            {
                nombre: "San Roque",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "Santa Ana",
                codigo_postal: 4301,
                departamento_id: 10,
            },
            {
                nombre: "La Falda",
                codigo_postal: "G4300",
                departamento_id: 5,
            },
            {
                nombre: "El Porvenir",
                codigo_postal: 4220,
                departamento_id: 21,
            },
            {
                nombre: "Jumi Pozo",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Lomitas",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Monte Redondo",
                codigo_postal: "G4212",
                departamento_id: 15,
            },
            {
                nombre: "San Juan",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "San Vicente",
                codigo_postal: 4208,
                departamento_id: 15,
            },
            {
                nombre: "Tio Pozo",
                codigo_postal: "G4208",
                departamento_id: 15,
            },
            {
                nombre: "Los Cerrillos",
                codigo_postal: "G4203",
                departamento_id: 12,
            },
            {
                nombre: "Lujan",
                codigo_postal: "G3760",
                departamento_id: 12,
            },
            {
                nombre: "San Pedro",
                codigo_postal: "G4238",
                departamento_id: 12,
            },
            {
                nombre: "San Pedro",
                codigo_postal: "G4206",
                departamento_id: 7,
            },
            {
                nombre: "Puesto Del Medio",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "La Fortuna",
                codigo_postal: "G4351",
                departamento_id: 17,
            },
            {
                nombre: "Santa Lucia",
                codigo_postal: "G4319",
                departamento_id: 17,
            },
            {
                nombre: "El Arenal",
                codigo_postal: "G4197",
                departamento_id: 19,
            },
            {
                nombre: "La Estancia",
                codigo_postal: "G3760",
                departamento_id: 11,
            },
            {
                nombre: "El Rincon",
                codigo_postal: "G3714",
                departamento_id: 9,
            },
            {
                nombre: "San Pedro",
                codigo_postal: "G4324",
                departamento_id: 26,
            },
            {
                nombre: "Pozo Mosoj",
                codigo_postal: "G4200",
                departamento_id: 4,
            },
            {
                nombre: "Abra Grande",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Santa Maria",
                codigo_postal: "G4353",
                departamento_id: 10,
            },
            {
                nombre: "Donadeu",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "Ahi Veremos",
                codigo_postal: "G3731",
                departamento_id: 2,
            },
            {
                nombre: "Quimilioj",
                codigo_postal: "G4313",
                departamento_id: 25,
            },
            {
                nombre: "El Bajo",
                codigo_postal: "G5255",
                departamento_id: 20,
            },
            {
                nombre: "Santos Lugares",
                codigo_postal: "G3743",
                departamento_id: 17,
            },
            {
                nombre: "Santa Maria",
                codigo_postal: "G4200",
                departamento_id: 9,
            },
            {
                nombre: "Chañar Pozo",
                codigo_postal: "G4200",
                departamento_id: 10,
            },
            {
                nombre: "Puesto Nuevo",
                codigo_postal: "G4200",
                departamento_id: 7,
            },
            {
                nombre: "Santo Domingo",
                codigo_postal: "G4200",
                departamento_id: 2,
            },
            {
                nombre: "Ventura Pampa",
                codigo_postal: "G4317",
                departamento_id: 3,
            },
            {
                nombre: "Santo Domingo",
                codigo_postal: "G4200",
                departamento_id: 12,
            },
            {
                nombre: "Los Quebrachos",
                codigo_postal: "G4200",
                departamento_id: 13,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 1,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 2,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 3,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 4,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 5,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 6,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 7,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 8,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 9,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 10,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 11,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 12,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 13,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 14,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 15,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 16,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 17,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 18,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 19,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 20,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 21,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 22,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 23,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 24,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 25,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 26,
            },
            {
                nombre: "No figura en la tabla",
                codigo_postal: "",
                departamento_id: 27,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("localidades", null);
    },
};
