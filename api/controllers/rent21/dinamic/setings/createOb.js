const mysql = require('mysql')
const Sequelize = require("sequelize")
const {Base64} = require('js-base64');
const md5 = require('md5');
const dbOwners = {}
const dbBuildings = {}
const dbContacts = {}
const dbAddress = {}
const dbOb = {}
const dbLinks = {}
const dbExport = {}
const cianItems = {
  rent: {
    flatRent: {
      Category: 'flatRent',
      RoomType: ['both', 'combined', 'separate'],
      BedsCount: 0,
      FlatRoomsCount: [1, 2, 3, 4, 5, 6, 7, 9],
      IsApartments: false,
      IsPenthouse: false,
      TotalArea: 0,
      FloorNumber: 0,
      AllRoomsArea: '',
      RoomDefinitions: '',
      Room: {
        Area: ''
      },
      LivingArea: 0,
      KitchenArea: 0,
      LoggiasCount: 0,
      BalconiesCount: 0,
      WindowsViewType: ['street', 'yard', 'yardAndStreet'],
      SeparateWcsCount: 0,
      CombinedWcsCount: 0,
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasRamp: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        Name: '',
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'block',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'old',
          'panel',
          'stalin',
          'wireframe',
          'wood'
        ],
        Series: '',
        CeilingHeight: 0,
        PassengerLiftsCount: 0,
        CargoLiftsCount: 0,
        HasGarbageChute: false,
        Parking: {}
      },
      Apartment: '',
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    bedRent: {
      Category: 'bedRent',
      RoomsForSaleCount: 0,
      RoomArea: 0,
      BedsCountL: 0,
      RoomsCount: 0,
      TotalArea: 0,
      FloorNumber: 0,
      KitchenArea: 0,
      LoggiasCount: 0,
      BalconiesCount: 0,
      SeparateWcsCount: 0,
      CombinedWcsCount: 0,
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasRamp: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        Name: '',
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'block',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'old',
          'panel',
          'stalin',
          'wireframe',
          'wood'
        ],
        Series: '',
        CeilingHeight: 0,
        PassengerLiftsCount: 0,
        CargoLiftsCount: 0,
        HasGarbageChute: false,
        Parking: {}
      },
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    roomRent: {
      Category: 'roomRent',
      RoomsForSaleCount: 0,
      RoomType: ['both', 'combined', 'separate'],
      RoomArea: 0,
      BedsCount: 0,
      RoomsCount: 0,
      FlatRoomsCount: [1, 2, 3, 4, 5, 6, 7, 9],
      TotalArea: 0,
      FloorNumber: 0,
      KitchenArea: 0,
      LoggiasCount: 0,
      BalconiesCount: 0,
      SeparateWcsCount: 0,
      CombinedWcsCount: 0,
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasRamp: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        Name: '',
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'block',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'old',
          'panel',
          'stalin',
          'wireframe',
          'wood'
        ],
        Series: '',
        CeilingHeight: 0,
        PassengerLiftsCount: 0,
        CargoLiftsCount: 0,
        HasGarbageChute: false,
        Parking: {}
      },
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        TenantsType: ['any', 'family', 'female', 'male'],
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }

    },
    houseRent: {
      Category: 'houseRent',
      BedsCount: 0,
      BuildingCadastralNumber: '',
      SettlementName: '',
      TotalArea: 0,
      BedroomsCount: 0,
      WcLocationType: ['indoors', 'outdoors'],
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasBathhouse: false,
      HasGarage: false,
      HasPool: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'wireframe',
          'wood'
        ],
        HeatingType: [
          'autonomousGas',
          'centralCoal',
          'centralGas',
          'diesel',
          'electric',
          'fireplace',
          'no',
          'solidFuelBoiler',
          'stove'
        ]
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Status: [
          'farm',
          'gardening',
          'individualHousingConstruction',
          'industrialLand',
          'privateFarm',
          'suburbanNonProfitPartnership'
        ]
      },
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    cottageRent: {
      Category: 'cottageRent',
      BedsCount: 0,
      BuildingCadastralNumber: '',
      SettlementName: '',
      TotalArea: 0,
      BedroomsCount: 0,
      WcLocationType: ['indoors', 'outdoors'],
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasBathhouse: false,
      HasGarage: false,
      HasPool: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'wireframe',
          'wood'
        ],
        HeatingType: [
          'autonomousGas',
          'centralCoal',
          'centralGas',
          'diesel',
          'electric',
          'fireplace',
          'no',
          'solidFuelBoiler',
          'stove'
        ]
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Status: [
          'farm',
          'gardening',
          'individualHousingConstruction',
          'industrialLand',
          'privateFarm',
          'suburbanNonProfitPartnership'
        ]
      },
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    townhouseRent: {
      Category: 'townhouseRent',
      BedsCount: 0,
      BuildingCadastralNumber: '',
      SettlementName: '',
      TotalArea: 0,
      BedroomsCount: 0,
      WcLocationType: ['indoors', 'outdoors'],
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasBathhouse: false,
      HasGarage: false,
      HasPool: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'wireframe',
          'wood'
        ],
        HeatingType: [
          'autonomousGas',
          'centralCoal',
          'centralGas',
          'diesel',
          'electric',
          'fireplace',
          'no',
          'solidFuelBoiler',
          'stove'
        ]
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Status: [
          'farm',
          'gardening',
          'individualHousingConstruction',
          'industrialLand',
          'privateFarm',
          'suburbanNonProfitPartnership'
        ]
      },
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    houseShareRent: {
      Category: 'houseShareRent',
      BedsCount: 0,
      BuildingCadastralNumber: '',
      SettlementName: '',
      TotalArea: 0,
      ShareAmount: '',
      BedroomsCount: 0,
      WcLocationType: ['indoors', 'outdoors'],
      RepairType: ['cosmetic', 'design', 'euro', 'no'],
      HasInternet: false,
      HasFurniture: false,
      HasPhone: false,
      HasKitchenFurniture: false,
      HasTv: false,
      HasWasher: false,
      HasConditioner: false,
      HasBathtub: false,
      IsInHiddenBase: false,
      HasShower: false,
      HasBathhouse: false,
      HasGarage: false,
      HasPool: false,
      HasDishwasher: false,
      PetsAllowed: false,
      HasFridge: false,
      ChildrenAllowed: false,
      Building: {
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'wireframe',
          'wood'
        ],
        HeatingType: [
          'autonomousGas',
          'centralCoal',
          'centralGas',
          'diesel',
          'electric',
          'fireplace',
          'no',
          'solidFuelBoiler',
          'stove'
        ]
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Status: [
          'farm',
          'gardening',
          'individualHousingConstruction',
          'industrialLand',
          'privateFarm',
          'suburbanNonProfitPartnership'
        ]
      },
      BargainTerms: {
        Price: 0,
        UtilitiesTerms: {
          IncludedInPrice: false,
          Price: 0,
          FlowMetersNotIncludedInPrice: false
        },
        Currency: ['eur', 'rur', 'usd'],
        BargainAllowed: false,
        BargainPrice: 0,
        BargainConditions: '',
        LeaseTermType: ['fewMonths', 'longTerm'],
        PrepayMonths: 0,
        Deposit: 0,
        ClientFee: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    garageRent: {
      Category: 'garageRent',
      Garage: {
        Type: ['box', 'garage', 'parkingPlace'],
        GarageType: ['builtIn', 'capital', 'samostroy', 'shell'],
        Material: ['brick', 'metal'],
        Status: ['byProxy', 'cooperative', 'ownership ']
      },
      TotalArea: 0,
      HasLight: false,
      HasElectricity: false,
      HasHeating: false,
      HasWater: false,
      HasExtinguishingSystem: false,
      IsInHiddenBase: false,
      Building: {
        Name: '',
        Parking: {},
        Infrastructure: {
          HasCarWash: false,
          HasCarService: false,
          HasTire: false,
          HasInspectionPit: false,
          HasVideoSurveillance: false,
          HasHourSecurity: false,
          HasAutomaticGates: false,
          HasEntryByPass: false,
          HasBasement: false
        }
      },
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    buildingRent: {
      Category: 'buildingRent',
      ConditionType: 'typical',
      Layout: 'cabinet',
      HasFurniture: false,
      InputType: [
        'commonFromStreet',
        'commonFromYard',
        'separateFromStreet',
        'separateFromYard'
      ],
      AvailableFrom: '',
      TaxNumber: 0,
      IsInHiddenBase: false,
      Building: {
        Name: '',
        FloorsCount: 0,
        TotalArea: 0,
        HeatingType: ['autonomous', 'central', 'no'],
        CeilingHeight: 0,
        Parking: {},
        Type: [
          'administrativeBuilding',
          'businessCenter',
          'businessCenter2',
          'businessHouse',
          'businessPark',
          'businessQuarter',
          'businessQuarter2',
          'free',
          'industrialComplex',
          'industrialPark',
          'industrialSite',
          'industrialWarehouseComplex',
          'logisticsCenter',
          'logisticsComplex',
          'logisticsPark',
          'mansion',
          'manufactureBuilding',
          'manufacturingFacility',
          'modular',
          'multifunctionalComplex',
          'officeAndHotelComplex',
          'officeAndResidentialComplex',
          'officeAndWarehouse',
          'officeAndWarehouseComplex',
          'officeBuilding',
          'officeCenter',
          'officeComplex',
          'officeIndustrialComplex',
          'officeQuarter',
          'old',
          'other',
          'outlet',
          'propertyComplex',
          'residentialComplex',
          'residentialHouse',
          'shoppingAndBusinessComplex',
          'shoppingAndCommunityCenter',
          'shoppingAndEntertainmentCenter',
          'shoppingAndWarehouseComplex',
          'shoppingCenter',
          'shoppingComplex',
          'specializedShoppingCenter',
          'standaloneBuilding',
          'technopark',
          'tradeAndExhibitionComplex',
          'tradingHouse',
          'tradingOfficeComplex',
          'warehouse',
          'warehouseComplex'
        ],
        HouseLineType: ['first', 'other', 'second'],
        ClassType: ['a', 'aPlus', 'b', 'bMinus', 'bPlus', 'c'],
        Developer: '',
        ManagementCompany: '',
        VentilationType: ['central', 'local', 'no'],
        ExtinguishingSystemType: [
          'alarm',
          'gas',
          'hydrant',
          'no',
          'powder',
          'sprinkler',
        ],
        ExtinguishingSystemTypes: [{
          ExtinguishingSystemTypeEnum: [
            'alarm',
            'gas',
            'hydrant',
            'no',
            'powder',
            'sprinkler'
          ]
        }],
        LiftTypes: [{
          LiftTypeSchema: {
            Type: [
              'cargo',
              'escalator',
              'lift',
              'passenger',
              'telpher',
              'travelator'
            ],
            AdditionalType: '',
            Count: 0
          }
        }],
        StatusType: ['operational', 'project', 'underConstruction'],
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Type: ['owned', 'rent ']
      },
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        Deposit: 0,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    commercialLandRent: {
      Category: 'commercialLandRent',
      Layout: 'cabinet',
      AvailableFrom: '',
      TaxNumber: 0,
      IsInHiddenBase: false,
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Status: [
          'forAgriculturalPurposes',
          'industryTransportCommunications',
          'settlements'
        ],
        PossibleToChangeStatus: false
      },
      PermittedUseType: [
        'agricultural',
        'businessManagement',
        'commonUseArea',
        'highriseBuildings',
        'hotelAmenities',
        'individualHousingConstruction',
        'industry',
        'leisure',
        'lowriseHousing',
        'publicUseOfCapitalConstruction',
        'serviceVehicles',
        'shoppingCenters',
        'warehouses'
      ],
      PossibleToChangePermitedUseType: false,
      HasEncumbrances: false,
      Electricity: {
        LocationType: ['border', 'location', 'no'],
        PossibleToConnect: false,
        Power: 0
      },
      Gas: {
        LocationType: ['border', 'location', 'no'],
        PossibleToConnect: false,
        Capacity: 0,
        PressureType: ['high', 'low', 'middle']
      },
      Drainage: {
        LocationType: ['border', 'location', 'no'],
        PossibleToConnect: false,
        Capacity: 0,
        Type: ['autonomous', 'central']
      },
      Water: {
        LocationType: ['border', 'location', 'no'],
        PossibleToConnect: false,
        Capacity: 0,
        Type: ['autonomous', 'central', 'pumpingStation', 'waterIntakeFacility', 'waterTower']
      },
      DrivewayType: ['asphalt', 'ground', 'no '],
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    officeRent: {
      Category: 'officeRent',
      TotalArea: 0,
      MinArea: 0,
      FloorNumber: 0,
      AreaParts: [],
      ConditionType: 'finishing',
      IsOccupied: false,
      Layout: 'cabinet',
      FurniturePresence: 'no',
      AvailableFrom: '',
      IsLegalAddressProvided: false,
      WaterPipesCount: 0,
      TaxNumber: 0,
      IsInHiddenBase: false,
      BusinessShoppingCenter: {
        id: 0
      },
      Building: {
        Name: '',
        FloorsCount: 0,
        BuildYear: 0,
        MaterialType: [
          'aerocreteBlock',
          'block',
          'boards',
          'brick',
          'foamConcreteBlock',
          'gasSilicateBlock',
          'monolith',
          'monolithBrick',
          'old',
          'panel',
          'stalin',
          'wireframe',
          'wood'
        ],
        TotalArea: 0,
        HeatingType: ['autonomous', 'central', 'no'],
        CeilingHeight: 0,
        Parking: {},
        Type: [
          'administrativeBuilding',
          'businessCenter',
          'businessCenter2',
          'businessHouse',
          'businessPark',
          'businessQuarter',
          'businessQuarter2',
          'free',
          'industrialComplex',
          'industrialPark',
          'industrialSite',
          'industrialWarehouseComplex',
          'logisticsCenter',
          'logisticsComplex',
          'logisticsPark',
          'mansion',
          'manufactureBuilding',
          'manufacturingFacility',
          'modular',
          'multifunctionalComplex',
          'officeAndHotelComplex',
          'officeAndResidentialComplex',
          'officeAndWarehouse',
          'officeAndWarehouseComplex',
          'officeBuilding',
          'officeCenter',
          'officeComplex',
          'officeIndustrialComplex',
          'officeQuarter',
          'old',
          'other',
          'outlet',
          'propertyComplex',
          'residentialComplex',
          'residentialHouse',
          'shoppingAndBusinessComplex',
          'shoppingAndCommunityCenter',
          'shoppingAndEntertainmentCenter',
          'shoppingAndWarehouseComplex',
          'shoppingCenter',
          'shoppingComplex',
          'specializedShoppingCenter',
          'standaloneBuilding',
          'technopark',
          'tradeAndExhibitionComplex',
          'tradingHouse',
          'tradingOfficeComplex',
          'warehouse',
          'warehouseComplex'
        ],
        ClassType: ['a', 'aPlus', 'b', 'bMinus', 'bPlus', 'c'],
        Developer: '',
        ManagementCompany: '',
        VentilationType: ['forced', 'natural', 'no'],
        ConditioningType: ['central', 'local', 'no'],
        ExtinguishingSystemType: [
          'alarm',
          'gas',
          'hydrant',
          'no',
          'powder',
          'sprinkler'
        ],
        ExtinguishingSystemTypes: [{
          ExtinguishingSystemTypeEnum: [
            'alarm',
            'gas',
            'hydrant',
            'no',
            'powder',
            'sprinkler'
          ]
        }],
        StatusType: ['operational', 'project', 'underConstruction'],
        AccessType: 'free',
        Infrastructure: {
          HasCarWash: false,
          HasBuffet: false,
          HasCarService: false,
          HasCanteen: false,
          HasCentralReception: false,
          HasHotel: false,
          HasAtm: false,
          HasExhibitionAndWarehouseComplex: false,
          HasPharmacy: false,
          HasBankDepartment: false,
          HasCinema: false,
          HasCafe: false,
          HasMedicalCenter: false,
          HasBeautyShop: false,
          HasStudio: false,
          HasNotaryOffice: false,
          HasPool: false,
          HasClothesStudio: false,
          HasWarehouse: false,
          HasPark: false,
          HasRestaurant: false,
          HasFitnessCentre: false,
          HasSupermarket: false,
          HasMinimarket: false,
          HasShoppingArea: false,
          HasConferenceRoom: false
        }
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Type: ['owned', 'rent ']
      },
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }

    },
    freeAppointmentObjectRent: {
      Category: 'freeAppointmentObjectRent',
      TotalArea: 0,
      MinArea: 0,
      FloorNumber: 0,
      ConditionType: 'finishing',
      IsOccupied: false,
      Specialty: {
        Types: {
          String: ''
        },
        AdditionalTypes: {
          String: ''
        }
      },
      Layout: 'cabinet',
      InputType: [
        'commonFromStreet',
        'commonFromYard',
        'separateFromStreet',
        'separateFromYard'
      ],
      AvailableFrom: '',
      HasShopWindows: false,
      IsLegalAddressProvided: false,
      WaterPipesCount: 0,
      TaxNumber: 0,
      IsInHiddenBase: false,
      BusinessShoppingCenter: {
        id: 0
      },
      Building: {
        Name: '',
        FloorsCount: 0,
        TotalArea: 0,
        HeatingType: ['autonomous', 'central', 'no'],
        Type: [
          'administrativeBuilding',
          'businessCenter',
          'businessCenter2',
          'businessHouse',
          'businessPark',
          'businessQuarter',
          'businessQuarter2',
          'free',
          'industrialComplex',
          'industrialPark',
          'industrialSite',
          'industrialWarehouseComplex',
          'logisticsCenter',
          'logisticsComplex',
          'logisticsPark',
          'mansion',
          'manufactureBuilding',
          'manufacturingFacility',
          'modular',
          'multifunctionalComplex',
          'officeAndHotelComplex',
          'officeAndResidentialComplex',
          'officeAndWarehouse',
          'officeAndWarehouseComplex',
          'officeBuilding',
          'officeCenter',
          'officeComplex',
          'officeIndustrialComplex',
          'officeQuarter',
          'old',
          'other',
          'outlet',
          'propertyComplex',
          'residentialComplex',
          'residentialHouse',
          'shoppingAndBusinessComplex',
          'shoppingAndCommunityCenter',
          'shoppingAndEntertainmentCenter',
          'shoppingAndWarehouseComplex',
          'shoppingCenter',
          'shoppingComplex',
          'specializedShoppingCenter',
          'standaloneBuilding',
          'technopark',
          'tradeAndExhibitionComplex',
          'tradingHouse',
          'tradingOfficeComplex',
          'warehouse',
          'warehouseComplex'
        ],
        Developer: '',
        ManagementCompany: '',
        VentilationType: ['forced', 'natural', 'no'],
        ConditioningType: ['central', 'local', 'no'],
        ExtinguishingSystemType: [
          'alarm',
          'gas',
          'hydrant',
          'no',
          'powder',
          'sprinkler '
        ],
        ExtinguishingSystemTypes: [{
          ExtinguishingSystemTypeEnum: [
            'alarm',
            'gas',
            'hydrant',
            'no',
            'powder',
            'sprinkler '
          ]
        }],
        StatusType: ['operational', 'project', 'underConstruction']
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Type: ['owned', 'rent ']
      },
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }

    },
    industryRent: {
      Category: 'industryRent',
      TotalArea: 0,
      MinArea: 0,
      FloorNumber: 0,
      ConditionType: 'typical',
      Layout: 'cabinet',
      AvailableFrom: 0,
      FloorMaterialTypeType: [
        'asphalt',
        'concrete',
        'laminate',
        'linoleum',
        'polymeric',
        'reinforcedConcrete',
        'selfLeveling',
        'tile',
        'wood'
      ],
      IsLegalAddressProvided: false,
      WaterPipesCount: 0,
      TaxNumber: '',
      IsInHiddenBase: false,
      BusinessShoppingCenter: {
        id: 0
      },
      Building: {
        Name: '',
        FloorsCount: 0,
        BuildYear: 0,
        TotalArea: 0,
        HeatingType: ['autonomous', 'central', 'no'],
        CeilingHeight: 0,
        Parking: {},
        Type: [
          'administrativeBuilding',
          'businessCenter',
          'businessCenter2',
          'businessHouse',
          'businessPark',
          'businessQuarter',
          'businessQuarter2',
          'free',
          'industrialComplex',
          'industrialPark',
          'industrialSite',
          'industrialWarehouseComplex',
          'logisticsCenter',
          'logisticsComplex',
          'logisticsPark',
          'mansion',
          'manufactureBuilding',
          'manufacturingFacility',
          'modular',
          'multifunctionalComplex',
          'officeAndHotelComplex',
          'officeAndResidentialComplex',
          'officeAndWarehouse',
          'officeAndWarehouseComplex',
          'officeBuilding',
          'officeCenter',
          'officeComplex',
          'officeIndustrialComplex',
          'officeQuarter',
          'old',
          'other',
          'outlet',
          'propertyComplex',
          'residentialComplex',
          'residentialHouse',
          'shoppingAndBusinessComplex',
          'shoppingAndCommunityCenter',
          'shoppingAndEntertainmentCenter',
          'shoppingAndWarehouseComplex',
          'shoppingCenter',
          'shoppingComplex',
          'specializedShoppingCenter',
          'standaloneBuilding',
          'technopark',
          'tradeAndExhibitionComplex',
          'tradingHouse',
          'tradingOfficeComplex',
          'warehouse',
          'warehouseComplex'
        ],
        ClassType: ['a', 'aPlus', 'b', 'bMinus', 'bPlus', 'c'],
        Developer: '',
        ManagementCompany: '',
        VentilationType: ['forced', 'natural', 'no'],
        ConditioningType: ['central', 'local', 'no'],
        ExtinguishingSystemType: [
          'alarm',
          'gas',
          'hydrant',
          'no',
          'powder',
          'sprinkler'
        ],
        ExtinguishingSystemTypes: [{
          ExtinguishingSystemTypeEnum: [
            'alarm',
            'gas',
            'hydrant',
            'no',
            'powder',
            'sprinkler'
          ]
        }],
        LiftTypes: [{
          LiftTypeSchema: {
            Type: ['cargo', 'passenger', 'telpher'],
            AdditionalType: '',
            Count: 0,
            LoadCapacity: 0
          }
        }],
        StatusType: ['operational', 'project', 'underConstruction'],
        CranageTypes: [{
          CranageTypeSchema: {
            Type: ['beam', 'gantry', 'overhead', 'railway'],
            LoadCapacity: 0,
            Count: 0
          }
        }],
        GatesType: ['atZero', 'dockType', 'onRamp'],
        ColumnGrid: '',
        Infrastructure: {
          HasBuffet: false,
          HasCanteen: false,
          HasCentralReception: false,
          HasHotel: false,
          HasOfficeSpace: false
        },

      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Type: ['owned', 'rent ']
      },
      HasSafeCustody: false,
      IsCustoms: false,
      HasTransportServices: false,
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    warehouseRent: {
      Category: 'warehouseRent',
      TotalArea: 0,
      MinArea: 0,
      FloorNumber: 0,
      ConditionType: 'typical',
      Layout: 'cabinet',
      AvailableFrom: 0,
      FloorMaterialTypeType: [
        'asphalt',
        'concrete',
        'laminate',
        'linoleum',
        'polymeric',
        'reinforcedConcrete',
        'selfLeveling',
        'tile',
        'wood'
      ],
      IsLegalAddressProvided: false,
      WaterPipesCount: 0,
      TaxNumber: '',
      IsInHiddenBase: false,
      BusinessShoppingCenter: {
        id: 0
      },
      Building: {
        Name: '',
        FloorsCount: 0,
        BuildYear: 0,
        TotalArea: 0,
        HeatingType: ['autonomous', 'central', 'no'],
        CeilingHeight: 0,
        Parking: {},
        Type: [
          'administrativeBuilding',
          'businessCenter',
          'businessCenter2',
          'businessHouse',
          'businessPark',
          'businessQuarter',
          'businessQuarter2',
          'free',
          'industrialComplex',
          'industrialPark',
          'industrialSite',
          'industrialWarehouseComplex',
          'logisticsCenter',
          'logisticsComplex',
          'logisticsPark',
          'mansion',
          'manufactureBuilding',
          'manufacturingFacility',
          'modular',
          'multifunctionalComplex',
          'officeAndHotelComplex',
          'officeAndResidentialComplex',
          'officeAndWarehouse',
          'officeAndWarehouseComplex',
          'officeBuilding',
          'officeCenter',
          'officeComplex',
          'officeIndustrialComplex',
          'officeQuarter',
          'old',
          'other',
          'outlet',
          'propertyComplex',
          'residentialComplex',
          'residentialHouse',
          'shoppingAndBusinessComplex',
          'shoppingAndCommunityCenter',
          'shoppingAndEntertainmentCenter',
          'shoppingAndWarehouseComplex',
          'shoppingCenter',
          'shoppingComplex',
          'specializedShoppingCenter',
          'standaloneBuilding',
          'technopark',
          'tradeAndExhibitionComplex',
          'tradingHouse',
          'tradingOfficeComplex',
          'warehouse',
          'warehouseComplex'
        ],
        ClassType: ['a', 'b', 'c', 'd'],
        Developer: '',
        ManagementCompany: '',
        VentilationType: ['forced', 'natural', 'no'],
        ConditioningType: ['central', 'local', 'no'],
        ExtinguishingSystemType: [
          'alarm',
          'gas',
          'hydrant',
          'no',
          'powder',
          'sprinkler'
        ],
        ExtinguishingSystemTypes: [{
          ExtinguishingSystemTypeEnum: [
            'alarm',
            'gas',
            'hydrant',
            'no',
            'powder',
            'sprinkler'
          ]
        }],
        LiftTypes: [{
          LiftTypeSchema: {
            Type: ['cargo', 'passenger', 'telpher'],
            AdditionalType: '',
            Count: 0,
            LoadCapacity: 0
          }
        }],
        StatusType: ['operational', 'project', 'underConstruction'],
        CranageTypes: [{
          CranageTypeSchema: {
            Type: ['beam', 'gantry', 'overhead', 'railway'],
            LoadCapacity: 0,
            Count: 0
          }
        }],
        GatesType: ['atZero', 'dockType', 'onRamp'],
        ColumnGrid: '',
        Infrastructure: {
          HasBuffet: false,
          HasCanteen: false,
          HasCentralReception: false,
          HasHotel: false,
          HasOfficeSpace: false
        },

      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Type: ['owned', 'rent ']
      },
      HasSafeCustody: false,
      IsCustoms: false,
      HasTransportServices: false,
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    },
    shoppingAreaRent: {
      Category: 'shoppingAreaRent',
      PlacementType: ['shoppingMall', 'streetRetail'],
      TotalArea: 0,
      MinArea: 0,
      FloorNumber: 0,
      ConditionType: 'finishing',
      Specialty: [{
        Types: {
          String: ''
        },
        AdditionalTypes: {
          String: ''
        }
      }],
      Layout: 'cabinet',
      HasInternet: false,
      HasFurniture: false,
      InputType: [
        'commonFromStreet',
        'commonFromYard',
        'separateFromStreet',
        'separateFromYard'
      ],
      AvailableFrom: 0,
      HasShopWindows: false,
      IsLegalAddressProvided: false,
      WaterPipesCount: 0,
      TaxNumber: 0,
      IsInHiddenBase: false,
      BusinessShoppingCenter: {
        id: 0
      },
      Building: {
        Name: '',
        FloorsCount: 0,
        TotalArea: 0,
        HeatingType: [
          'autonomous',
          'autonomousGas',
          'boiler',
          'central',
          'centralCoal',
          'centralGas',
          'diesel',
          'electric',
          'fireplace',
          'no',
          'other',
          'solidFuelBoiler',
          'stove'
        ],
        CeilingHeight: 0,
        Type: [
          'administrativeBuilding',
          'businessCenter',
          'businessCenter2',
          'businessHouse',
          'businessPark',
          'businessQuarter',
          'businessQuarter2',
          'free',
          'industrialComplex',
          'industrialPark',
          'industrialSite',
          'industrialWarehouseComplex',
          'logisticsCenter',
          'logisticsComplex',
          'logisticsPark',
          'mansion',
          'manufactureBuilding',
          'manufacturingFacility',
          'modular',
          'multifunctionalComplex',
          'officeAndHotelComplex',
          'officeAndResidentialComplex',
          'officeAndWarehouse',
          'officeAndWarehouseComplex',
          'officeBuilding',
          'officeCenter',
          'officeComplex',
          'officeIndustrialComplex',
          'officeQuarter',
          'old',
          'other',
          'outlet',
          'propertyComplex',
          'residentialComplex',
          'residentialHouse',
          'shoppingAndBusinessComplex',
          'shoppingAndCommunityCenter',
          'shoppingAndEntertainmentCenter',
          'shoppingAndWarehouseComplex',
          'shoppingCenter',
          'shoppingComplex',
          'specializedShoppingCenter',
          'standaloneBuilding',
          'technopark',
          'tradeAndExhibitionComplex',
          'tradingHouse',
          'tradingOfficeComplex',
          'warehouse',
          'warehouseComplex'
        ],
        HouseLineType: [
          'first', 'other', 'second'
        ],
        ClassType: ['a', 'aPlus', 'b', 'bMinus', 'bPlus', 'c'],
        Developer: '',
        ManagementCompany: '',
        VentilationType: ['forced', 'natural', 'no'],
        ConditioningType: ['central', 'local', 'no'],
        ExtinguishingSystemType: [
          'alarm',
          'gas',
          'hydrant',
          'no',
          'powder',
          'sprinkler'
        ],
        ExtinguishingSystemTypes: [{
          ExtinguishingSystemTypeEnum: [
            'alarm',
            'gas',
            'hydrant',
            'no',
            'powder',
            'sprinkler'
          ]
        }],
        LiftTypes: [{
          LiftTypeSchema: {
            Type: ['escalator', 'lift', 'travelator'],
            Count: 0,
          }
        }],
        StatusType: ['operational', 'project', 'underConstruction'],
        CranageTypes: [{
          CranageTypeSchema: {
            Type: ['beam', 'gantry', 'overhead', 'railway'],
            LoadCapacity: 0,
            Count: 0
          }
        }],
        Infrastructure: {
          HasCarWash: false,
          HasBuffet: false,
          HasCarService: false,
          HasCanteen: false,
          HasCentralReception: false,
          HasHotel: false,
          HasAtm: false,
          HasFoodCourt: false,
          HasPharmacy: false,
          HasBankDepartment: false,
          HasSlotMachines: false,
          HasCinema: false,
          HasAquapark: false,
          HasBabySitting: false,
          HasRink: false,
          HasCafe: false,
          HasBowling: false,
          HasMedicalCenter: false,
          HasBuffet: false,
          HasBeautyShop: false,
          HasStudio: false,
          HasPool: false,
          HasClothesStudio: false,
          HasWarehouse: false,
          HasRestaurant: false,
          HasFitnessCentre: false,
          HasSupermarket: false,
          HasMinimarket: false,
          HasGameRoom: false
        },
        WorkingDaysType: ['everyday', 'weekdays', 'weekends'],
        Tenants: '',
        OpeningHours: {
          From: '',
          To: '',
          Type: ['roundTheClock', 'specific']
        }
      },
      Land: {
        Area: 0,
        AreaUnitType: ['hectare', 'sotka'],
        Type: ['owned', 'rent ']
      },
      BargainTerms: {
        Price: 0,
        PriceType: ['all', 'hectare', 'sotka', 'squareMeter'],
        Currency: ['eur', 'rur', 'usd'],
        PaymentPeriod: ['annual', 'monthly'],
        VatType: ['included', 'notIncluded', 'usn'],
        LeaseType: ['direct', 'sublease'],
        IncludedOptions: [{
          IncludedOptionsEnum: ['operationalCosts', 'utilityCharges']
        }],
        LeaseTermType: ['fewMonths', 'longTerm'],
        MinLeaseTerm: 0,
        PrepayMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        HasGracePeriod: false,
        ClientFee: 0,
        SecurityDeposit: 0,
        AgentFee: 0,
        AgentBonus: {
          Value: 0,
          PaymentType: ['fixed', 'percent'],
          Currency: ['eur', 'rur', 'usd'],
        }
      }
    }
  },
  sale: {

  }
}

const connection = mysql.createConnection({
  host: db.config.HOST,
  user: db.config.USER,
  password: db.config.PASSWORD,
  database: db.config.DB,
  debug: false
});

function findOwner(inOb, func){
  inOb.connectionf = mysql.createConnection({
    host: db.config.HOST,
    user: db.config.USER,
    password: db.config.PASSWORD,
    database: db.config.DB,
    debug: false
  });

  let sql = "select * from `fields` WHERE `PUID` = '" + inOb.ob.UID + "' AND TIP ='linc21'";
  inOb.connectionf.query(sql, [], (err, result)=> {
    if(result.length == 0){
      inOb.owners = []
      func(inOb)
    }else{
      const uids = []
      inOb.links = {}
      result.forEach(item=>{
        if(!inOb.links[item.VAL]){
          inOb.links[item.VAL] = {}
        }
        if(item.VAL !=''){
          // if(!inOb.links[item.PUID][item.VAL]) inOb.links[item.PUID][item.VAL] = {}
          if(uids.indexOf(item.VAL)=== -1){
            uids.push(item.VAL)
          }

        }
      })
      if(uids.length > 0){
        sql = "select * from `fields` WHERE `UID` in ('" + uids.join("','") + "') AND TIP='soBst21'";
        inOb.connectionf.query(sql, [], (err, result)=> {
          inOb.owners = {}
          result.forEach(item=>{
            if(item.UID && item.UID!==''){
              if(!inOb.owners[item.UID])inOb.owners[item.UID] = { fields: {}, contacts:[] }
              item.TITLE = item.TITLE.trim();
              inOb.owners[item.UID].fields[item.TITLE] = item.VAL;
            }
          })

          // получаем всех собственников принадл. полученым owners
          if(Object.keys(inOb.owners).length>0){
            sql = "select * from `fields` WHERE `PUID` in ('" + Object.keys(inOb.owners).join("','") + "')";
            inOb.connectionf.query(sql, [], (err, result)=> {
              const uids = []
              result.forEach(item=>{
                if(item.VAL!==''){
                  if(uids.indexOf(item.VAL)==-1){
                    if(!inOb.links[item.PUID][item.VAL]){
                      inOb.links[item.PUID][item.VAL] = {}
                    }
                    uids.push(item.VAL)
                  }
                }
              })
              sql = "select * from `fields` WHERE `UID` in ('" + uids.join("','") + "')";
              inOb.connectionf.query(sql, [], (err, result)=> {
                const contacts = {}
                result.forEach(item=>{
                  if(!contacts[item.UID]){
                    contacts[item.UID] = {
                      phone: {},
                      website: {},
                      email: {},
                      messenger: {}
                    }
                  }
                  item.TITLE = item.TITLE.trim()
                  switch (item.TITLE) {
                    case "PHONE":
                    case "PHONEREM":
                      if (!contacts[item.UID].phone[item.PUID]) {
                        contacts[item.UID].phone[item.PUID] = {}
                      }
                      contacts[item.UID].phone[item.PUID][item.TITLE] = item.VAL;
                      break;
                    case "SITE":
                    case "SITEREM":
                      if (!contacts[item.UID].website[item.PUID]) {
                        contacts[item.UID].website[item.PUID] = {}
                      }
                      contacts[item.UID].website[item.PUID][item.TITLE] = item.VAL;
                      break;
                    case "EMAIL":
                    case "EMAILREM":
                      if (!contacts[item.UID].email[item.PUID]) {
                        contacts[item.UID].email[item.PUID] = {}
                      }
                      contacts[item.UID].email[item.PUID][item.TITLE] = item.VAL;
                      break;
                    case "MESSENGER":
                    case "MESSENGERREM":
                      if (!contacts[item.UID].messenger[item.PUID]) {
                        contacts[item.UID].messenger[item.PUID] = {}
                      }
                      contacts[item.UID].messenger[item.PUID][item.TITLE] = item.VAL;
                      break;
                    default:
                      contacts[item.UID][item.TITLE] = item.VAL;
                  }
                })
                for (let keyUID in contacts) {
                  if (Object.keys(contacts[keyUID].phone).length > 0) {
                    contacts[keyUID]['PHONE'] = [];
                    Object.values(contacts[keyUID].phone).forEach(valM => {
                      contacts[keyUID]['PHONE'].push({
                        VAL: valM.PHONE,
                        REM: valM.PHONEREM,
                      })
                    })
                  }else {
                    contacts[keyUID]['PHONE'] = [];
                  }
                  if (Object.keys(contacts[keyUID].website).length > 0) {
                    contacts[keyUID]['WEBSITE'] = [];
                    Object.values(contacts[keyUID].website).forEach(valM => {
                      contacts[keyUID]['WEBSITE'].push({
                        VAL: valM.WEBSITE,
                        REM: valM.WEBSITEREM,
                      })
                    })
                  }else{
                    contacts[keyUID]['WEBSITE'] = [];
                  }
                  if (Object.keys(contacts[keyUID].email).length > 0) {
                    contacts[keyUID]['EMAIL'] = [];
                    Object.values(contacts[keyUID].email).forEach(valM => {
                      contacts[keyUID]['EMAIL'].push({
                        VAL: valM.EMAIL,
                        REM: valM.EMAILREM,
                      })
                    })
                  }else {
                    contacts[keyUID]['EMAIL'] = [];
                  }
                  if (Object.keys(contacts[keyUID].messenger).length > 0) {
                    contacts[keyUID]['MESSENGER'] = [];
                    Object.values(contacts[keyUID].messenger).forEach(valM => {
                      contacts[keyUID]['MESSENGER'].push({
                        VAL: valM.MESSENGER,
                        REM: valM.MESSENGERREM,
                      })
                    })
                  }else{
                    contacts[keyUID]['MESSENGER'] = [];
                  }
                  delete contacts[keyUID].messenger
                  delete contacts[keyUID].email
                  delete contacts[keyUID].phone
                  delete contacts[keyUID].website
                }
                for(let key in inOb.owners){
                  db.rent21owner.findOne({
                    where: {
                      uid: key,
                    },
                  }).then(items => {
                    if (! items) {
                      const sobst = []
                      Object.keys(inOb.links[key]).forEach(item=>{
                        sobst.push(contacts[item])
                      })
                      if(inOb.owners[key].fields){
                        db.rent21owner.create({
                          uid: key,
                          contacts: sobst,
                          fields: inOb.owners[key].fields
                        }).then(item => {
                          console.log('создание итема soBst21',key)
                          func(inOb)
                        })
                      }else{
                        func(inOb)
                      }
                    }else{
                      func(inOb)
                    }
                  })
                }
              })
            })
          }else{
            func(inOb)
          }
        })
      }else{
        cosole.error('нет собственника', inOb.ob.UID)
        inOb.owners = []
        func(inOb)
      }
    }
//    console.error(result)
//    const uids1 = []
    //result.forEach(item=>{
      //if(item.VAL !='' && uids1.indexOf(item.VAL)=== -1){
      //  uids1.push(item.VAL)
      //}
    //})
    //if(uids.length > 0){
      /*
      sql = "select * from `fields` WHERE `UID` in ('" + uids.join("','") + "') AND TIP='soBst21'";
      connection.query(sql, [], function(err, result) {
        console.error(result.length)
        inOb.owners = []
        func(inOb)
        return
      })

       */

    //}


  })
}

function findAddress(inUID, func) {
  db.rent21address.findAll({
    where: {
      uid: inUID,
    },
  }).then(items => {
    if (items.length === 0) {
      let sql = `select * from fields where UID = '` + inUID + `'`;
      connection.query(sql, [], function(err, result) {
        const ob = {}
        const metro = []
        result.forEach(item => {
          item.TITLE = item.TITLE.trim();
          switch (item.TITLE) {
            case "METRO":
            case "GLMETRO":
            case "UD":
            case "UDTIP":
              if (!metro[item.PUID]) {
                metro[item.PUID] = {}
              }
              metro[item.PUID][item.TITLE] = item.VAL;
              break;
            default:
              ob[item.TITLE] = item.VAL;
          }
        })

        if (Object.keys(metro).length > 0) {
          ob['METRO'] = [];
          Object.values(metro).forEach(valM => {
            ob['METRO'].push({
              NAME: valM.METRO,
              GLMETRO: valM.GLMETRO,
              UD: valM.UD,
              UDTIP: valM.UDTIP,
            })
          })
        }



        if (ob.UID !== '' && ob.UID !== null) {
          db.rent21address.create({
            uid: ob.UID,
            metro: ob.METRO,
            fields: ob
          }).then(() => {
            // console.log('findAddress')
            func();
          })
        }
        else {
          // console.log('findAddress')
          func();
        }
      })
    }
    else {
      // console.log('findAddress')
      func();
    }
  })
}

function findBuild(inUID, func) {
  db.rent21building.findAll({
    where: {
      uid: inUID,
    },
  }).then(items => {
    if (items.length === 0) {
      // нет такого дома
      let sql = `select * from fields where UID = '` + inUID + `'`;
      connection.query(sql, [], function(err, result) {
        if (result) {
          const ob = {}
          result.forEach(item => {
            item.TITLE = item.TITLE.trim();
            ob[item.TITLE] = item.VAL
          })
          // console.log('=======1=======')
          // теперь смотрим какой адрес
          sql = "select * from `fields` WHERE `VAL` = '" + inUID + "' AND TIP ='linc21'";
          connection.query(sql, [], function(err, result) {
            if (result) {
              if(result.length > 0 && result[0].PUID){
                const addrUid = result[0].PUID
                db.rent21building.update({
                  uid: ob.UID,
                  address: addrUid,
                  fields: ob
                }, {
                  where: {
                    uid: ob.UID,
                  },

                }).then(items => {
                  if (items[0] === 0) {
                    // пытаемся найти собственников
                    findOwner({ob: ob, address:addrUid}, (item)=>{
                      db.rent21building.create({
                        uid: item.ob.UID,
                        address: item.address,
                        fields: item.ob
                      }).then(items => {
                        item.connectionf.end()
                        findAddress(addrUid, () => {
                          // console.log('=======4=======')
                          func();
                        })
                      })
                    })
                  }
                  else {
                    findAddress(addrUid, () => {
                      // console.log('=======3=======')
                      func();
                    })
                  }
                })

              }
              else {
                func();
              }
            }
          })
        }
      });
    }
    else {
      // console.log('=======2=======')
      func();
    }
  })
}


function getExports(uids, fun) {
  const ob = {}
  const sql = "select * from `export` WHERE `UID` in ('" + uids.join("','") + "')";
  connection.query(sql, [], function(err, result) {
    //console.log(result)
    result.forEach(item => {
      if (!ob[item.UID]) ob[item.UID] = {}
      if (!ob[item.UID][item.TIP]) ob[item.UID][item.TIP] = {}
      switch (item.TITLE) {
        case "PHOTO":
          if (!ob[item.UID][item.TIP].PHOTO) ob[item.UID][item.TIP].PHOTO = [];
          ob[item.UID][item.TIP].PHOTO.push({
            uid: item.PUID,
            title: item.VAL
          })
          break;
        default:
          ob[item.UID][item.TIP][item.TITLE] = item.VAL;
      }
    })
    fun(ob)
  })
}

function findObfromBuild(inUID, func) {
  let sql = "select * from `fields` WHERE `PUID` = '" + inUID + "' AND TIP ='linc21'";
  connection.query(sql, [], function(err, result) {
    const uids = []
    result.forEach(item => {
      uids.push(item.VAL)
    })
    sql = "select * from `fields` WHERE `UID` in ('" + uids.join("','") + "')";
    getExports(uids, (exports) => {
      connection.query(sql, [], function(err, result) {
        const outOb = {};
        // console.log(exports)
        result.forEach(item => {
          if (!outOb[item.TIP]) outOb[item.TIP] = {};
          if (!outOb[item.TIP][item.UID]) outOb[item.TIP][item.UID] = {};
          switch (item.TIP) {
            case 'ob21':
              if (item.TITLE === 'MPL' && item.VAL != '') {
                try {
                  outOb[item.TIP][item.UID][item.TITLE] = JSON.parse(item.VAL)
                }catch{
                  outOb[item.TIP][item.UID][item.TITLE] = item.VAL;
                }
              }
              else {
                outOb[item.TIP][item.UID][item.TITLE] = item.VAL;
              }
              break;
            default:
              outOb[item.TIP][item.UID][item.TITLE] = item.VAL;

          }
        })
        if (outOb.ob21) {
          const ownersUID = []
          Object.values(outOb.ob21).forEach(ob => {
            var category = ''
            if (ob.OPP === '') {
              ob.OPP = 'Аренда'
            }
            let cian = null
            if (ob.OPP === 'Аренда') {
              if (ob.TIP === 'Офис') {
                category = 'officeRent'
              }
              if (ob.TIP === 'Помещение свободного назначения') {
                category = 'freeAppointmentObjectRent'
              }
              if (ob.TIP === 'Здание') {
                category = 'buildingRent'
              }
              if (ob.TIP === 'Квартира') {
                category = 'flatRent'
              }
              if (ob.TIP === 'Торговая площадь') {
                category = 'shoppingAreaRent'
              }
              if (ob.TIP === 'Склад') {
                category = 'warehouseRent'
              }
              if (ob.TIP === 'Производство') {
                category = 'industryRent'
              }
              if (ob.TIP === 'Гараж') {
                category = 'garageRent'
              }
              if (ob.TIP === 'Дом/дача') {
                category = 'houseRent'
              }
              cian = cianItems.rent[category]
            }
            if (ob.OPP === 'Продажа') {
              if (ob.TIP === 'Офис') {
                category = 'officeSale'
              }
              if (ob.TIP === 'Помещение свободного назначения') {
                category = 'freeAppointmentObjectSale'
              }
              if (ob.TIP === 'Здание') {
                category = 'buildingSale'
              }
              if (ob.TIP === 'Квартира') {
                category = 'flatSale'
              }
              if (ob.TIP === 'Торговая площадь') {
                category = 'shoppingAreaSale'
              }
              if (ob.TIP === 'Склад') {
                category = 'warehouseSale'
              }
              if (ob.TIP === 'Квартира новостройка') {
                category = 'newBuildingFlatSale'
              }
              if (ob.TIP === 'Готовый бизнес') {
                category = 'businessSale'
              }
              if (ob.TIP === 'Производство') {
                category = 'industrySale'
              }
              if (ob.TIP === 'Гараж') {
                category = 'garageSale'
              }
              if (ob.TIP === 'Дом/дача') {
                category = 'houseSale'
              }
            }
            if (ob.Category && ob.Category !== '') {
              category = ob.Category
            }
            // console.log(exports)
            ownersUID.push(ob.SOBST)
            db.rent21ob.create({
              uid: ob.UID,
              build: inUID,
              fields: ob,
              owner: ob.SOBST,
              category: category,
              cian: cian,
              exports: exports[ob.UID]
            }).then(() => {
              // console.log('добавление итема ob21 в здание')
            })

          })
          // mergeOwner(ownersUID, () => {})
        }
        else{
          console.log('Нет обьектов', inUID)
        }
        func(outOb);

      });

    })

  });

}

function mergeAll(i, result, func){
  //console.log(i)
  findBuild(result[i].UID,()=>{
    findObfromBuild(result[i].UID,()=>{
      i--
      db.progress.current--
      if(i!==0){
        mergeAll(i, result,func)
      }else{
        db.progress.status = ''
        func()
      }
    })
  })
}

db.rent21ob.sync({ force: true }).then(item =>{
  db.rent21owner.sync({ force: true }).then(item =>{
    db.rent21address.sync({ force: true }).then(item =>{
      db.rent21building.sync({ force: true }).then(item =>{
        if(1==1){
          const connection = mysql.createConnection({
            host: db.config.HOST,
            user: db.config.USER,
            password: db.config.PASSWORD,
            database: db.config.DB,
            debug: false
          });
          // Выбираем все здания из базы mysql
          let sql = `SELECT * FROM fields WHERE TIP = 'buid21' `
          connection.query(sql, [], (err, result) => {
            result.forEach(item=>{
              if(!dbBuildings[item.UID]) dbBuildings[item.UID] = {}
              item.TITLE = item.TITLE.trim();
              dbBuildings[item.UID][item.TITLE] = item.VAL
            })
            console.log('length buildings',Object.keys(dbBuildings).length)
            //dbContacts
            sql = `SELECT * FROM fields WHERE TIP = 'koNt21' `
            connection.query(sql, [], (err, result) => {
              result.forEach(item=>{
                if(!dbContacts[item.UID]) dbContacts[item.UID] = {
                  phone: {},
                  website: {},
                  email: {},
                  messenger: {}
                }
                item.TITLE = item.TITLE.trim();
                switch (item.TITLE) {
                  case "PHONE":
                  case "PHONEREM":
                    if (!dbContacts[item.UID].phone[item.PUID]) {
                      dbContacts[item.UID].phone[item.PUID] = {}
                    }
                    dbContacts[item.UID].phone[item.PUID][item.TITLE] = item.VAL;
                    break;
                  case "SITE":
                  case "SITEREM":
                    if (!dbContacts[item.UID].website[item.PUID]) {
                      dbContacts[item.UID].website[item.PUID] = {}
                    }
                    dbContacts[item.UID].website[item.PUID][item.TITLE] = item.VAL;
                    break;
                  case "EMAIL":
                  case "EMAILREM":
                    if (!dbContacts[item.UID].email[item.PUID]) {
                      dbContacts[item.UID].email[item.PUID] = {}
                    }
                    dbContacts[item.UID].email[item.PUID][item.TITLE] = item.VAL;
                    break;
                  case "MESSENGER":
                  case "MESSENGERREM":
                    if (!dbContacts[item.UID].messenger[item.PUID]) {
                      dbContacts[item.UID].messenger[item.PUID] = {}
                    }
                    dbContacts[item.UID].messenger[item.PUID][item.TITLE] = item.VAL;
                    break;
                  default:
                    dbContacts[item.UID][item.TITLE] = item.VAL;
                }

              })
              for (let keyUID in dbContacts) {
                if (Object.keys(dbContacts[keyUID].phone).length > 0) {
                  dbContacts[keyUID]['PHONE'] = [];
                  Object.values(dbContacts[keyUID].phone).forEach(valM => {
                    dbContacts[keyUID]['PHONE'].push({
                      VAL: valM.PHONE,
                      REM: valM.PHONEREM,
                    })
                  })
                }else {
                  dbContacts[keyUID]['PHONE'] = [];
                }
                if (Object.keys(dbContacts[keyUID].website).length > 0) {
                  dbContacts[keyUID]['WEBSITE'] = [];
                  Object.values(dbContacts[keyUID].website).forEach(valM => {
                    dbContacts[keyUID]['WEBSITE'].push({
                      VAL: valM.WEBSITE,
                      REM: valM.WEBSITEREM,
                    })
                  })
                }else{
                  dbContacts[keyUID]['WEBSITE'] = [];
                }
                if (Object.keys(dbContacts[keyUID].email).length > 0) {
                  dbContacts[keyUID]['EMAIL'] = [];
                  Object.values(dbContacts[keyUID].email).forEach(valM => {
                    dbContacts[keyUID]['EMAIL'].push({
                      VAL: valM.EMAIL,
                      REM: valM.EMAILREM,
                    })
                  })
                }else {
                  dbContacts[keyUID]['EMAIL'] = [];
                }
                if (Object.keys(dbContacts[keyUID].messenger).length > 0) {
                  dbContacts[keyUID]['MESSENGER'] = [];
                  Object.values(dbContacts[keyUID].messenger).forEach(valM => {
                    dbContacts[keyUID]['MESSENGER'].push({
                      VAL: valM.MESSENGER,
                      REM: valM.MESSENGERREM,
                    })
                  })
                }else{
                  dbContacts[keyUID]['MESSENGER'] = [];
                }
                delete dbContacts[keyUID].messenger
                delete dbContacts[keyUID].email
                delete dbContacts[keyUID].phone
                delete dbContacts[keyUID].website
              }
              console.log('length Contacts',Object.keys(dbContacts).length)
              // dbOwners
              let sql = `SELECT * FROM fields WHERE TIP = 'soBst21' `
              connection.query(sql, [], (err, result) => {
                result.forEach(item => {
                  if (!dbOwners[item.UID]) dbOwners[item.UID] = {}
                  item.TITLE = item.TITLE.trim();
                  dbOwners[item.UID][item.TITLE] = item.VAL
                })
                console.log('length Owners', Object.keys(dbOwners).length)
                // dbAddress adRes21
                let sql = `SELECT * FROM fields WHERE TIP = 'adRes21' `
                connection.query(sql, [], (err, result) => {
                  result.forEach(item => {
                    if (!dbAddress[item.UID]) dbAddress[item.UID] = { metro: { }}
                    item.TITLE = item.TITLE.trim();
                    switch (item.TITLE) {
                      case "METRO":
                      case "GLMETRO":
                      case "UD":
                      case "UDTIP":
                        if (!dbAddress[item.UID].metro[item.PUID]) {
                          dbAddress[item.UID].metro[item.PUID] = {}
                        }
                        dbAddress[item.UID].metro[item.PUID][item.TITLE] = item.VAL;
                        break;
                      default:
                        dbAddress[item.UID][item.TITLE] = item.VAL;
                    }
                  })
                  for(let uid in dbAddress){
                    if (Object.keys(dbAddress[uid].metro).length > 0) {
                      dbAddress[uid]['METRO'] = [];
                      Object.values(dbAddress[uid].metro).forEach(valM => {
                        dbAddress[uid]['METRO'].push({
                          NAME: valM.METRO,
                          GLMETRO: valM.GLMETRO,
                          UD: valM.UD,
                          UDTIP: valM.UDTIP,
                        })
                      })
                    }
                    delete dbAddress[uid].metro
                    db.rent21address.create({
                      uid: uid,
                      metro: dbAddress[uid]['METRO'],
                      fields: dbAddress[uid]
                    })
                  }
                  console.log('length Address', Object.keys(dbAddress).length)

                  // dbLinks
                  sql = "select * from `fields` WHERE TIP ='linc21'";
                  connection.query(sql, [], (err, result) => {
                    result.forEach(item => {
                      if(!dbLinks[item.PUID]) dbLinks[item.PUID] = []
                      if(dbLinks[item.PUID].indexOf(item.VAL)===-1){
                        dbLinks[item.PUID].push(item.VAL)
                      }
                    })
                    console.log('length dbLinks', Object.keys(dbLinks).length)
                    for(let uid in dbAddress){
                      if(dbLinks[uid]){
                        const arrOwners = []
                        let building  = null
                        dbLinks[uid].forEach(children=>{
                          if(dbBuildings[children]){
                            building = dbBuildings[children]
                            if(dbLinks[children]){
                              dbLinks[children].forEach(uidOwner=>{
                                if(dbOwners[uidOwner])
                                  arrOwners.push(uidOwner)
                              })
                            }
                          }
                        })
                        if(building){
                          db.rent21building.create({
                            uid: building.UID,
                            address: uid,
                            fields: building,
                            owners: arrOwners
                          })
                        }
                      }
                    }
                    for(let uid in dbOwners){
                      const arrContacts = []
                      if(dbLinks[uid]){
                        dbLinks[uid].forEach(childrenUID=>{
                          if(dbContacts[childrenUID]){
                            arrContacts.push(dbContacts[childrenUID])
                          }
                        })
                        db.rent21owner.create({
                          uid: uid,
                          contacts: arrContacts,
                          fields: dbOwners[uid]
                        })
                      }
                    }
                    sql = `SELECT * FROM export`
                    connection.query(sql, [], function(err, result) {
                      //console.log(result)
                      result.forEach(item => {
                        if (!dbExport[item.UID]) dbExport[item.UID] = {}
                        if (!dbExport[item.UID][item.TIP]) dbExport[item.UID][item.TIP] = {}
                        switch (item.TITLE) {
                          case "PHOTO":
                            if (!dbExport[item.UID][item.TIP].PHOTO) dbExport[item.UID][item.TIP].PHOTO = [];
                            dbExport[item.UID][item.TIP].PHOTO.push({
                              uid: item.PUID,
                              title: item.VAL
                            })
                            break;
                          default:
                            dbExport[item.UID][item.TIP][item.TITLE] = item.VAL;
                        }
                      })
                      sql = `SELECT * FROM fields WHERE TIP = 'ob21' `
                      connection.query(sql, [], (err, result) => {
                        result.forEach(item=>{
                          if (!dbOb[item.UID]) dbOb[item.UID] = {}
                          item.TITLE = item.TITLE.trim();
                          if (item.TITLE === 'MPL' && item.VAL != '') {
                            try {
                              dbOb[item.UID][item.TITLE] = JSON.parse(item.VAL)
                            }catch{
                              dbOb[item.UID][item.TITLE] = item.VAL;
                            }
                          }
                          else {
                            dbOb[item.UID][item.TITLE] = item.VAL;
                          }
                        })

                        for(let uid in dbBuildings){
                          if(dbLinks[uid]){
                            dbLinks[uid].forEach(childrenUID=>{
                              if(dbOb[childrenUID]){
                                let category = ''
                                if (dbOb[childrenUID].OPP === '') {
                                  dbOb[childrenUID].OPP = 'Аренда'
                                }
                                let cian = {}
                                if (dbOb[childrenUID].OPP === 'Аренда') {
                                  if (dbOb[childrenUID].TIP === 'Офис') {
                                    category = 'officeRent'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Помещение свободного назначения') {
                                    category = 'freeAppointmentObjectRent'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Здание') {
                                    category = 'buildingRent'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Квартира') {
                                    category = 'flatRent'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Торговая площадь') {
                                    category = 'shoppingAreaRent'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Склад') {
                                    category = 'warehouseRent'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Производство') {
                                    category = 'industryRent'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Гараж') {
                                    category = 'garageRent'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Дом/дача') {
                                    category = 'houseRent'
                                  }
                                  cian = cianItems.rent[category]
                                }
                                if (dbOb[childrenUID].OPP === 'Продажа') {
                                  if (dbOb[childrenUID].TIP === 'Офис') {
                                    category = 'officeSale'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Помещение свободного назначения') {
                                    category = 'freeAppointmentObjectSale'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Здание') {
                                    category = 'buildingSale'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Квартира') {
                                    category = 'flatSale'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Торговая площадь') {
                                    category = 'shoppingAreaSale'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Склад') {
                                    category = 'warehouseSale'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Квартира новостройка') {
                                    category = 'newBuildingFlatSale'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Готовый бизнес') {
                                    category = 'businessSale'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Производство') {
                                    category = 'industrySale'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Гараж') {
                                    category = 'garageSale'
                                  }
                                  if (dbOb[childrenUID].TIP === 'Дом/дача') {
                                    category = 'houseSale'
                                  }
                                }
                                if (dbOb[childrenUID].Category && dbOb[childrenUID].Category !== '') {
                                  category = dbOb[childrenUID].Category
                                }

                                db.rent21ob.create({
                                  uid: childrenUID,
                                  build: uid,
                                  fields: dbOb[childrenUID],
                                  owner: dbOb[childrenUID].SOBST,
                                  category: category,
                                  cian: cian,
                                  exports:dbExport[childrenUID]
                                })


                              }



                            })
                          }
                        }


                        res.json(db.progress)
                      })



                    })

                  })
                })
              })
            })
          })

        }else{
          res.json(db.progress)
        }

/*
        sql = `SELECT DISTINCT UID FROM fields WHERE TIP = 'buid21' `
        connection.query(sql, [], function(err, result) {
          db.progress.total = result.length -1
          db.progress.current = result.length -1
          db.progress.status = 'Импорт помещений'
          mergeAll(db.progress.current, result,()=>{
            res.json(db.progress)
          });
        })
*/
      })
    })
  })
})
